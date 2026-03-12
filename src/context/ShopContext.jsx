import { createContext } from "react";
import {products} from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
const currency='$';


const value={
products
}

return (
    <ShopContest value={value}>
        {props.children}
    </ShopContest>
)
}
export default ShopContextProvider;