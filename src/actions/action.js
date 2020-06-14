export function flipSwitch(value) {
  return {
    type: "TOGGLE_SWITCH",
    payload: value,
  };
}
