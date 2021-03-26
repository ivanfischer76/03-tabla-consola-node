# Notas:
Programa en node que muestra la tabla de multiplicar de un número desde un número dado hasta otro número dado y lo guarda en un archivo de texto.
* Descragar y ejecutar npm install
* Para ejecutar abrir consola de comando y ejecutar:
```
node app -b=[base] -i=[inicio] -f=[fin] -l
```
* En la carpeta ```tablas``` se almacenarán las tablas generadas en formato ```.txt```

```
Opciones:
      --help     Muestra ayuda                                  [booleano]
      --version  Muestra número de versión                      [booleano]
  -b, --base     indica multiplicando                           [número] [requerido]
  -l, --listar   muestra la tabla de multiplicar en pantalla    [booleano] [defecto: false]
  -i, --inicio   indica el mínimo multiplicador                 [número] [defecto: 1]
  -f, --fin      indica el máximo multiplicador                 [número] [defecto: 10]
 ```
 ***