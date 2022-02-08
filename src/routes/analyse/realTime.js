import React from "react";
import Input from "../../form/input";
import NetApis from "../../utils/Api";

class RealTime extends React.Component {
  render() {
    return (
      <div>
        <Input title="name" back={this.getVal} />
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
  constructor(props) {
    super(props)
    this.data = {}
  }
  getVal = (title, value) => {
    this.data["title"] = value;
  }
  submit = () => {
    console.log(this.data);
    NetApis.Post("", this.data, (res) => {
      console.log(res)
    }, (error) => {
      console.error()
    })
  }
}

export default RealTime;