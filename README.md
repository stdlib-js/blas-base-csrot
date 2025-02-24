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

> Applies a plane rotation.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-csrot
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var csrot = require( '@stdlib/blas-base-csrot' );
```

#### csrot( N, cx, strideX, cy, strideY, c, s )

Applies a plane rotation.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
// cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
// cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cx**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.
-   **cy**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `cy`.

The `N` and stride parameters determine how values from `cx` and `cy` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot( 2, cx, 2, cy, 2, 0.8, 0.6 );
// cx => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
// cy => <Complex64Array>[ ~-0.6, ~-1.2,  0.0, 0.0, -3.0, ~-3.6,  0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

// Initial arrays...
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var cy1 = new Complex64Array( cy0.buffer, cy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

csrot( 2, cx1, -2, cy1, 1, 0.8, 0.6 );
// cx0 => <Complex64Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// cy0 => <Complex64Array>[ 0.0, 0.0,  0.0, 0.0, ~-4.2, ~-4.8, ~-1.8, ~-2.4 ]
```

#### csrot.ndarray( N, cx, strideX, offsetX, cy, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
// cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8 ]
// cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `cx`.
-   **offsetY**: starting index for `cy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( 2, cx, 2, 1, cy, 2, 1, 0.8, 0.6 );
// cx => <Complex64Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// cy => <Complex64Array>[ 0.0, 0.0, ~-1.8, ~-2.4, 0.0, 0.0, ~-4.2, ~-4.8 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `cx` and `cy` unchanged.
-   `csrot()` corresponds to the [BLAS][blas] level 1 function [`csrot`][csrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var ccopy = require( '@stdlib/blas-base-ccopy' );
var zeros = require( '@stdlib/array-zeros' );
var logEach = require( '@stdlib/console-log-each' );
var csrot = require( '@stdlib/blas-base-csrot' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var cx = filledarrayBy( 10, 'complex64', rand );
var cxc = ccopy( cx.length, cx, 1, zeros( cx.length, 'complex64' ), 1 );

var cy = filledarrayBy( 10, 'complex64', rand );
var cyc = ccopy( cy.length, cy, 1, zeros( cy.length, 'complex64' ), 1 );

// Apply a plane rotation:
csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', cxc, cyc, cx, cy );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/csrot.h"
```

#### c_csrot( N, \*X, strideX, \*Y, strideY, c, s )

Applies a plane rotation.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f }; // interleaved real and imaginary components
float y[] = { 5.0f, 6.0f, 7.0f, 8.0f };

c_csrot( 2, (void *)x, 1, (void *)y, 1, 0.8f, 0.6f );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **CX**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `CX`.
-   **CY**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `CY`.
-   **c**: `[in] float` cosine of the angle of rotation.
-   **s**: `[in] float` sine of the angle of rotation.

```c
void c_csrot( const CBLAS_INT N, void *CX, const CBLAS_INT strideX, void *CY, const CBLAS_INT strideY, const float c, const float s );
```

#### c_csrot_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f }; // interleaved real and imaginary components
float y[] = { 5.0f, 6.0f, 7.0f, 8.0f };

c_csrot_ndarray( 2, (void *)x, 1, 0, (void *)y, 1, 0, 0.8f, 0.6f );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **CX**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `CX`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `CX`.
-   **CY**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `CY`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `CY`.
-   **c**: `[in] float` cosine of the angle of rotation.
-   **s**: `[in] float` sine of the angle of rotation.

```c
void c_csrot_ndarray( const CBLAS_INT N, void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *CY, const CBLAS_INT strideY, const CBLAS_INT offsetY, const float c, const float s );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/csrot.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
    float y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = -1;

    // Copy elements:
    c_csrot( N, (void *)x, strideX, (void *)y, strideY, 0.8f, 0.6f );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
        printf( "y[ %i ] = %f + %fj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

</section>

<!-- /.links -->
