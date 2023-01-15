<h1 align="center">Welcome to react-load-lazily 🦥</h1>
<p>
  <a href="https://www.npmjs.com/package/react-load-lazily" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-load-lazily.svg">
  </a>
  <a href="-" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> React-load-lazily is an tiny library to load any component or any html element ( only when user scroll reaches the element position on viewport )

- ✅ Uses IntersectionObserver API natively present in the browser.
- 📦 Lightweight ~ 1.5KB minified & gzipped (7xxKb)
- 🚀 Easy to use

## Installation

```
npm install react-load-lazily --save
```
```
yarn add react-load-lazily
```

## How to use

```js
import LazyLoad from 'react-load-lazily';
```
### Passing component as children

```js
<LazyLoad>
  <MyComponent>
</LazyLoad>
```
### Passing component as props

```js
<LazyLoad component={<MyComponent>}/>
 ```
## Calculating the visibility area
```sh
Load component when it is 50% visible in viewport based on height and width provided to which browser to calcualte the visibility area.

The default height & width is 0 meaning as soon as even one pixel is visible it load's component
```

```js
<LazyLoad
  height="50px"
  width="100%"
  threshold={0.5} // default value 0.1 = 10%
>
  <MyComponent>
</LazyLoad>
```

<!-- ### Styling component prior to loading. -->

<!-- #### Use predefined height and width props -->

<!-- ```js
<LazyLoad height="500px" width="90%">
  <MyComponent>
</LazyLoad>
``` -->
### Choose your own way of styling

```js
<LazyLoad styles={{ borderRadius:'10px' }} className="mb-10 bg-red-400" id="myComponent">
  <MyComponent>
</LazyLoad>
```

## Additional Properties

### Run custom logic once component is visible on viewport

```js
<LazyLoad onVisible={()=> console.log('visible')}>
  <MyComponent>
</LazyLoad>
```
## What else

### Pass your own custom props
```js
<LazyLoad id="sample">
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