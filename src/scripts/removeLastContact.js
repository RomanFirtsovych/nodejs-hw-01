import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            console.log("⚠️ У списку немає контактів для видалення.");
            return;
        }
        const removedContact = contacts.pop();
        await writeContacts(contacts);
        console.log(`✅ Видалено останній контакт:`, removedContact);
    } catch (error) {
        console.error("❌ Помилка видалення контакту:", error.message);
    }
};

removeLastContact();
