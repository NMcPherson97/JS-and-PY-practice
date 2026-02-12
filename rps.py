#Rock, paper, scissors game
import random

get_user_choice = input('Pick rock, paper, or scissors: ')
def user_choice():
    choice = get_user_choice
    if (choice == choice.upper()) or (choice == choice.title()):
        print(f"User's choice: {choice.lower()}")
    elif choice != get_user_choice:
        print("Invalid entry")
    else:
        print(f"User's choice: {choice}")
    

    

def comp_choice():
    choice = ['rock','paper','scissors']
    return random.choice(choice)

print(f"Computer's choice: {comp_choice()}")

#Fix winner control flow
def winner():
    user_choice()
    comp_choice()
    if user_choice == comp_choice:
        return "It's a tie!"
    elif (user_choice == 'rock') & (comp_choice == 'paper'):
        return "Computer Wins"
    elif(user_choice=='paper') & (comp_choice=='scissors'):
        return "Computer Wins"
    elif(user_choice=='scissors') & (comp_choice=='rock'):
        return "Computer Wins"
    else:
        return "User Wins"

print(winner())

