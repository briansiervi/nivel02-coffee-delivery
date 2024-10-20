import { Clock, Coffee, Package, ShoppingCart } from '@phosphor-icons/react'
import BigCoffee from '../assets/big-coffee.svg'
import { ButtonContainer } from '../components/ButtonContainer/styles'
import { CoffeeCard } from '../components/CoffeeCard'
import { CoffeeCards } from '../mocks/CoffeeCards'

export function Home() {
  const coffees = CoffeeCards

  return (
    <div>
      <div className='flex flex-row gap-4 md:gap-8 l:gap-14'>
        <div className='flex flex-col w-3/5'>
          <span
            className='font-baloo2 text-base-title
              text-baloo2-title-s s:text-baloo2-title-s md:text-baloo2-title-l l:text-baloo2-title-l xl:text-baloo2-title-xl'
          >
            Encontre o café perfeito para qualquer hora do dia
          </span>
          <span className='text-base-subtitle roboto-text-xs s:roboto-text-s md:roboto-text-m l:roboto-text-l'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div
            className='grid gap-4 grid-cols-1 md:grid-cols-2 text-roboto-text-tag
              mt-4 s:mt-8 md:mt-8 l:mt-16
              mb-8 s:mb-14 md:mb-20 l:mb-28
            '
          >
            <div className='text-base-text flex flex-row gap-3 min-w-40'>
              <ButtonContainer
                type='button'
                color={'white'}
                $backgroundColor={'yellowDark'}
                $iconType={'circle'}
              >
                <ShoppingCart
                  size={16}
                  weight='fill'
                  className='bg-yellow-dark'
                  alt='Ícone de carrinho de compras na cor branca e fundo marrom escuro'
                />
              </ButtonContainer>
              <p className='content-center'>Compra simples e segura</p>
            </div>
            <div className='flex flex-row gap-3 min-w-40'>
              <ButtonContainer
                type='button'
                color={'white'}
                $backgroundColor={'yellow'}
                $iconType={'circle'}
              >
                <Clock
                  size={16}
                  weight='fill'
                  className='bg-yellow'
                  alt='Ícone de caixa de relógio na cor branca e fundo laranja claro'
                />
              </ButtonContainer>
              <p className='content-center'>Entrega rápida e rastreada</p>
            </div>
            <div className='flex flex-row gap-3 '>
              <ButtonContainer
                type='button'
                color={'white'}
                $backgroundColor={'baseText'}
                $iconType={'circle'}
              >
                <Package
                  size={16}
                  weight='fill'
                  className='bg-base-text'
                  alt='Ícone de caixa de embalagens na cor branca e fundo preto claro'
                />
              </ButtonContainer>
              <p className='content-center'>Embalagem mantém o café intacto</p>
            </div>
            <div className='flex flex-row gap-3 '>
              <ButtonContainer
                type='button'
                color={'white'}
                $backgroundColor={'purple'}
                $iconType={'circle'}
              >
                <Coffee
                  size={16}
                  weight='fill'
                  className='bg-purple'
                  alt='Ícone de xícara de café na cor branca e fundo roxo'
                />
              </ButtonContainer>
              <p className='content-center'>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div className='w-2/5'>
          <img
            src={BigCoffee}
            alt='Imagem de um grande copo de café branco, com uma tampa preta e um adesivo também preto, descrito "Coffee delivery", com o logotipo do site'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <span
          className='font-baloo2 text-base-subtitle mt-8
            text-baloo2-title-xs md:text-baloo2-title-m l:text-baloo2-title-m xl:text-baloo2-title-l'
        >
          Nossos cafés
        </span>
        <div
          className='mt-14 flex flex-row flex-wrap justify-center md:justify-start
            gap-2 md:gap-4 l:gap-6 xl:gap-8'
        >
          {coffees.map(coffee => {
            return <CoffeeCard key={coffee.title} item={coffee} />
          })}
        </div>
      </div>
    </div>
  )
}
