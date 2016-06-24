import string

def is_pangram(text):
    LETTERS = string.ascii_lowercase

    text = text.lower()

    count = 0

    for char in LETTERS:
        if char in text:
            count += 1

    if count == len(LETTERS):
        return True
    else:
        return False



    
