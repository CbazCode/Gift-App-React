import { useState ,  useEffect} from "react"
import { getGif } from "../helpers/getGifs"



export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading:true
    })
    
    useEffect(() => {
        getGif(category)
            .then(img =>{
                setState(
                    {
                        data: img,
                        loading:false
                    }
                    )
                    
                
               
            })
    },[category])

    // setTimeout(()=>{
    //     setState( state=> {
    //         return({data:[1,2],
    //             loading: false})           
    //     }
    //     )
    // }, 5000);
    
    

    return state;

}