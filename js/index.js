var endday = new Date('2023/02/09 23:59:59');  //表示終了日
    var today = new Date();
    var deleteimg = document.getElementsByClassName("new");  //表示切替したいクラス
 
    for(var i=0; i < deleteimg.length; i++) {
        if ( today < endday ){
            deleteimg[i].style.display="block";
        }else{
            deleteimg[i].style.display="none";
        }
    }