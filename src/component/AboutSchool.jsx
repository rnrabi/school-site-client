import React from 'react';

const AboutSchool = () => {
    return (
        <div className='flex gap-5 my-10'>
            <div>
                <img src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp" alt="" />
            </div>
            <div>
                <h2 className='text-3xl mb-8'>About Kindergarten</h2>
                <p className='text-lg text-gray-400 mb-6'>All our preschools have all-weather indoor play areas, an art studio or an atelier, technology corners and much else; and most have outdoor play spaces and even swimming pools specifically for the younger ones. Our programs ensure that children in our care everywhere have access to the highest quality of international.</p>
                <p>Individual attention in a small-class setting</p>
                <p>Educational field trips and school presentations</p>
                <p>Positive learning environment for your child</p>
                <button className='btn btn-outline text-xl rounded-full text-green-400 mt-5'>read more</button>
            </div>
        </div>
    );
};

export default AboutSchool;