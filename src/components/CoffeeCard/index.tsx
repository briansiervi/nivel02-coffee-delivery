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
      className='flex flex-col w-64 h-80 bg-base-card rounded-tr-3xl rounded-bl-3xl'
    >
      <div className='flex justify-center'>
        <img className='' src={COFFEES[image]} alt={alt} />
      </div>

      <div className='flex flex-col top-3'>
        <div className='flex flew-row gap-1'>
          {tagNames.map(tagName => (
            <div key={tagName}>{tagName}</div>
          ))}
        </div>
        <p>{title}</p>
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
