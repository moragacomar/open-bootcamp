public class Tema8 {
    public static void main(String[] args) throws Exception {
        /**
         * Para practicar la encapsulación: 
         * Crear un objeto persona en el main.
         */
        Persona Juan = new Persona();

        /**
         * Utiliza los sets para darle valores a las propiedades edad, nombre y
         * telefono.
         */
        Juan.setEdad(36);
        Juan.setNombre("Juan Moraga");
        Juan.setTelefono("+54938342147..");

        /**
         * Mostrar por consola los valores asignados haciendo uso de los gets.
         */
        System.out.println(Juan.getNombre());
        System.out.println(Juan.getEdad());
        System.out.println(Juan.getTelefono());

    }
}
