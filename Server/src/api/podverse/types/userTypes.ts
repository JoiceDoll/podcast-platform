export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterQueryUser {
  name: string;
  email: string;
  hashedPassword: string;
}
