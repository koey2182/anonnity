import db from "../database/anonnity_db";
import ApiError from "../errors/api_error";

export function isExistsLoginId(loginId: string) {
  return db.one('SELECT is_exists_login_id($1) AS is_exists;', [loginId])
  .then(({is_exists}) => is_exists);
}

export function isExistsNickname(nickname: string) {
  return db.one('SELECT is_exists_nickname($1) AS is_exists;', [nickname])
  .then(({is_exists}) => is_exists);
}

export function findAll() {
  return db.any('SELECT * FROM find_all_members();')
  .then(members => members.map(m => {
    return {
      id: m.id,
      loginId: m.login_id,
      encryptedLoginPw: m.encrypted_login_pw,
      nickname: m.nickname
    }
  }))
}

type Member = {
  loginId: string,
  encryptedLoginPw: string,
  nickname: string
}

export function insertMember({loginId, encryptedLoginPw, nickname}: Member) {
  return isExistsLoginId(loginId)
  .then(isExists => {
    if (isExists) throw new ApiError(409, "CONFLICT_LOGIN_ID", "이미 존재하는 로그인 아이디입니다.");
  })
  .then(() => isExistsNickname(nickname))
  .then(isExists => {
    if (isExists) throw new ApiError(409, "CONFLICT_NICKNAME", "이미 존재하는 닉네임입니다.");
  })
  .then(() => db.one('SELECT insert_member($1, $2, $3) AS id;', [loginId, encryptedLoginPw, nickname])) 
  .then(({id}) => {
    return {
      id,
      loginId,
      encryptedLoginPw,
      nickname
    }
  })
}