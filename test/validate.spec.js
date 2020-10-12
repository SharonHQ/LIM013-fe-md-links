/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
import { enableFetchMocks } from 'jest-fetch-mock';

import { validateLinks } from '../src/index';

enableFetchMocks();

describe('testing validate', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Should return status', () => {
    fetch.mockResponseOnce('', { status: 2, statusText: "OK" });
    validateLinks('testing-files\\md-files3').then((res) => {
      expect(res).toEqual([{ "file": "D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md", "href": "https://sites.google.com/site/figuritasgeometricas/rombo", "status": 2, "statusText": "OK", "text": "Rombo" }]);
    });
  });
});
describe('testing validate', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Should return status fail', () => {
    fetch.mockRejectOnce(() => validateLinks('testing-files\\md-files2').then((res) => Promise.reject(res.errorToRaise)));
    validateLinks('testing-files\\md-files2').then((res) => {
      expect(res).toEqual([{ "file": "D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files2\\mdprueba2.md", "href": "https://sites.com/site/figuritasgeometricas/circulo", "status": 500, "statusText": "FAIL", "text": "Circulo" }]);
    });
  });
});
