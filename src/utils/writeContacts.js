import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(updatedContacts, null, 2);
        await fs.promises.writeFile(PATH_DB, data, 'utf-8');
        console.log("Контакт успішно збережено!");
    } catch (error) {
        console.log("Помилка запису у файл:" , error.message);
    }
};
