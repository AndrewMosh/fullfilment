export function calculateBoxes(height, length, width, quantity) {
    const boxHeight = 60;
    const boxLength = 40;
    const boxWidth = 40;
    let totalBoxes = height===60 && length===40 && width===40 ? 0: 1;
      const boxVolume = boxHeight * boxLength * boxWidth;
      const itemVolume = height * length * width;
  
      const itemsInBox = Math.floor(boxVolume / itemVolume);
      const boxesNeeded = Math.floor(quantity / itemsInBox);
  
      totalBoxes += boxesNeeded;
      quantity -= itemsInBox * boxesNeeded;
   
    return totalBoxes;
  }