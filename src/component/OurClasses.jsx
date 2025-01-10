import React from 'react';

const OurClasses = () => {
    return (
        <div>
            <h2 className='mx-auto text-center text-3xl font-bold'>Our classes</h2>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">painting class heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur obcaecati odit odio placeat, reiciendis aliquam neque rem fugiat fuga?</p>
                    <div className="flex gap-5 justify-between mt-5">
                        <div className='border-r-2 border-dashed border-red-400 pr-5'>
                            <h2>2.5</h2>
                            <h2>Year old</h2>
                        </div>
                        <div className='border-r-2 border-dashed border-red-400 pr-5'>
                            <h2>22</h2>
                            <h2>Class Size</h2>
                        </div>
                        <div>
                            <h2>4 skill</h2>
                            <h2>Educators</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClasses;