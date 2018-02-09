/*平移动画*/
function setElementPosition(elementID,x,y) {
    var elem=document.getElementById(elementID);
    elem.style.position="absolute";
    elem.style.left=x+"px";
    elem.style.top=y+"px";
}

function moveElement(elementID,final_x,final_y,interval) {
    var elem=document.getElementById(elementID);        /*注意此处的参数*/
    if(!elem.style.left || !elem.style.top)return false;
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dis_x=Math.ceil(Math.abs((xpos-final_x)/5));
    var dis_y=Math.ceil(Math.abs((ypos-final_y)/5));
    if(elem.movement){
        clearTimeout(elem.movement);                 //如果执行平移操作时当前还有一个平移事件，就把它删除（否则会出现多个事件同时出现甚至事件矛盾的情况）
    }
    if(xpos==final_x && ypos==final_y){
        return true;
    }
    if(xpos>final_x){
        xpos=xpos-dis_x;
    }
    if(xpos<final_x){
        xpos=xpos+dis_x;
    }
    if(ypos>final_y){
        ypos=ypos-dis_y;
    }
    if(ypos<final_y){
        ypos=ypos+dis_y;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";               /*字符串中嵌入变量的方法*/
    elem.movement=setTimeout(repeat,interval);         //不能使用全局变量的理由是全局变量的事件可以多次创建，即可以同时存在多个事件，而clearTimeout一次只能清除一个，使用属性进行控制可以把事件和特定元素绑定起来，每次创建一个就能准确清除一个
}
