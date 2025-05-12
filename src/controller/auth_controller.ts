import { NextFunction, Request, Response } from "express";
import authService from "../service/auth_service";
// import LoginId from "../dto/login_id";
// import LoginPw from "../dto/login_pw";

async function login(req: Request, res: Response, next: NextFunction) {
  const {loginId, loginPw} = req.body;
  // const loginIdDto = LoginId.from(loginId);
  // const loginPwDto = LoginPw.from(loginPw);
  var accessToken = await authService.login(loginIdDto, loginPwDto)
  res.header('Authorization', accessToken);
  res.status(200).json(null);
}

export default {
  login
}