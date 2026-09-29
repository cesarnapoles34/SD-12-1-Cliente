// Task 3: addUser(first_name, last_name, email)
// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export function addUser(first_name, last_name, email) {
    fetch(getServerURL() + "/users")
        .then(response => response.json())
        .then(users => {
            const newId = Math.max(...users.map(u => u.id)) + 1;
            return fetch(getServerURL() + "/users", {
                method: "POST",
                body: JSON.stringify({ id: newId, first_name, last_name, email }),
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            });
        });
}
