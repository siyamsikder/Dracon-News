import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch("/categories.json").then(res=>res.json())

const Categories = () => {
    const catagories=use(categoryPromise)

    return (
        <div>
            <h2 className='font-bold'>All Caterogy({catagories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-5'>
                {
                    catagories.map(catagory=><NavLink className={"btn bg-white border-0 font-semibold text-accent hover:bg-base-200"} to={`/categori/${catagory.id}`} key={catagory.id}>{catagory.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;