import styled from 'styled-components';

export const Container = styled.div`
  width: 262px;
  height: 150px;
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const BookInfo = styled.div`
  margin-left: 10%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const  BookInfoTitle = styled.div`
    display: flex;
   flex-direction: column;
`;

export const  Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;


  color: #333333;
`;

export const  Author = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */


  color: #AB2680;
`;

export const  BookInfoEditor = styled.div`
    display: flex;
   flex-direction: column;
  span {
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */


    color: #999999;
  }
`;
