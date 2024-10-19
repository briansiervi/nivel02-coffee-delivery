import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { IconButton } from '../ButtonContainer'
import { Location } from '../Location'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const handleOnClick = () => navigate('/')

  return (
    <HeaderContainer className='bg-background h-16 md:h-24'>
      <button type='button' onClick={handleOnClick}>
        <img
          src={logo}
          alt='Logo do site coffee delivery, representado por um copo de café roxo, com um foguete branco ao centro, indo em direção ao céu.'
          className='h-8 md:h-10'
        />
      </button>
      <nav>
        <Location />
        <IconButton quantity={3} />
      </nav>
    </HeaderContainer>
  )
}
