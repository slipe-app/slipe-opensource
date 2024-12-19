const ShufflePixels = (list, combinations = ['012','233','310','323']) => list?.map(symbol => {
    return combinations[symbol]
}).join("").split("")

export default ShufflePixels