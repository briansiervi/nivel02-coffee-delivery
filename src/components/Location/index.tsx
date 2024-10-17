import { MapPin } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { LocationContainer } from './styles'
import { useEffect, useState } from 'react'

export function Location() {
  // const [userLocation, setUserLocation] = useState('')

  useEffect(() => {
    return getUserLocation()
  })

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords

          console.log(`Latitude:${latitude}`)
          console.log(`Longitude:${longitude}`)

          const point = {
            latitude: latitude,
            longitude: longitude,
          }
          console.log(JSON.stringify(point))
          // setUserLocation(result.name)
        },
        error => {
          console.error('Geolocation is not supported by this browser.')
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  return (
    <LocationContainer onClick={() => getUserLocation()}>
      <MapPin
        size={22}
        color={defaultTheme.purple}
        weight='fill'
        className='bg-purple-light'
      />

      {/* {userLocation && <span className='bg-purple-light'>{userLocation}</span>} */}
    </LocationContainer>
  )
}
