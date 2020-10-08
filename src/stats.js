const statsLinks = (linkhref) => {
  const total = linkhref.length;
  // eslint-disable-next-line max-len
  const unique = linkhref.reduce((count, href) => (linkhref.indexOf(href) === linkhref.lastIndexOf(href) ? count + 1 : count), 0);
  return `Total: ${total} \nUnique: ${unique}`;
};
export default statsLinks;
