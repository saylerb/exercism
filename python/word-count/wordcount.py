from collections import defaultdict
import string

def word_count(word):

    translator = string.maketrans(string.punctuation, " " * 32)
    no_punctuation = word.translate(translator)

    arr = " ".join(no_punctuation.split()).split()

    res = defaultdict(lambda:0, {})

    for word in arr:
        res[word.lower()] += 1
    return res
