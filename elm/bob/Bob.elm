module Bob exposing (..)

import Regex
import String
import Char

hey : String -> String
hey input =
  if String.isEmpty (String.trim input) then
    "Fine. Be that way!"

  else if Regex.contains (Regex.regex "\\d?\\?$") input && not (Regex.contains (Regex.regex "[A-Z]{4,}") input) then
    "Sure."

  else if Regex.contains (Regex.regex "[A-Z]{4,}|[A-Z]{2,}[\\!$]") input then
    "Whoa, chill out!"

  else
    "Whatever."
