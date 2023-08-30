

export function dealPositions(positions) {
    if (!positions) return null;
    if (Array.isArray(positions)) return [...positions];
    let result = String(positions)
    let clPositions = result.split(';').filter(i => i).map(i => i.split(',')).filter(i => i)
    return clPositions
}