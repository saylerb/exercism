module Bob
  def self.hey(remark)
    if remark.strip.empty?
      'Fine. Be that way!'
    elsif remark.upcase == remark && remark.match(/[A-Z]+/)
      "Whoa, chill out!"
    elsif remark[-1] == "?"
      "Sure."
    else
      "Whatever."
    end
  end
end
