// // src/GlassCard.js
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import './Box.css';

// const GlassCard = () => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(cardRef.current, 
//       { opacity: 0, y: 50 }, 
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
//     );
//   }, []);

//   return (
// <>
// <div className="h-20 w-20 bg-blue-700 rounded-full relative top-20"></div>
//     <div className="glass-card" ref={cardRef}>
//       <h2>Glass Effect Card</h2>
//       <p>This card has a glass-like effect with GSAP animation.</p>
//     </div>
// </>
//   );
// };

// export default GlassCard;
