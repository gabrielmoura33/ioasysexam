import React, { useCallback, useState } from 'react';
import logoPng from '../assets/whitelogo.png'
import BookCard from '../components/BookCard';
import { Wrapper, Container, Header, Logout } from '../styles/pages/Home';
import { FiLogOut } from 'react-icons/fi';
import api from '../services/api';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import Modal from '../components/Modal';

export default function Home({books, user}) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const router = useRouter();
  const logout = useCallback(() => {
    Cookie.remove('IoasysBooksUser');
    Cookie.remove('IoasysBooksToken');
    router.replace('/');
  });


  return (
    <Wrapper>
      <SEO title="Livros" description="Melhores livros para um desafio técnico, Gabriel de Moura e Souza"  />
      <Modal
        modalIsOpen={modalIsOpen}
        product={{}}
        setModalIsOpen={setModalIsOpen}
      />
      <Header>
        <img src={logoPng} alt="Ioasys Books"/>
        <div>
          <span>Bem Vindo, <strong>{user.name}</strong></span>
            <Logout onClick={() => logout()}><FiLogOut /></Logout>
        </div>
      </Header>
      <Container>
        {
          books.map(book => (
            <BookCard
              key={book.id}
              imagesrc={book.imageUrl}
              alt={book.title}
              title={book.title}
              authors={book.authors}
              pageCount={book.pageCount}
              publisher={book.publisher}
              published={book.published}
              // onClick={() => setModalIsOpen(true)}
            />
          ))
        }
      </Container>
    </Wrapper>
  );
}

export const getServerSideProps = async ({ req }) => {
 const { IoasysBooksUser: user, IoasysBooksToken: token } = req.cookies;
  if(!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  try {
    const response = await api.get('/books', {
        headers: { authorization: `Bearer ${token}` },
      params: { page: 1, amount: 12 }
    });

    const books = response.data.data;
    return {
      props: {
        books,
        user: JSON.parse(user)
      },
    };

  } catch (error) {
    return {
      props: {

      },
    };
  }
}
