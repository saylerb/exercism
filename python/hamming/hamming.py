def distance(one, two):
    result = 0
    for i in range(0, len(one)):
        if one[i] != two[i]:
            result += 1
    return result
