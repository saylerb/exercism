def reverse(text):
    letters = list(text)
    stack = []

    while len(letters) > 0:
        stack += letters.pop()

    return "".join(stack)
