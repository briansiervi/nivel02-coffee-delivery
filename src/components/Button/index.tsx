import { ButtonContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export function Button() {
  const navigate = useNavigate()

  const checkoutLink = () => {
    navigate('/Checkout')
  }

  return (
    <ButtonContainer type='button' onClick={checkoutLink}>
      <ShoppingCart size={22} weight='fill' />
      <span>3</span>
    </ButtonContainer>
  )
}
