function romanToInteger(str){
	var dictionary = {
		"I" : 1,
		"V" : 5,
		"X" : 10,
		"L" : 50,
		"C" : 100,
		"D" : 500,
		"M" : 1000
	}
	if( dictionary.hasOwnProperty(str)) {
		return dictionary[str]
	}
	var result = 0
	for (var i = 0; i < str.length; i++){
		if(dictionary[str[i]] < dictionary[str[i+1]]){
			result -= dictionary[str[i]]
		} else {
			result += dictionary[str[i]]
		}
	}

	return result

}

romanToInteger("DM")
