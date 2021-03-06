import React from 'react';
import {
  Container,
  BookInfo,
  BookInfoTitle,
  Title,
  Author,
  BookInfoEditor
} from './styles';

function BookCard({
  imagesrc,
  alt,
  title,
  authors,
  pageCount,
  publisher,
  published,
  modalOpenHandle
}) {
  return (
    <Container onClick={() => modalOpenHandle()}>
      <img src={imagesrc} alt={alt} />
      <BookInfo>
        <BookInfoTitle>
          <Title>{title}</Title>
          {authors?.map(a => (
            <Author key={a}>{a}</Author>
          ))}
        </BookInfoTitle>
        <BookInfoEditor>
          <span>{pageCount}</span>
          <span>{publisher}</span>
          <span>Publicado em {published}</span>
        </BookInfoEditor>
      </BookInfo>
    </Container>
  );
}

export default BookCard;
