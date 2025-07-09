/* Programa que lê informações de jogos (Nome, preço, genêro, data de lançamento e produtora) inseridos pelo usuário. Depois, ele armazena todas as informações em um arquivo ".txt" na qual pode ser tranformado em um arquivo ".html". O programa também possui mecanismos de listagem, busca, alteração e exclusão */

const prompt = require("prompt-sync")()
const {clear} = require("console")
const {unsubscribe} = require("diagnostics_channel")
const fs = require("fs")

const nome = []
const preco = []
const genero = []
const data = []
const produtora = []

// Adiciona os itens no catálogo
function incluir() {
    console.log("\nIncluir item no catálogo")
    console.log("-".repeat(24))

    const a = String(prompt("Nome: "))
    const b = String(prompt("Preço (R$): "))
    const c = String(prompt("Genêro: "))
    const d = String(prompt("Data de lançamento: "))
    const e = String(prompt("Produtora: "))

    nome.push(a)
    preco.push(b)
    genero.push(c)
    data.push(d)
    produtora.push(e)

    console.log("\nItem cadastrado com sucesso\n")

    do {
        let continuar = prompt("Deseja incluir outro (S/N)? ")

        if (continuar.toUpperCase() == "N") {
            break
        } else if (continuar.toUpperCase() == "S") {
            return incluir()
        } else {
            console.log("\nValor ínvalido, insira novamente\n")
        }
    } while (true)
}

// Mostra todos os itens do catálogo
function listar() { 
    console.log("\nListagem do catálogo")
    console.log("-".repeat(20))

    console.log("Nº..: Nome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")

    for (let i = 0; i < nome.length; i++) {
        console.log(`${String(i + 1).padEnd(5)} ${String(nome[i]).padEnd(24)} R$${String(preco[i]).padEnd(8)} ${String(genero[i]).padEnd(16)} ${String(data[i]).padEnd(13)} ${String(produtora[i])}`)
    }
    console.log("-".repeat(93))
}

// Permite pesquisar por qualquer categoria
function pesquisar() {
    console.log("\nPesquisa geral do catálogo")
    console.log("-".repeat(26))

    let pesquisa = prompt("Insira o que está procurando: ")

    console.log("\nNome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")
    
    for (let i = 0; i < nome.length; i++) {
        if (nome[i].includes(pesquisa) || String(preco[i]).includes(pesquisa) || genero[i].includes(pesquisa) || data[i].includes(pesquisa) || produtora[i].includes(pesquisa)) {
            console.log(`${nome[i].padEnd(24)} R$${String(preco[i]).padEnd(8)} ${String(genero[i]).padEnd(16)} ${data[i].padEnd(13)} ${produtora[i]}`)
        }
    }
    console.log("-".repeat(87))
}

// Permite pesquisar por um intervalo de preço
function pesquisaIntervalo() {
    console.log("\nPesquisa pelo intervalo de preço do catálogo")
    console.log("-".repeat(44))

    let num1 = Number(prompt("Insira o primeiro valor (R$): "))
    let num2 = Number(prompt("Insira o segundo valor (R$): "))

    let maior = Number(0)
    let menor = Number(0)

    if (num1 >= num2) {
        maior = num1
        menor = num2
    } else if (num2 >= num1) {
        maior = num2
        menor = num1
    }

    console.log("\nNome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")

    for (let i = 0; i < nome.length; i++) {
        if (Number(preco[i]) >= menor && Number(preco[i]) <= maior) {
            console.log(`${String(nome[i]).padEnd(24)} R$${String(preco[i]).padEnd(8)} ${String(genero[i]).padEnd(16)} ${String(data[i]).padEnd(13)} ${String(produtora[i])}`)
        }
    }
    console.log("-".repeat(87))
}

