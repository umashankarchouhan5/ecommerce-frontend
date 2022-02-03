export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((price / 100) * 70);
  return newNumber;
};
