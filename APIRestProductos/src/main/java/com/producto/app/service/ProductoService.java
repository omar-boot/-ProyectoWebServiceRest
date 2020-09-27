package com.producto.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.producto.app.model.Producto;
import com.producto.app.repository.ProductoRepository;

@Service
public class ProductoService {
	
	@Autowired
	private ProductoRepository productoRepository;
	
	public List<Producto> getAll() {
		return (List<Producto>) productoRepository.findAll();
	}

	public Producto get(Long id) {
		return productoRepository.findByIdItem(id);
	}

	public Producto save(Producto producto) {
		return productoRepository.save(producto);
	}

	public void delete(Long id) {
		productoRepository.deleteById(id);
	}
}
