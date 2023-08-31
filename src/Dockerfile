
# FROM node:16 as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build --prod

# FROM nginx:alpine

# COPY /dist/first-app /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

WORKDIR /etc/nginx/conf.d

COPY ./nginx/default.conf .

COPY /dist/first-app /usr/share/nginx/html

EXPOSE 80