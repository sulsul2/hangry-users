export interface User {
    id: string;
    name: string;
    email: string;
    dateOfBirth: string;
  }
  
  export let users: User[] = []; // local memory