const toF = (temperature)=> {
  return temperature*(9/5) + 32;
}

const toC = (temperature)=> {
  return (temperature - 32)*(5/9);
}


module.exports = {
  toF,
  toC 
}; 
