async function returnCurrencyData(url) {
    try{
        const res = await fetch(url, {mode: "cors"});
        const data = await res.json();
        return data
    }catch(err){
        //console.log(err)
    }
}

export default returnCurrencyData;