type Role = "admin" | "user" | "guest";

type user = {
    id : number;
    name : string;
    role : Role;
}

function getPermission(role : Role): string[]{
    if ( role === "admin") return ["read","write","delete"];
    if (role === "user") return ["read", "write"];
    return ["read"];
}

let user1 : user = {
    id : 1,
    name : "Harsh",
    role : "admin",

}

console.log(getPermission(user1.role));