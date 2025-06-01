<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# csrot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a plane rotation.



<section class="usage">

## Usage

```javascript
import csrot from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-csrot@esm/index.mjs';
```

#### csrot( N, x, strideX, y, strideY, c, s )

Applies a plane rotation.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot( x.length, x, 1, y, 1, 0.8, 0.6 );
// x => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
// y => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` and `y` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot( 2, x, 2, y, 2, 0.8, 0.6 );
// x => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
// y => <Complex64Array>[ ~-0.6, ~-1.2, 0.0, 0.0, -3.0, ~-3.6, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

// Initial arrays...
var x0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

csrot( 2, x1, -2, y1, 1, 0.8, 0.6 );
// x0 => <Complex64Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// y0 => <Complex64Array>[ 0.0, 0.0, 0.0, 0.0, ~-4.2, ~-4.8, ~-1.8, ~-2.4 ]
```

#### csrot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6 );
// x => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8 ]
// y => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( 2, x, 2, 1, y, 2, 1, 0.8, 0.6 );
// x => <Complex64Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// y => <Complex64Array>[ 0.0, 0.0, ~-1.8, ~-2.4, 0.0, 0.0, ~-4.2, ~-4.8 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `csrot()` corresponds to the [BLAS][blas] level 1 function [`csrot`][csrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import ccopy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ccopy@esm/index.mjs';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import csrot from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-csrot@esm/index.mjs';

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var x = filledarrayBy( 10, 'complex64', rand );
var xc = ccopy( x.length, x, 1, zeros( x.length, 'complex64' ), 1 );

var y = filledarrayBy( 10, 'complex64', rand );
var yc = ccopy( y.length, y, 1, zeros( y.length, 'complex64' ), 1 );

// Apply a plane rotation:
csrot( x.length, x, 1, y, 1, 0.8, 0.6 );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', xc, yc, x, y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-csrot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-csrot

[test-image]: https://github.com/stdlib-js/blas-base-csrot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-csrot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-csrot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-csrot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-csrot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-csrot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-csrot/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-csrot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-csrot/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-csrot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-csrot/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-csrot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-csrot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-csrot/main/LICENSE

[blas]: http://www.netlib.org/blas

[csrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/esm

</section>

<!-- /.links -->
