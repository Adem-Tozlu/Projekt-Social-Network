import React from 'react'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/scss/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';


function App() {
  return (
    <>
        <Layout />
        <Home />
    </>
  )
}

export default App
