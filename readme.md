# Lambda Serverless Framework
Este projeto tem como objetivo fazer proxy de chamadas de API utilizadas no BPM por meio de Lambdas.

## Necessário para o ambienbte
    - Nodejs, link de donwload [aqui](https://nodejs.org/pt-br/blog/release/v14.15.0/)
    - Após instalação rodar o comando `npm i -g serverless@3.7.1`

## Desenvolvendo a lambda
Após clonar este repositório é necessário instalar as dependências com o comando abaixo:
 - cd http-api-sample && npm i

Após a instalação das dependências pode-se criar lógicas, chamadas de APIs, mapeamentos e muito muito mais dentro do arquivo `handler.js` dentro do projeto.

### Executando localmente
Para rodar a lambda localmente é necessário rodar o comando `sls offline`, e ao finalizar a compilação será disponibilizado um endpoint para a chamada da função `handler.js`.
Tal endpoint (que será parecido com este `http://localhost:3000/prod`) pode ser chamados via Postman ou diretamente pelo browser.

### Executando na AWS
Antes de gerar a build para a AWS é necessário setar as chaves de API através do comando abaixo:
- sls config credentials --provider aws --key EXAMPLE_KEY --secret EXAMPLE_SECRET

A documentação referente a estas chaves estão disponíveis [aqui](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html).

Após a configuração das chaves basta realizar o seguinte comando:
- sls deploy

Após o término do deploy será exibido um endpoint para chamada desta lambda na aws, que será similar a teste https://gkl1phg380.execute-api.us-east-1.amazonaws.com/prod/