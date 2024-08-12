import { IncomingMessage, ServerResponse, createServer } from "http";

// Creates a default HTTP web server
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // do stuff
})

server.listen(1234, () => {
  console.log('Server is running...')
})
