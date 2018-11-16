import React from "react";

class SSRTest extends React.Component {
  constructor(props) {
    super(props);

    let data;
    if (__isBrowser__) {
      data = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      data = this.props.data;
    }

    this.state = {
      data
    };

    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert() {
    alert("Ive been clicked!");
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Hello from SSR Test</h1>
        <div onClick={this.handleAlert}>Click me!</div>
        <ul>
          {data.map(repo => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SSRTest;
