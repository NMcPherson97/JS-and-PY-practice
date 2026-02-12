#Slightly more familiar with python. 
#Instead of writing if/else statement like SleepDebtCalc.js, create dictionary{day:ideal hours of sleep}
day_sleep_ideal = {'Monday':8, 
                   'Tuesday':8,
                   'Wednesday':8,
                   'Thursday':8,
                   'Friday':8,
                   'Saturday':10,
                   'Sunday':10}

#Create function to iterate (ideal)sleep hour values 
def get_sleep_hours(day):
    for hours in day_sleep_ideal.values():
        return hours

#Actual sleep hours dictionary
day_sleep_actual = {
    'Monday':3,
    'Tuesday':5,
    'Wednesday':4,
    'Thursday':8,
    'Friday':6,
    'Saturday':10,
    'Sunday':9}


#Fix sleep_debt function. Keeps printing 'you need to get 5 more hours of sleep' regardless of argument.
def sleep_debt(day):
    sleep_actual = list(day_sleep_actual.values())
    sleep_ideal = list(day_sleep_ideal.values())
    for hours in sleep_actual:
        for h in sleep_ideal:
            if hours == h:
                return "You got enough sleep!"
            elif hours <= h:
                return f"You need to get {h - hours} more hours of sleep!"
            elif h > hours:
                return f"You overslept by {hours - h} hours."
# Nested loop attempt 1:
    # for hours in day_sleep_actual.values():
    #     for h in day_sleep_ideal.values():
    #         if hours == h:
    #             return "Congratulations on getting enough sleep!"
    #         elif hours <= h:
    #             return f"You need to get {h - hours} more hours of sleep!"
    #         elif hours > h:
    #             return f"You overslept by {h} hours!"



