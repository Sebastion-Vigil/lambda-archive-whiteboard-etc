# from collections import Counter
# this is a very very bad implementation of this challenge
# O(n!)
from itertools import permutations

def is_permutation_palindrome(string):
  
  def is_palindrome(n):
    forward = str(n)
    backward = []
    i = len(forward) - 1
    while i >= 0:
        backward.append(forward[i])
        i -= 1
    backward = ''.join(backward)
    if backward == forward:
        return True
    else:
        return False
        
  
  perms = list(permutations(list(string)))
  
  for i in perms:
    if is_palindrome(''.join(i)):
      return True
  return False
      
# so this function is passing here 
# but failing the rep
# yes that is because this is a more or less brute force approach
# so the program crashes or hangs on larger strings
print(is_permutation_palindrome('civic'))
print(is_permutation_palindrome('civil'))
print(is_permutation_palindrome('mom'))
print(is_permutation_palindrome('aabbccc'))

