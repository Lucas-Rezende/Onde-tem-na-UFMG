# ES_TP
 Trabalho prático desenvolvido para a disciplina 'DCC203 - Engenharia de Software', ministrada na UFMG."

 ## Integrantes
- Lucas Momede Barreto Rezende (Fullstack)
- Vinícius de Oliveira Marcos (Fullstack)
- Wilian Ventura dos reis (Fullstack)
- Luiza Sodré Salgado (Fullstack)

## Objetivo
- Montar um sistema Web que informa os valores dos itens de cada lanchonete da universidade. 

## Principais Features
- Exibir todas as lanchonetes
- Exibir os itens e valores
- Comparar o preço de cada item
- Atualizar os valores conforme à alteração no preço dos itens

## Tecnologia
- HTML
- Banco de dados
- CSS
- Javascript
- Angular

## bakclog do Produto
- Como usuário eu quero saber quais itens são vendidos na lanchonete dos campos e os valores
- Como usuário eu quero saber as lanchonetes que vendem no campus e seus itens
- Como usuário eu quero poder comparar os valores dos itens em cada lanchonete
- Como usuário eu quero informar alteração de preços e/ou inclusão de itens
- Como administrador eu quero poder adicionar novas lanchonetes
- Como usuário eu quero sugerir novas funcionalidades para o site
- Como administrador eu quero colocar tags que indiquem as lojas que são mais baratas e as mais caras
- Como usuario eu quero sugerir tags que indiquem as produtos veganos, zero lactose, sem glútem e diabéticos
- Como usuario eu quero saber o horário do funcionamento da lanchonete
- como usuário eu quero poder avaliar o produto oferecido por determinada lanchonete
- Como usuário eu quero sugerir novos itens para as lanchonetes
- Como administrador quero poder excluir as avaliações que não condizem com o site

## backlog do sprint
- Como usuário eu quero saber quais itens são vendidos na lanchonete dos campos e os valores
- Como usuário eu quero saber as lanchonetes que vendem no campus e seus itens
- Como usuário eu quero poder comparar os valores dos itens em cada lanchonete
- Como usuário eu quero informar alteração de preços e/ou inclusão de itens



## História 1
(Como usuário eu quero saber quais itens são vendidos na lanchonete dos campos e os valores)
# Tarefas e Responsáveis:
    - Instalar e configurar banco de dados e criar Tabela com os itens e valores
    - Implementar versão inicial da tela itens
    - integrar o javascript com a tabela
    - Implementar a lógica da busca de item especifico
    - teste unitário e de integração

## História 2
(Como usuário eu quero saber as lanchonetes que vendem no campus e seus itens)
# Tarefas e Responsáveis:
    - Implementar versão inicial da tela de cada loja
    - integrar o javascript com a tabela individual de cada loja
    - Implementar a lógica de seleção de lanchonete
    - teste unitário e de integração

## História 3
(Como usuário eu quero poder comparar os valores dos itens em cada lanchonete)
# Tarefas e Responsáveis:
    - Implementar versão inicial da tela de comparação
    - integrar o javascript com a tabela de cada loja
    - Implementar um metodo de ordenar as lojas por menor preço
    - Implementar um buscador de item para comparação
    - destacar visualmente a lanchonete com o menor preço
    - teste unitário e de integração

## História 4
(Como usuário eu quero informar alteração de preços e/ou inclusão de itens)
# Tarefas e Responsáveis:
    - Implementar na tela de cada loja uma opção de sugerir os novos itens e valores
    - implementar janela que receba nome do produto, valor e o tipo de alteração sugerida
    - implementar uma mensagem de retorno, informando que a atualização irá acontecer
    - armazenar essas indicaçoes em uma tabela
    - comparar os valores novos e existentes para retornar se houve ou não mudança para o admin
