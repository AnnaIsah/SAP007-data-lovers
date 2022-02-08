# Data Lovers

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Definição do Produto](#4-definição-do-produto)
- [5. Histórias de Usuário](#5-histórias-de-usuário)

---

## 1. Preâmbulo

Segundo a
[Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read)
90% dos dados que existem hoje foram gerados durante os últimos dois anos. A
cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes
quantidades de dados se convertam em **informação** compreensível para os
usuários, precisamos entender e processar estes dados. Uma forma simples de
fazer isso é criando _interfaces_ e _visualizações_.

Na imagem seguinte, você pode ver como os dados que estão na parte esquerda
podem ser usados para construir a interface amigável e compreensível que está na
parte direita.

![json-interface](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

---

## 2. Resumo do projeto

Projeto de uma _página web_ para visualizar um _conjunto
(set) de dados_** que se adeque às necessidades do usuário.

Ela permite **visualizar dados,
filtrá-los, ordená-los e fazer algum cálculo agregado**.

Escolhemos a temática do Studio Ghibli [Studio Ghibli](https://ghiblicollection.com/). Nossos usuários são fãs ou consumidores das animaçoes do Studio Ghibli, que gostam e procuram informações para saber mais dos seus filmes e personagens favoritos.

---

## 3. Objetivos de aprendizagem

Planejamento
Desenho e criação de interface
Manipulação de dados
HTML
CSS
Web APIs
Javascript
Git / Github
Responsividade
Testes
UI / UX

---

## 4. Definição de produto

A página foi desenhada com uma interface simples de busca, que permite fácil acesso as informações desejadas.Com uma página de abertura com _gif_ muito utilizado hoje em dia com animações e com uma página complementar de _news_ para manter o usuário informado sobre as últimas notícias do estúdio.Com a notícia principal da inauguração de uma parque temático **Studio Ghibli** no Japão em novembro de 2022, o que dará bastante visibilidade para o tema.

A paleta de cores escolhida foi pensada devido as cores pastéis predominante em várias produções do estúdio.

---

### 5. Histórias de usuário

Para entender o que o usuário faz e necessita, criamos um _form_ para Pesquisa de Usuário, que nos retornou as informações para implementação da página.O usuário sempre pesquisa informações para se aprofundar de filmes já assistidos e que lhe agradaram.

### Definição de Pronto

Código funcional

Estilo que atenda ao protótipo

Código limpo, semântico e identado

Código no repositório

### Critérios de Aceitação

Exibir na tela a informação desejada pelo usuário, para que ele possa manuseá-la.

#### Protótipo de baixa fidelidade



#### Protótipo de alta fidelidade



#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, você terá que
escrever seus próprios testes para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`, que irá conter suas funções e que está
detalhado na seção de [Considerações técnicas](#srcdatajs).
