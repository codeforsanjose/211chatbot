FROM node:12

COPY package*.json ./211chatbot/

WORKDIR /211chatbot
RUN npm install

COPY . .

EXPOSE 8008
CMD ["node", "app.js"]