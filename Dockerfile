FROM node

WORKDIR /portafolio

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]