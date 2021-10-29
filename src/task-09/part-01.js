const isTriangleRight = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    const sorted = [a,b,c].sort((a, b) => a-b);
    return sorted[2] ** 2 === sorted[0] ** 2 + sorted[1] ** 2
};

export {
    isTriangleRight,
};
