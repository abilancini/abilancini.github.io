FROM node:7.7.1
EXPOSE 8080

WORKDIR /nametag-generator
ADD package.json package.json
ADD webpack.config.js webpack.config.js
ADD .babelrc .babelrc

RUN npm install

ADD index.html index.html
ADD src src
ADD style style

ARG GIT_COMMIT_HASH=unknown
LABEL GIT_COMMIT=$GIT_COMMIT_HASH

CMD ["npm", "start"]
