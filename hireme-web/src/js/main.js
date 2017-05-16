$(function () {


    var formWorkEx = '<form id="workExFormIdworkExID" name="workExForm" class="form-horizontal">'+
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

    //Add new Work Ex
    $('#newWorkExAdd').click(function(e) {
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
                        url = "http://localhost:8080/2/jobseeker";
                        $.ajax({
                            url: url + "/workex/" + workExButId,
                            type: "DELETE",
                            success: function () {
                                $("#workExFormId" + workExButId).hide();
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
    $('#newEducationAdd').click(function(e) {
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
                field : $("#newField").val(),
                from: $("#newEduFrom").val(),
                to: $("#newEduTill").val()
            }),
            success: function (data) {

                object = jQuery.parseJSON(JSON.stringify(data));
                educationList =  object.educationList.education;
                i = 0;
                for (i = 0; educationList.length > i; i++) {
                    eduId =  educationList[i].educationId;
                    thisForm = formEducation.replace(/EduID/g, eduId);
                    if($("#educationFormId" + eduId).length == 0) {
                        $("#education").append(thisForm);
                    }

                    $("#school" + eduId).val(educationList[i].schoolName);
                    $("#degree" + eduId).val(educationList[i].degree);
                    $("#field" + eduId).val(educationList[i].field);
                    $("#eduFrom" + eduId).val(educationList[i].from);
                    $("#eduTill" + eduId).val(educationList[i].to);

                    //Event handlers for delete button
                    $("#eduDelete" + eduId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        eduButId = $(this).attr('id');
                        eduButId = eduButId.replace("eduDelete", "");

                        $.ajax({
                            url: url+ "/education/"+ eduButId,
                            type: "DELETE",
                            success: function() {
                                $("#educationFormId" + eduButId).hide();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#eduUpdate" + eduId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        eduButId = $(this).attr('id');
                        eduButId = eduButId.replace("eduUpdate", "");
                        $.ajax({
                            url: url+ "/education/"+ eduButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType : "json",
                            data: JSON.stringify({
                                schoolName : $("#school" + eduButId).val(),
                                degree : $("#degree"  + eduButId).val(),
                                field : $("field" + eduButId).val(),
                                from : $("#from"  + eduButId).val(),
                                to : $("#till"  + eduButId).val()
                            }),
                            success: function() {
                            }
                        });
                    });

                }

                $("#closeAddEducation").click();
            }
        });
    });

    //Add new Skill
    $('#newSkillAdd').click(function(e) {
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
                skillList =  object.skillList.skill;
                i = 0;
                for (i = 0; skillList.length > i; i++) {
                    skillId =  skillList[i].skillId;
                    thisForm = formSkill.replace(/SkillID/g, skillId);
                    if($("#skillFormId" + skillId).length == 0) {
                        $("#skill").append(thisForm);
                    }

                    $("#skill" + skillId).val(skillList[i].skill);
                    $("#yearsOfExp" + skillId).val(skillList[i].numberOfYears);


                    //Event handlers for delete button
                    $("#skillDelete" + skillId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        skillButId = $(this).attr('id');
                        skillButId = skillButId.replace("skillDelete", "");

                        $.ajax({
                            url: url+ "/skill/"+ skillButId,
                            type: "DELETE",
                            success: function() {
                                $("#skillFormId" + skillButId).hide();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#skillUpdate" + skillId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        skillButId = $(this).attr('id');
                        skillButId = skillButId.replace("skillUpdate", "");
                        $.ajax({
                            url: url+ "/skill/"+ skillButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType : "json",
                            data: JSON.stringify({
                                skill : $("#skill" + skillButId).val(),
                                numberOfYears : $("#yearsOfExp"  + skillButId).val()
                            }),
                            success: function() {
                            }
                        });
                    });

                }

                $("#closeAddSkill").click();
            }
        });
    });





    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        currentTab = $(".tab-content").find(".active").attr('id');

        //Profile tab
        if(currentTab == '2') {
            url = "http://localhost:8080/2/jobseeker";

            $.get(url , function (data, status) {
                object = jQuery.parseJSON(JSON.stringify(data));
                $("#firstName").val(object.jobseeker.firstName);
                $("#lastName").val(object.jobseeker.lastName);
                $("#summary").val(object.jobseeker.summary);
                $("#seekerProfileImage").attr("src", "data:image/jpg;base64," + object.jobseeker.picture);


                //Work experience section
                workExperienceList = object.jobseeker.workExperienceList.workExperience;
                i = 0;
                for (i = 0; workExperienceList.length > i; i++) {
                    workExId =  workExperienceList[i].workExperienceId;
                    thisForm = formWorkEx.replace(/workExID/g, workExId);
                    if($("#workExFormId" + workExId).length == 0) {
                        $("#workEx").append(thisForm);
                    }
                    $("#title" + workExId).val(workExperienceList[i].jobTitle);
                    $("#companyName"  + workExId).val(workExperienceList[i].companyName);
                    $("#from"  + workExId).val(workExperienceList[i].from);
                    $("#till"  + workExId).val(workExperienceList[i].to);

                    //Event handlers for delete button
                    $("#workExDelete" + workExId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        workExButId = $(this).attr('id');
                        workExButId = workExButId.replace("workExDelete", "");

                        $.ajax({
                            url: url+ "/workex/"+ workExButId,
                            type: "DELETE",
                            success: function() {
                                $("#workExFormId" + workExButId).hide();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#workExUpdate" + workExId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        workExButId = $(this).attr('id');
                        workExButId = workExButId.replace("workExUpdate", "");
                        $.ajax({
                            url: url+ "/workex/"+ workExButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType : "json",
                            data: JSON.stringify({
                                jobTitle : $("#title" + workExButId).val(),
                                companyName : $("#companyName"  + workExButId).val(),
                                from : $("#from"  + workExButId).val(),
                                to : $("#till"  + workExButId).val()
                            }),
                            success: function() {
                            }
                        });
                    });
                }


                //Education Section
                educationList = object.jobseeker.educationList.education;
                for (i = 0; educationList.length > i; i++) {
                     eduId =  educationList[i].educationId;
                     thisForm = formEducation.replace(/EduID/g, eduId);
                     if($("#educationFormId" + eduId).length == 0) {
                         $("#education").append(thisForm);
                     }

                    $("#school" + eduId).val(educationList[i].schoolName);
                    $("#degree" + eduId).val(educationList[i].degree);
                    $("#field" + eduId).val(educationList[i].field);
                    $("#eduFrom" + eduId).val(educationList[i].from);
                    $("#eduTill" + eduId).val(educationList[i].to);

                     //Event handlers for delete button
                     $("#eduDelete" + eduId).click(function(e) {
                         e.preventDefault();
                         e.stopPropagation();
                         eduButId = $(this).attr('id');
                         eduButId = eduButId.replace("eduDelete", "");

                         $.ajax({
                             url: url+ "/education/"+ eduButId,
                             type: "DELETE",
                             success: function() {
                                 $("#educationFormId" + eduButId).hide();
                             }
                         });
                     });

                     //Event handlers for update button
                     $("#eduUpdate" + eduId).click(function(e) {
                         e.preventDefault();
                         e.stopPropagation();
                         eduButId = $(this).attr('id');
                         eduButId = eduButId.replace("eduUpdate", "");
                         $.ajax({
                             url: url+ "/education/"+ eduButId,
                             type: "POST",
                             contentType: "application/json; charset=utf-8",
                             dataType : "json",
                             data: JSON.stringify({
                                 schoolName : $("#school" + eduButId).val(),
                                 degree : $("#degree"  + eduButId).val(),
                                 field : $("field" + eduButId).val(),
                                 from : $("#eduFrom"  + eduButId).val(),
                                 to : $("#eduTill"  + eduButId).val()
                             }),
                             success: function() {
                             }
                         });
                     });

                 }

                //Skill Section
                skillList = object.jobseeker.skillList.skill;
                for (i = 0; skillList.length > i; i++) {
                    skillId =  skillList[i].skillId;
                    thisForm = formSkill.replace(/SkillID/g, skillId);
                    if($("#skillFormId" + skillId).length == 0) {
                        $("#skill").append(thisForm);
                    }

                    $("#skill" + skillId).val(skillList[i].skill);
                    $("#yearsOfExp" + skillId).val(skillList[i].numberOfYears);


                    //Event handlers for delete button
                    $("#skillDelete" + skillId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        skillButId = $(this).attr('id');
                        skillButId = skillButId.replace("skillDelete", "");

                        $.ajax({
                            url: url+ "/skill/"+ skillButId,
                            type: "DELETE",
                            success: function() {
                                $("#skillFormId" + skillButId).hide();
                            }
                        });
                    });

                    //Event handlers for update button
                    $("#skillUpdate" + skillId).click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        skillButId = $(this).attr('id');
                        skillButId = skillButId.replace("skillUpdate", "");
                        $.ajax({
                            url: url+ "/skill/"+ skillButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType : "json",
                            data: JSON.stringify({
                                skill : $("#skill" + skillButId).val(),
                                numberOfYears : $("#yearsOfExp"  + skillButId).val()
                            }),
                            success: function() {
                            }
                        });
                    });

                }
            });


        }

        //Applied Jobs tab
        if(currentTab == '3') {
        }

        //Favorites Jobs tab
        if(currentTab == '4') {
        }


        //var container = "#result"+ currentTenant;
        //$(container).attr('hidden', 'true');
    });

});
