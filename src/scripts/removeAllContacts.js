import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
        console.log("✅ Усі контакти успішно видалені!");
    } catch (error) {
        console.error("❌ Помилка видалення контактів:", error.message);
    }
};

removeAllContacts();
