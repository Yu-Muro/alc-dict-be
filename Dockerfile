FROM node:20.10.0 as dev

CMD ["/bin/bash", "-b"]

RUN apt-get update && apt-get upgrade -y\
  && apt-get autoremove -y\
  && apt-get clean\
  && apt-get install -y --no-install-recommends python3 g++ build-essential\
  && yarn config set python /usr/bin/python3

RUN apt-get update && \
  apt-get install -y --no-install-recommends libsqlite3-dev

WORKDIR /usr/app

COPY ./app .

RUN npm install -g wrangler
RUN npm install -g @go-task/cli
RUN  npm install better-sqlite3
RUN npm install
RUN npm cache clean --force
