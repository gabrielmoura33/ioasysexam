import Cookie from 'js-cookie';
import { addDays } from 'date-fns';
import api from '../services/api';

const signIn = async ({ email, password }) => {
  const response = await api.post('auth/sign-in', {
    email,
    password,
  });


  const user = response.data;
  const { authorization } = response.headers;
  Cookie.set('IoasysBooksToken', String(authorization), { expires: addDays(new Date(), 2)})
  Cookie.set('IoasysBooksUser', JSON.stringify(user), { expires: addDays(new Date(), 2)})
  return({ token: authorization, user });
}

export { signIn }
