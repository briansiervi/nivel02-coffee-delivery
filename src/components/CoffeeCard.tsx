import * as changeCase from 'change-case'
import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonContainer } from './ButtonContainer/styles'
import { NumericFormat } from 'react-number-format'
import { type CoffeeProps, COFFEES } from './Coffee'
import { IncrementButton } from './IncrementButton'

interface CoffeeCardProps {
  item: CoffeeProps
}

export function CoffeeCard({ item, ...props }: CoffeeCardProps) {
  return (
    <div
      {...props}
      className='flex flex-col w-64 bg-base-card rounded-tr-[32px] rounded-bl-[32px] mb-8
      '
    >
      <div className='relative -top-6 flex justify-center'>
        <img src={COFFEES[item.image]} alt={item.alt} />
      </div>

      <div className='flex flex-col text-center px-2'>
        <div className='flex flew-row gap-1 justify-center'>
          {item.tagNames.map(tagName => (
            <span
              className='bg-yellow-light text-yellow-dark text-roboto-text-tag px-2 py-1 rounded-lg'
              key={tagName}
            >
              {tagName.toUpperCase()}
            </span>
          ))}
        </div>
        <label
          htmlFor={`${item.title}quantity`}
          className='pt-4 font-baloo2 text-base-title
            text-baloo2-title-xs'
        >
          {changeCase.capitalCase(item.title)}
        </label>
        <p
          className='pt-2 text-base-label
          font-roboto text-roboto-text-xs md:text-roboto-text-s'
        >
          {changeCase.sentenceCase(item.subTitle)}
        </p>

        <div className='flex flex-row flex-wrap pt-8 pb-5 mx-3 justify-between'>
          <div className='content-center'>
            <span
              className='text-base-text
                  text-roboto-text-xs md:text-roboto-text-s l:text-roboto-text-m'
            >
              R$
            </span>
            <NumericFormat
              value={item.price}
              displayType={'text'}
              allowNegative={false}
              allowLeadingZeros
              thousandSeparator='.'
              decimalScale={2}
              decimalSeparator=','
              fixedDecimalScale
              className='text-base-text text-baloo2-title-m md:text-baloo2-title-s l:text-baloo2-title-m'
            />
          </div>
          <div className='flex flex-row gap-2'>
            <IncrementButton id={item.id} maximumStock={item.maximumStock} />
            <ButtonContainer
              color='background'
              $backgroundColor='purpleDark'
              $iconType='square'
            >
              <ShoppingCart
                size={22}
                weight='fill'
                className='bg-purple-dark'
                alt='Ícone de carrinho de compras na cor branca e fundo marrom escuro'
              />
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
