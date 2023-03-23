function changeEnough(change, amountDue) {
	
    return change[0]*.25 + change[1]*.10 + change[2]*.05 + change[3]*0.01 >= amountDue
}