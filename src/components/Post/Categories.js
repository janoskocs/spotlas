import React from 'react'

const Categories = () => {

    const categories = ['Outdoors', 'Cheap', 'Live Music', 'Fancy', 'Romantic', 'Fun', 'Exotic', 'Extraordinary', 'Sweet', 'Innovative', 'Interesting']
    return (
        <div className="categories flex  whitespace-nowrap items-start mt-1 md:mt-2 l:mt-3 ">
            {categories.map((category, index) => (
                <div key={index} className="category  inline-block drop-shadow  p-2 border-2 rounded-md ml-0.5 md:ml-1 l:ml-1.5">
                    <p>{category}</p>
                </div>
            ))}
        </div>
    )
}

export default Categories