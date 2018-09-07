module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }

    config.output.libraryTarget = "amd";

    config.externals = [
      (context, request, callback) => {
        if (
          /^dojo/.test(request) ||
          /^dojox/.test(request) ||
          /^dijit/.test(request) ||
          /^esri\//.test(request)
        ) {
          return callback(null, `amd ${request}`);
        }
        callback();
      }
    ];
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      // do not inject,
      // because we will load the bundle file in amd mode
      args[0].inject = false;
      args[0].hash = false;
      return args;
    });
  }
};
