public class Tema9 {
    public static void main(String[] args) throws Exception {
        /**
         * Crea ahora un objeto de la clase Cliente que debe tener como propiedades la
         * edad, el telefono, el nombre y el credito, tienes que darles valor y
         * mostrarlas por pantalla.
         */
        Cliente Juan = new Cliente();

        Juan.setEdad(36);
        Juan.setNombre("Juan Moraga");
        Juan.setTelefono("+5438342147..");
        Juan.setCredito(1500);

        System.out.println(
                "El Cliente " + Juan.getNombre() + ", tiene " + Juan.getEdad() + " años, su numero de telefono es "
                        + Juan.getTelefono() + ", y se le otorgo un acredito de $" + Juan.getCredito() + ".");
    }
}
