export default function sub(){
    function isSuccess(a){
        //Checking if every box is non empty
        for(var i =0;i<9;i++){
            for(var j =0;j<9;j++){  
                if (a[i][j] == '.')
                    return false;
            }
        }
        //checking if the box is valid suduku
        if(isValid(a))
            return true;
        return false;
    }
    if (isSuccess(getVal())){
        alert("Congratulations! Level Cleared");
    }
    else{
        alert("Not Yet Done");
    }
    return 0;
}