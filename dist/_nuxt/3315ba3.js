(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{609:function(t,e,n){var content=n(623);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("3880fd2f",content,!0,{sourceMap:!1})},622:function(t,e,n){"use strict";n(609)},623:function(t,e,n){var o=n(43)(!1);o.push([t.i,".contact[data-v-9dd7f85c]{width:100vw}.contact-start[data-v-9dd7f85c]{background-color:#2a393f;width:100vw;height:200px;margin-left:auto;margin-right:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}.contact-container[data-v-9dd7f85c]{height:100%}.content-box[data-v-9dd7f85c]{display:flex;justify-content:center;flex-direction:column;height:70%}.container-title[data-v-9dd7f85c]{font-size:24px}.container-info[data-v-9dd7f85c]{font-size:14px;padding:0 20px}.container-info[data-v-9dd7f85c],.container-title[data-v-9dd7f85c]{text-align:center;color:#fff;margin:0 auto}.container-content[data-v-9dd7f85c]:first-of-type{display:flex;justify-content:center;background-color:#4c565c}.container-content[data-v-9dd7f85c]{height:80vh}.davyOrsted[data-v-9dd7f85c]{text-transform:uppercase;color:#fff;font-weight:500;margin-top:50px}.DOborder[data-v-9dd7f85c]{height:10px;width:280px;background-color:#97a0a7;border-style:none}.contact-info[data-v-9dd7f85c]{font-size:22px;color:#fff;cursor:pointer;border:none}.grey-contact-info[data-v-9dd7f85c]{color:#97a0a7;font-size:22px}.form-button[data-v-9dd7f85c]{width:300px;background-color:#2a393f;color:#fff;font-size:16px;text-transform:uppercase;height:50px;border-radius:5px;margin:0 auto}.container-content[data-v-9dd7f85c]:nth-of-type(2),.form-button[data-v-9dd7f85c]{display:flex;align-items:center;justify-content:center}.container-content[data-v-9dd7f85c]:nth-of-type(2){flex-direction:column;position:relative;height:auto}.contact-title[data-v-9dd7f85c]{font-size:24px;margin-top:20px;font-weight:500}.group[data-v-9dd7f85c]{margin-bottom:20px;width:90%;margin-left:auto;margin-right:auto}.recaptcha[data-v-9dd7f85c],input[data-v-9dd7f85c],textarea[data-v-9dd7f85c]{font-size:18px;padding:10px 10px 10px 5px;display:block;width:100%;border:none;margin:0 auto}input[data-v-9dd7f85c],textarea[data-v-9dd7f85c]{border-bottom:1px solid #acadaf}.small[data-v-9dd7f85c]{margin:0 auto;width:80%}@media (min-width:768px){.contact-container[data-v-9dd7f85c]{display:grid;grid-template-columns:1fr 1fr}.container-content[data-v-9dd7f85c]:first-of-type{height:100%}.container-title[data-v-9dd7f85c]{font-size:30px}.contact-title[data-v-9dd7f85c]{font-size:26px}}@media (min-width:1390px){.blok-title[data-v-9dd7f85c],.container-top-border[data-v-9dd7f85c]{height:55px}.container-title[data-v-9dd7f85c]{font-size:32px}.contact-title[data-v-9dd7f85c]{font-size:30px;margin-top:50px}.container-info[data-v-9dd7f85c]{font-size:16px;padding:0 20px}.recaptcha[data-v-9dd7f85c],input[data-v-9dd7f85c],textarea[data-v-9dd7f85c]{width:60%}.small[data-v-9dd7f85c]{float:right}}@media (min-width:1800px){.blok-title[data-v-9dd7f85c],.container-top-border[data-v-9dd7f85c]{height:65px}}",""]),t.exports=o},637:function(t,e,n){"use strict";n.r(e);n(63);var o=n(19),c={layout:"headerbar",methods:{onError:function(t){console.log("Error happened:",t)},onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.getResponse();case 3:return n=e.sent,console.log("ReCaptcha token:",n),e.next=7,t.$recaptcha.reset();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Login error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onSuccess:function(t){console.log("Succeeded:",t),this.$refs.form.submit()},onExpired:function(){console.log("Expired")}}},r=(n(622),n(18)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[t._m(0),t._v(" "),n("section",{staticClass:"contact-container"},[t._m(1),t._v(" "),n("div",{staticClass:"container-content"},[n("h2",{staticClass:"contact-title"},[t._v("Contact ons")]),t._v(" "),n("form",{attrs:{method:"post",name:"contact"}},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"group"},[n("recaptcha",{staticClass:"recaptcha",on:{error:t.onError,success:t.onSuccess,expired:t.onExpired}})],1),t._v(" "),t._m(6),t._v(" "),t._m(7)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-start"},[n("h1",{staticClass:"container-title"},[n("b",[t._v("Kom met ons in contact")])]),t._v(" "),n("p",{staticClass:"container-info"},[t._v("Heeft u nog meer informatie nodig? Bel ons, stuur een mailtje of vul het formulier in en wij helpen u zo spoedig mogelijk")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-content"},[n("div",{staticClass:"content-box"},[n("h2",{staticClass:"davyOrsted"},[t._v("Davy&Ørsted")]),t._v(" "),n("div",{staticClass:"DOborder"}),t._v(" "),n("p",[n("a",{staticClass:"contact-info",attrs:{onclick:"window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'"}},[t._v("Boeierspad 24")])]),t._v(" "),n("p",[n("a",{staticClass:"contact-info",attrs:{onclick:"window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'"}},[t._v("1081 KE Amsterdam")])]),t._v(" "),n("p",{staticClass:"grey-contact"},[n("a",{staticClass:"grey-contact-info",attrs:{onclick:"window.location.href='mailto:info@davy-orsted.nl'"}},[t._v("info@davy-orsted.nl")])]),t._v(" "),n("p",[n("a",{staticClass:"contact-info",attrs:{href:"tel://+31653244451"}},[t._v("06 53 24 44 51")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[e("input",{attrs:{type:"text",name:"name",placeholder:"Naam"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[e("input",{attrs:{type:"text",name:"email",placeholder:"E-mail"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[e("input",{attrs:{type:"text",name:"phoneNO",placeholder:"Telefoonnummer"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[e("textarea",{attrs:{rows:"8",name:"message",cols:"80",placeholder:"Bericht"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[e("input",{staticClass:"form-button",attrs:{type:"submit",value:"Versturen"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("p",{staticClass:"small"},[t._v("This site is protected by reCAPTCHA and the Google "),n("a",{attrs:{href:"https://policies.google.com/privacy"}},[t._v("Privacy Policy")]),t._v(" and "),n("a",{attrs:{href:"https://policies.google.com/terms"}},[t._v("Terms of Service")]),t._v(" apply.")])])}],!1,null,"9dd7f85c",null);e.default=component.exports}}]);