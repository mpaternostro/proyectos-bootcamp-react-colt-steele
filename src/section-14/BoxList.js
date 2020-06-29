import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ height: 100, width: 100, backgroundColor: "purple" }],
    };
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  addBox(box) {
    const { boxes: newBoxes } = this.state;
    newBoxes.push(box);
    this.setState({ boxes: newBoxes });
  }

  deleteBox(boxIdx) {
    const { boxes } = this.state;
    const newBoxes = [...boxes.slice(0, boxIdx), ...boxes.slice(boxIdx + 1)];
    this.setState({ boxes: newBoxes });
  }

  render() {
    const boxes = this.state.boxes.map((box, idx) => (
      <Box style={box} deleteBox={this.deleteBox} index={idx} key={uuidv4()} />
    ));

    return (
      <div>
        <h1>Box Maker!</h1>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
