// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {
    if (n === 1) return 1;
	let seen = new Array(n);
	seen[1] = 1;
    seen[2] = 2;
	for (let i = 3; i <= n; i++) {
		seen[i] = seen[i -1] + seen[i -2];
	}
	return seen[n];
};