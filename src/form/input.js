import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div style={{ display: "flex",padding:"0.2rem 0" }}>
        <span style={{width:"100px"}}>{this.props.title}：</span>
        <input onChange={this.getVal} />
      </div>

    )
  }
  getVal = (e) => {
    this.props.back(this.props.title, e.target.value)
  }
}

export default Input;