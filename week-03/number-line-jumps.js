function kangaroo(x1, v1, x2, v2) {
    let isFound = false
    //if kangaroo 2 is ahead of kangaroo 1 and moving with faster velocity
    //then they both will never meet
    if(x2 > x1 && v2 > v1) {
        return 'NO'
    }
    //add velocity in position of both kangaroos until first one gets ahead of the second. 
    while(x1 <= x2) {
        x1 += v1;
        x2 += v2;
        if(x1 === x2) {
            isFound = true
            break;
        }
    };
    if(isFound) return 'YES'
    return 'NO'
}