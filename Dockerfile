FROM node:14-alpine

ARG SSH_PRIVATE_KEY

RUN apk update && \
	apk add --no-cache \
	openssh \
	git \
	yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" \
	g++ \
	gcc \
	libgcc \
	libstdc++ \
	linux-headers \
	make \
	python3

WORKDIR /usr/src/app

COPY . ./

RUN mkdir -p ~/.ssh && \
	chmod 0700 ~/.ssh && \
	ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts && \
	echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa && \
	chmod 600 ~/.ssh/id_rsa && \
	yarn install --ignore-engines && \
	rm -fr ~/.ssh/