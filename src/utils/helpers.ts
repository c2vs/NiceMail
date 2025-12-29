import { randomFillSync } from 'crypto';
import { DOMAINS } from '../constants';

const generateRequestId = (): string => {
  const t = new Uint8Array(16);
  randomFillSync(t);
  return Array.from(t, (r: number) => r.toString(16).padStart(2, '0')).join('');
};

export const buildHeaders = () => {
  return {
    'x-request-id': generateRequestId(),
    'x-timestamp': Math.floor(new Date().getTime() / 1000).toString(),
  };
};

export const extractJWT = (text: string): string =>
  text.match(/eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/)![0];

export const generateMail = (): string => {
  return `usermjr61${Math.random().toString(36).substring(2, 9)}@${DOMAINS[Math.floor(Math.random() * DOMAINS.length)]}`;
};
