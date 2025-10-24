# This file runs the client's c/c++ code : 
FROM gcc
# This line creates a non-root user : Running client's code as a root-user is dangerous. Docker usually runs code as root.
# The following line creates a non-root group called 'runner' and inside it, it creates a non-root user 'runner'.
# non-root user = system user . Hence, -S:
# RUN addgroup -S runner && adduser -S -G runner runner
RUN adduser -D -h /app runner
WORKDIR /app
USER runner
CMD ["sh","-c","gcc code.c -o code.out && ./code.out"]