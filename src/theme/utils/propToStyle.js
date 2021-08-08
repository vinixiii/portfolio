import { breakpointsMediaQuerie } from './breakpointsMediaQuerie';

export function propToStyle(propName) {
  //Retorna uma function que é executada pelo styled-components
  //aplicando assim o estilo ao componente
  return function (props) {
    //Armazena o valor de um item do objeto 'props' que tenha a chave
    //com o mesmo nome de 'propName'.
    //Supondo que:
    //propName = textAlign
    //props: {...props, textAlign: center}
    //Então:
    //propValue = center
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      //Retorna um objeto que a chave é o valor de propName, e o valor
      //é o valor de propValue
      //Ex: textAlign: center
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      //Retorna a função breakpointsMediaQuerie que recebe como parâmetro
      //um objeto que possui chave (valor de propName)
      //e valor (valor de propValue no item correspondente).Exemplo:
      //Supondo que:
      //margin={{xs: '10px', sm: '20px'}}
      //Então:
      //propName = margin
      //propValue = {xs: '10px', sm: '20px'}
      //Sendo assim:
      //[propName]: propValue.xs === margin: 10px
      return breakpointsMediaQuerie({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}
