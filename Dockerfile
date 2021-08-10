FROM node:14.17.0-alpine AS builder
WORKDIR /opt/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:14.17.0-alpine
WORKDIR /opt/app
COPY --from=builder /opt/app/build ./build
COPY package.json .
RUN npm install --production
EXPOSE 3333
CMD [ "npm", "run", "start" ]