import React from 'react';
import './leftbar.css';
const Leftbar = ({Title , get}) => {
  return (
    <div className='LeftBar'>
      <div className="row" style={{width:"100%"}}>
        <div className="er" style={{ width: "330px", height: "450px", marginLeft: "10px", marginTop: "15px" }}>
          {Title.map((name,id)=>
        <button className="btn row" key={id} value={name} onClick={(e)=>get(e.target.value)}>{name}</button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Leftbar;























{/* <button className="btn row" >RECENTLY ADDED</button>
<button className="btn row" >CONTINUE WATCH</button>
<button className="btn row" >TRENDING NOW</button>
<button className="btn row" >NEW RELEASE</button> */}