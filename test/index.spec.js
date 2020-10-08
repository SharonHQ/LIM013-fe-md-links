/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable object-curly-newline */
import getMdLinks, {
  exists, isAbsolute, isMdFile, getMdFiles,
} from '../src/index';

describe('exists', () => {
  it('should be a function', () => {
    expect(typeof exists).toBe('function');
  });
  it('should return true', () => {
    expect(exists('test/')).toBe(true);
  });
  it('should return false', () => {
    expect(exists('hola.php')).toBe(false);
  });
});

describe('isAbsolute', () => {
  it('should be a function', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('should return absolute path', () => {
    expect(isAbsolute('test/')).toBe('D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\test');
  });
});

describe('isMdFile', () => {
  it('should be a function', () => {
    expect(typeof isMdFile).toBe('function');
  });
  it('should return true', () => {
    expect(isMdFile('readme.md')).toBe(true);
  });
  it('should return false', () => {
    expect(isMdFile('index.js')).toBe(false);
  });
});

describe('getMdFiles', () => {
  it('should be a function', () => {
    expect(typeof getMdFiles).toBe('function');
  });
  it('should return all files', () => {
    expect(getMdFiles('readme.md')).toEqual(['D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\readme.md']);
  });
});

describe('getMdlinks', () => {
  it('should be a function', () => {
    expect(typeof getMdLinks).toBe('function');
  });
  it('should return object links', () => {
    expect(getMdLinks(['D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md'][0])).toEqual([
      {
        href: 'https://sites.google.com/site/figuritasgeometricas/rombo',
        text: 'Rombo',
        file: 'D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md',
      }]);
  });
  it('should return object links', () => {
    expect(getMdLinks(['D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3'][0])).toEqual([
      {
        href: 'https://sites.google.com/site/figuritasgeometricas/rombo',
        text: 'Rombo',
        file: 'D:\\Laboratoria\\Bootcamp\\md-links\\LIM013-fe-md-links\\testing-files\\md-files3\\mdprueba.md',
      }]);
  });
});
