import React from 'react'
import LazyLoad from 'react-load-lazily'
import 'react-load-lazily/dist/index.css'

const Mountain = () => {
  return (
    <img
      src='https://source.unsplash.com/1600x900/?mountain,sea'
      height={500}
      width={'90%'}
      style={{ objectFit: 'contain' }}
    />
  )
}
function App() {
  return (
    <div className='App'>
      {Array(20)
        .fill('')
        .map((data, index) => (
          <p key={index} className='read-the-docs'>
            Coding time!
          </p>
        ))}
      <LazyLoad
        component={<Mountain />}
        height='500px'
        threshold={0.5}
        onVisible={() => window.alert('component loaded lazily')}
      />
    </div>
  )
}

export default App
