"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[913],{9913:(P,Z,s)=>{s.r(Z),s.d(Z,{WORKOUT_ROUTES:()=>z});var k=s(6814),t=s(9212),c=s(95),d=s(2296),y=s(2495),T=s(3680);let w=(()=>{class o{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(e){this._vertical=(0,y.Ig)(e)}get inset(){return this._inset}set inset(e){this._inset=(0,y.Ig)(e)}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(r,i){2&r&&(t.uIk("aria-orientation",i.vertical?"vertical":"horizontal"),t.ekj("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(r,i){},styles:[".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0})}return o})(),v=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[T.BQ,T.BQ]})}return o})();var f=s(9116),x=s(2032),W=s(4193),U=s(1474),j=s(7328);function C(o,n){!n?.injector&&(0,t.gHi)(C);const e=n?.injector??(0,t.f3M)(t.zs3),r=new j.t(1),i=(0,t.cEC)(()=>{let a;try{a=o()}catch(l){return void(0,t.rg0)(()=>r.error(l))}(0,t.rg0)(()=>r.next(a))},{injector:e,manualCleanup:!0});return e.get(t.ktI).onDestroy(()=>{i.destroy(),r.complete()}),r.asObservable()}function m(o,n){const e=!n?.manualCleanup;e&&!n?.injector&&(0,t.gHi)(m);const r=e?n?.injector?.get(t.ktI)??(0,t.f3M)(t.ktI):null;let i;i=(0,t.tdS)(n?.requireSync?{kind:0}:{kind:1,value:n?.initialValue});const a=o.subscribe({next:l=>i.set({kind:1,value:l}),error:l=>{if(n?.rejectErrors)throw l;i.set({kind:2,error:l})}});return r?.onDestroy(a.unsubscribe.bind(a)),(0,t.Flj)(()=>{const l=i();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new t.vHH(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var A=s(5619),p=s(4664),g=s(7081),b=s(2181),h=s(9397),M=s(7803);class _{constructor(n,e){this.msg=n,this.type=e}}var q=s(553);let S=(()=>{class o{constructor(){this.http=(0,t.f3M)(U.eN),this.alertSrvice=(0,t.f3M)(M.c),this.router=(0,t.f3M)(W.F0),this.workoutApi=q.N.apiUrl+"/api/workouts",this._refreshList$=new A.X(!0),this.modifyWorkoutListSubj=new A.X({workout:{},action:"like"}),this.workoutsSnl=m(this.getWorkouts(),{initialValue:[]}),this.selectedWorkoutIdSnl=(0,t.tdS)(void 0),this.selectedWorkoutSnl=m(this.getWorkout(),{initialValue:void 0}),this.createdWorkoutSnl=m(this.createWorkout(),{initialValue:void 0})}refreshList(){this._refreshList$.next(!0)}getWorkouts(){return this._refreshList$.asObservable().pipe((0,p.w)(()=>this.http.get(this.workoutApi)),(0,g.d)())}getWorkout(){return C(this.selectedWorkoutIdSnl).pipe((0,b.h)(e=>!!e),(0,p.w)(e=>this.http.get(this.workoutApi+"/"+e)),(0,p.w)(()=>this.modifyWorkoutListSubj.asObservable().pipe((0,b.h)(e=>"create"!==e.type),(0,p.w)(e=>this.userInteractionToObservable(e)))),(0,h.b)(()=>this.refreshList()),(0,g.d)())}createWorkout(){return this.modifyWorkoutListSubj.asObservable().pipe((0,b.h)(e=>"create"===e.type),(0,p.w)(e=>this.http.post(this.workoutApi,e.workout)),(0,g.d)())}modifyWorkout(e){this.selectedWorkoutIdSnl.set(e.workout?._id),this.modifyWorkoutListSubj.next({workout:e.workout,type:e.type})}userInteractionToObservable(e){switch(e.type){case"modify":return this.http.patch(this.workoutApi+"/"+e.workout?._id,e.workout).pipe((0,h.b)(()=>{this.alertSrvice.showAlert(new _("The workout like has been registered","success"))}));case"delete":return this.http.delete(this.workoutApi+"/"+e.workout?._id).pipe((0,h.b)(()=>{this.alertSrvice.showAlert(new _("The selected workout has been deleted.","success"))}));case"create":return this.http.post(this.workoutApi,e.workout).pipe((0,h.b)(()=>{this.alertSrvice.showAlert(new _("New workout has been created.","success")),this.router.navigate(["/workouts"])}))}}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();class D{constructor(n,e,r,i,a){this.title=n,this.reps=e,this.load=r,this.likes=i,this._id=a||""}}function F(o,n){if(1&o&&(t.TgZ(0,"div"),t._uU(1,"The following workout has been created"),t.qZA(),t.TgZ(2,"div"),t._uU(3),t.ALo(4,"json"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.hij(" ",t.lcZ(4,1,e.createdWorkoutSnl()),"\n")}}const I=()=>["/workouts"];let O=(()=>{class o{constructor(){this.formBuilder=(0,t.f3M)(c.qu),this.workoutsService=(0,t.f3M)(S),this.createdWorkoutSnl=this.workoutsService.createdWorkoutSnl,this.workoutForm=this.formBuilder.group({title:["",[c.kI.required]],reps:["",[c.kI.required]],load:["",[c.kI.required]]})}submitWorkout(){const{title:e,reps:r,load:i,likes:a}=this.workoutForm.value,l=new D(e,r,i,a);this.workoutsService.modifyWorkout({type:"create",workout:l})}resetWorkoutForm(){this.workoutForm.reset()}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-workout-create"]],standalone:!0,features:[t.jDz],decls:31,vars:5,consts:[[1,"row","row--l-alined"],[3,"routerLink"],["mat-raised-button","","color","primary"],[1,"form",3,"formGroup"],[1,"form__input"],["matInput","","id","title","placeholder","Ex. Jumping-Jacks","type","text","formControlName","title"],["matInput","","id","Reps","type","number","formControlName","reps"],["matInput","","id","load","type","number","formControlName","load"],[1,"row","row--sp-btw"],["mat-raised-button","","color","primary","type","button",3,"click"],["mat-raised-button","","color","accent","type","button",3,"disabled","click"]],template:function(r,i){1&r&&(t._UZ(0,"br")(1,"br"),t.TgZ(2,"div",0)(3,"a",1)(4,"button",2),t._uU(5,"Back to Workout list"),t.qZA()()(),t._UZ(6,"br")(7,"hr"),t.TgZ(8,"form",3)(9,"mat-form-field",4)(10,"mat-label"),t._uU(11,"Title"),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15,"Repetitions"),t.qZA(),t._UZ(16,"input",6),t.qZA(),t.TgZ(17,"mat-form-field",4)(18,"mat-label"),t._uU(19,"Load"),t.qZA(),t._UZ(20,"input",7),t.qZA(),t._UZ(21,"mat-divider")(22,"br"),t.TgZ(23,"div",8)(24,"button",9),t.NdJ("click",function(){return i.resetWorkoutForm()}),t._uU(25," Clear "),t.qZA(),t.TgZ(26,"button",10),t.NdJ("click",function(){return i.submitWorkout()}),t._uU(27," Create Workout "),t.qZA()()(),t._UZ(28,"hr")(29,"br"),t.YNc(30,F,5,3)),2&r&&(t.xp6(3),t.Q6J("routerLink",t.DdM(4,I)),t.xp6(5),t.Q6J("formGroup",i.workoutForm),t.xp6(18),t.Q6J("disabled",i.workoutForm.invalid),t.xp6(4),t.um2(30,i.createdWorkoutSnl()?30:-1))},dependencies:[W.rH,d.ot,d.lW,c.UX,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,f.lN,f.KE,f.hX,x.c,x.Nt,v,w,k.Ts],styles:[".form[_ngcontent-%COMP%]{width:500px;padding:50px;display:flex;flex-flow:column nowrap}"]})}return o})();var u=s(5195);function J(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title"),t._uU(5,"Agility"),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t._UZ(13,"mat-divider"),t.qZA(),t.TgZ(14,"mat-card-actions",2)(15,"button",3),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteWorkout.emit(i.workout))}),t._uU(16,"Delete"),t.qZA(),t.TgZ(17,"button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.likeWorkout.emit(i.workout))}),t._uU(18,"Like"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.workout.title),t.xp6(5),t.hij("Repetition: ",e.workout.reps,""),t.xp6(2),t.hij("Load: ",e.workout.load,""),t.xp6(2),t.hij("Likes: ",e.workout.likes,"")}}let N=(()=>{class o{constructor(){this.likeWorkout=new t.vpe,this.deleteWorkout=new t.vpe}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-workout-preview"]],inputs:{workout:"workout"},outputs:{likeWorkout:"likeWorkout",deleteWorkout:"deleteWorkout"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","example-card",4,"ngIf"],[1,"example-card"],[1,"row","row--sp-btw"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(r,i){1&r&&t.YNc(0,J,19,4,"mat-card",0),2&r&&t.Q6J("ngIf",i.workout)},dependencies:[k.O5,u.QW,u.a8,u.hq,u.dn,u.dk,u.$j,u.n5,v,w,d.ot,d.lW],styles:[".example-card[_ngcontent-%COMP%]{width:400px}"]})}return o})();const H=(o,n)=>n._id;function Q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"app-workout-preview",4),t.NdJ("likeWorkout",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.likeWorkout(i))})("deleteWorkout",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.deleteWorkout(i))}),t.qZA()}2&o&&t.Q6J("workout",n.$implicit)}function E(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"There were no items in the list."),t.qZA())}function R(o,n){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" Selected: ",t.lcZ(2,1,e.selectedWorkout())," ")}}function B(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"No workout selecteds"),t.qZA())}const G=()=>["/workouts/create"];function X(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title"),t._uU(5,"Agility"),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t._UZ(13,"mat-divider"),t.qZA(),t.TgZ(14,"mat-card-actions",2)(15,"button",3),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteWorkout.emit(i.workout))}),t._uU(16,"Delete"),t.qZA(),t.TgZ(17,"button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.likeWorkout.emit(i.workout))}),t._uU(18,"Like"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.workout.title),t.xp6(5),t.hij("Repetition: ",e.workout.reps,""),t.xp6(2),t.hij("Load: ",e.workout.load,""),t.xp6(2),t.hij("Likes: ",e.workout.likes,"")}}const z=[{path:"",component:(()=>{class o{constructor(){this.workoutsService=(0,t.f3M)(S),this.workoutList=this.workoutsService.workoutsSnl,this.selectedWorkout=this.workoutsService.selectedWorkoutSnl,this.createdWorkoutSnl=this.workoutsService.createdWorkoutSnl}deleteWorkout(e){this.workoutsService.modifyWorkout({type:"delete",workout:e})}likeWorkout(e){e.likes=e.likes?e.likes+1:1,this.workoutsService.modifyWorkout({type:"modify",workout:e})}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-workout-list"]],standalone:!0,features:[t.jDz],decls:15,vars:4,consts:[[1,"row","row--r-algined"],[3,"routerLink"],["mat-raised-button","","color","primary"],[1,"row","row--sp-around","row--wrap"],[1,"mb-20",3,"workout","likeWorkout","deleteWorkout"],["class","mb-20",3,"workout"]],template:function(r,i){1&r&&(t._UZ(0,"br")(1,"br"),t.TgZ(2,"div",0)(3,"a",1)(4,"button",2),t._uU(5,"Add new Workout"),t.qZA()()(),t._UZ(6,"br")(7,"hr"),t.TgZ(8,"div",3),t.SjG(9,Q,1,1,"app-workout-preview",5,H,!1,E,2,0),t.qZA(),t._UZ(12,"hr"),t.YNc(13,R,3,3,"div")(14,B,2,0)),2&r&&(t.xp6(3),t.Q6J("routerLink",t.DdM(3,G)),t.wJu(9,i.workoutList()),t.xp6(10),t.um2(13,i.selectedWorkout()?13:14))},dependencies:[W.rH,d.ot,d.lW,N,k.Ts]})}return o})()},{path:"create",component:O},{path:":id",component:(()=>{class o{constructor(){this.likeWorkout=new t.vpe,this.deleteWorkout=new t.vpe}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-workout-detail"]],inputs:{workout:"workout"},outputs:{likeWorkout:"likeWorkout",deleteWorkout:"deleteWorkout"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","example-card",4,"ngIf"],[1,"example-card"],[1,"row","row--sp-btw"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(r,i){1&r&&t.YNc(0,X,19,4,"mat-card",0),2&r&&t.Q6J("ngIf",i.workout)},dependencies:[k.O5,u.QW,u.a8,u.hq,u.dn,u.dk,u.$j,u.n5,v,w,d.ot,d.lW],styles:[".example-card[_ngcontent-%COMP%]{width:400px}"]})}return o})()}]}}]);