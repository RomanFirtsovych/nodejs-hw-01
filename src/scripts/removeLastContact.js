import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
    try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
        console.log("⚠️ У списку немає контактів для видалення.");
        return;
    }
    const removeContact = contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`✅ Видалено останній контакт:`, removeContact);

    }catch (error) {
        console.error("❌ Помилка видалення контакту:", error.message);
    }
};
removeLastContact();
