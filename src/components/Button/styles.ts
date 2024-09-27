import styled from 'styled-components'

const COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  yellowLight: 'yellow-light',
  purpleDark: 'purple-dark',
  purple: 'purple',
  purpleLight: 'purple-light',
  baseTitle: 'base-title',
  baseSubtitle: 'base-subtitle',
  baseText: 'base-text',
  baseLabel: 'base-label',
  baseHover: 'base-hover',
  baseButton: 'base-button',
  baseInput: 'base-input',
  baseCard: 'base-card',
  background: 'background',
  white: 'white',
}

interface ButtonProps {
  color: keyof typeof COLORS
  $backgroundColor: keyof typeof COLORS
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme[COLORS[props.color]]};
  background-color: ${props => props.theme[COLORS[props.$backgroundColor]]};
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
