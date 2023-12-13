// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const { Configuration, OpenAIApi } = require("openai");

// const config = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// });

// const openai = new OpenAIApi(config);

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// app.post("/ask-me", async (req, res) => {
//     const { prompt } = req.body;
//     // const body = await req.json()
//     // const {messages} = body

//     // 'gpt-3.5-turbo'
//     const completion = await openai.createChatCompletion({
//         model: 'text-davinci-003',
//         max_tokens: 512,
//         temperature: 0,
//         prompt: prompt
//     });
//     res.send(completion.data.choices[0].text)
// })

// const PORT = 8020;

// app.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}`)
// });

//////////////////////////////////////////////////////////////////////////////

// const OpenAI = require("openai");

// const openai = new OpenAI({
//     apiKey: ""
// });

// async function main() {
//     const stream = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: "Say this is a test" }],
//         stream: true,
//     });
//     for await (const chunk of stream) {
//         process.stdout.write(chunk.choices[0]?.delta?.content || "");
//     }
// }

// main();