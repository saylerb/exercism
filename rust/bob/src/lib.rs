pub fn reply(input: &str) -> String {

    if input.is_empty() {
        "Fine. Be that way!".to_string()
    } else if input.chars().nth(input.len() - 1).unwrap() == '?' {
        "Sure.".to_string()
    } else if input.to_uppercase() == input {
        "Whoa, chill out!".to_string()
    } else {
        "Whatever.".to_string()
    }

}
