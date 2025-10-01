#This Dockerfile executes the client's Python code : 
FROM python:3.12-alpine
#This line creates a non-root user : Running client's code as a root-user is dangerous. Docker usually runs code as root.
#The following line creates a non-root group called 'runner' and inside it, it creates a non-root user 'runner'.
#non-root user = system user . Hence, -S:
RUN addgroup -S runner && adduser -S runner -G runner
WORKDIR /app
USER runner
CMD ["python3","/app/code.py"]