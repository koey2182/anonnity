import { encrypt } from "../lib/password_encryptor";
import { insertMember } from "../repository/member_repository";
// const memberRepository = require('../repository/member_repository');

export function signup(loginId: string, loginPw: string, nickname: string) {
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

// module.exports = {
//   signup: (loginId, loginPw, nickname) => {
//     return encrypt(loginPw)
//     .then(encryptedLoginPw => {
//       return {
//         loginId,
//         encryptedLoginPw,
//         nickname
//       }
//     })
//     .then(insertMember)
//   },
// };