package com.producto.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCTO_ITEM")
public class Producto {
	
	@Id
	@Column(name = "C_ITEM")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idItem;
	
	@Column(name = "T_NOMBRE")
	private String nombre;
	
	@Column(name = "N_CANTIDAD")
	private String cantidad;
	
	@Column(name = "C_INVENTARIO")
	private String codigoInventario;

	public Long getIdItem() {
		return idItem;
	}

	public void setIdItem(Long idItem) {
		this.idItem = idItem;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCantidad() {
		return cantidad;
	}

	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}

	public String getCodigoInventario() {
		return codigoInventario;
	}

	public void setCodigoInventario(String codigoInventario) {
		this.codigoInventario = codigoInventario;
	}

	@Override
	public String toString() {
		return "Producto [idItem=" + idItem + ", nombre=" + nombre + ", cantidad=" + cantidad + ", codigoInventario="
				+ codigoInventario + "]";
	}
}
