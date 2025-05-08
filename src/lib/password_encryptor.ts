import bcrypt from "bcrypt";

const saltRounds = 10;

export async function encrypt(row: string) {
  return bcrypt.hash(row, saltRounds);
}