type LoginId = string;

const loginIdRegex = /^[a-zA-Z0-9_]{4, 20}$/;

function from(loginId: string): LoginId {
  if (!loginIdRegex.test(loginId)) {
    throw new TypeError('로그인 아이디는 언더바(_), 영문대소문자, 숫자로 이루어져야 하며 4자 이상 20자 이하여야 합니다.');
  }

  return loginId;
}

export default {
  from
}