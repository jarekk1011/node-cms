FROM node:8.9.4

RUN mkdir -p /server

WORKDIR /server

COPY package.json /server/

RUN npm install

COPY . /server/

EXPOSE 3000