<h1 align="center">Welcome to react-load-lazily 🦥</h1>
<p>
  <a href="https://www.npmjs.com/package/react-load-lazily" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-load-lazily.svg">
  </a>
  <a href="-" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> React-load-lazily is a Tiny library that allows you to load any component or HTML element only when the user scrolls to its position on the viewport.

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

<!-- ## Calculating the visibility area -->

## Threshold

`Default`: `0.1`

> The threshold property can be used to specify the percentage of the element that must be visible before it is loaded, with the `default` threshold set at `0.1` (or 10%).

`threshold={0.5}` Load the component when 50% of it is visible.

`threshold={1}` Load the component when 100% of it is visible

>**Note**<br>
> When the `height` and `width` properties are not specified, the default is set to none, meaning that the component will be loaded as soon as even one pixel of the element is visible on the viewport.


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

<!-- ## Additional Properties -->

## Run custom logic

#### Use `onVisible` prop to run custom logic when component is visible.

```js
<LazyLoad onVisible={()=> {
   window.alert('visible')
   }}
>
  <MyComponent>
</LazyLoad>
```

## What else

### Pass your own props

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