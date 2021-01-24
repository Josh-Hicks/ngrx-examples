# Step 1. Set up Chromium browser
FROM node:14.15.4-alpine AS base

WORKDIR /usr/src/app

ENV CHROME_BIN=/usr/bin/chromium-browser

RUN apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main

# Step 2. Install dependencies
FROM base as dependencies

COPY package.json package-lock.json ./

RUN npm install && npm cache clean --force

# Step 3. Run tests
FROM dependencies as testing

COPY . .

CMD ["npm", "test", "--", "--watch=false"]