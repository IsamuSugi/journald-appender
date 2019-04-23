# journald-appender

It is an appender to output log to journal using log4js.

log4jsを使ってjournalにlogを出力するためのappenderです。

## Installation

```bash
$ npm install journald-appender --save
```

## Example

```js
import log4js from 'log4js';

log4js.configure({
  levels: {
    NOTICE: { value: 21000, colour: 'green' },
    CRIT: { value: 51000, colour: 'magenta' },
    ALERT: { value: 52000, colour: 'magenta' },
    EMERG: { value: 53000, colour: 'magenta' },
  },
  appenders: {
    journal: {
      type: 'journald-appender',
      defaultFields: {
        syslogIdentifier: 'journal',
        facility: '0',
      },
    },
  },
  categories: {
    development: {
      appenders: ['journal'],
      level: 'all',
    },
  },
});

const log = log4js.getLogger('development');

log.info('message for you.');
```

## License

[MIT](./LICENSE)
