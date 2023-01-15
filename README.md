<h1 align="left">Welcome to react-load-lazily 🦥</h1>
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

### threshold

`threshold` requires `height` and `width` properties to be specified which allows browser to calculate the visibility area.

> **Note**<br>
> when `height` and `width` specified The default is none (meaning as soon as even one pixel of component is visible, the component will be loaded)

Default: v0.x `0.5` --> v1.x > `0.1`

`threshold={0.1}` load only after 10% of component is visible in viewport.

`threshold={0.5}` load only after 50% of component is visible in viewport.

`threshold={1}` load only after 100% of component is visible in viewport.

```js
<LazyLoad threshold={0.5} height="500px" width="100vw">
  <MyComponent>
</LazyLoad>
```
### Choose your own way of styling

```js
<LazyLoad threshold={0.5}  styles={{ height:'100px' , width:'500px' }} className="h-12 w-full" id="myComponent">
  <MyComponent>
</LazyLoad>
```

## Additional Properties

### Run custom logic once component is visible on viewport

```js
<LazyLoad onVisible={()=> {
   window.alert('visible')
   }}
>
  <MyComponent>
</LazyLoad>
```

## What else

### Pass your own custom props

```js
<LazyLoad onClick={...} onHover={...}>
  <MyComponent>
</LazyLoad>
```

## Author

👤 **Hamsaraj**

- Github: [@hamsarajpitani](https://github.com/hamsarajpitani)
- LinkedIn: [@pitani-hamsaraj](https://linkedin.com/in/pitani-hamsaraj/)

## Show your support

Give a ⭐️ if this project helped you!

---