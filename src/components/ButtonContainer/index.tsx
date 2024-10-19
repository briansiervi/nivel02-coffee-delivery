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
      <ShoppingCart
        size={22}
        weight='fill'
        className='bg-yellow-light'
        alt='Ícone de carrinho de compras na cor marrom escuro e fundo marrom claro, com número indicativo de quantos produtos foram selecionados ao lado superior direito.'
      />
      {quantity && <span>{quantity}</span>}
    </ButtonContainer>
  )
}
