import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config';
//Updates application by using AI to generate random job title

// Configure connection to OpenAI's API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const jobtitles = [] // Array stores generated random job titles 

  // Retrieve random job title
  const getRandomJobTitle = async () => {
    let result;
    let prompt = "Please generate a random but realistic job title that has not been generated before";
    if (jobtitles.length > 0) {
      prompt += ` and is not the same or related to one of the following: ${jobtitles.join(", ")}`;
    }
        await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
        temperature: 0.3,
        max_tokens: 10
    })
    .then(aiResult => {
        result = aiResult.data.choices[0].message.content;
    });
    // Adds generated job title to array of job titles
    jobtitles.push(result)
    console.log(jobtitles)
    return result;
};

export default getRandomJobTitle; 