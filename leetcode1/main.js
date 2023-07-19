function romantoInt(s) {
    var value = 0;
    var count = 0;
    var five = 5;
    var ten = 10;
    var fifty = 50;
   
  for(var i = 0; i < s.length; i++) {
      var roman = s[i];
      if(roman === 'I') {
          count++;
          value = count;
      } else if (roman === 'V') {
          five -= count;
          value = five; 
      } else if (roman === "X") {
          ten -= count;
          value = ten;
      } else if (roman === "L") {
          value = fifty;
      }
  }
  return value;
};

function isPalindrome(x) {
    let y=0;
    let num = x;

    while(num > 0) {
        let eachInt = num % 10;
        console.log("Each int", eachInt);
        y = y*10 + eachInt;
        console.log("y", y);
        num = Math.floor(num/10);
        console.log("num", num);
    }
    if(x==y) {
        return true;
    } else {
        return false;
    }
};

function twoSum(nums, target) {
    var output = {};
    for(var i = 0; i < nums.length; i++) {
        var testValue = nums[i];
        if(output[target-testValue] >= 0) {
            return [output[target-testValue], i];
        } else {
            output[testValue] = i;
        }
    }
}


var twoSumWithMap = function (nums, target) {
    const map = new Map();
    console.log("initial map", map);
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log("complement", complement);
        if(map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
}


function test() {
    return twoSumWithMap([1,4,2,1,7,9], 9);
}

/*
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement))
            return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}; */

var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let start = 0;
    let maxLength = 0;
    
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(i == 4)
        console.log(i);

        if(map.has(char)) {
            start = Math.max(map.get(char) + 1, start);
        } else {
            map.set(char, i);          
            maxLength = Math.max(i - start + 1, maxLength);
        }
    }
    return maxLength;
};

var lengthOfLongestSubstring2 = function(s) {
    var output = 0;
    for (var i = 0; i < s.length; i++) {
      var word = s[i];
      for (var j = i + 1; j < s.length; j++) {
        if (word.indexOf(s[j]) !== -1) break;
        else word += s[j]
      }
      output = Math.max(word.length, output);
    }
    return output;
  };

  var lengthOfLongestSubstring3 = function(s) {
    var start = 0;
    var end = 0;
    var maxLength = 0;
   
    var set = new Set();

    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, set.size);
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};

/*
var isValid = function(s) {
    const open = new Map();
    open.set("(", 0);
    open.set("{", 1);
    open.set("[", 2);
    
    const closed = new Map();
    closed.set(")",0);
    closed.set("}", 1);
    closed.set("]", 2);

    let i = 0;
    while(i < s.length) {
        if(open.get(s[i]) === closed.get(s[i+1])) {
            return true;
            i += 2;
        } else {
            return false;
        }
    }
};*/

var isValid = (s) => {
    let stack = [];
   for (let idx = 0; idx < s.length; idx++) {
       if (s[idx] == '{') {
           stack.push('}');
       } else if (s[idx] == '[') {
           stack.push(']');
       } else if (s[idx] == '(') {
           stack.push(')');
       }
       else if (stack.pop() !== s[idx]) {
           return false;
       }
       console.log(stack);
   }
   return !stack.length;
};

var isValid2 = (s) => {
    let closed = [];
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char === '{') {
            closed.push('}');
        } else if (char === '[') {
            closed.push(']');
        } else if (char === '(') {
            closed.push(')');
        } else {
            let current = closed.pop();
            console.log("current", current);
            if(current !== char) {
                 return false;
            }
        }
    }
    return !closed.length;
}

var longestCommonPrefix = (strs) => {

    if(strs.length === 0) {
        return '';
    }
    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
        let string = strs[i];
        while(string.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === '') {
                return '';
            }
        }       
    }
    return prefix;
};

var longestCommonPrefix2 = (strs) => {
    // sort the array because its rearrange alphabetical order
   strs.sort();


  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]){
return strs[0].substr(0, i);
    } 
  }

  return strs[0];  
};

var mergeTwoLists = (list1, list2) => {
    const newArr = list1.concat(list2);
    newArr.sort();
    return newArr;
};

var removeDuplicates = (nums) => {
    let i = 0;
    while(i < nums.length-1) {
        if(nums[i] < nums[i+1]) {
            i++;
        } else {
            nums.splice(i, 1);
        }
    }
    return nums;
};