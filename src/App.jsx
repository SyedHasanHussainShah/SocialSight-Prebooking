import Navigation from './components/Navigation.jsx'
import HeroScene from './components/HeroScene.jsx'
import LandingSections from './components/LandingSections.jsx'
import PremiumCursor from './components/PremiumCursor.jsx'

function App() {
  return (
    <main>
      <PremiumCursor />
      <Navigation />
      <HeroScene />
      <LandingSections />
    </main>
  )
}

export default App
