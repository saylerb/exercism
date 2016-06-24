pub fn raindrops(number: i32) -> String {
    let mut result = "".to_string();

    if number % 3 == 0 || number % 5 == 0 || number % 7 == 0 {
        if number % 3 == 0 { result.push_str("Pling") } 
        if number % 5 == 0 { result.push_str("Plang") } 
        if number % 7 == 0 { result.push_str("Plong") } 
    } else {
        result.push_str(&*number.to_string())
    }
    result
}
