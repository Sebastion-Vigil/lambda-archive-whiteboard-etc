from collections import Counter
# so before I solved this problem with the permutations module
# however, the time complexity was O(n!), which is like really bad
# So I started thinking about the problem from another angle
# And figured out that if all of the chars except for one are evenly paired,
# then I know we have a permutable palindrome, without having to actually 
# check every permutation of the string. So here goes my second rendering
# of this function:

def is_permutation_palindrome(string):
    chars = Counter(list(string))
    not_paired = 0
    for key in chars.keys():
        if chars[key] % 2 != 0:
            not_paired += 1
    return not_paired <= 1



print(is_permutation_palindrome('civic'))
print(is_permutation_palindrome('civil'))
print(is_permutation_palindrome('iiiiiiiiiiiiiiiii'))
