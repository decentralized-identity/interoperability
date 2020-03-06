# OSIP Interop project - Backend

## Requirements

- **NodeJS (v12+)**

- **MongoDB**: Credential requests are stored in MongoDB.
  - Please install as described on the [official download page](https://www.mongodb.com/download-center/community)
  - If another port is used than the standard `27017` please update `.env`
- **RabbitMQ**: After a Credential is verified in the backend, a Websocket message with the result is sent to the client.
  - The installation of this service **can be skipped** for only issuing Credentials or when you do not need to notify the Frontend aftr credential verification.
  - Please install as described [here](./docs/rabbitmq-setup.md) or on the [official download page](https://www.rabbitmq.com/download.html)
  - If another port is used than the standard `15675` please update `.env`

## API

Please see the attached Postman collection
