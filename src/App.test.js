import React from 'react'
import axios from 'axios'
import { Button } from './@ui/Button';
import { renderWithStyledTheme } from './utils/test-utils';

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

  it('<Button>', () => {
    const { getByText } = renderWithStyledTheme(<Button>Hello world</Button>);
    expect(getByText('Hello world')).toBeInTheDocument();
  });


  it('<Button> with icon', () => {
    const { getByText, getByTestId } = renderWithStyledTheme(
      <Button icon="cog">Hello world</Button>
    );
    expect(getByText('Hello world')).toBeInTheDocument();
    expect(getByTestId('icon')).toHaveAttribute(
      'class',
      expect.stringContaining('cog')
    );
  });
});


