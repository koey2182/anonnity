const memberRepository = require('../repository/member_repository');

module.exports = {
  getMembers: () => {
    return memberRepository.findAll();
  },
}