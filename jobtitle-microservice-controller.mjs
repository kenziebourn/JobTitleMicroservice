import 'dotenv/config';
import express from 'express';
import getRandomJobTitle from './jobtitle-microservice-model.mjs';

// Configure express server and connect to port
const PORT = process.env.PORT;
const app = express();
app.use(express.json());


/**
 * GET /RandomJobTitle 
 * Request: No parameters, request body is empty
 * Response: Success - Request returns randomly generated job title
        // Body: text/html Randomly generated job title string
        // Status Code: 200
 * Response: Failure - Request is invalid
        // Body: Server Error - failure to generate job title
        // Status Code: 500
*/

app.get('/RandomJobTitle', async (req, res) => {
  try {
    const jobTitle = await getRandomJobTitle();
    console.log(jobTitle)
    res.send(jobTitle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating job title');
  }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});