FROM node:22 AS builder

WORKDIR /web

# get dependencies
COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

# build from source
COPY src/. src/.
COPY scripts/. scripts/.

RUN pnpm run build


#
FROM node:22 as runner

WORKDIR /web

# copy production files and run server
COPY --from=builder /web/dist/. dist/.
COPY --from=builder /web/package.json .

EXPOSE 3000

CMD ["npm", "run", "start"]