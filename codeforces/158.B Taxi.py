
def taxiDrivers(n, arr):
   count = [0]*5

   for size in arr:
      count[size] += 1
   
   taxis = count[4]

   taxis += count[3]
   count[1] = max(0, count[1] - count[3])

   taxis += count[2] // 2

   count[2] %= 2

   if count[2]:
      taxis += 1
      count[1] = max(0, count[1] - 2)
   
   taxis += (count[1] + 3) // 4

   return taxis

def main():
   n = int(input())
   arr = list(map(int, input().split()))

   print(taxiDrivers(n, arr))

if __name__ == "__main__":
   main()
