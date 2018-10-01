// Exporting an object containing all of our models

module.exports = {
    Article: require("./Article"),
    Note: require("./Note")
  };
  

// Exporting axios

// module.exports = {
//     entry: './app.js',
//     output: {
//       filename: 'bundle.js'
//     },
//     externals: ['axios'],
//     resolve: {
//       alias: {
//         'js-data-angular': '../dist/js-data-angular.js'
//       }
//     }
//   };