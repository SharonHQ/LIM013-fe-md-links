/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable object-curly-newline */
import path from 'path';
import getMdLinks, {
  exists, getAbsoluteRoute, isMdFile, getMdFiles,
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

describe('getAbsoluteRoute', () => {
  it('should be a function', () => {
    expect(typeof getAbsoluteRoute).toBe('function');
  });
  it('should return absolute path', () => {
    expect(getAbsoluteRoute('test/')).toBe(path.join(process.cwd(), 'test'));
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
    expect(getMdFiles('readme.md')).toEqual([path.join(process.cwd(), 'readme.md')]);
  });
  it('should return all files', () => {
    expect(getMdFiles('testing-files/md-files')).toEqual([path.join(process.cwd(), '/testing-files/md-files/md-files2/md-files3/mdprueba.md'), path.join(process.cwd(), '/testing-files/md-files/md-files2/mdprueba.md'), path.join(process.cwd(), '/testing-files/md-files/mdprueba.md')]);
  });
});

describe('getMdlinks', () => {
  it('should be a function', () => {
    expect(typeof getMdLinks).toBe('function');
  });
  it('should return object links', () => {
    expect(getMdLinks([path.join(process.cwd(), '/testing-files/md-files3/mdprueba.md')][0])).toEqual([
      {
        href: 'https://sites.google.com/site/figuritasgeometricas/rombo',
        text: 'Rombo',
        file: path.join(process.cwd(), '/testing-files/md-files3/mdprueba.md'),
      }]);
  });
  it('should return object links', () => {
    expect(getMdLinks([path.join(process.cwd(), '/testing-files/md-files3')][0])).toEqual([
      {
        href: 'https://sites.google.com/site/figuritasgeometricas/rombo',
        text: 'Rombo',
        file: path.join(process.cwd(), '/testing-files/md-files3/mdprueba.md'),
      }]);
  });
});
