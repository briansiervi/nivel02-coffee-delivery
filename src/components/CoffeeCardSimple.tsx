import * as changeCase from 'change-case'
import { COFFEES, type CoffeeProps } from './Coffee'
import { Trash } from '@phosphor-icons/react'
import { defaultTheme } from '../styles/themes/default'
import { IncrementButton } from './IncrementButton'

interface CoffeeCardSimpleProps {
  item: CoffeeProps
  divider: boolean
}

export function CoffeeCardSimple({
  item,
  divider,
  ...props
}: CoffeeCardSimpleProps) {
  return (
    <div {...props}>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <img src={COFFEES[item.image]} alt={item.alt} className='size-16' />
          <div className='flex flex-col'>
            <div className='text-roboto-text-m md:after:text-roboto-text-l'>
              {changeCase.capitalCase(item.title)}
            </div>

            <div className='flex flex-row gap-2 mt-2'>
              <IncrementButton id={item.id} maximumStock={item.maximumStock} />
              <button
                type='button'
                className='bg-base-button rounded-md p-1 flex'
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
        <div className='text-roboto-text-m md:after:text-roboto-text-l font-bold'>
          R$ 9,90
        </div>
      </div>
      {divider && (
        <hr className='my-3 md:my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400' />
      )}
    </div>
  )
}
