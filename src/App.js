import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      item: ""
    };

    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://dictionaryapi.com/api/v3/references/spanish/json/test?key=bd7705f4-4604-4d56-89d1-53bf64c3d303"
    )
      .then(response => response.json())
      .then(meta => this.setState({ titles: meta }));
  }

  getItems() {
    this.setState({
      item: this.state.item
    });
  }

  handleChange = event => {};

  render() {
    return (
      <div className="App">
        <h1>Translator App</h1>
        <input type="text" />
        <button>Submit</button>
      </div>
    );
  }
}
