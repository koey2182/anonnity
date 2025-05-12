import ApiError from "../errors/api_error";
import passwordEncryptor from "../lib/password_encryptor";
import jwtHandler from "../lib/jwt_handler";
import memberRepository from "../repository/member_repository";

function signup(loginId: string, loginPw: string, nickname: string) {
  return passwordEncryptor.encrypt(loginPw)
  .then(encryptedLoginPw => {
    return {
      loginId,
      encryptedLoginPw,
      nickname
    }
  })
  .then(memberRepository.insertMember)
}

async function login(loginId: string, loginPw: string) {
  const member = await memberRepository.findMemberByLoginId(loginId);
  if (!member) {
    throw new ApiError(404, "NOTFOUND_LOGIN_ID", "존재하지 않는 로그인 아이디입니다.");
  }

  const isMatch = await passwordEncryptor.isMatch(loginPw, member.encryptedLoginPw);
  if (!isMatch) {
    throw new ApiError(401, "INVALID_LOGIN_PW", "비밀번호가 옳지 않습니다.");
  }

  const roles = ['ROLE_MEMBER'];
  return jwtHandler.createMemberAccessToken(member.id, roles);
}

export default {
  signup,
  login
}