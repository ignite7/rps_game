# pull official base image
FROM node:14.15-alpine

WORKDIR /usr/src/sps_game

COPY . /usr/src/sps_game

RUN npm install --silent \
  && npm install react-scripts@3.4.1 -g --silent
