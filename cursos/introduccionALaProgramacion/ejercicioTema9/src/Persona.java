/**
 * Crea una clase Persona con las siguientes variables:
 * ¬ La edad
 * ¬ El nombre
 * ¬ El teléfono
 */
public class Persona {
    private int edad;
    private String nombre;
    private String telefono;

    /**
     * Setters
     */
    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    /**
     * Getters
     */
    public int getEdad() {
        return this.edad;
    }

    public String getNombre() {
        return this.nombre;
    }

    public String getTelefono() {
        return this.telefono;
    }
}
