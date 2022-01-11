//  <script src="data.js">
//         const para = document.createElement("p");
//         const node = document.createTextNode("This is new.");
//         para.appendChild(node);
        
//         const element = document.getElementById("div1");
//         element.appendChild(para);
//     </script>

// function qty(){
//     let q=document.getElementById("qname").value;
//     q++;
//     document.getElementById("qname").value=q;
    
// }
// function addele(){
//     var x = document.createElement("LI");
//     if(document.getElementById("iname").value){
//     var t= document.createTextNode(document.getElementById("iname").value);
//     x.appendChild(t);
//     document.getElementById("itemslist").appendChild(x);
//     document.getElementById("iname").value="";
//     }

//     else{
//         alert("Fill out the item");
//     }
// }
// function addele(){
//     document.createElement("tr");
//     let sno=document.createElement("td");
//     let p =document.getElementById("iname").value
//     sno=p;
//     document.getElementById("iname").appendChild(sno);
    
//     document.createElement("td");
//     document.createElement("td");
//     document.createElement("td");
// }


// function addele(){
// 	var itemname=document.getElementById("iname").value;
// 	var quantity=document.getElementById("qname").value;
 
// 	if(itemname =="" || quantity ==""){
// 		alert("Fill out the field!");
// 	}else{
// 		var parent=document.createElement('tr');
// 		var col2=document.createElement('td');
//         var col3=document.createElement('td');
//         var col4=document.createElement('td');

/* <div>
        {/* /* // // var tables = document.getElementsByTagName("addrow");
        // // var table = tables[tables.length - 1];
        // // var rows = table.rows;
        // for(let i = 0, td; i < rows.length; i++){
        //     var col1=document.createElement('td');
        //     var value=td.appendChild(document.createTextNode(i + 1));
        //     col1.appendChild(val);
        // } 
 </div> */

// function CountRows() {
//     var totalRowCount = 0;
//     var rowCount = 0;
//     var table = document.getElementById("addrow");
//     var rows = table.getElementsByTagName("tr")
//     for (var i = 0; i < rows.length; i++) {
//         totalRowCount++;
//         if (rows[i].getElementsByTagName("td").length > 0) {
//             rowCount++;
//         }
//     }
// }
// var rows=document.getElementById("addrow").rows.length;
// for(let j=0;j<rows;j++){
//     var col1=document.createElement('td');
//     document.getElementById("newrow").innerHTML=j;
//     var text1=document.createTextNode(newrow);
//     col1.appendChild(text1);
    
// }

		// var text2=document.createTextNode(itemname);
		// var text3=document.createTextNode(quantity);
		// col2.appendChild(text2);
		// col3.appendChild(text3);
		// parent.appendChild(col2);
		// parent.appendChild(col3);
 
		// document.getElementById("addrow").appendChild(parent);
 
		// document.getElementById("iname").value="";
		// document.getElementById("qname").value="";
	// }
// }

function addele()
{   
    if(document.getElementById("iname").value=="" || document.getElementById("qname").value==""){
        return alert("Fill out the details!");
    }
    
        var parent=document.createElement('tr');
        var col1=document.createElement('td');

        var size=document.getElementById("addrow").rows.length;
        if(size==1){
            col1.innerHTML=1;
        }
        else{
             
            var temp=document.getElementById("addrow").rows[size-1].children[0].innerHTML;
            // console.log(temp);
            temp++;
            col1.innerHTML=temp;
        }
         parent.setAttribute("id",col1.innerHTML);

        
        // var itemname=document.getElementById("iname").value;
     	// var quantity=document.getElementById("qname").value;
        // col2.innerHTML=itemname;
        // col3.innerHTML=quantity;  
		var col2=document.createElement('td');
        col2.innerHTML=document.getElementById("iname").value;

        var col3=document.createElement('td');
        col3.innerHTML=document.getElementById("qname").value;


        var col4=document.createElement('td');
        {
            let edit=document.createElement("button");
            edit.onclick=function()//edit button fxn
            {
                document.getElementById("iname").value=col2.innerHTML;
                document.getElementById("qname").value=col3.innerHTML;
                document.getElementById("add_btn").style.visibility="hidden";
                document.getElementById("apply_btn").style.visibility="visible";
                document.getElementById("editid").innerHTML=col1.innerHTML;

            };
            edit.innerHTML="EDIT";


            let del=document.createElement("button");{
            del.onclick=function(r)
            {
                document.getElementById("editid").innerHTML=col1.innerHTML;
                // document.getElementById(col1.innerHTML).remove();

                var size=document.getElementById("addrow").rows.length;
                for(let i=0;i<size;i++){
                    document.getElementById("addrow").rows[i].children[0].innerHTML=i;
                    document.getElementById("addrow").rows[i].id=i;
                }

            };            
            
                del.innerHTML="DELETE";
            }
           
            col4.appendChild(edit);
            col4.appendChild(del);

        }
        
      
        
       
        // col1.appendChild(text1);
		// col2.appendChild(text2);
		// col3.appendChild(text3);
        parent.appendChild(col1);
		parent.appendChild(col2);
		parent.appendChild(col3);
        parent.appendChild(col4);
 
		document.getElementById("addrow").appendChild(parent);
 
		document.getElementById("iname").value="";
		document.getElementById("qname").value=0;

}

function edit(){

    var a=document.getElementById("editid").innerHTML;
    document.getElementById(a).children[1].innerHTML=document.getElementById("iname").value;
    document.getElementById(a).children[2].innerHTML=document.getElementById("qname").value;   
    // document.getElementById("iname").value="";
	// document.getElementById("qname").value="";
    document.getElementById("apply_btn").style.visibility="hidden";
    document.getElementById("add_btn").style.visibility="visible";
    
}

// function del(btn){

//     // document.getElementById(col1.innerHTML).remove();
//     // document.getElementById("add_btn").style.visibility="hidden";
//     // document.getElementById("apply_btn").style.visibility="visible";
//         // v
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
     
// }

function del(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("addrow").deleteRow(i);
  }

