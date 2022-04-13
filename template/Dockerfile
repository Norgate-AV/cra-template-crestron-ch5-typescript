FROM nginx:stable-alpine

WORKDIR /usr/share/react

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a build/. /usr/share/nginx/html/
