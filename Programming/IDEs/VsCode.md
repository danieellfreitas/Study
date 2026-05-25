## Excecutar Imprimir(print) em Terminal VsCode

### Em JavaScript (console.log)

Se instala o SDK - "Software Development Kit" nodejs  https://nodejs.org/pt/download
Após instalado comando node node 'nome_do_arquivo.js' vai imprimir...

## GIT no VSCode
Conseguimos fazer alguns comandos dentro da IDE do VsCode nativamente pelo icone de 'Controle do Código-Fonte'

### Git Fetch no VS Code: O que é e como funciona

Sim, o Visual Studio Code (VS Code) pode executar periodicamente o git fetch, e a caixa de diálogo "Deseja que o Code Editor execute periodicamente 'git fetch'?" indica essa funcionalidade. É recomendável selecionar "Perguntar Mais Tarde" para a configuração, que pode ser gerenciada manualmente através da janela Repositório Git ou pelas configurações do VS Code. Para efetuar manualmente um git fetch, use o menu Git ou a linha de comandos do terminal para baixar as alterações do repositório remoto sem aplicar diretamente ao seu branch local. 
Como funciona o Git Fetch
O git fetch é o processo de baixar as alterações de um repositório remoto para o seu repositório local.
É diferente do git pull, que não só baixa as alterações, mas também as aplica ao seu branch de trabalho, o que pode ser menos seguro, pois pode alterar o código local.
Ele permite que você veja as mudanças antes de sincronizá-las com o seu trabalho atual. 
Como configurar ou gerenciar o git fetch no VS Code
Caixa de diálogo inicial: Se uma caixa de diálogo perguntar se você deseja habilitar fetches periódicos, selecione "Perguntar Mais Tarde".
Manualmente: Para executar um fetch a qualquer momento, você pode:
Abrir a janela Repositório Git (ícone da lupa).
No menu Git, selecionar a opção Fetch.
Através da janela de comando: No terminal integrado do VS Code, você pode executar o comando git fetch. 
Em resumo
O git fetch periódico no VS Code é uma função para se manter atualizado com as alterações remotas.
A escolha de executá-lo ou não depende de como você prefere trabalhar.
A opção "Perguntar Mais Tarde" permite controlar quando e como o fetch é acionado. 