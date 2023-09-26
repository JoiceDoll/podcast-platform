export const RegisterAccount = (
  nameData: string,
  emailData: string,
  hashedPassword: string
) => {
  return `INSERT INTO podverse.users (name, email, password) VALUES ('${nameData}', '${emailData}', '${hashedPassword}')`;
};
