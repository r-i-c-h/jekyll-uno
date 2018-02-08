## Setting Class Names
* className: `elem.className = 'foo';`
* classList: `elem.classList.add('foo')`
* `elem.setAttribute('class', 'foo');` 
        The faster version of this process:
1. var newClassToApply = document.createAttribute("class"); // Create a "class" attribute
2. newClassToApply.value = "someClass";                     // Set the value of the class attribute
3. someElem.setAttributeNode(newClassToApply);              // Add the class attribute to someElem



## Creating Elements
const aDiv = document.createElement('div');

## Adding Text - 
* createTextNode() - `const txt = document.createTextNode('Hello There'); aDiv.appendChild(txt);`
    - You have to either appendChild() or insertBefore() the createTextNode
* textContent = - `aDiv.textContent = "Hello There` 
  * Should use `textContent` but it is a newer thing. The IE/old-skool way is with innerText. `div.innerText = 'Hello There'`
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const fulltextTag = '<div class="foo"><p>full html string with tags, etc.</p><div>'

`theDiv.innerHTML = '<div class="economyOfSpeed" data-but="not-the-best-coding-practice"><h1>Full Markup Possibilities but perhaps a lot of typing? </h1></div>'`


.appendChild()
.insertBefore( div, target );
.insertBefore( div, target.nextSibling );
parentElement.removeChild()

var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


new DOMParser().parseFromString(const fulltextTag, 'text/html');
document.createRange().createContextualFragment(); 


## Changing Styles: 
* elem.setAttribute: `div.setAttribute('style', 'color: red')`
* elem.style.someProp: `div.style.someStyleProperty = ____`
* cssText: `elem.style.cssText += 'some'
* style.cssText for a **complete over\rewrite** -  `div.style.cssText = 'huge:ass; text:string; that-overwrites:everything;'`







var x = document.activeElement.tagName; Get the currently focused element in the document: