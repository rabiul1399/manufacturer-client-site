import React from 'react';

const Portfolio = () => {
    return (
        <div className='flex justify-center m-8'>
  
            <div class="card w-full mx-8 lg:mx-36 bg-neutral text-neutral-content shadow-xl">
  <div class="card-body items-center text-center">
    <h2 class="card-title text-3xl">I am Rabiul Islam</h2>
    <p>Email: rabiulislam3808@gmail.com</p>
            <p>Education Background </p> 
            <p>Honours 1st year</p>
            <p>Studies Studying B.Sc (hon's) in Department of Zoology at National University, Bangladesh</p>
            <h3 className='text-2xl'>My Skills</h3>
            <p>Html,Css , Bootstrap, Tailwind Css,React React Bootstrap ,Rest Api , Firebase  JavaScript, ES6, MongoDB, Express, Node.js,DaisyUI.</p>
            <h3 className='text-2xl'>Tools</h3>
            <p >VS Code, Figma,  Chrome Dev Tools, Heroku, Netlify, GitHub.</p>
           <div className='bg-base-300 w-full rounded-xl mt-3  text-black'>
           <h3 className='text-2xl font-semibold'>My Projects</h3>
          <a className='text-primary hover:text-red-500' href="https://assignment-ten-fireauth.web.app">Fitness Mate</a><br />
          <a className='text-primary' href="https://full-stack-assignment-11-94c6f.web.app/">Warehouse management</a><br />
          <a className='text-primary' href="https://assignment-9-react-route-6f7463.netlify.app">Watch Dynasty</a><br />
           </div>

    
  </div>
</div>

        </div>
    );
};

export default Portfolio;