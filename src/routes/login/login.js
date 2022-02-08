import React from "react";
import NetApis from "../../utils/Api";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>uuid:</span>
          <input onBlur={this.setUuid} defaultValue="123456" />
        </div>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
  constructor(props) {
    super(props);
    this.uuid = "123456";
  }
  componentDidMount(props) {
    sessionStorage.setItem("uuid", this.uuid);
  }
  setUuid = (e) => {
    sessionStorage.setItem("uuid", e.target.value);
  }
  login = () => {
    NetApis.Post(NetApis.getToken, { uuid: this.uuid }, (res) => {
      sessionStorage.setItem("token", res.data);
      this.props.history.push("/");
    }, (error) => {
      console.error()
    })
  }
}

export default Login;