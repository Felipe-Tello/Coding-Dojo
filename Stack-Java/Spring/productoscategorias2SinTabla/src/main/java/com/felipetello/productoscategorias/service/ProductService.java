package com.felipetello.productoscategorias.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.felipetello.productoscategorias.models.Category;
import com.felipetello.productoscategorias.models.Product;
import com.felipetello.productoscategorias.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepository;
	//private final CategoryRepository categoryRepository;
	
	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	//	this.categoryRepository = categoryRepository;
	}
	
	public List<Product> allProducts(){
		return productRepository.findAll();
	}
	public Product createProduct(Product p) {
		return productRepository.save(p);
	}
	public Product findProduct(Long id) {
		Optional<Product> productOptional = productRepository.findById(id);
		if(productOptional.isPresent()) {
			return productOptional.get();
		}
		else {
			return null;
		}
	}
	public List<Product> productsAvailables(Category category){
		return productRepository.findByCategoriesNotContaining(category);
	}
	//public List<Product> getAllExceptId(Long id){
	//	List<Product> myProducts = this.allProducts();
	//	Optional<Category> x = categoryRepository.findById(id);
	//	if(x.isPresent()) {
	//		List<Product> myCategoryProduct = x.get().getProducts();
	//		myProducts.removeAll(myCategoryProduct);
	//		return myProducts;
	//	}else {
	//		return null;
	//	}
	//	
	//}
}
