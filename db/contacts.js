const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contactsPath = path.resolve(__dirname, "./db/contacts.json");
async function listContacts() {
    const data = await fs.readFile(contactsPath)
}