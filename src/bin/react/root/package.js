module.exports = ({ name, typescript }) => `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "description",
  "scripts": {
    "start": "export NODE_ENV='local' && webpack serve",
    "build:prod": "export NODE_ENV='production' && webpack",
    "build:dev": "export NODE_ENV='development' && webpack",
    "build:test": "export NODE_ENV='test' && webpack",
    "lint": "eslint --ext .jsx,.js${typescript ? ",.ts,.tsx" : ""} ./src/",
    "fix": "eslint --fix --ext .jsx,.js${typescript ? ",.ts,.tsx" : ""} ./src/",
    "analyze": "export NODE_ENV='production' && export REPORT=true && webpack"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "devDependencies": {},
  "dependencies": {},
  "devMode": "${typescript ? 'typescript' : 'es'}"
}`;
