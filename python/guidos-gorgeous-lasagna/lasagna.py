"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(elasped_bake_time) -> int:
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - elasped_bake_time

def preparation_time_in_minutes(number_of_layers) -> int:
    """Calculate the preparation time in minutes

    :param number_of_layers: int - the number of lasagna layers
    :return: int - total preparation time

    """

    return PREPARATION_TIME * number_of_layers

def elapsed_time_in_minutes(number_of_layers, elasped_bake_time):
    """Calculate the total elapsed time

    :param number_of_layers: int
    :param elasped_bake_time: int

    :return: int - total elapsed time
    """

    return preparation_time_in_minutes(number_of_layers) + elasped_bake_time
