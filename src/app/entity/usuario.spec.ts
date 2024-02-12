import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario(1, 'John', 'Doe', 'john@example.com', 'password', '123456', true)).toBeTruthy();
  });
});
