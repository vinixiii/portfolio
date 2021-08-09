import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 350px;
  height: 520px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.dark.quaternary};
  padding: 24px;
  margin: 42px 16px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.dark.tertiary};
  }

  img {
    display: block;
    max-width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
  }

  a {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.dark.secondaryText};
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.dark.primary};
    }
  }
`;
