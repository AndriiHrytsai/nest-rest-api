FROM node:16.17.1

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]
