# Use a base image with your preferred Linux distribution
FROM ubuntu:latest

# Install FFmpeg and any other necessary packages
RUN apt-get update && apt-get install -y ffmpeg

FROM node:16


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

# Expose the port your application will run on (7000)
EXPOSE 7000

# Build TypeScript code
RUN npm run build

# Command to run the application
CMD [ "npm", "start" ]

