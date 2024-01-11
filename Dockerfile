FROM node:alpine
COPY . /frontEnd
WORKDIR /frontEnd
RUN npm install
CMD [ "npm","start" ]