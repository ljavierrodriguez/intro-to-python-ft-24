<!-- 
Herencia
Encapsulamiento
Polimorfismo
Abstracion
 -->

# Comandos Docker

# Descargar Imagen

- Ejm: docker pull <image>

```shell
docker pull mysql
```

```shell
docker pull postgres
```

# Crear Contenedor

- Ejm: docker run --name <container-name> -e OPTION=VALUE -p PORT_EXT:PORT_INT -d <image>

```shell
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```

```shell
docker run --name postgres-container -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

# Ver los contenedores ejecutandose

```shell
docker ps
```