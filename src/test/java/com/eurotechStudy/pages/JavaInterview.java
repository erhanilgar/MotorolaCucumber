package com.eurotechStudy.pages;

import java.util.Arrays;
import java.util.Scanner;

public class JavaInterview {

    public static void main(String[] args) {


        //First way

        String str = "Ankara";
        for (int i = str.length() - 1; i >= 0; i--) {
            System.out.println("str.charAt(i) = " + str.charAt(i));

        }
        StringBuilder reverse = new StringBuilder(str);
        System.out.println("reverse.reverse() = " + reverse.reverse());
        System.out.println("reverse.append(7) = " + reverse.append(7));

        String[] array1 = new String[]{"Ankara", "Istanbul", "Izmir", "Bursa"};
        for (int i = array1.length - 1; i >= 0; i--) {
            System.out.println("array1[i] = " + array1[i]);

        }
        Arrays.sort(array1);
        System.out.println(Arrays.deepToString(array1));
        Arrays.sort(array1, 0, 1);
        System.out.println(Arrays.deepToString(array1));
        Scanner sc= new Scanner(System.in);
        int num=sc.nextInt();
//        for (int i = 1; i <= num; i++)
//        {
//            if (((i % 5) == 0) && ((i % 7) == 0)) // Is it a multiple of 5 & 7?
//                System.out.println("fizzbuzz");
//            else if ((i % 5) == 0) // Is it a multiple of 5?
//                System.out.println("fizz");
//            else if ((i % 7) == 0) // Is it a multiple of 7?
//                System.out.println("buzz");
//            else
//                System.out.println(i); // Not a multiple of 5 or 7
//        }

        for (int i = 0; i <=99 ; i++) {
            if(((i%5)==0)&&(i%7)==0){
                System.out.println("fizzbuzz");
            }else if((i%5==0)){
                System.out.println("Fizz");
            }else if((i%7==0)){
                System.out.println("Buzz");
            }else{
                System.out.println("Not a multiple 5 and 7");
            }
        }
    }
    }



