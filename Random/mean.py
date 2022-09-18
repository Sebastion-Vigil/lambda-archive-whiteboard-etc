import statistics
from math import ceil
def meanMedianMode(numbers):
  numbers.sort()
  score = 0
  for i in range(len(numbers)):
    score += numbers[i]
  mean = score / len(numbers)
  median = 0
  if len(numbers) % 2 == 0:
    left_middle = numbers[int(len(numbers)/2)-1]
    right_middle = numbers[int(len(numbers)/2)]
    median = int(left_middle + right_middle / 2)
    
  else:
    median = numbers[int(ceil(len(numbers)/2)-1)]
  
  mode = statistics.mode(numbers)
  answer = {
    'mean': mean,
    'median': median,
    'mode': mode
  }
  
  return answer


x = [1,2,6,7,8,9,3,4,5,10,10]
y = meanMedianMode(x)

print(y)