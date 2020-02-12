# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

#### User Interface Events

- `load`
- `unload`
- `error`
- `resize`
- `scroll`

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus` when you click on an element and it highlights
- `blur` when you click away from a focused element
- `focusin` (_new; not supported by Firefox_)
- `focusout` (_new; same as blur; not supported by Firefox_)

---

##### Mouse Events

- `click`
- `dblclick`
- `mousedown` hold down
- `mouseup` let go
- `mouseover`
- `mouseout` move outside an element
- `mousemove` any time the mouse moves

---

##### Keyboard Events

- `input`
- `keydown` - when a key is pressed down, will trigger multiple times on hold
- `keypress`
- `keyup` - key release

---

### Form Events

- `submit` - type submit button
- `change` changing a form after original submission. example: re-validating during typing after failed input
- `input`

---

### HTML5 Events

- `DOMContentLoaded` - when element or page is loaded
- `hashchange`
- `beforeunload` - only use when useful to user. Save document/email. finish transaction etc.

---

### CSS Events

- `transitionend`
- `animationstart`
- `animationend`

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example
const button = document.querySelector('#btn');
function porque = function(){
    console.log('why?');
}
// Add it
button.addEventListener('click', porque);
// Remove it
button.removeEventListener('click', porque);
```

---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`
- `target`
- `stopPropagation()`

---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click `submit` in a Form

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target

- The  `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

Events go to most specific target (child), then trigger parent events while bubbling

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    
let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});

button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});
```
---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---
