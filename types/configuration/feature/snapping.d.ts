declare class PositionSnapping {
    /**
     * Whether sprites should snap to specific positions during pan interactions.
     * This switch enables or disables position snapping.
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    enabled?: boolean;
    /**
     * This threshold defines the distance of a pan gesture where snapping at a snap point occurs.
     * It is measured in pixels.
     * @example // Defaults to:
     * ```
     * 20
     * ```
     */
    threshold?: number;
    /**
     * If enabled a sprite's center snaps to the horizontal line through the center of the edited image.
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    snapToHorizontalCenter?: boolean;
    /**
     * If enabled a sprite's center snaps to the vertical line through the center of the edited image.
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    snapToVerticalCenter?: boolean;
    /**
     * The left side of a sprite's bounding box snaps to a vertical line which is shifted by this value
     * from the left side of the edited image towards its center. This value is measured in normalized
     * coordinates relative to the smaller side of the edited image.
     * If this value is explicitly set to `null` this snapping line is disabled.
     * @example // Defaults to:
     * ```
     * 0.1
     * ```
     */
    snapToLeft?: number | null;
    /**
     * The right side of a sprite's bounding box snaps to a vertical line which is shifted by this value
     * from the right side of the edited image towards its center. This value is measured in normalized
     * coordinates relative to the smaller side of the edited image.
     * If this value is explicitly set to `null` this snapping line is disabled.
     * @example // Defaults to:
     * ```
     * 0.1
     * ```
     */
    snapToRight?: number | null;
    /**
     * The top side of a sprite's bounding box snaps to a horizontal line which is shifted by this value
     * from the top side of the edited image towards its center. This value is measured in normalized
     * coordinates relative to the smaller side of the edited image.
     * If this value is explicitly set to `null` this snapping line is disabled.
     * @example // Defaults to:
     * ```
     * 0.1
     * ```
     */
    snapToTop?: number | null;
    /**
     * The bottom side of a sprite's bounding box snaps to a horizontal line which is shifted by this value
     * from the bottom side of the edited image towards its center. This value is measured in normalized
     * coordinates relative to the smaller side of the edited image.
     * If this value is explicitly set to `null` this snapping line is disabled.
     * @example // Defaults to:
     * ```
     * 0.1
     * ```
     */
    snapToBottom?: number | null;
}
declare class RotationSnapping {
    /**
     * Whether sprites should snap to specific orientations during rotation interactions.
     * This switch enables or disables rotation snapping.
     * @example // Defaults to:
     * ```
     * true
     * ```
     */
    enabled?: boolean;
    /**
     * This threshold defines the arc length of a rotation gesture where snapping at a snap angle occurs.
     * It is measured in pixels.
     * @example // Defaults to:
     * ```
     * 20
     * ```
     */
    threshold?: number;
    /**
     * Enabled snapping angles in degrees for rotating a sprite. The rotation angle is defined clockwise.
     * @example // Defaults to:
     * ```
     * [0, 45, 90, 135, 180, 225, 270, 315]
     * ```
     */
    angles?: number[];
}
export declare class SnappingConfiguration {
    /**
     * Snapping options for positioning sprites.
     */
    position?: PositionSnapping;
    /**
     * Snapping options for rotating sprites.
     */
    rotation?: RotationSnapping;
}
export {};
