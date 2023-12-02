export function calculateBoxes(height, length, width, quantity) {
    const boxHeight = 60;
    const boxLength = 40;
    const boxWidth = 40;
    let totalBoxes = 0;
  
    while (quantity > 0) {
      const boxVolume = boxHeight * boxLength * boxWidth;
      const itemVolume = height * length * width;
  
      const itemsInBox = Math.floor(boxVolume / itemVolume);
      const boxesNeeded = Math.floor(quantity / itemsInBox);
  
      totalBoxes += boxesNeeded;
      quantity -= itemsInBox * boxesNeeded;
    }
  
    return totalBoxes;
  }