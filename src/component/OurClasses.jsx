import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurClasses = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStudents(data)
            })
    }, [])
    console.log(students)


    return (
        <div>
            <h2 className='mx-auto text-center text-3xl font-bold'>Our classes</h2>
            <div className='md:grid grid-cols-3 gap-4'>
                {
                    students?.map(student => (<Link
                        key={student.class_name}
                    >
                        <div className="card bg-base-100 w-full shadow-xl">
                            <figure className="px-4 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center p-2">
                                <h2 className="card-title">Class: {student?.class_name}/{student?.year}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur obcaecati odit odio placeat, reiciendis aliquam neque rem fugiat fuga?</p>
                                <div className="flex gap-5 justify-between mt-5">
                                    <div className='border-r-2 border-dashed border-red-400 pr-2'>
                                        <h2>{student.students?.length}</h2>
                                        <h2>Total Students</h2>
                                    </div>
                                    <div className='border-r-2 border-dashed border-red-400 pr-2'>
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
                    </Link>
                    ))
                }

            </div>
        </div>
    );
};

export default OurClasses;