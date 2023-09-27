
var a = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
var ab = [[".",".",".","1","8",".",".",".","7"],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".",".",".",".",".",".","3"],
        ["4",".","3",".",".",".",".","1","9"],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        ["1",".",".",".","5",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".","5",".",".",".",".","6"]];
function helping(){   
}
function createBoxes(){
    var b = document.getElementById("box");
    for(var i =0;i<9;i++){
        for(var j =0;j<9;j++){
    
            var b1 = document.createElement("input");
            b1.type= 'text';
            b1.className = 'boxx';
            if (i%3 ==2&&i!=8){
                b1.style.borderBottom= '2px solid blue';
            }


            b1.addEventListener("keypress",(e)=>{
                const key = e.which || e.keyCode;
                if (key < 49 || key > 57) {
                    e.preventDefault();
    } 
            })
            
            b1.addEventListener("input",(e)=>{
                
                const target = e.target;
                var t = target.value;
                // alert(t);
                if (t[0]==t[1])
                    target.value = "";
                else if (t.length >1)
                    target.value = t[1];
                
                var help = document.getElementById("helpp");
                if (help.checked)
                {
                    var val = getVal();
                    if (isValid(val)){
                        target.style.textShadow = '0 0 0 green';
                    }
                    else{
                        target.style.textShadow = '0 0 0 red';
                    }
                }
                
                // a = target.value;
                // alert(a);
                
            })
            if(a[i][j]!= '.'){
                b1.disabled = true;
                b1.value= a[i][j];
                b1.style.cursor = "auto";
                b1.style.textShadow = '0 0 0 blue';
            }
            b.appendChild(b1);
        }
    }
}
function getVal(){
    var cells = document.getElementsByClassName("boxx");
    var ar = [],ab=[];
    for(var i =0;i<9;i++){
        for(var j =0;j<9;j++){  
            var val = cells[9*i+j].value;
            if (val!="")
                ar.push(val);
            else
                ar.push(".");
        }
        ab.push(ar);
        ar=[];
    }
    return ab;
}
const fillVal = (x) =>{
    var boxes  = document.getElementsByClassName('boxx');
    // alert(boxes[9].value);
    for(var i =0;i<9;i++){
        for(var j =0;j<9;j++){
            // console.log("Inserted lol " + boxes[(9*i)+j].value);
            if(boxes[(9*i)+j].value == ''){
                boxes[(9*i)+j].value = x[i][j];
                // console.log("Inserted " + a[i][j]);
            }
        }
    }
}
function isValid(a){
    function col(n,i,j){
        for(var p=i+1;p<9;p++){
            if (a[p][j] == '.')
                continue;
            // console.log("cT" + a[p][j]+" "+p+" "+j);
            if (n == a[p][j]){
                // console.log("cF" + a[p][j]+" "+p+" "+j);
                return false;
            }
        }
        return true;
    }
    function row(n,i,j){
        for(var p=j+1;p<9;p++){
            if (a[i][p] == '.')
                continue;
            // console.log("rT" + a[i][p]+" "+i+" "+p);
            if (n == a[i][p]){
                // console.log("rF" + a[i][p]+" "+i+" "+p);
                return false;
            }
                
        
        }
        return true;
    }
    function box(n,i,j){
        var k,l;
        if (0<=i && i<3)
            k = 0;
        else if (3<=i && i<6)
            k = 3;
        else if (6<=i && i<9)
            k = 6;
        if (0<=j && j<3)
            l = 0;
        else if (3<=j && j<6)
            l = 3;
        else if (6<=j && j<9)
            l = 6;

        for(var p=0;p<3;p++){
            for(var q=0;q<3;q++){
                if (a[k+p][l+q] == '.')
                    continue;
                if ((k+p==i) && (l+q==j))
                    continue;
                // console.log("bT" + a[k+p][l+q]+" "+p+" "+q)
                if (n == a[k+p][l+q]){
                    // console.log("bF" + a[k+p][l+q]+" "+(k+p)+" "+(l+q));
                    return false;
                }
            }
        }
        return true;
    }
    //checks the whole validation;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if (a[i][j] == '.')
                continue;
            // console.log("FT" + a[i][j]+" "+i+" "+j);
            if (!col(a[i][j],i,j) || !row(a[i][j],i,j) || !box(a[i][j],i,j)){
                // console.log("FF" + a[i][j]+" "+i+" "+j);
                return false;
            }
               
        }
    }

    //indivdual cell validation

    // if (!col(a,i,j) || !row(a,i,j) || !box(a,i,j)){
    //     // console.log("FF" + a[i][j]+" "+i+" "+j);
    //     return false;
    // }
    return true;

}
function sub(){
    function isSuccess(a){
        for(var i =0;i<9;i++){
            for(var j =0;j<9;j++){  
                if (a[i][j] == '.')
                    return 0;
            }
        }
        if(isValid(a))
            return 1;
        return 0;
    }
    if (isSuccess(getVal())){
        alert("Congratulations! Level Cleared");
    }
    else{
        alert("Not Yet Done");
    }
    return 0;
}
const sol = () =>{
    var x = solve(a);
    // var x = [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];
    fillVal(x);

}
const reset = ()=>{
    var a = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
    var boxes  = document.getElementsByClassName('boxx');
    for(var i =0;i<9;i++){
        for(var j =0;j<9;j++){
            // console.log(a[i][j]);
            if(a[i][j] == '.')
                boxes[(9*i) + j ].value = "";
            else boxes[(9*i) + j ].value = a[i][j];
        }
    }

}
const solve = (a,i=0,j=0)=>{
    var newj = 0;
    var newi = 0;
    while(a[i+newi][j+newj] != '.')
    {   if (i+newi == 8 && j+newj ==8) break;
        if (j+newj <8)
            newj += 1
        else 
        {
            j = 0
            newj = 0
            newi += 1
        }
    }
    var newa;
    var rt;
    for(var iter=1;iter<=9;iter++){
        
        newa = a;
        newa[i+newi][j+newj] = iter;
        
        if (isValid(newa)){
            if (i+newi == 8 && j+newj ==8)
            {
                return newa;
            }
            rt = solve(newa,i+newi,j+newj);
            if(rt == 0) continue;
            else return newa  
        }
    }
    newa[i+newi][j+newj] = '.';
    return 0;

}
createBoxes();


