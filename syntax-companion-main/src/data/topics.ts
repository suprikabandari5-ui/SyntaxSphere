import {
  Code2, RotateCw, GitBranch, ArrowRightLeft,
  Type, List, Database, ShieldAlert,
} from "lucide-react";

export type Language = "java" | "python" | "c" | "cpp";

export interface CodeExample {
  language: Language;
  label: string;
  code: string;
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  examples: CodeExample[];
}

export interface Topic {
  id: string;
  title: string;
  icon: any;
  subtopics: Subtopic[];
}

export const LANGUAGE_LABELS: Record<Language, string> = {
  java: "Java",
  python: "Python",
  c: "C",
  cpp: "C++",
};

export const topics: Topic[] = [
  {
    id: "basics",
    title: "Basics",
    icon: Code2,
    subtopics: [
      {
        id: "input-output",
        title: "Input / Output",
        description: "Reading from standard input and writing to standard output is the foundation of any program. Each language provides its own functions or methods for handling I/O, including formatted output for presenting data in a structured way.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Output to console
        System.out.println("Hello, World!");

        // Formatted output
        String name = "Alice";
        int age = 25;
        System.out.printf("Name: %s, Age: %d%n", name, age);

        // Read input from user
        System.out.print("Enter your name: ");
        String input = scanner.nextLine();
        System.out.println("Hello, " + input + "!");

        scanner.close();
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Output to console
print("Hello, World!")

# Formatted output using f-strings
name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")

# Read input from user
user_input = input("Enter your name: ")
print(f"Hello, {user_input}!")`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // Output to console
    printf("Hello, World!\\n");

    // Formatted output
    char name[] = "Alice";
    int age = 25;
    printf("Name: %s, Age: %d\\n", name, age);

    // Read input from user
    char input[100];
    printf("Enter your name: ");
    scanf("%99s", input);
    printf("Hello, %s!\\n", input);

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Output to console
    cout << "Hello, World!" << endl;

    // Formatted output (C++20 std::format or printf-style)
    string name = "Alice";
    int age = 25;
    cout << "Name: " << name << ", Age: " << age << endl;

    // Read input from user
    string input;
    cout << "Enter your name: ";
    getline(cin, input);
    cout << "Hello, " << input << "!" << endl;

    return 0;
}`,
          },
        ],
      },
      {
        id: "variables",
        title: "Variables",
        description: "Variables are named containers for storing data values. Declaration, initialization, and assignment vary between statically-typed languages (Java, C, C++) where you must specify the type, and dynamically-typed languages (Python) where the type is inferred.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // Declaration and initialization
        int count = 10;
        double price = 19.99;
        String greeting = "Hello";
        boolean isActive = true;

        // Type inference (Java 10+)
        var message = "Inferred as String";

        // Constants
        final int MAX_SIZE = 100;

        System.out.println(count + " " + price);
        System.out.println(greeting + " " + isActive);
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Variables are dynamically typed
count = 10
price = 19.99
greeting = "Hello"
is_active = True

# Multiple assignment
x, y, z = 1, 2, 3

# Constants (convention: UPPER_CASE)
MAX_SIZE = 100

# Type hints (optional, Python 3.5+)
name: str = "Alice"
age: int = 25

print(count, price, greeting, is_active)`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // Declaration and initialization
    int count = 10;
    double price = 19.99;
    char greeting[] = "Hello";
    int isActive = 1;  // C has no bool (use stdbool.h)

    // Constants
    const int MAX_SIZE = 100;

    // Multiple declarations
    int a = 1, b = 2, c = 3;

    printf("%d %.2f %s %d\\n", count, price,
           greeting, isActive);

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Declaration and initialization
    int count = 10;
    double price = 19.99;
    string greeting = "Hello";
    bool isActive = true;

    // Auto type inference (C++11)
    auto message = "Inferred type";

    // Constants
    const int MAX_SIZE = 100;
    constexpr int COMPILE_CONST = 42;

    cout << count << " " << price << endl;
    cout << greeting << " " << isActive << endl;

    return 0;
}`,
          },
        ],
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Data types define the kind of values a variable can hold. Primitive types include integers, floating-point numbers, characters, and booleans. Understanding data types is crucial for memory management and type safety.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // Primitive types
        byte b = 127;           // 8-bit  (-128 to 127)
        short s = 32767;        // 16-bit
        int i = 2147483647;     // 32-bit
        long l = 9223372036854775807L; // 64-bit
        float f = 3.14f;        // 32-bit floating point
        double d = 3.14159265;  // 64-bit floating point
        char c = 'A';           // 16-bit Unicode
        boolean flag = true;    // true or false

        // Reference types (wrapper classes)
        Integer boxed = 42;     // Auto-boxing
        String text = "Hello";  // String is a class

        System.out.println("int: " + i + ", double: " + d);
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Python types are dynamic and inferred
integer = 42              # int (arbitrary precision)
floating = 3.14159        # float (64-bit)
complex_num = 3 + 4j      # complex
text = "Hello"            # str (Unicode)
flag = True               # bool
nothing = None            # NoneType

# Check types at runtime
print(type(integer))      # <class 'int'>
print(type(text))         # <class 'str'>

# Collections (composite types)
my_list = [1, 2, 3]       # list (mutable)
my_tuple = (1, 2, 3)      # tuple (immutable)
my_set = {1, 2, 3}        # set
my_dict = {"a": 1}        # dict`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>
#include <stdbool.h>  // for bool type

