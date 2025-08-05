export function scrollToAddToCartIfMobile() {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    const el = document.getElementById("addToCart");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}
