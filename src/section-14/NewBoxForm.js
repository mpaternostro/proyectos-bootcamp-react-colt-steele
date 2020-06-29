import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      backgroundColor: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({ height: "", width: "", backgroundColor: "" });
  }

  onChange(evt) {
    let { name, value } = evt.target;
    if (name === "height" || name === "width") value = Number(value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="NewBoxForm">
        <div>
          <label htmlFor="height">Height: </label>
          <input
            id="height"
            name="height"
            type="number"
            onChange={this.onChange}
            value={this.state.height}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            id="width"
            name="width"
            type="number"
            onChange={this.onChange}
            value={this.state.width}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            id="backgroundColor"
            name="backgroundColor"
            onChange={this.onChange}
            value={this.state.backgroundColor}
            required={true}
          />
        </div>
        <button>New Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
