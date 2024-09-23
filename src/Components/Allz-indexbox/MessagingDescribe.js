import { Box } from '@mui/material'
import React, { useState } from 'react'
import { BiSolidVideoPlus } from 'react-icons/bi'
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { FaRegStar, FaTimes } from 'react-icons/fa'
import { GrGallery } from 'react-icons/gr'
import { MdAttachFile } from 'react-icons/md'
import { PiGif } from 'react-icons/pi'
import { RiExpandDiagonalLine } from "react-icons/ri";



export const MessagingDescribe = () => {

    const [zoomIn , setzoomOut]=useState(false);
    const [OpenMsg , CloseMsg]=useState(true);

    const handleClick=()=>{
setzoomOut(!zoomIn)
    }






  return (
    <>

{
    OpenMsg ? (
        <>
        <section className={
    `
    fixed bottom-0 right-[24%] Msg-col
    ${zoomIn  ? "w-[34%]" : "w-[22%]"}
    `
}>


<div className="">
             
             <ul className="flex items-center justify-between p-2">
               <li>
                 <h1 className="head"> Himanshu</h1>
               </li>
               <li>
                 <ul className="flex items-center gap-3">
                   <li className="second-col-fatimes">
                     <BsThreeDots className="icon" />
                   </li>
                   <li className="second-col-fatimes">
                     <BiSolidVideoPlus className="icon" />
                   </li>
                   <li className="second-col-fatimes"
                   onClick={()=>handleClick()}>
                    <RiExpandDiagonalLine className='icon'/>
                   </li>
                   <li className="second-col-fatimes"
                   onClick={()=>CloseMsg(false)}>
                     <FaTimes className="icon" />
                   </li>
                   
                 </ul>
               </li>
             </ul>
             <hr className="horizontal-line" />



<Box className={
    `
    p-3 mt-4 message-description first-col 
    
    ${zoomIn  ? "h-[50vh]" : "h-[25.5vh]"}
    `
}

>
              
              <ul className="space-y-2">
                <li>
                  <img
                    src="vishu.jpg"
                    atl="image"
                    className="image-sqaure"
                  />
                </li>
                <li>
                  <ul>
                    <li className="flex gap-3 items-center">
                      <h3 className="head">React.js Developer</h3>
                      <h2>CareerPaths</h2>
                      <p>India (Remote) </p>
                    </li>
                  </ul>
                </li>
                </ul>

                <div className="flex gap-3 mt-2 items-center">
                <div className="Horizontal-line"></div>
                  <h1> Aug30</h1>
                  <div className="Horizontal-line"></div>
                </div>
          

{/* user and b user message description */}


<Box>


<ul>
  <li>
  <ul className="flex items-start gap-3">
  <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
  <li>
  <h1 className="head">Himasnshu sahu</h1>
  </li>
</ul>
  </li>

  <li className="-mt-3">
      <p className="para"> Hello i am himansh sahu and you</p>
  </li>
</ul>

<ul>
  <li>
  <ul className="flex items-start gap-3">
  <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
  <li>
  <h1 className="head">Himasnshu sahu</h1>
  </li>
</ul>
  </li>

  <li className="-mt-3">
      <p className="para"> Hello i am himansh sahu and you</p>
  </li>
</ul>
<ul>
  <li>
  <ul className="flex items-start gap-3">
  <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
  <li>
  <h1 className="head">Himasnshu sahu</h1>
  </li>
</ul>
  </li>

  <li className="-mt-3">
      <p className="para"> Hello i am himansh sahu and you</p>
  </li>
</ul>
</Box>


         </Box>




          {/* write the message  */}


          <Box className="space-y-1">
          <hr className="horizontal-line" />
             <Box className="p-2">
             <textarea placeholder="write a message"
                   className="w-[100%]  first-col1 border-2 border-slate-800 outline-none"
              />

              
              <div className="">
                  <ul className="flex items-center  justify-between">
                      <li>
                          <ul className="flex gap-3 items-center">
                              <li className="second-col-fatimes">
                                  <GrGallery className="icon"/>
                              </li>
                              <li className="second-col-fatimes"><MdAttachFile className="icon"/></li>
                              <li className="second-col-fatimes">
                                  <PiGif className="icon"/>
                              </li>
                              <li className="second-col-fatimes">
                                 <BsEmojiSmile className="icon"/> 
                              </li>
                          </ul>
                      </li>
                      <li>
                          <ul className="flex items-center gap-3">
                          <li className="post-btn">Send</li>
                          <li
                          className="second-col-fatimes"><BsThreeDots className="icon"/></li>
                          </ul>
                      </li>
                  </ul>
              </div>
             </Box>

          </Box>
          </div>
</section>
        </>
    ) : null 
}
       
    </>
  )
}
