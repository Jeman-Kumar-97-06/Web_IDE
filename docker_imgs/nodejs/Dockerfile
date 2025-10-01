# This file executes the client's JS code : 
FROM node:18-alpine
#This line creates a non-root user : Running client's code as a root-user is dangerous. Docker usually runs code as root.
#The following line creates a non-root group called 'runner' and inside it, it creates a non-root user 'runner'.
#non-root user = system user . Hence, -S:
RUN addgroup -S runner && adduser -S runner -G runner
WORKDIR /app
USER runner
CMD ["node","/app/code.js"]