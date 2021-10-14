function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
const prototype = Object.getPrototypeOf(element);
const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
alert(value);

if (valueSetter && valueSetter !== prototypeValueSetter) {
  prototypeValueSetter.call(element, value);
} else {
  valueSetter.call(element, value);
  }
}
ele.dispatchEvent(new Event('input', { bubbles: true }));