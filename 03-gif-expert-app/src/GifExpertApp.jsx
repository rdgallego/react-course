import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    const onAddCategory = (event) => {
        if(categories.includes(event)) return;
        setCategories([...categories, event])
    }
    return (
        <>
            <h1>GifExpert App</h1>
            <AddCategory onAddCategory={ onAddCategory }/>
            {
                categories.map(category =>
                    <GifGrid key={category} category={category}/>
                )
            }
        </>
    )
}