import { useState ,  useEffect} from "react"
import { getGif } from "../helpers/getGifs"



export const useFetchGifs = (category) =>{
    

    const [state, setState] = useState({
        data: [],
        loading:true
    })
    console.log('loading de : ',category, ' ', state.loading);
    
    //useEffect se activa una vez q el elemento se haya renderizado
    useEffect(() => {
        getGif(category)
            .then(img =>{
                console.log(img);
                setState(
                    {
                        data: img,
                        loading:false
                    }
                    )
                    
                
               
            })
        console.log('se ejecuto use Efect');
        console.log('se ejecuto use Efect vcategoria: ' ,category);
    },[category])

    // setTimeout(()=>{
    //     setState( state=> {
    //         return({data:[1,2],
    //             loading: !state.loading})           
    //     }
    //     )
    // }, 3000);
    
    

    return state;

}