import React from 'react'
import PortfolioContainer from './components/PortfolioContainer'
import Footer from './components/Footer'


const App = () => {
  const styles = {
    backgroundColor: "#A0E7E5",
    color: "#FFAEBC",
  
  }

  return (
    <div>
      <main>
        <PortfolioContainer styles={styles} />

      </main>
      <Footer />

    </div>

  )
}

export default App
