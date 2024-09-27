import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.5rem;
  height: 2.375rem;

  background-color: ${props => props.theme['purple-light']};
  border: none;
  border-radius: 0.375rem;
`
