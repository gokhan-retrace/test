FROM node:16 as base

WORKDIR /usr/src/app

#stage for development
FROM base as dev
EXPOSE 3000
CMD [ "node", "index.mjs" ]

#stage for production
FROM node:16-alpine as prod
COPY --from=base /usr/src/app /
COPY package*.json ./


RUN echo registry=https://registry.npmjs.org/ >> ~/.npmrc
RUN echo @retrace-org:registry=https://npm.pkg.github.com/ >> ~/.npmrc
RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> ~/.npmrc

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.mjs" ]

