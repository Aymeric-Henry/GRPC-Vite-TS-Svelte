#!/bin/bash
PROTO_ENGINE_DEST=./src/grpc/proto

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

mkdir -p ${PROTO_ENGINE_DEST}


yarn run grpc_tools_node_protoc \
    --ts_out=${PROTO_ENGINE_DEST} \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    -I ./protobuf \
      ./protobuf/*.proto 
