const bits = [0b1, 0b10, 0b100, 0b1000, 0b10000, 0b100000, 0b1000000, 0b10000000];

export function bitRead(num: number, bitNum: number) {
    if (bitNum < 0 || bitNum > 7) return 0;
    return num & bits[bitNum];
}
