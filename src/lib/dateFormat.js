export default function format(dateString) {
  const date = new Date(dateString);
  const timeStamp = date.getTime();
  const now = Date.now();
  const duration = (now - timeStamp) / 1000;
  if (duration < 60) {
    return `${duration} 秒前`;
  } else if (duration >= 60 && duration < 3600) {
    const minutes = Math.floor(duration / 60);
    return `${minutes} 分钟前`;
  } else if (duration >= 3600 && duration < 86400){
    const hours = Math.floor(duration / 3600);
    return `${hours} 小时前`;
  } else {
    const days = Math.floor(duration / 86400);
    return `${days} 天前`;
  }
}
