FROM node:18.18.0

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY package.json package-lock.json /usr/src/client/
RUN npm install
#RUN npm install react-scripts@3.4.1 -g
COPY . /usr/src/client
#EXPOSE 3000