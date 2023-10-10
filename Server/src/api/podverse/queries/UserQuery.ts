import { IRegisterQueryUser } from "../types/userTypes";

export const UserQuery = ({
  name,
  email,
  hashedPassword,
}: IRegisterQueryUser) => {
  return `INSERT INTO podverse.users(name,email,password) VALUES ('${name}','${email}','${hashedPassword}')`;
};

export const userAlreadyExists = (email: string) => {
  return `SELECT * FROM podverse.users WHERE email='${email}'`;
};
