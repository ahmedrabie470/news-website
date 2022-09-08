import React from 'react'
import { useContext } from 'react'
import { NewsContext } from '../../Context/Store'

export default function Contact() {
  let {trendingBusiness} =  useContext(NewsContext)

  return (
    <>
<div className="container mt-5 p-2">
      <div className="row gx-4">
        {trendingBusiness.map((news , i )=>
        <div key={i} className='col-md-4 '>
          <img src={news.urlToImage} className="w-100" alt="" />
         <h4 className='h6 mt-3'>{news.title}</h4> 
         <p className='text-muted '>{news.description}</p> 
         <p className='text-muted '>{news.publishedAt}</p> 
        </div>
        )}
        </div>
       
      </div>
   

    </>  
    )
}
