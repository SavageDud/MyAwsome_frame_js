(()=>{"use strict";const e=class{constructor(e,t,s){this.Root=t,this.address=e,this.name="",this.children=[],this.states={},this.stateupdater={},this.Init(s),this.html_result=""}render_element(e){this.html_result=this.render(e)}remove_children_with_name(e){this.children.forEach(((t,s)=>{(t.name=e)&&this.children.splice(s,1)}))}Init(){}create_child(e,t={}){this.children.push(new e(this.address+this.children.length.toString(),this.Root,t))}wrap_result_inside_id(e){return`div id = 'LightJS_ID:${this.address}'>${e}</div>`}rerender(){return this.render()!=this.html_result}render(e){}invoke_rerender(){this.Root.rerender(address)}create_state_(e,t){null!=e&&(this.states[e]=t,this.stateupdater[e]=()=>{this.invoke_rerender()})}};class t extends e{render(e){let t="";return e.tasks.length,e.tasks.forEach((e=>{t+=`<input value = '${e}'></input>`})),"<div>"+t+" </div>"}}class s extends e{Init(e){}render(e){return this.Root.add_effect((()=>{document.getElementById("next_button").addEventListener("click",(()=>{e.taskupdater()}))})),"<button id = 'next_button'></button>"}buttonClick(){console.log("hello world")}}const r=class extends e{Init(){this.create_state_("tasks",["hello worlds","babaworld"]),console.log("running init"),this.create_child(t,{tasks:this.states.tasks}),this.create_child(s,{taskupdater:e=>{this.change_number_of_task(e)}})}render(){return this.children[0].render_element({tasks:this.states.tasks}),console.log("rendering aa"),this.children[1].render_element({taskupdater:e=>{this.change_number_of_task(e)}}),`<div>\n            ${this.children[0].html_result}\n            ${this.children[1].html_result}\n            </div>`}change_number_of_task(e){this.states.tasks.push(""),this.Root.render()}},n=class extends e{Init(){this.name="APP_main",this.create_child(r)}render(){return console.log("rendering app"),this.children[0].render_element(),`<div>\n            <p>123</p>\n            ${this.children[0].html_result}\n        </div>`}};class i extends e{Set_root(e){this.Root=e}Init(){this.name="ROOT",this.create_child(n)}render(){return this.children[0].render_element(),`\n            <div>${this.children[0].html_result}</div>\n        `}Get_node_with_adress(e){let t;for(let s;s<e.lenght;s++)t=t.children[parseInt(e[s])];return t}}console.log("hellaao world"),new class{constructor(){this.rout=this.get_currentrout(),this.effects=[],this.virtualDom=new i("",this),this.render()}get_currentrout(){let e=window.location.href;return console.log(e),e}add_effect(e){this.effects.push(e)}run_effects(){this.effects.forEach((e=>{e()})),this.effects=[]}render(){this.virtualDom.render_element(),document.body.innerHTML=this.virtualDom.html_result,this.run_effects()}rerender(e){}}})();