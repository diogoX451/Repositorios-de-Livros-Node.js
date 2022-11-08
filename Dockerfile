# Imagem base
FROM node:alpine

# Configuração do usuário/permissões
WORKDIR /usr/app

# Instalação das dependências
COPY package*.json ./
RUN yarn install

# Copia dos arquivos do projeto
COPY . .

# Porta exposta
EXPOSE 3000

# Execução
CMD ["yarn", "start"]
