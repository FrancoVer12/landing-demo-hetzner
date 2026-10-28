# Etapa 1: compilación con Node 20 (LTS ultra estable)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund --legacy-peer-deps
COPY . .
# Compila y luego genera los estáticos planos en /app/dist (index.html + assets)
RUN npm run build && node scripts/prerender.mjs

# Etapa 2: servir con Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
