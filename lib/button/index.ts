class Storage {
  private static instance: Storage;
  private constructor() {
    if (!Storage.instance) {
      Storage.instance = this;
    }
    return Storage.instance;
  }

  static useBoolean(value = 0) {
    return value;
  }
}

export { Storage };
