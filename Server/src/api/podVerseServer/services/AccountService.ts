import { IRegisterAccount } from "../types/RegisterAccountTypes";
import { IFindAccount } from "../types/FindAccountTypes";
import db from "../../../database/database";
import { RegisterAccount, FindAccount } from "../queries";
class CreateAccount {
  async store({ nameData, emailData, hashedPassword }: IRegisterAccount) {
    try {
      const query = RegisterAccount(nameData, emailData, hashedPassword);
      return await db.query(query);
    } catch (err) {
      return err;
    }
  }
  async access({ emailData }: IFindAccount) {
    try {
      const query = FindAccount(emailData);
      return await db.query(query);
    } catch (err) {
      return err;
    }
  }
}

export default new CreateAccount();
