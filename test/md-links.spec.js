/* eslint-disable no-undef */
/* eslint-disable quote-props */
import mdLinks from '../src/md-links';

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return object with links', () => {
    // eslint-disable-next-line object-curly-newline
    expect(mdLinks('testing-files\\md-files3', { validate: undefined })).resolves.toEqual([{ 'file': 'D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md', 'href': 'https://sites.google.com/site/figuritasgeometricas/rombo', 'text': 'Rombo' }]);
  });
  it('should return object with links', () => {
    // eslint-disable-next-line object-curly-newline
    expect(mdLinks('testing-files\\md-files3', { validate: true })).resolves.toEqual([{ 'file': 'D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md', 'href': 'https://sites.google.com/site/figuritasgeometricas/rombo', 'status': 200, 'statusText': 'OK', 'text': 'Rombo' }]);
  });
});
