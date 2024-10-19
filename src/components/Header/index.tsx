import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { IconButton } from '../IconButton'
import { Location } from '../Location'

export function Header() {
  return (
    <HeaderContainer className='bg-background'>
      <img
        src={logo}
        alt='Logo do site coffee delivery, representado por um copo de café roxo, com um foguete branco ao centro, indo em direção ao céu.'
      />
      <nav>
        <Location />
        <IconButton quantity={3} />
      </nav>
    </HeaderContainer>
  )
}
