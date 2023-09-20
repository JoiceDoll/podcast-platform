import { Request, Response } from "express";
import FindAnAccount from "../services/findAccountServices";
import bcrypt from "bcrypt";


async function verifyAccount(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(email, password)
  try {
    // bcrypt.compare(password, senhaArmazenada, (err, result) => {
    //   if (err) {
    //     console.error(err);
    //   } else if (result) {
    //     console.log('Senha correta! O usuário está autenticado.');
    //   } else {
    //     console.log('Senha incorreta! Acesso negado.');
    //   }});
    const selects:any = await FindAnAccount.find();
    console.log(selects)
 

      // Agora você pode fazer o que desejar com o valor 'email'
      return res.status(200).json(selects);

    

    
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
    return res.status(500).json({ error: "Erro ao buscar contas" });
  }
}

export default verifyAccount;
