import React from 'react';
import './Header.css'

function Header() {
  // win + . : 이모지

  return (
    <div className='text'>

{/* // toLocaleDateString : 날짜 출력 */}

      <h1>  🍰🍡🍧🧁TODAY🍙🍤🍨🍒</h1>
      <h2> {new Date().toLocaleDateString()}</h2>        
    </div>
  );
}

export default Header;