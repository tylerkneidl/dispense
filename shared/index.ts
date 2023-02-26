export interface UserInfo {
    name: string
    email: string
    address?: string
  }
  
  export interface User extends UserInfo {
    id: string;
  }