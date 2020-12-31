//n -> prisoners
//m -> sweets (inclusive)
//s -> starting chair
function saveThePrisoner(n, m, s) {
    //if there's only 1 sweet then starting prisoner/chair (s) gets the only sweet
    if (m === 1) return s
    //add number of sweets (one less which is already given to strting prisoner/chair (s)) into starting prisoner/chair (s) and take modulus with total number of prisoners
    const currentChair = (s + (m - 1)) % n
    //modulus will be 0 if last chair (currentChair) is equal to the starting prisoner/chair (s) else currentChair will be the one to get last sweet
    return currentChair === 0 ? s : currentChair
}

console.log(saveThePrisoner(3, 7, 3))
//7 test cases got failed