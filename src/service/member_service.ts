import { findAll } from "../repository/member_repository";

export function getMembers() {
  return findAll();
}
// module.exports = {
//   getMembers: () => {
//     return findAll();
//   },
// }