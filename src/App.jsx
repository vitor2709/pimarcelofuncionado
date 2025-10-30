import Header from './components/Header'
import Carousel from './components/Carousel'
import CategoryChips from './components/CategoryChips'
import MenuGrid from './components/MenuGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <Header />
            
            <main className="flex-grow">
              <Carousel />
              <CategoryChips />
              <MenuGrid />
            </main>
            
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
