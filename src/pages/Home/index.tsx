import bigCoffee from '../../assets/big-coffee.svg'

export function Home() {
  return (
    <div>
      <div className='flex flex-row gap-4 md:gap-8 l:gap-14'>
        <div className='flex flex-col w-3/5'>
          <span
            className='font-baloo2
            text-baloo2-title-xs
            s:text-baloo2-title-s
            md:text-baloo2-title-l
            l:text-baloo2-title-l
            xl:text-baloo2-title-xl'
          >
            Encontre o café perfeito para qualquer hora do dia
          </span>
          <span className='roboto-text-xs s:roboto-text-s md:roboto-text-m l:roboto-text-l'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div
            className='flex flex-row flex-wrap roboto-text-tag
            mt-4
            s:mt-8
            md:mt-8
            l:mt-16
            '
          >
            <div className='s:basis-1/2 md:basis-1/2 l:basis-1/2'>
              <span>Compra simples e segura</span>
            </div>
            <div className='s:basis-1/2 md:basis-1/2 l:basis-1/2'>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className='s:basis-1/2 md:basis-1/2 l:basis-1/2'>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className='s:basis-1/2 md:basis-1/2 l:basis-1/2'>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <div className='w-2/5'>
          <img
            src={bigCoffee}
            alt='Imagem de um grande copo de café branco, com uma tampa preta e um adesivo também preto, descrito "Coffee delivery", com o logotipo do site'
          />
        </div>
      </div>
      <div>
        <span>Nossos cafés</span>
        <div>
          <span>Expresso Tradicional</span>
          <span>Expresso Americano</span>
          <span>Expresso Cremoso</span>
        </div>
      </div>
    </div>
  )
}
