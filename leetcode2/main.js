const removeElement = function(nums, val) {
    const filter = nums.filter(value => value !== val);
    return filter;
};

var removeElement2 = function(nums, val) {
    var j = 0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]!=val)
        {
            nums[j++] = nums[i];
        }
    }
    return $.ajax({
        type: "method",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });;
};

var strStr = function(haystack, needle) {
    let occur = false;
    for(let i = 0; i < haystack.length; i++) {
        let compare = haystack.slice(i, i + needle.length);
        if(compare === needle) {
            occur = true;
            return i;
        } 
    }
    if(occur === false) {
        return -1;
    }
};

var strStr2 = function(haystack, needle) {
    return haystack.indexOf(needle);
}

