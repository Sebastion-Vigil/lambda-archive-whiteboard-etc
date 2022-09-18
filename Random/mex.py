def mexFunction(s, upper_bound):
    found = -1
    for i in range(upper_bound):
        if not i in s:
            found = i
            break
    else:
        return upper_bound
    return found
