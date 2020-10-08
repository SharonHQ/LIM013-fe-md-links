/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
import fetchMock from 'jest-fetch-mock';
import { validateLinks } from '../src/index';

fetchMock.enableMocks();

it('Deberia retornar un array de obj', (done) => {
  validateLinks('testing-files\\md-files3')
    .then((res) => {
      expect(res).toEqual([{ "file": "D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md", "href": "https://sites.google.com/site/figuritasgeometricas/rombo", "status": 200, "statusText": "OK", "text": "Rombo" }]);
      done();
    });
});
it('should return status and status text', () => {
  expect(validateLinks('testing-files\\md-files2')).resolves.toEqual([{ "file": "D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files2\\mdprueba2.md", "href": "https://sites.com/site/figuritasgeometricas/circulo", "status": 500, "statusText": "FAIL", "text": "Circulo" }]);
});
