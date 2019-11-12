export default class Api {
  static connect(params) {
    const ws = new WebSocket(params.url);
    ws.onmessage = ({ data }) => params.onRefresh(JSON.parse(data));
  }
}
