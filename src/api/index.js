import config from "../config";

class Api {
  constructor({ url }) {
    this.ws = new WebSocket(url);
  }

  onRefresh(fn) {
    this.ws.onmessage = ({ data }) => fn(JSON.parse(data));
  }
}

export default new Api(config);
