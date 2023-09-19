FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./



RUN npm install

COPY --chown=node:node . .

# Expose the port your application will run on (7000)
EXPOSE 7000

CMD [ "npm", "run", "dev" ]
