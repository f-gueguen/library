export function dispatch(el: Node, name: string, detail: CustomEventInit = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true,
    })
  );
}
