$(document).ready(function () {
    var url = "http://localhost:8080/3/company";

    var formJobPosted = '<form id="jobPostFormIdJobPostedID" name="jobPostedForm" class="form-horizontal">' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="titleJobPostedID" >Job Title : </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="titleJobPostedID" placeholder="Job Title">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="locJobPostedID">Location : </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="locJobPostedID" placeholder="Location">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="descJobPostedID">Description : </label>' +
        '<div class="col-xs-10">' +
        '<textarea class="form-control" id="descJobPostedID" placeholder="Description..."></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="respJobPostedID">Responsibilities : </label>' +
        '<div class="col-xs-10">' +
        '<textarea class="form-control" id="respJobPostedID" placeholder="Responsibilities..."></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="salJobPostedID">Salary : </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="salJobPostedID" placeholder="Salary">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="statJobPostedID">Job Status :</label>' +
        '<div class="col-xs-10">' +
        '<select id="statJobPostedID" class="form-control">' +
        '<option value="OPEN">Open</option>' +
        '<option value="FILLED">Filled</option>' +
        '<option value="CANCELLED">Cancelled</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="jobPostUpdateJobPostedID"></label>' +
        '<div class="col-xs-10">' +
        '<button id="jobPostUpdateJobPostedID" class="btn btn-info" name="jobPostUpdate">Update</button>' +
        '</div>' +
        '</div>' +
        '</form>';

    //Add new Job Post
    $('#newJobPostAdd').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: url + "/job/",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                title: $("#newTitle").val(),
                description: $("#newDescription").val(),
                location: $("#newLocation").val(),
                salary: $("#newSalary").val(),
                responsibilities: $("#newResponsibilities").val()
            }),
            success: function (data) {

                object = jQuery.parseJSON(JSON.stringify(data));

                jobPostedList = object.jobPostList.jobPost;
                i = 0;
                for (i = 0; jobPostedList.length > i; i++) {
                    jobPostId = jobPostedList[i].jobPostId;
                    thisForm = formJobPosted.replace(/JobPostedID/g, jobPostId);
                    if ($("#jobPostFormId" + jobPostId).length == 0) {
                        $("#jobPosted").append(thisForm);
                    }
                    $("#title" + jobPostId).val(jobPostedList[i].title);
                    $("#loc" + jobPostId).val(jobPostedList[i].location);
                    $("#desc" + jobPostId).val(jobPostedList[i].description);
                    $("#resp" + jobPostId).val(jobPostedList[i].responsibilities);
                    $("#sal" + jobPostId).val(jobPostedList[i].salary);
                    $("#stat" + jobPostId).val(jobPostedList[i].jobPostStatus);

                    //Event handlers for update button
                    $("#jobPostUpdate" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        jobPostButId = $(this).attr('id');
                        jobPostButId = jobPostButId.replace("jobPostUpdate", "");
                        $.ajax({
                            url: url + "/job/" + jobPostButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                title: $("#title" + jobPostButId).val(),
                                description: $("#desc" + jobPostButId).val(),
                                location: $("#loc" + jobPostButId).val(),
                                salary: $("#sal" + jobPostButId).val(),
                                responsibilities: $("#resp" + jobPostButId).val(),
                                jobPostStatus: $("#stat" + jobPostButId).val()
                            }),
                            success: function () {
                            }
                        });
                    });
                }
                $("#closeAddJobPost").click();
            }
        });
    });

    //Update Profile
    $("#updateCompanyProfile").click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $("#companyProfileImage").attr("src",$("#logoUrl").val());
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                name: $("#name").val(),
                logoURL: $("#logoUrl").val(),
                location: $("#location").val(),
                description: $("#description").val(),
                website: $("#website").val()
            }),
            success: function (data) {
                console.log("Post done successfully")
            }
        });
    });

    //Navigation to other tab
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        currentTab = $(".tab-content").find(".active").attr('id');

        //Profile tab
        if (currentTab == '2') {

            $.get(url, function (data, status) {
                object = jQuery.parseJSON(JSON.stringify(data));
                $("#name").val(object.company.name);
                $("#logoUrl").val(object.company.logoURL);
                $("#location").val(object.company.location);
                $("#description").val(object.company.description);
                $("#website").val(object.company.website);
                $("#companyProfileImage").attr("src", object.company.logoURL);

                //Job Posted section
                jobPostedList = object.company.jobPosts.jobPost;
                i = 0;
                for (i = 0; jobPostedList.length > i; i++) {
                    jobPostId = jobPostedList[i].jobPostId;
                    thisForm = formJobPosted.replace(/JobPostedID/g, jobPostId);
                    if ($("#jobPostFormId" + jobPostId).length == 0) {
                        $("#jobPosted").append(thisForm);
                    }
                    $("#title" + jobPostId).val(jobPostedList[i].title);
                    $("#loc" + jobPostId).val(jobPostedList[i].location);
                    $("#desc" + jobPostId).val(jobPostedList[i].description);
                    $("#resp" + jobPostId).val(jobPostedList[i].responsibilities);
                    $("#sal" + jobPostId).val(jobPostedList[i].salary);
                    $("#stat" + jobPostId).val(jobPostedList[i].jobPostStatus);

                    //Event handlers for update button
                    $("#jobPostUpdate" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        jobPostButId = $(this).attr('id');
                        jobPostButId = jobPostButId.replace("jobPostUpdate", "");
                        $.ajax({
                            url: url + "/job/" + jobPostButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                title: $("#title" + jobPostButId).val(),
                                description: $("#desc" + jobPostButId).val(),
                                location: $("#loc" + jobPostButId).val(),
                                salary: $("#sal" + jobPostButId).val(),
                                responsibilities: $("#resp" + jobPostButId).val(),
                                jobPostStatus: $("#stat" + jobPostButId).val()
                            }),
                            success: function () {
                            }
                        });
                    });
                }
            });
        }
    });
});
