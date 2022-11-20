# Resolução da terceira lista de IMPLEX

Esse projeto é a solução do nosso grupo para a quinta atividade da disciplina de Implementação Algoritmica na UFMS.

Discentes: Arthur Cabral, Horiel Costa, Rafael Guardiano.

## Tecnologias usadas

--> Node.js

## Como utilizar

Com o código fonte clonado no terminal escreva "npm i" e após isso, basta escrever no terminal "node main.js" ou "npm run start" para a execução iniciar. Executando dessa maneira, todos os parâmetros para a criação dos casos de teste serão os defaults determinados no código.

### Parâmetros para a criação dos casos de teste

Os parâmetros são respectivamente o número inicial de vértices do grafo, o número final de vértices e a distância entre dois valores de caso de teste. Para alterá-los basta passar eles como parametros na linha de comando. Dessa forma, o comando "node main.js 10 100 10" representaria que:

--> inicialLength = 10
--> finalLength = 100
--> spt = 10

Os valores defaults podem ser observados entre as linhas 8 e 10 do arquivo main.js.

Caso queira mudar a probabilidade de criação de uma aresta, basta ir no arquivo utils.js na linha 29 e alterar a condição para o valor desejado.


## Considerações da atividade

--> A probabilidade escolhida para criação de uma aresta foi de 0,2% pelo fato de que conforme o número de vértices aumenta, fica muito raro ver gráficos bipartidos, dessa forma, a escolha de um valor baixo é para facilitar a ocorrência deles;

--> A parte de inicialização dos atributos dos vértices está sendo feita na própria criação desses, tirando essa responsabilidade da função de busca em largura. Além disso, foram feitos alguns pequenos ajustes para atender a proposta do exercício.
## Retorno do projeto

 Ao fim da execução do programa haverá uma pasta "out" localizada na raiz do projeto com um arquivo result.txt contendo o número de vértices, o número de arestas e a informação se o grafo é ou não bipartido para cada caso de teste.