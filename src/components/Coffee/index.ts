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

export const COFFEES = {
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

export interface CoffeeProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  title: string
  subTitle: string
  price: number
  image: keyof typeof COFFEES
  tagNames: TAGNAME[]
  alt: string
  maximumStock: number
}
