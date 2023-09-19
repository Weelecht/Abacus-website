async function createShorthand(address) {   
    const shorthand = `${address.slice(0,4)}...${address.slice(address.length-4,address.length)}`
    return shorthand;
}

export default createShorthand;