
import { createServer } from 'node:http';


const server = createServer((request, response) => {
  console.log("Request received");


  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  
  response.statusCode = 200;

 
  response.setHeader("Content-Type", "application/json");

  
  response.setHeader("Content-Length", Buffer.byteLength(jsonResponseBody));


  response.end(jsonResponseBody);
});


server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
