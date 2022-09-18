def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
    if (value1 >= value2 or weight2 > maxW) and weight1 <= maxW:
        return value1
    if weight2 <= maxW:
        return value2
    return 0


def knapsackLight(value1, weight1, value2, weight2, maxW):
    
    max_value = 0
    high_value_used = False
    low_value_used = False
    high_value = max(value1, value2)
    low_value = min(value1, value2)
    high_value_weight = weight1 if value1 == high_value else value2
    low_value_weight = weight1 if value1 != high_value else value2
    
    while maxW >= low_value_weight:
        
        if maxW >= high_value_weight and not high_value_used:
            max_value += high_value
            maxW -= high_value_weight
            high_value_used = True
            
        if not high_value_used:
            if maxW >= low_value_weight:
                max_value += low_value
                low_value_used = True
                
        if high_value_used and not low_value_used:
            if maxW >= low_value_weight:
                max_value += low_value
                maxW -= low_value_weight
                low_value_used = True
                
    return max_value             
                
            
                    
        
