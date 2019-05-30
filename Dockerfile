FROM node:alpine as builder
RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*
RUN npm install -g gatsby-cli
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN gatsby build

FROM nginx
COPY --from=builder /app/public /usr/share/nginx/html