import * as changeCase from 'change-case'
import { COFFEES, type CoffeeProps } from './Coffee'
import { Trash } from '@phosphor-icons/react'
import { defaultTheme } from '../styles/themes/default'

interface CoffeeCardSimpleProps {
  item: CoffeeProps
}

export function CoffeeCardSimple({ item, ...props }: CoffeeCardSimpleProps) {
  return (
    <div {...props} className='flex flex-row justify-between'>
      <div className='flex flex-row gap-4'>
        <img src={COFFEES[item.image]} alt={item.alt} className='size-16' />
        <div className='flex flex-col'>
          <div>{changeCase.capitalCase(item.title)}</div>
          <div className='flex flex-row gap-2'>
            <div>-1+</div>
            <button
              type='button'
              className='bg-base-button rounded-md p-1 flex items-stretch'
            >
              <Trash
                size={16}
                weight='light'
                color={defaultTheme.purple}
                className='self-center'
                alt='Ícone de carrinho de compras na cor marrom escuro e fundo marrom claro, com número indicativo de quantos produtos foram selecionados ao lado superior direito.'
              />
              <p className='text-base-text font-roboto text-roboto-text-button-m'>
                {changeCase.constantCase('Remover')}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>R$ 9,90</div>
    </div>
  )
}