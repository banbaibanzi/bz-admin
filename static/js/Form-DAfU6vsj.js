import{_ as W}from"./CommonPage-Cqz-r_z4.js";import{_ as L,b as Y}from"./index-CYfdo8ub.js";/* empty css               */import{U as G}from"./el-select-CY5hw3qw.js";/* empty css                     *//* empty css                  *//* empty css                 */import{u as E,z as K,A as Z,B as J,C as H,D as Q,F as $,G as T,H as X,I as ee,E as C,s as le,J as ae,K as te,v as oe,w as P,x as U,n as ne,y as re,L as de,M as ie}from"./element-BKD3LWCk.js";import{aF as g,aG as v,l as u,T as s,H as h,r as V,u as b,S as m,m as k,Q as w,a8 as x,P as y,x as ue,d as se,L as O,$ as ce,F as fe,U as be,V as me,W as pe,X as ge}from"./vue-3R-0LehK.js";/* empty css                     */import{_ as ve}from"./Switch-Dwd9PxYy.js";/* empty css                  */import{a as _e}from"./WangEditor-ForMo0_6.js";const ye={__name:"BasisInput",props:g({config:{type:Object,dafault:()=>({})},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue");return(o,l)=>{const n=E;return u(),s(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),modelModifiers:{trim:!0},disabled:e.disabled,type:e.config?.value_type||"text",maxlength:e.config?.maxlength||999,minlength:e.config?.minlength||0,clearable:e.config?.clearable??!0,placeholder:e.config?.placeholder,"show-password":e.config?.show_password,style:h(`width: ${e.config?.width||"100%"} `),"validate-event":e.config?.validate??!0},null,8,["modelValue","disabled","type","maxlength","minlength","clearable","placeholder","show-password","style","validate-event"])}}},he=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),ke={__name:"Cascader",props:g({config:{type:Object,dafault:()=>({})},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,o=v(e,"modelValue"),l=V(a?.config?.options||[]);return(n,t)=>{const r=K;return u(),s(r,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),options:b(l),props:e.config?.props,disabled:e.disabled,clearable:e.config?.clearable,filterable:e.config?.filterable,style:h(`width: ${e.config?.width||"100%"} `),"validate-event":e.config?.validate??!0},null,8,["modelValue","options","props","disabled","clearable","filterable","style","validate-event"])}}},Ve=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),we={__name:"Checkbox",props:g({config:{type:Object,dafault:()=>({}),required:!0},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue");return(o,l)=>{const n=Z,t=J;return u(),s(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),disabled:e.disabled},{default:m(()=>[(u(!0),k(w,null,x(e.config?.options||[],r=>(u(),s(n,{key:r[e.config?.value_key]||r.value,value:r[e.config?.value_key]||r.value,label:r[e.config?.label_key]||r.label,border:e.config?.border??!1,"validate-event":e.config?.validate??!0},null,8,["value","label","border","validate-event"]))),128))]),_:1},8,["modelValue","disabled"])}}},xe=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"})),je={__name:"Date",props:g({config:{type:Object,dafault:()=>({})},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue");return(o,l)=>{const n=H;return u(),s(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),disabled:e.disabled,style:h(`width: ${e.config?.width}`),type:e.config?.date_type||"date",format:e.config?.date_format||"YYYY-MM-DD","value-format":e.config?.value_format||"YYYY-MM-DD",placeholder:e.config?.placeholder||"选择日期时间","start-placeholder":e.config?.start_placeholder||"请选择开始日期","end-placeholder":e.config?.end_placeholder||"请选择结束日期","range-separator":e.config?.range_placeholder||"-","disabled-date":e.config?.disabledDate,"validate-event":e.config?.validate??!0},null,8,["modelValue","disabled","style","type","format","value-format","placeholder","start-placeholder","end-placeholder","range-separator","disabled-date","validate-event"])}}},Se=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),Oe={__name:"InputNumber",props:g({config:{type:Object,dafault:()=>({})},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue");return(o,l)=>{const n=Q;return u(),s(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),min:e.config?.min||0,max:e.config?.max||99999,style:h(`width: ${e.config?.width||"auto"} `),"validate-event":e.config?.validate??!0},null,8,["modelValue","min","max","style","validate-event"])}}},Ce=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),Ee={class:"flex"},Me={__name:"Keyword",props:g({config:{type:Object,dafault:()=>({}),required:!0},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,o=v(e,"modelValue"),l=V(a.config?.options||[]),n=V(a.config?.placeholder),t=()=>{o.value.value="",r()},r=()=>{const i=l.value.filter(d=>d.value===o.value.key)[0];n.value=`请输入${i.label}`};return(i,d)=>{const f=$,j=T,S=E;return u(),k("div",Ee,[y(j,{modelValue:o.value.key,"onUpdate:modelValue":d[0]||(d[0]=p=>o.value.key=p),disabled:e.disabled,class:"mr-10",style:h(`width: ${e.config?.width||"110px"}`),onChange:t},{default:m(()=>[(u(!0),k(w,null,x(b(l),p=>(u(),s(f,{key:p[e.config?.value_key]||p.value,value:p[e.config?.value_key]||p.value,label:p[e.config?.label_key]||p.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue","disabled","style"]),y(S,{modelValue:o.value.value,"onUpdate:modelValue":d[1]||(d[1]=p=>o.value.value=p),disabled:e.disabled||!o.value.key,style:h(`width: ${e.config?.inputWidth||"200px"}`),placeholder:b(n)??e.config?.placeholder,clearable:e.config?.clearable??!0},null,8,["modelValue","disabled","style","placeholder","clearable"])])}}},Be=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),De={__name:"Radio",props:g({config:{type:Object,dafault:()=>({}),required:!0},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:g(["callback"],["update:modelValue"]),setup(e,{emit:a}){const o=e,l=a,n=v(e,"modelValue");return ue(()=>{if(o.config?.relation_disabled){let t={value:n.value,relation_disabled:o.config?.relation_disabled};l("callback",t)}}),(t,r)=>{const i=X,d=ee;return u(),s(d,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=f=>n.value=f),disabled:e.disabled},{default:m(()=>[(u(!0),k(w,null,x(e.config?.options||[],f=>(u(),s(i,{key:f[e.config?.value_key]||f.value,value:f[e.config?.value_key]||f.value,label:f[e.config?.label_key]||f.label,border:e.config?.border??!1},null,8,["value","label","border"]))),128))]),_:1},8,["modelValue","disabled"])}}},$e=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),Te={__name:"Select",props:g({config:{type:Object,dafault:()=>({}),required:!0},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue");return(o,l)=>{const n=$,t=T;return u(),s(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),disabled:e.disabled,placeholder:e.config?.placeholder,clearable:e.config?.clearable??!0,multiple:e.config?.multiple??!1,"collapse-tags":e.config?.collapse_tags??!1,"collapse-tags-tooltip":e.config?.collapse_tags_tooltip??!1,"max-collapse-tags":e.config?.max_collapse_tags,style:h(`width: ${e.config?.width||"100%"}`),"validate-event":e.config?.validate??!0},{default:m(()=>[(u(!0),k(w,null,x(e.config?.options||[],r=>(u(),s(n,{key:r[e.config?.value_key]||r.value,value:r[e.config?.value_key]||r.value,label:r[e.config?.label_key]||r.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue","disabled","placeholder","clearable","multiple","collapse-tags","collapse-tags-tooltip","max-collapse-tags","style","validate-event"])}}},Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),Ue={__name:"Textarea",props:g({config:{type:Object,dafault:()=>({})},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue");return(o,l)=>{const n=E;return u(),s(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),type:"textarea",disabled:e.disabled,rows:e.config?.rows||5,style:h(`width: ${e.config?.width||"100%"}`),placeholder:e.config?.placeholder||"","validate-event":e.config?.validate??!0},null,8,["modelValue","disabled","rows","style","placeholder","validate-event"])}}},Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"})),qe={__name:"Upload",props:g({config:{type:Object,dafault:()=>({})},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=v(e,"modelValue"),o=async t=>{const r=t.file,i=new FormData;i.append("files",r);try{const d=await l(i);data.image_url=d,emit("update:val",d)}catch{}},l=t=>new Promise(r=>{G(t).then(i=>{r(i.data.files_path)})}),n=t=>{const i=["image/jpeg","image/jpg","image/png"].includes(t.type.toLocaleLowerCase()),d=t.size/1024/1024<2;if(i){if(!d)return C.error("上传图片大小不能超过2MB!"),!1}else return C.error("上传图片格式不对!"),!1;return i&&d};return(t,r)=>{const i=le,d=Y,f=ae,j=te;return u(),s(j,{class:"avatar-uploader",action:"#","http-request":o,"before-upload":n,"show-file-list":!1,disabled:e.disabled},{default:m(()=>[a.value?(u(),s(i,{key:0,src:a.value,shape:"square",size:150,fit:"cover"},null,8,["src"])):(u(),s(f,{key:1,class:"avatar-uploader-icon"},{default:m(()=>[y(d,{name:"plus",color:"#606266"})]),_:1}))]),_:1},8,["disabled"])}}},ze=L(qe,[["__scopeId","data-v-e1c340af"]]),Fe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));function Ae(e){return/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)}function Re(e){return/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/.test(e)}function Ne(){const e=(o=[])=>o.length===0?[]:(o.forEach(l=>{let n=[];if(l.rules&&Array.isArray(l.rules)&&l.rules.length)n=n.concat(l.rules);else if(l.required&&l.required===!0){let t={required:!0,message:l.message||a(l),trigger:l.trigger||["blur","change"]};n.push(t)}if(l.value_type==="username"){const t={validator(r,i,d,f){!i||i===""?d(new Error("请输入用户名")):Ae(i)?d():d(new Error("邮箱格式不正确"))}};n=n.concat(t)}if(l.value_type==="password"){const t={validator(r,i,d,f){(!i||i==="")&&l.required===!1&&d(),!i||i===""?d(new Error("请输入密码")):Re(i)?d():d(new Error("请输入>=6且<=20位的密码,包含数字、字母"))}};n=n.concat(t)}l.rules=n}),o),a=o=>{let l="";switch(o.type){case"BasisInput":case"InputNumber":case"Textarea":case"Keyword":case"WangEditor":l="请输入";break;case"Upload":l="请上传";break;case"Radio":case"Checkbox":case"Select":case"Switch":case"Cascader":case"Date":l="请选择";break;default:l="未定义";break}return`${l}${o.label}`};return{initRules:e}}function We(){return{disabledItem:(a,o,l)=>{o&&Array.isArray(o)&&o.length&&o.forEach(n=>{const t=n[0],r=n[1];l[t]=r[a]})}}}const Le=Object.assign({"/src/components/control/BasisInput.vue":he,"/src/components/control/Cascader.vue":Ve,"/src/components/control/Checkbox.vue":xe,"/src/components/control/Date.vue":Se,"/src/components/control/InputNumber.vue":Ce,"/src/components/control/Keyword.vue":Be,"/src/components/control/Radio.vue":$e,"/src/components/control/Select.vue":Pe,"/src/components/control/Switch.vue":ve,"/src/components/control/Textarea.vue":Ie,"/src/components/control/Upload.vue":Fe,"/src/components/control/WangEditor.vue":_e});let I={};Object.values(Le).forEach(e=>{I[e.default.__name]=e.default});const Ye={components:I},Ge=Object.assign(Ye,{__name:"index",props:{labelWidth:{type:[String,Number],default:"100px"},item:{type:Array,default:()=>[]},field:{type:Object,default:()=>({})},buttons:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},disabled:{type:Object,default:()=>({})}},emits:["callback"],setup(e,{emit:a}){const o=e,l=a,{initRules:n}=Ne(),{disabledItem:t}=We(),r=V(null),i=V(o.labelWidth),d=se(()=>O(o.field)),f=O(o.buttons),j=O(n(o.item)),S=V(o.disabled),p=_=>{_==="submit"&&r.value.validate(M=>M&&l("callback")),_==="reset"&&handlerFormReset()},q=_=>{_?.relation_disabled&&t(_.value,_.relation_disabled,S.value)};return(_,M)=>{const B=oe,z=P,F=U,A=ne,R=re,N=de;return ce((u(),s(R,{ref_key:"formRef",ref:r,"element-loading-text":"加载中，请稍后","label-width":b(i),model:b(d),"status-icon":""},{default:m(()=>[y(F,null,{default:m(()=>[(u(!0),k(w,null,x(b(j),c=>(u(),s(z,{key:c.prop,span:c.col||24},{default:m(()=>[y(B,{label:c.label,prop:c.prop,rules:c.rules},{default:m(()=>[c.slot_name?fe(_.$slots,c.slot_name,{key:0}):(u(),s(be(c.type),{key:1,modelValue:b(d)[c.prop],"onUpdate:modelValue":D=>b(d)[c.prop]=D,config:c.config,disabled:c.disabled??b(S)[c.prop],onCallback:q},null,40,["modelValue","onUpdate:modelValue","config","disabled"]))]),_:2},1032,["label","prop","rules"])]),_:2},1032,["span"]))),128))]),_:3}),b(f)?.length?(u(),s(B,{key:0},{default:m(()=>[(u(!0),k(w,null,x(b(f),c=>(u(),s(A,{key:c.key,type:c.type||"primary",onClick:D=>c.callback?c.callback():p(c.key)},{default:m(()=>[me(pe(c.label),1)]),_:2},1032,["type","onClick"]))),128))]),_:1})):ge("",!0)]),_:3},8,["label-width","model"])),[[N,e.loading]])}}}),dl={__name:"Form",setup(e){const a=O({labelWidth:"140px",form_item:[{type:"BasisInput",label:"活动名称",prop:"title",required:!0,config:{placeholder:"请输入活动名称"}},{type:"Select",label:"活动区域",prop:"region",required:!0,config:{placeholder:"请选择活动区域",options:[{label:"区域A",value:"area-A"},{label:"区域B",value:"area-B"},{label:"区域C",value:"area-C"},{label:"区域D",value:"area-D"}]}},{type:"Radio",label:"是否禁用",prop:"show",required:!0,config:{options:[{label:"是",value:1},{label:"否",value:0}],relation_disabled:[["title",{1:!0,0:!1}]]}},{type:"Checkbox",label:"活动类型",prop:"checkbox",rules:[{type:"array",required:!0,message:"请选择活动类型",trigger:"change"}],config:{options:[{label:"类型1",value:"type-1"},{label:"类型2",value:"type-2"},{label:"类型3",value:"type-3"},{label:"类型4",value:"type-4"}]}},{type:"Cascader",label:"级联选择器",prop:"aa",required:!0,config:{options:[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]}]}},{type:"Date",label:"活动日期一周示例",prop:"activeDate",required:!0,config:{disabledDate:l=>l.getTime()<Date.now()-864e5||l.getTime()>ie().add(7,"day").valueOf()}},{type:"Upload",label:"活动图片",prop:"activeImage",required:!0},{type:"Keyword",label:"keyword",prop:"keyword",rules:[{validator:(l,n,t)=>{n.key&&n.value?t():t(new Error("请输入keyword"))}},{required:!0,message:"请输入搜索的关键字",trigger:"change"}],config:{placeholder:"请输入搜索的关键字",options:[{label:"ID",value:"ID"},{label:"标题",value:"title"}]}}],form_field:{title:"",region:"",show:null,checkbox:[],aa:"",activeDate:"",activeImage:"",keyword:{key:"",value:""}},form_buttons:[{label:"提交",type:"danger",key:"submit"}],form_loading:!1,form_disabled:{}}),o=()=>{a.form_loading=!0,setTimeout(()=>{a.form_loading=!1,C.success("提交成功！")},2e3)};return(l,n)=>{const t=Ge,r=P,i=U,d=W;return u(),s(d,null,{default:m(()=>[y(i,{class:"mt-20 pb-20",gutter:10},{default:m(()=>[y(r,{span:12},{default:m(()=>[y(t,{labelWidth:b(a).labelWidth,item:b(a).form_item,field:b(a).form_field,buttons:b(a).form_buttons,loading:b(a).form_loading,disabled:b(a).form_disabled,onCallback:o},null,8,["labelWidth","item","field","buttons","loading","disabled"])]),_:1})]),_:1})]),_:1})}}};export{dl as default};