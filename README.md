# vue-weather-v2

- vue-weather 앱

```
vue-cli : 3.8.3
프로젝트 구성
- babel / linter, formatter (수동 기본 구성)

scss 구성
npm i --save-dev node-sass sass-loader

vue router / vuex 구성
npm i --save vue-router vuex

vue ui
runtimeCompiler: true 설정

CSS 그라데이션 참조 사이트
- https://webgradients.com/

- weather api
https://openweathermap.org/api

```

- cloud flare workers

```

Requests today 100,000 (하루 request 횟수)
worker subdomain : zero86.workers.dev

- Install Wrangler
npm install -g @cloudflare/wrangler
설치가 되었으면, 확인을 위해
wrangler --version

- Authenticate Wrangler with your Cloudflare account
wrangler config

- Start a project using a template
wrangler generate my-project https://github.com/cloudflare/worker-template

- To test your Worker, start the preview:
wrangler preview



```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
