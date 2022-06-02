/**
 * Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de
 * Persona, y con una variable salario que solo tenga la clase Trabajador.
 */
public class Trabajador extends Persona {
    private int salario;

    public void setSalario(int salario) {
        this.salario = salario;
    }

    public int getSalario() {
        return this.salario;
    }

}
