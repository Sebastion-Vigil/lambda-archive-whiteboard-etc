words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

# create new list
# iterate through words
# start appending items to new list
# each time a new item is appended to new list
# create copy of new list 
# compare new list to sorted copy of new list
# if different, return false

def find_rotation_point(arr):

    new = []
    for i in range(len(arr)):
        new.append(arr[i])
        copy = [x for x in new]
        copy.sort()
        if new != copy:
            return i
    return None

print(find_rotation_point(words))
        
