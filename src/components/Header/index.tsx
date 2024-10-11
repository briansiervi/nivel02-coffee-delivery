import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { IconButton } from '../IconButton'
import type { LocationProps } from '../Location'
import { Location } from '../Location'

export function Header({ location }: LocationProps) {
  return (
    <HeaderContainer className='sticky top-0 bg-background'>
      <img
        src={logo}
        alt='Logo do site coffee delivery, representado por um copo de café roxo, com um foguete branco ao centro, indo em direção ao céu.'
      />
      <nav>
        <Location location={location} />
        <IconButton quantity={3} />
      </nav>
    </HeaderContainer>
  )
}
