function getPermission(role) {
    if (role === "admin")
        return ["read", "write", "delete"];
    if (role === "user")
        return ["read", "write"];
    return ["read"];
}
let user1 = {
    id: 1,
    name: "Harsh",
    role: "admin",
};
console.log(getPermission(user1.role));
export {};
