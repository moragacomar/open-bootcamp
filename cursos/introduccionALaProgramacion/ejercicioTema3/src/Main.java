public class Main {
    public static void main(String[] args) {
        /**
         * Llamar a la función en el main y darle valores.
         */
        System.out.print("Se llama a la funcion -> suma(1,2,3), y se obtiene como resultado: ");
        suma(1, 2, 3);

        /**
         * Crear un objeto miCoche en el main y añadirle una puerta.
         */

        Coche miCoche = new Coche();
        miCoche.addDoor();

        /**
         * Mostrar el número de puertas, usando un Getter.
         */
        System.out.print("Mostrar el numero de puertas que tiene la instancia miCoche de la clase Coche: ");
        System.out.println(miCoche.getDoor());

    }

    /**
     * Crear una función con tres parámetros que sean números que se suman entre sí.
     */
    public static void suma(int a, int b, int c) {
        int res = a + b + c;
        System.out.println(res);
    }

}