int main() {
    // Integer types
    char c = 'A';            // 1 byte
    short s = 32767;         // ≥2 bytes
    int i = 2147483647;      // ≥2 bytes (usually 4)
    long l = 2147483647L;    // ≥4 bytes
    long long ll = 9223372036854775807LL; // ≥8 bytes

    // Unsigned variants
    unsigned int ui = 4294967295U;

    // Floating point
    float f = 3.14f;         // 4 bytes
    double d = 3.14159265;   // 8 bytes

    // Boolean (C99+)
    bool flag = true;

    printf("int: %d, double: %f\\n", i, d);
    printf("sizeof(int): %zu bytes\\n", sizeof(int));

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Fundamental types (same as C, plus bool & string)
    int i = 42;
    double d = 3.14;
    char c = 'A';
    bool flag = true;
    string text = "Hello";   // C++ string class

    // Fixed-width integers (C++11)
    int32_t fixed32 = 100;
    int64_t fixed64 = 100000L;

    // Auto type deduction
    auto x = 42;       // int
    auto y = 3.14;     // double
    auto z = "hello";  // const char*

    cout << "int: " << i << ", double: " << d << endl;
    cout << "sizeof(int): " << sizeof(int) << endl;

    return 0;
}`,
          },
        ],
      },
      {
        id: "operators",
        title: "Operators",
        description: "Operators perform operations on variables and values. Common categories include arithmetic, logical, comparison, and bitwise operators. Operator precedence determines the order in which operations are evaluated in complex expressions.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // Arithmetic: +, -, *, /, %
        int sum = 10 + 3;     // 13
        int mod = 10 % 3;     // 1

        // Comparison: ==, !=, >, <, >=, <=
        boolean eq = (5 == 5); // true
        boolean gt = (5 > 3);  // true

        // Logical: &&, ||, !
        boolean and = true && false; // false
        boolean or = true || false;  // true
        boolean not = !true;         // false

        // Bitwise: &, |, ^, ~, <<, >>
        int bitwiseAnd = 5 & 3;  // 1 (0101 & 0011)
        int leftShift = 1 << 3;  // 8

        // Precedence: * before +
        int result = 2 + 3 * 4;  // 14 (not 20)

        System.out.println("Sum: " + sum + ", Mod: " + mod);
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Arithmetic: +, -, *, /, //, %, **
sum_val = 10 + 3       # 13
floor_div = 10 // 3    # 3 (integer division)
power = 2 ** 10        # 1024

# Comparison: ==, !=, >, <, >=, <=
eq = (5 == 5)          # True
gt = (5 > 3)           # True

# Logical: and, or, not
and_val = True and False  # False
or_val = True or False    # True
not_val = not True        # False

# Bitwise: &, |, ^, ~, <<, >>
bitwise_and = 5 & 3   # 1
left_shift = 1 << 3   # 8

# Precedence: * before +
result = 2 + 3 * 4    # 14

print(f"Sum: {sum_val}, Power: {power}")`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // Arithmetic: +, -, *, /, %
    int sum = 10 + 3;     // 13
    int mod = 10 % 3;     // 1

    // Comparison: ==, !=, >, <, >=, <=
    int eq = (5 == 5);    // 1 (true)
    int gt = (5 > 3);     // 1

    // Logical: &&, ||, !
    int and = 1 && 0;     // 0 (false)
    int or = 1 || 0;      // 1 (true)
    int not = !1;          // 0

    // Bitwise: &, |, ^, ~, <<, >>
    int bAnd = 5 & 3;     // 1
    int lShift = 1 << 3;  // 8

    // Precedence: * before +
    int result = 2 + 3 * 4;  // 14

    printf("Sum: %d, Mod: %d\\n", sum, mod);
    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
using namespace std;

int main() {
    // Arithmetic: +, -, *, /, %
    int sum = 10 + 3;     // 13
    int mod = 10 % 3;     // 1

    // Comparison: ==, !=, >, <, >=, <=
    bool eq = (5 == 5);   // true
    bool gt = (5 > 3);    // true

    // Logical: &&, ||, !
    bool andOp = true && false; // false
    bool orOp = true || false;  // true
    bool notOp = !true;         // false

    // Bitwise: &, |, ^, ~, <<, >>
    int bAnd = 5 & 3;    // 1
    int lShift = 1 << 3; // 8

    // Precedence: * before +
    int result = 2 + 3 * 4; // 14

    cout << "Sum: " << sum << ", Mod: " << mod << endl;
    return 0;
}`,
          },
        ],
      },
      {
        id: "comments",
        title: "Comments",
        description: "Comments are annotations in source code that are ignored by the compiler/interpreter. They are used to explain code logic, leave notes for other developers, or temporarily disable code. All languages support single-line and multi-line comments.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `// Single-line comment

/* Multi-line
   comment block */

/**
 * Javadoc comment - used for documentation
 * @param args command line arguments
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello"); // inline comment
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Single-line comment

# Python has no true multi-line comment,
# but you can use consecutive single-line comments

"""
Triple-quoted strings can serve as
multi-line comments or docstrings.
"""

def greet(name):
    """Docstring: explains the function purpose."""
    print(f"Hello, {name}")  # inline comment

greet("World")`,
          },
          {
            language: "c",
            label: "C",
            code: `// Single-line comment (C99+)

/* Multi-line
   comment block
   in C */

#include <stdio.h>

