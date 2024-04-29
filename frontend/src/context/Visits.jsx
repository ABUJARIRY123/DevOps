import { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Visits = () => {
 const [pageviews, setPageviews] = useState(0);
 const [visits, setVisits] = useState(0);

 useEffect(() => {
  // Retrieve data from local storage (if available)
  const storedPageviews = localStorage.getItem('pageviews');
  if (storedPageviews) {
    setPageviews(parseInt(storedPageviews)); // Parse stored value to integer
  }

  // Fetch data from backend
  fetch('https://ridhiwani.onrender.com/visits')
  .then(res => res.json())
    .then(data => {
      setVisits(data.visits);
      setPageviews(data.pageviews);
      console.log('Page views are:', data.pageviews);
      console.log('Visits are:', data.visits);

      // Update local storage with fetched data
      localStorage.setItem('pageviews', data.pageviews);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);

 return (
    
<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-lime-600'>
            <Link to='about' smooth={true} duration={500}>
            Portfolio visits: {pageviews}
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
 );
};

export default Visits;
