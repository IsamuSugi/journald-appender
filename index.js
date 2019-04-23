const Journald = require('systemd-journald');

const prio = {
  ALL: 'debug',
  TRACE: 'debug',
  DEBUG: 'debug',
  INFO: 'info',
  NOTICE: 'notice', // It is not defined in log4js
  WARN: 'warning',
  ERROR: 'err',
  FATAL: 'crit',
  CRIT: 'crit', // It is not defined in log4js
  ALERT: 'alert', // It is not defined in log4js
  EMERG: 'emerg', // It is not defined in log4js
  MARK: 'emerg',
  OFF: '',
};

function configure(config) {
  const { defaultFields } = config;

  const log = new Journald(defaultFields);

  return (loggingEvent) => {
    const priority = prio[loggingEvent.level.levelStr];
    const message = loggingEvent.data[0];
    const fields = loggingEvent.data[1];
    log[priority](message, fields);
  };
}

module.exports.configure = configure;
