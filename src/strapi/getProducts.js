import url from './URL';
export default async () => {
    //console.log((`${url}/api/products?populate=%2a`));
    const response = await fetch(`${url}/api/products?populate=image`).catch(error =>
        console.error(error)
    );
    const products = await response.json();
    if (products.error) {
        return null;
    }
    return products.data;
};