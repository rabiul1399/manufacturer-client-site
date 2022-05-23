import React from 'react';

const Reviews = () => {

    const  reviews= [
        {
            id:1,
            name: 'Erika Rus',
            img: 'https://i.ibb.co/TYmY1vM/Ellipse-2.png',
            describe: "I can't say enough about this great company BrandRep. I've been trying to build my website for the last four year.",
            review:  <div className="rating rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1"  />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
          </div>,
        },
        {
            id:2,
            name: 'Hussein Qasim',
            img:'https://i.ibb.co/DfSdQ4L/Ellipse-4.png',
            describe: "These guys have the best customer service going. If any problem, they will fix it no questions asked.",
            review:  <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>,
        },
        {
            id:3,
            name: 'Scott Annan',
            img: 'https://i.ibb.co/8P9SnpC/Ellipse.png',
            describe: "So last year we started to focus a lot more on DTC, and we felt that it was really important to look for a reviews platform. ",
            review:  <div className="rating ">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        },
        {
            id:4,
            name: 'James Cadbury',
            img: 'https://i.ibb.co/sHYchj1/Ellipse-1.png',
            describe: "We have been using Review.io for 4 months now and the service is really good. We decided to move from software that hosted the review. ",
            review:  <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>,
        },
    ]
    return (
        <div>
            <h2 className='text-center  py-3 text-3xl text-orange-600 font-bold'>Parts Gear Reviews</h2>

            <div>
                <div className='grid grid-cols-1 mt-7  md:grid-cols-2 lg:grid-cols-4 gap-6'>

                  {
                      reviews.map(rev=><div key={rev.id} className="card w-full bg-base-100 shadow-2xl ">
                      <div className="card-body items-center text-center">
                          <img className='w-32' src={rev.img} alt="" />
                         <h3>{rev.review}</h3>
                         
                          <h2 className="card-title">{rev.name}</h2>
                          <p className=''>{rev.describe}</p>
                         
                      </div>
                  </div> )
                  }

                </div>
            </div>

        </div>
    );
};

export default Reviews;