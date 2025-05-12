import bcrypt from "bcrypt";

const saltRounds = 10;

function encrypt(row: string) {
  return bcrypt.hash(row, saltRounds);
}

function isMatch(row: string, encrypted: string) {
  return bcrypt.compare(row, encrypted)
}

export default {
  encrypt,
  isMatch
}