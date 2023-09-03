import { IRegister } from "../types";
import db from "../../../config/database";

class CreateAccount {
  async account({ nameData, emailData, hashedPassword }: IRegister) {
    await db.connect(),
      await db.query(
        `INSERT INTO clients (name, email, password) VALUES ('${nameData}', '${emailData}', '${hashedPassword}')`
      ),
      await db.end();
  }
}

export default new CreateAccount();
