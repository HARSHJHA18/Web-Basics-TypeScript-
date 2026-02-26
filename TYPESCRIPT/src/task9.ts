fetch("https://fakestoreapi.com/products")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  })
  .then(data => {
    console.log("Products:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Fetch completed");
  });