module.exports = function reverse (n) {
    var q=Math.abs(n)
    let o=q.toString().split("")
    o.reverse()
    if (o[0]==0) {while (o[0]==0) {o.shift()}};
    {var c=Number(o.join(""))}
    return c
}
