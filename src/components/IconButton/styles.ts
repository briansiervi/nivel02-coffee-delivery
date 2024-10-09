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

interface IconButtonProps {
  color: keyof typeof COLORS
  $backgroundColor: keyof typeof COLORS
  $iconType: 'circle' | 'square'
}

export const ButtonContainer = styled.button<IconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme[COLORS[props.color]]};
  background-color: ${props => props.theme[COLORS[props.$backgroundColor]]};
  border: none;
  border-radius: ${props => (props.$iconType === 'square' ? '0.375rem' : '50%')};
  width: ${props => (props.$iconType === 'square' ? '1.375rem' : '2rem')};
  height: ${props => (props.$iconType === 'square' ? '1.375rem' : '2rem')};
  /* margin: 0.5rem; */

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
    background-color: ${props => props.theme[COLORS[props.color]]};
  }
`
