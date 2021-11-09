# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](images/screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [ https://ejim11.github.io/Tip-Calculator/]( https://ejim11.github.io/Tip-Calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I learnt a lot about event delegation and the event object in javascript

<!-- ```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
``` -->

```js
Tips.addEventListener(
  // adding event listerner to the tips containing all input. this technique makes use of event delegation
  "click",
  function (e) {
    target = e.target;

    if (target.classList.contains("givenTip")) {
      warningOnNumOfPeople();
      e.preventDefault();
      targetValue = target.value;
      percentTip = Number(targetValue.slice(0, targetValue.indexOf("%")));
      removeTipColor();
      target.classList.add("colorTip");
    } else {
      custom.addEventListener("input", function () {
        percentTip = 0;
        input = custom.value;
        warningOnNumOfPeople();
        removeTipColor();
      });
    }
  },
  false
);
```

### Continued development

I would love to grow in javascript knowledge of events, dom manipulation, event listerners and also start learning react.js.

## Author

- Frontend Mentor - [@ejim11](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@favourejim56](https://www.twitter.com/yourusername)
