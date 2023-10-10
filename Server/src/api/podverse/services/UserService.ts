import { IRegisterUser } from "../types/userTypes";
import { UserQuery, userAlreadyExists } from "../queries";
import db from "../../../database/database";
import bcrypt from "bcrypt";
class UserService {
  async store({ name, email, password }: IRegisterUser) {
    try {
      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(password, salt);

      const emailAlreadyExists = userAlreadyExists(email);
      const results = await db.query(emailAlreadyExists);
      const resultsData = results.rows;

      if (resultsData.length === 0) {
        const query = UserQuery({ name, email, hashedPassword });
        await db.query(query);
        return "Success Register!";
      }
      return "Account already exists!";
    } catch (err) {
      return err;
    }
  }
}

export default new UserService();
