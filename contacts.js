const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      console.table(contacts);
    })
    .catch((error) => {
      console.error("Error reading contacts:", error);
    });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      const contact = contacts.find((contact) => contact.id === contactId);
      if (contact) {
        console.table([contact]);
        return;
      }
      return console.log("Contact not found");
    })
    .catch((error) => {
      console.error("Error reading contacts:", error);
    });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      let contacts = JSON.parse(data);
      contacts = contacts.filter((contact) => contact.id !== contactId);
      console.log("Contact removed successfully");
      return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    })
    .catch((error) => {
      console.error("Error reading or writing contacts:", error);
    });
}

function generateID() {
  return Math.random().toString(36);
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      let contacts = JSON.parse(data);
      const newContact = {
        id: generateID(),
        name,
        email,
        phone,
      };

      const checkPhone = contacts.find((contact) => contact.phone === phone);
      if (checkPhone) {
        return console.log("Contact with this phone number already exists");
      }

      contacts.push(newContact);
      console.log("Contact added successfully");
      return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    })
    .catch((error) => {
      console.error("Error reading or writing contacts:", error);
    });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
