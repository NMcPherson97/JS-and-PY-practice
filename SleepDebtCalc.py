#Slightly more familiar with python. 
#Instead of writing if/else statement like SleepDebtCalc.js, create dictionary{day:ideal hours of sleep}
day_sleep_ideal = {
                    'Monday':8, 
                   'Tuesday':8,
                   'Wednesday':8,
                   'Thursday':8,
                   'Friday':8,
                   'Saturday':10,
                   'Sunday':10}

ideal_hours = list(day_sleep_ideal.values())
print(ideal_hours)

#Actual sleep hours dictionary
day_sleep_actual = {
                'Monday':3,
                'Tuesday':5,
                'Wednesday':4,
                'Thursday':8,
                'Friday':6,
                'Saturday':10,
                'Sunday':9}

actual_hours = list(day_sleep_actual.values())
print(actual_hours)
 

#Fix sleep_debt function. Keeps printing 'you need to get 5 more hours of sleep' regardless of argument.
def sleep_debt(day):
    for hours in ideal_hours:
        for h in actual_hours:
            if actual_hours[h:] == ideal_hours[hours:]:
                return 'You got enough sleep last night!'
            elif actual_hours[h:] < ideal_hours[hours:]:
                return f'You need to get {hours - h} more hours of sleep!'
            elif actual_hours[h:] > ideal_hours[hours:]:
                return 'You overslept!'
  

print(sleep_debt('Monday'))


   






