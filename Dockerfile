FROM node:latest as dev

CMD ["/bin/bash", "-b"]

RUN apt-get update && apt-get upgrade -y\
  && apt-get autoremove -y\
  && apt-get clean\
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app

COPY ./app/alc-dict .

RUN npm install -g wrangler
RUN npm install
