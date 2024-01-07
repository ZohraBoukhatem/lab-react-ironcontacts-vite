import { useContext, useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));


  const handleAdd = () => {
    const randomContact =  allContacts[Math.floor(Math.random() * allContacts.length)]
    console.log("added: ", randomContact)
    !contacts.includes(randomContact) && setContacts([...contacts, randomContact]) 
  }

  const handleDelete = (id) => {
   const filteredContacts = contacts.filter((contact) => {
      return contact.id != id
    })
  setContacts(filteredContacts)
  console.log("deleted contact with id: ",id)
  }

  const sortByName = () => {}
  const sortByPopularity = () => {}
  
  return (
    <>
    <button onClick={handleAdd}>Add random contact</button>
    <button onClick={sortByName}>Sort by name</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an oscar</th>
            <th>Won an emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="contact picture" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar && <td>🏆</td>}
                  {contact.wonEmmy && <td>🌟</td> }
                  <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
