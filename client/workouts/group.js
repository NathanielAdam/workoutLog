$(function(){
    $.extend(WorkoutLog, {
        groups: {
            group:[],
            create: function() {
                var grp = {
                    grpMem = $('#group-member'),
                    grpWrk = $('#group-workout')
                }
                var postData = {groups: grp}
                var grpMake = $.ajax({
                    type:"POST",
                        url: WorkoutLog.API_BASE + "groups",
                        data: JSON.stringify(postData),
                        contentType: "application/json"
                })
                define.done(function(data){
                    WorkoutLog.groups.group.push(data.groups)
                    $("#group-member").val("");
                    $("#group-workout").val("");
                    $('a[href="#group"]').tab("show");
                })
            }
        }
    })
})