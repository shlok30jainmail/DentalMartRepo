import React from 'react'
import "./1.css"

const Search = () => {
  return (
    <div class="container" style={{marginTop:"50px"}}>

    {/* <div class="row height d-flex" style={{display:"flex", justifyContent:"center"}}>
    
      <div class="col-md-8"> */}
    
        <div class="search" style={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
          <i class="fa fa-search"></i>
          <input type="text" class="form-control" placeholder="Have a question? Ask Now" />
          <button class="btn btn-primary">Search</button>
        </div>
        
      {/* </div>
      
    </div> */}
    </div>
    
  )
}

export default Search;
