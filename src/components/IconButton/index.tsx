import { ButtonContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

interface IconButtonProps {
  quantity?: number
}

export function IconButton({ quantity }: IconButtonProps) {
  const navigate = useNavigate()

  const checkoutLink = () => {
    navigate('/Checkout')
  }

  return (
    <ButtonContainer
      type='button'
      onClick={checkoutLink}
      color={'yellowDark'}
      $backgroundColor={'yellowLight'}
      $iconType='square'
    >
      <ShoppingCart size={22} weight='fill' className='bg-yellow-light' />
      {quantity && <span>{quantity}</span>}
    </ButtonContainer>
  )
}
