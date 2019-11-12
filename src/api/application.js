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
    this.api.ws.send(
      JSON.stringify({
        controller: "JobOffers",
        action: "move",
        user: this.userToMove,
        destination
      })
    );
  }
}

export default new ApplicationApi(Api);
