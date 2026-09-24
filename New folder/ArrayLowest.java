import java.util.Scanner;

public class ArrayLowest {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        
        System.out.print("Enter any number of entry in the list: ");
        int size = sc.nextInt();

    
        int[] array = new int[size];

        
        for (int i = 0; i < size; i++) {
            System.out.print("Array0" + (i + 1) + ": ");
            array[i] = sc.nextInt();
        }

        
        int lowest = array[0];


        for (int i = 1; i < size; i++) {
            if (array[i] < lowest) {
                lowest = array[i];
            }
        }

        
        System.out.println("Lowest no is: " + lowest);

        sc.close();
    }
}
