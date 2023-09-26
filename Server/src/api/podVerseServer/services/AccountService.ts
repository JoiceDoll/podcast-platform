import { IRegisterAccount } from "../types/RegisterAccountTypes";
import db from "../../../database/database";
import { RegisterAccount } from "../queries";
class CreateAccount {
  async store({ nameData, emailData, hashedPassword }: IRegisterAccount) {
    try {
      const query = RegisterAccount(nameData, emailData, hashedPassword);
      return await db.query(query);
    } catch (err) {
      return err;
    }
  }
  // async access({ nameData, emailData, hashedPassword }: IRegister) {
  //   console.log(nameData, emailData, hashedPassword);
  //   try {
  //     await db.connect(),
  //       await db.query(
  //         `INSERT INTO clients (name, email, password) VALUES ('${nameData}', '${emailData}', '${hashedPassword}')`
  //       ),
  //       await db.end();
  //   } catch (err) {
  //     return err;
  //   }
  // }
}

export default new CreateAccount();
