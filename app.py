



recursive_call = 0

def fibonacci(n):
    global recursive_call
    recursive_call += 1
    if n <= 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n - 2)

# DYNAMIC PROGRAMMING WAY WITH LESS RECURRSION USING MEMOIZATION

m_recursive_call = 0

def m_fibonacci(n,memo = {}):
    global m_recursive_call
    m_recursive_call += 1
    if n in memo:
        return memo[n]
    if n <= 1:
        return 1
    else:
        memo[n] = m_fibonacci(n-1,memo) + m_fibonacci(n - 2,memo)
        return memo[n]



print('\n\nTRANDITIONAL WAY\n')
for number in range(8):
    fib = fibonacci(number)
    print(f"Fibonacci of {number} is {fib} and the number of recurssion or calls is {recursive_call}\n")




print('DYNAMIC AND EFFICIENT  WAY\n\n')
for number in range(8):
    fib = m_fibonacci(number)
    print(f"Fibonacci of {number} is {fib} and the number of recurssion or calls is {m_recursive_call}\n")








