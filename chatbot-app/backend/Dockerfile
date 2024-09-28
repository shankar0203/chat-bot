FROM node:14

WORKDIR /app
COPY . /app

# Install dependencies
RUN npm install

# Expose the backend port
EXPOSE 5000

CMD ["node", "app.js"]
