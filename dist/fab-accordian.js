(()=>{"use strict";var e,t={921:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MINUS_ICON=t.PLUS_ICON=void 0,t.PLUS_ICON='url("./assets/images/icon-plus.svg")',t.MINUS_ICON='url("./assets/images/icon-minus.svg")'}},n={};e=function e(o){var s=n[o];if(void 0!==s)return s.exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}(921),(new(function(){function t(){}return t.prototype.render=function(){this.initialize()},t.prototype.initialize=function(){var e=document.createElement("div");e.classList.add("acc-container"),document.body.appendChild(e),this.renderHeader(e);var t=this.createAccordians([{id:1,question:"What is Frontend Mentor, and how will it help me?",answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},{id:2,question:"Is Frontend Mentor free?",answer:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."},{id:3,question:"Can I use Frontend Mentor projects in my portfolio?",answer:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"},{id:4,question:"How can I get help if I'm stuck on a challenge?",answer:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."}]);e.appendChild(t)},t.prototype.renderHeader=function(e){var t=document.createElement("div");t.classList.add("acc-header");var n=document.createElement("span");n.classList.add("header-icon");var o=document.createElement("span");o.classList.add("header-title","work-sans-700"),o.textContent="FAQs",t.append(n,o),e.appendChild(t)},t.prototype.createAccordians=function(t){var n=this,o=document.createElement("div");return o.classList.add("faq-container"),t.forEach((function(t){var s=document.createElement("div");s.id="accordian_".concat(t.id),s.classList.add("accordian-container");var r=document.createElement("div");r.classList.add("question-container");var a=document.createElement("span");a.classList.add("question","work-sans-600"),a.textContent=t.question;var i=document.createElement("span");i.classList.add("question-icon"),i.style.backgroundImage=e.PLUS_ICON,r.append(a,i);var c=document.createElement("div");c.classList.add("answer-container","work-sans-400","hide"),c.textContent=t.answer,s.append(r,c),o.appendChild(s),n.wireEventListener(s)})),o},t.prototype.wireEventListener=function(t){t.querySelector(".question-container").addEventListener("click",(function(n){n.stopPropagation();var o=t.querySelector(".answer-container"),s=t.querySelector(".question-icon");(null==o?void 0:o.classList.contains("hide"))?(s.style.backgroundImage=e.MINUS_ICON,o.classList.remove("hide"),o.classList.add("show")):(s.style.backgroundImage=e.PLUS_ICON,o.classList.remove("show"),o.classList.add("hide"))}))},t}())).render()})();