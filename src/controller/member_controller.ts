import { NextFunction, Request, Response } from "express";
import authService from "../service/auth_service";
import { getMembers } from "../service/member_service";

export function createMember(req: Request, res: Response, next: NextFunction) {
  const {loginId, loginPw, nickname} = req.body;
  authService.signup(loginId, loginPw, nickname)
  .then(({id, loginId, nickname}) => res.status(201).json({
    id,
    loginId,
    nickname
  }))
  .catch(next);
}

export function getAllMembers(req: Request, res: Response, next: NextFunction) {
  getMembers()
  .then(members => members.map(m => {
    return {
      id: m.id,
      loginId: m.loginId,
      nickname: m.nickname
    }
  }))
  .then(members => res.json(members))
  .catch(next);
}