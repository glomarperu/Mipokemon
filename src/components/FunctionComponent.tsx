import React from 'react'

export const FunctionComponent = () => {

    const a: number =3;
    const b: number =4;
    
    const sum = (a:number, b: number):string => {
        return (a+b).toString();
    }


  return (
    <div>
        FunctionComponent
        <h3>Suma de {a} y {b}</h3>  
        <h3>Suma de </h3>
    </div> 
  )
}
