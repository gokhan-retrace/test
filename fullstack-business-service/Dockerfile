FROM public.ecr.aws/bitnami/node:latest as base

WORKDIR /usr/src/app

#stage for development
FROM base as dev
CMD [ "node", "index.mjs" ]

#stage for production
FROM public.ecr.aws/lambda/nodejs:latest as prod
COPY --from=base /usr/src/app /
RUN true
COPY package*.json ./

RUN echo registry=https://registry.npmjs.org/ >> ~/.npmrc
RUN npm config set //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN} @retrace-org:registry=https://npm.pkg.github.com
RUN echo @retrace-org:registry=https://npm.pkg.github.com/ >> ~/.npmrc
RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> ~/.npmrc

RUN npm install
COPY . .
CMD [ "node", "index.mjs" ]
