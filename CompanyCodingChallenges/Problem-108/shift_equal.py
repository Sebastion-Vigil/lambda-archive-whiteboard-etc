# Good morning! Here's your coding interview problem for today.

# This problem was asked by Google.

# Given two strings A and B, return whether or not A can be shifted some number of times to get B.

# For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

def shift_equal(str1, str2):
    if len(str1) != len(str2):
        return False
    strLen = len(str1)
    need_slice_start = True
    start_slice = 0
    seeking = 0 
    i = 0
    while (i < strLen):
        if str2[i] == str1[seeking]:
            seeking = seeking +1 if seeking < strLen else 0
            if need_slice_start:
                start_slice = i
                need_slice_start = False
        else:
            seeking = 0
            need_slice_start = True
            start_slice = 0
        i += 1
    return str2[start_slice:] + str2[:start_slice] == str1

s1 = "abcde"
s2 = "cdeab"


s3 = "abacd"
s4 = "cdaba"
s5 = "aabcdaaz"
s6 = "aazaabcd"
s7 = "abc"
s8 = "acb"

print(shift_equal(s1, s2)) # should return True
print(shift_equal(s3, s4)) # should return True
print(shift_equal(s5, s6)) # should return True
print(shift_equal(s7, s8)) # should return False

