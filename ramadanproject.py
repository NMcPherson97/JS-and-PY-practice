fasting_score = 0
f_to_m_hrs = range(7, 19)

def fast_difficulty():
    if f_to_m_hrs == 8:
        fasting_score += 1
    elif f_to_m_hrs >= 12: 
        fasting_score += 3
    else:
        return fasting_score
    
print(fast_difficulty())
