import { InteractionType, InteractionResponseType, verifyKey } from "discord-interactions";
import getRawBody from "raw-body";
import commands from "../commands/index.js";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const signature = request.headers["x-signature-ed25519"];
    const timestamp = request.headers["x-signature-timestamp"];
    const rawBody = await getRawBody(request);

    const isValidRequest = verifyKey(rawBody, signature, timestamp, process.env.APP_PUBLIC_KEY);

    if (!isValidRequest) {
      console.error("Invalid Request");
      return response.status(401).send({ error: "Bad request signature " });
    }

    const message = request.body;

    switch (message.type) {
      case InteractionType.PING:
        response.send({ type: InteractionResponseType.PONG });
        break;
      
      case InteractionType.APPLICATION_COMMAND:
        const command = commands.find(c => c.name === message.data.name);

        if (!command) {
          response.status(400).send({ error: "Unknown Command" });
          break;
        }

        const reply = await command.reply(message);
        response.status(200).send(reply);
        break;

      default:
        response.status(400).send({ error: "Unknown Interaction Type" });
        break;
    }
  }
}