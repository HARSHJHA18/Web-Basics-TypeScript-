async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log("Users:", data);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        console.log("Operation finished");
    }
}
fetchUsers();
export {};
