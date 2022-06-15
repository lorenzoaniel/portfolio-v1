const getQuotes = (quotesArr) => {
    return quotesArr[Math.floor(Math.random() * ((quotesArr.length-1) - 0 + 1) ) + 0];
}

export default getQuotes;