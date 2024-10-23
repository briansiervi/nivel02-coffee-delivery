import { useState } from 'react'

interface IncrementeButtonProps {
  id: string
  maximumStock: number
}

export function IncrementButton({ id, maximumStock }: IncrementeButtonProps) {
  const [actualStock, setActualStock] = useState(0)

  return (
    <div className='content-center rounded-md bg-base-button'>
      <button
        className='text-center w-6 text-purple text-roboto-text-button-g'
        type='button'
        onClick={() => actualStock > 0 && setActualStock(actualStock - 1)}
        disabled={actualStock === 0}
      >
        -
      </button>
      <input
        className='bg-base-button bg-transparent text-roboto-text-s text-center w-12 md:w-6'
        id={id}
        type='number'
        min={0}
        max={maximumStock}
        readOnly
        value={actualStock}
        placeholder='0'
        step={1}
      />
      <button
        className='text-center w-6 text-purple text-roboto-text-button-g'
        type='button'
        onClick={() =>
          actualStock <= maximumStock && setActualStock(actualStock + 1)
        }
        disabled={actualStock > maximumStock}
      >
        +
      </button>
    </div>
  )
}
