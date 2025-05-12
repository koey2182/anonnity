import memberRepository from "../repository/member_repository";

export function getMembers() {
  return memberRepository.findAll();
}