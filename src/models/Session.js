class Session {
  constructor(id) {
    this.sessionId = id;
    this.groups = [];
    this.currentGroup = null;
    this.pendingGroups = [];
    this.expire = null;
  }
}

export default Session;