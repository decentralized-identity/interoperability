# RabbitMQ setup for Linux
## Install Erlang

* Import Erlang GPG Key:

wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -

* Add Erlang to repository:

echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/rabbitmq.list

* Install Erlang

sudo apt update
sudo apt -y install erlang

## Install RabbitMQ

* Add RabbitMQ repository to Linux

wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -

* Add repository to Linux

echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/rabbitmq.list


* Install RabbitMQ

sudo apt update
sudo apt -y install rabbitmq-server

* Start with systemctl

systemctl enable rabbitmq-server.service

## Add Stomp capability to RabbitMQ

sudo rabbitmq-plugins enable rabbitmq_web_stomp

This installs webs stomp and stomp(TCP). Change port if necessary with rabbitmq config located under /etc/rabbitmq/.

RabbitMQ frontend: http://127.0.0.1:15672
