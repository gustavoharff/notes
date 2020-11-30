import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 20px;
`;

export const Note = styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;
  background: transparent;
  border-radius: 9px;
  border: 1px solid #5f6368;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
  animation: ${appearFromLeft} 1s;

  button {
    background: none;
    color: #f8f8f2;
    border: 0;

    & + button {
      margin-left: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const Texts = styled.div`
  display: flex;
  width: 100%;
  max-width: 210px;
  flex-direction: column;
  word-wrap: break-word;

  span {
    margin-top: 5px;
    color: #999;
  }
`;
