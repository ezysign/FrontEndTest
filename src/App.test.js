import axios from 'axios'

const user = {

  "email": "eve.holt@reqres.in",
  "password": "cityslicka"

}

describe('user', () => {

  it('login', async () => {

    let { status } = await axios.post('https://reqres.in/api/login', user);
    expect(status).toEqual(200);
  });

  it('list', async () => {

    let { status } = await axios.get('https://reqres.in/api/users');
    expect(status).toEqual(200);
  });
});


