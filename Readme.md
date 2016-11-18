
Development
===================
###index.html
Use the script tag:
```html
  <script src="./static/app.bundle.js"></script>
```
###webpack.config.js
```js
path: path.join(__dirname, 'bin'),
publicPath: '/static/',
```
###Start the server
In the command line interface run:
```js
npm run start
```
Production
===================
###index.html
Use the script tag:
```html
  <script src="./js/app.bundle.js"></script>
```
###webpack.config.js
```js
path: path.join(__dirname, 'js'),
publicPath: '/react-accordeon/js/',
.
.
.
new webpack.optimize.OccurenceOrderPlugin(),
new webpack.optimize.DedupePlugin(),
new webpack.optimize.UglifyJsPlugin({
  minimize: true
})
```
###Prepare the assets
In the command line interface run:
```js
npm run build-production
```
