const root = document.getElementById('root')
const e = React.createElement

// Hacer un Button
// size: small, medium, large -> medium por default
// rounded: true o false -> border-radius o cuadrado 'flat' -> false por default
// text: el contenido del boton 
// clase base

const Boton = ({ tamanio = "normal", radio = false, texto }) => {
    const tieneRadio = radio ? "redondo" : "";
   

    return e('button', { className: `${tieneRadio} ${tamanio} boton-base`}, texto);
    
}






const App = () => {
    return e('main', null, [
        e(Boton, {
            tamanio: "grande", 
            radio: false,
            texto: "Apretame la papirola"
        },  )
    ])
  }

ReactDOM.render(e(App), root)