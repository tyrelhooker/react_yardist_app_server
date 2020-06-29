# React Yardist App - Server
by TJ Hooker

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Description:

This app started a sandbox to explore how to create a proxy server to handle API requests from the client. It has slowly morphed into a concurrent app that will eventually be merged into my react_yardist_app.

## Why is This App Necessary?

I needed a way to protect my API key when making API calls to the Trefle plant API. 

## How Does it Work?

I have indicated in my client/package.json that a proxy server is being used. I have two main directories, the client and the server. 

The client takes a user input for a plant name and then makes an API request with that plant name to my proxy server. 

The proxy server then gets the route the client's API request was sent to using Express.js. Once the route is obtained, the proxy server pulls out the placeholder parameter from the url sent to server and builds an API request to Trefle using the url parameter and my API key, which is hidden in a .env file. 

When the API query is successful, the data is sent back to the client as a response and the client then uses the response and sets the data in state, which is then used by my components to display the data. 

## How to Start the Server and Client in parallel? 

I use NPM package, NPM-Run-All to start my server and client simultaneously. Use the command `npm run dev` to start both. 

## Future Implementations

I have a long list of implementations and features to add to both of my yardist apps. The following are a few:

- I will continue working on this server version to implement a way allowing the user to select and save the returned trefle data to localStorage so the user can begin building their plants they have planted in their yard. 
- Implement user data normalization
- Combine my two apps
- Use conditional rendering
- Use Sass to beatify the user's experience
