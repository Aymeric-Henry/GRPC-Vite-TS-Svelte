import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { GreeterClient } from './proto/helloworld.client';


export class Client {
  private url: string;
  private port: string;
  public Greeter: GreeterClient;

  constructor(
    url = "http:localhost", // here http is required otherwise fetch API doesn't consider it a request
    port = "4242"
  ) {
    this.url = url;
    this.port = port;

    let transport = new GrpcWebFetchTransport({
      baseUrl: `${url}:${port}`
    });

    this.Greeter = new GreeterClient(transport);
  }
}