package com.tests.pruebatecnica;

public class Test {

    public static void main(String[] args) {

        //Print inverted words
        String inp1 = "Hola";
        StringBuilder sB = new StringBuilder(inp1);
        inp1 = sB.reverse().toString();
        System.out.println(sB);


        String inp2 = "victor     ";
        StringBuilder sB2 = new StringBuilder(inp2);
        inp2 = sB2.reverse().toString();
        System.out.println(sB2);


        String inp3 = "robles";
        StringBuilder sB3 = new StringBuilder(inp3);
        inp2 = sB3.reverse().toString();
        System.out.println(sB3);



        //Multiply two numbers
        class Operator {

            public void Operator() {
            }

            public int multiply(int a, int b) {
                return a * b;
            }
        }

    }

}


