interface userConfigInterface {
  namespace: string,
  logLevel?: LogLevel
}

interface constructConfigInterface {
  namespace: string,
  logLevel: LogLevel
}

enum LogLevel {
  Default = 'default',
  Info = 'info',
  Warn = 'warn',
  Error = 'error'
}
class LoggerJS {
  static anonymousCount = 0;
  static logLevelEnum = LogLevel;

  private namespace: string;
  private logLevel: LogLevel;
  constructor (config: constructConfigInterface) {
    const { namespace, logLevel } = config;
    this.namespace = namespace;
    this.logLevel = logLevel;
  }

  static getLoggerInstance (config?: string | userConfigInterface ): LoggerJS {
    const params: constructConfigInterface = {
      namespace: '',
      logLevel: LogLevel.Default
    };

    console.log(config);
    if (!config) {
      params.namespace = `anonymous ${this.anonymousCount++}`;
    } else if (typeof config === 'string') {
      params.namespace = config;
    } else if (typeof config === 'object') {
      if ('namespace' in config) {
        params.namespace = config.namespace;
      }
      if ('logLevel' in config && config.logLevel) {
        params.logLevel = config.logLevel;
      }
    } else {
      params.namespace = `anonymous ${this.anonymousCount++}`;
    }

    console.log(params);

    const loggerInstance = new LoggerJS(params);

    return loggerInstance;
  }

  log () {
    console.log(123);
  }

  public getNamespace (): string {
    return this.namespace;
  }
}

export default LoggerJS;