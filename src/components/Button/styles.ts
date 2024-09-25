import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme['yellow-dark']};
  background-color: ${props => props.theme['yellow-light']};
  border: none;
  border-radius: 0.375rem;
  width: 2.375rem;
  height: 2.375rem;

  span {
    display:flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    color: ${props => props.theme.white};;
    width: 1.25rem;
    height: 1.25rem;
    border:solid transparent;
    border-radius: 50%;
    transform: translate(1rem,-1.25rem);
    background-color: ${props => props.theme['yellow-dark']};
  }
`
