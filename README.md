# Get a Pet

## 📝 Descrição
Get a Pet é uma plataforma que conecta pessoas que desejam adotar pets com pessoas que têm pets para adoção. O projeto é desenvolvido utilizando a stack MERN (MongoDB, Express.js, React e Node.js).

## 🚀 Funcionalidades Implementadas

### Backend
- Sistema de autenticação completo com JWT
- Cadastro e login de usuários
- Verificação de usuário logado
- Modelo de dados para Pets e Usuários
- API RESTful com as seguintes rotas:
  - `/users/register`: Cadastro de novos usuários
  - `/users/login`: Autenticação de usuários
  - `/users/checkuser`: Verificação de usuário autenticado

### Banco de Dados
- MongoDB como banco de dados
- Schemas definidos para:
  - Usuários (nome, email, senha, imagem, telefone)
  - Pets (nome, idade, peso, cor, imagens, disponibilidade, usuário, adotante)

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB com Mongoose
- JWT para autenticação
- Bcrypt para criptografia de senhas
- CORS para comunicação com frontend
- Multer para upload de arquivos

## 📦 Dependências Principais
```json
{
  "bcrypt": "^5.1.1",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.14.1",
  "multer": "^1.4.5-lts.2",
  "nodemon": "^3.1.10"
}
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB instalado e rodando localmente
- NPM ou Yarn instalado

### Backend
1. Clone o repositório
2. Navegue até a pasta do backend
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor:
```bash
npm start
```
O servidor estará rodando em `http://localhost:5000`

## 🔒 Variáveis de Ambiente
O projeto utiliza algumas variáveis de ambiente que precisam ser configuradas:
- MongoDB URL: `mongodb://localhost:27017/getapet`
- JWT Secret: "nossosecret"

## 🚧 Em Desenvolvimento
- Interface do usuário (Frontend)
- Funcionalidades de adoção de pets
- Upload de imagens
- Gerenciamento de perfil de usuário
- Sistema de mensagens entre usuários

## 👥 Contribuição
Contribuições são sempre bem-vindas! Para contribuir:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença ISC. 