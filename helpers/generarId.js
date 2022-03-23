//creo una función para el id único que tendrá cada uno de mis objetos
const generarId = () => {
    const random = Math.random().toString(32).substr(2);
    const fecha = Date.now().toString(32);
    return random + fecha;
};

export default generarId