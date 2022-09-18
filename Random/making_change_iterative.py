

def make_change(amount, denominations):
    
    # we need amount+1 rows as we create our table
    # in bottom-up manner using the base case 0 value
    table = [[0 for x in range(len(denominations))] for x in range(amount+1)]
    # print("After initial creation: ")
    # print(table)
    # fill in the entries for 0 value case (amount = 0)
    for i in range(len(denominations)):
        table[0][i] = 1
    # print("After filling in entries for 0 value case: ")
    # print(table)
    # fill in the rest of the table entries in bottom-up manner
    for i in range(1, amount+1):
        for j in range(len(denominations)):
            # count of solutions including denominations[j]
            x = table[i - denominations[j]][j] if i-denominations[j] >= 0 else 0
            print("Value of x: ")
            print(x)
            # count of solutions excluding denominations[i]
            y = table[i][j-1] if j >= 1 else 0
            # total count
            table[i][j] = x + y
    for row in table:
        print(row)
    return table[amount][len(denominations) - 1]

arr = [1, 2, 3]
m = len(arr)
n = 4
print(make_change(n, arr))

# n is amount
# S is denominations
# m is the length of the denominations array...so I don't need to pass it as a parameter!

