import { NextFunction, Request, Response } from "express";
import authService from "../service/auth_service";

async function login(req: Request, res: Response, next: NextFunction) {
  const {loginId, loginPw} = req.body;
  var accessToken = await authService.login(loginId, loginPw)
  res.header('Authorization', accessToken);
  res.status(200).json(null);
}

export default {
  login
}