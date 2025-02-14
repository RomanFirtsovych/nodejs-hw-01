import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () => createFakeContact());
    const updatedContacts = [...existingContacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log(`✅ Успішно додано ${number} контактів!`);
  } catch (error) {
    console.error("❌ Помилка генерації контактів:", error.message);
  }
};


generateContacts(5);
