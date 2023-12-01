export function calculateBoxes(height=60, length=40, width=40, quantity=0) {
    const maxBoxSize = { height: 60, length: 40, width: 40 };
    const boxVolume = maxBoxSize.height * maxBoxSize.length * maxBoxSize.width;
    
    const productVolume = height * length * width * quantity;
    
    const totalBoxes = Math.ceil(productVolume / boxVolume);
    
    return totalBoxes;
}
 