/**
 * Compares two values at left and right indices
 * and return if left is greater than the right
 */
declare type Compare = (leftIndex: number, rightIndex: number) => boolean
/**
 * Swap two values given left and right indices
 * Common 'swap' function among collections
 * which satisfies "Sortable Interface"
 */
declare type Swap = (leftIndex: number, rightIndex: number) => void