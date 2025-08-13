export default function Location() {
  return (
    <div className="">
      <h1 className="font-bold text-3xl py-5">Our Location</h1>
      <div className="flex justify-center">
        <iframe
          className="w-[370px] h-[300px] md:w-[1000px] md:h-[500px]"
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1485485631365!2d81.6130234745713!3d28.59532008577116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a28590881b7405%3A0x9db87a65faae4b3e!2sSwargadwari%20dental%20care%20home!5e0!3m2!1sen!2snp!4v1749896165892!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
