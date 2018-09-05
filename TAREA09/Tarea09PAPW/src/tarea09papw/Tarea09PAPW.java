/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tarea09papw;

import java.util.Scanner;

/**
 *
 * @author selen
 */
public class Tarea09PAPW {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        juego();
    }
    
    
    public static void juego()
    {
        System.out.println("Escoge una opcion: \n1.Piedra \n2.Papel \n3.Tijera \n4.Salir");
        Scanner opcion = new Scanner(System.in); //declaro lector de inputs en el teclado para poder leer
        int o = opcion.nextInt(); //esta linea me regresa el valor en entero
        
        if(o != 4)
        {
            o--;  //se resta para que se lea de la misma manera que la lap
            int lap = (int)Math.floor(Math.random()*3); //el int entre parentesis, castea lo otro en entero; el floor es para redondearlo hacia abajo el numero, y el ramndom por 3 es el rango que quieres que abarque, recordar el ejemplo de 4.99
            String[] correcto = {"Piedra", "Papel", "Tijera"}; // este estring pasa a mi variable los valores en orden para el random, si escoje 0 es piedra, etc.

            System.out.println("La lap escogio:"+correcto[lap]);

            if(o == lap)
            {
                System.out.println("Empatados");
            }
            else if (o == 0 && lap == 1)
            {
                System.out.println("Perdiste");
            }
            else if (o == 1 && lap == 2)
            {
                System.out.println("Perdiste");
            }
            else if (o == 2 && lap == 0)
            {
                System.out.println("Perdiste");
            }
            else
            {
                System.out.println("Ganaste");
            }

            System.out.println("Desea Salir del Juego? \n1.Si \n2.No");
            int y = opcion.nextInt();
            if(y == 2)
            {
                juego();
            }
        }
    } 
}
