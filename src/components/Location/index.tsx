import { MapPin } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { LocationContainer } from './styles'
import { useEffect, useState } from 'react'

interface locationProps {
  latitude: number
  longitude: number
  language: 'pt'
  city?: string | null
}

export function Location() {
  const [city, setCity] = useState<locationProps>()
  const [coordinates, setCoordinates] = useState<locationProps>()

  function getUserLocation(): void {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.')
    }

    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      const point: locationProps = {
        latitude: latitude,
        longitude: longitude,
        language: 'pt',
        city: null,
      }

      setCoordinates(point)
    })
  }

  useEffect(() => {
    if (coordinates) {
      fetch(
        `https://api-bdc.net/data/reverse-geocode-client?${coordinates.latitude}&longitude=${coordinates.longitude}&localityLanguage=${coordinates.language}`
      ).then(promise => {
        promise.json().then(res => {
          console.log(res)

          const location: locationProps = {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            language: 'pt',
            city: res.locality,
          }

          console.log(location)
          setCity(location)
        })
      })
    }
  }, [coordinates])

  return (
    <LocationContainer onClick={() => getUserLocation()}>
      <MapPin
        size={22}
        color={defaultTheme.purple}
        weight='fill'
        className='bg-purple-light'
      />

      {city && <span className='bg-purple-light'>{city.city}</span>}
    </LocationContainer>
  )
}
