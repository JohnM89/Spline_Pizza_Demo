// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import '../utils/Parallax.css';

// const ParallaxComponent = ({ children }) => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.pageYOffset;
//       // Adjusting the background position for parallax effect
//       document.getElementById('star-container').style.backgroundPositionY = offset * 0.5 + 'px';
//       document.getElementById('star-pattern').style.backgroundPositionY = offset * 0.5 + 'px';
//       document.getElementById('stripe-pattern').style.backgroundPositionY = offset * 0.7 + 'px';
//       document.getElementById('star-gradient-overlay').style.backgroundPositionY = offset * 0.5 + 'px';
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <div id="star-container">
//         <div id="star-pattern"></div>
//         <div id="star-gradient-overlay"></div>
//       </div>
//       <div id="stripe-container">
//         <div id="stripe-pattern"></div>
//       </div>
//       {children} {/* This renders the rest of your app content */}
//     </>
//   );
// };

// //props validation
// ParallaxComponent.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ParallaxComponent;
