import { encrypt } from "../lib/password_encryptor";
import { insertMember } from "../repository/member_repository";

function signup(loginId: string, loginPw: string, nickname: string) {
  return encrypt(loginPw)
  .then(encryptedLoginPw => {
    return {
      loginId,
      encryptedLoginPw,
      nickname
    }
  })
  .then(insertMember)
}

function login(loginId: string, loginPw: string) {

}

export default {
  signup,
  login
}