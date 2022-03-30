import fetch from "node-fetch";
import commands from "../commands/index.js";

export default async function (request, response) {
  try {
    const url = `https://discord.com/api/v8/applications/${process.env.APP_ID}/commands`;
    const headers = { "Authorization": `Bot ${process.env.APP_TOKEN}`, "Content-Type": "application/json" };
    const body = JSON.stringify(commands);
    const res = await fetch(url, { method: "PUT", headers, body }).then(res => res.json());
    response.status(200).send(res);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};