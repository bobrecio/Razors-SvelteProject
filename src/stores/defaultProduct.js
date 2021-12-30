import {writable,derived} from 'svelte/store';
import localProducts from '../localProducts';

const store = writable(flattenProducts([...localProducts])); // normal operations
//const store = writable([]); // testing with nothing loading

// flatten products
function flattenProducts(data){
    return data.map(item =>{
        let imageUrl = item.image.url;
        return {...item, image:imageUrl};
    })
}
// feautured stores
export const featuredStore = derived(store, $featured => {
    // console.log($featured);
    return $featured.filter((item) => item.featured === true);
})
export default store;