/**
 * Crear clase Persona.
 */
public class Persona {
    /**
     * Crear variables las privadas edad, nombre y telefono de la clase Persona.
     */
    private int edad;
    private String nombre;
    private String telefono;

    /**
     * Crear gets y sets de cada propiedad.
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

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
