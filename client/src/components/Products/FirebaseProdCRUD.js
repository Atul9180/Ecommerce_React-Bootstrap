import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

const ProductForm = () => {
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      );
      if (response.data) {
        const fetchedProducts = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setProducts(fetchedProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    };

    console.log("New Product:", newProduct);

    try {
      const response = await axios.post(
        "https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
        newProduct
      );

      console.log("Product added:", response.data);
      fetchProducts(); // Refresh the product list after adding a new product
    } catch (error) {
      console.error("Error adding product:", error);
    }

    // Clear form fields
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const handleUpdate = async (id) => {
    const updatedProduct = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    };

    console.log("Updated Product:", updatedProduct);

    try {
      const response = await axios.put(
        `https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`,
        updatedProduct
      );

      console.log("Product updated:", response.data);
      fetchProducts(); // Refresh the product list after updating a product
    } catch (error) {
      console.error("Error updating product:", error);
    }

    // Clear form fields and reset selected product
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    setSelectedProduct(null);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`
      );

      console.log("Product deleted:", response.data);
      fetchProducts(); // Refresh the product list after deleting a product
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
    titleRef.current.value = product.title;
    priceRef.current.value = product.price;
    descriptionRef.current.value = product.description;
  };

  return (
    <div>
      <h2>Add/Edit Product</h2>
      <form
        onSubmit={
          selectedProduct
            ? () => handleUpdate(selectedProduct.id)
            : handleSubmit
        }
      >
        <label>
          Title:
          <input type="text" ref={titleRef} />
        </label>
        <label>
          Price:
          <input type="number" ref={priceRef} />
        </label>
        <label>
          Description:
          <textarea ref={descriptionRef}></textarea>
        </label>
        <button type="submit">
          {selectedProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => selectProduct(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
