import {writable,derived} from 'svelte/store';
//import localProducts from '../localProducts';
import url from '../strapi/URL';
import getProducts from '../strapi/getProducts';

const store = writable([], () => {
    setProducts();
    return () => {};
}); // normal operations

async function setProducts() {
    let products = await getProducts();
    if (products){
        products = flattenProducts(products);
        store.set(products);
    }
}

// flatten products
function flattenProducts(data){
    return data.map(item =>{
        // let imageUrl = item.image.url;
        let image = `${url}${item.image.url}`
        return {...item, image};
    })
}
// featured stores
export const featuredStore = derived(store, $featured => {
    // console.log($featured);
    return $featured.filter((item) => item.featured === true);
})
export default store;