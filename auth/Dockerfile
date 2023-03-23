FROM node:12
WORKDIR /usr/src/auth
COPY package*.json ./
RUN npm install
COPY server.js ./
CMD [ "npm", "start" ]