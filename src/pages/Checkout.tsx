import { CoffeeCardSimple } from '../components/CoffeeCardSimple'
import { CoffeeCards } from '../mocks/CoffeeCards'
import * as changeCase from 'change-case'
import { MapPinLine } from '@phosphor-icons/react'
import { defaultTheme } from '../styles/themes/default'

export function Checkout() {
  const coffees = CoffeeCards.slice(0, 2)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10'>
      <div>
        <span
          className='font-baloo2 text-base-subtitle mt-8
            text-baloo2-title-xs md:text-baloo2-title-m l:text-baloo2-title-m xl:text-baloo2-title-l'
        >
          Complete o seu pedido
        </span>

        <div className='flex flex-col mt-4'>
          <div className='bg-base-card rounded-md p-4 md:p-10'>
            <div className='flex flex-row gap-2'>
              <MapPinLine size={22} color={defaultTheme.yellow} />
              <div>
                <p className='text-base-text text-roboto-text-m'>
                  {changeCase.sentenceCase('Endereço de Entrega')}
                </p>
                <p className='text-base-text text-roboto-text-s'>
                  {changeCase.sentenceCase(
                    'Informe o endereço onde deseja receber seu pedido'
                  )}
                </p>
              </div>
            </div>
            <form className='mt-8 grid grid-flow-row grid-cols-5 gap-4'>
              <input
                type='number'
                placeholder='CEP'
                max={99999999}
                min={0}
                className='p-3 rounded-md bg-base-input col-span-2'
              />
              <input
                type='text'
                placeholder='Rua'
                className='p-3 rounded-md bg-base-input col-span-5'
              />
              <input
                type='number'
                placeholder='Número'
                max={99999999}
                min={0}
                className='p-3 rounded-md bg-base-input col-span-2'
              />
              <input
                type='text'
                placeholder='Complemento'
                className='p-3 rounded-md bg-base-input col-span-3'
              />
              <input
                type='text'
                placeholder='Bairro'
                className='p-3 rounded-md bg-base-input col-span-2'
              />
              <input
                type='text'
                placeholder='Cidade'
                className='p-3 rounded-md bg-base-input col-span-2'
              />
              <input
                type='text'
                placeholder='UF'
                min={2}
                max={2}
                className='p-3 rounded-md bg-base-input'
              />
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
              return (
                <CoffeeCardSimple
                  key={coffee.id}
                  item={coffee}
                  divider={true}
                />
              )
            })}

            <div className='flex flex-col'>
              <div className='flex justify-between mt-3 text-roboto-text-s md:after:text-roboto-text-m'>
                <p className='grow'>
                  {changeCase.sentenceCase('total de itens')}
                </p>
                <span>R$ 29,70</span>
              </div>

              <div className='flex justify-between mt-3 text-roboto-text-s md:after:text-roboto-text-m'>
                <p className='grow'>{changeCase.sentenceCase('entrega')}</p>
                <span>R$ 3,50</span>
              </div>

              <div className='flex justify-between mt-3 text-base-subtitle text-roboto-text-m md:after:text-roboto-text-l font-bold'>
                <p className='grow'>{changeCase.sentenceCase('total')}</p>
                <span>R$ 33,20</span>
              </div>

              <button
                type='submit'
                className='items-center bg-yellow mt-6 h-11 text-white font-bold rounded-md'
              >
                {changeCase.constantCase('confirmar pedido').replace('_', ' ')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
