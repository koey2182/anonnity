import { NextFunction, Request, Response } from "express";
import authService from "../service/auth_service";

export function login(req: Request, res: Response, next: NextFunction) {
  const {loginId, loginPw} = req.body;
  authService.login(loginId, loginPw)
  .then()
  .catch(next);
}