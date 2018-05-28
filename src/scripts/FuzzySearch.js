const FuzzySearch = {

	searchThrough: (list,needle) => {
		let match = false;
		let split  = [];
		let secondSplit = [];
		for (let value in list) {
		    if (value == "date") {
	    		split = list[value].split('-');
	    		secondSplit = split[2].split('T');
    			match = isMatch(needle,split[0]) || isMatch(needle,split[1]) || isMatch(needle,secondSplit[0]) || isMatch(needle,secondSplit[1]);
    			if(match) break;
    			else continue;
		    }

	    	match = isMatch(needle,list[value]);
	    	if(match) {
	    		break;
	    	} else {
	    		continue;
	    	}
		}	
		return match;
	}
};

const isMatch = (needle,haystack) => {
  const hlen = haystack.length;
  const nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }

  if (nlen === hlen) {
    return needle === haystack;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

export default FuzzySearch