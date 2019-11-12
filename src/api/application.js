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
    this.destination = destination;
    return this;
  }

  atIndex(index = 0) {
    this.api.ws.send(
      JSON.stringify({
        controller: "JobOffers",
        action: "move",
        user: this.userToMove,
        destination: this.destination,
        index
      })
    );
  }
}

export default new ApplicationApi(Api);
