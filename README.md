### How to load image in react?

[reference link](https://medium.com/@kathleeng.lopez/rendering-local-images-with-react-and-webpack-5f9d1fdb9b54)

What I used:

add `webpack.config.js` to root folder of the project
```javascript
module: {
  loaders: [
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }
  ]
}

```