# Use Nginx image
FROM nginx:latest

# Copy your app files
COPY . /usr/share/nginx/html

# Replace Nginx default config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
