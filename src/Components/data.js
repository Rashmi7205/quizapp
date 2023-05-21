export default   {
    c: [
      {
        question: "What is the output of the following code?\n#include\nint main() {\n  int x = 5;\n  printf(\"%d\", ++x * 2);\n  return 0;\n}",
        options: ["10", "11", "12", "13"],
        answer: "12"
      },
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["const", "constant", "final", "readonly"],
        answer: "const"
      },
      {
        question: "What is the output of the following code?\n#include\nint main() {\n  int i = 0;\n  while (i < 10) {\n    if (i == 5) {\n      break;\n    }\n    printf(\"%d \", i);\n    i++;\n  }\n  return 0;\n}",
        options: ["0 1 2 3 4 5", "0 1 2 3 4 5 6 7 8 9", "0 1 2 3 4", "0 1 2 3 4 6 7 8 9"],
        answer: "0 1 2 3 4"
      },
      {
        question: "What is the output of the following code?\n#include\nint main() {\n  char s[6] = \"Hello\";\n  printf(\"%s\", s);\n  return 0;\n}",
        options: ["Hello", "Hello\0", "Hello\n", "Garbage Value"],
        answer: "Hello"
      },
      {
        question: "Which of the following is not a valid data type in C?",
        options: ["float", "double", "boolean", "long double"],
        answer: "boolean"
      },
      {
        question: "What is the output of the following code?\n#include\nint main() {\n  int x = 10;\n  int *p = &x;\n  printf(\"%d\", *p);\n  return 0;\n}",
        options: ["10", "0", "Garbage Value", "compile error"],
        answer: "10"
      },
      {
        question: "What is the output of the following code?\n#include\nint main() {\n  int a = 10;\n  if (a > 5) {\n    printf(\"Greater\");\n  } else {\n    printf(\"Smaller\");\n  }\n  return 0;\n}",
        options: ["Greater", "Smaller", "10", "compile error"],
        answer: "Greater"
      },
      {
        question: "What is the output of the following code?\n#include\nint main() {\n  int a = 10, b = 5;\n  if (a > 5 && b > 5) {\n    printf(\"Yes\");\n  } else {\n    printf(\"No\");\n  }\n  return 0;\n}",
        options: ["Yes", "No", "10", "compile error"],
        answer: "Yes"
      }
    ],

    cpp: [
        {
          question: "Which header file should you include to work with string in C++?",
          options: ["iostream.h", "string.h", "math.h", "stdio.h"],
          answer: "string.h"
        },
        {
          question: "What is the output of the following code?\n#include\nusing namespace std;\nint main() {\n  int x = 5;\n  cout << ++x * 2;\n  return 0;\n}",
          options: ["10", "11", "12", "13"],
          answer: "12"
        },
        {
          question: "Which keyword is used to define a constant in C++?",
          options: ["const", "constant", "final", "readonly"],
          answer: "const"
        },
        {
          question: "What is the output of the following code?\n#include\nusing namespace std;\nint main() {\n  int i = 0;\n  while (i < 10) {\n    if (i == 5) {\n      break;\n    }\n    cout << i << \" \";\n    i++;\n  }\n  return 0;\n}",
          options: ["0 1 2 3 4 5", "0 1 2 3 4 5 6 7 8 9", "0 1 2 3 4", "0 1 2 3 4 6 7 8 9"],
          answer: "0 1 2 3 4"
        },
        {
          question: "What is the output of the following code?\n#include\nusing namespace std;\nint main() {\n  string s = \"Hello\";\n  cout << s;\n  return 0;\n}",
          options: ["Hello", "Hello\0", "Hello\n", "Garbage Value"],
          answer: "Hello"
        },
        {
          question: "Which of the following is not a valid data type in C++?",
          options: ["float", "double", "boolean", "long double"],
          answer: "boolean"
        },
        {
          question: "What is the output of the following code?\n#include\nusing namespace std;\nint main() {\n  int x = 10;\n  int *p = &x;\n  cout << *p;\n  return 0;\n}",
          options: ["10", "0", "Garbage Value", "compile error"],
          answer: "10"
        },
        {
          question: "What is the output of the following code?\n#include\nusing namespace std;\nint main() {\n  int a = 10;\n  if (a > 5) {\n    cout << \"Greater\";\n  } else {\n    cout << \"Smaller\";\n  }\n  return 0;\n}",
          options: ["Greater", "Smaller", "10", "compile error"],
          answer: "Greater"
        }
    ],
    java: [
        {
          question: "What is the output of the following code?\n int x = 5;\n System.out.println(x++);\n",
          options: ["5", "6", "Compiler error", "Runtime error"],
          answer: "5"
        },
        {
          question: "What is the correct way to declare a constant in Java?",
          options: ["const int VALUE = 5;", "static final int VALUE = 5;", "final int VALUE = 5;", "final static int VALUE = 5;"],
          answer: "final static int VALUE = 5;"
        },
        {
          question: "What is the output of the following code?\n int[][] arr = {{1, 2}, {3, 4}};\n System.out.println(arr[1][0]);\n",
          options: ["1", "2", "3", "4"],
          answer: "3"
        },
        {
          question: "Which of the following is not a Java keyword?",
          options: ["class", "interface", "private", "function"],
          answer: "function"
        },
        {
          question: "What is the output of the following code?\n String str = \"Hello World!\";\n System.out.println(str.substring(6));\n",
          options: ["Hello", "World!", "Hello W", "W"],
          answer: "World!"
        },
        {
          question: "What is the correct way to declare a method that can throw an exception in Java?",
          options: ["void method() { throw Exception; }", "void method() throws Exception { }", "void method() try { } catch (Exception e) { }", "void method() { try { } catch (Exception e) { } }"],
          answer: "void method() throws Exception { }"
        },
        {
          question: "What is the output of the following code?\n String str1 = \"Hello\";\n String str2 = \"hello\";\n System.out.println(str1.equals(str2));\n",
          options: ["true", "false", "Compiler error", "Runtime error"],
          answer: "false"
        },
        {
          question: "What is the correct way to declare a generic class in Java?",
          options: ["class MyClass<T> { }", "class MyClass<T extends Object> { }", "class MyClass<T super Object> { }", "class MyClass<super T> { }"],
          answer: "class MyClass<T> { }"
        },
        {
          question: "What is the output of the following code?\n int x = 5;\n if (x > 3 && x < 10) {\n   System.out.println(\"x is between 3 and 10\");\n }\n",
          options: ["x is between 3 and 10", "Compiler error", "Runtime error", "No output"],
          answer: "x is between 3 and 10"
        },
        {
          question: "What is the correct way to create a new thread in Java?",
          options: ["new Thread().start();", "new Thread().run();", "Thread.create();", "Thread.start();"],
          answer: "new Thread().start();"
        }
      ]
    ,
    python: [
        {
          question: "What is the output of the following code?\n x = 5\n print(x)",
          options: ["5", "6", "Compiler error", "Runtime error"],
          answer: "5"
        },
        {
          question: "What is the correct way to declare a variable in Python?",
          options: ["int x = 5", "x = 5", "var x = 5", "let x = 5"],
          answer: "x = 5"
        },
        {
          question: "What is the output of the following code?\n arr = [[1, 2], [3, 4]]\n print(arr[1][0])",
          options: ["1", "2", "3", "4"],
          answer: "3"
        },
        {
          question: "Which of the following is not a Python data type?",
          options: ["int", "str", "float", "double"],
          answer: "double"
        },
        {
          question: "What is the output of the following code?\n str = \"Hello World!\"\n print(str[6:])",
          options: ["Hello", "World!", "Hello W", "W"],
          answer: "World!"
        },
        {
          question: "What is the correct way to declare a function in Python?",
          options: ["function myFunc():", "def myFunc():", "method myFunc():", "func myFunc():"],
          answer: "def myFunc():"
        },
        {
          question: "What is the output of the following code?\n str1 = \"Hello\"\n str2 = \"hello\"\n print(str1 == str2)",
          options: ["True", "False", "Compiler error", "Runtime error"],
          answer: "False"
        },
        {
          question: "What is the correct way to create a list in Python?",
          options: ["list = []", "list = {}", "list = ()", "list = <>"],
          answer: "list = []"
        },
        {
          question: "What is the output of the following code?\n x = 5\n if x > 3 and x < 10:\n   print(\"x is between 3 and 10\")",
          options: ["x is between 3 and 10", "Compiler error", "Runtime error", "No output"],
          answer: "x is between 3 and 10"
        },
        {
          question: "What is the correct way to read a file in Python?",
          options: ["file.read(\"filename.txt\")", "read(file \"filename.txt\")", "open(\"filename.txt\").read()", "file.open(\"filename.txt\").read()"],
          answer: "open(\"filename.txt\").read()"
        }
      ],
      html: [
        {
          question: "What is the correct HTML tag for inserting a line break?",
          options: ["<br>", "<lb>", "<break>", "<linebreak>"],
          answer: "<br>"
        },
        {
          question: "What is the correct HTML tag for a hyperlink?",
          options: ["<a href>", "<link>", "<a>", "<hyperlink>"],
          answer: "<a>"
        },
        {
          question: "What is the correct HTML tag for defining a table?",
          options: ["<table>", "<tab>", "<tbl>", "<t>"],
          answer: "<table>"
        },
        {
          question: "What is the correct HTML tag for a paragraph?",
          options: ["<p>", "<par>", "<para>", "<paragraph>"],
          answer: "<p>"
        },
        {
          question: "What is the correct HTML tag for the largest heading?",
          options: ["<h6>", "<h1>", "<head>", "<header>"],
          answer: "<h1>"
        },
        {
          question: "What is the correct HTML tag for inserting an image?",
          options: ["<img>", "<image>", "<picture>", "<photo>"],
          answer: "<img>"
        },
        {
          question: "What is the correct HTML tag for making a text bold?",
          options: ["<strong>", "<bold>", "<b>", "<text-bold>"],
          answer: "<b>"
        },
        {
          question: "What is the correct HTML tag for making a text italic?",
          options: ["<italic>", "<i>", "<it>", "<text-italic>"],
          answer: "<i>"
        },
        {
          question: "What is the correct HTML tag for creating an unordered list?",
          options: ["<ul>", "<list>", "<unordered>", "<unorder-list>"],
          answer: "<ul>"
        },
        {
          question: "What is the correct HTML tag for creating an ordered list?",
          options: ["<ol>", "<ordered>", "<list>", "<order-list>"],
          answer: "<ol>"
        }
      ],
      css: [
        {
          question: "What property is used to set the background color of an element?",
          options: ["color", "background-color", "bgcolor", "bg-color"],
          answer: "background-color"
        },
        {
          question: "What property is used to set the font size?",
          options: ["font-size", "text-size", "size", "font-style"],
          answer: "font-size"
        },
        {
          question: "What property is used to set the font weight?",
          options: ["font-weight", "weight", "text-weight", "font-style"],
          answer: "font-weight"
        },
        {
          question: "What property is used to set the text alignment?",
          options: ["align", "text-align", "alignment", "text-justify"],
          answer: "text-align"
        },
        {
          question: "What property is used to set the text color?",
          options: ["color", "font-color", "text-color", "text"],
          answer: "color"
        },
        {
          question: "What property is used to set the height of an element?",
          options: ["height", "element-height", "hgt", "size"],
          answer: "height"
        },
        {
          question: "What property is used to set the width of an element?",
          options: ["width", "element-width", "wid", "size"],
          answer: "width"
        },
        {
          question: "What property is used to add a border to an element?",
          options: ["border", "border-style", "element-border", "border-width"],
          answer: "border"
        },
        {
          question: "What property is used to set the margin of an element?",
          options: ["margin", "element-margin", "mg", "spacing"],
          answer: "margin"
        },
        {
          question: "What property is used to set the padding of an element?",
          options: ["padding", "element-padding", "pd", "spacing"],
          answer: "padding"
        }
      ],
      react: [
        {
          question: "What is React?",
          options: ["A server-side language", "A front-end JavaScript library", "A database management system", "A back-end programming language"],
          answer: "A front-end JavaScript library"
        },
        {
          question: "What is the latest version of React as of 2023?",
          options: ["16.0", "17.0", "18.0", "19.0"],
          answer: "18.0"
        },
        {
          question: "What method is used to change the state of a React component?",
          options: ["setState()", "changeState()", "updateState()", "modifyState()"],
          answer: "setState()"
        },
        {
          question: "What is the virtual DOM?",
          options: ["A real-time database", "A database management system", "A lightweight copy of the actual DOM", "A front-end JavaScript library"],
          answer: "A lightweight copy of the actual DOM"
        },
        {
          question: "What is the purpose of the render() method in React?",
          options: ["To modify the state of a component", "To render a component to the DOM", "To update the state of a component", "To initialize the state of a component"],
          answer: "To render a component to the DOM"
        },
        {
          question: "What is the purpose of the constructor() method in a React component?",
          options: ["To render a component to the DOM", "To initialize the state of a component", "To update the state of a component", "To modify the state of a component"],
          answer: "To initialize the state of a component"
        },
        {
          question: "What is the purpose of the componentDidMount() method in a React component?",
          options: ["To update the state of a component", "To modify the state of a component", "To initialize the state of a component", "To perform actions after a component is mounted"],
          answer: "To perform actions after a component is mounted"
        },
        {
          question: "What is the purpose of props in React?",
          options: ["To store data within a component", "To pass data between components", "To modify the state of a component", "To render a component to the DOM"],
          answer: "To pass data between components"
        },
        {
          question: "What is JSX in React?",
          options: ["A database management system", "A markup language used with React", "A JavaScript library used with React", "A server-side language"],
          answer: "A markup language used with React"
        },
        {
          question: "What is the purpose of keys in React?",
          options: ["To store data within a component", "To pass data between components", "To optimize rendering performance", "To modify the state of a component"],
          answer: "To optimize rendering performance"
        }
      ]

}