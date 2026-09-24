import java.util.Scanner;

public class ArrayTwoTotal {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n1, n2;
        int total = 0;
        
        System.out.print("Enter number of rows (x): ");
        n1 = scan.nextInt();

        System.out.print("Enter number of columns (y): ");
        n2 = scan.nextInt();

        int[][] array = new int[n1][n2];

        for (int i = 0; i < n1; i++) {
            for (int j = 0; j < n2; j++) {
                System.out.print("Enter value for [" + i + "][" + j + "]: ");
                array[i][j] = scan.nextInt();
                total += array[i][j]; 
            }
        }

        System.out.println("\nArray Elements:");
        for (int i = 0; i < n1; i++) {
            for (int j = 0; j < n2; j++) {
                System.out.print(array[i][j] + "\t");
            }
            System.out.println();
        }

        System.out.println("\nTotal of all elements: " + total);
    }
}
