FROM node:10.15.3-alpine AS builder

COPY package.json .
COPY src/ .

RUN npm install
RUN npm run build

FROM nginx:1.17.4-alpine

COPY --from=builder public/  /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]