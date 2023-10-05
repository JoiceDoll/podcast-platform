import { Request, Response } from "express";
class UserController {
  store(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body;
try{


}catch(err){
    
}


  }
}

export default new UserController();
