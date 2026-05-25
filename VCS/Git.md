# Git
Estudo do Git, para controle de versão e colaboração em projetos de desenvolvimento de software.

[Documentação oficial do Git](https://git-scm.com/docs)

## Configurando o Git

Configurar o Git é simples, mas precisa seguir uma ordem lógica. Abaixo está o passo a passo padrão para qualquer ambiente (Windows, macOS ou Linux). 

#### [Autenticação por Token](https://www.alura.com.br/artigos/nova-exigencia-do-git-de-autenticacao-por-token-o-que-e-o-que-devo-fazer)

### 1. Verifique se o Git está instalado 

Abra o terminal e rode:
```
git --version
```
Se não aparecer a versão, instale via:  
Windows: https://git-scm.com/download/win

Linux (Ubuntu/Debian):
```
sudo apt install git -y
```
macOS:  
```
brew install git
```
   
### 2. Configure identidade global
Essas informações ficam gravadas para todos os repositórios no seu sistema:
```
git config --global user.name "nomeDeUsuárioGitHub"
git config --global user.email "seuemailDoGitHub@dominio.com"
```

Verifique se deu certo:
```
git config --global --list 
```

Essas informações ficam gravadas para todos os repositórios no seu sistema: 
```
git config --global user.name "nomeDeUsuárioGitHub" 
git config --global user.email "seuemailDoGitHub@dominio.com" 
```

Verifique se deu certo: 
```
git config --global --list 
```

### 3. Configure o editor padrão (opcional) 
Se quiser usar o VS Code para mensagens de commit: 
```
git config --global core.editor "code --wait" 
```

### 4. Configure o cache de credenciais (autenticação) 
Para não precisar digitar senha toda hora: 
```
git config --global credential.helper store 
```
#### Ou use o Git Credential Manager (instalado junto no Windows).

### 5. Gere e conecte sua chave SSH (recomendado) 

Permite autenticação segura com GitHub/GitLab sem senha: 
```
ssh-keygen -t ed25519 -C "seuemail@dominio.com" 
# Pressione Enter para aceitar o local padrão e defina uma senha (opcional)
```

Depois adicione a chave pública (~/.ssh/id_ed25519.pub) no GitHub:  
Settings → SSH and GPG keys → New SSH key 

Teste a conexão:
```
ssh -T git@github.com 
# Deve retornar uma mensagem de sucesso
```

### 6. Teste o ambiente 

Crie uma pasta e inicialize um repositório: 
```
mkdir teste-git && cd teste-git 
git init 
touch README.md 
git add . 
git commit -m "Primeiro commit"
git log 
```

## GitIgnore ou .gitignore
Existe um recurso que nos permite criar um arquivo para informar ao Git quais diretórios e arquivos do projeto ele deverá ignorar. Esse arquivo é chamado de .gitignore. Podemos criar um arquivo com esse nome no nosso projeto.

Por exemplo, vamos supor que temos uma pasta chamada temp no projeto, que é uma pasta temporária, com arquivos temporários. Estamos adicionando essa pasta no arquivo .gitgnore para que o Git ignore esse arquivo. Se tivermos outros arquivos e diretórios, cada um deles estaria separado por linhas.

Portanto, na linha abaixo, poderíamos colocar arquivo.txt passando um nome específico ou padrão, por exemplo, *.css. Nós usaremos apenas o temp/. Com isso, estamos dizendo, basicamente, para o Git: "Ignore a pasta temp do projeto".
Ao invés de criarmos o .gitignore manualmente, precisando lembrar quais são os arquivos e diretórios daquela linguagem, daquela tecnologia, existem sites que nos auxiliam nessa tarefa. Existem sites geradores de .gitignore para cada tecnologia.

Um desses auxiliadores é o site [gitignore.io](https://www.toptal.com/developers/gitignore), que é um site utilitário. Nele, indicamos a tecnologia ou a linguagem de programação, por exemplo, Java, e apertamos o botão "criar". Com isso, ele retorna como seria um .gitignore para um projeto com Java.

Ele fornece o arquivo completo, inclusive, listando *.class, *.log, *.ctxt, e o diretório temp, .jar. Para o Java, esses são os arquivos a serem ignorados.

## Git Fetch
O git fetch é o processo de baixar as alterações de um repositório remoto para o seu repositório local.
É diferente do git pull, que não só baixa as alterações, mas também as aplica ao seu branch de trabalho, o que pode ser menos seguro, pois pode alterar o código local.
Ele permite que você veja as mudanças antes de sincronizá-las com o seu trabalho atual. 
No menu Git, selecionar a opção Fetch.
Para efetuar manualmente um git fetch, use o menu Git ou a linha de comandos do terminal ou da IDE:
```
git fetch
```
Para baixar as alterações do repositório remoto sem aplicar diretamente ao seu branch local.

## Comandos para o Uso do GIT dentro do Terminal da IDE VsCode

Baixar commits do repositório remoto para o repositório local
( Puxar uma atualização online para local ) utilizando o comando: 
```
git pull
```
###### Alternativa:

````
git pull origin main
````

Baixar uma cópia de um repositório hospedado no GitHub para o seu computador, utilizando o comando:
```
git clone
```

Realizar alterações no código de um projeto e registrá-las com commits, utilizando os comandos:
```
git add .
git commit -m "Mensagem do commit"  
```

Visualizar quais arquivos foram modificados no repositório local, utilizando o comando:
```
git status
```

Listar os commits realizados no repositório, com dados do autor, data e mensagem de cada commit, utilizando o comando:
```
git log
```
 Exibir Alterações Detalhadas:
```
git log -p
```
 Exibir Apenas Mensagens de Commit:
```
git log --oneline
```

Visualizar os repositórios remotos linkados com o repositório local, utilizando o comando:
```
git remote
```

Enviar commits feitos no repositório local para o repositório remoto, utilizando o comando:
```
git push
```
##### Alternativa:
```
git push origin main
```

Alterar o nome de um commit:
```
git commit --amend -m novoNomeDoCommit
```

### Adicionar Co-Autores:

Cada commit possui por padrão um autor, que é a pessoa que realizou aquelas alterações no código.

Entretanto, quando trabalhamos em equipe pode ser que algum trecho de código seja escrito em dupla ou trio. Assim, como definir a autoria dessas outras pessoas no commit?

O Git oferece a possibilidade de adicionar mais de um autor a um commit. Para isso, após escrever a mensagem do commit, pulamos duas linhas e usamos a palavra-chave Co-authored-by:, seguido do nome e e-mail associado ao GitHub (entre < >) de cada pessoa colaboradora.

**Cada coautor deve estar em uma linha diferente, como é mostrado no exemplo a seguir**
```
$ git commit -m "Adicionar nova funcionalidade.
>
>
Co-authored-by: NOME <nome@email.com>
Co-authored-by: OUTRO-NOME <outro@email.com>"
```

### Reverter Commits
##### É importante destacar que os comandos do Git que permitem modificar o histórico de commits devem ser utilizados com prudência e apenas quando o commit em questão ainda não foi enviado ao repositório remoto, ou seja, quando ele existe apenas no seu repositório local. Modificar um commit que já se tornou público, ou seja, aquele que já foi enviado ao GitHub ou a qualquer outro repositório remoto, pode acarretar problemas consideráveis na colaboração com as outras pessoas e na integridade do histórico de um projeto. Em situações de colaboração em equipe, é essencial manter a integridade do histórico de commits, pois qualquer modificação em um commit que outras pessoas estejam trabalhando pode resultar em conflitos e dificuldades na colaboração. É recomendável evitar a modificação excessiva do histórico de commits, uma vez que isso pode tornar o histórico confuso. O histórico deve ser uma representação precisa do progresso do projeto ao longo do tempo.

Reverter o commit com o ID de qual commit quer voltar
```
git revert <id_do_commit>
```

Geralmente verificamos os ultimos commits com
```
git log
```
Copiamos o ID e usamos o comando. Exemplo:
```
git revert e073e6183asder5450f8cwe434r9b88
```
*****Gerando um novo commit*****

Apagar um commit:
```
git reset --hard <id_do_commit>
```

Para reverter automaticamente as mudanças feitas no último commit sem excluir o histórico:
```
git revert <hash-do-commit>
```

Se você precisar reverter uma série de commits, pode utilizar o seguinte comando:
```
git revert -n <hash-do-ultimo-commit-a-manter>
```
**Lembre-se que após reverter, é necessário realizar um novo commit para aplicar a reversão ao repositório**

Use para apagar o commit selecionado, desfazendo automaticamente as mudanças no código:
```
git reset --hard <hash-do-ultimo-commit-a-manter>
```
Se você apenas deseja desfazer commits, mas manter as alterações no diretório de trabalho, você pode usar 
```
git reset --soft
```
ou
```
git reset --mixed
```


#### Referencias
https://git-scm.com/docs  
https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/  
https://www.toptal.com/developers/gitignore/  
https://www.alura.com.br/artigos/o-que-e-git-github  
https://www.alura.com.br/artigos/iniciando-repositorio-git  