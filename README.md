# Resolução da segunda lista de IMPLEX

Esse projeto é a solução do nosso grupo para a terceira atividade da disciplina de Implementação Algoritmica na UFMS.

Discentes: Arthur Cabral, Horiel Costa, Rafael Guardiano.

## Tecnologias usadas

--> Node.js

## Como utilizar

Com o código fonte clonado no terminal escreva "npm i" e após isso, basta escrever no terminal "node main.js" ou "npm run start" para a execução iniciar. Executando dessa maneira, todos os parâmetros para a criação dos casos de teste serão os defaults determinados no código.

### Parâmetros para a criação dos casos de teste

Os parâmetros são os mesmos descritos na atividade e para alterá-los basta passar eles como parametros na linha de comando. Dessa forma, o comando "node main.js 10000 100000 10000 20 70000" representaria que:

--> inc = 10000
--> fim = 100000
--> spt = 10000
--> rpt = 20
--> maxRandomNumber = 70000

Os quatro primeiros parâmetros estão especificados na atividade e o último representa o inteiro máximo que pode fazer parte de um caso de teste. Os valores defaults podem ser observados entre as linhas 11 e 15 do arquivo main.js.

## Retorno do projeto

 Ao fim da execução do programa haverá uma pasta "out" localizada na raiz do projeto com um arquivo result.txt contendo os tempos de execução de cada algoritmo para cada caso de teste.

 ## Gráficos 
 Os gráficos estao localizados na pasta graphs. Foram gerados a partir do gnuplot como solicitado.

 ## Considerações do trabalho

 --> Para o algoritmo QuickSort foi utilizada a versão aleatorizada, pois para casos de teste de tamanho maior que 5000 a pilha de execução estourava.