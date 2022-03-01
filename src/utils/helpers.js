export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((price / 100) * 70);
  return newNumber;
};

export const getUniqueValues= (data,type)=>{
  let values = data.map((item)=>item[type]);
  values.push("all");
  if(type==="colors"){
   values=values.flat();
    
  }

  
   
    
    return [...new Set(values)];
}