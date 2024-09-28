/**
 * Color type
 * @interface
 * @name Color
 * @property {string} a - Absolute color(used for foreground and background)
 * @property {string} m - Main color
 * @property {string} v - Variant color
 * @property {string} c - Contrast color
 * @property {string} cv - Variant contrast color
 */
export interface Color {
	a?: string;
	m?: string;
	v?: string;
	c?: string;
	cv?: string;
}
