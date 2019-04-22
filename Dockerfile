FROM node:11-alpine

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]