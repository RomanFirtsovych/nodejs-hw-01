import fs from "fs/promises";
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContacts = createFakeContact();
        const updatedContacts = [...existingContacts, newContacts];
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
        console.log(`✅ Додано новий контакт:`, newContacts);
    } catch (error) {
        console.error("❌ Помилка додавання контакту:", error.message);
    }
};

addOneContact();
