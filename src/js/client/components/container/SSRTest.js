import React from "react";

class SSRTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("pokemon", this.props.pokemon);
    console.log("test", this.props.test);
    return <div>Hello from SSR Test</div>;
  }
}

export default SSRTest;
