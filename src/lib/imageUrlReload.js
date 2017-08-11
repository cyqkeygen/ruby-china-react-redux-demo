/*  
 *  @link [String]
 *  eg: "https://l.ruby-china.org/user/avatar/17365.jpg!large"
 *  */
export default function imageUrlReload({link, usage}) {
  if (typeof link !== 'string') throw new Error(`Can not reload url, ${usage} url is not a string`);
  const [url, type] = link.split('!');
  if (!type) return link;
  return url + '!md';
}
