import './Posts.css'
import { Card } from 'react-bootstrap';
import { useState } from 'react';


const Posts = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [follow1,setFollow1]=useState(true)
    const [follow2,setFollow2]=useState(true)
    const [follow3,setFollow3]=useState(true)
    const [follow4,setFollow4]=useState(true)
    const [joinGrup,setJoinGrup]=useState(true)
   

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const images=[
        {
            img1:'/Rectangle 5.png',
        img2:'/✍️ Article.png',
        firstText:'What is Famous Brands had Ragular fonts? Meet ragular brands',
        secondText:'I have worked in UX for the better part of the decade from now on, I plan to...',
        img3:'/Rectangle 3 (2).png',
        thirdText:'Sarthak Kamra',
        img4:'/visibility_24px_outlined.svg',
        forthText:'1.4k views',
        img5:'/Group 2.png'
    },
        {
            img1:'/Rectangle 5 (1).png',
            img2:'/education (1).png',
        firstText:'Text benefits for Inverstment under National person scheme launched by Government',
        secondText:'I have worked in UX for the better part of the decade from now on, I plan to...',
        img3:'/Rectangle 3.png',
        thirdText:'Sarah West',
        img4:'/visibility_24px_outlined.svg',
        forthText:'1.4k views',
        img5:'/Group 2.png'
    },
        {
           img1:'/Rectangle 5 (2).png',
        img2:'/education (2).png',
        firstText:'finance & Inverstment Elite social Mixer @ Lujizui',
        bagimg:'/person (2).png',
        date:'Fer,12oct,2018',
        locationimg:'/outline-location_on-24px.png',
        location:'Noida, India',
        visit:'Visit Website',
        img3:'/Rectangle 3 (1).png',
        thirdText:'Ronal Jones',
        img4:'/visibility_24px_outlined.svg',
        forthText:'1.4k views',
        img5:'/Group 2.png'
    },
    {
        img1:'.',
     img2:'/job.png',
     firstText:'Software Developer',
     bagimg:'/outline-work_outline-24px.png',
     date:'Innovaccer Analytics Private Ltd.',
     locationimg:'/outline-location_on-24px.png',
     location:'Noida, India',
     visit:'Apply on Timesjobs',
     img3:'/person (1).png',
     thirdText:'Joseph Gray',
     img4:'/visibility_24px_outlined.svg',
     forthText:'1.4k views',
     img5:'/Group 2.png'
 },
    ]
  return (
    <>
     
        <div className='xl:ml-20 mb-2 '>
            <div className='filter flex mt-3 mb-2 ml-5'>
            <ul className='flex '>
               <a href='#'><li className='ml-5 pt-2 hover:underline font-semibold'>All Posts(32)</li></a>
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Article</li></a> 
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Event</li></a> 
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Education</li></a> 
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Job</li></a>
            </ul>

            <div className='wrp flex'>
                <button className='bg-gray-200 rounded-md p-2 flex'>write a Post<img className='ml-2 mt-2' src='/btnvctr.png'/></button>
                {
                  joinGrup?
                  <button onClick={()=>setJoinGrup(false)} className='bg-blue-500 text-white rounded-md ml-4 p-2 flex'><img className='mr-2 mt-1' src='/btnvctr2.png'/>Join Group</button>
                  :
                  <button onClick={()=>setJoinGrup(true)} className=' border border-black text-black rounded-md ml-4 p-2 flex'><img className='mr-2 ' src='/outline-exit_to_app-24px.png'/>Leave Group</button>
                }
                
            </div>
            </div>
            <div className='border-b  border-gray-300 ml-8 mb-2'></div>

            {/* images */}
             <div className='flex'>
<div className='poste'>
<div className='flex xl:hidden'>
  <h1 className='ml-4'>Posts(368)</h1>
  <button className='flex ml-52 bg-gray-300'>Filter:All<img className='h-1 ml-2 mt-2' src='/btnvctr.png'/></button>
</div>
            {images.map((image,index)=>(

            <Card key={index}  className='card mb-4 mt-2'>
      <Card.Img  variant="top" src={image.img1} alt='' />
      <Card.Body>
       <img src={image.img2}/> 
       <div className='xl:flex xl:mb-2'>
       <Card.Text className='f-text text-2xl text-black '>{image.firstText}</Card.Text><button onClick={toggleDropdown} className='dots'><img className='w-8 ml-5 hover:bg-slate-300' src='/baseline-more_vert-24px.png'/></button>
       </div>
      {isDropdownOpen && (
        <div className="dropdown-content text-center">
          <a className='hover:bg-white' href="#">Edit</a><br/>
          <a className='hover:bg-white' href="#">Report</a><br/>
          <a className='hover:bg-white' href="#">Option 3</a>
        </div>
      )}
   
       
{/* only third or fourth post */}
       <div className='flex mb-3'>
          <img src={image.bagimg}/><span className='mr-10'>{image.date}</span> <img src={image.locationimg}/><span>{image.location}</span>
       </div>
       {
        image.visit?<button className=' visit-button w-full h-8 text-green-500 rounded-md mb-4'>{image.visit}</button>:<h1 className='hidden'></h1>
       }
       
       <Card.Text>{image.secondText}</Card.Text>

       <span className='flex ml-2'>
        <img className='xl:w-14 xl:h-14' src={image.img3}/>
        <Card.Text className=' mt-3'>{image.thirdText}</Card.Text>
        <span className=' views flex mt-3 xl:ml-80 '>
        <div>
        <img className='mt-1 mr-2' src={image.img4}/>
        </div>
       <div>
       <span className=''>{image.forthText}</span>
       </div>
        <div>
        <img className='rounded-md -mt-1 ml-2' src={image.img5}/>
        </div>
        
        </span>
       </span>
      </Card.Body>
    </Card>
    ))}
    </div>

    <div className='hidden xl:block ml-16 mt-8'>
    <div className='flex'>
    <img src='/outline-location_on-24px.png'/>
    <input className='border-b focus:outline-none' placeholder='Enter Your Location'/>
    <img src='/baseline-edit-24px.png'/>
    </div>
        
        <div className='flex mt-1'>
          <img className='h-5' src='/baseline-error_outline-24px.png'/>
          <p className='text-sm text-gray-500 ml-2 '>Your location will help us serve <br/> better and extend a personalised experience.</p>
        </div>

        <div>
          <div className='flex mt-4 ml-2'>
            <img className='mr-2' src='/thumb.png'/>
            <h1>RECOMENDED GROUPS</h1>
          </div>
          <ul>
            <li className='flex mt-3 mb-3'>
              <img src='/Rectangle 6.png'/><h1 className='mt-2 ml-2 '>Leisure</h1>
              {follow1?
                <button onClick={()=>setFollow1(false)} className='rounded-xl ml-36 bg-gray-200 px-3 hover:bg-blue-500 hover:text-white'>follow</button>:<button onClick={()=>setFollow1(true)} className='rounded-xl ml-36 text-white bg-black px-3 hover:bg-gray-200 '>followed</button>
              }
              
            </li>
            <li className='flex mt-3 mb-3'>
              <img src='/Rectangle 6 (1).png'/><h1 className='mt-2 ml-2 mr-2'>Activism</h1>
              {follow2?
                <button onClick={()=>setFollow2(false)} className='rounded-xl ml-32 bg-gray-200 px-3 hover:bg-blue-500 hover:text-white'>follow</button>:<button onClick={()=>setFollow2(true)} className='rounded-xl ml-32 text-white bg-black px-3 hover:bg-gray-200 '>followed</button>
              }
            </li>
            <li className='flex mt-3 mb-3'>
              <img src='/Rectangle 6 (2).png'/><h1 className='mt-2 ml-2 '>MBA</h1>
              {follow3?
                <button onClick={()=>setFollow3(false)} className='rounded-xl ml-40 bg-gray-200 px-3 hover:bg-blue-500 hover:text-white'>follow</button>:<button onClick={()=>setFollow3(true)} className='rounded-xl ml-40 text-white bg-black px-3 hover:bg-gray-200 '>followed</button>
              }
            </li>
            <li className='flex mt-3 mb-3'>
              <img src='/Rectangle 6 (3).png'/><h1 className='mt-2 ml-2 mr-1'>Philosophy</h1>
              {follow4?
                <button onClick={()=>setFollow4(false)} className='rounded-xl ml-28 bg-gray-200 px-3 hover:bg-blue-500 hover:text-white'>follow</button>:<button onClick={()=>setFollow4(true)} className='rounded-xl ml-28 text-white bg-black px-3 hover:bg-gray-200 '>followed</button>
              }
            </li>
          </ul>
          <h1 className='mt-20 ml-52 text-blue-600'>see more...</h1>
        </div>
    </div>
</div>
        </div>
    </>
  )
}

export default Posts