// Gera todo o catálogo em uma página personalizavel em html
function web() { 
    let conteudo = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixelplay</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .cabecalho {
            display: flex;
            width: 100%;
            height: 4rem;
            align-items: center;
            justify-content: center;
            background-color: aquamarine;
        }
        h1 {
            font: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse; 
            Background-color: #fff; 
            border-bottom: 1px 1px 6px #999; 
            border-radius: 8px; 
            overflow: hidden;
        }
        th, td {
            padding: 12px; 
            text-align: left; 
            border-bottom: 1px solid #ccc;
        }    
        th {
            background-color: #e0dede; 
            color: #333;
        }
    </style>
</head>

<body>
    <header class="cabecalho">
        <h1>Pixelplay - Catálogo de jogos</h1>
    </header>
    <main>
        <section class="principal">
            <table class="principal__tabela">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Gênero</th>
                        <th>Data de Lançamento</th>
                        <th>Produtora</th>
                    </tr>
                </thead>
                <tbody>
    `

    for (let i = 0; i < nome.length; i++) {
        conteudo += `
                    <tr>
                        <td>${nome[i]}</td>
                        <td>R$${preco[i]}</td>
                        <td>${genero[i]}</td>
                        <td>${data[i]}</td>
                        <td>${produtora[i]}</td>
                    </tr>
        `
    }

    conteudo += `
                </tbody>
            </table>
        </section>
    </main>
</body>
</html>
    `

    fs.writeFileSync("catalogoWeb.html", conteudo)

    console.log("\nCatálogo gerado com sucesso")
}

// Gera uma página personalizavel em html a partir de uma categoria selecionada
function webFiltro() { 
    let conteudo = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixelplay</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .cabecalho {
            display: flex;
            width: 100%;
            height: 4rem;
            align-items: center;
            justify-content: center;
            background-color: aquamarine;
        }
        h1 {
            font: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse; 
            Background-color: #fff; 
            border-bottom: 1px 1px 6px #999; 
            border-radius: 8px; 
            overflow: hidden;
        }
        th, td {
            padding: 12px; 
            text-align: left; 
            border-bottom: 1px solid #ccc;
        }    
        th {
            background-color: #e0dede; 
            color: #333;
        }
    </style>
</head>

<body>
    <header class="cabecalho">
        <h1>Pixelplay - Catálogo de jogos</h1>
    </header>
    <main>
        <section class="principal">
            <table class="principal__tabela">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Gênero</th>
                        <th>Data de Lançamento</th>
                        <th>Produtora</th>
                    </tr>
                </thead>
                <tbody>
    `
    let pesquisa = prompt("Insira o que está procurando: ")

    for (let i = 0; i < nome.length; i++) {
        if (nome[i].includes(pesquisa) || String(preco[i]).includes(pesquisa) || genero[i].includes(pesquisa) || data[i].includes(pesquisa) || produtora[i].includes(pesquisa)) {
            conteudo += `
                        <tr>
                            <td>${nome[i]}</td>
                            <td>R$${preco[i]}</td>
                            <td>${genero[i]}</td>
                            <td>${data[i]}</td>
                            <td>${produtora[i]}</td>
                        </tr>
            `
        }
    }

    conteudo += `
                </tbody>
            </table>
        </section>
    </main>
</body>
</html>
    `

    fs.writeFileSync("catalogoWeb.html", conteudo)

    console.log("\nCatálogo gerado com sucesso.")
}

// Altera um item selecionado do catálogo
function alterar() { 
    console.log("\nAlterar um item do catálogo")
    console.log("-".repeat(27))
    
    console.log("Nº..: Nome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")

    for (let i = 0; i < nome.length; i++) {
        console.log(`${String((i + 1)).padEnd(5)} ${nome[i].padEnd(24)} R$${String(preco[i]).padEnd(8)} ${genero[i].padEnd(16)} ${data[i].padEnd(13)} ${produtora[i]}`)
    }
    console.log("-".repeat(93))
    console.log("")

    do {
        let alterar = Number(prompt("Insira o índice do item que deseja alterar ou '0' para sair: ")) - 1
        console.log("")

        if (alterar >= 0) {
            nome[alterar] = prompt("Nome: ")
            preco[alterar] = Number(prompt("Preço (R$): "))
            genero[alterar] = prompt("Genêro: ")
            data[alterar] = prompt("Data de lançamento: ")
            produtora[alterar] = prompt("Produtora: ")
        
            console.log("\nNº..: Nome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")
        
            for (let i = 0; i < nome.length; i++) {
                console.log(`${String((i + 1)).padEnd(5)} ${nome[i].padEnd(24)} R$${String(preco[i]).padEnd(8)} ${genero[i].padEnd(16)} ${data[i].padEnd(13)} ${produtora[i]}`)
            }
            console.log("-".repeat(93))

            break
        } else if (alterar == -1) {
            break
        } else {
            console.log("Valor inválido, insira novamente\n")
        }
    } while (true)

    console.log("\nItem alterado com sucesso")
}

