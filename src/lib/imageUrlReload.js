/*  
 *  @link [String]
 *  eg: "https://l.ruby-china.org/user/avatar/17365.jpg!large"
 *  */
export default function imageUrlReload({link, type}) {
  if (!type) type = 'md';
  const [url, origin] = link.split('!');
  if (!origin) return link;
  return `${url}!${type}`;
}
