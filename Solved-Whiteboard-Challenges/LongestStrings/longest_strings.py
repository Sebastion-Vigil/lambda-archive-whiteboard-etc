



def longest_strings(strs):
    longest = []
    max_len = 0
    for i in range(len(strs)):
        if len(strs[i]) > max_len:
            longest = []
            max_len = len(strs[i])
            longest.append(strs[i])
        elif len(strs[i]) == max_len:
            longest.append(strs[i])
    return longest

strings =  ["aba", "aa", "ad", "vcd", "aba"]
print(longest_strings(strings))