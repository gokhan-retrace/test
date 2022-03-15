FROM public.ecr.aws/bitnami/node:latest as base

WORKDIR /usr/src/app

#stage for development
FROM base as dev
EXPOSE 3000
CMD [ "node", "index.mjs" ]

#stage for production
FROM public.ecr.aws/lambda/nodejs:latest as prod
COPY --from=base /usr/src/app /
RUN true
COPY package*.json ./



RUN npm config set //npm.pkg.github.com/:_authToken=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 @retrace-org:registry=https://npm.pkg.github.com


RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.mjs" ]

