import Vue from "vue/dist/vue.common.js";

var page={
    title:"前端框架study",
    topics:[
        {title:"VUE",des:""},
        {title:"ANGULAR",des:""},
        {title:"REACT",des:""},
        {title:"WEBPACK",des:""},
        {title:"Virtual DOM",des:""},
        {title:"ANGULAR MATERIAL",des:""},
        {title:"设计模式",des:""},
        {title:"算法",des:""},
        {title:"JQUERY",des:""},
        {title:"KISSY",des:""},
        {title:"JS",des:""},
        {title:"CSS",des:""},
    ],
    selected:0
}
var subtitles=["demo","运行过程","源码分析","使用、技巧总结","比较其它框架"];
page.topics.forEach((t,i)=>{
    t.subs= [];
    var random=Math.round(Math.random()*subtitles.length-1);
    while(random>-1){
        t.showsub=false;
        t.subs.unshift({subtitle:subtitles[random]});
        random--;
    }


})
new Vue({
    el:"#demo",
    data:page,
    created:function(){
        var selector=document.querySelector;
        var select=this.selected;
        var len=this.topics.length;
    },
    methods:{
        gopage:function(p,i){
            this.selected=i;
            p.showsub=true;
            this.isscrolling=true;
            var panel=document.querySelector("#rollpanel")
            panel.scrollTo(0,this.tops[i]);
        },
        getclass:function(length){
            return "sublist "+"p"+length;
        }
    },

    mounted:function(){
        var tops=[];
        document.querySelectorAll(".page-content").forEach(function(a,i){
            tops.push(a.offsetTop);
        })
        var panel=document.querySelector("#rollpanel")
        this.tops=tops;
        let selected=this.selected;
        panel.addEventListener("scroll",()=>{
            let scrolltop=panel.scrollTop;
            for(var i=0;i<tops.length;i++){
            if(scrolltop+250>tops[i] &&(!tops[i+1]|| scrolltop+250<tops[i+1])&& selected!=i){
                this.selected = i;
                selected=i;
                break;
            }
        }
        })
    }
})
