import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await response.json();
        setContact(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact();
    // we will likely update [] to [contact]
  }, [contact]);
  return (
    <>
      {selectedContactId ? (
        <div className="selectedContact">
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Username: {contact.username}</p>
          <p>Website: {contact.website}</p>
          <button
            onClick={() => {
              setSelectedContactId(null);
            }}
          >
            Clear Contact Information
          </button>
        </div>
      ) : (
        <p>This is null</p>
      )}
    </>
  );
}
