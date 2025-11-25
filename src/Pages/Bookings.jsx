import React from 'react';
export function Bookings({ user }) {
return (
<div className="container">
<h2>Your Bookings</h2>
<p>Welcome <strong>{user?.email}</strong> — this page is protected.</p>
<p>No bookings yet (demo).</p>
</div>
);
}