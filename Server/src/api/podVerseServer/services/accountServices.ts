import { IRegister } from "../types";
import db from "../../../config/database";

class CreateAccount {
  async account({ nameData, emailData, hashedPassword }: IRegister) {
    console.log(nameData, emailData, hashedPassword);
    try {
      await db.connect(),
        await db.query(
          `INSERT INTO clients (name, email, password) VALUES ('${nameData}', '${emailData}', '${hashedPassword}')`
        ),
        await db.end();
    } catch (err) {
      return err;
    }
  }
}

export default new CreateAccount();
