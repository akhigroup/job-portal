$(document).ready(function () {


    url = "http://localhost:8080/"+ $("#userId").text()+ "/jobseeker";


    var formWorkEx = '<form id="workExFormIdworkExID" name="workExForm" class="form-horizontal">' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="titleworkExID" >Job Title: </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="titleworkExID" placeholder="Job Title">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="companyNameworkExID">Company name: </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="companyNameworkExID" placeholder="Company name">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="fromworkExID">From : </label>' +
        '<div class="col-xs-10">' +
        '<input type="date" class="form-control" id="fromworkExID" placeholder="From date">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="tillworkExID">To : </label>' +
        '<div class="col-xs-10">' +
        '<input type="date" class="form-control" id="tillworkExID" placeholder="Till">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="workExUpdateworkExID"></label>' +
        '<div class="col-xs-10">' +
        '<button id="workExUpdateworkExID" class="btn btn-info" name="workExUpdate">Update</button>' +
        '<button id="workExDeleteworkExID" class="btn btn-danger" style="position: relative; float: right"  name="workExDelete">Delete</button>' +
        '</div>' +
        '</div>' +
        '</form>';

    var formEducation = '<form id="educationFormIdEduID" name="educationForm" class="form-horizontal">' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="schoolEduID" >School/University: </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="schoolEduID" placeholder="School/University name">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="degreeEduID">Degree: </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="degreeEduID" placeholder="Degree">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="fieldEduID">Field: </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="fieldEduID" placeholder="Field">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="eduFromEduID">From : </label>' +
        '<div class="col-xs-10">' +
        '<input type="date" class="form-control" id="eduFromEduID" placeholder="From date">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="eduTillEduID">To : </label>' +
        '<div class="col-xs-10">' +
        '<input type="date" class="form-control" id="eduTillEduID" placeholder="Till">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="eduUpdateEduID"></label>' +
        '<div class="col-xs-10">' +
        '<button id="eduUpdateEduID" class="btn btn-info" name="eduUpdate">Update</button>' +
        '<button id="eduDeleteEduID" class="btn btn-danger" style="position: relative; float: right"  name="eduDelete">Delete</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</form>';

    var formSkill = '<form id="skillFormIdSkillID" name="educationForm" class="form-horizontal">' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="skillSkillID" >Skill: </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="skillSkillID" placeholder="Skill name">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="yearsOfExpSkillID">Degree: </label>' +
        '<div class="col-xs-10">' +
        '<input type="number" class="form-control" id="yearsOfExpSkillID" placeholder="0-10">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="skillAddSkillID"></label>' +
        '<div class="col-xs-10">' +
        '<button id="skillUpdateSkillID" class="btn btn-info" name="skillUpdate">Update</button>' +
        '<button id="skillDeleteSkillID" class="btn btn-danger" style="position: relative; float: right"  name="skillDelete">Delete</button>' +
        '</div>' +
        '</div>' +
        '</form>';


    var showAppliedJobsModal = '<div class="modal" id="showAppliedJobModalJobPostID" role="dialog">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        ' <button type="button" id="closeShowAppliedJobJobPostID" class="close"' +
        ' data-dismiss="modal">&times;</button>' +
        '<h4 class="modal-title text-center form-title">Job Description</h4>' +
        '</div>' +
        '<div class="modal-body padtrbl">' +
        '<form id="showAppliedJobFormId" name="showAppliedJobFormJobPostID" class="form-horizontal">' +
        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showAppliedJobCompanyNameJobPostID">Company</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showAppliedJobCompanyNameJobPostID" ' +
        ' placeholder="Company name" readonly="readonly">' +
        '</div>' +
        '</div>' +

        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showAppliedJobTitleJobPostID">Job Title</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showAppliedJobTitleJobPostID" ' +
        ' placeholder="Job Title" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showAppliedJobDescriptionJobPostID">Description: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showAppliedJobDescriptionJobPostID" ' +
        ' placeholder="Job Description" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3"' +
        'for="showAppliedJobResponsibilitiesJobPostID">Responsibilities: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showAppliedJobResponsibilitiesJobPostID" ' +
        ' placeholder="Responsibilities" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showAppliedJobLocationJobPostID">Location: </label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showAppliedJobLocationJobPostID" ' +
        ' placeholder="Location">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showAppliedJobSalaryJobPostID">Salary : </label>' +
        '<div class="col-xs-9">' +
        '<input type="number" class="form-control" id="showAppliedJobSalaryJobPostID" ' +
        'placeholder="Salary" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" ' +
        'for="showAppliedJobWithdrawJobPostID"></label>' +
        '<div class="col-xs-9">' +
        '<button id="showAppliedJobWithdrawJobPostID" class="btn btn-danger">Withdraw</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    var anchorJobApplied =
        '<a href="#" id="jobsAppliedJobPostID" class="list-group-item list-group-item-action" ' +
        'data-target="#showAppliedJobModalJobPostID" data-toggle="modal" ' +
        '>JobTitle</a>';


    var showInterestedJobsModal = '<div class="modal" id="showInterestedJobModalJobPostID" role="dialog">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        ' <button type="button" id="closeShowInterestedJobJobPostID" class="close"' +
        ' data-dismiss="modal">&times;</button>' +
        '<h4 class="modal-title text-center form-title">Job Description</h4>' +
        '</div>' +
        '<div class="modal-body padtrbl">' +
        '<form id="showInterestedJobFormId" name="showInterestedJobFormJobPostID" class="form-horizontal">' +
        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showInterestedJobCompanyNameJobPostID">Company</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showInterestedJobCompanyNameJobPostID" ' +
        ' placeholder="Company name" readonly="readonly">' +
        '</div>' +
        '</div>' +

        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showInterestedJobTitleJobPostID">Job Title</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showInterestedJobTitleJobPostID" ' +
        ' placeholder="Job Title" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showInterestedJobDescriptionJobPostID">Description: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showInterestedJobDescriptionJobPostID" ' +
        ' placeholder="Job Description" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3"' +
        'for="showInterestedJobResponsibilitiesJobPostID">Responsibilities: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showInterestedJobResponsibilitiesJobPostID" ' +
        ' placeholder="Responsibilities" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showInterestedJobLocationJobPostID">Location: </label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showInterestedJobLocationJobPostID" ' +
        ' placeholder="Location">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showInterestedJobSalaryJobPostID">Salary : </label>' +
        '<div class="col-xs-9">' +
        '<input type="number" class="form-control" id="showInterestedJobSalaryJobPostID" ' +
        'placeholder="Salary" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-xs-12">' +
        '<div class="alert alert-danger" id="showInterestedJobResultJobPostID"></div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" ' +
        'for="showInterestedobWithdrawJobPostID"></label>' +
        '<div class="col-xs-9">' +
        '<button id="showInterestedJobQuickApplyJobPostID" class="btn btn-info">Quick Apply</button>' +
        '<button id="showInterestedJobResumeApplyJobPostID" class="btn btn-info" >Upload Resume and Apply</button>' +
        '<button id="showInterestedJobWithdrawJobPostID" class="btn btn-danger" style="position: relative; float: right" >Not interested</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    var anchorJobInterested =
        '<a href="#" id="jobsInterestedJobPostID" class="list-group-item list-group-item-action" ' +
        'data-target="#showInterestedJobModalJobPostID" data-toggle="modal" ' +
        '>JobTitle</a>';

    var showSearchJobsModal = '<div class="modal searchJobModal" id="showSearchJobModalJobPostID" role="dialog">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        ' <button type="button" id="closeShowSearchJobJobPostID" class="close"' +
        ' data-dismiss="modal">&times;</button>' +
        '<h4 class="modal-title text-center form-title">Job Description</h4>' +
        '</div>' +
        '<div class="modal-body padtrbl">' +
        '<form id="showSearchJobFormId" name="showSearchJobFormJobPostID" class="form-horizontal">' +
        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobCompanyNameJobPostID">Company</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showSearchJobCompanyNameJobPostID" ' +
        ' placeholder="Company name" readonly="readonly">' +
        '</div>' +
        '</div>' +

        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobTitleJobPostID">Job Title</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showSearchJobTitleJobPostID" ' +
        ' placeholder="Job Title" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobDescriptionJobPostID">Description: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showSearchJobDescriptionJobPostID" ' +
        ' placeholder="Job Description" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3"' +
        'for="showSearchJobResponsibilitiesJobPostID">Responsibilities: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showSearchJobResponsibilitiesJobPostID" ' +
        ' placeholder="Responsibilities" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobLocationJobPostID">Location: </label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showSearchJobLocationJobPostID" ' +
        ' placeholder="Location">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobSalaryJobPostID">Salary : </label>' +
        '<div class="col-xs-9">' +
        '<input type="number" class="form-control" id="showSearchJobSalaryJobPostID" ' +
        'placeholder="Salary" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-xs-12">' +
        '<div class="alert alert-danger" id="showSearchJobResultJobPostID"></div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" ' +
        'for="showSearchJobWithdrawJobPostID"></label>' +
        '<div class="col-xs-9">' +
        '<button id="showSearchJobQuickApplyJobPostID" class="btn btn-info">Quick Apply</button>' +
        '<button id="showSearchJobResumeApplyJobPostID" class="btn btn-info" >Upload Resume and Apply</button>' +
        '<button id="showSearchJobFavoriteJobPostID" class="btn btn-info" style="position: relative; float: right" >Add to favorite</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    var anchorJobSearch =
        '<a href="#" id="jobsSearchJobPostID" class="list-group-item list-group-item-action searchResult" ' +
        'data-target="#showSearchJobModalJobPostID" data-toggle="modal" ' +
        '>JobTitle</a>';

    var filterByCompanyNameCheckBox = '<div class="checkbox" id="filterByCompanyNameCheckBoxIDVAL"> ' +
        '<label><input type="checkbox" value="CMPNM">CMPNM</label> ' +
    '</div>';

    var filterByLocationCheckBox = '<div class="checkbox" id="filterByLocationCheckBoxIDVAL"> ' +
        '<label><input type="checkbox" value="LOC">LOC</label> ' +
        '</div>';


    $("#profilePicture").change(function () {
        file =$(this).prop('files')[0];
        reader = new FileReader();
        reader.onloadend = function() {
            pictureVal = reader.result;
            $("#seekerProfileImage").attr("src", pictureVal);

            $.ajax({
                url: url,
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val(),
                    summary: $("#summary").val(),
                    picture : pictureVal.replace("data:image/jpeg;base64,", "")
                }),
                success: function () {
                    console.log("Post done successfully")
                }
            });
        };
        reader.readAsDataURL(file);
    });


    //Search Job
    $("#searchButton").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("#searchResult").empty();
        $("#filterByCompanyName").empty();
        $("#filterByLocation").empty();
        $("#filterBySalary").empty();
        var searchQuery = $("#searchText").val();

        function updateSearchResults() {
            $('.searchResult').hide();

            companyNameFilterResult = [];
            companyNameFilterApplied = false;

            locationNameFilterResult = [];
            locationNameFilterApplied = false;

            filterResult = [];

            function intersect_safe(a, b) {
                ai = 0, bi = 0;
                result = [];

                while (ai < a.length && bi < b.length) {
                    if (a[ai] < b[bi]) {
                        ai++;
                    }
                    else if (a[ai] > b[bi]) {
                        bi++;
                    }
                    else /* they're equal */
                    {
                        result.push(a[ai]);
                        ai++;
                        bi++;
                    }
                }
                return result;
            }


            //As per company Name
            $('#filterByCompanyName  input:checked').each(function () {
                companyNameFilterApplied = true;
                copmanyName = $(this).val();
                $('.searchJobModal').each(function (i, obj) {
                    jobPostId = $(obj).attr("id");
                    jobPostId = jobPostId.replace("showSearchJobModal", "");
                    if ($("#showSearchJobCompanyName" + jobPostId).val() == copmanyName) {
                        companyNameFilterResult.push("#jobsSearch" + jobPostId);
                    }
                });
            });

            //As per Location
            $('#filterByLocation  input:checked').each(function () {
                locationNameFilterApplied = true;
                locationName = $(this).val();
                $('.searchJobModal').each(function (i, obj) {
                    jobPostId = $(obj).attr("id");
                    jobPostId = jobPostId.replace("showSearchJobModal", "");
                    /*alert($("#showSearchJobLocation" + jobPostId).val());
                    alert(locationName);
                    alert($("#showSearchJobLocation" + jobPostId).val() == locationName);*/
                    if ($("#showSearchJobLocation" + jobPostId).val() == locationName) {
                        //$("#jobsSearch" +  jobPostId).show();
                        locationNameFilterResult.push("#jobsSearch" + jobPostId);
                    }
                });
            });

            if (locationNameFilterApplied && companyNameFilterApplied) {
                //alert(locationNameFilterResult);
                //alert(companyNameFilterResult);
                filterResult = intersect_safe(locationNameFilterResult, companyNameFilterResult);
            } else if (locationNameFilterApplied) {
                filterResult = locationNameFilterResult;
            } else if (companyNameFilterApplied) {
                filterResult = companyNameFilterResult;
            }

            for (i = 0; i < filterResult.length; i++) {
                $(filterResult[i]).show();
            }
        }

        $.get(url + "/job/" + searchQuery, function (data, status) {
            object = jQuery.parseJSON(JSON.stringify(data));
            if("undefined" != typeof object.jobPostList && "undefined" != typeof object.jobPostList.jobPost) {
                jobPosts = object.jobPostList.jobPost;
                i = 0;
                for (i = 0; jobPosts.length > i; i++) {
                    jobPostId = jobPosts[i].jobPostId;
                    thisAnchor = anchorJobSearch.replace(/JobPostID/g, jobPostId);
                    thisAnchor = thisAnchor.replace(/JobTitle/g, jobPosts[i].title);
                    thisModal = showSearchJobsModal.replace(/JobPostID/g, jobPostId);
                    if ($("#jobsSearch" + jobPostId).length == 0) {
                        $("#searchResult").append(thisModal);
                        $("#searchResult").append(thisAnchor);
                        $("#showSearchJobResult" + jobPostId).hide();
                    }

                    $("#showSearchJobTitle" + jobPostId).val(jobPosts[i].title);
                    $("#showSearchJobDescription" + jobPostId).val(jobPosts[i].description);
                    $("#showSearchJobResponsibilities" + jobPostId).val(jobPosts[i].responsibilities);
                    $("#showSearchJobLocation" + jobPostId).val(jobPosts[i].location);
                    $("#showSearchJobSalary" + jobPostId).val(jobPosts[i].salary);
                    $("#showSearchJobCompanyName" + jobPostId).val(jobPosts[i].company.company.name);

                    //Adding filters
                    //By company Name
                    if("" ==  $("#filterByCompanyName").text()) {
                        $("#filterByCompanyName").append("By Company name")
                    }
                    companyName = $("#showSearchJobCompanyName" + jobPostId).val();

                    if ($("#filterByCompanyNameCheckBox" + companyName.replace(/\s+/g, '')).length == 0) {
                        thisFilter = filterByCompanyNameCheckBox.replace(/CMPNM/g, companyName);
                        thisFilter = thisFilter.replace("IDVAL", companyName.replace(/\s+/g, ''));
                        $("#filterByCompanyName").append(thisFilter);

                        $("#filterByCompanyNameCheckBox" + companyName.replace(/\s+/g, '')).click(function() {
                            updateSearchResults();
                        });
                    }

                    //By Location
                    if("" ==  $("#filterByLocation").text()) {
                        $("#filterByLocation").append("By Location")
                    }
                    locationName = $("#showSearchJobLocation" + jobPostId).val();

                    if ($("#filterByLocationCheckBox" + locationName.replace(/\s+/g, '')).length == 0) {
                        thisFilter = filterByLocationCheckBox.replace(/LOC/g, locationName);
                        thisFilter = thisFilter.replace("IDVAL", locationName.replace(/\s+/g, ''));
                        $("#filterByLocation").append(thisFilter);

                        $("#filterByLocationCheckBox" + locationName.replace(/\s+/g, '')).click(function() {
                            updateSearchResults();
                        });
                    }


                    $("#showSearchJobFavorite" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        favoriteId = $(this).attr('id').replace("showSearchJobFavorite", "");
                        $.ajax({
                            url: url + "/job/" + favoriteId + "/interest",
                            type: "POST",
                            success: function () {
                                //Close Modal
                                $("#closeShowSearchJob" + favoriteId).click();
                            },
                            error: function (e) {
                                //Close Modal
                                $("#closeShowSearchJob" + favoriteId).click();
                            }
                        });

                    });

                    $("#showSearchJobQuickApply" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        jobPostApplyId = $(this).attr('id').replace("showSearchJobQuickApply", "");
                        $.ajax({
                            url: url + "/job/" + jobPostApplyId + "/application",
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function () {
                                //Close Modal
                                $("#closeShowSearchJob" + jobPostApplyId).click();
                            },
                            error: function (e) {
                                var errorResponse = JSON.parse(e.responseText);
                                //Show error
                                $("#showSearchJobResult" + jobPostApplyId).show();
                                $("#showSearchJobResult" + jobPostApplyId).append(errorResponse.BadRequest.msg);
                            }
                        });
                    });
                }
            } else {

            }
        });

    });


    $("#seekerProfileImage").click(function (e) {
        $("#profilePicture").click();
    });


    //Update Profile
    $("#updateJobSeekerProfile").click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                summary: $("#summary").val()
            }),
            success: function (data) {
                console.log("Post done successfully")
            }
        });
    });



    //Add new Work Ex
    $('#newWorkExAdd').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: url + "/workex/",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                jobTitle: $("#newTitle").val(),
                companyName: $("#newCompanyName").val(),
                from: $("#newFrom").val(),
                to: $("#newTill").val()
            }),
            success: function (data) {
                object = jQuery.parseJSON(JSON.stringify(data));
                workExperienceList = object.workExperienceList.workExperience;
                i = 0;
                for (i = 0; workExperienceList.length > i; i++) {
                    workExId = workExperienceList[i].workExperienceId;
                    thisForm = formWorkEx.replace(/workExID/g, workExId);
                    if ($("#workExFormId" + workExId).length == 0) {
                        $("#workEx").append(thisForm);
                    }
                    $("#title" + workExId).val(workExperienceList[i].jobTitle);
                    $("#companyName" + workExId).val(workExperienceList[i].companyName);
                    $("#from" + workExId).val(workExperienceList[i].from);
                    $("#till" + workExId).val(workExperienceList[i].to);

                    //Event handlers for delete button
                    $("#workExDelete" + workExId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        workExButId = $(this).attr('id');
                        workExButId = workExButId.replace("workExDelete", "");
                        $.ajax({
                            url: url + "/workex/" + workExButId,
                            type: "DELETE",
                            success: function () {
                                $("#workExFormId" + workExButId).remove();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#workExUpdate" + workExId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        workExButId = $(this).attr('id');
                        workExButId = workExButId.replace("workExUpdate", "");
                        $.ajax({
                            url: url + "/workex/" + workExButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                jobTitle: $("#title" + workExButId).val(),
                                companyName: $("#companyName" + workExButId).val(),
                                from: $("#from" + workExButId).val(),
                                to: $("#till" + workExButId).val()
                            }),
                            success: function () {
                            }
                        });
                    });
                }

                $("#closeAddWorkEx").click();
            }
        });
    });

    //Add new Education
    $('#newEducationAdd').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: url + "/education/",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                schoolName: $("#newSchool").val(),
                degree: $("#newDegree").val(),
                field: $("#newField").val(),
                from: $("#newEduFrom").val(),
                to: $("#newEduTill").val()
            }),
            success: function (data) {

                object = jQuery.parseJSON(JSON.stringify(data));
                educationList = object.educationList.education;
                i = 0;
                for (i = 0; educationList.length > i; i++) {
                    eduId = educationList[i].educationId;
                    thisForm = formEducation.replace(/EduID/g, eduId);
                    if ($("#educationFormId" + eduId).length == 0) {
                        $("#education").append(thisForm);
                    }

                    $("#school" + eduId).val(educationList[i].schoolName);
                    $("#degree" + eduId).val(educationList[i].degree);
                    $("#field" + eduId).val(educationList[i].field);
                    $("#eduFrom" + eduId).val(educationList[i].from);
                    $("#eduTill" + eduId).val(educationList[i].to);

                    //Event handlers for delete button
                    $("#eduDelete" + eduId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        eduButId = $(this).attr('id');
                        eduButId = eduButId.replace("eduDelete", "");

                        $.ajax({
                            url: url + "/education/" + eduButId,
                            type: "DELETE",
                            success: function () {
                                $("#educationFormId" + eduButId).remove();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#eduUpdate" + eduId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        eduButId = $(this).attr('id');
                        eduButId = eduButId.replace("eduUpdate", "");
                        $.ajax({
                            url: url + "/education/" + eduButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                schoolName: $("#school" + eduButId).val(),
                                degree: $("#degree" + eduButId).val(),
                                field: $("field" + eduButId).val(),
                                from: $("#from" + eduButId).val(),
                                to: $("#till" + eduButId).val()
                            }),
                            success: function () {
                            }
                        });
                    });

                }

                $("#closeAddEducation").click();
            }
        });
    });

    //Add new Skill
    $('#newSkillAdd').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: url + "/skill/",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                skill: $("#newSkill").val(),
                numberOfYears: $("#newYearsOfExp").val(),
            }),
            success: function (data) {

                object = jQuery.parseJSON(JSON.stringify(data));
                skillList = object.skillList.skill;
                i = 0;
                for (i = 0; skillList.length > i; i++) {
                    skillId = skillList[i].skillId;
                    thisForm = formSkill.replace(/SkillID/g, skillId);
                    if ($("#skillFormId" + skillId).length == 0) {
                        $("#skill").append(thisForm);
                    }

                    $("#skill" + skillId).val(skillList[i].skill);
                    $("#yearsOfExp" + skillId).val(skillList[i].numberOfYears);


                    //Event handlers for delete button
                    $("#skillDelete" + skillId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        skillButId = $(this).attr('id');
                        skillButId = skillButId.replace("skillDelete", "");

                        $.ajax({
                            url: url + "/skill/" + skillButId,
                            type: "DELETE",
                            success: function () {
                                $("#skillFormId" + skillButId).remove();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#skillUpdate" + skillId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        skillButId = $(this).attr('id');
                        skillButId = skillButId.replace("skillUpdate", "");
                        $.ajax({
                            url: url + "/skill/" + skillButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                skill: $("#skill" + skillButId).val(),
                                numberOfYears: $("#yearsOfExp" + skillButId).val()
                            }),
                            success: function () {
                            }
                        });
                    });

                }

                $("#closeAddSkill").click();
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
                $("#firstName").val(object.jobseeker.firstName);
                $("#lastName").val(object.jobseeker.lastName);
                $("#summary").val(object.jobseeker.summary);
                $("#seekerProfileImage").attr("src", "data:image/jpg;base64," + object.jobseeker.picture);


                //Work experience section
                if("undefined" != typeof object.jobseeker.workExperienceList) {
                    workExperienceList = object.jobseeker.workExperienceList.workExperience;
                    i = 0;
                    for (i = 0; workExperienceList.length > i; i++) {
                        workExId = workExperienceList[i].workExperienceId;
                        thisForm = formWorkEx.replace(/workExID/g, workExId);
                        if ($("#workExFormId" + workExId).length == 0) {
                            $("#workEx").append(thisForm);
                        }
                        $("#title" + workExId).val(workExperienceList[i].jobTitle);
                        $("#companyName" + workExId).val(workExperienceList[i].companyName);
                        $("#from" + workExId).val(workExperienceList[i].from);
                        $("#till" + workExId).val(workExperienceList[i].to);

                        //Event handlers for delete button
                        $("#workExDelete" + workExId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            workExButId = $(this).attr('id');
                            workExButId = workExButId.replace("workExDelete", "");

                            $.ajax({
                                url: url + "/workex/" + workExButId,
                                type: "DELETE",
                                success: function () {
                                    $("#workExFormId" + workExButId).remove();
                                }
                            });
                        });

                        //Event handlers for update button
                        $("#workExUpdate" + workExId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            workExButId = $(this).attr('id');
                            workExButId = workExButId.replace("workExUpdate", "");
                            $.ajax({
                                url: url + "/workex/" + workExButId,
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: JSON.stringify({
                                    jobTitle: $("#title" + workExButId).val(),
                                    companyName: $("#companyName" + workExButId).val(),
                                    from: $("#from" + workExButId).val(),
                                    to: $("#till" + workExButId).val()
                                }),
                                success: function () {
                                }
                            });
                        });
                    }
                }



                //Education Section
                if("undefined" != typeof object.jobseeker.educationList) {
                    educationList = object.jobseeker.educationList.education;
                    for (i = 0; educationList.length > i; i++) {
                        eduId = educationList[i].educationId;
                        thisForm = formEducation.replace(/EduID/g, eduId);
                        if ($("#educationFormId" + eduId).length == 0) {
                            $("#education").append(thisForm);
                        }

                        $("#school" + eduId).val(educationList[i].schoolName);
                        $("#degree" + eduId).val(educationList[i].degree);
                        $("#field" + eduId).val(educationList[i].field);
                        $("#eduFrom" + eduId).val(educationList[i].from);
                        $("#eduTill" + eduId).val(educationList[i].to);

                        //Event handlers for delete button
                        $("#eduDelete" + eduId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            eduButId = $(this).attr('id');
                            eduButId = eduButId.replace("eduDelete", "");

                            $.ajax({
                                url: url + "/education/" + eduButId,
                                type: "DELETE",
                                success: function () {
                                    $("#educationFormId" + eduButId).remove();
                                }
                            });
                        });

                        //Event handlers for update button
                        $("#eduUpdate" + eduId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            eduButId = $(this).attr('id');
                            eduButId = eduButId.replace("eduUpdate", "");
                            $.ajax({
                                url: url + "/education/" + eduButId,
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: JSON.stringify({
                                    schoolName: $("#school" + eduButId).val(),
                                    degree: $("#degree" + eduButId).val(),
                                    field: $("field" + eduButId).val(),
                                    from: $("#eduFrom" + eduButId).val(),
                                    to: $("#eduTill" + eduButId).val()
                                }),
                                success: function () {
                                }
                            });
                        });

                    }
                }


                //Skill Section
                if("undefined" != typeof object.jobseeker.skillList) {
                    skillList = object.jobseeker.skillList.skill;
                    for (i = 0; skillList.length > i; i++) {
                        skillId = skillList[i].skillId;
                        thisForm = formSkill.replace(/SkillID/g, skillId);
                        if ($("#skillFormId" + skillId).length == 0) {
                            $("#skill").append(thisForm);
                        }

                        $("#skill" + skillId).val(skillList[i].skill);
                        $("#yearsOfExp" + skillId).val(skillList[i].numberOfYears);


                        //Event handlers for delete button
                        $("#skillDelete" + skillId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            skillButId = $(this).attr('id');
                            skillButId = skillButId.replace("skillDelete", "");

                            $.ajax({
                                url: url + "/skill/" + skillButId,
                                type: "DELETE",
                                success: function () {
                                    $("#skillFormId" + skillButId).remove();
                                }
                            });
                        });

                        //Event handlers for update button
                        $("#skillUpdate" + skillId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            skillButId = $(this).attr('id');
                            skillButId = skillButId.replace("skillUpdate", "");
                            $.ajax({
                                url: url + "/skill/" + skillButId,
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                data: JSON.stringify({
                                    skill: $("#skill" + skillButId).val(),
                                    numberOfYears: $("#yearsOfExp" + skillButId).val()
                                }),
                                success: function () {
                                }
                            });
                        });
                    }
                }

            });
        }

        //Applied Jobs tab
        if (currentTab == '3') {
            $.get(url + "/job/application", function (data, status) {
                object = jQuery.parseJSON(JSON.stringify(data));
                jobPosts = object.jobPosts;
                i = 0;
                for (i = 0; jobPosts.length > i; i++) {
                    jobPostId = jobPosts[i].jobPostId;
                    thisAnchor = anchorJobApplied.replace(/JobPostID/g, jobPostId);
                    thisAnchor = thisAnchor.replace(/JobTitle/g, jobPosts[i].title);
                    thisModal = showAppliedJobsModal.replace(/JobPostID/g, jobPostId);

                    if ($("#jobsApplied" + jobPostId).length == 0) {
                        $("#3").append(thisModal);
                        $("#showAppliedJobTitle" + jobPostId).val(jobPosts[i].title);
                        $("#showAppliedJobDescription" + jobPostId).val(jobPosts[i].description);
                        $("#showAppliedJobResponsibilities" + jobPostId).val(jobPosts[i].responsibilities);
                        $("#showAppliedJobLocation" + jobPostId).val(jobPosts[i].location);
                        $("#showAppliedJobSalary" + jobPostId).val(jobPosts[i].salary);
                        $("#showAppliedJobCompanyName" + jobPostId).val(jobPosts[i].company.company.name);
                        $("#showAppliedJobWithdraw" + jobPostId).click(function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            withdrawId = $(this).attr('id').replace("showAppliedJobWithdraw", "");
                            $.ajax({
                                url: url + "/job/" + withdrawId + "/application",
                                type: "DELETE",
                                success: function () {
                                    //Close Modal
                                    $("#closeShowAppliedJob" + withdrawId).click();
                                    $("#showAppliedJobModal" + withdrawId).remove();
                                    //Remove the link
                                    $("#jobsApplied" + withdrawId).remove();
                                },
                                error: function (e) {
                                    //Close Modal
                                    $("#closeShowAppliedJob" + withdrawId).click();
                                }
                            });

                        });
                        $("#appliedJobsDiv").append(thisAnchor);
                    }
                }


            });
        }

        //Favorites Jobs tab
        if (currentTab == '4') {
            $.get(url + "/job/interest", function (data, status) {
                object = jQuery.parseJSON(JSON.stringify(data));
                jobPosts = object.jobPosts.jobPost;
                i = 0;
                for (i = 0; jobPosts.length > i; i++) {
                    jobPostId = jobPosts[i].jobPostId;
                    thisAnchor = anchorJobInterested.replace(/JobPostID/g, jobPostId);
                    thisAnchor = thisAnchor.replace(/JobTitle/g, jobPosts[i].title);
                    thisModal = showInterestedJobsModal.replace(/JobPostID/g, jobPostId);
                    if ($("#jobsInterested" + jobPostId).length == 0) {
                        $("#4").append(thisModal);
                        $("#interestedJobsDiv").append(thisAnchor);
                        $("#showInterestedJobResult" + jobPostId).hide();
                    }
                    $("#showInterestedJobTitle" + jobPostId).val(jobPosts[i].title);
                    $("#showInterestedJobDescription" + jobPostId).val(jobPosts[i].description);
                    $("#showInterestedJobResponsibilities" + jobPostId).val(jobPosts[i].responsibilities);
                    $("#showInterestedJobLocation" + jobPostId).val(jobPosts[i].location);
                    $("#showInterestedJobSalary" + jobPostId).val(jobPosts[i].salary);
                    $("#showInterestedJobCompanyName" + jobPostId).val(jobPosts[i].company.company.name);

                    $("#showInterestedJobWithdraw" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        withdrawId = $(this).attr('id').replace("showInterestedJobWithdraw", "");
                        $.ajax({
                            url: url + "/job/" + withdrawId + "/interest",
                            type: "DELETE",
                            success: function () {
                                //Close Modal
                                $("#closeShowInterestedJob" + withdrawId).click();
                                $("#showInterestedJobModal" + withdrawId).remove();
                                //Remove the link
                                $("#jobsInterested" + withdrawId).remove();
                            },
                            error: function (e) {
                                //Close Modal
                                $("#closeShowInterestedJob" + withdrawId).click();
                            }
                        });

                    });

                    $("#showInterestedJobQuickApply" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        jobPostId = $(this).attr('id').replace("showInterestedJobQuickApply", "");
                        $.ajax({
                            url: url + "/job/" + jobPostId + "/application",
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function () {
                                //Close Modal
                                $("#closeShowInterestedJob" + jobPostId).click();
                            },
                            error: function (e) {
                                var errorResponse = JSON.parse(e.responseText);
                                //Show error
                                $("#showInterestedJobResult" + jobPostId).show();
                                $("#showInterestedJobResult" + jobPostId).append(errorResponse.BadRequest.msg);
                            }
                        });
                    });

                }
            });
        }


        //var container = "#result"+ currentTenant;
        //$(container).attr('hidden', 'true');
    });

});
