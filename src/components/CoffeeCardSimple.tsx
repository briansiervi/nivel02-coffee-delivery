import * as changeCase from 'change-case'
import { COFFEES, type CoffeeProps } from './Coffee'

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
            <div>Remover</div>
          </div>
        </div>
      </div>
      <div>R$ 9,90</div>
    </div>
  )
}
