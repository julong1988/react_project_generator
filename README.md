## react cli
react project generator

#### stack
react, redux, react-router, webpack, stylus, css-modules(only stylus file), eslint(airbnb), prettier, husky

#### stack(option)
typescript or es(babel), antDesign

#### install global
```sh
npm install -g julong_cmd
# or 
yarn global add julong_cmd
```

#### install local
```sh
npx julong_cmd init
```

#### generator project
```sh
gen_react init 
# or
gen_react i
```

#### generator page 
```sh
gen_react page
# or
gen_react p
```

#### generator component 
```sh
gen_react component
# or
gen_react c
```

#### script
```sh
npm run start #local
npm run build:prod #production
npm run build:dev #development
npm run build:test #test
npm run lint #code lint
npm run fix #code fix
npm run analyze #bundle file analyze
```

#### run process
1. setting command options
2. make diretory
3. genarator env file
4. genarator source file
5. install