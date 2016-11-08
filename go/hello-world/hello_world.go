package hello

const testVersion = 2

func HelloWorld(s string) string {
    if  len(s) > 0 {
        return "Hello, " + s + "!"
    } else {
        return "Hello, World!"
    }
}
