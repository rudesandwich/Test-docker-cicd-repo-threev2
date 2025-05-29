const http = require('http');
describe('Node.js API', () => {
  test('should return Hello World', (done) => {
    http.get('http://localhost:3000', (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        expect(data).toBe('Hello World!');
        done();
      });
    });
  });
});