import Api from ".";

class ApplicationApi {
  constructor(api) {
    this.api = api;
  }

  move(userFirstName) {
    this.userToMove = userFirstName;
    return this;
  }

  to(destination) {
    this.api.ws.send({
      move: {
        user: this.userName,
        destination
      }
    });
  }
}

export default new ApplicationApi(Api);
