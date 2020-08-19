const TOKEN_KEY = '@token';

class Auth {
  set token(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  get token() {
    return localStorage.getItem(TOKEN_KEY);
  }
  clear() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export default new Auth();
