var array = [ "Retta", "Vern", "Marica", "Cyrus", 
    "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ]

var longest_name = ""

for (var i=0; i<array.length;i++){
    current_name = array[i]
    if (current_name.length > longest_name.length) {
        longest_name = current_name
    }
}

console.log(longest_name)