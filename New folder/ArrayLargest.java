import java.util.Scanner;

public class ArrayLargest {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in); 

        
        int size;

        
        System.out.print("Enter any number of entry in the list: ");
        size = sc.nextInt();

        
        int[] array = new int[size];


        for (int i = 0; i < size; i++) {
            System.out.print("Array" + (i + 1) + ": ");
            array[i] = sc.nextInt();
        }

        
        int largest = array[0];

    
        for (int i = 1; i < size; i++) {
            if (array[i] > largest) {
                largest = array[i];
            }
        }

        
        System.out.println("Largest number is: " + largest);

        sc.close();
    }
}
