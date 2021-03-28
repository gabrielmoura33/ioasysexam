import React, { useCallback, useState } from 'react';
import logoPng from '../assets/whitelogo.png'
import BookCard from '../components/BookCard';
import { Wrapper, Container, Header, Pagination, PaginationButton,  Logout } from '../styles/pages/Home';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import api from '../services/api';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import Modal from '../components/Modal';

export default function Home({books, user, page, totalPages, token}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeModalBook, setActiveModalBook] = useState();
  const [booksArr, setBooksArr] = useState(books);
  const [actualPage, setActualPage] = useState(page);

  const router = useRouter();
  const logout = useCallback(() => {
    Cookie.remove('IoasysBooksUser');
    Cookie.remove('IoasysBooksToken');
    router.replace('/');
  });

  const openModalProduct = useCallback((book) => {
    setModalIsOpen(true)
    setActiveModalBook(book)
  }, []);

  const loadNewPage = useCallback(async (page) => {
    const response = await api.get('/books', {
      headers: { authorization: `Bearer ${token}` },
      params: { page: page, amount: 12 }
    });

    const { data: books } = response.data;
    setBooksArr(books);
    setActualPage(page);
  }, []);

  return (
    <Wrapper>
      <SEO title="Livros" description="Melhores livros para um desafio técnico, Gabriel de Moura e Souza"  />
      <Modal
        modalIsOpen={modalIsOpen}
        book={activeModalBook}
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
          booksArr.map(book => (
            <BookCard
              key={book.id}
              imagesrc={book.imageUrl}
              alt={book.title}
              title={book.title}
              authors={book.authors}
              pageCount={book.pageCount}
              publisher={book.publisher}
              published={book.published}
              modalOpenHandle={() => openModalProduct(book)}
            />
          ))
        }
      </Container>
      <Pagination>
        <span>Página <strong>{actualPage}</strong> de<strong> {Math.floor(totalPages)}</strong></span>
        <PaginationButton onClick={() => loadNewPage(actualPage - 1 < 1 ? 1 : actualPage - 1 )}>
          <IoIosArrowBack />
        </PaginationButton>
        <PaginationButton onClick={() => loadNewPage(actualPage + 1 > totalPages ? 1 : actualPage + 1)}>
          <IoIosArrowForward />
        </PaginationButton>
      </Pagination>
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

    const {data: books, page, totalPages} = response.data;
    return {
      props: {
        books,
        user: JSON.parse(user),
        page,
        totalPages,
        token
      },
    };

  } catch (error) {
    return {
      props: {

      },
    };
  }
}
