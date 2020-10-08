// eslint-disable-next-line import/extensions
import getMdLinks, { validateLinks } from './index.js';

// eslint-disable-next-line max-len
const mdLinks = (route, options) => new Promise((resolve) => {
  if (options.validate === undefined) resolve(getMdLinks(route));
  if (options.validate === true) resolve(validateLinks(route));
});

export default mdLinks;
