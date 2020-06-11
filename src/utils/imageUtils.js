export function gamma(r, g, b) {
    return Math.pow(
        (Math.pow(r, 2.2) + Math.pow(1.5 * g, 2.2) + Math.pow(0.6 * b, 2.2)) /
            (1 + Math.pow(1.5, 2.2) + Math.pow(0.6, 2.2)),
        1 / 2.2
    );
}
