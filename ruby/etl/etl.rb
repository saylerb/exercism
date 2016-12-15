class ETL
  def self.transform(old)
    old.each_with_object({}) do |(score, letters_array), acc|
      letters_array.each do |letter|
        acc[letter.downcase] = score
      end
    end
  end
end
