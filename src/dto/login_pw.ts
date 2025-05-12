type LoginPw = string;

const loginPwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\-!@#$%^&*()_+=\[\]{};:'",.<>?\/|~`]).{8,24}$/;

function from(loginPw: string): LoginPw {
  if (!loginPwRegex.test(loginPw)) {
    throw new TypeError('로그인 비밀번호는 영문 대소문자와 특수문자, 숫자로 이루어져야 하며 8자 이상 24자 이하여야 합니다.');
  }

  return loginPw;
}

export default {
  from
};