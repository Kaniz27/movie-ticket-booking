import React from 'react';
import { Hero } from './hero/Hero';
import FeaturedMovies from '../Data/FeaturedMovies';
import LatestTrailers from '../Trailer/LatestTrailers';



export function Home() {
return (
<main>
<Hero />

<FeaturedMovies></FeaturedMovies>


<div className='bg-[#dee1e6] py-20'>
    <LatestTrailers></LatestTrailers>
  
</div>
</main>
);
}