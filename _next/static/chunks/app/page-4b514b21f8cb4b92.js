(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{569:t=>{t.exports={todos_list:"TodosList_todos_list__KH5Gu",todos_list__header:"TodosList_todos_list__header__zCnex",todos_list__list:"TodosList_todos_list__list__n3eWb",todos_list__item:"TodosList_todos_list__item__lBVyL",todos_list__footer:"TodosList_todos_list__footer__l82DX",todos_list__count:"TodosList_todos_list__count__pYCtZ",todos_list__filters:"TodosList_todos_list__filters__izAIR",todos_list__button:"TodosList_todos_list__button__3P2qR",active:"TodosList_active___QXl5"}},1118:(t,o,e)=>{"use strict";e.d(o,{default:()=>p});var _=e(5155),s=e(2115),l=e(569),d=e.n(l),c=e(4353),i=e.n(c);let a=t=>{let{id:o,title:e,completed:s,toggleTodo:l}=t;return(0,_.jsxs)("div",{className:i().checkbox__wrapper,"data-testid":"todoWrapper",children:[(0,_.jsx)("input",{type:"checkbox",checked:s,onChange:()=>l(o),className:i().checkbox__control,id:"todo-".concat(o)}),(0,_.jsx)("label",{htmlFor:"todo-".concat(o),className:i().checkbox__label,children:(0,_.jsx)("span",{className:"".concat(i().checkbox__text," ").concat(s?i().checkbox__text__completed:""),"data-testid":"todoText",children:e})})]})},n=t=>{var o;let{items:e,removeCompletedTodos:l,toggleTodo:c}=t,[i,n]=(0,s.useState)("all"),r=null==e?void 0:e.filter(t=>!t.completed).length;return(0,_.jsxs)("div",{className:d().todos_list,"data-testid":"todosList",children:[(0,_.jsx)("h2",{className:d().todos_list__header,children:"What needs to be done?"}),(0,_.jsx)("ul",{className:d().todos_list__list,children:null===(o=(()=>{switch(i){case"all":default:return e;case"active":return e.filter(t=>!t.completed);case"completed":return e.filter(t=>t.completed)}})())||void 0===o?void 0:o.map(t=>(0,_.jsx)("li",{className:d().todos_list__item,"data-testid":"todo-item",children:(0,_.jsx)(a,{toggleTodo:c,...t})},t.id))}),(0,_.jsxs)("div",{className:d().todos_list__footer,children:[(0,_.jsxs)("p",{className:d().todos_list__count,children:[r," items left"]}),(0,_.jsxs)("ul",{className:d().todos_list__filters,children:[(0,_.jsx)("li",{children:(0,_.jsx)("button",{className:"".concat(d().todos_list__button," ").concat("all"===i?d().active:""),type:"button",onClick:()=>n("all"),children:"All"})}),(0,_.jsx)("li",{children:(0,_.jsx)("button",{className:"".concat(d().todos_list__button," ").concat("active"===i?d().active:""),type:"button",onClick:()=>n("active"),children:"Active"})}),(0,_.jsx)("li",{children:(0,_.jsx)("button",{className:"".concat(d().todos_list__button," ").concat("completed"===i?d().active:""),type:"button",onClick:()=>n("completed"),children:"Completed"})})]}),(0,_.jsx)("button",{className:d().todos_list__button,onClick:l,children:"Clear completed"})]})]})};var r=e(8289),m=e.n(r);function p(){let[t,o]=(0,s.useState)(""),[e,l]=(0,s.useState)([]),d=(0,s.useRef)(null),c=()=>{t&&(l([...e,{id:Date.now(),title:t,completed:!1}]),o(""))};return(0,s.useEffect)(()=>{var t;null===(t=d.current)||void 0===t||t.focus()},[]),(0,_.jsxs)("div",{className:m().todos_form,children:[(0,_.jsxs)("div",{className:m().todos_form__input_wrapper,"data-testid":"addsButtonWrapper",children:[(0,_.jsx)("input",{className:m().todos_form__input,type:"text",placeholder:"Add a task",value:t,onChange:t=>o(t.target.value),ref:d,onKeyDown:t=>"Enter"===t.key&&c()}),(0,_.jsx)("button",{className:m().todos_form__button,onClick:c,disabled:!t,"data-testid":"addsButton",children:"Add"})]}),(0,_.jsx)(n,{items:e,removeCompletedTodos:()=>{l(e.filter(t=>!t.completed))},toggleTodo:t=>{l(e.map(o=>o.id===t?{...o,completed:!o.completed}:o))}})]})}},4353:t=>{t.exports={checkbox__wrapper:"TodoItem_checkbox__wrapper__CU7_q",checkbox__control:"TodoItem_checkbox__control__Qk2g7",checkbox__label:"TodoItem_checkbox__label__VwMN_",checkbox__text:"TodoItem_checkbox__text__iigDZ",checkbox__text__completed:"TodoItem_checkbox__text__completed__qhgvE"}},7997:(t,o,e)=>{Promise.resolve().then(e.bind(e,1118)),Promise.resolve().then(e.t.bind(e,8334,23))},8289:t=>{t.exports={todos_form:"TodosForm_todos_form__RGsL2",todos_form__input_wrapper:"TodosForm_todos_form__input_wrapper__ZX0nc",todos_form__input:"TodosForm_todos_form__input__NqOuA",todos_form__button:"TodosForm_todos_form__button__GVezN"}},8334:t=>{t.exports={page:"page_page__ZU32B",main:"page_main__GlU4n",main__title:"page_main__title__BsD9h"}}},t=>{var o=o=>t(t.s=o);t.O(0,[886,441,684,358],()=>o(7997)),_N_E=t.O()}]);