"""Generate sales report showing total melons each salesperson sold."""

# initialize emoty lists to store salespeople and melons sold 
salespeople = []
melons_sold = []

# open the 'sales-report.txt' file for reading 
f = open('sales-report.txt')

# iterate through each line in the file 
for line in f:

    # removes any trailing whitepsace caracters
    line = line.rstrip()
    # split the line into entries using | as the delimiter
    entries = line.split('|')

    # extract the saleperson's name from the first element of entries
    salesperson = entries[0]
    # convert the number of melons sold from string to integer 
    melons = int(entries[2])

    # check if the salesperon is already in the salespeople list 
    if salesperson in salespeople:
        #find the index of the salesperson in the  list 
        position = salespeople.index(salesperson)
        # add the number of melons sold to the corresponding postiton in melon_sold list
        melons_sold[position] += melons

    # else statement 
    else:
        #if the salesperon isnt in the salespeople we'll append it, same for melon
        salespeople.append(salesperson)
        melons_sold.append(melons)

# iterate though the salespeople list using index 
for i in range(len(salespeople)):
    # print each saleperson's name and the total melons they sold 
    print(f'{salespeople[i]} sold {melons_sold[i]} melons')

# close the file 
f.close