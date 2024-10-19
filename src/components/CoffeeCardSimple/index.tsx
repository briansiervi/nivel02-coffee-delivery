import * as changeCase from 'change-case'
import { COFFEES } from '../CoffeeCard'

interface CoffeeCardSimpleProps {
  id: string
}

export function CoffeeCardSimple({ id, ...props }: CoffeeCardSimpleProps) {
  return (
    <div {...props}>
      <p
        className='pt-4 font-baloo2 text-base-title
            text-baloo2-title-xs'
      >
        {/* {changeCase.capitalCase(title)} */}
      </p>
    </div>
  )
}
