import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      //make sure to add try..catch in async function
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const json = await response.json();
        //jason is an array of objects already
        setContacts(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <>
      {contacts.length === 0 ? "Loading..." : ""}
      <table className="contactTable">
        <thead>
          <tr>
            <th colSpan={3}>Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>Click on a contact to see more</td>
          </tr>
          <tr className="tableCategories">
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => {
            //key needs to be added here, it cannot be added to the tr element in ContactRow
            // add an onClick={SelectedContact(contact)}
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
