!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var a=r("iU1Pc"),i=document.querySelector(".form"),u=document.querySelector("button"),l={};function c(t,n){var o=new Promise((function(e,o){var r=Math.random()>.3;setTimeout((function(){r?e({position:t,delay:n}):o({position:t,delay:n})}),n)}));o.then((function(t){var n=t.position,o=t.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})),o.catch((function(t){var n=t.position,o=t.delay;e(a).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}i.addEventListener("input",(function(e){"delay"===e.target.name&&(l.delay=Number(e.target.value)),"step"===e.target.name&&(l.step=Number(e.target.value)),"amount"===e.target.name&&(l.amount=Number(e.target.value)),console.log(l)})),u.addEventListener("click",(function(e){e.preventDefault();for(var t=l.delay,n=0,o=0;o<l.amount;o+=1)c(n+=1,t+=l.step),i.reset()}))}();
//# sourceMappingURL=03-promises.cdd1db74.js.map