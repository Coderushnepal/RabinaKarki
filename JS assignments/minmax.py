
"""
Find the Smallest and Biggest Numbers  
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
"""

arr = []
num = int(input("Enter size of array you want: "))
for x in range(num):
    x=int(input("Enter element of array : "))
    arr.append(x)
largest = arr[0]
smallest = arr[0]
for i in range(num):
    if arr[i]>largest:
        largest = arr[i]
    if arr[i]<smallest:
        smallest = arr[i]
        
print(f"Largest element: {largest}")
print(f"Smallest element: {smallest}") 