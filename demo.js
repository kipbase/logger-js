import LoggerJS from './lib/index.js';

const a1 = LoggerJS.getLoggerInstance({
  namespace: 'test',
  logLevel: LoggerJS.logLevelEnum.Warn
});


console.log(a1);