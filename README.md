
# 🎮 CATALOGO-DE-JOGOS

*Empowering Discoveries, Simplifying Game Exploration*

![Last Commit](https://img.shields.io/github/last-commit/Ratimoi/catalogo-de-jogos?style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-79.9%25-yellow?style=flat-square&logo=javascript)
![Languages](https://img.shields.io/badge/languages-2-informational?style=flat-square)

Built with the tools and technologies:

![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Author](#author)

---

## 📖 Overview

O **Catálogo de Jogos** é um sistema simples baseado em HTML, JavaScript e arquivos `.txt` que permite:

- Cadastrar jogos com informações completas
- Armazenar os dados localmente em `produtos.txt`
- Gerar páginas HTML automaticamente com os dados inseridos
- Buscar, editar e excluir jogos do catálogo

---

## 🚀 Getting Started

### ✅ Prerequisites

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Editor de texto (VSCode recomendado)
- Ambiente local para abrir arquivos HTML (não é necessário servidor)

### 🛠️ Installation

1. Clone o repositório:
   ```bash
   git clone https://github.com/Ratimoi/catalogo-de-jogos.git
   cd catalogo-de-jogos
   ```

2. Abra o arquivo `catalogoWeb.html` com seu navegador:
   ```bash
   xdg-open catalogoWeb.html
   ```

### 💡 Usage

- Preencha os dados dos jogos através da interface
- Clique em **Salvar** para gravar no `produtos.txt`
- Utilize os botões de **Busca**, **Editar** e **Excluir** conforme necessário
- Gere a versão HTML da listagem usando `indexPadrao.html` como base

### 🧪 Testing

- Teste o CRUD completo adicionando diferentes jogos
- Verifique se as alterações são persistidas corretamente no `.txt`
- Confirme se a visualização HTML está de acordo com o conteúdo salvo

---

## 🗂 Project Structure

```
Catalogo/
├── produtos.txt               # Arquivo com os dados dos jogos
├── catalogo.js                # Script com toda a lógica
├── catalogoWeb.html           # Interface principal do sistema
└── src/
    └── indexPadrao.html       # Template para exportação HTML
```

---

## 🛠 Technologies Used

- **HTML5**
- **JavaScript**
- **Manipulação de Arquivos `.txt`**
- **Formulários e DOM**

---

## 📄 License

Este projeto está licenciado sob os termos da **BSD 3-Clause License**.

---

## 👤 Author

**Ramiro Quevedo Paz**  
[LinkedIn](https://linkedin.com/in/ramiro-quevedo-paz-8a3457344/) · [Email](mailto:ramiroqpaz@gmail.com)

> Feito com 💻 e ☕ para facilitar o gerenciamento de catálogos de jogos.
