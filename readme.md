# Lambda Serverless Framework
Este projeto tem como objetivo fazer proxy de chamadas de API utilizadas no BPM por meio de Lambdas, que é um serviço de computação sem servidor e orientado a eventos que permite executar código para praticamente qualquer tipo de aplicação ou serviço de backend sem provisionar ou gerenciar servidores.

Para criar uma Lambda pode-se usar o Serverless Framework, que é um framework web gratuito e de código aberto para criação de funções serverless, não limitada somente a Lambda AWS, mas é um ótimo produto para criação das mesmas.

## Necessário para o ambiente
    - Nodejs, link de donwload [aqui](https://nodejs.org/pt-br/blog/release/v14.15.0/)
    - Após instalação rodar o comando `npm i -g serverless@3.7.1`

## Desenvolvendo a Lambda
Após clonar este repositório é necessário instalar as dependências com o comando abaixo:
 - `cd http-api-sample && npm i`

Após a instalação das dependências pode-se criar lógicas, chamadas de APIs, mapeamentos e muito muito mais dentro do arquivo `handler.js` disponível no projeto.

## Executando localmente
Para rodar a lambda localmente é necessário rodar o comando:
 -  `sls offline`

Ao finalizar a compilação será disponibilizado um endpoint para a chamada da função `handler.js`.
Tal endpoint (que será parecido com este `http://localhost:3000/prod`) pode ser chamados via Postman ou diretamente pelo browser.

## Executando na AWS
Antes de gerar a build para a AWS é necessário setar as chaves de API através do comando abaixo:
- `sls config credentials --provider aws --key EXAMPLE_KEY --secret EXAMPLE_SECRET`

A documentação referente a estas chaves estão disponíveis [aqui](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html).

Após a configuração das chaves basta realizar o seguinte comando:
- `sls deploy`

Após o término do deploy será exibido um endpoint para chamada desta lambda na aws, que será similar a este `https://gkl1phg380.execute-api.us-east-1.amazonaws.com/prod/`

# Usar a Lambda no BPM
Para utilizar a Lambda criada acima é necessário acessar o cadastro de fontes externas do BPM informando o endpoint e o mapeamento de dados, como pode ser visto na imagem abaixo:

![Mapeamento lambda BPM](https://raw.githubusercontent.com/SeniorSA/lambda-serverless-framework-sample/main/imagens/api-externa.PNG)

Agora basta utilizar esta API externa em processos do BPM.