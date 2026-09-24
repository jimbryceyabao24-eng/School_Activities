import java.util.Scanner;
import java.util.Arrays;

public class InterExer03 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int size;
        double average;
        double total = 0;

        System.out.print("Enter number of days (temperature entries): ");
        size = scan.nextInt();

        double[] temp = new double[size];

        for (int i = 0; i < size; i++) {
            System.out.print("Day " + (i + 1) + " temperature: ");
            temp[i] = scan.nextDouble();
            total += temp[i];
        }

        average = total / size;

        Arrays.sort(temp);
        double[] coldest = new double[2];
        double[] hottest = new double[2];

        if (size >= 2) {
            coldest[0] = temp[0];
            coldest[1] = temp[1];

            hottest[0] = temp[size - 2];
            hottest[1] = temp[size - 1];
        } else {
            coldest[0] = temp[0];
            hottest[0] = temp[0];
        }

        System.out.println("\nTemperatures: " + Arrays.toString(temp));
        System.out.println("Average Temperature: " + average);
        System.out.println("2 Coldest Days: " + Arrays.toString(coldest));
        System.out.println("2 Hottest Days: " + Arrays.toString(hottest));
    }
}
