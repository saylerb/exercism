class Robot
  attr_reader :name

  def initialize(number_generator = Random.new)
    @@names_taken = []
    @number_generator = number_generator
    @name = get_new_name
  end

  def get_new_name
    name = generate_name
    while @@names_taken.include?(name)
      name = generate_name
    end
    @@names_taken << name

    name
  end


  def generate_name
    number_generator.rand(65..90).chr +
      number_generator.rand(65..90).chr +
      number_generator.rand(0..9).to_s +
      number_generator.rand(0..9).to_s +
      number_generator.rand(0..9).to_s
  end

  def reset
    @name = get_new_name
  end

  private

  def number_generator
    @number_generator
  end

end

module BookKeeping
  VERSION = 2
end

