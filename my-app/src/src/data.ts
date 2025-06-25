
const storedData: any = [

  {
    id: "Learn Basics", subtopics: [
      {

        head: "Things to Know in C++/Java/Python or any language",
        data: ["User Input-Output", "If Else statements", "Switch Statement"],
        description: [["Complete the function printNumber which takes an integer input from the user and prints it on the screen.",
          "Use:-",
          "for C++ : cout << variable_name;",
          "for Java : System.out.print();",
          "for Python : print()",
          "for Javascript : console.log()"],
        ["Given marks of a student, print on the screen:",
          "Grade A if marks >= 90",
          "Grade B if marks >= 70",
          "Grade C if marks >= 50",
          "Grade D if marks >= 35",
          "Fail, otherwise.",
          "For printing use:-",
          "for C++ : cout << variable_name;",
          "for Java : System.out.print();",
          "for Python : print()",
          "for Javascript : console.log()"], ["Complete the function printNumber which takes an integer input from the user and prints it on the screen."
          , "Use:-",
          "for C++ : cout << variable_name;",
          "for Java : System.out.print();",
          "for Python : print()",
          "for Javascript : console.log()"]
        ],
        exampleo: [["Input(user gives value): 7",
          "Output: 7"], ["Input: marks = 95",
          "Output: Grade A",
          "Explanation: marks are greater than or equal to 90."], ["Input(user gives value): 7",
          "Output: 7"]],
        examplet: [["no"], ["Input: marks = 14",
          "Output: Fail",
          "Explanation: marks are less than 35."], ["Input(user gives value): -5",
          "Output: -5"],]
      },
      {

        head: "Know Basic Maths",
        data: ["Count Digits", "Reverse a Number", "ICheck Palindrome", "GCD Or HCF", "Armstrong Numbers", "Print all Divisors", "Check for Prime"],
        description: [[" You are given an integer n. You need to return the number of digits in the number.",
          "The number will have no leading zeroes, except when the number is 0 itself."], ["You are given an integer n. Return the integer formed by placing the digits of n in reverse order. "], ["You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.",
          "A palindrome number is a number which reads the same both left to right and right to left."], ["You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.",
          "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers."], ["You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false."
          , "An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits."], [
          "You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.",
          "A number which completely divides another number is called it's divisor.", [
            "You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.",
            "A prime number is a number which has no divisors except 1 and itself."
          ],
        ],],
        exampleo: [
          ["Input: n = 4",
            "Output: 1",
            "Explanation: There is only 1 digit in 4."],
          ["Input: n = 25",
            "Output: 52",
            "Explanation: Reverse of 25 is 52."],
          ["Input: n = 121",
            "Output: true",
            "Explanation: When read from left to right : 121.",
            "When read from right to left : 121."],
          ["Input: n1 = 4, n2 = 6",
            "Output: 2",
            "Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6",
            "Greatest Common divisor = 2."], ["Input: n = 153",
            "Output: true",
            "Explanation: Number of digits : 3.",
            "1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153.",
            "Therefore, it is an Armstrong number."], [
            "Input: n = 6",
            "Output = [1, 2, 3, 6]",
            "Explanation: The divisors of 6 are 1, 2, 3, 6."
          ], [
            "Input: n = 5",
            "Output: true",
            "Explanation: The only divisors of 5 are 1 and 5, so the number 5 is prime."
          ],

        ],
        examplet: [["Input: n = 14",
          "Output: 2",
          "Explanation: There are 2 digits in 14."],
        ["Input: n = 123",
          "Output: 321",
          "Explanation: Reverse of 123 is 321."],
        ["Input: n = 123",
          "Output: false",
          "Explanation: When read from left to right : 123.",
          "When read from right to left : 321."], ["Input: n1 = 9, n2 = 8",
          "Output: 1",
          "Explanation: Divisors of n1 = 1, 3, 9 Divisors of n2 = 1, 2, 4, 8.",
          "Greatest Common divisor = 1."], ["Input: n = 12",
          "Output: false",
          "Explanation: Number of digits : 2.",
          "1 ^ 2 + 2 ^ 2 = 1 + 4 = 5.",
          "Therefore, it is not an Armstrong number."], [
          "Input: n = 8",
          "Output: [1, 2, 4, 8]",
          "Explanation: The divisors of 8 are 1, 2, 4, 8."
        ], [
          "Input: n = 8",
          "Output: false",
          "Explanation: The divisors of 8 are 1, 2, 4, 8, thus it is not a prime number."
        ]

        ],
      },
      {

        head: "Learn Basic Recursion",
        data: ["Sum of first N numbers", "Reverse an array", "Check if a string is palindrome or not", "Fibonacci Number"],
        description: [[
          "Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion."
        ], [
          "Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace."
        ], [
          "Given a string s, return true if the string is palindrome, otherwise false.",
          "A string is called palindrome if it reads the same forward and backward."
        ], [
          "The Fibonacci numbers, commonly denoted F(n), form a sequence called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.",
          "F(0) = 0, F(1) = 1",
          "F(n) = F(n - 1) + F(n - 2), for n > 1.",
          "Given n, calculate F(n)."
        ]],
        exampleo: [[
          "Input : N = 4",
          "Output : 10",
          "Explanation : First four natural numbers are 1, 2, 3, 4. Sum is 1 + 2 + 3 + 4 => 10."
        ], [
          "Input: n = 5, arr = [1,2,3,4,5]",
          "Output: [5,4,3,2,1]",
          "Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]"
        ], [
          "Input : s = \"aabbaaa\"",
          "Output : false",
          "Explanation : The string when reversed is --> \"aaabbaa\", which is not same as original string, so we return false."
        ], [
          "Input : n = 2",
          "Output : 1",
          "Explanation : F(2) = F(1) + F(0) => 1 + 0 => 1."
        ]],
        examplet: [[
          "Input : N = 2",
          "Output : 3",
          "Explanation : First two natural numbers are 1, 2. Sum is 1 + 2 => 3."
        ], [
          "Input: n = 6, arr = [1,2,1,1,5,1]",
          "Output: [1,5,1,1,2,1]",
          "Explanation: The reverse of the array [1,2,1,1,5,1] is [1,5,1,1,2,1]."
        ], [
          "Input : s = \"hannah\"",
          "Output : true",
          "Explanation : The string when reversed is --> \"hannah\", which is same as original string, so we return true."
        ], [
          "Input : n = 3",
          "Output : 2",
          "Explanation : F(3) = F(2) + F(1) => 1 + 1 => 2."
        ]]
      },

    ]
  },
  {
    id: "LearnImportantSortingTechniques", subtopics: [
      {
        head: "Sorting-I",
        data: ["Selection sort", "Bubble sort", "Insertion sort"],
        description: [
          ["Given an array of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times.",
            "If there are multiple elements that appear a maximum number of times, find the smallest of them."
          ], [
            "You're given an array of integers called nums. Your task is to sort this array in non-decreasing order using the bubble sort algorithm and return the sorted version.",
            "In a non-decreasing order, each element is greater than or equal to the one that comes before it."
          ], [
            "You are given an array of integers named nums. Your task is to sort this array in non-decreasing order using the insertion sort algorithm and return the sorted array.",
            "In a non-decreasing order, each element is greater than or equal to the one that comes before it."
          ]

        ],
        exampleo: [[
          "Input: arr = [1, 2, 2, 3, 3, 3]",
          "Output: 3",
          "Explanation: The number 3 appears the most (3 times). It is the most frequent element."
        ], [
          "Input: nums = [5, 4, 4, 1, 1]",
          "Output: [1, 1, 4, 4, 5]",
          "Explanation: Using bubble sort, the array gets rearranged to [1, 1, 4, 4, 5]. All elements follow a non-decreasing pattern, meaning each number is at least as large as the one before it."
        ], [
          "Input: nums = [7, 4, 1, 5, 3]",
          "Output: [1, 3, 4, 5, 7]",
          "Explanation: After applying insertion sort, the array becomes [1, 3, 4, 5, 7]. Each element is greater than or equal to the previous one, which satisfies the non-decreasing order requirement."
        ]

        ],
        examplet: [[
          "Input: arr = [4, 4, 5, 5, 6]",
          "Output: 4",
          "Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element."
        ], [
          "Input: nums = [7, 4, 1, 5, 3]",
          "Output: [1, 3, 4, 5, 7]",
          "Explanation: After applying bubble sort, the array becomes [1, 3, 4, 5, 7]. Each number is greater than or equal to the one before it, so the array is sorted in non-decreasing order."
        ], [
          "Input: nums = [5, 4, 4, 1, 1]",
          "Output: [1, 1, 4, 4, 5]",
          "Explanation: Using insertion sort, the array is rearranged to [1, 1, 4, 4, 5]. The elements are in non-decreasing order since each value is greater than or equal to the one before it."
        ]

        ]

      },
      {

        head: "  Sorting-II",
        data: ["quick sort", "Merge sort"],
        description: [[
          "You are given an array of integers called nums. Your task is to sort this array in non-decreasing order using the quick sort algorithm and return the sorted array.",
          "A non-decreasing order means every element is greater than or equal to all the elements that come before it in the array."
        ], [
          "You are given an array of integers called nums. Your task is to sort this array in non-decreasing order using the merge sort algorithm and return the sorted array.",
          "A non-decreasing order means each element is greater than or equal to all the elements before it in the array."
        ]

        ],
        exampleo: [[
          "Input: nums = [7, 4, 1, 5, 3]",
          "Output: [1, 3, 4, 5, 7]",
          "Explanation: After applying quick sort, the array becomes [1, 3, 4, 5, 7]. Each number is greater than or equal to the one before it, which confirms it's sorted in non-decreasing order."
        ], [
          "Input: nums = [7, 4, 1, 5, 3]",
          "Output: [1, 3, 4, 5, 7]",
          "Explanation: After applying merge sort, the array becomes [1, 3, 4, 5, 7]. All elements follow the non-decreasing order where each value is greater than or equal to the one before it."
        ]
        ],


        examplet: [
          [
            "Input: nums = [5, 4, 4, 1, 1]",
            "Output: [1, 1, 4, 4, 5]",
            "Explanation: After applying quick sort, the array becomes [1, 1, 4, 4, 5]. Each element is greater than or equal to the one before it, fulfilling the condition for non-decreasing order."
          ], [
            "Input: nums = [5, 4, 4, 1, 1]",
            "Output: [1, 1, 4, 4, 5]",
            "Explanation: Merge sort rearranges the array into [1, 1, 4, 4, 5], where each element is greater than or equal to the one before it, satisfying non-decreasing order."
          ]

        ],
      },
    ]

  },

  {
    id: "SolveProblemsonArrays", subtopics: [
      {

        head: "Easy",
        data: ["Largest Element in an Array", "Second Largest Element in an Array without sorting", "Check if the array is sorted"]
        , description: [[
          "You are given an array of integers called nums. Your task is to find and return the value of the largest element present in the array."
        ], [
          "You are given an array of integers called nums. Your task is to find and return the second-largest element in the array.",
          "If the array doesn't have a distinct second-largest element (for example, all elements are the same or there's only one element), return -1."
        ], [
          "You are given an integer array nums sorted in non-decreasing order. Your task is to remove all duplicate elements in-place so that each unique value appears only once, and return the number of unique elements.",
          "If the number of unique elements is k, modify the array nums such that the first k elements contain those unique values in their original order.",
          "The remaining part of the array and its size are not important for correctness.",
          "Note: A non-decreasing array is one where every element is less than or equal to the ones that follow it."
        ]],
        exampleo: [[
          "Input: nums = [0, 0, 3, 3, 5, 6]",
          "Output: 4",
          "Explanation: After removing duplicates in-place, the array becomes [0, 3, 5, 6, _, _]. There are 4 unique elements, so the output is 4. The values beyond the first 4 positions do not matter."
        ], [
          "Input: nums = [8, 8, 7, 6, 5]",
          "Output: 7",
          "Explanation: The largest value in the array is 8, and the next distinct highest value is 7, which makes it the second-largest."
        ], [
          "Input: nums = [3, 3, 6, 1]",
          "Output: 6",
          "Explanation: Among all elements in the array, 6 is the greatest value."
        ]
        ],
        examplet: [[
          "Input: nums = [10, 10, 10, 10, 10]",
          "Output: -1",
          "Explanation: All elements in the array are the same (10), so there is no distinct second-largest value. Therefore, -1 is returned."
        ], [
          "Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5]",
          "Output: 4",
          "Explanation: After removing duplicates in-place, the array becomes [-2, 2, 4, 5, _, _, _, _]. There are 4 unique elements, so the output is 4. The values beyond the first 4 positions can be anything."
        ], [
          "Input: nums = [3, 3, 0, 99, -40]",
          "Output: 99",
          "Explanation: The largest element in the array is 99, which is greater than all other values."
        ]


        ]
      },
      {

        head: "Medium",
        data: ["2Sum Problem", "Sort an array of 0's 1's and 2's", "Majority Element (>n/2 times)"],

        description: [["Given an array of integers nums and an integer target.", " Return the indices(0 - indexed) of two elements in nums such that they add up to target."



          , "Each input will have exactly one solution, and the same element cannot be used twice.",
          " Return the answer in non-decreasing order."], ["Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array."], ["Given an integer array nums of size n, return the majority element of the array.The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element."]
          , [
          "You are given an array called nums that contains only the integers 0, 1, and 2.",
          "Your task is to sort the array in non-decreasing order in-place, meaning you cannot use extra space to create a copy of the array."
        ], [
          "You are given an integer array called nums of size n. Your task is to return the majority element in the array.",
          "The majority element is defined as the element that appears more than ⌊n / 2⌋ times. It is guaranteed that such an element exists in the array."
        ]

        ],
        exampleo: [
          ["Input: nums = [1, 6, 2, 10, 3], target = 7 Output: [0, 1] Explanation: nums[0] + nums[1] = 1 + 6 = 7],[1, 0, 2, 1, 0]",
            ["[1, 0, 2, 1, 0]",
              "Output: [0, 0, 1, 1, 2]",
              "Explanation: After sorting the array in-place, it becomes [0, 0, 1, 1, 2] with all 0s first, followed by 1s, and then 2s."
            ]], [
            "Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]",
            "Output: 7",
            "Explanation: The array has 9 elements, so the majority threshold is ⌊9 / 2⌋ = 4. The number 7 appears 5 times, which is more than 4, making it the majority element."
          ]],
        examplet: [
          ["Input: nums = [1, 6, 2, 10, 3], target = 7 Output: [0, 1] Explanation: nums[0] + nums[1] = 1 + 6 = 7],[1, 0, 2, 1, 0]",
            ["[1, 0, 2, 1, 0]",
              "Output: [0, 0, 1, 1, 2]",
              "Explanation: After sorting the array in-place, it becomes [0, 0, 1, 1, 2] with all 0s first, followed by 1s, and then 2s."
            ], [
              "Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]",
              "Output: 7",
              "Explanation: The array has 9 elements, so the majority threshold is ⌊9 / 2⌋ = 4. The number 7 appears 5 times, which is more than 4, making it the majority element."
            ]]
        ]
      },
    ]
  },



  {
    id: "Strings(Basicandmedium)", subtopics: [
      {

        head: "Basic and easy",
        data: [

          "Reverse words in a given string-Palindrome Check",
          "Largest odd number in a string"

        ],
        description: [["Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ).", "A word is defined as a sequence of non-space characters.", "The words in s are separated by at least one space", " Return a string with the words in reverse order, concatenated by a single space."]
          , ["Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.", " The number returned should not have leading zero's.", "But the given input string may have leading zero."]],


        exampleo: [["Input: s = welcome to the jungle Output: jungle the to welcome", "Explanation: The words in the input string are welcome, to, the, and jungle.", "Reversing the order of these words gives jungle, the, to, and welcome.", "The output string should have exactly one space between each word."], ["Input: s = welcome to the jungle Output: jungle the to welcome Explanation: The words in the input string are welcome, to, the, and jungle. Reversing the order of these words gives jungle, the, to, and welcome. The output string should have exactly one space between each word."]]
        , examplet: [["Input: s = welcome to the jungle Output: jungle the to welcome Explanation: The words in the input string are welcome, to, the, and jungle. Reversing the order of these words gives jungle, the, to, and welcome. The output string should have exactly one space between each word."], ["Input: s = welcome to the jungle Output: jungle the to welcome Explanation: The words in the input string are welcome, to, the, and jungle. Reversing the order of these words gives jungle, the, to, and welcome. The output string should have exactly one space between each word."]]

      },
      {

        head: "medium",
        data: [
          "Sort Characters by Frequency",
          "Maximum Nesting Depth of Parenthesis",
          "Roman Number to Integer and Vice Versa"
        ],
        description: [["You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters. If two or more characters have same frequency then arrange them in alphabetic order."], ["Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space. Return a string with the words in reverse order, concatenated by a single space."]
          , ["Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."]
        ],
        exampleo: [["Input : s = tree, Output : ['e', 'r', 't' ] Explanation : The occurrences of each character are as shown below : e --> 2 r --> 1 t --> 1. The r and t have same occurrences , so we arrange them by alphabetic order."],
          , ["Input: s = welcome to the jungle, Output: jungle the to welcome Explanation: The words in the input string are welcome, to, the, and jungle. Reversing the order of these words gives jungle, the, to, and welcome. The output string should have exactly one space between each word."],
          , ["Input : s = anagram, t = nagaram Output : true Explanation : We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same."],],
        examplet: [["Input : s = tree, Output : ['e', 'r', 't' ] Explanation : The occurrences of each character are as shown below : e --> 2 r --> 1 t --> 1. The r and t have same occurrences , so we arrange them by alphabetic order."],
          , ["Input: s = welcome to the jungle, Output: jungle the to welcome Explanation: The words in the input string are welcome, to, the, and jungle. Reversing the order of these words gives jungle, the, to, and welcome. The output string should have exactly one space between each word."],
          , ["Input : s = anagram, t = nagaram Output : true Explanation : We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same."],]



      }
    ]
  }
]







export default storedData;