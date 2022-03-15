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
RUN npm install
COPY . .
CMD [ "node", "index.mjs" ]
