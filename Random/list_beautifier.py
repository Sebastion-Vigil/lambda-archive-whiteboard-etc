def list_beautifier(sequence):
    res = sequence[:]
    while res and res[0] != res[-1]:
        a, *res, c = res
    return res


