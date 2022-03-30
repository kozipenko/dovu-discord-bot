const invite = `https://discord.com/api/oauth2/authorize?client_id=${process.env.APP_ID}&permissions=0&scope=bot%20applications.commands`;

export default async function handler(request, response) {
  response.status(200).send({ invite });
}