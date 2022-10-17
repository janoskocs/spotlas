import { useRef } from 'react';
import useScrollOnDrag from 'react-scroll-ondrag';
const Categories = () => {

    const categories = ['Outdoors', 'Cheap', 'Live Music', 'Fancy', 'Romantic', 'Fun', 'Exotic', 'Extraordinary', 'Sweet', 'Innovative', 'Interesting']

    const ref = useRef();
    const { events } = useScrollOnDrag(ref);

    return (
        <div
            {...events}
            ref={ref}
            className="categories flex  whitespace-nowrap overflow-x-scroll items-start mt-1 md:mt-2 l:mt-3 "
        >
            {categories.map((category, index) => (
                <div key={index} className="category  inline-block shadow-md  p-2 border-2 rounded-md ml-0.5 md:ml-1 l:ml-1.5 select-none" >
                    <p className="font-semibold">{category}</p>
                </div>
            ))
            }
        </div >
    )
}

export default Categories