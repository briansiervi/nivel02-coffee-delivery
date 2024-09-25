import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import { Button } from '../Button'

interface headerProps {
  location: string
}

export function Header({ location }: headerProps) {
  const navigate = useNavigate()

  const checkoutLink = () => {
    navigate('/Checkout')
  }

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt='Logo do site coffee delivery, representado por um copo de café roxo, com um foguete branco ao centro, indo em direção ao céu.'
      />
      <nav>
        <div>
          <span>
            <MapPin size={22} color={defaultTheme.purple} weight='fill' />
          </span>
          <span>{location}</span>
        </div>
        <Button />
      </nav>
    </HeaderContainer>
  )
}
