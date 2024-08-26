import React from 'react'
import './rightbar.css';
function Rightbar({ movie ,click }) {
  return (
    <div className='Rightbar' style={{ height: "100%" }}>
      {
        movie.map((item, id) =>
          <div className="row" onClick={()=>click(item)} style={{ border: "2px solid black", height: "200px" }}>
            <img className='rImg' Key={id} src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} />
          </div>
        )}
    </div>
  )
}

export default Rightbar








{/* <div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/765062/pexels-photo-765062.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1590511/pexels-photo-1590511.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/21492/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
<div className="row" style={{border:"2px solid black",height:"200px"}}>
  <img className='rImg' src="https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div> */}