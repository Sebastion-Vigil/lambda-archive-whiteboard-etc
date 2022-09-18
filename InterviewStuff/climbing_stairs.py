

# param n = # of steps in staircase
# can hop 1, 2, 3 steps at a time


# counts # possible ways in which you can traverse staircase
# using 1, 2, 3, steps

# n = 3 staircase with three steps
# 4 ways to climb this staircase

# 3 steps

def ways_to_climb(n):
    if n == 0:
        return 1
    if n < 0:
        return 0
    return ways_to_climb(n-1) + ways_to_climb(n-2) + ways_to_climb(n-3)

steps = 3

print(ways_to_climb(steps))

# storage array
# [1, 2, 3]

# 1, 1, 1
# 2, 1
# 1, 2
# 3