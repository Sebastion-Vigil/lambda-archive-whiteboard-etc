

# def reverse_parans(s):
#     final_string = []
#     to_be_reversed = []
#     for i in range(len(s)):
#         if s[i] != '(':
#             final_string.append(s[i])
#         elif s[i] == '(':
#             j = i+1
#             while s[j] != ')':
#                 to_be_reversed.append(s[j])
#                 j += 1
#             to_be_reversed.reverse()
#             final_string = final_string + to_be_reversed
#             to_be_reversed = []
            
#     return ''.join(final_string)
        
# def reverseParentheses(s):
#     final_string = []
#     to_be_reversed = []
#     i = 0
#     while i <= len(s) - 1:
#         if s[i] != '(':
#             final_string.append(s[i])
#         elif s[i] == '(':
#             j = i + 1
#             while s[j] != ')':
#                 to_be_reversed.append(s[j])
#                 j += 1
#             to_be_reversed.reverse()
#             final_string += to_be_reversed
#             to_be_reversed = []
#             i = j
#         i += 1
#     return ''.join(final_string)


def reverseParentheses(s):
    param_count = {'p' : 0}
    for i in range(len(s)):
        if s[i] == '(':
            param_count['p'] += 1
        elif s[i] == ')':
            param_count['p'] -= 1
    return param_count


print(reverseParentheses('str(abc)ing'))
print(reverseParentheses("a(bc)de"))
print(reverseParentheses("aaa(()"))
print(reverseParentheses(")))))"))