# API Tienda de Plantas
esta api almacena todas informacion de la pagina TiendaPlantas


# Json producto

[
{
  "idProducto": id,
  "urlImagen": "ruta/cactus.jpeg",
  "nombre": "Cactus",
  "desc": "descripcion-cactus",
  "tipo": "exterior",
  "precio": "4.000"
}
]

# Consultas

Consultar todos los productos        /products
consultar producto por id            /prduct/id
agregar producto                    /addprodut
eliminar producto                   /delproduct/id
editar producto                     /editproduct/id
agregarVenta                        /addsale


# DB

CREATE TABLE Cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    telefono VARCHAR(20),
    direccion VARCHAR(255)
);

CREATE TABLE Producto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    tipo VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10, 2)
);

CREATE TABLE Ventas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT,
    fecha DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (idCliente) REFERENCES Cliente(id)
);

CREATE TABLE DetalleVenta (
    idVenta INT,
    idProducto INT,
    cantidadProducto INT,
    FOREIGN KEY (idVenta) REFERENCES Ventas(id),
    FOREIGN KEY (idProducto) REFERENCES Producto(id)
);

CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    contrasena VARCHAR(255)
);

