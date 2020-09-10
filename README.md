# Weather app

---

> ### Weather app 소개 <br/>
> Vue.js, Vuex, Vue-router, ApexChart.js, Axios, Webpack, Babel, HTML5, CSS3, SCSS
> - Owner & Maintainer
> - github. [https://github.com/katanazero86/svelte-app](https://github.com/katanazero86/svelte-app)
> - vue-cli 를 사용하여 프로젝트 생성, OpenWeatherMap API 연동하여 날씨 웹앱 제작 및 Heroku 배포
> - 원하는 도시를 선택하면, openWeatherMap 서비스(https://openweathermap.org/api) 에서 날씨를 조회 후 표시해줍니다. 날씨는 현재날씨와 시간별 날씨예보(4일치) 정보를 조회합니다.

---

> ### project 정보 <br/>
> - vue-cli : 3.8.3 버전을 이용하여 프로젝트를 생성
> - 추가 모듈 설치 및 구성
> ```
> npm i --save vue-router vuex
> npm i --save-dev node-sass sass-loader
> ```
> - 프로젝트 실행방법(execution)
> ```
> node moudle install : npm i or npm install
> dev : npm run serve
> build : npm run build
> ```

---

> ### project 배포(deploy) <br/>
> - https://www.heroku.com/ - 헤로쿠 클라우드 플랫폼을 이용하여 배포
> - 헤로쿠 배포를 위한 express 서버 모듈 설치 및 server.js 작성
> - 헤로쿠가 서버를 실행할 수 있도록, package.json 스크립트 추가("start": "node server.js")
> - https://zero86.herokuapp.com

---

> ### 구조 및 규약

```
/src/assets : icons, images, scss 정적자원을 관리하는 폴더
/src/components : Vue 컴포넌트를 관리하는 폴더
/src/containers : Vue 컨테이너 컴포넌트를 관리하는 폴더
/src/filters : Vue filter
/src/mixins : Vue mixin
/src/plugins : Vue plugin
/src/routes : Vue-router
/src/store : Vuex store

- 컴포넌트(*.vue)명은 대문자로 시작
- 컨테이너 컴포넌트명은 대문자로 시작하면서, 접미사는 **Container
- component 포함 시, dynamic import 구문 사용(() => import('xxx/ACompoennt')) -> lazy loading
- Vuex store 는 module 을 기준으로 actions, getters, mutaions, state 별로 관리
- Vuex store 사용 시, mixin 으로 캡슐화 및 중복최소화 + helper 함수를 통해 코드 통일화
- Vuex action 함수명 접미사는 **Action
- Vuex 상태 접미사는 **State
- API 메서드 접두사
  조회 : find**
  생성 : create**
  수정 : update**
  삭제 : delete**

- Functional component : 일반적인 컴포넌트와 달리 인스턴스를 생성하지 않고 렌더링만 실행(상태를 가질 수 없으며, 라이프사이클 메서드 사용 불가)
  RefreshIcon.vue
  ForecastCard.vue
  Footer.vue

```
