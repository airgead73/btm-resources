const liveServer = require('live-server');

const params = {
  port: 8181,
  root: "./src",
  open: true,
  file: "./views/index.html",
  wait: 1000
};

liveServer.start(params);