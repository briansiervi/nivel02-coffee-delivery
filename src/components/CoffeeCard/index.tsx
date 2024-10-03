import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonContainer } from '../IconButton/styles'
import TraditionalEspresso from '../../assets/traditional-espresso.svg'
import AmericanEspresso from '../../assets/american-espresso.svg'
import CreamyEspresso from '../../assets/creamy-espresso.svg'
import IcedEspresso from '../../assets/iced-espresso.svg'
import CoffeeWithMilk from '../../assets/coffee-with-milk.svg'
import Latte from '../../assets/latte.svg'
import Cappuccino from '../../assets/cappuccino.svg'
import Macchiato from '../../assets/macchiato.svg'
import Mocaccino from '../../assets/mocaccino.svg'
import HotChocolate from '../../assets/hot-chocolate.svg'
import Cuban from '../../assets/cuban.svg'
import Hawaiian from '../../assets/hawaiian.svg'
import Arabic from '../../assets/arabic.svg'
import Irish from '../../assets/irish.svg'

const COFFEES = {
  traditionalEspresso: TraditionalEspresso,
  americanEspresso: AmericanEspresso,
  creamyEspresso: CreamyEspresso,
  icedEspresso: IcedEspresso,
  coffeeWithMilk: CoffeeWithMilk,
  latte: Latte,
  cappuccino: Cappuccino,
  macchiato: Macchiato,
  mocaccino: Mocaccino,
  hotChocolate: HotChocolate,
  cuban: Cuban,
  hawaiian: Hawaiian,
  arabic: Arabic,
  irish: Irish,
}

type TAGNAME = 'tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico'

export interface CoffeeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle: string
  price: number
  image: keyof typeof COFFEES
  tagNames: [TAGNAME]
  alt: string
}

export function CoffeeCard({
  title,
  subTitle,
  price,
  image,
  tagNames,
  alt,
  ...props
}: CoffeeCardProps) {
  return (
    <div
      {...props}
      className='flex flex-col w-64 bg-base-card rounded-tr-[32px] rounded-bl-[32px]'
    >
      <div className='relative -top-6 flex justify-center'>
        <img src={COFFEES[image]} alt={alt} />
      </div>

      <div className='flex flex-col text-center px-2'>
        <div className='flex flew-row gap-1 justify-center'>
          {tagNames.map(tagName => (
            <span
              className='bg-yellow-light text-yellow-dark text-roboto-text-tag px-2 py-1 rounded-lg'
              key={tagName}
            >
              {tagName.toUpperCase()}
            </span>
          ))}
        </div>
        <p
          className='pt-4 font-baloo2 text-base-title
            text-baloo2-title-xs md:text-baloo2-title-xs l:text-baloo2-title-s xl:text-baloo2-title-s'
        >
          {title}
        </p>
        <p>{subTitle}</p>
        <div className='flex flex-row'>
          <p>{price}</p>
          <span>-1+</span>
          <ButtonContainer
            color='background'
            $backgroundColor='purpleDark'
            $iconType='square'
          >
            <ShoppingCart
              size={24}
              weight='fill'
              className='bg-purple-dark'
              alt='Ícone de carrinho de compras na cor branca e fundo marrom escuro'
            />
          </ButtonContainer>
        </div>
      </div>
    </div>
  )
}
