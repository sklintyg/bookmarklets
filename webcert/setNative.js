
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
function changeValue(input,value){

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(input, value);
    alert(value);
    var inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);
}
const input = document.getElementsByName('ovrigt');

var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
nativeInputValueSetter.call(input, 'This should be in state');

const ev2 = new Event('input', { bubbles: true});
input.dispatchEvent(ev2);
//const theEv = new Event('input', { bubbles: true});
//theEv.simulated = true;
//textarea.value = 'Detta vill jag skriva in';
//textarea.dispatchEvent(theEv);
//var ele = document.getElementsByName('ovrigt');
//setNativeValue(ele , 'Hej på dig');
//ele.dispatchEvent(new Event('input', { bubbles: true }));
//changeValue(ele,'Nu hoppas vi att det funkar');