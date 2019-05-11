package com.anna.pages;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Exercise {

    public static int fibo(int n){

        if (n==1 || n==2){
            return 1;
        }
        else
            return fibo(n-2)+fibo(n-1);
    }

    public static String fibNums(int n){
        String s = "";
        for (int i = 1; i <= n; i++) {
            s+=fibo(i)+" ";
        }
        return s;
    }
    public static void main(String[] args) {

//        System.out.println(fibNums(10));

        String str = "anna murat gundogdy";
        String[] sbl = str.split(" ");

        String reverse = "";
        for (int i = 0; i < sbl.length; i++) {
            for (int j = sbl[i].length()-1; j >=0 ; j--) {
                reverse+=sbl[i].substring(j,j+1);
            }
            reverse+=" ";
        }

        System.out.println(reverse);
    }
}
