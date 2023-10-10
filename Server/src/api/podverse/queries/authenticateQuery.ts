import { IAuthentication } from "../types/authTypes";

export const authenticateQuery = ({ email }: IAuthentication) => {
  return `SELECT id, name, email FROM podverse.users WHERE email='${email}'`;
};
