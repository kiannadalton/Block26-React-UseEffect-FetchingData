import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {/* null is falsey, so we don't need to type 'selectedContactId === null' */}
      {selectedContactId ? (
        <div>
          <ContactList setSelectedContactId={setSelectedContactId} />
          <SelectedContact
            setSelectedContactId={setSelectedContactId}
            selectedContactId={selectedContactId}
          />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
