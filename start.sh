#!/bin/sh

rabbitmq-server &
sleep 20 &&
python services/index.py &
npm run build &
npm run dash
