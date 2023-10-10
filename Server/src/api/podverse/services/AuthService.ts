import { authenticateQuery } from "../queries";
import db from "../../../database/database";
import { IAuthentication } from "../types/authTypes";

class AuthService {
  async authenticate({ email }: IAuthentication) {
    try {
      const query = authenticateQuery({ email });
      const results = await db.query(query);
      return results.rows;
    } catch (err) {
      return err;
    }
  }
}

export default new AuthService();
