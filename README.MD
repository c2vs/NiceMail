# MailPorary

Simple API Wrapper of https://mailporary.com/ru for pentesting, accounts making and testing. Doesn't have limitations, only your needs.

### Installation

```bash
npm i mailporary
```

### Examples

```typescript
import { MailPorary } from 'mailporary';

(async () => {
  const mailporary = new MailPorary();
  await mailporary.authorize();
  const mail = mailporary.getMail();
  const messages = await mailporary.getInbox(mail);

  if (messages.length) {
    const message = await mailporary.getMessage(mail, messages[0].id);
    console.log(message.body.text);
  }
})();
```
