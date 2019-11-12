import React from "react";
import { hot, setConfig } from "react-hot-loader";
setConfig({ logLevel: "debug" });

class Root extends React.Component {
  render() {
    return <div>lol</div>;
  }
}
export default hot(module)(Root);
