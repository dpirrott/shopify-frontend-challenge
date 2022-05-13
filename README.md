# Front End Developer Intern Challenge
#### Submission by ***Dylan Pirrotta***; The app was created using React, Axios and the Chakra UI component library.
Visit the live site which is currently deployed on [Netlify](https://plz-interview-me.netlify.app/).

## Challenge description

### Fun with GPT-3

GPT-3 is a powerful AI model created by OpenAI. It can process plain text prompts and produce outputs that are hard to distinguish from human writing. Check out some examples of what it can do! GPT-3 can be accessed through a public API that includes a generous amount of free credits. 
The Challenge
You will write an app that sends plain text prompts to the OpenAI API and displays the results in a list.

We'd like your app to have a simple-to-use interface that includes the following:
- A form for entering text prompts
- Submitting the form sends the prompt to the OpenAI API
- Results are displayed in a list, sorted from newest to oldest. 
- Each result should include the original prompt and a response from the API.

# Getting Started

***Please note: You will need to register for an account at [OpenAI](https://openai.com/api/) to obtain your API key.***

Start by creating a .env file in the ***client*** folder file to keep your API key private

```sh
cd client
```

```sh
echo REACT_APP_API_KEY=YOUR_API_KEY >> .env
```


Install dependencies with 

```sh
npm install
```

### Running Webpack Development Server

```sh
npm start
```

Server should then be hosted on `http://localhost:3000/`
