# How to start frontend development for beginners 2018 spring

## package.json

Using babel-preset-env version 1 in this tutorial but version2 will come soon.

```
% cat package.json                                                                     {
  "name": "practice-frontend",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "http-server": "^0.11.1",
    "webpack": "^4.1.1",
    "webpack-cli": "^2.0.12"
  }
}
```

## SETP 1: http-server

```
mkdir practice-frontend && cd $_ 
mkdir dist
echo 'hello' > dist/index.html
yarn init -y  
yarn add http-server --save-dev 
```

Then run the server, you can access the URL http://localhost:8080

```
yarn http-server dist
```

Confirm it is running and access to the http://localhost:8080. You can see `hello` string.

## STEP 2: Babel

```
mkdir src lib
touch .babelrc
yarn add babel-cli babel-preset-env --save-dev
```

create `.babelrc`

```
{
  "presets": [
    ["env", {
      "targets": {
         "node": "v6.10",
         "ie": 11
      }
    }]
  ]
}
```

create sample file `src/Dog.js`


```
export default class Dog {

  constructor(voice="bow wow") {
    this.voice = voice;
  }

  say() {
    return this.voice;
  }
}
```

do transcompile

```
yarn babel -d lib/ src/
```

So, create `test.js` and confirm to run the command `node test.js`

```
// test.js
var Dog = require('./lib/Dog').default;

var dog1 = new Dog();
var dog2 = new Dog('ruff ruff')

console.log(dog1.say())
console.log(dog2.say())
```

## STEP 3: webpack 4

The package webpack is separated to webpack and webpack-cli from version 4.
Let's install both of them.

```
yarn add webpack webpack-cli --save-dev
```

Webpack 4 doesn窶冲 need a configuration file by default.
Most of the configuration has some default values.

And the default entry point is `src/index.js`.
Let's create `src/index.js`.

```
import Dog from './Dog';

var dog1 = new Dog();
var dog2 = new Dog('ruff ruff')

console.log(dog1.say())
console.log(dog2.say())
```

After it has compiled, you can see `dist/main.js`

```
yarn webpack --mode=development
```

run the script and confirm it.

```
node dist/main.js
```

## STEP4: modify index.html

edit index.html

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test</title>
</head>
<body>
  hello world
<script type="text/javascript" src="main.js"></script>
</body>
</html>
```

Let's run the `yarn http-server dist` and access to `http://localhost:8080`.
And you can see the dog's voice in the developer console.

Anytime `http-server` has some cache. So you should reload sometimes.

enjoy:)

