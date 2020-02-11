import moment from 'moment-timezone';

moment.tz.setDefault('Asia/Seoul');
moment.locale('ko');

export default {
  install(Vue, options) {
    Vue.prototype.$moment = moment;
  }
};
