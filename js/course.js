var $jq = jQuery.noConflict();
$jq(document).ready(function() {
    $jq.get("https://demo6370041.mockable.io/getcourses",function(data,status){
        for(var i=0;i<data.data.length;i++) {
            var id = data.data[i].id;
            var name=data.data[i].name;

            var url ="https://demo6370041.mockable.io/course/"+(i+1);
            tr=$("<tr>");
            tr.append($("<td>"+id+"</td>"));
            tr.append($("<td>"+name+"</td>"));
            $("#table-body").append(tr);
            tr1=$("<tr>",{id:'X'+id});
            $("<td colspan='2'>").appendTo(tr1);
            tr1.hide();
            $("#table-body").append(tr1);

        
        }
    }); 

   $(document).on("click","tr",function() {
        var i=$("td:first",this).text();
        var url ="https://demo6370041.mockable.io/course/"+i;
        
        $jq.get(url,function(data,status) {
            var description=data.description;
            var textbook=data.textbook;
            if( $('#X'+i+' td').html()=="") {
                $('#X'+i+' td').html("Description: "+description+"<br/>" +"Textbook: "+ textbook);
                $('#X'+i).show();
            }
            else {
                $('#X'+i+' td').html("");
                $('#X'+i).hide();
            }
        })
        //$("<tr><td colspan='2'>"+description+"<br/>"+textbook+"</td></tr>").insertAfter(this);
         
    }); 

});