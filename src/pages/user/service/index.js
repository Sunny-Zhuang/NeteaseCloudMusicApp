/* eslint-disable import/no-anonymous-default-export */
import DataBucket from "../../../api/index";
import adaptor from "../service/adaptor";
import fetchLib from "../../../api/lib/fetch";
const dataBucket = new DataBucket(fetchLib);

function getPlayList(params) {
  return dataBucket.getData(
    {
      api: "http://localhost:4000/user/playlist?uid=32953014",
      params,
    },
    {
      // mock: true,
      // mockData: require("../mock/playlist.json"),
      adaptor: adaptor.playlist,
    }
  );
}

export default {
  getPlayList,
};
