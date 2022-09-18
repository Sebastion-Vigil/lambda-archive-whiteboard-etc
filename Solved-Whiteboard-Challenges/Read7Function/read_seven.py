# 1) Good morning! Here's your coding interview problem for today.

# This problem was asked by Microsoft.

# Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

# For example, given a file with the content "Hello world", three read7() returns "Hello w", "orld" and then "".

sample_text = open('sample.txt', 'r')

# def read7(n):
#     str = ''
#     line = sample_text.read()
#     for i in range(7):
#         str += line[i]
#     print(len(str))
#     return str

def read7(n):
    str = ''
    answer = []
    position = 0
    line = sample_text.read()
    while n > 0:
        print(position)
        for i in range(7):
            if position >= len(line):
                break
            str += line[position]
            position += 1
        n -= 1
        answer.append(str)
        str = ''
    return answer


print(read7(3))
    