import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonContainer } from '../IconButton/styles'

interface CoffeeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subTitle: string
  price: number
}

export function CoffeeCard({
  title,
  subTitle,
  price,
  ...props
}: CoffeeCardProps) {
  return (
    <div {...props}>
      <div>
        <span>imagem</span>
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
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
  )
}
