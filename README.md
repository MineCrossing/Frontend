# Frontend
Frontend of the MineCrossing website

## Prerequisites
To run this project you will require [NodeJS/NPM](https://nodejs.org/en/)

Once cloned run `npm install` to make sure everything is up to date and generated in `node_modules`.

## Running Locally
When you want to run this app locally simply run `npm start` in your console. This will launch the app in development mode and create a local site at [http://localhost:3000](http://localhost:3000).

The page has automatic reloading whenever you make changes.

## Running on Remote

### Serving
In order for this application to run correctly on remote it requires serving on a specific port. To facilitate this you will require `serve`.

`npm install serve`

### Remote Scripts
To simplify running this application on the remote server run the two following scripts.

`sh update.sh` - Will pull the latest changes from master and build them.

`sh start.sh` - Will launch the app on the correct port for the remote revese proxy to pick up.