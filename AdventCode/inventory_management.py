from collections import Counter
from sys import argv, exit

if len(argv) < 2:
    print("Usage: inventory_management.py input_file.txt")
    exit(0)

def scan_ids(ids):
    """
    Scans arr of ids and returns number of 
    strings with chars seen twice and number of
    strings with chars seen thrice.
    Expects argv[1] to be input text file
    """
    id_storage = []
    f = open(ids, 'r')
    for i in f.readlines():
        id_storage.append(i.strip())
    seen_twice = 0
    seen_thrice = 0
    for i in range(len(id_storage)):
        wc = Counter(id_storage[i])
        values = wc.values()
        for j in range(len(values)):
            if values[j] == 2:
                seen_twice += 1
                break
        for k in range(len(values)):
            if values[k] == 3:
                seen_thrice += 1
                break
    return seen_twice * seen_thrice

# print(scan_ids(argv[1]))

def common_chars(ids):
    id_storage = []
    to_search = []
    f = open(ids, 'r')
    for i in f.readlines():
        id_storage.append(i.strip())
    
    for i in range(len(id_storage)):
        wc = Counter(id_storage[i])
        values = wc.values()
        for j in range(len(values)):
            if values[j] == 2 or values[j] == 3:
                to_search.append(id_storage[i])
                break
        
    for i in range(len(to_search)):
        id = to_search[i]
        for j in range(len(id)):
            modified_id = id[0:j] + id[j+1:]
            modded_search = []
            for k in range(len(to_search)):
                modded_search.append(to_search[k][0:j] + to_search[k][j+1:])
                if modded_search.count(modified_id) == 2:
                    return modified_id  

            
    

   # iterate through array of strings
   # then for each string, split each string on every char in that string,
   # then, compare each split string with every other item in the array, but 
   # every item split on the char at the same index address
                    

    
# The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

# abcde
# fghij
# klmno
# pqrst
# fguij
# axcye
# wvxyz
# 
# I need to loop through the outer list of strings first
# then I need to loop through the chars of each individual string
# I am going to compare that string split on each index with every 
# other string split on each index

print(common_chars(argv[1]))
# /dev/mapper/cryptswap1 none swap sw 0 0

    