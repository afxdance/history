# History App

## Local testing

How to start the app

1. `npm start`
2. Go to <http://localhost:3000/> in your web browser, if it doesn't take you there automatically.

## Deploying

How to deploy to <https://afx.dance/>.

Push to master or make a pull request (recommended) to master 

Main.yaml workflow executes follow commands:
1. `rm -rf node_modules`
2. `npm install`
3. `npm run build`

NOTE: wait ~90 seconds after pushing for Github Actions to redeploy completely.
