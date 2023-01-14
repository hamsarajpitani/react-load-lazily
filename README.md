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
import LazyLoad from 'react-load-lazily'
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

#### threshold

`threshold` requires `height` and `width` properties to be specified which allows browser to calculate the visiblity area.

Default: `0.1` load only after 10% of component is visible in viewport.

`threshold={0.5}` load only after 50% of component is visible in viewport.

`threshold={1}` load only after 100% of component is visible in viewport.

```js
If not specified The default is none (meaning as soon as even one pixel of component is visible, the component will be loaded)
```

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
<LazyLoad text='sample value'>
  <MyComponent>
</LazyLoad>
```

## Author

👤 **Hamsaraj**

- Github: [@hamsarajpitani](https://github.com/hamsarajpitani)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/pitani-hamsaraj\/](https://linkedin.com/in/https://www.linkedin.com/in/pitani-hamsaraj/)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
