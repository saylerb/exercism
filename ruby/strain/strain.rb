class Array
  def keep
    result = []
    i = 0
    while i < size
      number = at(i)
      if yield number
        result.append(number)
      end
      i += 1
    end
    result
  end

  def discard
    result = []
    i = 0
    while i < size
      number = at(i)
      if not yield number
        result.append(number)
      end
      i += 1
    end
    result
  end
end