// Excluir um item selecionado da lista
function excluir() { 
    console.log("Excluir item do catálogo")
    console.log("-".repeat(24))

    console.log("\nNº..: Nome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")

    for (let i = 0; i < nome.length; i++) {
        console.log(`${String((i + 1)).padEnd(5)} ${nome[i].padEnd(24)} R$${String(preco[i]).padEnd(8)} ${genero[i].padEnd(16)} ${data[i].padEnd(13)} ${produtora[i]}`)
    }
    console.log("-".repeat(93))
    console.log("")

    do {
        let excluir = Number(prompt("Insira o número do item que deseja excluir ou 0 para sair: ")) - 1

        if (excluir >= 0) {
            nome.splice(excluir, 1)
            preco.splice(excluir, 1)
            genero.splice(excluir, 1)
            data.splice(excluir, 1)
            produtora.splice(excluir, 1)

            if (excluir != nome.length - 1) {
                for (let i = excluir + 1; i < nome.length - 1; i++) {
                    nome[i] = nome[i + 1]
                    preco[i] = preco[i + 1]
                    genero[i] = genero[i + 1]
                    data[i] = data[i + 1]
                    produtora[i] = produtora[i + 1]
                }
            }

            break
        } else if (excluir == -1) {
            break
        } else {
            console.log("Valor inválido, insira novamente\n")
        }
    } while(true)

    console.log("\nNº..: Nome...................: Preço....: Genêro.........: Lançamento..: Produtora..........:")

    for (let i = 0; i < nome.length; i++) {
        console.log(`${String((i + 1)).padEnd(5)} ${nome[i].padEnd(24)} R$${String(preco[i]).padEnd(8)} ${genero[i].padEnd(16)} ${data[i].padEnd(13)} ${produtora[i]}`)
    }
    console.log("-".repeat(93))

    console.log("\nItem excluído com sucesso")
}

// Salva o catálogo no arquivo.txt
function gravaProdutos() {
    const produtos = []

    for (let i = 0; i < nome.length; i++) {
        produtos.push(nome[i] + ";" + preco[i] + ";" + genero[i] + ";" + data[i] + ";" + produtora[i])
    }

    fs.writeFileSync("produtos.txt", produtos.join("\n"))

    console.log("\nCatálogo salvo com sucesso")
}

// Lê os dados inseridos no arquivo
function obtemProdutos() {
    if (fs.existsSync("produtos.txt")) {
        const produtos = fs.readFileSync("produtos.txt", "utf-8").split("\n")

        for (let i = 0; i < produtos.length; i++) {
            const partes = produtos[i].split(";")

            nome.push(String(partes[0]))
            preco.push(String(partes[1]))
            genero.push(String(partes[2]))
            data.push(String(partes[3]))
            produtora.push(String(partes[4]))
        }
    }
}

obtemProdutos()

menuPrincipal:
do {
    console.log("\nPixelplay - Catálogo de jogos")
    console.log("-".repeat(29))
    console.log("1 - Incluir")
    console.log("2 - Listar")
    console.log("3 - Pesquisar por categoria")
    console.log("4 - Pesquisar por intervalo de preço")
    console.log("5 - Gerar página Web")
    console.log("6 - Gerar página Web por categoria")
    console.log("7 - Alterar")
    console.log("8 - Excluir")
    console.log("9 - finalizar programa\n")

    const opcao = Number(prompt("Opção: "))

    console.clear()

    switch (opcao){
        case 1:{
            incluir()
            break
        }
        case 2:{
            listar()
            break
        }
        case 3:{
            pesquisar()
            break
        }
        case 4:{
            pesquisaIntervalo()
            break
        }
        case 5:{
            web()
            break
        }
        case 6:{
            webFiltro()
            break
        }
        case 7:{
            alterar()
            break
        }
        case 8:{
            excluir()
            break
        }
        case 9:{
            break menuPrincipal
        }
    }
} while (true)

gravaProdutos()

console.log("\nPrograma finalizado\n")