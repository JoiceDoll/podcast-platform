export const FindAccount = (emailData: string) => {
  return `SELECT * FROM podverse.users WHERE email='${emailData}'`;
};
