import { writable } from "svelte/store";
const user = writable({username:null, jwt:1}); // jwt : JSON Web Token
export default user;