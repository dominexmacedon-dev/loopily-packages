import general

let nums = [1, 2, 3, 4, 5]

out(general.array.chunk(nums, 2))

out(
  general.array.flatten([
    [1, 2],
    [3, 4]
  ])
)

out(general.random.number(1, 100))

out(
  general.random.choice([
    "Apple",
    "Banana",
    "Milk"
  ])
)

out(
  general.mathExtra.factorial(5)
)

out(
  general.mathExtra.isPrime(17)
)
