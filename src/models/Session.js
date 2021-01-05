import { getExpire } from "../utils/getExpire.js"

class Session {
  constructor(id) {
    this.sessionId = id;
    this.groups = [];
    this.currentGroup = null;
    this.pendingGroups = [];
    this.expire = getExpire();
  }
}

export default Session;