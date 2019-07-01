puts "Hello from ruby"

first_name = "Ringo"
last_name = "Starr"

full_name = "#{first_name} #{last_name} is a drummer"

puts full_name

teachers = ["Joanna", "Filipe", "Valerie", "Jack", "Morten"]

teachers.each do |teacher|
  puts teacher.upcase
end

def square(x)
  x * x
end

puts square(3)
