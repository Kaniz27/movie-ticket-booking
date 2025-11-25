import React from 'react';
import { useNavigate } from 'react-router';


export function Hero() {
const navigate = useNavigate();
// Using the uploaded image path provided by you as a fallback/poster
const poster = '/mnt/data/445007f8-7fbc-481d-a8cd-c13c70b4b02b.png';


return (
<section className="hero">
<div className="hero-overlay" />


{/* Video background: place /public/videos/hero.mp4 or use poster image */}
<video className="hero-video" autoPlay loop muted playsInline poster={poster}>
<source src="/src/assets/image/MovieBannerVideo.mp4" type="video/mp4" />
</video>


<div className="hero-inner">
<h1  className="hero-title title">Ocean's Legacy</h1>
<p className="hero-desc">An epic adventure beneath the waves. Explore the mysteries of the deep ocean and discover treasures beyond imagination in this breathtaking cinematic experience.</p>


<div className="hero-meta">
<div className="rating">⭐⭐⭐⭐⭐ <span>4.8/5</span></div>
<div className="genres title">Adventure • Fantasy • Drama</div>
</div>


<div className="hero-actions">
<button className="btn primary" onClick={() => navigate('/movies')}>🎟️ Book Movies</button>
<button className="btn outline" onClick={() => navigate('/contact')}>ℹ️ More Info</button>
</div>
</div>
</section>
);
}