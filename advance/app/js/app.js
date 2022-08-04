const asset = {
    business : 300,
    minister : 700,
    sochib   : 900
}

const getMax = () => {
    for(key in asset){
         const value = (asset.business > asset.minister) ? key : key;

         return value;
    }
}

console.log(getMax());