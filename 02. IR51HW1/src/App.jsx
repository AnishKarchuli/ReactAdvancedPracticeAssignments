import { Link } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    <main>
      <Header />
      <div className='container'>
        <section className='mt-5'>
          <img src='https://placehold.co/600x400/EFEFEFF/grey?text=Employees+Smiling' alt='Employees Smiling' className='img-fluid' />
        </section>
        <section className='my-5'>
          <h2 className='fw-semibold'>Our Employees</h2>
          <p>Meet our dedicated team of professionals who work tirelessly to achieve our company's goals.</p>
          <Link to="/employees" className='btn btn-primary'>View Employees</Link>
        </section>
        <section className='mb-5'>
          <h2>Company Report</h2>
          <p>Explore our latest financial report to gain insights into our company's performance and growth.</p>
          <Link to="/report" className='btn btn-primary'>View Report</Link>
        </section>
      </div>
      <Footer />
    </main>
  )
}