package com.producto.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.producto.app.model.Producto;

@Repository
public interface ProductoRepository extends CrudRepository<Producto, Long> {
	
    public Producto findByIdItem(@Param("idItem") Long idItem);

}
