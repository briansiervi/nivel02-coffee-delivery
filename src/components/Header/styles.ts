import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap:0.75rem;
  }

  a {
    height: 2.375rem;
    min-width: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: 'green';
    color: 'green';
    background: 'green'
  }
`
