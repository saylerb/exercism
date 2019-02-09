class Nucleotide
  attr_accessor :histogram

  def initialize(sequence)
    @sequence = sequence.split("")
    @histogram = build_histogram()
  end

  def self.from_dna(sequence)
    new(sequence)
  end

  def count(nucleotide)
    @sequence.count(nucleotide)
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
