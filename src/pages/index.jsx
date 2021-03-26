import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import logoImg from '../assets/logo.png';
import { Container, Content, Background, AnimationContainer, Error, FormBase } from '../styles/pages/SignIn';
import Input from '../components/Input';
import { signIn } from '../utils/signIn';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';

function SignIn() {
  const formRef = useRef(null);
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório'),
          password: Yup.string().required('Senha Obrigatoria'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        router.push('/home');
      } catch (err) {
        setError('Email e/ou senha incorretos.')
      }
    },
    [signIn],
  );

  return (
    <Container>
      <SEO title="Ioasys Books" shouldExcludeTitleSuffix={true} />
      <Content>
        <AnimationContainer>
          <FormBase
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <img src={logoImg} alt="Ioasys" />
            <Input name="email" placeholder="E-mail" />
            <Input
               name="password"
              type="password"
              placeholder="Senha"
              signButton={true}
            />
            {error && <Error title={error}/>}
          </FormBase>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;

export const getServerSideProps = async ({ req }) => {
  const { 'IoasysBooksUser': user } = req.cookies;

   if(user) {
     return {
       redirect: {
         destination: '/home',
         permanent: false
       }
     }
   }

   return {
     props: {},
   };
 }
