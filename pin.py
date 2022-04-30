# a function that generate 100 alphanumeric characters with length of 10 and write it to a txt file
import random
def generate_names():
    # a list to store the names
    names = []
    # a for loop to generate the names
    for i in range(1000):
        # a string to store the name
        name = ""
        # a for loop to generate the name
        for j in range(9):
            # a random number to generate the character
            number = random.randint(0,9)
            # a if statement to check if the character is a number
            if number == 0:
                # add the character to the name
                name += chr(random.randint(48,57))
            elif number == 1:
                # add the character to the name
                name += chr(random.randint(65,90))
            elif number == 2:
                # add the character to the name
                name += chr(random.randint(97,122))
            else:
                # add the character to the name
                name += chr(random.randint(97,122))
        # add the name to the list of names
        names.append(name)
    # return the list of names
    return names
# print(generate_names())

# a function that add A to the start of the name
def add_A(names):
    # a list to store the names
    names_with_A = []
    # a for loop to add A to the start of the name
    for i in names:
        # add A to the start of the name
        names_with_A.append("("+"'"+"E"+i+"'"+")")
    # return the list of names with A
    return names_with_A
# print(add_A(generate_names()))
# a function that add a , to the end of the name
def add_comma(names_with_A):
    # a list to store the names with A
    names_with_A_comma = []
    # a for loop to add a , to the end of the name
    for i in names_with_A:
        # add a , to the end of the name
        names_with_A_comma.append(i+",")
    # return the list of names with A and comma

    return names_with_A_comma
# print(add_comma(add_A(generate_names())))


# put the list of names in a txt file
with open("vote1.txt","w") as f:
    for i in add_comma(add_A(generate_names())):
        f.write(str(i)+"\n")

