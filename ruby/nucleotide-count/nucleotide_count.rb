class Nucleotide
  attr_accessor :histogram

  def initialize(sequence)
    @sequence = sequence.split("")
    @histogram = build_histogram()
  end

  def self.from_dna(sequence)
    Nucleotide.new(sequence)
  end

  def count(to_find)
    @sequence.reduce(0) do |acc, nucleotide|
      to_find == nucleotide ? acc + 1 : acc
    end
  end

  def build_histogram()
    counts = { 'A' => 0, 'T' => 0, 'C' => 0, 'G' => 0 }

    @sequence.each_with_object(counts) do |nucleotide, obj|
      if obj.key?(nucleotide)
        obj[nucleotide] += 1
      else
        raise ArgumentError.new
      end
    end
  end
end

