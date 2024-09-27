import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer className='px-5 md:px-10 lg:xl:2xl:px-40'>
      <Header location='Porto Alegre, RS' />
      <Outlet />
    </LayoutContainer>
  )
}
