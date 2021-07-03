const setup = require("./setup");

setup().then((options) => {
  switch (options.type) {
    case 'i':
      options.type = 'init'
      break;
    case 'c':
      options.type = 'component'
      break;
    case 'p':
      options.type = 'page'
      break;
    default:
  }
    
  require(`./${options.type}`)(options);
});
