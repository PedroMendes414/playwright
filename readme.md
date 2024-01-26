# 🎭 Introdução

Este projeto demonstra o uso do Playwright para automação de testes em um aplicativo da web. No exemplo, estamos testando o processo de login em uma aplicação fictícia chamada "Swag Labs".

# Pré requisitos:

- Node.js 16+
- NPM
- Para usuários Windows: Windows 10+, Windows Server 2016+ ou Windows Subsystem for Linux (WSL).
- Para usuários de Mac: MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Para usuários de Linux: Debian 11, Debian 12, Ubuntu 20.04 ou Ubuntu 22.04, com x86-64 ou arquitetura arm64.

## Instalação 

O Playwright possui seu próprio executor de testes para testes de ponta a ponta, chamado Playwright Test.

A maneira mais fácil de começar com o Playwright Test é executar o comando init

```Shell
# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
```
O Playwright irá automaticamentei instalar os navegadores necessários para rodar os testes e criará automaticamente as seguintes pastas:

playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts

## Estrutura do  projeto

Dentro de .github/workflow foi criado um arquivo de configuração do GitHub Actions para automatizar a execução de testes do Playwright em um ambiente de integração contínua(CI)

O arquivo playwright.config é onde você pode adicionar configurações para o Playwright, incluindo a modificação de quais navegadores você deseja executar o Playwright. Se você estiver executando testes dentro de um projeto já existente, as dependências serão adicionadas diretamente ao seu package.json.

A pasta tests contém um teste de exemplo básico para ajudá-lo a começar com os testes. Foi criado também o arquivo 'login.spec.js' para a escrita dos códigos de automação da pagina de login do site 'www.saucedemo.com'

Para um exemplo mais detalhado, confira a pasta tests-examples, que contém testes escritos para testar um aplicativo de lista de tarefas ("todo app").

O arquivo .gitignore é utilizado para especificar arquivos e diretórios que o Git deve ignorar durante o versionamento. Ele ajuda a evitar que certos arquivos ou diretórios sejam rastreados pelo Git, o que é útil para excluir arquivos temporários, logs, dependências e outros artefatos que não devem ser versionados.

A pasta 'scenarios' é onde está armazenada todos os cenários de testes da aplicação 

## Executando os testes 

O playwright oferece diversas maneiras de se executar os testes:

Por padrão, os testes serão executados em todos os 3 navegadores: Chromium, Firefox e WebKit, usando 3 workers (trabalhadores). Isso pode ser configurado no arquivo playwright.config. 

Os testes são executados no modo headless, o que significa que nenhum navegador será aberto durante a execução dos testes. Os resultados dos testes e os logs serão exibidos no terminal.

```Shell
npx playwright test
```
Para executar o projeto em modo UI, e ver o seu teste executando visualmente, você pode utilizar o comando:

```Shell
npx playwright test --ui
```
Para rodar os seus testes em modo debug, vc pode utilizar o comando:

```Shell
npx playwright test --debug

``` 
O playwright utiliza HTML para poder realizar os reports das execuções dos seu testes, para poder visualizar basta utilizar o seguinte comando:

```Shell
npx playwright show-report
```

## Exemplos
Para aprender mais e abranger seu conhecimento, acesse a documentação oficial [getting started docs](https://playwright.dev/docs/intro).

## Fontes

* [Documentation](https://playwright.dev/docs/intro)
* [API reference](https://playwright.dev/docs/api/class-playwright/)
* [Contribution guide](CONTRIBUTING.md)
* [Changelog](https://github.com/microsoft/playwright/releases)