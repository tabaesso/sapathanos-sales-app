# ✨ sapathanos-sales-app

![Status][status-badge]
[![Apk Download][apk-badge]][apk-url]
[![License][license-badge]][license-url]
<br />

## ⚠ Requisitos projeto
*  Yarn
*  Expo
*  [sapathanos-sales-server](https://github.com/tabaesso/sapathanos-sales-server)
*  Prettier
*  EditorConfig
*  ESLint
* [Veja algumas rotas da api aqui](routes.md)

## 👩🏻‍💻 Como rodar o projeto: desenvolvimento?

   -  Digite `yarn` na raiz para instalar as dependências do projeto.
   -  Altere o arquivo `src/services/api.ts`, modifique a baseURL para a url do servidor rodando em sua máquina.
   -  Digite `yarn start` na raiz para executar o expo, que por sua vez, executa o aplicativo.

## 🛑 Padrão de código
   -  Para entender como instalar o EditorConfig, Prettier e ESLint no projeto. Observação: Não é preciso configurá-los novamente, só instalar as extensões e alterar as settings.json do VSCode caso ainda não estejam configuradas. https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7

## 🌐 COMANDOS GIT:

### Básicos:
`git pull` - pega todos os commits do github e atualiza sua branch local<br>
`git add` . - adiciona as alterações que foram feitas, os arquivos alterados, etc<br>
`git add arquivo1.js` - adiciona apenas as alterações do arquivo1.js<br>
`git commit -m "mensagem aqui"` - faz um commit com a mensagem que vc desejar<br>
`git push` - envia o commit que você fez para o repositório no github<br>

### Branch:
`git branch` - ver em qual branch você está<br>
`git checkout branch1` - vai para a branch com o nome: "branch1"<br>
`git branch branch2` - cria uma branch com o nome: "branch2"<br>
`git checkout -b branch3` - cria uma branch com o nome "branch3" e já entra nela (checkout)<br>
`git push -u origin branch1` - para fazer o primeiro push da branch criada, é preciso usar esse comando ou o comando que o github sugerir<br>
`git fetch` - atualiza no seu pc se alguém criou ou alterou alguma outra branch que você não trabalhava, etc<br>

## ⚠ IMPORTANTE:
-Antes de começar a desenvolver sempre deve ser feito um pull na branch em que vc está trabalhando, para garantir que ela está sincronizada com o conteúdo do github<br>
-Sempre quando quiser mandar algo para o git precisa seguir a ordem: add > commit > push<br>
-Quando você tiver acabado de testar a sua branch e estiver 100% ok que ela tá pronta, vc entra no github e cria um pull request da sua branch para a main<br>
-Caso surja qualquer dúvida de como fazer alguma coisa, é só me procurar (Tábata)<br>

## ⚠ NOMES DAS BRANCHES:
A nomenclatura deve seguir o padrão:<br>
-main<br>
-feature/nome-da-funcionalidade (Ex: cadastro-guia)<br>
-fix/nome-do-que-estiver-sendo-consertado (Ex: cadastro-guia-salvando)<br>

## Autores:

<table>
    <tr>
        <td style="text-align:center">
            <a href="https://github.com/yu-gui-oh" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/47790486?s=115&v=4"><br><sub>@yu-gui-oh</sub></a>
        </td>
        <td style="text-align:center">
            <a href="https://github.com/schuansk" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/11741138?s=115&v=4"><br><sub>@schuansk</sub></a>
        </td>
        <td style="text-align:center">
            <a href="https://github.com/tabaesso" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/43206830?s=115&v=4"><br><sub>@tabaesso</sub></a>
        </td>
        <td style="text-align:center">
            <a href="https://github.com/VitoriaVidal" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/47597666?s=115&v=4"><br><sub>@VitoriaVidal</sub></a>
        </td>
    </tr>
</table>

### 📓 Licença
Este projeto está sob a licença do MIT. Veja a [licença][license-url] para mais informações.

[status-badge]: https://img.shields.io/badge/status-building-important?logo=tool&color=%2334EB43
[apk-badge]: https://img.shields.io/badge/Apk-download-important?logo=android&color=%239B51E0
[apk-url]: https://drive.google.com/file/d/1ZfdLieHXbqJk92k58hMeJhE0VpJMAgI0/view?usp=drivesdk
[license-badge]: https://img.shields.io/github/license/tabaesso/sapathanos-sales-app?color=%239B51E0
[license-url]: https://github.com/tabaesso/sapathanos-sales-app/blob/main/LICENSE
