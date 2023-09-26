import db from "../../../database/database";

class FindAnAccount {
  async find() {
    try {
      await db.connect();
     const results =  await db.query(`SELECT * FROM clients`);
      await db.end();
      return(results.rows)
    } catch (err) {
      console.log(err);
    }
  }
}

export default new FindAnAccount();
