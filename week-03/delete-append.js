function appendAndDelete(s, t, k) {
    //if we need to perform n operations (difference of length of both string) then k must be greater than or equal to n operation
    if (Math.abs(s.length - t.length) > k) return 'No'
    //we have to go half (or plus 1; if k is odd) times backward 
    let backwardOps = k % 2 === 1 ? parseInt(k / 2) + 1 : k / 2
    //and take the substrings till the end from s and t both
    let toBeReplaced = s.substr(s.length - backwardOps)
    let toBeReplacedWith = t.substr(s.length - backwardOps)
    //then replace above extracted substring from s with of t
    let replaced = s.replace(toBeReplaced, toBeReplacedWith)
    //then check if s equals t
    if (replaced === t) return 'Yes'
    return 'No'
}

// console.log(appendAndDelete('hackerhappy', 'hackerrank', 9))
// console.log(appendAndDelete('aba', 'aba', 7))
// console.log(appendAndDelete('ashley', 'ash', 2))

//3 test cases got failed