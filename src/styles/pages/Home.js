import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98vw;
  height: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  padding: 4vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

  }

  @media(max-width: 768px) {
    div span {
      visibility: hidden;
    }
  }
`
export const Container = styled.div`
  padding: 5vh 0 5vh 0;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap:25px;
`;

export const Logout = styled.button`
  border: 1px solid rgba(51, 51, 51, 0.2);
  padding: 5px;
  border-radius: 50%;
  background: transparent;
  margin-right: 20px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const Pagination = styled.div`
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: flex-end;
  span {
    margin-right: 1.8rem;
  }
`;
export const PaginationButton = styled.button`
  background: transparent;
  padding: 1.2rem;
  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.2);
  margin-right: 1.2rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;
