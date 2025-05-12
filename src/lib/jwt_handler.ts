import jwt from 'jsonwebtoken';
import appConfig from '../app_config';

const secretKey = appConfig.jwtSecretKey;

function createMemberAccessToken(memberId: number, roles: string[]): string {
  const claims = {
    'tokenType': 'access',
    'memberId': memberId,
    "roles": roles
  };

  return jwt.sign(claims, secretKey, {
    expiresIn: '30m'
  });
}

export default {
  createMemberAccessToken
}