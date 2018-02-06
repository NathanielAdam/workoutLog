$(function(){
    $.extend(WorkoutLog, {
        group: {
            group:[],
            create: function(){

                var group ={
                    groupMember: $("#group-member").val(),
                    groupWorkout: $("#group-workout").val()
                }
                
                // console.log(group.group)

                var groupPost = $.ajax({
                    type: "POST",
                    url: WorkoutLog.API_BASE + "group",
                    data: JSON.stringify(group),
                    contentType: "application/json"
                })
                groupPost.done(
                    function(data) {
                        console.log(data)
                        WorkoutLog.group.group.push(data);
                        $("#group-member").val("")
                        $("#group-workout").val("")
                        
                    }
                )
            },
            fetchGroup: function() {
                var getGroup = $.ajax({
                    type: "GET",
                    url: WorkoutLog.API_BASE + "group",
                    data: JSON.stringify(group),
                    contentType: "application/json"
                    
                 })
                 getGroup.done(function(data) {
                     console.log(data)
                    WorkoutLog.group = data;
                 })
                 .fail(function(err) {
                    console.log(err);
                 });
             },
             setgroup: function() {
                var group = WorkoutLog.group.group;
                var len =group.length;
                var lis = "";
                //code used before delete functionality was added
                // for (var i = 0; i < len; i++) {
                //     lis += "<li class='list-group-item'>" +history[i].def +" - " + history[i].result + "</li>";
                // }
                //end of pre delete commit
                for (var i = 0; i < len; i++) {
                    lis += "<tr><td>" + 
                    group[i].groupMember
                    + " </td><td>" +
                    group[i].groupWorkout+
                    "</td></tr>"
                console.log(lis)
                $('#group-table').children().remove();
                $('#group-table').append(lis);
                }
            }
            // getGroup: function(){
            //     var groupGet = $.ajax({
            //         type: "GET",
            //             url:WorkoutLog.API_BASE+ "group",
            //             data: JSON.stringify(postData),
            //             contentType: "application/json"
            //     }).done(function(data){
            //         console.log(data)

            //     })
            // }
        
        }
    })
    $("#group-submit").on("click", WorkoutLog.group.create);
    
})