const librosColeccion =[{
    "Nombre": "Cien Años de Soledad",
    "CantidadPaginas": 417,
    "Autor": "Gabriel García Márquez",
    "Genero": ["Realismo Mágico", "Ficción"],
    "Disponible": true
} ,
{
    "Nombre": "El Amor en los Tiempos del Cólera",
    "CantidadPaginas": 348,
    "Autor": "Gabriel García Márquez",
    "Genero": ["Romance", "Ficción"],
    "Disponible": false
}
];

    function informacionlibro(libro){ 
        console.log(`Nombre: ${libro.Nombre} Cantidad de Páginas: ${libro.CantidadPaginas} Autor: ${libro.Autor} Género: ${libro.Genero.join(', ')} Disponible: ${libro.Disponible ? "Sí" : "No"}`); 
        };
    
    function imprimirLibros(libros){
        for (let i = 0 ; i < libros.length; i++){
            informacionlibro(libros[i]);
        }
    }

    function agregarlibro(libros, nuevolibro){
        libros.push(nuevolibro);
    }

    imprimirLibros(librosColeccion);
