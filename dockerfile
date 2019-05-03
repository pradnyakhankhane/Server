FROM node 

RUN mkdir /code

WORKDIR /code

COPY . .
EXPOSE 3000

CMD node server.js