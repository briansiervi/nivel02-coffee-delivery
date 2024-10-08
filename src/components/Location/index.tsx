import { MapPin } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { LocationContainer } from './styles'

export interface LocationProps {
  location: string
}

export function Location({ location }: LocationProps) {
  return (
    <LocationContainer>
      <MapPin
        size={22}
        color={defaultTheme.purple}
        weight='fill'
        className='bg-purple-light'
      />
      <span className='bg-purple-light'>{location}</span>
    </LocationContainer>
  )
}
