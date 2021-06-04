var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"]

var even_names = []
var odd_names = []

for (var i=0; i < names_array.length;i++){
    current_name = names_array[i]
    count = 0
    for (var j = 0; j < current_name.length; j++) {
        if (current_name[j] != ' ') {
            count += 1
        }
    }

    if (count % 2 === 0) {
        even_names.push(current_name)
    } else {
        odd_names.push(current_name)
    }
}

console.log(even_names)
console.log(odd_names)

for (var i = 0; i < even_names.length; i++) {
    current_name = even_names[i]
    even_names[i] = "b" + current_name.substring(1)
}

for (var i = 0; i < odd_names.length; i++) {
    current_name = odd_names[i]
    odd_names[i] = current_name.substring(0, current_name.length-1) + "c"
}

console.log(even_names)
console.log(odd_names)