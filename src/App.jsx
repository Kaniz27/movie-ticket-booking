import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { auth, onAuthStateChanged, signOut } from './firebase';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

import  Releases  from './pages/Releases';
import  Contact  from './pages/Contact';
import { Bookings } from './pages/Bookings';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import Details from './Data/Details';
import Movies  from './Pages/Movies';
import Footer from './Components/Footer';
import AllMovieDetails from './Pages/Hero/AllMovieDetails';
import { Toaster } from 'react-hot-toast';



export default function App() {
const [user, setUser] = useState(null);
const navigate = useNavigate();


useEffect(() => {
const unsub = onAuthStateChanged(auth, (u) => {
setUser(u);
});
return () => unsub();
}, []);


return (
<div>
  <Toaster position="top-right" reverseOrder={false} />
<Navbar user={user} onLogout={() => signOut(auth).then(() => navigate('/'))} />
 

<Routes>
<Route path="/" element={<Home />} />

  <Route path="/movies" element={<Movies />} />
  <Route path="/allmovies/:id" element={<AllMovieDetails></AllMovieDetails>} />

 

<Route path="/releases" element={<Releases />} />
<Route path="/contact" element={<Contact />} />
<Route
path="/bookings"
element={
<ProtectedRoute user={user}>
<Bookings user={user} />
</ProtectedRoute>
}
/>
<Route path="/login" element={<Login />} />
<Route path="/movies/:id" element={<Details />} />
<Route path="*" element={<Home />} />
</Routes>
<Footer></Footer> 
</div>
);
}