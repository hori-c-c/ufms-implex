# Resolução da terceira lista de IMPLEX

Esse projeto é a solução do nosso grupo para a quarta atividade da disciplina de Implementação Algoritmica na UFMS.

Discentes: Arthur Cabral, Horiel Costa, Rafael Guardiano.

## Tecnologias usadas

--> Node.js

## Como utilizar

Com o código fonte clonado no terminal escreva "npm i" e após isso, basta escrever no terminal "node main.js" ou "npm run start" para a execução iniciar. Executando dessa maneira, todos os parâmetros para a criação dos casos de teste serão os defaults determinados no código.

### Parâmetros para a criação dos casos de teste

Os parâmetros são respectivamente o tamanho inicial da barra, o tamanho final dela e a distância entre dois valores da barra. Para alterá-los basta passar eles como parametros na linha de comando. Dessa forma, o comando "node main.js 10 100 10" representaria que:

--> inicialLength = 10
--> finalLength = 100
--> spt = 10

Os valores defaults podem ser observados entre as linhas 8 e 10 do arquivo main.js.

## Considerações do projeto

Caso na escolha de parâmetros haja algum momento em que o tamanho da barra seja maior que 7300, pode ser que aconteça estouro de memórias por causa das chamadas recursivas na função memorizerBarCutAux, isso ocorreu durante o desenvolvimento da implementação da atividade.

Outro ponto interessante a se comentar é que o algoritmo guloso se comportou muito bem nos nossos testes, provavelmente pela da densidade como parâmetro para ele escolher o tamanho da barra. No meio de vários testes ocorreu casos em que o algoritmo de guloso retornou um valor menor que o da programação dinâmica, mas foram bem raros.

## Retorno do projeto

 Ao fim da execução do programa haverá uma pasta "out" localizada na raiz do projeto com um arquivo result.txt contendo os tempos de execução de cada algoritmo para cada caso de teste.

 ## Gráficos 
 Os gráficos estao localizados na pasta graphs. Foram gerados a partir do gnuplot como solicitado.