FROM node:8.9.4

RUN mkdir -p /admin

WORKDIR /admin

COPY package.json /admin

RUN npm install

COPY . /admin

EXPOSE 4200
