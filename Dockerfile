FROM node:argon

# Creates the user
RUN groupadd -r expressapp && useradd -r -g expressapp expressapp

WORKDIR /app

COPY . /app

EXPOSE 3000

# To verify `docker run CONTAINER_NAME whoami`
USER expressapp

CMD ["/app/cmd.sh"]