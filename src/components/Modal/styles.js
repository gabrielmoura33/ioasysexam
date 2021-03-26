import styled from 'styled-components';

export const Wrapper = styled.div`
  background: 'rgba(0, 0, 0, 0.4)';
  position: relative;

`;

export const CloseButton = styled.button`
    position: absolute;
    right: 2%;
    top: 0%;
    border: 0;
    padding: 5px;
    border-radius: 50%;
    background: #FFF;
    cursor: pointer;
    z-index: 5;
    @media(max-width: 767px) {
      right: -30%;

    }
`;

export const Container = styled.div`
  display: flex;
  padding: 0 5rem;
  gap: 5rem;
  align-items: center;
  position: relative;

  aside {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media(max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    aside {
    img {
      width: 50%;
      height: 100%;
    }
  }
  }
`;

export const PageBookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width: 768px) {
    width: 100%;
    height: 50%;
    gap: 2rem;
  }

`;
export const PageBookHeader = styled.div``;
export const Title = styled.h1`
  font-family: Heebo;
  font-style: Medium;
  font-size: 2.8rem;
  line-height: 40px;
  line-height: 97%;
`;
export const Authors = styled.span`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 20px;
  color: #AB2680;
`;
export const PageBookBody = styled.div`

  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 28px;
  color: #333333;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const PageBookFooter = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 20px;
  color: #333333;
`;
export const PageBookQuote = styled.p`
  margin-top: 10px;
  opacity: 0.5;
  max-width:  576px;

`;
