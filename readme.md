# Contacts Management CLI Application

This is a command-line interface (CLI) application for managing contacts. It allows you to perform various actions such as listing contacts, adding a new contact, removing a contact, and retrieving a specific contact by ID.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

## Usage

The application supports the following commands:

- `list`: Displays the list of contacts. [Screenshot](https://ibb.co/syX2S1J)
- `get --id <contactId>`: Retrieves a contact by its ID. [Screenshot](https://ibb.co/CKddZyx)
- `add --name <name> --email <email> --phone <phone>`: Adds a new contact. [Screenshot](https://ibb.co/S55M3kC)
- `remove --id <contactId>`: Removes a contact by its ID. [Screenshot](https://ibb.co/KXrNrN0)

Example usage:

- node index.js --action list
- node index.js --action get --id <contactId>
- node index.js --action add --name "John Doe" --email "john@example.com" --phone "123-456-7890"
- node index.js --action remove --id <contactId>

## Technologies Used

- Node.js
- Commander (for command-line parsing)

## Project Structure

- `index.js`: Entry point of the application.
- `contacts.js`: Module handling contact operations.
- `db/contacts.json`: JSON file storing contact data.

## Author

michalwojcik4
