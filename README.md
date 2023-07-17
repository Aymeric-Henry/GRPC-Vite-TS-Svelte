# GRPC + Vite + TS + Svelte

#### First step Installation
```bash
  yarn 
```

#### Create the proto
Launch the creation of the protofill by using the yarn build-protos command

```bash
yarn build-protos
```

you can find the command line in the build-protos.sh 

```bash
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

```

We are using the yarn or npm instead of the CLI to be agnostic of user configuration

#### Protobuf Compiler: @protobuf-ts/plugin

We are using @protobuf-ts/plugin as it is the only TS compiler I found who doesn't rely on grpc (DEPRECATED) | grpc-web . It is really important as all of the previous contain dependency or are themself in CommonJs and cause bundling error that I couldn't resolve. 
Some compiler use @grpc/grpc-js, this package is made for Node server and not browser implementation.
Therefore @protobuf-ts/plugin was the only compiler for our usecase

#### Configuration 

In the client.ts file you should find the definition of the client for the configuration follow the documentation https://www.npmjs.com/package/@protobuf-ts/grpcweb-transport

