const { app, server, crypto_names, symbol, API_KEY, price, capacity  } = require('./app');

describe('Test crypto_names and cities arrays', () => {
  test('crypto_names should not be null', () => {
    expect(crypto_names).not.toBeNull();
  });
   
  test('symbol should not be null', () => {
    expect(symbol).not.toBeNull();
  });
  
  test('API_KEY should not be null', () => {
    expect(API_KEY).not.toBeNull();
  });

  test('price should not be null', () => {
    expect(price).not.toBeNull();
  });

  test('capacity should not be null', () => {
    expect(capacity).not.toBeNull();
  });

  test('crypto_names should be a object', () => {
    expect(typeof crypto_names).toBe("object");
  });
  
  afterAll((done) => {
    server.close(done);
  });
});
