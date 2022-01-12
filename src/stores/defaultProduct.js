import {writable,derived} from 'svelte/store';
//import localProducts from '../localProducts';
import url from '../strapi/URL';
import getProducts from '../strapi/getProducts';

const store = writable([], () => {
    setProducts();
    return () => {};
});

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
        // let imageUrl = `${url}${item.image.url}`; data[0].attributes.image.data.attributes.url
        let image = `${url}${item.attributes.image.data.attributes.url}`;
        let price = parseFloat(`${item.attributes.price}`);
        let title = `${item.attributes.title}`;
        let description = `${item.attributes.description}`;
        let featured = `${item.attributes.featured}`==="true" ? true : false;
        let id = parseInt(`${item.id}`);
        return {id, image, price, title, description, featured};
    })
}
// featured stores
export const featuredStore = derived(store, $featured => {
    return $featured.filter((item) => item.featured === true);
})
export default store;