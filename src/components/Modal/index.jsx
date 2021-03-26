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
import { ImQuotesLeft } from 'react-icons/im'
import book from '../../assets/bigbook.png';

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

function Modal({ modalIsOpen, setModalIsOpen, product }) {
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
            <img src={book} alt="book"/>
          </aside>
          <PageBookInfo>
            <PageBookHeader>
              <Title>Change By Design Second line exampl...</Title>
              <Authors>Tim Brown, Julie Zhuo, Fried Maximiilian</Authors>
            </PageBookHeader>
            <PageBookBody>
              <span>INFORMAÇÕES</span>
              <div><strong>Páginas</strong> <span>304 páginas</span></div>
              <div><strong>Editora</strong> <span>Editora Loyola</span></div>
              <div><strong>Publicação</strong> <span>2020</span></div>
              <div><strong>Idioma</strong> <span>Inglês</span></div>
              <div><strong>Título Original</strong> <span>Change By Design</span></div>
              <div><strong>ISBN-10</strong> <span>0062856626</span></div>
              <div><strong>ISBN-13</strong> <span>978-0062856623</span></div>
            </PageBookBody>
            <PageBookFooter>
              <h1>Resenha da editora</h1>
              <PageBookQuote>
                <ImQuotesLeft />
                The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
              </PageBookQuote>
            </PageBookFooter>
          </PageBookInfo>
        </Container>
      </ReactModal>
    </Wrapper>
  );
}

export default Modal;
