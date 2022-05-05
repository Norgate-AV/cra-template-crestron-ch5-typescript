FROM nginx:stable-alpine

WORKDIR /usr/share/app

RUN apk update && apk upgrade

COPY build ./build

RUN rm -r /usr/share/nginx/html/*
RUN cp -a build/. /usr/share/nginx/html/

