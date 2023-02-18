FROM node:18.14.0-bullseye-slim as stage
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.22.1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=stage /app/build /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]