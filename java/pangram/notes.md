## Solution notes

### Iteration 1
* String manipulation in java is hard!
* remember `==` compares object equality in java (not value)
* To compare the equality of strings, use the String.equals()

### Iteration 2
* `String[]` does not have an iterator (you can't get an iterator for a primitive array
* `Arrays.asList()` returns a *fixed-size list*, so you can't add or remove from it
* I'm using an iterator here, but that's no better than the nested for loops

## TODO:
* Current solution has nested for loops (bad!)
* Can I refactor so that I pass over the string only once?
