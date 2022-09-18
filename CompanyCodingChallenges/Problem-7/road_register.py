# Once upon a time, in a kingdom far, far away, there lived a King Byteasar I. As a kind and wise ruler, he 
# did everything in his (unlimited) power to make life for his subjects comfortable and pleasant. 
# One cold evening a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union
# had started enforcing traffic laws! In order to not lose his membership in the Union, King Byteasar decided he
#  must do the same within his kingdom. But what would the citizens think of it#
# The king decided to start introducing the changes with something more or less simple: change all the roads in 
# the kingdom from two-directional to one-directional (one-way). He personally prepared the roadRegister of the 
# new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams, 
# i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who 
# he has decreed must check his calculations#
# Write a function called newRoadSystem that determines if all cities have the same number of incoming and outgoing
# roads.#
# take a look at the matrix below
# i represents cities
# j represents whether a road to that 
# city exists. For example at index 0 city 0 has a
# road that leads to city 1
roadRegister = [[False, True,  False, False],
                [False, False, True,  False],
                [True,  False, False, True ],
                [False, False, True,  False]]; # should return false


def new_road_system(roads):
    roads_in = 0
    roads_out = 0
    for i in range(len(roads)):
        for j in range(len(roads[i])):
            if roads[i][j]:
                roads_out += 1
            if roads[j][i]:
                roads_in += 1
        if roads_out != roads_in:
            return False
        roads_in = 0
        roads_out = 0
    return True

print(new_road_system(roadRegister))