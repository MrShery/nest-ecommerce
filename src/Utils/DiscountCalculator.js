export default function DiscountCalculator(productPrice, discount) {
  let discountedPrice = 0;
  let finalPrice = productPrice;
  if (discount != null && discount != "" && discount !== 0) {
    discountedPrice = Math.floor(productPrice * (discount / 100));
    finalPrice = Math.floor(productPrice - discountedPrice);
    return finalPrice;
  }
  return finalPrice;
}
