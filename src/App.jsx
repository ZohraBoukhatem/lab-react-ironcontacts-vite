import { useContext, useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleAdd = () => {
    const randomContact =  allContacts[Math.floor(Math.random() * allContacts.length)]
    !contacts.includes(randomContact) && setContacts([...contacts, randomContact]) 
  }

  const handleDelete = (id) => {
   const filteredContacts = contacts.filter((contact) => {
      return contact.id != id
    })
  setContacts(filteredContacts)
  console.log("deleted contact with id: ",id)
  }

  const sortByName = () => {
  const contactsByName = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(contactsByName);
    console.log(contactsByName)
  }
  
  const sortByPopularity = () => {
    const contactsByPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(contactsByPopularity);
    console.log(contactsByPopularity)
  }

  return (
    <div>
    <button className="button" onClick={handleAdd}>Add random contact</button>
    <button className="button" onClick={sortByName}>Sort by name</button>
    <button className="button" onClick={sortByPopularity}>Sort by popularity</button>
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
        <tbody className="card">
          {contacts.map((contact) => {
            return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="contact picture" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar ? <td>🏆</td> : <td></td>}
                  {contact.wonEmmy ? <td>🌟</td> : <td></td>}
                  <td><button className="button" onClick={() => handleDelete(contact.id)}>Delete</button></td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
