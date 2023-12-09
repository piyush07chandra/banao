import './Posts.css'
import { Card } from 'react-bootstrap';
import { useState } from 'react';


const Posts = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

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
     
        <div>
            <div className='filter flex mt-3 '>
            <ul className='flex '>
               <a href='#'><li className='ml-5 pt-2 hover:underline'>All Posts(32)</li></a>
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Article</li></a> 
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Event</li></a> 
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Education</li></a> 
               <a href='#'><li className='ml-2 pt-2 hover:underline'>Job</li></a>
            </ul>

            <div className='wrp flex'>
                <button className='bg-gray-200 rounded-md p-2 flex'>write a Post<img className='ml-2 mt-2' src='/btnvctr.png'/></button>
                <button className='bg-blue-500 text-white rounded-md ml-4 p-2 flex'><img className='mr-2 mt-1' src='/btnvctr2.png'/>Join Group</button>
            </div>
            </div>

            {/* images */}
             <div className='flex'>
<div className='poste'>
            {images.map((image,index)=>(

            <Card key={index}  className='card '>
      <Card.Img  variant="top" src={image.img1} alt='' />
      <Card.Body>
       <img src={image.img2}/> 
       
       <Card.Text className='text-2xl text-black'>{image.firstText}</Card.Text><button onClick={toggleDropdown} className='dots'><img className=' hover:bg-slate-300' src='/baseline-more_vert-24px.png'/></button>
      {isDropdownOpen && (
        <div className="dropdown-content text-center">
          <a className='hover:bg-white' href="#">Edit</a><br/>
          <a className='hover:bg-white' href="#">Report</a><br/>
          <a className='hover:bg-white' href="#">Option 3</a>
        </div>
      )}
   
       
{/* only third or fourth post */}
       <div className='flex'>
          <img src={image.bagimg}/><span className='mr-12'>{image.date}</span> <img src={image.locationimg}/><span>{image.location}</span>
       </div>
       <button className=' visit-button text-green-500 px-32 rounded-md m-2 bg-slate-100'>{image.visit}</button>
       <Card.Text>{image.secondText}</Card.Text>

       <span className='flex ml-2'>
        <img src={image.img3}/>
        <Card.Text className='text-semibold mt-2 '>{image.thirdText}</Card.Text>
        <span className=' views flex  '>
        <img src={image.img4}/>
        <h1 className='text-center flex'>{image.forthText}</h1>
        <img src={image.img5}/>
        </span>
       </span>
      </Card.Body>
    </Card>
    ))}
    </div>

    <div className='search-input'>
        <div>location</div>
        <input placeholder='location'/>
    </div>
</div>
        </div>
    </>
  )
}

export default Posts