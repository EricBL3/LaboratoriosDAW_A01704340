# Examen Parcial 2

El script para la creación de la base de datos y los procedimientos almacenados es el de "estructura.sql".
Hay procedimientos almacenados para registrar un tipo de incidente, un lugar y un incidente. 
Sin embargo, el único que se usa en la aplicación es el de registrarIncidente(). Se manda a llamar en una función con el mismo nombre en "model.php" y esa función se manda a llamar en "controlador_insertarIncidente.php".