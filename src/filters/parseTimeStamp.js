import Vue from 'vue';
import moment from 'moment-timezone';
moment.locale('ko');


// moment 를 이용한 텍스트 필터링

Vue.filter(`parseTimeStampToDateString`, function(timestamp) {
  if(timestamp !== null || timestamp !== '') {
    try {
      const utcDate = moment.unix(timestamp).tz('Asia/Seoul').toDate().toUTCString();
      return moment.utc(utcDate).format('YYYY-MM-DD dddd');
    } catch (e) {
      console.log(`parseTimeStampToDateString filter error`);
      return '';
    }

  }

  return '';

});

Vue.filter(`parseTimeStampToDateHour`,function(timestamp) {
  if(timestamp !== null || timestamp !== '') {
    try {
      return moment(timestamp).tz('Asia/Seoul').format('HH:mm');
    } catch (e) {
      console.log(`parseTimeStampToDateHour filter error`);
      return '';
    }

    return '';
  }
});
