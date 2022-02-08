import axios from "axios";

const apiPerfix            = "https://www.wengold.com:1444";

const apiPerfixAcc         = apiPerfix + "/accservice";
const apiPerfixV8          = apiPerfix + "/ifsc/v8";

const NetApis = {
  getToken:             apiPerfixAcc + "/acc/token",
  delivery:             apiPerfixV8 + "/trade/delivery",

  // Post a net request to remote account or IFSC server,
  // and than handle response
  Post: function (
    apiurl = "",
    paramers = {},
    thenfun = function () { },
    errfun = function (err) {
      console.log(err);
    }
  ) {
    axios.post(apiurl, paramers).then(thenfun).catch(errfun);
  },

  // Send a GET net request to remote account or IFSC server,
  // and than handle response
  Get: function (
    apiurl = "",
    thenfun = function () { },
    errfun = function (err) { console.log(err); }
  ) {
    axios.get(apiurl).then(thenfun).catch(errfun);
  },
};

export default NetApis;
