import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const ContactLandlord = (listingDetails) => {
  const messageRef = useRef();
  const listingDetail = listingDetails.listingDetails;
  const [isContacted, setIsContacted] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const hasSpecialCharacters = (str) => {
    const pattern = /[^a-zA-Z0-9\s]/;
    return pattern.test(str);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = messageRef.current.value;

    if (message.length === 0) {
      alert("Message cannot be empty.");
      return;
    }

    if (hasSpecialCharacters(message)) {
      alert("Special characters are not allowed in the message.");
      return;
    }

    try {
      const response = await fetch("/api/listing/contactLandlord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, email: currentUser.email }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          setIsContacted(true);
          messageRef.current.value = "";
        }
      } else {
        console.error("Error:", response.statusText);
        setIsContacted(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-md bg-slate-50 flex flex-col justify-between h-full">
      <h1 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 md:text-3xl">
        Contact Landlord
      </h1>
      <div className="flex-grow">
        {!isContacted ? (
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col h-full"
          >
            <textarea
              ref={messageRef}
              placeholder="Please enter your message here"
              name="message"
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 my-2.5 flex-grow"
              required
            ></textarea>
            <input type="hidden" name="email" value={currentUser.email} />
            <input
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />
          </form>
        ) : (
          <div>
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully to the landlord.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactLandlord;
