from random import randint


def coin_flip(n):
    rounds = 0
    heads = 0
    remaining_coins = n
    do:
        for i in range(remaining_coins):
            heads += randint(0, 1)
        rounds += 1
        heads = 0
    while heads

