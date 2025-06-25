n = int(input())
teams = []

# Read all teams' home and guest uniform colors
for _ in range(n):
    home, guest = map(int, input().split())
    teams.append((home, guest))

count = 0

# Check all possible games
for host in range(n):
    for guest in range(n):
        if host == guest:
            continue  # Skip if the same team
        host_home = teams[host][0]
        guest_guest = teams[guest][1]

        if host_home == guest_guest:
            count += 1

print(count)
