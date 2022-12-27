FROM nginx

COPY ./build/ /usr/share/nginx/html
COPY ./docker/nginx/ /etc/nginx/conf.d

EXPOSE 80