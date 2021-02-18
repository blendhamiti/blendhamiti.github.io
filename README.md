## Running the app
Clone the repository, and create a production build of the website.
```
git clone https://github.com/blendhamiti/blendhamiti.github.io
cd blendhamiti.github.io
npm install
npm run build
```
Install and run *serve* in order to serve the static website from /docs on port 5000.
```
npm install -g serve
serve -s docs
```
## About
This is a SPA built with `React`. It also uses `Babel` and `Webpack`.