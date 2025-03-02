import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...existingContacts, newContact];
        await writeContacts(updatedContacts);
        console.log(`✅ Додано новий контакт:`, newContact);
    } catch (error) {
        console.error("❌ Помилка додавання контакту:", error.message);
    }
};

addOneContact();
