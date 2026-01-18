# Base Image
FROM node:18-alpine


# Create app dir
WORKDIR /app


#copying only packages file only
COPY package*.json ./

#install dependencies
RUN npm install --only=production

#copy source code
COPY src ./src

#Expose the service port
EXPOSE 3001

#start the app
CMD ["npm","start"]
