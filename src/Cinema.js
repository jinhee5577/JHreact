 /*eslint-disable*/ 
 import React, { Component, useState, useEffect } from 'react';
 import './App.css';
 import { useHistory, useParams } from 'react-router-dom';
 import { useSelector, useDispatch } from 'react-redux';


 function Cinema( props ){
    let { mm } = useParams();
    let history = useHistory();
    let dispatch = useDispatch();
    let findmove = props.jinmov.find( (m) => { return m.id === Number(mm); } );
    let movindex = props.jinmov.findIndex( (m) => { return m.id === Number(mm); } );  

     return(
        <div className="cinema_wrap">
           <h2 className="uptitle">{findmove.title}</h2>
           <div className="cine_back">
              <img src={findmove.large_cover_image} />               
           </div> 
           <div className="cinema_info">             
             <article>
                <h3>{findmove.title}</h3>
                <h4>{findmove.genres[0]}, {findmove.genres[2]}/ ๋ฏธ๊ตญ</h4>
                <h4>{findmove.year} ๊ฐ๋ด <span className="mv_t">๐งญ {findmove.runtime}๋ถ</span></h4>
             </article>
             <div className="small_img">
                 <img src={findmove.medium_cover_image} /> 
             </div>
           </div>
           <div className="synopsis">
              <h4>์๋์์ค</h4>
              <p>"{findmove.synopsis}"</p> 
           </div>  
           <div className="cine_middle"> 
             <ul>
                <li>
                   <h5>๊ด๋๊ฐํ์ </h5>
                   <p><span className="sp1">โญ</span>{findmove.rating}</p>
                </li>
                <li>
                   <h5>์ธ๊ธฐ์์</h5>
                   <p>{movindex + 1}<span className="sp2">์</span></p>
                </li>
                <li>
                   <button onClick={ () => { 
                           history.push('/ticketing'); 
                           dispatch({ type : 'cinema', payload : findmove, });
                     } } >์๋งคํ๊ธฐ</button>
                </li>
             </ul>            
           </div>    
        </div>
     );  
 }
                                  

export default Cinema; 