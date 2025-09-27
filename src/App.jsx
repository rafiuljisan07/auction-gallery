import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ManageAuction from './components/ManageAuction';
import Navbar from './components/Navbar'
import Skeleton from './components/Skeleton';

const promiseData = fetch('/data.json').then(res => res.json());

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<Skeleton />}>
        <ManageAuction promiseData={promiseData} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
