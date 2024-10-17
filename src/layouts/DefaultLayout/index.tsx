import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer className='px-4 max-w-[1152px]'>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
