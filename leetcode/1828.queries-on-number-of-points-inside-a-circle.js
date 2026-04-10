var countPoints = function(points, queries) {
    let res = [];

    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        let [cx, cy, r] = queries[i];
        let r2 = r * r;

        for (let j = 0; j < points.length; j++) {
            let dx = points[j][0] - cx;
            let dy = points[j][1] - cy;

            if (dx * dx + dy * dy <= r2) {
                count++;
            }
        }

        res.push(count);
    }

    return res;
};

console.log(countPoints([[1, 3], [3, 3], [5, 3], [2, 2]], [[2, 3, 1], [4, 3, 1], [1, 1, 2]]))
