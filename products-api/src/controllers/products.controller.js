import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const { name, category, price, imgUrl } = req.body;
  const newProduct = new Product({ name, category, price, imgUrl });
  const result = await newProduct.save();
  res.status(201).json(result);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  res.status(200).json(result);
};

export const updateProductById = async (req, res) => {
  const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(result);
};

export const deleteProductById = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.status(204).json();
};
