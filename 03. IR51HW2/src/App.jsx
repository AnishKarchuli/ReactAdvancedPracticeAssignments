import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <section className='mt-4'>
          <img src='https://placehold.co/400x300/EFEFEFF/grey?text=Healthy+Lifestyle' alt='Healthy Lifestyle' className='img-fluid' />
        </section>
        <section className='my-4'>
          <h2 className='fw-semibold'>Health Resources</h2>
          <p>Discover food and information to support your journey towards a healthier lifestyle.</p>
          <Link to="/foodItems" className='btn btn-primary'>Explore Food Items</Link>
        </section>
        <section className='mb-4'>
          <h2 className='fw-semibold'>Health Report</h2>
          <p>See health report</p>
          <Link to="/report" className='btn btn-primary'>View Report</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
