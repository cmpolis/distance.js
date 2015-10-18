# distance.js

Fast vector distance and similarity measurements in JavaScript. eg: Euclidean, Manhattan, Chebyshev, Angular.

*by [@ChrisPolis](http://twitter.com/chrispolis)*

## Available measurements

- [Euclidean](https://en.wikipedia.org/wiki/Euclidean_distance)
- [Manhattan](https://en.wikipedia.org/wiki/Taxicab_geometry)
- [Chebyshev](https://en.wikipedia.org/wiki/Chebyshev_distance)
- [Cosine](https://en.wikipedia.org/wiki/Cosine_similarity)
- [Angular](https://en.wikipedia.org/wiki/Cosine_similarity#Angular_similarity)

## Usage

#### `distancejs[distanceType](arrayA, arrayB, [accessor]);`

eg:

Numeric arrays: `distancejs.euclidean(arrayA, arrayB);`

Array of objects: `distancejs.euclidean(arrayA, arrayB, function(d) { return d.val; });`

## License

MIT
