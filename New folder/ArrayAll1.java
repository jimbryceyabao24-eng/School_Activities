import java.util.Scanner;

public class ArrayAll1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int size;
        int total = 0;

        System.out.print("Enter any number of entry in the list: ");
        size = scan.nextInt();

        int[] array = new int[size];

        for (int i = 0; i < size; i++) {
            System.out.print("Array0" + (i + 1) + ": ");
            array[i] = scan.nextInt();
            total += array[i];
        }

        int largest = array[0];
        int lowest = array[0];
        
        for (int i = 1; i < size; i++) {
            if (array[i] > largest) {
                largest = array[i];
            }

            if (array[i] < lowest) {
                lowest = array[i];
            }
        }

        double average = (double) total / size;

        System.out.println("Total no is: " + total);
        System.out.println("Average no is: " + average);
        System.out.println("Largest no is: " + largest);
        System.out.println("Lowest no is: " + lowest);
    }
}
