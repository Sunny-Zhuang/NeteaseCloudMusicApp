import axios from "axios";
function noop(result) {
  return result
}
class DataBucket {
  // config.api config.params config.method
  // options.type options.mock options.mockPath options.useCache options.duration
  // options.withCredentials options.login options.location
  getData(config = {}, options = {}) {
    const { mock, mockData = {}, withCredentials } = options
    if (mock) {
      const adaptor = options.adaptor || noop
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(adaptor(mockData))
        }, 200);
      })
    } else {
      let requestConfig = {};
      if (withCredentials) {
        requestConfig.withCredentials = true;
      }
      return axios.get(config.api, requestConfig).then(result => {
        const adaptor = options.adaptor || noop
        return adaptor(result)
      });
    }
  }
}

export default DataBucket;
