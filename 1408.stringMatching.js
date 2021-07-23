// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/

var stringMatching = function(words) {
    words.sort((a, b) => a.length - b.length)
    const result = []

    for(let i=0; i<words.length; i++) {
        const currentWord = words[i]
        
        for(let j=i+1; j<words.length; j++) {
            if(words[j].includes(currentWord)) {
                result.push(currentWord)
                break
            }
        }
    }
    return result
      
        
// let res = [];
// for (let word of words){
//     if (words.filter(w => w.includes(word)).length > 1){
//         res.push(word);
//     }
// }
// return res;

// words = ["mass","as","hero","superhero"]
// res = ['as', 'hero']
// word: mass => as => hero => superhero
//              w:  mass, as, hero, superhero
// word: mass        o     x   x       x      (no psuhing)
// word: as          o     o   x       x      (push 'as')  
// word: hero        x     x   o       o      (push 'hero')  
// word: superhero   x     x   x       o      (no pushing)  
        
// return  words.filter(n => words.some(h => h !== n && h.includes(n)));
};