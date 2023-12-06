export function calculateBoxes(length,height, width, quantity) {
  const boxLength = 60;
    const boxHeight = 40;
    const boxWidth = 40;
    let totalBoxes = height===40 && length===60 && width===40 ? 0: 1;
      const boxVolume = boxHeight * boxLength * boxWidth;
      const itemVolume = height * length * width;
  
      const itemsInBox = Math.floor(boxVolume / itemVolume);
      const boxesNeeded = Math.floor(quantity / itemsInBox);
  
      totalBoxes += boxesNeeded;
      quantity -= itemsInBox * boxesNeeded;
      console.log(totalBoxes)
    return totalBoxes;
  }