import './App.css'
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <Nav />
    <Card title="New Apple Watch" para="SAR 1.069" />
    <Card title="New Apple iphone 15" para="SAR 5.469" />
    <Card title="New Apple Airpods" para="SAR 769" />
    <Footer />
    </>
  )
}

export default App
