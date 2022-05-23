import { faDollar, faPeopleGroup, faSackDollar, faScrewdriverWrench, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = () => {
    return (
       <div className='bg-base-300 mx-0 rounded'>
            <div className='mt-20   mx-8'>
            <h2 className='text-3xl text-center pt-8 font-semibold text-orange-600 uppercase'>Millions Business Trust Us</h2>
            <p className='text-center uppercase font-medium mt-2 '>Try to Understand user Expectation</p>

            <div className="stats shadow w-full my-9">
           
                <div className="stat">
                <FontAwesomeIcon className='h-14 text-success ml-3' icon={faPeopleGroup} />
                    <div className="stat-title text-2xl text-success">Customers</div>
                    <div className="stat-value text-primary">255.6K</div>
                    <div className="stat-desc">21% more than last month</div>

                </div>
                <div className="stat ">
                   
                    <FontAwesomeIcon className='text-orange-500 h-14 ml-3' icon={faStar} />
                    <div className="stat-title text-2xl text-orange-500">Reviews</div>
                    <div className="stat-value text-primary">55.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                
                    <FontAwesomeIcon className='text-orange-500 h-14 ml-3' icon={faSackDollar} />
                    <div className="stat-title text-orange-400 text-2xl"> Annual Revenue</div>
                    <div className="stat-value text-secondary">320.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                <FontAwesomeIcon className='text-orange-500 h-14 ml-3' icon={faScrewdriverWrench} />
                    <div className='stat-title text-orange-400 text-2xl'>Tools</div>
                    <div className="stat-value text-orange-500">100+ tolls</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
        </div>
       </div>
    );
};

export default BusinessSummary;