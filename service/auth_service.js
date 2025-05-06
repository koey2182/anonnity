const encryptor = require('../lib/password_encryptor');
const memberRepository = require('../repository/member_repository');

module.exports = {
  signup: (loginId, loginPw, nickname) => {
    return encryptor.encrypt(loginPw)
    .then(encryptedLoginPw => {
      return {
        loginId,
        encryptedLoginPw,
        nickname
      }
    })
    .then(memberRepository.insertMember)
  },
};