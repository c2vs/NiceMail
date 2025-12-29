export interface Inbox {
  mailbox: string;
  id: string;
  from: string;
  to: string[];
  subject: string;
  date: string;
  size: number;
  seen: boolean;
}

export interface Message {
  mailbox: string;
  id: string;
  from: string;
  to: string[];
  subject: string;
  date: string;
  size: number;
  seen: boolean;
  body: {
    text: string;
    html: string;
  };
}
