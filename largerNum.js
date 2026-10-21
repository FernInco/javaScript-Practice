function findLarger (n1,n2) {
    if ( n1 > n2 ) {
        return n1;
    } else if ( n2 > n1 ) {
        return n2;
    } else {
        return 'Both numbers are equal';
    }
}
console.log(findLarger(20, 20));