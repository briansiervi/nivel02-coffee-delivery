import { CoffeeCardSimple } from '../components/CoffeeCardSimple'
import { CoffeeCards } from '../mocks/CoffeeCards'

export function Checkout() {
  const coffees = CoffeeCards.slice(0, 2)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div>
        <span
          className='font-baloo2 text-base-subtitle mt-8
            text-baloo2-title-xs md:text-baloo2-title-m l:text-baloo2-title-m xl:text-baloo2-title-l'
        >
          Complete o seu pedido
        </span>

        <div className='flex flex-col mt-4'>
          <div className='bg-base-card rounded-md'>
            <form className='p-10'>
              <p>Endereço de Entrega</p>
            </form>
          </div>

          <div className='bg-base-card mt-3 rounded-md'>
            <form className='p-10'>
              <p>$ Pagamento</p>
            </form>
          </div>
        </div>
      </div>

      <div>
        <span
          className='font-baloo2 text-base-subtitle mt-8
            text-baloo2-title-xs md:text-baloo2-title-m l:text-baloo2-title-m xl:text-baloo2-title-l'
        >
          Cafés selecionados
        </span>

        <div className='bg-base-card rounded-md mt-4'>
          <form className='p-10'>
            {coffees.map(coffee => {
              return <CoffeeCardSimple key={coffee.id} item={coffee} />
            })}

            <div className='grid grid-cols-2 gap-4'>
              <p>Total de itens</p>
              <p>R$ 29,70</p>

              <p>Entrega</p>
              <p>R$ 29,70</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
