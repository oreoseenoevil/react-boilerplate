import React from 'react'
import { Header } from '@Components/Header'
import { Main } from '@Components/Main'
import { Footer } from '@Components/Footer'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
