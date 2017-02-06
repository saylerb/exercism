class Phrase
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    clean_phrase(@phrase).each_with_object(Hash.new(0)) do |word, acc|
      acc[word] += 1
    end
  end

  def clean_phrase(phrase)
    check_quotations(multi_split(phrase.downcase))
  end

  def multi_split(phrase)
    phrase.gsub(/[^\w']/, " ").split
  end

  def check_quotations(words)
    words.map do |word|
      word.count("'") > 1 ? word.gsub("'", "") : word
    end
  end
end

module BookKeeping
  VERSION = 1
end
