import React from 'react'

export const CounterComponent = () => {

    // Logica

    const count : number = 5;
    const increment = (value: number) => {
        return value++;
    }

  return (
    <>  
    <div>

        <h3>Contador actual:</h3>
        <div>
            <button onClick={ () => increment(count) }>+1</button>            
        </div>
    </div>
    </>
  )
}
