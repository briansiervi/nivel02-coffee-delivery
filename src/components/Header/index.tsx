import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { IconButton } from '../IconButton'
import { Location } from '../Location'

export function Header() {
  return (
    <HeaderContainer className='bg-background h-16 md:h-24'>
      <img
        src={logo}
        alt='Logo do site coffee delivery, representado por um copo de café roxo, com um foguete branco ao centro, indo em direção ao céu.'
        className='h-8 md:h-10'
      />
      <nav>
        <Location />
        <IconButton quantity={3} />
      </nav>
    </HeaderContainer>
  )
}
