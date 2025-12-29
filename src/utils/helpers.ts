import { randomFillSync } from 'crypto';

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
