import axios from "axios";
import Qs from "qs";

/*
 * This file use to prevent doublue calling of Restful APIs,
 * it import in index.js to apply.
 */

axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
};

axios.defaults.paramsSerializer = (params) => {
  return Qs.stringify(params, { arrayFormat: "brackets" });
};
