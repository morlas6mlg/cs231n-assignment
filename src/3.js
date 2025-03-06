import numpy as np

def get_random_code(n=5):
    """
    Generates a random string of length n
    """
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return ''.join(np.random.choice(alphabet, size=n))
