import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    text-align: center;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    line-height: 16px;
    font-size: 16px;
    font-weight: 600;
    visibility: visible;
    transition: opacity 0.4s;
    position: absolute;
    bottom: 100%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 0 6px 6px 6px;
      /* bottom: 20px; */
      bottom: 100%;
      position: absolute;
      left: 20%;
      transform: translateX(-50%);
    }
  }
`;
