# [
#   [1, 2],
#   [3, 4]
# ]
# Rotated →

# [
#   [2, 4],
#   [1, 3]
# ]
# Example 2.
# [
#   [1, 1, 5, 9, 9],
#   [2, 2, 6, 0, 0],
#   [3, 3, 7, 1, 1],
#   [4, 4, 8, 2, 2],
#   [5, 5, 9, 3, 3]
# ]
# Rotated →

# [
#   [9, 0, 1, 2, 3],
#   [9, 0, 1, 2, 3],
#   [5, 6, 7, 8, 9],
#   [1, 2, 3, 4, 5],
#   [1, 2, 3, 4, 5]
# ]

# def rotate_image(img):
#     rotated_image = [[] for x in range(len(img))]
#     for i in range(len(img)):
#         for j in range(len(img[i])):
#           rotated_image[len(img) - j - 1].append(img[i][j])
#     return rotated_image

def rotate_image(img):
    rotated_image = []
    for row in reversed(list(zip(*img))):
        rotated_image.append(list(row))
    return rotated_image

image = [
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
]

rotated_img = rotate_image(image)
for i in rotated_img:
    print(i)

# image in this case is just an array of arrays
# create num of empty arrays equal to length of img
# iterate through the image
# This is how I was able to visualize the rotation:

# ```Input:
#   1, 1, 5, 9, 9
#   2, 2, 6, 0, 0
#   3, 3, 7, 1, 1
#   4, 4, 8, 2, 2
#   5, 5, 9, 3, 3

# Output:
#   9, 0, 1, 2, 3
#   9, 0, 1, 2, 3
#   5, 6, 7, 8, 9
#   1, 2, 3, 4, 5
#   1, 2, 3, 4, 5

# Each element's starting index and ending index (after rotation):
#   0,0 ➜ 4,0
#   0,1 ➜ 3,0
#   0,2 ➜ 2,0
#   0,3 ➜ 1,0
#   0,4 ➜ 0,0

#   1,0 ➜ 4,1
#   1,1 ➜ 3,1
#   1,2 ➜ 2,1
#   1,3 ➜ 1,1
#   1,4 ➜ 0,1

#   2,0 ➜ 4,2
#   2,1 ➜ 3,2
#   2,2 ➜ 2,2
#   2,3 ➜ 1,2
#   2,4 ➜ 0,2

# ...and so on```
# Each of those correspond to this operation: `rotated_image[len(img) - j - 1].append(img[i][j])`