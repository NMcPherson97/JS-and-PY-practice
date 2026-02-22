#Slightly more familiar with python. 
#Instead of writing if/else statement like SleepDebtCalc.js, create dictionary{day:ideal hours of sleep}
day_sleep_ideal = {'Monday':8, 
                   'Tuesday':8,
                   'Wednesday':8,
                   'Thursday':8,
                   'Friday':8,
                   'Saturday':10,
                   'Sunday':10}

#Actual sleep hours dictionary
day_sleep_actual = {
    'Monday':3,
    'Tuesday':5,
    'Wednesday':4,
    'Thursday':8,
    'Friday':6,
    'Saturday':10,
    'Sunday':9}


def sleep_debt(day):
    if day_sleep_actual[day] == day_sleep_ideal[day]:
        return 'You got the perfect amount of sleep'
    elif day_sleep_actual[day] > day_sleep_ideal[day]:
        return 'You got more sleep than needed'
    else:
        return f'You need to get {day_sleep_ideal[day] - day_sleep_actual[day]} more hours of sleep'
            
print(sleep_debt('Tuesday'))



