# Loopily General Package (general.lpk)

Core utility library for the Loopily programming language.

## Version
1.0.0

## Description
Provides built-in modules for:
- string manipulation
- arrays
- time utilities
- random helpers
- validation tools
- environment variables
- logging & debugging
- UI helpers
- table printing
- JSON utilities
- formatting
- date utilities
- math utilities
- filesystem wrappers
- path utilities

---

## Import Usage

```lol
import general

out(general.string.upper("hello"))
out(general.array.chunk([1,2,3,4], 2))
````

---

## Modules

### string

* trim(s)
* reverse(s)
* upper(s)
* lower(s)
* replace(s, a, b)
* split(s, d)

---

### array

* map(arr, fn)
* filter(arr, fn)
* reduce(arr, fn, init)
* flatten(arr)
* chunk(arr, size)
* shuffle(arr)

---

### time

* now()
* sleep(ms)

---

### random

* number(min, max)
* choice(arr)

---

### validate

* isNumber(v)
* isString(v)
* isEmpty(v)
* isEmail(v)

---

### env

* get(key)
* set(key, value)

---

### log

* info(...)
* warn(...)
* error(...)
* debug(...)

---

### debug

* type(v)
* inspect(v)

---

### ui

* box(text)

---

### table

* print(array)

---

### json

* parse(string)
* stringify(object)

---

### format

* currency(number, symbol)
* round(number)

---

### date

* format()
* fromNow(ms)

---

### mathExtra

* factorial(n)
* gcd(a, b)
* isPrime(n)

---

### fs

* read(path)
* write(path, data)
* exists(path)

---

### path

* join(...)
* resolve(...)

````

---

#  Example 1 — `test_general.lol`

```lol
import general

out(general.string.upper("loopily"))
out(general.string.reverse("general"))

let arr = [1, 2, 3, 4, 5]

out(general.array.chunk(arr, 2))
out(general.array.flatten([[1,2],[3,4]]))

out(general.random.number(1, 10))
out(general.validate.isEmail("test@mail.com"))

general.log.info("This is info log")

general.ui.box("Loopily General Package Loaded")
````

---

#  Example 2 — `demo_tools.lol`

```lol
import general

let nums = [10, 20, 30, 40]

out(general.array.reduce(nums, (a, b) => a + b, 0))

out(general.format.currency(99.5, "$"))

out(general.date.format())

out(general.mathExtra.factorial(5))

out(general.mathExtra.isPrime(17))

general.table.print(["Apple", "Banana", "Milk"])
```

---

#  Example 3 — `system_test.lol`

```lol
import general

general.env.set("MODE", "DEV")

out(general.env.get("MODE"))

general.log.warn("Warning system test")
general.log.error("Error simulation")

out(general.path.join("D:", "loopily", "packages"))
```
