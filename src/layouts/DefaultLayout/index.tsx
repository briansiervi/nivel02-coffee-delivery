import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer className='px-4 l:px-0 max-w-[1120px]'>
      <div className='flex flex-col'>
        <aside className='sticky top-0 z-10'>
          <Header />
        </aside>
        <main className='z-0'>
          <Outlet />
        </main>
      </div>
    </LayoutContainer>
  )
}
