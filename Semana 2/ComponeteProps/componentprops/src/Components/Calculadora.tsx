import React from 'react'
import { Parametros } from '../Modelos/Parametros';


function Suma(a: number,b:number){
    return a+b;
}


function Resta(a:number,b:number){
  return a-b;
}


function Multiplicacion(a:number,b:number){
  return a*b;
}


function Factorial (a:number){
  let resultado = 1
  for (let i=2; i<=a; i++) {
    resultado *=i;
  }
  return resultado
}



function Calculadora(props:Parametros) {
  return (
    <><div>Suma de los valores es: {Suma(props.a, props.b)}</div>
    <div>Resta de los valores es: {Resta(props.a, props.b)}</div>
    <div>Multiplicación de los valores es: {Multiplicacion(props.a, props.b)}</div>
    <div>Factorización de los valores es: {Factorial(props.a)}</div></>
  )
}

export default Calculadora


