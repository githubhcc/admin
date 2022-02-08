import React from "react";
import Input from "../../form/input";
import NetApis from "../../utils/Api";

class WaitSending extends React.Component {
  render() {
    return (
      <div>
        <Input title="trade_no" back={this.getVal} />
        <Input title="logistics" back={this.getVal} />
        <Input title="logisticsno" back={this.getVal} />
        from_addr：
        <div style={{ paddingLeft: "20px" }}>
          <Input title="receiver" back={this.getFormVal} />
          <Input title="phone" back={this.getFormVal} />
          <Input title="location" back={this.getFormVal} />
          <Input title="detailaddr" back={this.getFormVal} />
        </div>
        to_addr：
        <div style={{ paddingLeft: "20px" }}>
          <Input title="receiver" back={this.getToVal} />
          <Input title="phone" back={this.getToVal} />
          <Input title="location" back={this.getToVal} />
          <Input title="detailaddr" back={this.getToVal} />
        </div>

        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
  constructor(props) {
    super(props)
    this.data = {
      from_addr: {
        aid: 0,
        detailaddr: "",
        isdefault: true,
        latest: "",
        location: "",
        phone: "",
        receiver: ""
      },
      logistics: "",
      logisticsno: "",
      to_addr: {
        aid: 0,
        detailaddr: "",
        isdefault: true,
        latest: "",
        location: "",
        phone: "",
        receiver: ""
      },
      token: sessionStorage.token,
      trade_no: ""
    }
  }
  getVal = (title, value) => {
    this.data[title] = value;
  }
  getFormVal = (title, value) => {
    this.data.from_addr[title] = value;
  }
  getToVal = (title, value) => {
    this.data.to_addr[title] = value;
  }
  submit = () => {
    console.log(this.data);
    NetApis.Post(NetApis.delivery, this.data, (res) => {
      alert("发货成功")
    }, (error) => {
      console.error()
    })
  }
}

export default WaitSending;