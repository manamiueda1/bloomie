// 1656. Design an Ordered Stream
// https://leetcode.com/problems/design-an-ordered-stream/

/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.pointer = 0
    this.list = []
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let chunk = []
    this.list[idKey - 1] = value
    while(this.list[this.pointer]) {
      chunk.push(this.list[this.pointer])
      this.pointer++
    }
    return chunk
};

// result: [null, [], ['aaaa'], ['bbbb', 'cccc'], [], ['dddd', 'eeee']]

// idKey, value, pointer, chunk               list                 
// null
//  3     'cccc'    0      []                [null, null,'cccc'] 
// 1      'aaaa'    0 -> 1 ['aaaa']           ['aaaa', null, 'cccc'] 
// 2      'bbbb'    1 -> 2 ['bbbb', 'cccc']   ['aaaa', 'bbbb', 'cccc']  
// 5      'eeee'    3      []                 ['aaaa', 'bbbb', 'cccc', null, 'eeee']
// 4       'dddd'   3 -> 4 ['dddd', 'eeee']   ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee']