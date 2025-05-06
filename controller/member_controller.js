const authService = require('../service/auth_service');
const memberService = require('../service/member_service.js');

module.exports = {
  createMember: (req, res, next) => {
    const {loginId, loginPw, nickname} = req.body;
    authService.signup(loginId, loginPw, nickname)
    .then(({id, loginId, nickname}) => res.status(201).json({
      id,
      loginId,
      nickname
    }))
    .catch(next);
  },
  getAllMembers: (req, res, next) => {
    memberService.getMembers()
    .then(members => members.map(m => {
      return {
        id: m.id,
        loginId: m.loginId,
        nickname: m.nickname
      }
    }))
    .then(members => res.json(members))
    .catch(next);
  },
}