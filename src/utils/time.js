import moment from "moment";
import 'moment/dist/locale/ko';

moment.locale('ko');

const currentTime = () => {
  // 서버에서 사용하는 time format
  const format = "YYYY-MM-DDTHH:mm:ss.sssZ";
  const date = new Date();
  return moment(date).format(format);
}

const formatTime = (date) => {
  // client에서 보여줄 time format
  const format = "YYYY-MM-DD";
  return moment(date).format(format);
}

const elapsedTime = (date) => {
  return moment(date).fromNow();
}

export { currentTime, formatTime, elapsedTime };