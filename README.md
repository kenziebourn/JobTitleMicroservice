# JobTitleMicroservice

JobTitleMicroservice is a microservice that generates a random job title using OpenAI's API. It uses the HTTP requests as the communication pipe. 

This project defines an HTTP endpoint and once the microservice receives the HTTP request, it will generate a random jobtitle and return it in the response (text/html format). 
One key feature includes creating an array that stores previously generated job titles so that the microservice does not provide repeated job titles.


## 1. Requesting Data
In order to request data, call the microservice at the endpoint '/RandomJobTitle' using the fetch api 

Ex:
// Send request to microservice

fetch(`http://localhost:{PORT}/RandomJobTitle`)

<your additional code handling the response>


## 2. Receiving Data

Once the microservice receives the HTTP request after calling it using the fetch api, it will generate a random job

title and return it in the response. 

Here's an example of what the HTTP response might

look like: 

"
HTTP/1.1 200 OK

Content-Type: text/html

Sustainability Operations Coordinator
"

Then from there, you can handle the response accordingly to your individual project.


