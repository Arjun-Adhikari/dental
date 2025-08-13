import { useState, useEffect, useRef } from "react";
import Abovenav from "../components/abovenav/Abovenav";
import Nav from "../components/nav/Nav";
import axios from "axios";

const Dashboardboard = () => {
  const [eachData, setEachData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dialogueRef = useRef(null);
  const [dialogId, setDialogId] = useState(null); // State to hold the ID of the item to delete

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("https://dental-nu-jade.vercel.app/dashboard");
        const data = response.data;
        if (Array.isArray(data)) {
          setEachData(data);
        } else {
          console.warn("API response was not an array:", data);
          setEachData([]);
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError(
          "Failed to load dashboard data. Please check your network or server."
        );
        setEachData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  // Update openDialogue to accept an ID and set it in state
  const openDialogue = (id) => {
    setDialogId(id);
    dialogueRef.current.showModal();
  };

  const closeDialogue = async () => {
    if (!dialogId) {
      // Check if an ID is available to delete
      dialogueRef.current.close();
      return;
    }

    console.log(dialogId);
    try {
      const response = await axios.delete(
        `https://dental-nu-jade.vercel.app/deldialog/${dialogId}`
      );

      // Use response.status for the status code check
      if (response.status === 200) {
        console.log("Your request is sent to them!!!");
        // Update the state to reflect the deletion
        setEachData((prevData) =>
          prevData.filter((item) => item._id !== dialogId)
        );
      } else {
        console.warn("Delete request did not return status 200.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the dialog", error);
    }

    dialogueRef.current.close();
    setDialogId(null); // Reset the ID after closing
  };

  const cancelDelete = () => {
    dialogueRef.current.close();
    setDialogId(null);
  };

  return (
    <>
      <Abovenav />
      <Nav />
      <div className="bg-[#2B4859] text-white text-2xl p-4 text-center">
        DASHBOARD
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {loading ? (
          <p className="text-center text-blue-600 w-full">
            Loading client details...
          </p>
        ) : error ? (
          <p className="text-center text-red-600 w-full">{error}</p>
        ) : eachData.length > 0 ? (
          eachData.map((item, index) => (
            <ul
              key={item._id || index}
              className="flex flex-col items-start border-2 min-w-[200px] max-w-full sm:max-w-[calc(50%-1rem)] md:max-w-[calc(33.33%-1rem)] lg:max-w-[calc(25%-1rem)] p-4 flex-grow overflow-hidden"
            >
              <li className="underline flex flex-col mb-2 font-semibold items-start ">
                Client {index + 1} Details
                {/* Corrected onClick to pass item._id to openDialogue */}
                <button
                  className="bg-red-500 text-white rounded px-1 py-0.5 no-underline hover:cursor-pointer"
                  onClick={() => openDialogue(item._id)}
                >
                  delete
                </button>
              </li>
              <li className="w-full break-words">
                Name: <span className="font-normal">{item.name}</span>
              </li>
              <li className="w-full break-words">
                Phone: <span className="font-normal">{item.phone}</span>
              </li>
              <li className="w-full break-words">
                Email: <span className="font-normal">{item.email}</span>
              </li>
              <li className="w-full mt-2">
                <span className="font-medium">Message:</span>
                <p className="break-words max-w-full text-sm mt-1">
                  {item.message}
                </p>
              </li>
            </ul>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">
            No client data available.
          </p>
        )}
      </div>

      {/* Moved the dialog outside the map function */}
      <dialog
        ref={dialogueRef}
        className="fixed top-[50vh] left-[5vw] md:top-[50vh] md:left-[40vw] z-20 p-2"
      >
        <h1>Do you want to sure delete this content?</h1>
        {/* The 'Yes' button now calls closeDialogue, which uses the state variable */}
        <button
          className="bg-red-500 hover:cursor-pointer"
          onClick={closeDialogue}
          type="button"
        >
          Yes
        </button>
        <button
          className="bg-gray-500 hover:cursor-pointer"
          onClick={cancelDelete}
          type="button"
        >
          No
        </button>
      </dialog>
    </>
  );
};

export default Dashboardboard;
