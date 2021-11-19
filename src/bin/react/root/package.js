module.exports = ({ name, typescript }) => `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "description",
  "scripts": {
    "start": "cross-env NODE_ENV='local' webpack serve",
    "build:prod": "cross-env NODE_ENV='production' webpack",
    "build:dev": "cross-env NODE_ENV='development' webpack",
    "build:test": "cross-env NODE_ENV='test' webpack",
    "lint": "eslint --ext .jsx,.js${typescript ? ",.ts,.tsx" : ""} ./src/",
    "fix": "eslint --fix --ext .jsx,.js${typescript ? ",.ts,.tsx" : ""} ./src/",
    "analyze": "cross-env NODE_ENV='production' REPORT=true webpack"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "devDependencies": {},
  "dependencies": {},
  "devMode": "${typescript ? 'typescript' : 'es'}"
}`;
