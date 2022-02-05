package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired // Container de injeção de independência que executa de forma transparente
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true) // Somente leitura e abre e fecha a transação transparente
	public List<ProductDTO> findAll() {
		List<Product> list = productRepository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

}
