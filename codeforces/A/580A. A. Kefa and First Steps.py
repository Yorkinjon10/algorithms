from bisect import bisect_right

def longest_non_decreasing_subsequence(arr):
    tails = []
    for num in arr:
        idx = bisect_right(tails, num)
        if idx == len(tails):
            tails.append(num)
        else:
            tails[idx] = num
    return len(tails)

# Codeforces I/O handling
def main():
    n = int(input())
    arr = list(map(int, input().split()))
    print(longest_non_decreasing_subsequence(arr))

if __name__ == "__main__":
    main()
