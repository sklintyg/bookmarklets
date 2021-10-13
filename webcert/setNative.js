function setNativeValue(element, value) {
   // console.log("Hittar scriptet!");
     // const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
     // const prototype = Object.getPrototypeOf(element);
    //  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
    alert(value);
    element.value = value;
    element.dispatchEvent(new Event('change',{bubbles:true}));
    
    //  if (valueSetter && valueSetter !== prototypeValueSetter) {
     //     prototypeValueSetter.call(element, value);
    //  } else {
    //    valueSetter.call(element, value);
     // }
}