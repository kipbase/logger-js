class LoggerJS {
  static config: Record<string, unknown>

  private namespace: string
  constructor (instanceConfig: Record<string, unknown>) {
    
  }

  log () {

  }

  public getNamespace (): string {
    return this.namespace
  }
}

export default LoggerJS