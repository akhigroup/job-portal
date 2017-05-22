$(document).ready(function () {
    url = "http://localhost:8080/"+ $("#userId").val()+ "/company";

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
        ' placeholder="Location" readonly="readonly">' +
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
    
    var filterBySalaryRange = '<b style="padding-right: 10px;">$ MIN_VALUE</b> ' +
	'<input id="salaryRange" type="text" class="span2" value="" data-slider-min="MIN_VALUE" data-slider-max="MAX_VALUE" data-slider-step="STEP_VALUE" data-slider-value="[MIN_VALUE,MAX_VALUE]"/> ' +
	'<b style="padding-left: 10px;">$ MAX_VALUE</b>';

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
            salaryRange = $("#salaryRange").val();
			minSalary = parseInt(salaryRange.split(",")[0]);
			maxSalary = parseInt(salaryRange.split(",")[1]);

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

            function checkSalaryRange(salary) {
				return salary >= minSalary && salary <= maxSalary;
			};
			
            //As per company Name
            $('#filterByCompanyName  input:checked').each(function () {
                companyNameFilterApplied = true;
                copmanyName = $(this).val();
                $('.searchJobModal').each(function (i, obj) {
                    jobPostId = $(obj).attr("id");
                    jobPostId = jobPostId.replace("showSearchJobModal", "");
                    salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
                    if ($("#showSearchJobCompanyName" + jobPostId).val() == copmanyName && checkSalaryRange(salary)) {
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
                    salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
                    if ($("#showSearchJobLocation" + jobPostId).val() == locationName && checkSalaryRange(salary)) {
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
            
            if(!companyNameFilterApplied && !locationNameFilterApplied) {
            	 $('.searchResult').show();
            	 minPossibleSalary = parseInt($("#salaryRange").attr("data-slider-min"));
 				maxPossibleSalary = parseInt($("#salaryRange").attr("data-slider-max"));

 				// If range bar has changed
 				if(minSalary != minPossibleSalary || minSalary != maxPossibleSalary) {
 					$(".searchJobModal").each(function (i, obj) {
 						jobPostId = $(obj).attr("id");
 						jobPostId = jobPostId.replace("showSearchJobModal", "");
 						salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
 						if (!checkSalaryRange(salary)) {
 							$("#jobsSearch" + jobPostId).hide();
 						}
 					});
 				}
            }
        }
        
        if(searchQuery != "") {
        	$.get(url + "/job/" + searchQuery, function (data, status) {
                object = jQuery.parseJSON(JSON.stringify(data));
                if("undefined" != typeof object.jobPostList && "undefined" != typeof object.jobPostList.jobPost) {
                    jobPosts = object.jobPostList.jobPost;
                    i = 0;
                    minSal = Number.MAX_VALUE;
					maxSal = Number.MIN_VALUE;
					
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

                        if ($("#filterByCompanyNameCheckBox" + companyName.replace(/[^a-zA-Z0-9]/g, '')).length == 0) {
                            thisFilter = filterByCompanyNameCheckBox.replace(/CMPNM/g, companyName);
                            thisFilter = thisFilter.replace("IDVAL", companyName.replace(/[^a-zA-Z0-9]/g, ''));
                            $("#filterByCompanyName").append(thisFilter);

                            $("#filterByCompanyNameCheckBox" + companyName.replace(/[^a-zA-Z0-9]/g, '')).click(function() {
                                updateSearchResults();
                            });
                        }

                        //By Location
                        if("" ==  $("#filterByLocation").text()) {
                            $("#filterByLocation").append("By Location")
                        }
                        locationName = $("#showSearchJobLocation" + jobPostId).val();

                        if ($("#filterByLocationCheckBox" + locationName.replace(/[^a-zA-Z0-9]/g, '')).length == 0) {
                            thisFilter = filterByLocationCheckBox.replace(/LOC/g, locationName);
                            thisFilter = thisFilter.replace("IDVAL", locationName.replace(/[^a-zA-Z0-9]/g, ''));
                            $("#filterByLocation").append(thisFilter);

                            $("#filterByLocationCheckBox" + locationName.replace(/[^a-zA-Z0-9]/g, '')).click(function() {
                                updateSearchResults();
                            });
                        }
                        
                        // By Salary
						if(parseInt(jobPosts[i].salary) > maxSal) {
							maxSal = parseInt(jobPosts[i].salary);
						} 
						
						if (parseInt(jobPosts[i].salary) < minSal) {
							minSal = parseInt(jobPosts[i].salary);
						}
                    }
                    
                    if("" ==  $("#filterBySalary").text()) {
						$("#filterBySalary").append("By Salary<br>");
						salaryFilterValue = filterBySalaryRange.replace(/MIN_VALUE/g, minSal);
						salaryFilterValue = salaryFilterValue.replace(/MAX_VALUE/g, maxSal);
						stepValue = (maxSal - minSal)/100;
						salaryFilterValue = salaryFilterValue.replace(/STEP_VALUE/g, stepValue);
						$("#filterBySalary").append(salaryFilterValue);
						$("#salaryRange").slider({});
						$("#salaryRange").on('slideStop', () =>{
							updateSearchResults();
						});
					}
                } else {
                }
            });
        }
    });
});
