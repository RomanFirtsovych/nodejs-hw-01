import { writeContacts } from "../utils/writeContacts.js"; // Використання утиліти

export const removeAllContacts = async () => {
    try {
        await writeContacts([]); // Використання утиліти writeContacts
        console.log("✅ Усі контакти успішно видалені!");
    } catch (error) {
        console.error("❌ Помилка видалення контактів:", error.message);
    }
};

removeAllContacts();
