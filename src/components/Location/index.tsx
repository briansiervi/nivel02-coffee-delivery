import { MapPin } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { LocationContainer } from './styles'
import { useEffect, useState } from 'react'

interface locationProps {
  latitude: number
  longitude: number
  language: 'pt'
  city?: string | null
  state?: string | null
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
        state: null,
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
          const state = res.localityInfo.administrative
            .filter(
              (x: { name: string; isoCode: string }) =>
                x.name === res.locality && x.isoCode !== undefined
            )[0]
            .isoCode.substring(3, 5)

          const location: locationProps = {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            language: 'pt',
            city: res.locality,
            state: state.toUpperCase(),
          }

          setCity(location)
        })
      })
    }
  }, [coordinates])

  const mapClassName = city
    ? 'bg-purple-light'
    : 'bg-purple-light animate-bounce w-5 h-5'

  return (
    <LocationContainer onClick={() => getUserLocation()}>
      <MapPin
        size={22}
        color={defaultTheme.purple}
        weight='fill'
        className={mapClassName}
      />

      {city && (
        <span className='bg-purple-light'>
          {city.city}, {city.state}
        </span>
      )}
    </LocationContainer>
  )
}
