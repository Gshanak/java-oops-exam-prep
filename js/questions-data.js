// ════════════════════════════════════════════════════════════════════
// JAVA OOPs — MOST PROBABLE EXAM QUESTIONS
// Cross-referenced from Question Bank, Dec 2025 PYQ, Model Papers 1 & 2
// 35 Questions: 5 Units x (4 Essay + 3 Short Answer)
// ════════════════════════════════════════════════════════════════════

const QUESTIONS = [
  // ─────────────────────────────────────────────────────────────
  // UNIT 1: OOPs Concepts and Java Programming
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #1,#2, PYQ Q9(a), MP1 Q9(a), Study Material Answers",
    question: "What is object-oriented programming? How is it different from procedure-oriented programming? Explain the basic concepts/principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction in detail.",
    keyPoints: [
      "OOP ties data and functions together into objects; procedural separates them",
      "OOP follows bottom-up design; procedural follows top-down",
      "Data is hidden from external functions in OOP (encapsulation)",
      "Objects communicate through methods (message passing)",
      "Encapsulation: wrapping data + methods into a single unit (class)",
      "Inheritance: objects of one class acquire properties of another class",
      "Polymorphism: ability to take more than one form (overloading/overriding)",
      "Dynamic Binding: code executed depends on the object at runtime"
    ],
    answer: "<h3>OOP vs Procedure-Oriented Programming</h3><p><b>Object-Oriented Programming (OOP)</b> treats data as a critical element in program development and does not allow it to flow freely around the system. It ties data more closely to the functions that operate on it and protects it from unintentional modification. OOP allows us to decompose a problem into entities called <b>objects</b> and build data and functions around those entities.</p><p><b>Procedural Programming</b> organizes programs around procedures/functions. Data flows freely between functions. It follows a top-down approach.</p><table><tr><th>OOP</th><th>Procedural</th></tr><tr><td>Emphasis on data</td><td>Emphasis on procedures</td></tr><tr><td>Programs divided into objects</td><td>Programs divided into functions</td></tr><tr><td>Data is hidden</td><td>Data flows freely</td></tr><tr><td>Bottom-up approach</td><td>Top-down approach</td></tr><tr><td>Objects communicate via methods</td><td>Functions communicate via parameters</td></tr></table><h3>Basic Concepts of OOP</h3><p><b>1. Objects and Classes:</b> Objects are runtime entities. A class is a template for objects. An object is an instance of a class. Example: Mango, Apple, Orange are objects of class Fruit.</p><p><b>2. Data Abstraction and Encapsulation:</b> Encapsulation is the wrapping up of data and methods into a single unit (class). The data is not accessible to the outside world. This protects data from misuse.</p><p><b>3. Inheritance:</b> The process by which objects of one class acquire the properties of objects of another class. It supports hierarchical classification and reusability.</p><p><b>4. Polymorphism:</b> Means many forms. An operation may exhibit different behavior in different instances depending on the data used.</p><p><b>5. Dynamic Binding:</b> The code associated with a procedure call is not known until the time of the call at runtime.</p><p><b>6. Message Communication:</b> Objects communicate with each other by sending and receiving messages.</p>"
  },
  {
    id: 2,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "essay",
    probability: "HIGH",
    sources: "PYQ Q9(b), QB #13,#24,#27,#29,#30,#31,#32",
    question: "Explain Java data types, type casting, and control statements (if, if-else, switch, loops) with suitable examples.",
    keyPoints: [
      "Primitive types: int, float, double, char, boolean, byte, short, long",
      "Reference types: classes, arrays, interfaces",
      "Implicit (widening) and Explicit (narrowing) type casting",
      "if, if-else, if-else-if are decision-making statements",
      "switch is a multi-way branch statement",
      "while, do-while, for are loop statements",
      "break and continue control loop flow"
    ],
    answer: "<h3>Java Data Types</h3><p><b>Primitive Types:</b> byte (8-bit), short (16-bit), int (32-bit), long (64-bit), float (32-bit), double (64-bit), char (16-bit Unicode), boolean (true/false).</p><p><b>Reference Types:</b> Class types, Array types, Interface types.</p><h3>Type Casting</h3><p><b>Implicit (Widening) Casting:</b> Automatic conversion from smaller to larger type.</p><pre>int i = 100;\nlong l = i;      // int to long (automatic)\ndouble d = l;    // long to double (automatic)</pre><p><b>Explicit (Narrowing) Casting:</b> Manual conversion from larger to smaller type.</p><pre>double d = 100.04;\nlong l = (long) d;   // explicit cast\nint i = (int) l;     // explicit cast</pre><h3>Control Statements</h3><p><b>if statement:</b></p><pre>if (condition) {\n    // executed if condition is true\n}</pre><p><b>if-else statement:</b></p><pre>if (condition) {\n    // true block\n} else {\n    // false block\n}</pre><p><b>if-else-if chain:</b></p><pre>if (x > 90) { grade = 'A'; }\nelse if (x > 80) { grade = 'B'; }\nelse { grade = 'C'; }</pre><p><b>switch statement:</b></p><pre>switch (day) {\n    case 1: System.out.println(\"Monday\"); break;\n    case 2: System.out.println(\"Tuesday\"); break;\n    default: System.out.println(\"Invalid\");\n}</pre><p><b>while loop (entry-controlled):</b></p><pre>while (n > 0) {\n    System.out.println(n);\n    n--;\n}</pre><p><b>do-while loop (exit-controlled):</b></p><pre>do {\n    System.out.println(n);\n    n--;\n} while (n > 0);</pre><p><b>for loop:</b></p><pre>for (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}</pre>"
  },
  {
    id: 3,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #16,#17, MP2 Q9(a), Study Material Answers (Q16, Q17)",
    question: "What is an operator? List the various operators supported by Java and explain briefly about arithmetic, relational, logical, assignment, increment/decrement, conditional, bitwise, and special operators.",
    keyPoints: [
      "Operator = symbol that tells computer to perform mathematical/logical operations",
      "8 types: Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Conditional, Bitwise, Special",
      "Unary operators (++ --) need one operand; Binary operators need two",
      "Arithmetic: +, -, *, /, %",
      "Relational: <, <=, >, >=, ==, !=",
      "Logical: && (AND), || (OR), ! (NOT)",
      "Conditional: ? : (ternary)",
      "Bitwise: &, |, ^, ~, <<, >>, >>>",
      "Special: instanceof, dot (.)"
    ],
    answer: "<p>An <b>operator</b> is a symbol that tells the computer to perform certain mathematical or logical manipulations. Operators are classified into <b>Unary</b> (one operand: ++, --) and <b>Binary</b> (two operands: +, -, =).</p><h3>1. Arithmetic Operators</h3><p>Used to perform arithmetic: <code>+ - * / %</code></p><h3>2. Relational Operators</h3><p>Used to compare two quantities: <code>&lt; &lt;= &gt; &gt;= == !=</code></p><h3>3. Logical Operators</h3><p>Used to form compound conditions: <code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</p><p>Example: <code>a &gt; b &amp;&amp; a &lt; c</code></p><h3>4. Assignment Operator</h3><p>Assigns a value: <code>=</code> (also <code>+= -= *= /=</code>)</p><h3>5. Increment and Decrement Operators</h3><p><code>++</code> increments by 1, <code>--</code> decrements by 1. Pre: <code>++a</code> (increment then use). Post: <code>a++</code> (use then increment).</p><h3>6. Conditional Operator (Ternary)</h3><p>Syntax: <code>exp1 ? exp2 : exp3</code></p><p>Example: <code>max = (a &gt; b) ? a : b</code></p><h3>7. Bitwise Operators</h3><p>Used for bit-level manipulation: <code>&amp; | ^ ~ &lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></p><h3>8. Special Operators</h3><p><code>instanceof</code> - tests object type. <code>.</code> (dot) - member access.</p>"
  },
  {
    id: 4,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "essay",
    probability: "HIGH",
    sources: "QB #4,#5,#11, Study Material (portability, JVM topics)",
    question: "What are the features of Java programming language? Explain the terms 'portability', 'platform-neutral', and Java Virtual Machine (JVM).",
    keyPoints: [
      "Java features: Simple, Object-Oriented, Platform-Independent, Secure, Robust, Multithreaded, Architecture-Neutral, Portable, High Performance, Distributed, Dynamic",
      "Portability: Java code runs on any platform without modification (write once, run anywhere)",
      "Platform-neutral: Java bytecode is not tied to any specific hardware/OS",
      "JVM: Converts bytecode to machine code at runtime",
      "JVM provides runtime environment, memory management, garbage collection"
    ],
    answer: "<h3>Features of Java</h3><ul><li><b>Simple:</b> Easy to learn; simplified syntax from C/C++</li><li><b>Object-Oriented:</b> Everything in Java is an object</li><li><b>Platform-Independent:</b> Write Once, Run Anywhere (WORA)</li><li><b>Secure:</b> No explicit pointers, bytecode verification, sandbox model</li><li><b>Robust:</b> Strong memory management, exception handling, garbage collection</li><li><b>Multithreaded:</b> Allows concurrent execution of multiple threads</li><li><b>Architecture-Neutral:</b> Data types have fixed sizes regardless of platform</li><li><b>Portable:</b> Same bytecode runs on any platform with a JVM</li><li><b>High Performance:</b> Just-In-Time (JIT) compiler</li><li><b>Distributed:</b> Supports RMI, networking, URL access</li><li><b>Dynamic:</b> Classes loaded on demand</li></ul><h3>Portability</h3><p>Portability means a Java program can run on any machine without modification. Java source code is compiled into <b>bytecode</b> - a platform-independent representation. Any machine with a JVM can execute this bytecode.</p><h3>Platform-Neutral</h3><p>Java is platform-neutral because bytecode is not tied to any processor/OS, data types have fixed sizes (int is always 32-bit), and JVM abstracts away platform differences.</p><h3>Java Virtual Machine (JVM)</h3><p>JVM is the runtime engine that executes Java bytecode. It loads class files, verifies bytecode, converts to machine code (interpretation + JIT), and manages memory allocation and garbage collection.</p>"
  },
  {
    id: 5,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #1, MP1 Q1, Study Material Answers (SA Q1)",
    question: "What are applications of OOP?",
    keyPoints: [
      "Real-time systems",
      "Simulation and modelling",
      "Object-oriented databases",
      "Hypertext, hypermedia and expertext",
      "AI and expert systems",
      "Neural networks and parallel programming",
      "Decision support and office automation systems",
      "CIM/CAD/CAM systems"
    ],
    answer: "<p>Applications of OOP are gaining importance in many areas. The most popular application has been in <b>user interface design</b> such as windows.</p><p><b>Key application areas of OOP:</b></p><ol><li>Real-time systems</li><li>Simulation and modelling</li><li>Object-oriented databases</li><li>Hypertext, hypermedia and expertext</li><li>AI and expert systems</li><li>Neural networks and parallel programming</li><li>Decision support and office automation systems</li><li>CIM/CAD/CAM systems</li></ol><p>The richness of the OOP environment enables the software industry to improve both the quality of software systems and its productivity.</p>"
  },
  {
    id: 6,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #9, PYQ Q2, Study Material Answers (SA Q9)",
    question: "Describe the scope and lifetime of variables in Java with examples.",
    keyPoints: [
      "Three types: Instance variables, Class variables (static), Local variables",
      "Scope = region where a variable is accessible",
      "Instance variables: declared in class, accessible throughout the class",
      "Class variables: declared with 'static', shared across all instances",
      "Local variables: declared inside methods/blocks, accessible only within that block",
      "Lifetime: instance = object lifetime, class = program lifetime, local = block lifetime"
    ],
    answer: "<p>Variables in Java are classified into three types based on their scope:</p><h3>1. Instance Variables</h3><p>Declared inside a class but outside any method. Accessible throughout the class. Each object has its own copy. Lifetime = object's lifetime.</p><pre>class Student {\n    String name;     // instance variable\n    int rollNo;     // instance variable\n}</pre><h3>2. Class Variables (Static)</h3><p>Declared with <code>static</code>. Shared across all instances. Lifetime = entire program execution.</p><pre>class Student {\n    static int count = 0;   // class variable\n}</pre><h3>3. Local Variables</h3><p>Declared inside a method or block. Accessible only within that block. Lifetime = block duration.</p><pre>void calculate() {\n    int x = 10;     // local variable\n    // x accessible only inside this method\n}</pre><p><b>Scope rules:</b> Java allows variables to be declared within any block. A block defines a scope. Variables declared inside methods are local variables; data defined by the class are instance variables.</p>"
  },
  {
    id: 7,
    unit: 1,
    unitName: "OOPs Concepts and Java Programming",
    type: "short",
    probability: "HIGH",
    sources: "QB SA #4",
    question: "Why is Java known as a platform-neutral language? Explain.",
    keyPoints: [
      "Java bytecode is not tied to any specific hardware or OS",
      "Data types have fixed sizes on all platforms (int = 32-bit always)",
      "JVM acts as abstraction layer between bytecode and hardware",
      "Write Once, Run Anywhere (WORA) principle",
      "No platform-specific features in the language definition"
    ],
    answer: "<p>Java is known as a <b>platform-neutral language</b> because:</p><ol><li><b>Bytecode portability:</b> Java compiles to bytecode (not machine code). This bytecode runs on any machine with a JVM.</li><li><b>Fixed data type sizes:</b> Unlike C/C++ where int can be 16 or 32 bits, Java defines fixed sizes for all primitive types regardless of hardware.</li><li><b>JVM abstraction:</b> The JVM sits between bytecode and OS, abstracting platform differences and translating bytecode to native machine code.</li><li><b>No platform-specific features:</b> No #ifdef directives or platform-specific keywords.</li></ol><p>This is the Write Once, Run Anywhere (WORA) principle.</p>"
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 2: Arrays and OOP Constructs
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #17,#18,#22, PYQ Q10(a)",
    question: "What is inheritance? Describe different forms of inheritance. Explain inheritance hierarchies, method overriding, and dynamic method dispatch with suitable programs.",
    keyPoints: [
      "Inheritance = acquiring properties of one class by another",
      "Keyword 'extends' for class inheritance",
      "Types: Single, Multilevel, Hierarchical (Java doesn't support multiple inheritance)",
      "Method overriding: redefining a parent method in a child class",
      "Dynamic method dispatch: runtime resolution of overridden method calls",
      "Superclass reference can refer to subclass object",
      "Enables runtime polymorphism"
    ],
    answer: "<h3>Inheritance</h3><p>Inheritance is the process by which objects of one class acquire the properties of objects of another class. It supports hierarchical classification and reusability. Keyword: <code>extends</code>.</p><h3>Forms of Inheritance</h3><ol><li><b>Single:</b> One subclass inherits from one superclass</li><li><b>Multilevel:</b> A subclass inherits from a class which itself inherits from another</li><li><b>Hierarchical:</b> Multiple subclasses inherit from one superclass</li><li><b>Multiple:</b> Not supported in Java (use interfaces instead)</li></ol><h3>Method Overriding</h3><p>When a method in a subclass has the same name, parameters, and return type as a method in its superclass.</p><pre>class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\nclass Dog extends Animal {\n    void sound() { System.out.println(\"Bark\"); }  // overriding\n}</pre><h3>Dynamic Method Dispatch</h3><p>A call to an overridden method is resolved at runtime. A superclass reference can refer to a subclass object.</p><pre>Animal a;\na = new Dog();    // a refers to Dog\na.sound();        // Output: Bark\na = new Cat();    // a refers to Cat\na.sound();        // Output: Meow</pre><p>The JVM determines which method to call based on the actual object type at runtime. This is <b>runtime polymorphism</b>.</p>"
  },
  {
    id: 9,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #11,#12,#13, PYQ Q10(b)",
    question: "What is a constructor? Explain constructors and types of constructors with an example. Write a Java program to implement constructors, static members, and the use of the 'this' keyword.",
    keyPoints: [
      "Constructor = special method that initializes objects automatically",
      "Same name as class, no return type",
      "Types: Default (no-arg), Parameterized, Copy constructor",
      "'this' refers to the current object",
      "this() can call another constructor in same class",
      "Static members belong to class, not individual objects",
      "Static members are shared across all instances"
    ],
    answer: "<h3>Constructor</h3><p>A <b>constructor</b> is a special method automatically called when an object is created. It has the same name as the class and no return type.</p><h3>Types</h3><p><b>Default (No-arg):</b></p><pre>Student() {\n    name = \"Unknown\";\n    rollNo = 0;\n}</pre><p><b>Parameterized:</b></p><pre>Student(String n, int r) {\n    name = n;\n    rollNo = r;\n}</pre><h3>Program: Constructors, Static, and this</h3><pre>class Student {\n    String name;\n    int rollNo;\n    static int count = 0;        // static member\n\n    Student() {\n        this(\"Unknown\", 0);     // calls parameterized\n    }\n\n    Student(String name, int rollNo) {\n        this.name = name;        // 'this' = current object\n        this.rollNo = rollNo;\n        count++;                 // increment static counter\n    }\n\n    void display() {\n        System.out.println(\"Name: \" + this.name + \", Roll: \" + this.rollNo);\n    }\n\n    static void showCount() {\n        System.out.println(\"Total: \" + count);\n    }\n\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Alice\", 101);\n        Student s2 = new Student(\"Bob\", 102);\n        Student s3 = new Student();\n        s1.display(); s2.display(); s3.display();\n        Student.showCount();  // Output: Total: 3\n    }\n}</pre><p><b>'this' keyword:</b> Refers to current object. Resolves ambiguity when parameter and instance variable have same name. <code>this()</code> calls another constructor.</p><p><b>Static members:</b> Belong to class, shared across all instances. Accessed via class name: <code>Student.count</code>.</p>"
  },
  {
    id: 10,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #24,#25, MP1 Q10(b), MP2 Q10(b) - appeared in BOTH model papers!",
    question: "What is casting? Explain about various types of casting. How to cast primitive data types? Explain casting of objects that belong to a class.",
    keyPoints: [
      "Casting = converting one data type to another",
      "Primitive casting: Implicit (widening) and Explicit (narrowing)",
      "Widening: byte->short->int->long->float->double (automatic)",
      "Narrowing: double->float->long->int->short->byte (manual)",
      "Object casting: Upcasting (subclass->superclass, automatic) and Downcasting (superclass->subclass, explicit)",
      "Downcasting requires instanceof check"
    ],
    answer: "<h3>Casting</h3><p><b>Casting</b> is converting one data type to another.</p><h3>1. Primitive Casting</h3><p><b>Implicit (Widening):</b> Smaller to larger type, automatic.</p><pre>byte b = 10;\nint i = b;       // automatic\ndouble d = i;    // automatic</pre><p><b>Explicit (Narrowing):</b> Larger to smaller, manual, may lose precision.</p><pre>double d = 100.04;\nint i = (int) d;   // explicit cast</pre><p>Widening hierarchy: byte -> short -> int -> long -> float -> double</p><h3>2. Object (Reference) Casting</h3><p><b>Upcasting:</b> Subclass to superclass. Automatic, always safe.</p><pre>Animal a = new Dog();    // upcasting (automatic)</pre><p><b>Downcasting:</b> Superclass to subclass. Requires explicit cast.</p><pre>Animal a = new Dog();\nDog d = (Dog) a;        // downcast (explicit)</pre><p><b>Safe downcasting with instanceof:</b></p><pre>if (a instanceof Dog) {\n    Dog d = (Dog) a;\n    d.bark();\n}</pre><p>Key: Widening is safe/automatic; narrowing may lose data. Upcasting is always safe; downcasting requires care and instanceof check.</p>"
  },
  {
    id: 11,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "essay",
    probability: "HIGH",
    sources: "QB #1,#2, PYQ Q3, MP1 Q10(a)",
    question: "What is an array? How to create an array in Java? Explain different types of arrays with examples. What is a string and how to use it?",
    keyPoints: [
      "Array = collection of similar data types stored contiguously",
      "Single-dimensional and multi-dimensional arrays",
      "Declaration: type[] name = new type[size]",
      "String = sequence of characters, immutable in Java",
      "String methods: length(), charAt(), equals(), compareTo(), concat()",
      "Arrays can be passed to and returned from methods"
    ],
    answer: "<h3>Arrays</h3><p>An <b>array</b> is a collection of similar data types in contiguous memory locations.</p><h3>Creating an Array</h3><pre>int[] arr = new int[5];       // creates array of 5 ints\nint[] nums = {10, 20, 30, 40, 50};  // inline initialization\nString[] names = {\"Alice\", \"Bob\"};  // array of objects</pre><h3>Types of Arrays</h3><p><b>1. Single-Dimensional:</b></p><pre>int[] a = new int[5];\nfor (int i = 0; i < a.length; i++) { a[i] = i * 10; }</pre><p><b>2. Multi-Dimensional (2D):</b></p><pre>int[][] matrix = new int[3][3];\nint[][] m = {{1,2,3}, {4,5,6}, {7,8,9}};</pre><h3>Passing Arrays to Methods</h3><pre>void printArray(int[] arr) {\n    for (int i = 0; i < arr.length; i++)\n        System.out.println(arr[i]);\n}</pre><h3>Strings in Java</h3><p>A <b>String</b> is a sequence of characters. Strings are <b>immutable</b>.</p><pre>String s1 = \"Hello\";\nString s2 = new String(\"World\");\nint len = s1.length();           // 5\nchar c = s1.charAt(0);           // 'H'\nString joined = s1 + \" \" + s2;   // Hello World\nboolean eq = s1.equals(s2);      // false</pre><p>Key methods: <code>length(), charAt(), equals(), compareTo(), concat(), substring(), toUpperCase(), toLowerCase(), trim(), replace()</code>.</p>"
  },
  {
    id: 12,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #18, MP2 Q1",
    question: "What is polymorphism? Explain.",
    keyPoints: [
      "Polymorphism = ability to take more than one form",
      "Compile-time (static) polymorphism: Method Overloading",
      "Runtime (dynamic) polymorphism: Method Overriding",
      "Same operation, different behavior based on data/object",
      "Enables flexibility and extensibility in code"
    ],
    answer: "<p><b>Polymorphism</b> means many forms. It is the ability of an operation to exhibit different behavior in different instances.</p><h3>Types</h3><p><b>1. Compile-Time (Static):</b> Method overloading. Multiple methods same name, different parameters. Compiler decides.</p><pre>class Calculator {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}</pre><p><b>2. Runtime (Dynamic):</b> Method overriding. Subclass redefines parent method. JVM decides at runtime.</p><pre>class Shape { void draw() { ... } }\nclass Circle extends Shape { void draw() { ... } }\nShape s = new Circle();\ns.draw();  // Circle's draw() called</pre>"
  },
  {
    id: 13,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "short",
    probability: "HIGH",
    sources: "QB SA #2, MP1 Q3",
    question: "How to pass arrays to methods? Explain.",
    keyPoints: [
      "Arrays are passed by reference (the reference is copied)",
      "Changes made inside the method affect the original array",
      "Syntax: void method(int[] arr) { ... }",
      "Can also return arrays from methods"
    ],
    answer: "<p>Arrays are <b>passed by reference</b> to methods. The method receives a copy of the reference, so changes inside the method affect the original array.</p><pre>class ArrayDemo {\n    static void printArray(int[] arr) {\n        for (int i = 0; i < arr.length; i++)\n            System.out.println(\"Element \" + i + \": \" + arr[i]);\n    }\n\n    static void doubleValues(int[] arr) {\n        for (int i = 0; i < arr.length; i++)\n            arr[i] = arr[i] * 2;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {10, 20, 30, 40, 50};\n        printArray(nums);\n        doubleValues(nums);    // modifies original\n        printArray(nums);      // now 20, 40, 60, 80, 100\n    }\n}</pre><p>Key: Since arrays are objects, passing them passes the reference. To pass a copy, use <code>Arrays.copyOf()</code>.</p>"
  },
  {
    id: 14,
    unit: 2,
    unitName: "Arrays and OOP Constructs",
    type: "short",
    probability: "HIGH",
    sources: "QB SA #20, MP2 Q4",
    question: "What is casting of reference data type? Explain.",
    keyPoints: [
      "Converting one object reference type to another within inheritance hierarchy",
      "Upcasting: subclass to superclass (automatic, safe)",
      "Downcasting: superclass to subclass (explicit cast required)",
      "Use instanceof to check before downcasting",
      "ClassCastException thrown if invalid cast"
    ],
    answer: "<p><b>Casting of reference data types</b> converts an object reference of one type to another within the same inheritance hierarchy.</p><h3>Upcasting (Subclass to Superclass)</h3><p>Automatic, always safe.</p><pre>Animal a = new Dog();    // upcasting - automatic</pre><h3>Downcasting (Superclass to Subclass)</h3><p>Requires explicit cast.</p><pre>Animal a = new Dog();\nDog d = (Dog) a;         // downcasting - explicit</pre><h3>Safe Downcasting</h3><pre>if (a instanceof Dog) {\n    Dog d = (Dog) a;\n    d.bark();\n}</pre><p>Invalid casts throw <b>ClassCastException</b> at runtime. Always use <code>instanceof</code> before downcasting.</p>"
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 3: Interfaces, Packages & Exception Handling
  // ─────────────────────────────────────────────────────────────
  {
    id: 15,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #1, PYQ Q5",
    question: "Explain interface vs abstract class in Java. Explain the need of interfaces in Java and how they are different from abstract classes.",
    keyPoints: [
      "Interface = pure abstraction (all methods abstract by default)",
      "Abstract class = partial abstraction (can have concrete methods)",
      "Interface supports multiple inheritance; abstract class does not",
      "Interface: all variables are public static final by default",
      "A class can implement multiple interfaces but extend only one abstract class",
      "Keyword: interface/implements vs abstract/extends"
    ],
    answer: "<h3>Interface vs Abstract Class</h3><table><tr><th>Feature</th><th>Interface</th><th>Abstract Class</th></tr><tr><td>Methods</td><td>All abstract by default</td><td>Can have both abstract and concrete</td></tr><tr><td>Variables</td><td>public static final only</td><td>Any access modifier</td></tr><tr><td>Multiple Inheritance</td><td>Yes (implement multiple)</td><td>No (extend one only)</td></tr><tr><td>Constructors</td><td>No</td><td>Yes</td></tr><tr><td>Keyword</td><td>interface / implements</td><td>abstract / extends</td></tr></table><h3>Need of Interfaces</h3><ul><li>Java doesn't support multiple inheritance with classes - interfaces provide it</li><li>Define a contract that classes must follow</li><li>Enable loose coupling</li><li>Support polymorphism through interface references</li></ul><h3>Example</h3><pre>interface Drawable { void draw(); }\n\nabstract class Shape {\n    String color;\n    abstract void area();\n    void setColor(String c) { color = c; }\n}\n\nclass Circle extends Shape implements Drawable {\n    double radius;\n    void area() { System.out.println(Math.PI * radius * radius); }\n    void draw() { System.out.println(\"Drawing circle\"); }\n}</pre>"
  },
  {
    id: 16,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #4,#6, PYQ Q11(a)",
    question: "Explain the steps involved in creating and using a package in Java. Give a program for user-defined package creation.",
    keyPoints: [
      "Package = namespace that organizes related classes and interfaces",
      "Steps: declare package, compile, set classpath, import",
      "Keyword 'package' at top of file",
      "Compile with: javac -d . FileName.java",
      "Import with: import packagename.*",
      "Run with: java packagename.ClassName"
    ],
    answer: "<h3>Packages in Java</h3><p>A <b>package</b> is a namespace that organizes related classes and interfaces. It provides encapsulation and prevents naming conflicts.</p><h3>Steps to Create</h3><ol><li>Declare package at top: <code>package mypack;</code></li><li>Define the class</li><li>Compile: <code>javac -d . FileName.java</code></li><li>Use in another program: <code>import mypack.ClassName;</code></li></ol><h3>Program</h3><pre>// File: MathUtils.java\npackage mypack;\npublic class MathUtils {\n    public int add(int a, int b) { return a + b; }\n    public int subtract(int a, int b) { return a - b; }\n    public int multiply(int a, int b) { return a * b; }\n}</pre><pre>// File: TestPackage.java\nimport mypack.MathUtils;\npublic class TestPackage {\n    public static void main(String[] args) {\n        MathUtils mu = new MathUtils();\n        System.out.println(\"Add: \" + mu.add(10, 20));\n        System.out.println(\"Subtract: \" + mu.subtract(30, 15));\n        System.out.println(\"Multiply: \" + mu.multiply(5, 6));\n    }\n}</pre><h3>Compile and Run</h3><pre>javac -d . MathUtils.java\njavac TestPackage.java\njava TestPackage</pre><h3>Importing</h3><ul><li><code>import mypack.MathUtils;</code> - single class</li><li><code>import mypack.*;</code> - all classes</li></ul>"
  },
  {
    id: 17,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #11,#14,#15, PYQ Q11(b)",
    question: "Discuss exception hierarchy and explain try-catch-finally, throw and throws with examples.",
    keyPoints: [
      "Exception = abnormal event that disrupts program flow",
      "Hierarchy: Throwable -> Error / Exception -> RuntimeException",
      "Checked exceptions (IOException) vs Unchecked (RuntimeException)",
      "try-catch-finally block for exception handling",
      "throw = explicitly throw an exception",
      "throws = declare that a method may throw exceptions"
    ],
    answer: "<h3>Exception Hierarchy</h3><pre>Throwable\n  +-- Error (JVM errors: OutOfMemoryError)\n  +-- Exception\n       +-- IOException (checked)\n       +-- RuntimeException (unchecked)\n            +-- ArithmeticException\n            +-- NullPointerException\n            +-- ArrayIndexOutOfBoundsException</pre><h3>try-catch-finally</h3><pre>try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero\");\n} finally {\n    System.out.println(\"Always executes\");\n}</pre><h3>throw Keyword</h3><p>Explicitly throw an exception.</p><pre>void checkAge(int age) {\n    if (age < 18)\n        throw new ArithmeticException(\"Not eligible\");\n}</pre><h3>throws Keyword</h3><p>Declare that a method may throw exceptions.</p><pre>void readFile() throws IOException {\n    FileInputStream fis = new FileInputStream(\"data.txt\");\n    fis.read();\n    fis.close();\n}</pre><h3>Custom Exceptions</h3><pre>class MyException extends Exception {\n    public MyException(String msg) { super(msg); }\n}</pre><p>Key: Checked exceptions checked at compile time (must handle/declare). Unchecked at runtime. finally always executes. throw throws; throws declares.</p>"
  },
  {
    id: 18,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "essay",
    probability: "HIGH",
    sources: "QB #12,#13,#15, MP1 Q11(b)",
    question: "What are the various types of exceptions in Java? List some of the most common types of exceptions. Explain about rethrowing exceptions.",
    keyPoints: [
      "Two categories: Checked (compile-time) and Unchecked (runtime)",
      "Common checked: IOException, SQLException, ClassNotFoundException",
      "Common unchecked: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException",
      "Rethrowing = catching an exception and throwing it again",
      "Rethrowing allows partial handling + propagation"
    ],
    answer: "<h3>Types of Exceptions</h3><p><b>1. Checked Exceptions (Compile-time):</b></p><ul><li>IOException - I/O failures</li><li>SQLException - database errors</li><li>ClassNotFoundException - class not found</li><li>FileNotFoundException - file missing</li><li>InterruptedException - thread interrupted</li></ul><p><b>2. Unchecked Exceptions (Runtime):</b></p><ul><li>ArithmeticException - division by zero</li><li>NullPointerException - null reference access</li><li>ArrayIndexOutOfBoundsException - invalid array index</li><li>ClassCastException - invalid cast</li><li>NumberFormatException - invalid number format</li></ul><p><b>3. Errors:</b> OutOfMemoryError, StackOverflowError</p><h3>Rethrowing Exceptions</h3><p>Catching an exception, optionally performing some action (logging), and throwing it again.</p><pre>void processData() throws Exception {\n    try {\n        int data = readData();\n    } catch (Exception e) {\n        System.out.println(\"Logging: \" + e.getMessage());\n        throw e;        // rethrow\n    }\n}</pre><p>Uses: logging, cleanup, wrapping exceptions, adding context before propagating.</p>"
  },
  {
    id: 19,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #1, MP2 Q5",
    question: "Explain about the types and advantages of packages.",
    keyPoints: [
      "Types: Built-in packages (java.lang, java.util, java.io) and User-defined packages",
      "Advantage: Prevents naming conflicts",
      "Advantage: Provides access protection",
      "Advantage: Organizes related classes",
      "Advantage: Makes searching easier"
    ],
    answer: "<h3>Types of Packages</h3><ol><li><b>Built-in:</b> java.lang, java.util, java.io, java.net, java.awt, javax.swing</li><li><b>User-Defined:</b> Created with <code>package</code> keyword</li></ol><h3>Advantages</h3><ol><li><b>Prevents naming conflicts:</b> Same class name in different packages</li><li><b>Access protection:</b> Package-level access control</li><li><b>Organizes code:</b> Related classes grouped together</li><li><b>Easier searching:</b> Easier to locate classes</li><li><b>Reusability:</b> Packages imported and reused</li></ol>"
  },
  {
    id: 20,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "short",
    probability: "HIGH",
    sources: "QB SA #3, MP1 Q5",
    question: "Explain the differences between abstract class and a package.",
    keyPoints: [
      "Abstract class = a class that cannot be instantiated",
      "Package = a namespace for organizing classes",
      "Abstract class is about inheritance and partial implementation",
      "Package is about organization and access control",
      "They serve completely different purposes"
    ],
    answer: "<table><tr><th>Abstract Class</th><th>Package</th></tr><tr><td>Cannot be instantiated, may have abstract methods</td><td>Namespace organizing related classes</td></tr><tr><td>Used for inheritance/partial implementation</td><td>Used for organization/access control</td></tr><tr><td>Keyword: abstract</td><td>Keyword: package</td></tr><tr><td>Extended using extends</td><td>Imported using import</td></tr><tr><td>Contains methods</td><td>Contains classes and interfaces</td></tr><tr><td>Provides base for subclasses</td><td>Prevents naming conflicts</td></tr></table><p>An abstract class is a language feature for partial abstraction through inheritance. A package is a mechanism for organizing classes into namespaces.</p>"
  },
  {
    id: 21,
    unit: 3,
    unitName: "Interfaces, Packages & Exception Handling",
    type: "short",
    probability: "MEDIUM-HIGH",
    sources: "QB SA #2",
    question: "Explain the differences between a package and an interface.",
    keyPoints: [
      "Package = namespace for organizing classes",
      "Interface = pure abstract type with method signatures only",
      "Package groups classes; interface defines a contract",
      "A class implements an interface; it is placed inside a package"
    ],
    answer: "<table><tr><th>Package</th><th>Interface</th></tr><tr><td>Namespace grouping related classes</td><td>Pure abstract type defining method signatures</td></tr><tr><td>Used for organization/access protection</td><td>Used for abstraction/multiple inheritance</td></tr><tr><td>Keyword: package</td><td>Keyword: interface</td></tr><tr><td>Classes placed in packages</td><td>Classes implement interfaces</td></tr><tr><td>Imported with import</td><td>Implemented with implements</td></tr><tr><td>Prevents naming conflicts</td><td>Defines a contract for classes</td></tr></table><p>A package is about organization; an interface is about abstraction. A class can be in a package and implement an interface simultaneously.</p>"
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 4: Multithreading & Stream-based I/O
  // ─────────────────────────────────────────────────────────────
  {
    id: 22,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #1,#7, PYQ Q12(a), MP2 Q12(a)",
    question: "What is a thread? How to create a thread? Explain multithreading in Java. Write a program to create two threads and demonstrate thread priorities.",
    keyPoints: [
      "Thread = smallest unit of execution within a program",
      "Two ways: extend Thread class or implement Runnable interface",
      "Thread life cycle: New -> Runnable -> Running -> Blocked -> Terminated",
      "Thread priorities: MIN_PRIORITY(1), NORM_PRIORITY(5), MAX_PRIORITY(10)",
      "start() begins execution, run() contains thread code"
    ],
    answer: "<h3>Thread</h3><p>A <b>thread</b> is the smallest unit of execution. Java supports multithreading.</p><h3>Creating Threads</h3><p><b>Method 1: Extending Thread</b></p><pre>class MyThread extends Thread {\n    public void run() {\n        for (int i = 1; i &lt;= 5; i++) {\n            System.out.println(getName() + \": \" + i);\n            try { Thread.sleep(500); } catch (Exception e) {}\n        }\n    }\n}\n\nMyThread t1 = new MyThread();\nMyThread t2 = new MyThread();\nt1.setPriority(Thread.MIN_PRIORITY);\nt2.setPriority(Thread.MAX_PRIORITY);\nt1.start(); t2.start();</pre><p><b>Method 2: Implementing Runnable</b></p><pre>class MyTask implements Runnable {\n    public void run() {\n        for (int i = 1; i &lt;= 5; i++)\n            System.out.println(Thread.currentThread().getName() + \": \" + i);\n    }\n}\n\nThread t1 = new Thread(new MyTask(), \"Thread-A\");\nThread t2 = new Thread(new MyTask(), \"Thread-B\");\nt1.start(); t2.start();</pre><h3>Thread Priorities</h3><ul><li>MIN_PRIORITY = 1 (lowest)</li><li>NORM_PRIORITY = 5 (default)</li><li>MAX_PRIORITY = 10 (highest)</li><li>Set: <code>setPriority(int)</code>, Get: <code>getPriority()</code></li></ul><h3>Key Thread Methods</h3><p><code>start()</code>, <code>run()</code>, <code>sleep(ms)</code>, <code>join()</code>, <code>yield()</code>, <code>getName()</code>, <code>setName()</code>, <code>isAlive()</code></p>"
  },
  {
    id: 23,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #2,#5, PYQ Q6",
    question: "Explain the life cycle of a thread with a neat diagram. Describe the thread class methods.",
    keyPoints: [
      "5 states: New, Runnable, Running, Blocked/Waiting, Terminated",
      "New: Thread object created but not started",
      "Runnable: start() called, waiting for CPU",
      "Running: CPU assigned, executing run()",
      "Blocked: waiting for resource (sleep, wait, I/O)",
      "Terminated: run() completed",
      "Thread methods: start(), run(), sleep(), join(), yield(), etc."
    ],
    answer: "<h3>Thread Life Cycle</h3><pre>  [New] -- start() --&gt; [Runnable] -- scheduler --&gt; [Running]\n                               ^                          |\n                               |                    sleep()/wait()/I/O\n                               |                          v\n                               +--------- [Blocked] ------+\n                                                          |\n                                                    run() completes\n                                                          v\n                                                    [Terminated]</pre><h3>States Explained</h3><ol><li><b>New:</b> Thread object created, start() not called</li><li><b>Runnable:</b> start() called, ready to run, waiting for CPU</li><li><b>Running:</b> CPU assigned, run() executing</li><li><b>Blocked/Waiting:</b> Alive but not eligible to run (sleep, wait, I/O, lock)</li><li><b>Terminated:</b> run() completed, cannot restart</li></ol><h3>Thread Class Methods</h3><table><tr><th>Method</th><th>Description</th></tr><tr><td>start()</td><td>Starts thread, calls run()</td></tr><tr><td>run()</td><td>Contains thread code</td></tr><tr><td>sleep(long ms)</td><td>Pauses thread for milliseconds</td></tr><tr><td>join()</td><td>Waits for thread to die</td></tr><tr><td>yield()</td><td>Pauses to allow other threads</td></tr><tr><td>getPriority() / setPriority(int)</td><td>Get/set priority (1-10)</td></tr><tr><td>getName() / setName(String)</td><td>Get/set thread name</td></tr><tr><td>isAlive()</td><td>Checks if thread is running</td></tr><tr><td>currentThread()</td><td>Returns current thread (static)</td></tr><tr><td>interrupt()</td><td>Interrupts the thread</td></tr></table>"
  },
  {
    id: 24,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "essay",
    probability: "HIGH",
    sources: "QB #4,#6, MP1 Q12(a)",
    question: "Explain the problem of multiple threads working on a single object. What do you mean by synchronization and deadlock of threads?",
    keyPoints: [
      "Race condition: multiple threads access shared resource simultaneously",
      "Data inconsistency: simultaneous read/write causes wrong results",
      "Synchronization: only one thread can access synchronized method/block at a time",
      "Keyword: synchronized",
      "Deadlock: two or more threads wait forever for each other's locks",
      "Deadlock prevention: lock ordering, timeout, avoid nested locks"
    ],
    answer: "<h3>Problem: Multiple Threads on Single Object</h3><p>When multiple threads access and modify the same shared object, it leads to <b>race conditions</b> and <b>data inconsistency</b>.</p><pre>class Counter {\n    int count = 0;\n    void increment() { count++; }  // not atomic!\n}\n// Two threads calling increment() simultaneously:\n// Both read count=0, both write count=1 (should be 2!)</pre><h3>Synchronization</h3><p>Ensures only one thread accesses a shared resource at a time.</p><pre>class Counter {\n    int count = 0;\n    synchronized void increment() { count++; }\n}</pre><h3>Deadlock</h3><p>Two or more threads wait forever for each other's locks.</p><pre>Thread 1: holds Lock A, waits for Lock B\nThread 2: holds Lock B, waits for Lock A\n-&gt; Both wait forever</pre><h3>Deadlock Prevention</h3><ul><li>Avoid nested locks</li><li>Lock ordering (always acquire in same order)</li><li>Use tryLock() with timeout</li><li>Avoid waiting indefinitely</li></ul>"
  },
  {
    id: 25,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #10,#12,#13,#14,#15, PYQ Q12(b), MP1 Q12(b), MP2 Q12(b), PYQ Q7",
    question: "Explain File handling in Java. Write a Java program to read and write text files using FileInputStream and FileOutputStream. Explain Byte Streams and Character Streams.",
    keyPoints: [
      "FileInputStream reads bytes from file; FileOutputStream writes bytes",
      "Byte streams: InputStream/OutputStream (raw bytes)",
      "Character streams: Reader/Writer (characters, Unicode)",
      "FileInputStream methods: read(), available(), close()",
      "FileOutputStream methods: write(), close()",
      "Always close streams (or use try-with-resources)"
    ],
    answer: "<h3>File Handling in Java</h3><p>Java provides <code>java.io</code> package for file handling.</p><h3>Byte Streams vs Character Streams</h3><table><tr><th>Byte Streams</th><th>Character Streams</th></tr><tr><td>Read/write raw bytes (8-bit)</td><td>Read/write characters (16-bit Unicode)</td></tr><tr><td>InputStream / OutputStream</td><td>Reader / Writer</td></tr><tr><td>FileInputStream / FileOutputStream</td><td>FileReader / FileWriter</td></tr><tr><td>Best for binary data</td><td>Best for text data</td></tr></table><h3>Program: Read and Write Files</h3><pre>import java.io.*;\npublic class FileDemo {\n    public static void main(String[] args) {\n        // Write using FileOutputStream\n        try {\n            FileOutputStream fos = new FileOutputStream(\"output.txt\");\n            String text = \"Hello, Java File Handling!\";\n            fos.write(text.getBytes());\n            fos.close();\n            System.out.println(\"File written\");\n        } catch (IOException e) {\n            System.out.println(\"Write error: \" + e);\n        }\n\n        // Read using FileInputStream\n        try {\n            FileInputStream fis = new FileInputStream(\"output.txt\");\n            int data;\n            while ((data = fis.read()) != -1)\n                System.out.print((char) data);\n            fis.close();\n        } catch (IOException e) {\n            System.out.println(\"Read error: \" + e);\n        }\n    }\n}</pre><h3>FileInputStream Methods</h3><p><code>read()</code> - reads one byte, returns -1 at EOF. <code>read(byte[])</code> - reads into array. <code>available()</code> - bytes available. <code>close()</code> - closes stream.</p><h3>FileOutputStream Methods</h3><p><code>write(int)</code> - writes one byte. <code>write(byte[])</code> - writes array. <code>close()</code>. Append mode: <code>new FileOutputStream(\"file.txt\", true)</code>.</p>"
  },
  {
    id: 26,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #4, MP1 Q6",
    question: "What is the main thread? Explain.",
    keyPoints: [
      "Main thread = thread that starts when Java program begins",
      "Automatically created by JVM",
      "Named 'main', priority NORM_PRIORITY (5)",
      "All other threads are child threads",
      "Can be controlled via Thread.currentThread()"
    ],
    answer: "<p>The <b>main thread</b> is automatically created by the JVM when a Java program starts. It is the parent of all other threads.</p><h3>Key Points</h3><ul><li>Created automatically</li><li>First to start, typically last to finish</li><li>Name: \"main\", Priority: 5 (NORM_PRIORITY)</li><li>Executes the main() method</li><li>All user-created threads are child threads of main</li></ul><h3>Accessing Main Thread</h3><pre>Thread mainThread = Thread.currentThread();\nSystem.out.println(mainThread.getName());   // main\nSystem.out.println(mainThread.getPriority()); // 5\nmainThread.setName(\"MyMainThread\");\nmainThread.setPriority(Thread.MAX_PRIORITY);</pre>"
  },
  {
    id: 27,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #11, MP1 Q7",
    question: "What is Java File Input Stream class? Explain giving an example.",
    keyPoints: [
      "FileInputStream reads byte-by-byte from a file",
      "Part of java.io package",
      "Constructor: FileInputStream(String) or FileInputStream(File)",
      "Key methods: read(), available(), close()",
      "Throws FileNotFoundException"
    ],
    answer: "<p><b>FileInputStream</b> reads data from a file byte by byte. Part of <code>java.io</code>.</p><h3>Constructors</h3><ul><li><code>FileInputStream(String filename)</code></li><li><code>FileInputStream(File f)</code></li></ul><h3>Methods</h3><ul><li><code>read()</code> - reads one byte, returns -1 at EOF</li><li><code>read(byte[] b)</code> - reads into array</li><li><code>available()</code> - bytes available to read</li><li><code>close()</code> - closes the stream</li></ul><h3>Example</h3><pre>FileInputStream fis = new FileInputStream(\"sample.txt\");\nint data;\nwhile ((data = fis.read()) != -1) {\n    System.out.print((char) data);\n}\nfis.close();</pre><p>Note: <code>read()</code> returns int (0-255) or -1 at EOF. Cast to char for text. Always close the stream.</p>"
  },
  {
    id: 28,
    unit: 4,
    unitName: "Multithreading & Stream-based I/O",
    type: "short",
    probability: "HIGH",
    sources: "QB SA #8, MP2 Q6",
    question: "What is an Input Stream class? Explain some common methods of this class.",
    keyPoints: [
      "InputStream = abstract superclass for all byte input streams",
      "Hierarchy: InputStream -> FileInputStream, ByteArrayInputStream, etc.",
      "Methods: read(), read(byte[]), available(), close(), skip(long), mark(), reset()",
      "Reads raw bytes (8-bit data)"
    ],
    answer: "<p><b>InputStream</b> is the abstract superclass of all byte input streams. It defines basic functionality for reading bytes.</p><h3>Hierarchy</h3><pre>InputStream (abstract)\n  +-- FileInputStream\n  +-- ByteArrayInputStream\n  +-- FilterInputStream\n       +-- BufferedInputStream\n       +-- DataInputStream\n  +-- ObjectInputStream</pre><h3>Common Methods</h3><table><tr><th>Method</th><th>Description</th></tr><tr><td>read()</td><td>Reads one byte, returns 0-255 or -1 at EOF</td></tr><tr><td>read(byte[] b)</td><td>Reads into array, returns count</td></tr><tr><td>available()</td><td>Bytes available to read</td></tr><tr><td>skip(long n)</td><td>Skips n bytes</td></tr><tr><td>close()</td><td>Closes the stream</td></tr><tr><td>mark(int)</td><td>Marks position</td></tr><tr><td>reset()</td><td>Repositions to mark</td></tr></table>"
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 5: GUI Programming with Swing
  // ─────────────────────────────────────────────────────────────
  {
    id: 29,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #1, PYQ Q13(a), MP1 Q13(a)",
    question: "What is Java Swing and what is Java AWT? Compare these two. Explain Swing components and event handling mechanism. Write a program using any two Swing components with event handling.",
    keyPoints: [
      "AWT = Abstract Window Toolkit (heavyweight, platform-dependent)",
      "Swing = lightweight, pure Java, platform-independent GUI",
      "Swing components: JButton, JTextField, JLabel, JCheckBox, etc.",
      "Event handling: event source -> listener -> handler method",
      "Delegation Event Model: source generates event, listener handles it"
    ],
    answer: "<h3>Java Swing vs Java AWT</h3><table><tr><th>Feature</th><th>AWT</th><th>Swing</th></tr><tr><td>Components</td><td>Heavyweight (native OS)</td><td>Lightweight (pure Java)</td></tr><tr><td>Platform dependency</td><td>Platform-dependent</td><td>Platform-independent</td></tr><tr><td>Package</td><td>java.awt</td><td>javax.swing</td></tr><tr><td>Look and feel</td><td>Native OS look</td><td>Pluggable look and feel</td></tr><tr><td>MVC</td><td>No</td><td>Yes</td></tr></table><h3>Swing Components</h3><p>JFrame, JButton, JLabel, JTextField, JTextArea, JCheckBox, JRadioButton, JComboBox, JList, JMenuBar, JPanel.</p><h3>Event Handling (Delegation Event Model)</h3><ol><li><b>Event Source:</b> Component that generates events (e.g., JButton)</li><li><b>Event Listener:</b> Object that receives and handles events</li><li><b>Event Object:</b> Contains event information</li></ol><h3>Program: Two Swing Components with Event Handling</h3><pre>import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class SwingDemo {\n    public SwingDemo() {\n        JFrame frame = new JFrame(\"Swing Demo\");\n        frame.setSize(350, 200);\n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        frame.setLayout(new FlowLayout());\n\n        JLabel label = new JLabel(\"Click the button!\");\n        frame.add(label);\n\n        JButton button = new JButton(\"Click Me\");\n        frame.add(button);\n\n        button.addActionListener(new ActionListener() {\n            int count = 0;\n            public void actionPerformed(ActionEvent e) {\n                count++;\n                label.setText(\"Clicked \" + count + \" time(s)!\");\n            }\n        });\n\n        frame.setVisible(true);\n    }\n\n    public static void main(String[] args) {\n        SwingUtilities.invokeLater(() -&gt; new SwingDemo());\n    }\n}</pre><h3>Common Event Listeners</h3><p>ActionListener (button clicks), MouseListener (mouse), KeyListener (keyboard), WindowListener (window), ItemListener (checkbox/radio).</p>"
  },
  {
    id: 30,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "essay",
    probability: "HIGH",
    sources: "QB #8,#9, MP1 Q13(b)",
    question: "What is event handling? What is the delegation event model in Java? What are the various types of events?",
    keyPoints: [
      "Event handling = responding to user actions (clicks, key presses)",
      "Delegation Event Model: event source -> event object -> event listener",
      "Three components: Source, Listener, Event Object",
      "Event types: ActionEvent, MouseEvent, KeyEvent, WindowEvent, ItemEvent, FocusEvent",
      "Listeners are interfaces with handler methods"
    ],
    answer: "<h3>Event Handling</h3><p><b>Event handling</b> is the mechanism that responds to events (button clicks, mouse movements, key presses). Java uses the <b>Delegation Event Model</b>.</p><h3>Delegation Event Model</h3><ol><li><b>Event Source:</b> GUI component that generates events. Registers listeners with <code>addXXXListener()</code></li><li><b>Event Object:</b> Contains info about the event. Extends <code>java.util.EventObject</code></li><li><b>Event Listener:</b> Implements listener interface, contains handler methods</li></ol><pre>// Source creates event, calls listener's handler\nJButton button = new JButton(\"Click\");\nbutton.addActionListener(new ActionListener() {\n    public void actionPerformed(ActionEvent e) {\n        System.out.println(\"Clicked!\");\n    }\n});</pre><h3>Types of Events</h3><table><tr><th>Event</th><th>Description</th><th>Listener</th></tr><tr><td>ActionEvent</td><td>Button click, menu</td><td>ActionListener</td></tr><tr><td>MouseEvent</td><td>Mouse press, move</td><td>MouseListener</td></tr><tr><td>KeyEvent</td><td>Key press, release</td><td>KeyListener</td></tr><tr><td>WindowEvent</td><td>Window open, close</td><td>WindowListener</td></tr><tr><td>ItemEvent</td><td>Checkbox toggle</td><td>ItemListener</td></tr><tr><td>FocusEvent</td><td>Focus gain/loss</td><td>FocusListener</td></tr></table><h3>Steps</h3><ol><li>Implement listener interface</li><li>Register with component: <code>addXXXListener()</code></li><li>Override handler method(s)</li><li>Write response code</li></ol>"
  },
  {
    id: 31,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "essay",
    probability: "VERY HIGH",
    sources: "QB #3,#4,#5,#6,#7, PYQ Q13(b), MP1 Q8",
    question: "Explain different layout managers: FlowLayout, BorderLayout, GridLayout, GridBagLayout, and CardLayout with diagrams/programming examples.",
    keyPoints: [
      "FlowLayout: left-to-right, top-to-bottom (default for JPanel)",
      "BorderLayout: 5 regions (North, South, East, West, Center)",
      "GridLayout: grid of equal-sized cells",
      "GridBagLayout: flexible grid with varying cell sizes",
      "CardLayout: stack of cards, one visible at a time"
    ],
    answer: "<h3>1. FlowLayout</h3><p>Left-to-right, wraps to next line. Default for JPanel.</p><pre>  [Btn1] [Btn2] [Btn3]\n  [Btn4] [Btn5]</pre><pre>frame.setLayout(new FlowLayout());\nframe.add(new JButton(\"Btn1\"));\nframe.add(new JButton(\"Btn2\"));</pre><h3>2. BorderLayout</h3><p>5 regions: North, South, East, West, Center. Default for JFrame.</p><pre>  [        North        ]\n  [West] [Center] [East]\n  [        South        ]</pre><pre>frame.add(new JButton(\"N\"), BorderLayout.NORTH);\nframe.add(new JButton(\"S\"), BorderLayout.SOUTH);\nframe.add(new JButton(\"C\"), BorderLayout.CENTER);</pre><h3>3. GridLayout</h3><p>Grid of equal-sized cells.</p><pre>  [B1] [B2] [B3]\n  [B4] [B5] [B6]</pre><pre>frame.setLayout(new GridLayout(2, 3));\nframe.add(new JButton(\"B1\")); ...</pre><h3>4. GridBagLayout</h3><p>Flexible grid. Components can span multiple rows/columns.</p><pre>GridBagConstraints gbc = new GridBagConstraints();\ngbc.fill = GridBagConstraints.HORIZONTAL;\ngbc.gridx = 0; gbc.gridy = 0;\ngbc.gridwidth = 1; gbc.gridheight = 2;\nframe.add(new JButton(\"B1\"), gbc);</pre><h3>5. CardLayout</h3><p>Stack of cards, one visible at a time.</p><pre>CardLayout card = new CardLayout();\npanel.setLayout(card);\npanel.add(card1, \"c1\");\npanel.add(card2, \"c2\");\ncard.show(panel, \"c2\");  // show card 2</pre><h3>Comparison</h3><table><tr><th>Layout</th><th>Arrangement</th><th>Cell Size</th><th>Use Case</th></tr><tr><td>FlowLayout</td><td>Left-to-right, wraps</td><td>Natural</td><td>Button rows</td></tr><tr><td>BorderLayout</td><td>5 regions</td><td>Variable</td><td>Main windows</td></tr><tr><td>GridLayout</td><td>Uniform grid</td><td>Equal</td><td>Calculator pads</td></tr><tr><td>GridBagLayout</td><td>Flexible grid</td><td>Variable</td><td>Complex forms</td></tr><tr><td>CardLayout</td><td>Stacked</td><td>Full</td><td>Wizards, tabs</td></tr></table>"
  },
  {
    id: 32,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "essay",
    probability: "HIGH",
    sources: "QB #4,#10, MP2 Q13(a), MP2 Q13(b)",
    question: "What is Java GridLayout? Explain giving a programming example. (Or) What are Java adapter classes? Explain.",
    keyPoints: [
      "GridLayout divides container into equal-sized rectangular grid",
      "Constructor: GridLayout(rows, cols) or GridLayout(rows, cols, hgap, vgap)",
      "Components added left-to-right, top-to-bottom",
      "Adapter classes = empty implementations of listener interfaces",
      "Adapters: WindowAdapter, MouseAdapter, KeyAdapter, FocusAdapter"
    ],
    answer: "<h3>Java GridLayout</h3><p>Divides container into a grid of equal-sized cells. Components added left-to-right, top-to-bottom.</p><h3>Constructors</h3><ul><li><code>GridLayout(rows, cols)</code></li><li><code>GridLayout(rows, cols, hgap, vgap)</code></li></ul><h3>Example</h3><pre>JFrame frame = new JFrame(\"GridLayout Demo\");\nframe.setLayout(new GridLayout(3, 2, 5, 5));\nframe.add(new JButton(\"Button 1\"));\nframe.add(new JButton(\"Button 2\"));\nframe.add(new JButton(\"Button 3\"));\nframe.add(new JButton(\"Button 4\"));\nframe.add(new JButton(\"Button 5\"));\nframe.add(new JButton(\"Button 6\"));\nframe.setVisible(true);</pre><h3>Java Adapter Classes</h3><p><b>Adapter classes</b> are empty implementations of listener interfaces with multiple methods. They save you from implementing all methods when you only need one.</p><h3>Available Adapters</h3><table><tr><th>Adapter</th><th>Interface</th></tr><tr><td>WindowAdapter</td><td>WindowListener (7 methods)</td></tr><tr><td>MouseAdapter</td><td>MouseListener (5 methods)</td></tr><tr><td>KeyAdapter</td><td>KeyListener (3 methods)</td></tr><tr><td>FocusAdapter</td><td>FocusListener (2 methods)</td></tr></table><h3>Example: WindowAdapter</h3><pre>frame.addWindowListener(new WindowAdapter() {\n    public void windowClosing(WindowEvent e) {\n        System.exit(0);    // only override what you need\n    }\n});</pre>"
  },
  {
    id: 33,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #3, MP1 Q8",
    question: "What are Java layout managers? List them.",
    keyPoints: [
      "Layout managers = objects that arrange components within a container",
      "They automatically size and position components",
      "Main types: FlowLayout, BorderLayout, GridLayout, GridBagLayout, CardLayout",
      "Default for JFrame = BorderLayout, default for JPanel = FlowLayout"
    ],
    answer: "<p><b>Layout managers</b> automatically arrange GUI components within a container. They handle sizing, positioning, and resizing behavior.</p><h3>List of Layout Managers</h3><table><tr><th>Layout</th><th>Description</th></tr><tr><td>FlowLayout</td><td>Left-to-right, wraps to next line. Default for JPanel.</td></tr><tr><td>BorderLayout</td><td>5 regions: North, South, East, West, Center. Default for JFrame.</td></tr><tr><td>GridLayout</td><td>Grid of equal-sized cells.</td></tr><tr><td>GridBagLayout</td><td>Flexible grid, components can span multiple cells.</td></tr><tr><td>CardLayout</td><td>Stacked cards, one visible at a time.</td></tr></table><h3>Setting a Layout</h3><pre>JPanel panel = new JPanel(new GridLayout(3, 2));\nframe.setLayout(new BorderLayout());</pre>"
  },
  {
    id: 34,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "short",
    probability: "VERY HIGH",
    sources: "QB SA #1, MP2 Q8",
    question: "What are components and containers in Java?",
    keyPoints: [
      "Component = any GUI element (button, label, text field)",
      "Container = component that can hold other components",
      "All components extend java.awt.Component",
      "Top-level containers: JFrame, JDialog, JApplet",
      "Intermediate containers: JPanel, JScrollPane"
    ],
    answer: "<h3>Components</h3><p>A <b>component</b> is any graphical element the user can see and interact with. Subclasses of <code>java.awt.Component</code>.</p><p>Examples: JButton, JLabel, JTextField, JCheckBox, JRadioButton, JComboBox.</p><h3>Containers</h3><p>A <b>container</b> is a special component that holds other components. Subclass of <code>java.awt.Container</code>.</p><h3>Types of Containers</h3><ol><li><b>Top-Level:</b> JFrame, JDialog, JApplet (exist independently)</li><li><b>Intermediate:</b> JPanel, JScrollPane, JTabbedPane (must be in a top-level)</li></ol><h3>Example</h3><pre>JFrame frame = new JFrame();       // top-level\nJPanel panel = new JPanel();        // intermediate\nJButton button = new JButton(\"OK\"); // component\npanel.add(button);\nframe.add(panel);\nframe.setVisible(true);</pre><p>Every container uses a layout manager to position child components.</p>"
  },
  {
    id: 35,
    unit: 5,
    unitName: "GUI Programming with Swing",
    type: "short",
    probability: "MEDIUM-HIGH",
    sources: "QB SA #2",
    question: "Explain Swing Classes.",
    keyPoints: [
      "Swing classes are in javax.swing package",
      "All start with 'J' prefix",
      "JComponent is the base class for all Swing components",
      "Lightweight, pure Java, platform-independent",
      "Key classes: JFrame, JButton, JLabel, JTextField, JPanel, etc."
    ],
    answer: "<p>Swing classes are GUI component classes in <code>javax.swing</code>. They are <b>lightweight</b> and <b>platform-independent</b>.</p><h3>Hierarchy</h3><pre>Component -> Container -> JComponent\n  -> JButton, JLabel, JTextField, JTextArea,\n     JCheckBox, JRadioButton, JComboBox,\n     JList, JTable, JTree, JOptionPane,\n     JPanel, JScrollPane, JTabbedPane,\n     JMenuBar, JMenu, JMenuItem</pre><h3>Key Classes</h3><table><tr><th>Class</th><th>Purpose</th></tr><tr><td>JFrame</td><td>Main window</td></tr><tr><td>JDialog</td><td>Popup window</td></tr><tr><td>JPanel</td><td>Container for grouping</td></tr><tr><td>JButton</td><td>Clickable button</td></tr><tr><td>JLabel</td><td>Text/image display</td></tr><tr><td>JTextField</td><td>Single-line input</td></tr><tr><td>JTextArea</td><td>Multi-line text</td></tr><tr><td>JCheckBox</td><td>Checkbox</td></tr><tr><td>JRadioButton</td><td>Radio button</td></tr><tr><td>JComboBox</td><td>Dropdown list</td></tr><tr><td>JOptionPane</td><td>Dialog boxes</td></tr></table><h3>Features</h3><ul><li>All names start with 'J'</li><li>Lightweight (pure Java)</li><li>Pluggable look and feel</li><li>MVC architecture</li><li>Support tool tips, borders, icons</li></ul>"
  }
];

if (typeof window !== 'undefined') {
    window.QUESTIONS = QUESTIONS;
}
if (typeof module !== 'undefined') {
    module.exports = QUESTIONS;
}
