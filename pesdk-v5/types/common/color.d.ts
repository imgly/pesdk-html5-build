/** A named color. */
export interface NamedColor {
    /**
     * color is represented as a number array which encodes as a single gray value or a RGB(A) tuple of floating point values where
     * each channel is defined in the range of `[0, 1]
     */
    color: [number, number, number, number];
    /**
     * The name of the color which is also used for accessibliblity.
     * name must be unique
     */
    name: string;
}
