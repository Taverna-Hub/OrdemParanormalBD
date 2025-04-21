import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2.4rem;
  width: 100%;
  max-width: 40rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: #111827;
  }

  p {
    color: #374151;
    margin-bottom: 2rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  button:first-child {
    background: #e5e7eb;
    color: #111827;
  }

  button:last-child {
    background: #ef4444;
    color: white;
  }
`;
