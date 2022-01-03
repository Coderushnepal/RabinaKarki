#Write a short program that prints each number from 1 to 100 on a new line. 
 #For each multiple of 3, print "Fizz" instead of the number. 
 
for number in range(1,101):
  if number%3==0:
    print("Fizz")  
  else:
    print(number)  