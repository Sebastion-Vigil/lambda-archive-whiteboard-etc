# 1) [challenge-113] Reverse Words: Good morning! Here's your coding interview problem for today.

# This problem was asked by Google.

# Given a string of words delimited by spaces, reverse the words in string. 

# For example, given "hello world here", return "here world hello"

# Follow-up: given a mutable string representation, can you perform this operation in-place?

def reverse_phrase(phrase):
    phrase = phrase.split(' ')
    phrase.reverse()
    return phrase

sentence = "hello world here"

print(reverse_phrase(sentence))