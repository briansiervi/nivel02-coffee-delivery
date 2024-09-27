import bigCoffee from '../../assets/big-coffee.svg'

export function Home() {
  return (
    <div>
      <div className='flex flex-row'>
        <div className='flex flex-col min-w-[36.75rem]'>
          <span className='text-4xl font-baloo2 text-baloo2-title-xl'>
            Encontre o café perfeito para qualquer hora do dia
          </span>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div>
            <span>Compra simples e segura</span>
            <span>Embalagem mantém o café intacto</span>
            <span>Entrega rápida e rastreada</span>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
        <div className='min-w-[29.75rem] min-h-[22.5rem]'>
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
