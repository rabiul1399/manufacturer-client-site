import React from 'react';

const Blogs = () => {
    return (
        <div className='m-8'>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-primary'>Question-1:</span> How will you improve the performance of a React Application?</h2>
                <p className='text-lg'><span className='text-success font-semibold'>Answer-1:</span> To improve the performance of a React Application we need to know how React updates its UI and how to measure an apps performance. you need to make sure that components receive only necessary props.Detecting unnecessary rendering of components.Virtual DOM is used in React.js to increase performance. </p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-primary'>Question-2:</span> What are the different ways to manage a state in a React application?</h2>
                <p className='text-lg'><span className='text-success font-semibold'>Answer-2:</span> To properly manage react app we need four types of state

                    URL state.
                    <br /> 

                    Global state.
                    <br />
                    Local state.
                    <br />
                    Server state. </p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-primary'>Question-3:</span>  How does prototypical inheritance work?</h2>
                <p className='text-lg'><span className='text-success font-semibold'>Answer-3:</span> Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-primary'>Question-4:</span>  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='text-lg'><span className='text-success font-semibold'>Answer-4:</span> If you use directly update the state it made only updates it does not change this.If you use like this const [products, setProducts] = useState([]),setProducts() then it will change directly.When we need to change a value in the state object you need to use setState()</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-primary'>Question-5:</span>   You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='text-lg'><span className='text-success font-semibold'>Answer-5:</span> const dress = name: 'earring', price: 33, description: 'valuable ' name: 'show', price: 13, description: 'valuable ' name: 'babaydress', price: 53, description: 'valuable name: 'ring', price: 73, description: 'valuable' function getProduct(mobiles, keyword) (const mobile of mobiles) (dress.name === keyword) return mobile; console.log(getProduct(dress, 'earring'))</p>
          
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-primary'>Question-6:</span> What is a unit test? Why should write unit tests?</h2>
                <p className='text-lg'><span className='text-success font-semibold'>Answer-6:</span> To ensures the quality and standards of code before deployed we need to use Unit testing.This the smallest testable parts of an application in the software development process. This makes the implementation details in your code shorter and easier to understand.</p>
          
            </div>
        </div>
    );
};

export default Blogs;