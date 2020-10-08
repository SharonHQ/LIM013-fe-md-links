import statsLinks from '../src/stats';

// eslint-disable-next-line no-undef
describe('statsLinks', () => {
  // eslint-disable-next-line no-undef
  it('should be a function', () => {
    // eslint-disable-next-line no-undef
    expect(typeof statsLinks).toBe('function');
  });
  // eslint-disable-next-line no-undef
  it('should return total & unique of links', () => {
    // eslint-disable-next-line no-undef
    expect(statsLinks(['https://sites.com/site/figuritasgeometricas/circulo', 'https://sites.google.com/site/figuritasgeometricas/cuadrado', 'https://sites.google.com/site/figuritasgeometricas/trapecio', 'https://sites.google.com/site/figuritasgeometricas/octogono', 'https://sites.google.com/site/figuritasgeometricas/trapecio', 'https://sites.google.com/site/figuritasgeometricas/octogono'])).toEqual('Total: 6 \nUnique: 2');
  });
});
