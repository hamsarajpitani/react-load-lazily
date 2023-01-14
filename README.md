<h1 align="center">Welcome to react-load-lazily 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-load-lazily" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-load-lazily.svg">
  </a>
  <a href="-" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> Reacy-load-lazily is an tiny library to load any component or html element only when user scroll reaches the element position on viewport.

## Install

```sh
npm i react-load-lazily
```

## Usage

```sh
import LazyLoad from 'react-load-lazily'
```

```sh
// If not passed default threshold value is 0.5 = 50%
 (loads component when its 50% visible in viewport view).

<LazyLoad threshold={0.9}>
  <MyComponent>
</LazyLoad>
```
```sh
<LazyLoad threshold={0.9} component={<MyComponent>}/>
 ```

## Additional Properties

```sh
// Run custom logic once component is visible on viewport

<LazyLoad onVisiblie={()=> console.log('visible')}>
  <MyComponent>
</LazyLoad>
```

```sh
// Use predefined height and width for better CLS (cumulative layout shift) score.

<LazyLoad height="500px" width="90%">
  <MyComponent>
</LazyLoad>
```

```sh
// Supported ways of styling and custom props.

<LazyLoad styles={{ borderRadius:'10px' }} className="mb-10 bg-red-400" id="myComponent" custom="custom">
  <MyComponent>
</LazyLoad>
```

## Author

👤 **Hamsaraj**

* Github: [@hamsarajpitani](https://github.com/hamsarajpitani)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/pitani-hamsaraj\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/pitani-hamsaraj\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_