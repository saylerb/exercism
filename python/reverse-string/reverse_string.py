def reverse(text):
    stack = list(text)
    result = ""

    while len(stack) > 0:
        result += stack.pop()

    return result