int main() {
    printf("Hello\\n"); /* inline comment */

    /*
     * Common style for
     * block comments in C
     */
    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `// Single-line comment

/* Multi-line
   comment block */

#include <iostream>
using namespace std;

/**
 * Doxygen-style documentation comment.
 * @brief Prints a greeting.
 */
int main() {
    cout << "Hello" << endl; // inline comment

    /*
     * Block comment explaining
     * complex logic below
     */
    return 0;
}`,
          },
        ],
      },
    ],
  },
  {
    id: "loops",
    title: "Loops",
    icon: RotateCw,
    subtopics: [
      {
        id: "for-loops",
        title: "for Loops",
        description: "The for loop is used for iterating over a sequence or executing a block of code a specific number of times. Syntax varies significantly: C-style for loops use initialization, condition, and increment; Python uses the 'for...in' pattern; and modern C++/Java offer range-based for loops.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // Standard for loop
        for (int i = 0; i < 5; i++) {
            System.out.println("i = " + i);
        }

        // Enhanced for (for-each) loop
        int[] numbers = {10, 20, 30, 40, 50};
        for (int num : numbers) {
            System.out.println("num = " + num);
        }

        // Decrementing loop
        for (int i = 10; i > 0; i -= 2) {
            System.out.print(i + " ");
        }
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Range-based for loop
for i in range(5):       # 0, 1, 2, 3, 4
    print(f"i = {i}")

# Iterating over a list
numbers = [10, 20, 30, 40, 50]
for num in numbers:
    print(f"num = {num}")

# With index using enumerate
for idx, val in enumerate(numbers):
    print(f"index {idx}: {val}")

# Custom step (decrementing)
for i in range(10, 0, -2):
    print(i, end=" ")`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // Standard for loop
    for (int i = 0; i < 5; i++) {
        printf("i = %d\\n", i);
    }

    // Iterating over an array
    int numbers[] = {10, 20, 30, 40, 50};
    int len = sizeof(numbers) / sizeof(numbers[0]);
    for (int i = 0; i < len; i++) {
        printf("num = %d\\n", numbers[i]);
    }

    // Decrementing loop
    for (int i = 10; i > 0; i -= 2) {
        printf("%d ", i);
    }

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Standard for loop
    for (int i = 0; i < 5; i++) {
        cout << "i = " << i << endl;
    }

    // Range-based for loop (C++11)
    vector<int> numbers = {10, 20, 30, 40, 50};
    for (int num : numbers) {
        cout << "num = " << num << endl;
    }

    // Decrementing loop
    for (int i = 10; i > 0; i -= 2) {
        cout << i << " ";
    }

    return 0;
}`,
          },
        ],
      },
      {
        id: "while-loops",
        title: "while Loops",
        description: "A while loop repeatedly executes a block of code as long as a given condition remains true. It's ideal when the number of iterations isn't known in advance. The condition is checked before each iteration.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // Basic while loop
        int count = 0;
        while (count < 5) {
            System.out.println("Count: " + count);
            count++;
        }

        // While loop with sentinel value
        int sum = 0;
        int n = 100;
        while (n > 0) {
            sum += n;
            n--;
        }
        System.out.println("Sum 1-100: " + sum);
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# While loop with sentinel value
total = 0
n = 100
while n > 0:
    total += n
    n -= 1
print(f"Sum 1-100: {total}")

# While with else (Python-specific)
i = 0
while i < 3:
    print(i)
    i += 1
else:
    print("Loop completed normally")`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // Basic while loop
    int count = 0;
    while (count < 5) {
        printf("Count: %d\\n", count);
        count++;
    }

    // While loop with sentinel value
    int sum = 0;
    int n = 100;
    while (n > 0) {
        sum += n;
        n--;
    }
    printf("Sum 1-100: %d\\n", sum);

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
using namespace std;

int main() {
    // Basic while loop
    int count = 0;
    while (count < 5) {
        cout << "Count: " << count << endl;
        count++;
    }

    // While loop with sentinel value
    int sum = 0;
    int n = 100;
    while (n > 0) {
        sum += n;
        n--;
    }
    cout << "Sum 1-100: " << sum << endl;

    return 0;
}`,
          },
        ],
      },
      {
        id: "do-while-loops",
        title: "do-while Loops",
        description: "The do-while loop executes the body at least once before checking the condition. It's available in C, C++, and Java. Python doesn't have a native do-while loop, but you can emulate it with a while True loop and a break statement.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // do-while: runs at least once
        int count = 0;
        do {
            System.out.println("Count: " + count);
            count++;
        } while (count < 5);

        // Useful for menu-driven programs
        int choice;
        do {
            System.out.println("1. Option A");
            System.out.println("2. Option B");
            System.out.println("0. Exit");
            choice = 0; // simulated input
        } while (choice != 0);
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# Python has no do-while loop
# Emulate it with while True + break

count = 0
while True:
    print(f"Count: {count}")
    count += 1
    if count >= 5:
        break

# Menu-driven emulation
while True:
    print("1. Option A")
    print("2. Option B")
    print("0. Exit")
    choice = 0  # simulated input
    if choice == 0:
        break`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // do-while: runs at least once
    int count = 0;
    do {
        printf("Count: %d\\n", count);
        count++;
    } while (count < 5);

    // Useful for input validation
    int choice;
    do {
        printf("1. Option A\\n");
        printf("2. Option B\\n");
        printf("0. Exit\\n");
        choice = 0; // simulated input
    } while (choice != 0);

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
using namespace std;

int main() {
    // do-while: runs at least once
    int count = 0;
    do {
        cout << "Count: " << count << endl;
        count++;
    } while (count < 5);

    // Input validation pattern
    int choice;
    do {
        cout << "1. Option A" << endl;
        cout << "2. Option B" << endl;
        cout << "0. Exit" << endl;
        choice = 0; // simulated input
    } while (choice != 0);

    return 0;
}`,
          },
        ],
      },
      {
        id: "loop-control",
        title: "Loop Control",
        description: "Loop control statements alter the normal flow of loop execution. 'break' terminates the loop entirely, while 'continue' skips the rest of the current iteration and moves to the next one. These work similarly across all four languages.",
        examples: [
          {
            language: "java",
            label: "Java",
            code: `public class Main {
    public static void main(String[] args) {
        // break: exit loop early
        for (int i = 0; i < 10; i++) {
            if (i == 5) break;
            System.out.print(i + " "); // 0 1 2 3 4
        }
        System.out.println();

        // continue: skip current iteration
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue;
            System.out.print(i + " "); // 1 3 5 7 9
        }
        System.out.println();

        // Labeled break (nested loops)
        outer:
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (j == 2) break outer;
                System.out.print(i + "," + j + " ");
            }
        }
    }
}`,
          },
          {
            language: "python",
            label: "Python",
            code: `# break: exit loop early
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")  # 0 1 2 3 4
print()

# continue: skip current iteration
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")  # 1 3 5 7 9
print()

# break in nested loops (only breaks inner)
for i in range(3):
    for j in range(3):
        if j == 2:
            break
        print(f"{i},{j}", end=" ")
    print()  # newline after inner loop`,
          },
          {
            language: "c",
            label: "C",
            code: `#include <stdio.h>

int main() {
    // break: exit loop early
    for (int i = 0; i < 10; i++) {
        if (i == 5) break;
        printf("%d ", i);  // 0 1 2 3 4
    }
    printf("\\n");

    // continue: skip current iteration
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) continue;
        printf("%d ", i);  // 1 3 5 7 9
    }
    printf("\\n");

    // Nested loop with goto (C doesn't have labeled break)
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (j == 2) goto done;
            printf("%d,%d ", i, j);
        }
    }
    done:
    printf("\\n");

    return 0;
}`,
          },
          {
            language: "cpp",
            label: "C++",
            code: `#include <iostream>
using namespace std;

int main() {
    // break: exit loop early
    for (int i = 0; i < 10; i++) {
        if (i == 5) break;
        cout << i << " ";  // 0 1 2 3 4
    }
    cout << endl;

    // continue: skip current iteration
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) continue;
        cout << i << " ";  // 1 3 5 7 9
    }
    cout << endl;

    // Nested loop break (similar to C)
    bool shouldBreak = false;
    for (int i = 0; i < 3 && !shouldBreak; i++) {
        for (int j = 0; j < 3; j++) {
            if (j == 2) { shouldBreak = true; break; }
            cout << i << "," << j << " ";
        }
    }

    return 0;
}`,
          },
        ],
      },
    ],
  },
  {
    id: "conditionals",
    title: "Conditional Statements",
    icon: GitBranch,
    subtopics: [
      {
        id: "if-statements",
        title: "if Statements",
        description: "The if statement evaluates a boolean condition and executes a block of code only if the condition is true. It's the most basic form of conditional branching available in every programming language.",
        examples: [
          { language: "java", label: "Java", code: `int x = 10;\nif (x > 5) {\n    System.out.println("x is greater than 5");\n}` },
          { language: "python", label: "Python", code: `x = 10\nif x > 5:\n    print("x is greater than 5")` },
          { language: "c", label: "C", code: `int x = 10;\nif (x > 5) {\n    printf("x is greater than 5\\n");\n}` },
          { language: "cpp", label: "C++", code: `int x = 10;\nif (x > 5) {\n    cout << "x is greater than 5" << endl;\n}` },
        ],
      },
      {
        id: "if-else",
        title: "if-else Statements",
        description: "The if-else construct provides two branches: one executed when the condition is true, and another when it's false. This enables binary decision-making in your programs.",
        examples: [
          { language: "java", label: "Java", code: `int age = 18;\nif (age >= 18) {\n    System.out.println("Adult");\n} else {\n    System.out.println("Minor");\n}` },
          { language: "python", label: "Python", code: `age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")` },
          { language: "c", label: "C", code: `int age = 18;\nif (age >= 18) {\n    printf("Adult\\n");\n} else {\n    printf("Minor\\n");\n}` },
          { language: "cpp", label: "C++", code: `int age = 18;\nif (age >= 18) {\n    cout << "Adult" << endl;\n} else {\n    cout << "Minor" << endl;\n}` },
        ],
      },
      {
        id: "if-elif-else",
        title: "if-elif-else / switch",
        description: "Multi-way branching allows checking multiple conditions. Python uses elif, Java/C/C++ offer both else-if chains and switch statements for clean multi-condition handling.",
        examples: [
          { language: "java", label: "Java", code: `int score = 85;\nif (score >= 90) {\n    System.out.println("A");\n} else if (score >= 80) {\n    System.out.println("B");\n} else if (score >= 70) {\n    System.out.println("C");\n} else {\n    System.out.println("F");\n}\n\n// Switch statement\nint day = 3;\nswitch (day) {\n    case 1: System.out.println("Monday"); break;\n    case 2: System.out.println("Tuesday"); break;\n    case 3: System.out.println("Wednesday"); break;\n    default: System.out.println("Other");\n}` },
          { language: "python", label: "Python", code: `score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")\n\n# Match statement (Python 3.10+)\nday = 3\nmatch day:\n    case 1: print("Monday")\n    case 2: print("Tuesday")\n    case 3: print("Wednesday")\n    case _: print("Other")` },
          { language: "c", label: "C", code: `int score = 85;\nif (score >= 90) {\n    printf("A\\n");\n} else if (score >= 80) {\n    printf("B\\n");\n} else if (score >= 70) {\n    printf("C\\n");\n} else {\n    printf("F\\n");\n}\n\n// Switch statement\nint day = 3;\nswitch (day) {\n    case 1: printf("Monday\\n"); break;\n    case 2: printf("Tuesday\\n"); break;\n    case 3: printf("Wednesday\\n"); break;\n    default: printf("Other\\n");\n}` },
          { language: "cpp", label: "C++", code: `int score = 85;\nif (score >= 90) {\n    cout << "A" << endl;\n} else if (score >= 80) {\n    cout << "B" << endl;\n} else if (score >= 70) {\n    cout << "C" << endl;\n} else {\n    cout << "F" << endl;\n}\n\n// Switch statement\nint day = 3;\nswitch (day) {\n    case 1: cout << "Monday" << endl; break;\n    case 2: cout << "Tuesday" << endl; break;\n    case 3: cout << "Wednesday" << endl; break;\n    default: cout << "Other" << endl;\n}` },
        ],
      },
      {
        id: "ternary",
        title: "Ternary Operator",
        description: "The ternary (conditional) operator provides a concise way to write simple if-else expressions in a single line. It evaluates a condition and returns one of two values.",
        examples: [
          { language: "java", label: "Java", code: `int age = 20;\nString status = (age >= 18) ? "Adult" : "Minor";\nSystem.out.println(status); // "Adult"` },
          { language: "python", label: "Python", code: `age = 20\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)  # "Adult"` },
          { language: "c", label: "C", code: `int age = 20;\nconst char* status = (age >= 18) ? "Adult" : "Minor";\nprintf("%s\\n", status); // "Adult"` },
          { language: "cpp", label: "C++", code: `int age = 20;\nstring status = (age >= 18) ? "Adult" : "Minor";\ncout << status << endl; // "Adult"` },
        ],
      },
    ],
  },
  {
    id: "conversions",
    title: "Conversions",
    icon: ArrowRightLeft,
    subtopics: [
      {
        id: "casting",
        title: "Implicit & Explicit Casting",
        description: "Implicit conversions happen automatically when a smaller type is assigned to a larger type. Explicit casting (type casting) is required when converting from a larger to a smaller type, which may result in data loss.",
        examples: [
          { language: "java", label: "Java", code: `// Implicit (widening)\nint i = 42;\ndouble d = i;  // int → double automatically\n\n// Explicit (narrowing)\ndouble pi = 3.14159;\nint truncated = (int) pi;  // 3 (loses decimal)\n\nlong big = 100000L;\nint small = (int) big;  // explicit cast required` },
          { language: "python", label: "Python", code: `# Python handles most conversions implicitly\ni = 42\nd = float(i)      # explicit: int → float\n\n# Explicit conversions\npi = 3.14159\ntruncated = int(pi)  # 3 (truncates)\n\n# Python integers have arbitrary precision\nbig = 10 ** 100  # no overflow!` },
          { language: "c", label: "C", code: `// Implicit (promotion)\nint i = 42;\ndouble d = i;  // int → double\n\n// Explicit (casting)\ndouble pi = 3.14159;\nint truncated = (int)pi;  // 3\n\n// Dangerous: potential data loss\nlong big = 100000L;\nshort small = (short)big;  // may overflow` },
          { language: "cpp", label: "C++", code: `// Implicit\nint i = 42;\ndouble d = i;\n\n// C++ style casts (preferred over C-style)\ndouble pi = 3.14159;\nint truncated = static_cast<int>(pi); // 3\n\n// Other cast types\n// dynamic_cast - for polymorphic types\n// const_cast - add/remove const\n// reinterpret_cast - low-level bit reinterpretation` },
        ],
      },
      {
        id: "string-to-number",
        title: "String to Number",
        description: "Converting strings to numeric types is essential when processing user input or parsing data files. Each language provides specific functions or methods for this conversion.",
        examples: [
          { language: "java", label: "Java", code: `String numStr = "42";\nint i = Integer.parseInt(numStr);\ndouble d = Double.parseDouble("3.14");\nlong l = Long.parseLong("100000");` },
          { language: "python", label: "Python", code: `num_str = "42"\ni = int(num_str)\nd = float("3.14")\n\n# With error handling\ntry:\n    val = int("not_a_number")\nexcept ValueError:\n    print("Invalid number")` },
          { language: "c", label: "C", code: `#include <stdlib.h>\nchar numStr[] = "42";\nint i = atoi(numStr);\ndouble d = atof("3.14");\nlong l = strtol("100000", NULL, 10);` },
          { language: "cpp", label: "C++", code: `#include <string>\nstring numStr = "42";\nint i = stoi(numStr);\ndouble d = stod("3.14");\nlong l = stol("100000");` },
        ],
      },
      {
        id: "number-to-string",
        title: "Number to String",
        description: "Converting numbers to strings is needed for display, concatenation, and formatting purposes. Each language offers straightforward methods for this conversion.",
        examples: [
          { language: "java", label: "Java", code: `int num = 42;\nString s1 = String.valueOf(num);\nString s2 = Integer.toString(num);\nString s3 = "" + num; // concatenation trick\nString formatted = String.format("Value: %d", num);` },
          { language: "python", label: "Python", code: `num = 42\ns1 = str(num)\ns2 = f"{num}"       # f-string\ns3 = format(num, 'd')  # format function\nformatted = f"Value: {num}"` },
          { language: "c", label: "C", code: `#include <stdio.h>\nint num = 42;\nchar buffer[20];\nsprintf(buffer, "%d", num);\nprintf("As string: %s\\n", buffer);` },
          { language: "cpp", label: "C++", code: `#include <string>\nint num = 42;\nstring s = to_string(num);\n// For formatting:\nchar buffer[20];\nsnprintf(buffer, sizeof(buffer), "Value: %d", num);` },
        ],
      },
    ],
  },
  {
    id: "strings",
    title: "Strings",
    icon: Type,
    subtopics: [
      {
        id: "string-basics",
        title: "Declaration & Initialization",
        description: "Strings represent sequences of characters. In Java and Python, strings are objects with built-in methods. In C, strings are character arrays terminated by a null character. C++ offers both C-style strings and the std::string class.",
        examples: [
          { language: "java", label: "Java", code: `String s1 = "Hello, World!";\nString s2 = new String("Hello");\nString empty = "";\nchar[] chars = {'H','e','l','l','o'};\nString fromChars = new String(chars);` },
          { language: "python", label: "Python", code: `s1 = "Hello, World!"\ns2 = 'Single quotes work too'\ns3 = """Multi-line\nstring"""\nempty = ""\nraw = r"No \\escapes here"` },
          { language: "c", label: "C", code: `char s1[] = "Hello, World!";\nchar s2[20] = "Hello";\nchar *s3 = "String literal";\nchar empty[] = "";` },
          { language: "cpp", label: "C++", code: `#include <string>\nstring s1 = "Hello, World!";\nstring s2("Constructor init");\nstring empty;\nstring repeated(5, 'x'); // "xxxxx"` },
        ],
      },
      {
        id: "string-manipulation",
        title: "Manipulation",
        description: "Common string operations include concatenation, slicing/substring extraction, and finding substrings. These are fundamental for text processing in any programming language.",
        examples: [
          { language: "java", label: "Java", code: `String a = "Hello";\nString b = " World";\n\n// Concatenation\nString c = a + b;  // "Hello World"\nString d = a.concat(b);\n\n// Substring\nString sub = a.substring(1, 4);  // "ell"\n\n// Find\nint idx = c.indexOf("World");  // 6\nboolean has = c.contains("World"); // true` },
          { language: "python", label: "Python", code: `a = "Hello"\nb = " World"\n\n# Concatenation\nc = a + b          # "Hello World"\nd = f"{a}{b}"      # f-string\n\n# Slicing\nsub = a[1:4]       # "ell"\nlast3 = a[-3:]     # "llo"\n\n# Find\nidx = c.find("World")  # 6\nhas = "World" in c      # True` },
          { language: "c", label: "C", code: `#include <string.h>\nchar a[50] = "Hello";\nchar b[] = " World";\n\n// Concatenation\nstrcat(a, b);  // a is now "Hello World"\n\n// Substring (manual copy)\nchar sub[4];\nstrncpy(sub, a + 1, 3);\nsub[3] = '\\0';  // "ell"\n\n// Find\nchar *pos = strstr(a, "World");\nif (pos) printf("Found at: %ld\\n", pos - a);` },
          { language: "cpp", label: "C++", code: `string a = "Hello";\nstring b = " World";\n\n// Concatenation\nstring c = a + b;      // "Hello World"\na.append(" there");    // "Hello there"\n\n// Substring\nstring sub = a.substr(1, 3); // "ell"\n\n// Find\nsize_t idx = c.find("World"); // 6\nbool has = (idx != string::npos); // true` },
        ],
      },
      {
        id: "string-functions",
        title: "Built-in Functions",
        description: "Each language provides a rich set of built-in string functions for common operations like getting length, changing case, trimming whitespace, and replacing characters.",
        examples: [
          { language: "java", label: "Java", code: `String s = "  Hello, World!  ";\n\nint len = s.length();           // 17\nString trimmed = s.trim();      // "Hello, World!"\nString upper = s.toUpperCase(); // "  HELLO, WORLD!  "\nString lower = s.toLowerCase();\nString replaced = s.replace("World", "Java");\nboolean starts = s.trim().startsWith("Hello"); // true` },
          { language: "python", label: "Python", code: `s = "  Hello, World!  "\n\nlength = len(s)              # 17\ntrimmed = s.strip()          # "Hello, World!"\nupper = s.upper()            # "  HELLO, WORLD!  "\nlower = s.lower()\nreplaced = s.replace("World", "Python")\nstarts = s.strip().startswith("Hello")  # True` },
          { language: "c", label: "C", code: `#include <string.h>\n#include <ctype.h>\nchar s[] = "Hello, World!";\n\nint len = strlen(s);  // 13\n\n// To uppercase (manual)\nfor (int i = 0; s[i]; i++)\n    s[i] = toupper(s[i]);\n// s is now "HELLO, WORLD!"\n\n// C has no built-in trim, replace, etc.\n// These require manual implementation` },
          { language: "cpp", label: "C++", code: `#include <string>\n#include <algorithm>\nstring s = "  Hello, World!  ";\n\nint len = s.length();    // 17\nint sz = s.size();       // same as length()\n\n// Erase leading/trailing spaces (C++)\nauto ltrim = s.find_first_not_of(' ');\nauto rtrim = s.find_last_not_of(' ');\nstring trimmed = s.substr(ltrim, rtrim - ltrim + 1);\n\n// Transform to uppercase\nstring upper = s;\ntransform(upper.begin(), upper.end(),\n          upper.begin(), ::toupper);` },
        ],
      },
    ],
  },
  {
    id: "arrays-lists",
    title: "Arrays / Lists",
    icon: List,
    subtopics: [
      {
        id: "array-declaration",
        title: "Declaration & Initialization",
        description: "Arrays (or lists in Python) store ordered collections of elements. C and C++ use fixed-size arrays, Java has both arrays and ArrayList, and Python uses dynamic lists.",
        examples: [
          { language: "java", label: "Java", code: `// Fixed-size array\nint[] arr = {1, 2, 3, 4, 5};\nint[] empty = new int[10]; // size 10, zeros\n\n// Dynamic list (ArrayList)\nimport java.util.ArrayList;\nArrayList<Integer> list = new ArrayList<>();\nlist.add(1);\nlist.add(2);` },
          { language: "python", label: "Python", code: `# Lists are dynamic and heterogeneous\narr = [1, 2, 3, 4, 5]\nempty = []\nmixed = [1, "hello", True, 3.14]\n\n# List comprehension\nsquares = [x**2 for x in range(5)]  # [0,1,4,9,16]` },
          { language: "c", label: "C", code: `// Fixed-size arrays\nint arr[] = {1, 2, 3, 4, 5};\nint empty[10] = {0}; // all zeros\n\nint len = sizeof(arr) / sizeof(arr[0]); // 5` },
          { language: "cpp", label: "C++", code: `#include <vector>\n// Fixed-size array\nint arr[] = {1, 2, 3, 4, 5};\n\n// Dynamic vector (preferred)\nvector<int> vec = {1, 2, 3, 4, 5};\nvector<int> empty;\nvec.push_back(6); // add element` },
        ],
      },
      {
        id: "array-access",
        title: "Accessing Elements",
        description: "Elements are accessed by their index position, starting from 0 in all four languages. Python also supports negative indexing to access elements from the end.",
        examples: [
          { language: "java", label: "Java", code: `int[] arr = {10, 20, 30, 40, 50};\nint first = arr[0];     // 10\nint last = arr[arr.length - 1]; // 50\narr[2] = 99; // modify element` },
          { language: "python", label: "Python", code: `arr = [10, 20, 30, 40, 50]\nfirst = arr[0]       # 10\nlast = arr[-1]       # 50 (negative indexing)\narr[2] = 99          # modify element\nslice = arr[1:4]     # [20, 99, 40]` },
          { language: "c", label: "C", code: `int arr[] = {10, 20, 30, 40, 50};\nint first = arr[0];     // 10\nint len = sizeof(arr)/sizeof(arr[0]);\nint last = arr[len - 1]; // 50\narr[2] = 99;` },
          { language: "cpp", label: "C++", code: `vector<int> arr = {10, 20, 30, 40, 50};\nint first = arr[0];        // 10\nint last = arr.back();     // 50\nint safe = arr.at(2);      // 30 (bounds-checked)\narr[2] = 99;` },
        ],
      },
      {
        id: "array-builtin",
        title: "Built-in Functions",
        description: "Languages provide various built-in functions for array/list operations like sorting, finding length, adding/removing elements, and searching.",
        examples: [
          { language: "java", label: "Java", code: `import java.util.*;\nArrayList<Integer> list = new ArrayList<>(Arrays.asList(3,1,4,1,5));\n\nlist.size();           // 5\nlist.add(9);           // append\nlist.add(2, 99);       // insert at index 2\nlist.remove(0);        // remove by index\nCollections.sort(list); // sort ascending\nlist.contains(4);      // true` },
          { language: "python", label: "Python", code: `arr = [3, 1, 4, 1, 5]\n\nlen(arr)              # 5\narr.append(9)         # add to end\narr.insert(2, 99)     # insert at index\narr.remove(1)         # remove first occurrence\narr.sort()            # sort in place\n4 in arr              # True\narr.reverse()         # reverse in place` },
          { language: "c", label: "C", code: `#include <stdlib.h>\nint arr[] = {3, 1, 4, 1, 5};\nint len = sizeof(arr)/sizeof(arr[0]);\n\n// Sort using qsort\nint cmp(const void *a, const void *b) {\n    return (*(int*)a - *(int*)b);\n}\nqsort(arr, len, sizeof(int), cmp);\n\n// C arrays have no built-in add/remove\n// Manual memory management required` },
          { language: "cpp", label: "C++", code: `#include <algorithm>\nvector<int> v = {3, 1, 4, 1, 5};\n\nv.size();              // 5\nv.push_back(9);        // add to end\nv.insert(v.begin()+2, 99); // insert at index\nv.erase(v.begin());    // remove at index\nsort(v.begin(), v.end()); // sort\nauto it = find(v.begin(), v.end(), 4); // find` },
        ],
      },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    icon: Database,
    subtopics: [
      {
        id: "stacks",
        title: "Stacks",
        description: "A stack is a Last-In-First-Out (LIFO) data structure. Elements are added (pushed) and removed (popped) from the top. Stacks are used in function call management, undo operations, and expression evaluation.",
        examples: [
          { language: "java", label: "Java", code: `import java.util.Stack;\nStack<Integer> stack = new Stack<>();\nstack.push(10);\nstack.push(20);\nstack.push(30);\nint top = stack.peek();   // 30\nint popped = stack.pop(); // 30\nboolean empty = stack.isEmpty(); // false` },
          { language: "python", label: "Python", code: `# Using a list as a stack\nstack = []\nstack.append(10)  # push\nstack.append(20)\nstack.append(30)\ntop = stack[-1]     # peek: 30\npopped = stack.pop() # 30\nis_empty = len(stack) == 0` },
          { language: "c", label: "C", code: `#define MAX 100\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    if (top < MAX - 1) stack[++top] = val;\n}\nint pop() {\n    if (top >= 0) return stack[top--];\n    return -1; // underflow\n}\nint peek() {\n    if (top >= 0) return stack[top];\n    return -1;\n}` },
          { language: "cpp", label: "C++", code: `#include <stack>\nstack<int> s;\ns.push(10);\ns.push(20);\ns.push(30);\nint top = s.top();   // 30\ns.pop();             // removes 30\nbool empty = s.empty(); // false` },
        ],
      },
      {
        id: "queues",
        title: "Queues",
        description: "A queue is a First-In-First-Out (FIFO) data structure. Elements are added at the back (enqueue) and removed from the front (dequeue). Queues are used in scheduling, BFS, and buffer management.",
        examples: [
          { language: "java", label: "Java", code: `import java.util.LinkedList;\nimport java.util.Queue;\nQueue<Integer> queue = new LinkedList<>();\nqueue.add(10);      // enqueue\nqueue.add(20);\nqueue.add(30);\nint front = queue.peek();  // 10\nint removed = queue.poll(); // 10` },
          { language: "python", label: "Python", code: `from collections import deque\nqueue = deque()\nqueue.append(10)     # enqueue\nqueue.append(20)\nqueue.append(30)\nfront = queue[0]      # peek: 10\nremoved = queue.popleft() # dequeue: 10` },
          { language: "c", label: "C", code: `#define MAX 100\nint queue[MAX];\nint front = 0, rear = -1, count = 0;\n\nvoid enqueue(int val) {\n    if (count < MAX) {\n        rear = (rear + 1) % MAX;\n        queue[rear] = val;\n        count++;\n    }\n}\nint dequeue() {\n    if (count > 0) {\n        int val = queue[front];\n        front = (front + 1) % MAX;\n        count--;\n        return val;\n    }\n    return -1;\n}` },
          { language: "cpp", label: "C++", code: `#include <queue>\nqueue<int> q;\nq.push(10);        // enqueue\nq.push(20);\nq.push(30);\nint front = q.front();  // 10\nq.pop();                // removes 10\nbool empty = q.empty();` },
        ],
      },
      {
        id: "dictionaries",
        title: "Dictionaries / Maps",
        description: "Dictionaries (maps/hashmaps) store key-value pairs for fast lookup by key. They are essential for associative data storage and are implemented differently across languages.",
        examples: [
          { language: "java", label: "Java", code: `import java.util.HashMap;\nHashMap<String, Integer> map = new HashMap<>();\nmap.put("alice", 90);\nmap.put("bob", 85);\nint score = map.get("alice");     // 90\nboolean has = map.containsKey("bob"); // true\nmap.remove("bob");\nfor (var entry : map.entrySet()) {\n    System.out.println(entry.getKey() + ": " + entry.getValue());\n}` },
          { language: "python", label: "Python", code: `d = {"alice": 90, "bob": 85}\nscore = d["alice"]          # 90\nsafe = d.get("carol", 0)   # 0 (default)\nd["carol"] = 78             # insert\ndel d["bob"]                # delete\nfor key, val in d.items():\n    print(f"{key}: {val}")` },
          { language: "c", label: "C", code: `// C has no built-in dictionary\n// Simple hash table implementation\n#include <string.h>\ntypedef struct {\n    char key[50];\n    int value;\n} Entry;\n\nEntry table[100];\nint count = 0;\n\nvoid put(const char* key, int val) {\n    strcpy(table[count].key, key);\n    table[count].value = val;\n    count++;\n}` },
          { language: "cpp", label: "C++", code: `#include <unordered_map>\nunordered_map<string, int> map;\nmap["alice"] = 90;\nmap["bob"] = 85;\nint score = map["alice"];     // 90\nbool has = map.count("bob");  // 1 (true)\nmap.erase("bob");\nfor (auto& [key, val] : map) {\n    cout << key << ": " << val << endl;\n}` },
        ],
      },
    ],
  },
  {
    id: "error-handling",
    title: "Error Handling",
    icon: ShieldAlert,
    subtopics: [
      {
        id: "try-catch",
        title: "try-catch / try-except",
        description: "Exception handling allows programs to gracefully handle runtime errors. Java, C++, and Python use try-catch/except blocks. C relies on error codes and manual checking since it doesn't have exceptions.",
        examples: [
          { language: "java", label: "Java", code: `try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Error: " + e.getMessage());\n} catch (Exception e) {\n    System.out.println("General error: " + e.getMessage());\n} finally {\n    System.out.println("Always runs");\n}\n\n// Throwing exceptions\npublic static void validate(int age) {\n    if (age < 0) throw new IllegalArgumentException("Negative age");\n}` },
          { language: "python", label: "Python", code: `try:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Error: {e}")\nexcept Exception as e:\n    print(f"General error: {e}")\nelse:\n    print("No error occurred")\nfinally:\n    print("Always runs")\n\n# Raising exceptions\ndef validate(age):\n    if age < 0:\n        raise ValueError("Negative age")` },
          { language: "c", label: "C", code: `#include <stdio.h>\n#include <errno.h>\n\n// C uses error codes, not exceptions\nFILE *f = fopen("nonexistent.txt", "r");\nif (f == NULL) {\n    printf("Error: %s\\n", strerror(errno));\n}\n\n// Return error codes from functions\nint divide(int a, int b, int *result) {\n    if (b == 0) return -1; // error code\n    *result = a / b;\n    return 0; // success\n}` },
          { language: "cpp", label: "C++", code: `#include <stdexcept>\ntry {\n    throw runtime_error("Something went wrong");\n} catch (const runtime_error& e) {\n    cout << "Error: " << e.what() << endl;\n} catch (const exception& e) {\n    cout << "General: " << e.what() << endl;\n} catch (...) {\n    cout << "Unknown error" << endl;\n}\n\n// Custom exception\nclass MyError : public runtime_error {\npublic:\n    MyError(string msg) : runtime_error(msg) {}\n};` },
        ],
      },
      {
        id: "assertions",
        title: "Assertions",
        description: "Assertions are used to verify assumptions during development. They check conditions that should always be true and throw errors if they're not. Assertions are typically disabled in production builds.",
        examples: [
          { language: "java", label: "Java", code: `// Enable with: java -ea MainClass\npublic static void main(String[] args) {\n    int age = 25;\n    assert age >= 0 : "Age cannot be negative";\n    assert age < 150 : "Unreasonable age";\n    System.out.println("Age: " + age);\n}` },
          { language: "python", label: "Python", code: `age = 25\nassert age >= 0, "Age cannot be negative"\nassert age < 150, "Unreasonable age"\nprint(f"Age: {age}")\n\n# Assertions are disabled with python -O flag\n# Don't use for input validation in production!` },
          { language: "c", label: "C", code: `#include <assert.h>\nint age = 25;\nassert(age >= 0);  // aborts if false\nassert(age < 150);\nprintf("Age: %d\\n", age);\n\n// Disable with #define NDEBUG before #include` },
          { language: "cpp", label: "C++", code: `#include <cassert>\nint age = 25;\nassert(age >= 0 && "Age cannot be negative");\nassert(age < 150);\ncout << "Age: " << age << endl;\n\n// C++11: static_assert for compile-time\nstatic_assert(sizeof(int) >= 4, "int must be >= 4 bytes");` },
        ],
      },
    ],
  },
];
