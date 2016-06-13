window.onload = function(){
    var doc = window.document;
    var time = '',time1 = '',time2 = '',time3 = '';
    var num = 0,num1 = 0,num2 = 0,num3 = 0;
    function getObj(id){
        return typeof id === "string"?document.getElementById(id):id;
    }
    var selectCom = getObj("selectCom");
    function getClass(contain,cls){
        var arr = [];
        var parent = (contain == null) ? document.getElementsByTagName('body')[0]:document.getElementById(contain);
        var ele = parent.getElementsByTagName('*');
        for(var i = 0,len = ele.length;i < len;i++){
            var spi = ele[i].className.split(" ");
            for(var j = 0,len1 = spi.length;j < len1;j++){
                if(cls == spi[j]){
                    arr.push(ele[i]);
                }
            }
        }
        return arr;
    }
    function addEventHandler(ele,event,handler){
        if(doc.addEventListener){
            ele.addEventListener(event,handler,false);
        }else if(doc.attachEvent){
            ele.attachEvent("on" + event,handler);
        }else{
            ele["on" + event] = handler;
        }
    }
    function createFun(){
        var sof = randomBag();
        var opt = createOption();
        if(sof == "false"){
            switch(this.parentNode.className){
                case "item1":
                    opt.text = "1号球创建信息丢包";
                    break;
                case "item2":
                    opt.text = "2号球创建信息丢包";
                    break;
                case "item3":
                    opt.text = "3号球创建信息丢包";
                    break;
                case "item4":
                    opt.text = "4号球创建信息丢包";
                    break;
                default:break;
           }
            opt.style.color = "red";
            selectCom.appendChild(opt);
        }else{
            var obj = {};
            var container = getObj("container");
            var run = "";
            var destory = "";
            //点击创建，在0度出现该球，保持不动；运动按钮可操作；
            var circle = document.createElement('div');
            circle.innerHTML = 100 + '%';
            switch(this.parentNode.className){
                case "item1":
                    circle.id ="div1";
                    obj = runInit(50);
                    circle.style.left = obj.leftVal;
                    circle.style.top = obj.topVal;
                    run = getClass('c1','run')[0];
                    destory = getClass('c1','destory')[0];
                    opt.text = "1号球创建成功";
                    break;
                case "item2":
                    circle.id ="div3";
                    obj = runInit(100);
                    circle.style.left = obj.leftVal;
                    circle.style.top = obj.topVal;
                    run = getClass('c2','run')[0];
                    destory = getClass('c2','destory')[0];
                    opt.text = "2号球创建成功";
                    break;
                case "item3":
                    circle.id ="div4";
                    obj = runInit(150);
                    circle.style.left = obj.leftVal;
                    circle.style.top = obj.topVal;
                    run = getClass('c3','run')[0];
                    destory = getClass('c3','destory')[0];
                    opt.text = "3号球创建成功";
                    break;
                case "item4":
                    circle.id ="div5";
                    obj = runInit(200);
                    circle.style.left = obj.leftVal;
                    circle.style.top = obj.topVal;
                    run = getClass('c4','run')[0];
                    destory = getClass('c4','destory')[0];
                    opt.text = "4号球创建成功";
                    break;
                default:break;
            }
            container.appendChild(circle);
            this.setAttribute("disabled","disabled");
            run.removeAttribute("disabled");
            destory.removeAttribute("disabled");
            selectCom.appendChild(opt);
        }   
    }
    function runFun(){
        var stop="";
        var _self = this;
        var sof = randomBag();
        var opt = createOption();
        if(sof == "false"){
            switch(this.parentNode.className){
                case "item1":
                    opt.text = "1号球运动信息丢包";
                    break;
                case "item2":
                   opt.text = "2号球运动信息丢包";
                    break;
                case "item3":
                   opt.text = "3号球运动信息丢包";
                    break;
                case "item4":
                    opt.text = "4号球运动信息丢包";
                    break;
                default:break;
            }
            opt.style.color = "red";
            selectCom.appendChild(opt);
        }else{
            switch(this.parentNode.className){
                case "item1":
                    runGo(50,'div1');
                    stop = getClass('c1','stop')[0];
                    opt.text = "1号球运动成功";
                    break;
                case "item2":
                    runGo(100,'div3');
                    stop = getClass('c2','stop')[0];
                    opt.text = "2号球运动成功";
                    break;
                case "item3":
                    runGo(150,'div4');
                    stop = getClass('c3','stop')[0];
                    opt.text = "3号球运动成功";
                    break;
                case "item4":
                    runGo(200,'div5');
                    stop = getClass('c4','stop')[0];
                    opt.text = "4号球运动成功";
                    break;
                default:break;
            }
            this.setAttribute("disabled","disabled");
            stop.removeAttribute("disabled");
            selectCom.appendChild(opt);
        }
    }
    function runInit(r){
       var leftVal,topVal;
       var defaultVal = runDefault();
       var left = defaultVal.x + defaultVal.addY * r +'px';
       var top = defaultVal.y + defaultVal.addX * r +'px';
       var init = {leftVal:left,topVal:top};
       return init;
    }
    function runGo(r,_self){
       var self = getObj(_self);
       var init = runDefault();
       var realNum = 0;
       var timer="";
       var stop = "",run = "";
       switch(_self){
          case 'div1':
             time = setInterval(function(){
                        (num)--;
                        timer = parseInt(self.innerHTML.split("%")[0]) - 1;
                        if(timer > 0){
                            self.innerHTML = timer+"%";
                            // 算出圆周上每一个 A 的 x,y 轴
                            var a = Math.sin( num * Math.PI / 180 ) * r;
                            var b = Math.cos( num * Math.PI / 180 ) * r;
                            // 算出 圆周上每一个 A 的坐标
                            self.style.left = init.x + b + 'px';
                            self.style.top = init.y + a + 'px';
                        }else{
                            self.innerHTML = 0 + "%";
                            clearInterval(time);
                            stop = getClass('c1','stop')[0];
                            run = getClass('c1','run')[0];
                            charge(self,stop,run);
                           // run.removeAttribute("disabled");
                            stop.setAttribute("disabled","disabled");
                        }                      
                    },80);
              break;
          case 'div3':
                realNum = num1;
                time1 = setInterval(function(){
                            (num1)--;
                            timer = parseInt(self.innerHTML.split("%")[0]) - 1;
                            if(timer > 0){
                                self.innerHTML = timer + "%";
                                // 算出圆周上每一个 A 的 x,y 轴
                                var a = Math.sin( num1 * Math.PI / 180 ) * r;
                                var b = Math.cos( num1 * Math.PI / 180 ) * r;
                                // 算出 圆周上每一个 A 的坐标
                                self.style.left = init.x + b + 'px';
                                self.style.top = init.y + a + 'px';
                            }else{
                                self.innerHTML = 0 + "%";
                                clearInterval(time1);
                                stop = getClass('c2','stop')[0];
                                run = getClass('c2','run')[0];
                                charge(self,stop,run);
                               // run.removeAttribute("disabled");
                                stop.setAttribute("disabled","disabled");
                            }    
                        },40);
                break;
          case 'div4':
                realNum = num2;
                time2 = setInterval(function(){
                            (num2)--;
                            timer = parseInt(self.innerHTML.split("%")[0]) - 2;
                            if(timer>0){
                                self.innerHTML = timer + "%";
                            // 算出圆周上每一个 A 的 x,y 轴
                                var a = Math.sin( num2 * Math.PI / 180 ) * r;
                                var b = Math.cos( num2 * Math.PI / 180 ) * r;  
                                // 算出 圆周上每一个 A 的坐标
                                self.style.left = init.x + b + 'px';
                                self.style.top = init.y + a + 'px';
                            }else{
                                self.innerHTML = 0 +"%";
                                clearInterval(time2);
                                stop = getClass('c3','stop')[0];
                                run = getClass('c3','run')[0];
                                charge(self,stop,run);
                               // run.removeAttribute("disabled");
                                stop.setAttribute("disabled","disabled");
                            } 
                        },40);
                break;
          case 'div5':
                realNum = num3;
                time3 = setInterval(function(){        
                            (num3)--;
                            timer = parseInt(self.innerHTML.split("%")[0]) - 2;
                            if(timer>0){
                                self.innerHTML = timer + "%";
                                // 算出圆周上每一个 A 的 x,y 轴
                                var a = Math.sin( num3 * Math.PI / 180 ) * r;
                                var b = Math.cos( num3 * Math.PI / 180 ) * r;
                                // 算出 圆周上每一个 A 的坐标
                                self.style.left = init.x + b + 'px';
                                self.style.top = init.y + a + 'px';
                            }else{
                                self.innerHTML = 0 +"%";
                                clearInterval(time3);  
                                stop = getClass('c4','stop')[0];
                                run = getClass('c4','run')[0];
                                charge(self,stop,run);
                               // run.removeAttribute("disabled");
                                stop.setAttribute("disabled","disabled");
                            }         
                        },40);
                break;
          default:break;
         }   
    }
    function charge(self,stop,run){
        var timer = 0;
        var time5 = setInterval(function(){
            timer = parseInt(self.innerHTML.split("%")[0]) + 2;
            if(timer <= 100){
                self.innerHTML = timer +"%";
            }else{
                clearInterval(time5);
                run.removeAttribute("disabled");
            }
        },200);
    }
    function runDefault(){
        var num = 0,x,y,addX,addY;
        var a = Math.sin( num*Math.PI/180 ) ;
        var b = Math.cos( num*Math.PI/180 ) ; 
        return {num:0,x:250,y:250,addX:a,addY:b};
    }
    function stopFun(){
        var sof = randomBag();
        var opt = createOption();
        if(sof == "false"){
            switch(this.parentNode.className){
                case "item1":
                    opt.text = "1号球停止信息丢包";
                    break;
                case "item2":
                    opt.text = "2号球停止信息丢包";
                    break;
                case "item3":
                    opt.text = "3号球停止信息丢包";
                    break;
                case "item4":
                    opt.text = "4号球停止信息丢包";
                    break;
                default:break;
            }
            opt.style.color = "red";
            selectCom.appendChild(opt);
        }else{
            var run="";
            switch(this.parentNode.className){
                case "item1":
                    stopNow('div1');
                    run = getClass('c1','run')[0];
                    opt.text = "1号球停止成功";
                    break;
                case "item2":
                    stopNow('div3');
                    run = getClass('c2','run')[0];
                    opt.text = "2号球停止成功";
                    break;
                case "item3":
                    stopNow('div4');
                    run = getClass('c3','run')[0];
                    opt.text = "3号球停止成功";
                    break;
                case "item4":
                    stopNow('div5');
                    run = getClass('c4','run')[0];
                    opt.text = "4号球停止成功";
                    break;
                default:break;
            }
            this.setAttribute("disabled","disabled");
            run.removeAttribute("disabled");
            selectCom.appendChild(opt);
        }
    }
    function stopNow(obj){
        switch(obj){
            case "div1":
                clearInterval(time);
                break;
            case 'div3':
                clearInterval(time1);
                break;
            case "div4":
                clearInterval(time2);
                break;
            case 'div5':
                clearInterval(time3);
                break;
            default:break;
        }
    }

    function destoryFun(){
        var _self = this;
        var sof = randomBag();
        var opt = createOption();
        if(sof == "false"){
            switch(_self.parentNode.id){
                case "c1":
                    opt.text = "1号球销毁信息丢包";
                    break;
                case "c2":
                    opt.text = "2号球销毁信息丢包";
                    break;
                case "c3":
                    opt.text = "3号球销毁信息丢包";
                    break;
                case "c4":
                    opt.text = "4号球销毁信息丢包";
                    break;
                default:break;
            }
            opt.style.color = "red";
            selectCom.appendChild(opt);
        }else{
            
            var create = "",run = "",stop = "";
            var parent = "";
           
            switch(_self.parentNode.id){
                case "c1":
                    parent = getObj("div1");
                    create = getClass('c1','create')[0];
                    run = getClass('c1','run')[0];
                    stop = getClass('c1','stop')[0];
                    opt.text = "1号球销毁成功";
                    num = 0;
                    break;
                case "c2":
                    parent = getObj("div3");
                    create = getClass('c2','create')[0];
                    run = getClass('c2','run')[0];
                    stop = getClass('c2','stop')[0];
                    opt.text = "2号球销毁成功";
                    num1 = 0;
                    break;
                case "c3":
                    parent = getObj("div4");
                    create = getClass('c3','create')[0];
                    run = getClass('c3','run')[0];
                    stop = getClass('c3','stop')[0];
                    opt.text = "3号球销毁成功";
                    num2 = 0;
                    break;
                case "c4":
                    parent = getObj("div5");
                    create = getClass('c4','create')[0];
                    run = getClass('c4','run')[0];
                    stop = getClass('c4','stop')[0];
                    opt.text = "4号球销毁成功";
                    num3 = 0;
                    break;
                default:break;
            }
                var removeObj = parent;
                parent.parentNode.removeChild(parent);
                this.setAttribute("disabled","disabled");
                create.removeAttribute("disabled");
                run.setAttribute("disabled","disabled");
                stop.setAttribute("disabled","disabled");
                selectCom.appendChild(opt);
        }  
    }
    function createOption(){
        var newOption = document.createElement('option');
        return newOption;
    }
    //丢包率30%
    function randomBag(){
        var sof = "";
        var n = Math.floor(Math.random() * 10);
        switch(n){
            case 0:
            case 1:
            case 2:
                sof = "false";
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                sof = "true";
                break;
            default:break;
        }
        return sof;
    }
    function init(){
        var create = getClass(null,'create');
        var run = getClass(null,'run');
        var stop = getClass(null,'stop');
        var destory = getClass(null,'destory');
        for(var i = 0,len = create.length;i < len;i++){
            (function(m){
                addEventHandler(create[m],'click',createFun);
                addEventHandler(run[m],'click',runFun);
                addEventHandler(stop[m],'click',stopFun);
                addEventHandler(destory[m],'click',destoryFun);
            })(i);
        }
       create[0].removeAttribute('disabled');
       create[1].removeAttribute('disabled');
       create[2].removeAttribute('disabled');
       create[3].removeAttribute('disabled');
        for(var j = 0,len1 = create.length;j < len1;j++){
            run[j].disabled = true;
            stop[j].disabled = true;
            destory[j].disabled = true;
        }  
    }
    init();
};
