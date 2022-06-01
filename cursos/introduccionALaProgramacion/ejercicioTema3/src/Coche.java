/**
 * Crear una clase coche.
 */
public class Coche {
    /*
     * Dentro de la clase coche, una variable numérica que almacene el número de
     * puertas que tiene.
     */
    private int door = 0;

    /**
     * Una función que incremente el número de puertas que tiene el coche.
     */
    public void addDoor() {
        this.door++;
    }

    /**
     * Getter para obtener el numero de puertas.
     */
    public int getDoor() {
        return this.door;
    }

}