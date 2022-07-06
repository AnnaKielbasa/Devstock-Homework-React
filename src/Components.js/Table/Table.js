import React, { useState } from "react";
import tableData from "./mock.json";
import { nanoid } from "nanoid";
function Table() {
  // UseState 6
  const [contacts, setContacts] = useState(tableData);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const newFormData = { ...addFormData };

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    addFormData[fieldName] = fieldValue;
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  return (
    <>
      <div>Table</div>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Adress</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, fullName, address, phoneNumber, email }) => (
            <tr key={id}>
              {/* <td>{contact.id}</td> */}
              <td key={fullName}>{fullName}</td>
              <td key={address}>{address}</td>
              <td key={phoneNumber}>{phoneNumber}</td>
              <td key={email}>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name.."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an adress.."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number.."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email.."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Table;
