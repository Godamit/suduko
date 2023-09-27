export default function isValid(a){
    
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
    return true;

}