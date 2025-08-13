import express from "express";
import ConnectDB from "./DB/db.js";
import loginSchema from "./models/login.model.js";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import connectMongo from "connect-mongo";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import memberSchema from "./models/member.model.js";
import appointmentSchema from "./models/appointment.model.js";
import nodemailer from "nodemailer";
dotenv.config();
const app = express();

app.use(express.json());

// app.use(cors());

app.use(
    cors({
        origin: (origin, callback) => {
            const allowedOrigins = [
                "http://localhost:5173"
            ];
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
        exposedHeaders: ["Set-Cookie"]
    })
);


const MongoStore = new connectMongo({
  mongoUrl: process.env.MONGODBURL,
  collectionName: "sessions",
  ttl: 1000 * 60 * 60 * 24 * 7,
});

app.use(
  session({
    store: MongoStore,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    Cookie: {
      // secure:true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await loginSchema.findOne({ username });
      if (!user) return done(null, false, { message: "User not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) return done(null, user);
      else return done(null, false, { message: "incorrect password" });
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  console.log("we in searlize");
  done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
  try {
    console.log("Inside deselerize user");
    const user = await loginSchema.findById(_id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// This is for nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer transporter verification failed", error);
  } else {
    console.log("Nodemailer transporter verification success", success);
  }
});

// This is for id deletion request
app.delete("/deldialog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await appointmentSchema.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!!" });
    }
    console.log("this id is deleted", id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

//otp request route
app.post("/otp/generate", async (req, res) => {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomOtp = getRandom(100000, 999999);
  console.log(randomOtp);
  req.session.otp = randomOtp;
  req.session.otpExpires = Date.now() + 1.5 * 60 * 1000;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_APP_USER,
    subject: `New signup request in swargadwari dental care home!!!`,
    html: `Don't share this code to third person ,Opt:${randomOtp}`,
  };

  await transporter.sendMail(mailOptions);
  console.log("notification is sent to client!!!");
});

app.post("/otp/otpcheck", (req, res) => {
  const { otp } = req.body;
  if (!otp) {
    res.status(400).json({ message: "This otp is not valid!!" });
  } else {
    const storedOtp = req.session.otp;
    const otpExpires = req.session.otpExpires;

    if (Date.now() > otpExpires) {
      delete req.session.otp;
      return res.status(400).json({ message: "Opt is expired!!" });
    }

    const numericOtp = parseInt(otp);
    if (numericOtp == storedOtp) {
      delete req.session.otp;
      res.status(200).json({ message: "Opt verified successfully" });
    } else {
      res.status(401).json({ message: "Invalid otp" });
    }
  }
});

app.get("/forget_password", async (req, res) => {
  const { username } = req.body;
  const user = await login.find({ name: username });
  if (user) {
    return res.status(200).json({ message: "user found" });
  }
  return;
});

app.get("/dashboard", async (req, res) => {
  console.log("it is working  ");
  const clientdata = await appointmentSchema.find({});
  console.log("this is dashboard backend", clientdata);
  res.status(200).json(clientdata);
});

//appointment
app.post("/appointment", async (req, res) => {
  console.log("appointment is done");
  const { name, phone, email, message } = req.body;
  if (!name || !phone || !email || !message) {
    return res
      .status(500)
      .json({ message: "all fields are required sufficiently" });
  } else {
    res.status(200).json({ message: "appointment is saved" });
    const appointment = new appointmentSchema({
      name,
      phone,
      email,
      message,
    });
    await appointment.save();
  }
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_APP_USER,
    subject: `New appointment Request from :${name}`,
    html: `
    Message:${message}
    `,
  };
  await transporter.sendMail(mailOptions);
  console.log(`Notification is sent to client: ${name}`);
});

app.post("/signup", async (req, res) => {
  try {
    console.log("the request is coming here");
    const { username, gmail, password } = req.body;
    if (!username || !gmail || !password) {
      return res
        .status(404)
        .json({ message: "username,gmail,password not found!!!" });
    } else {
      const hashedPass = await bcrypt.hash(password, 10);
      const newUser = new loginSchema({
        username,
        gmail,
        password: hashedPass,
      });
      console.log("new user", newUser);
      await newUser.save();
      res.status(201).json({ message: "user registered" });
    }
  } catch (error) {
    res.status(500).json({
      error: "error during registering user",
      message: error,
    });
  }
});

app.post("/login", passport.authenticate("local"), async (req, res) => {
  console.log("login is working properly");
  req.session.save((err) => {
    if (err) {
      return res.status(500).json({ error: "Session save failed" });
    } else {
      res.status(200).json({ message: "login success" });
    }
  });
});

app.post("/api/addmember", async (req, res) => {
  const { name, speciality, tag } = req.body;
  if (!name || !speciality || !tag) {
    if (!name) {
      errors.push("Name is required.");
    }
    if (!speciality) {
      errors.push("Speciality is required.");
    }
    if (!tag) {
      errors.push("Tag is required.");
    }
    if (errors.length > 0) {
      return res.status(400).json({ messages: errors });
    }
  } else {
    const Memberdata = new memberSchema({
      name: name,
      speciality: speciality,
      tag: tag,
    });
    await Memberdata.save();
    res.status(201).json({ message: "Members are added successfully" });
  }
});

async function StartServer() {
  try {
    await ConnectDB();
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port:${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error during starting server", error.message);
  }
}
StartServer();
