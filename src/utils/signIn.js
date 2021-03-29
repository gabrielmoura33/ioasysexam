import Cookie from 'js-cookie';
import api from '../services/api';

const signIn = async ({ email, password }) => {
  const response = await api.post('auth/sign-in', {
    email,
    password
  });
  const user = response.data;
  const { authorization, 'refresh-token': refreshToken } = response.headers;
  Cookie.set('IoasysBooksToken', String(authorization));
  Cookie.set('IoasysBooksUser', JSON.stringify(user));
  Cookie.set('IoasysBooksRefreshToken', JSON.stringify(refreshToken));
  return { token: authorization, user, refreshToken };
};

export { signIn };
