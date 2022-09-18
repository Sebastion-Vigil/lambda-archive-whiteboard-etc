# wow so I remember this
from sys import argv, exit

if len(argv) < 2:
    print("Usage: python chronal_calibration input_file.txt")
    exit(0)


test_input = [+1, -2, +3, +1]


def chronal_calibration(frequencies):
    """
    Calculates proper frequency
    Expects argv[1] to be text file
    containing frequencies
    """

    freq_buffer = []
    f = open(frequencies, 'r')
    for i in f.readlines():
        freq_buffer.append(int(i.strip()))
    initial_frequency = 0
    for i in range(len(freq_buffer)):
        initial_frequency += freq_buffer[i]
    print(initial_frequency)


# chronal_calibration(argv[1])

def first_repeat_freq(frequencies):
    freq_buffer = []
    f = open(frequencies, 'r')
    for i in f.readlines():
        freq_buffer.append(int(i.strip()))
    initial_frequency = 0
    observed = {}
    while True:
        for i in range(len(freq_buffer)):
            if str(initial_frequency) not in observed:
                observed[str(initial_frequency)] = 1
                initial_frequency += freq_buffer[i]
            else: 
                return initial_frequency

print(first_repeat_freq(argv[1]))

