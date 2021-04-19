/* gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box", //when .box comes into view
    pin: true, //pin trigger element while active
    start: "center center", //starts when it reaches the top of the brower.
    end: "+=500", //end after scrolling 500px beyond the start
    //more on the website
  },
  x: 500,
});
 */

let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".dark",
    markers: true,
    start: "top 75%", //scroller-start is 75% from the top
    end: "bottom 25%", //scroller-bottom is 75% from the top

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart pause resume reset",
    //options: play, pause, resume, reset, restart, complete, reverse, none
  },
});

timeline
  .from("img", {
    x: 200,
    opacity: 0,
    duration: 1.5,
    //rotation: -360, ease: 'linear',
  })
  .from(
    ".content",
    {
      y: 300,
      opacity: 0,
      duration: 1,
    },
    "-=1" //start 1 second earlier than it would have
  );

//Visit GreenSock ScrollTrigger collections. There is a demo called "toggleActions"
