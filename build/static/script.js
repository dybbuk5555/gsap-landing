const timeline = gsap.timeline({defaults: {duration: 1}});

timeline.to('.pre-loader > .overlay', {top:'75%'});
timeline.to('.pre-loader > .overlay', {top:'50%', delay:0.5});
timeline.to('.pre-loader > .overlay', {top: '25%', delay:0.5});
timeline.to('.pre-loader > .overlay', {top:'0', delay:0.5});
timeline.to('.pre-loader', {width:'80vw', left:0, top:'50%'});
timeline.to('.pre-loader', {'z-index':-20});
timeline.fromTo('nav', {y:-100}, {y:0, opacity:1});
timeline.fromTo('.first-row .bold-text', {y:100}, {y:0, opacity:1}, '<');
timeline.fromTo('.second-row .bold-text', {y:100}, {y:0, opacity:1, delay:0.5});

const isMobile = !(window.matchMedia('(min-width: 768px)').matches);

if (isMobile) {
    timeline.fromTo('.mobile-row .copy', {y:100}, {y:0, opacity:1, delay:0.5});
    timeline.fromTo('.mobile-row .cta', {y:100}, {y:0, opacity:1, delary:0.5});
} else {
    timeline.fromTo('.first-row .copy', {y:100}, {y:0, opacity:1, delay:0.5});
    timeline.set('.second-row .round-text', {opacity:1, delay:0.5});
}