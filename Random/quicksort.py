

def quick_sort(to_sort):
    less = []
    equal = []
    greater = []
    
    if len(to_sort) > 1:
        pivot = to_sort[0]
        for i in range(len(to_sort)):
            if to_sort[i] < pivot:
                less.append(to_sort[i])
            if to_sort[i] == pivot:
                equal.append(to_sort[i])
            if to_sort[i] > pivot:
                greater.append(to_sort[i])
        return quick_sort(less) + equal + quick_sort(greater)
    else:
        return to_sort


print(quick_sort([4, 3, 1, 2, 6, 9, 10, 3, 2]))

