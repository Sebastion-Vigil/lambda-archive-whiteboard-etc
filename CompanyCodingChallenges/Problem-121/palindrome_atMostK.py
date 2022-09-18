# [Problem-121] Difficulty: Hard

# This problem was asked by Google.

# Palindrome At Most K:  Good morning!

# Here's your coding interview problem for today.

# Given a string which we can delete at most k, return whether you can make a palindrome.

# For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'

# approach wouldn't work for palindrome_at_most_k("bxydadz", 4)
# do I have to abandon the two-pointer solution approach, or just modify it to check 
# for a case like this?
# how would I check if there is already a palindrome in the string?

# b x y d a d z
# 0 1 2 3 4 5 6

# b x y a a a z
# 0 1 2 3 4 5 6


# w a t e r r f e t a w  x
# 0 1 2 3 4 5 6 7 8 9 10 11

# w a t e r r f e t a w
# 0 1 2 3 4 5 6 7 8 9 10

# w a t e r r e t a w
# 0 1 2 3 4 5 6 7 8 9


def palindrome_at_most_k(string, k):
    string = list(string)
    length = len(string)  # this will be changing
    leftI = 0  # left pointer
    rightI = len(string) - 1  # right pointer

    # will work on even or odd string
    while leftI < rightI:
        # need to know to calculate relative 'center', or end point--different if odd/even
        is_even = length % 2 == 0
        center = int(length/2)
        # if chars at left/right pointers don't match
        if string[leftI] != string[rightI]:
            # first check if k already 0
            if k <= 0:
                # can return False since we know k == 0 and chars don't match
                return False
            


print(palindrome_at_most_k("waterrfetawx", 2))  # should return True
print(palindrome_at_most_k("axyzya", 4))  # should return True
# waterrfetawx
# waterretaw


# while leftI < rightI:
#         end = "" if rightI == len(string) - 1 else string[rightI+1:]
#         print(string[:leftI], leftI, string[leftI+1:rightI], rightI, end)
#         leftI += 1
#         rightI -= 1


def is_palindrome(str):
    leftI = 0
    rightI = len(str) - 1
    count = 0
    while leftI < rightI:
        if str[leftI] != str[rightI]:
            return False
        leftI += 1
        rightI -= 1
        count += 1
        print(count)
    return True
