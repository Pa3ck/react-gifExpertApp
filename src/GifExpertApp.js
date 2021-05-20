import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    return (
      <>  
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setcategories }/>
        <hr/>

        <ol>
            { 
                categories.map( cat => 
                    <GifGrid 
                        key={cat}
                        category={cat} 
                    />
                ) 
            }
        </ol>
        

      </>
    )
  };


export default GifExpertApp;