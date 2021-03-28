import React from 'react';
import ReactModal from 'react-modal';
import {
  Wrapper,
  Container,
  CloseButton,
  PageBookInfo,
  PageBookHeader,
  Title,
  Authors,
  PageBookBody,
  PageBookFooter,
  PageBookQuote
} from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { ImQuotesLeft } from 'react-icons/im';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: '#FFF',
    width: '100%',
    maxWidth: 1000
  }
};

function Modal({ modalIsOpen, setModalIsOpen, book }) {
  function closeModal() {
    setModalIsOpen(false);
  }

  return modalIsOpen&&(
    <Wrapper>
       <CloseButton onClick={() => closeModal()}>
         <RiCloseFill size={22} color="#000" />
       </CloseButton>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Book Modal"
      >
        <Container>
          <aside>
            <img src={book?.imageUrl} alt="book"/>
          </aside>
          <PageBookInfo>
            <PageBookHeader>
              <Title>{book?.title}</Title>
              <Authors>{book?.authors.toString().replace(',' , ', ')}</Authors>
            </PageBookHeader>
            <PageBookBody>
              <span>INFORMAÇÕES</span>
              <div><strong>Páginas</strong> <span>{book?.pageCount} páginas</span></div>
              <div><strong>Editora</strong> <span>Editora {book?.publisher}</span></div>
              <div><strong>Publicação</strong> <span>{book?.published}</span></div>
              <div><strong>Idioma</strong> <span>{book?.language}</span></div>
              <div><strong>Título Original</strong> <span>{book?.title}</span></div>
              <div><strong>ISBN-10</strong> <span>{book?.isbn10}</span></div>
              <div><strong>ISBN-13</strong> <span>{book?.isbn13}</span></div>
            </PageBookBody>
            <PageBookFooter>
              <h1>Resenha da editora</h1>
              <PageBookQuote>
                <ImQuotesLeft />
                {book?.description}
              </PageBookQuote>
            </PageBookFooter>
          </PageBookInfo>
        </Container>
      </ReactModal>
    </Wrapper>
  );
}

export default Modal;
