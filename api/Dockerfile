FROM node:14.17-alpine@sha256:b8d48b515e3049d4b7e9ced6cedbe223c3bc4a3d0fd02332448f3cdb000faee1
ENV NODE_ENV=production
EXPOSE 3333

WORKDIR /app
COPY . .
RUN npm i
CMD npm run start
