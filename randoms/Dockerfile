FROM node:12.18.1-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --only-production
COPY . .
EXPOSE 7000

CMD npm start
