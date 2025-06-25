from bisect import bisect_right

def find_unique_evenness(arr):
    even = [i+1 for i, num in enumerate(arr) if num % 2 == 0]
    odd = [i+1 for i, num in enumerate(arr) if num % 2 != 0]
    
    return even[0] if len(even) == 1 else odd[0]

# Codeforces I/O handling
def main():
    n = int(input())
    arr = list(map(int, input().split()))
    print(find_unique_evenness(arr))

if __name__ == "__main__":
    main()
