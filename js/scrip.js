
const peliculas = [
{
    nombre: "En la Mira",
    categoría: "Suspenso",
    precio: 500,
},
{
    nombre: "Actividad Paranormal",
    categoría: "Terror",
    precio: 600,
},
{
    nombre: "Lightyear",
    categoría: "Infantil",
    precio: 1000,
},
{
    nombre: "Coco",
    categoría: "infantil",
    precio: 200,
},
{
    nombre: "Garra",
    categoría: "Drama",
    precio: 700,
},
{
    nombre: "Son como niños",
    categoría: "Comedia",
    precio: 900,
},
]

const filtrar = prompt("Desea filtrar por nombre SI/NO")

if (filtrar != "NO"){

    const palabraAFiltrar = prompt('Ingrese una pelicula').toLowerCase()
    
    const encontrar = peliculas.filter((pelicula) => pelicula.nombre.toLowerCase().includes(palabraAFiltrar))
    
    console.log(encontrar)

} else if (filtrar != "SI"){

    const filtrar2 = prompt("Desea filtrar por categoría SI/NO")

    if (filtrar2 != "NO"){

        const categoríaAFiltrar = prompt("Ingrese la categoria a filtrar")

        const encontrar2 = peliculas.filter((pelicula) => pelicula.categoría.toLowerCase().includes(categoríaAFiltrar))
        
        console.log(encontrar2)
        
    }
    else if (filtrar2 != "SI") {
     
        alert("se filtrará por precio")
        
        peliculas.sort((peliculas1, peliculas2) => {

            if (peliculas1.precio > peliculas2.precio){

                return 1

            }

            if (peliculas1.precio < peliculas2.precio) {

                return -1

            }
        })
        console.log(peliculas)
    }
}



