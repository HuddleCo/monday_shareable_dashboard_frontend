FROM node:16-alpine as build

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

RUN npm install -g react-scripts@3.4.1

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:16-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build ./build

EXPOSE 5000

CMD ["serve", "-s", "build"]
