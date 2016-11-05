defmodule Bob do
  def hey(input) do
    cond do
      String.strip(input) == "" ->
        "Fine. Be that way!"

      String.match?(input, ~r/\?$/) ->
        "Sure."

      String.match?(input, ~r/[A-Z]{2,}|[А-Я]/) ->
        "Whoa, chill out!"

      true ->
        "Whatever."
    end
  end
end
