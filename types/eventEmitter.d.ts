declare type Listener = (...args: any[]) => void;
/**
 * A class used to receive and emit events.
 */
declare class EventEmitter<EventType extends string> {
    events: {
        [event in EventType]?: Listener[];
    };
    constructor();
    /**
     * Adds the `listener` function to the end of the list of listeners for the specified `event`.
     * No checks are made to see if `listener` has already been added. Multiple calls passing the
     * same combination of `event` and `listener` will result in the `listener` being added, and
     * called, multiple times.
     * @param event The name of the event.
     * @param listener The callback function.
     */
    addListener(event: EventType, listener: Listener): this;
    /**
     * Removes the most recently added instance of `listener` from the list of listeners for the
     * specified `event`.
     *
     * Once an event has been emitted, all listeners attached to it at the time of emitting will
     * be called in order. This implies that any `removeListener` or `removeAllListeners` calls
     * after emitting and before the last listener finishes execution will not remove them from
     * `emit()` in progress. Subsequent events will behave as expected.
     * @param event The name of the event.
     * @param listener The callback function to be removed.
     */
    removeListener(event: EventType, listener: Listener): this;
    /**
     * Removes all previously registered listeners for the specified `event`.
     * @param event The name of the event.
     */
    removeAllListeners(event: EventType): this;
    /**
     * @see {@link addListener}
     */
    on(event: EventType, listener: Listener): this;
    /**
     * @see {@link removeListener}
     */
    off(event: EventType, listener: Listener): this;
    /**
     * Emits the event to all of its registered listeners.
     * @param event The event to be emitted to its listeners.
     * @param args The arguments to be passed along with the event.
     * @returns `false` if there were no listeners for the emitted event.
     */
    emit(event: EventType, ...args: any[]): boolean;
}
export { EventEmitter, Listener };
