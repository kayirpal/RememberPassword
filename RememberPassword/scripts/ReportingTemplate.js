var TempClick = null, isReportInEditMode = false, showSelectedTile = 0;
var pageProperties;
var pageIsCheckedOutToCurrentUser = false;
var pageIsCheckedOutToOtherUser = false;
var globalResponse = '';
var overlayMessage = '';
$(document).on('click', '._editDone', function () {
    hideAllEditTabs();
    //To change the End-edit Image in the Edit image
    //$("#_editDone ._pageIcon").removeClass("_editDone").addClass("_editPage");
    //$("#_editDone ._doneIconText").text("Edit");
    $("#_editDone").hide();
    $("#_editPage").show();
});
//Executed on click of Edit Button
$(document).on('click', '._editPage', function () {

    $("#_editPage").hide();
    $(".rt-pagelayout-in-edit").show();
    $(".rt-page-edit-mode").hide();
    $("#_editDone").show();
    $("#_savePage").show();
    $("#_cancelEditPage").show();
    //$("._editIconText").hide();  // not required parent div is already hidden
    //$("._doneIconText").show();
    $("#rt-filter-tile-img").hide();
    $("#_configurePage").hide();

    // to hide the filter panel
    $("._rpl_Tabs, .rt-page-header, .rt-filter-header, .rt-report-page-edit, .rt-pagelayout-metadata-panel, .rt-filter-checkbox-save, .topPaddingBar, .rt-navigation-header, .rt-navigation-edit-mode, .rt-navigation-checkbox-save, #rt-navigation-tile-img, .rt-section-txt-div, .addTile, #rt-report-section-tile-div_0, .rt-add-new-section-button").show();
    $(".rt-pagelayout-filter-panel").css("margin-bottom", "0px");

    if (!metadata || ((metadata["ReportInformation"] == undefined || metadata["ReportInformation"] == "") && (metadata["ReportTrainingLink"] == undefined || metadata["ReportTrainingLink"] == ""))) {
        document.getElementById("rt-metadata-edit-checkbox").checked = false;
    }
    else {
        document.getElementById("rt-metadata-edit-checkbox").checked = true;
        $("._rt-metadata-panel-section-save-discard").show();
        getMetadata();
        $("#selectedmetadata").removeClass("hide");
    }


    //If Checkbox is selected display filter panel
    if ($("#rt-filter-edit-checkbox").prop('checked') === true) {
        $("#FilterWrapper, #rt-btn-filter-configPopup").show();
    }

    $("#rt-filter-tile-img").hide();
    $("#rt-metadata-header").removeClass("hide");
    $("#rt-metadata-checkbox-save").removeClass("hide");
    // To hide the navigation panel 
    $("#rt-navigation-section").css("background", "#fafafa").css("border-bottom", "4px solid #1570a6");
    //$("._NavTile").removeClass("selectedNavTab");
    //$("._NavTile").last().addClass("selectedNavTab");
    $("#rt-navigation-section").css("padding-bottom", "22px").css("margin-bottom", "40px");

    // To hide the report panel	
    $(".rt-report-section").css("background", "transparent").css("min-height", "278px");

    /* To show the Edit and Delete Image In Tile, Chart, List*/
    $(".tile .deleteTile").addClass("deleteTileContainer");
    $("#tileContainer .deleteTile").addClass("deleteTileContainer");
    $("._NavTile .deleteTile").addClass("deleteTileContainer");

    //Add Click Event for Report Tiles
    $(".tile").not(function (index, element) { return $(element).parent().hasClass("_NavTile") })
         .attr("onclick", "edit(this)");

    //Add Edit Image for all the tiles
    $(".tile").addClass("editRTTile")
         .addClass("editImage");
    $(".GridContainer").each(function () {
        var editDiv = document.createElement("div");
        editDiv.className = "bg_GridEdit";
        editDiv.setAttribute("onclick", "editGrid($(this))");
        $(this).prepend($(editDiv));
    });
    //attr("onclick", "editGrid(this)");
    $(".deleteTileContainer").show();

    //To change the Edit Image in the End-edit image
    //$("#_editDone ._editPage").removeClass("_editPage").addClass("_editDone");
    //$("#_editDone ._doneIconText").text("End edit");

    //Remode End Edit Class
    $(".endEditMode").removeClass("endEditMode");

    //Add the Margin Betwwen two section
    //Remove margin between the tow section
    $(".rt-report-section").css("margin-bottom", "30px");
    // To hide the Save-Section and Delete Icon in the filter panel
    $("._rt-filter-panel-section-save-discard").hide();
    isReportInEditMode = true;

    if (isFilterSectionEnabled) {
        //Show Filter Panel in Edit Mode
        showFilterPanel();
    } else {
        hideFilterPanel();
    }

    $("#rt-pagelayout-in-edit").addClass("inEditMode");

    //Find all the zing charts
    $(".zc-rel.zc-top, #rightpart, .MediumRightpart").parent().prepend("<div class='zingChartEditIcon'>");
    $(".TileChartTitle").parent().prepend("<div class='zingChartEditIcon'></div>");
    //Going to Edit Mode
    if (isNavigationSectionEnabled) {
        $("#rt-navigation-section").show();
    } else {
        $("#rt-navigation-section").hide();
    }
    //Disable the Anchor Tag when click on the Edit Icon
    //$(".rt-report-section").children().not(".addTile").attr("disabled", "disabled");
    $(".rt-report-section a").attr("disabled", "disabled");
    if (!isPageVersioningOff && !pageIsCheckedOutToOtherUser && !pageIsCheckedOutToCurrentUser && !pageEditModeClicked) {
        pageEditModeClicked = true;
        _checkOutPage();
    }
});




var addNewSection = '<div id="section{0}"> <div class="rt-line-height"></div> <div class="_toTable _width rt-section-txt-div">  <div class="rt-section-name">  <div class="rt-section-name">Section name</div> <div><input class="rt-section-name" id="rt-report-section-name" type="text"></div> </div> <div class="rt-section-txt" id="close-button-img_0">  <div class="rt-section-txt-postion">Position</div> <div><input class="rt-section-postion" id="rt-report-section-postion" type="text"></div> </div> <div class="rt-report-panel-section-delete"> <div class="_pageIconPanel" id="_saveReportSection">  <div class="_saveReportSection _pageIcon"></div>  <div class="_iconText">Save section</div>   </div> <div class="_pageIconPanel" id="_cancelReportSection">  <div class="_cancelReportSection _pageIcon"></div> <div class="_iconText">Cancel</div> </div> <div class="_pageIconPanel" id="_deleteReportSection" onclick=\"rtSectionClose("rt-section_{0}")\"> <div class="_deleteReportSection _pageIcon"></div><div class="_iconText">Delete</div></div>   </div> </div> <div class="_toTable _width  rt-report-section"><div class="addTile" id="addTile{0}" onclick="editTile(this)"><img id="rt-report-section-tile-img" src="' + webAPIurl + '/SiteAssets/PlatformComponentReportingTemplate/images/AddaTab.png"></div></div></div>'
//var addNewSection = '<div class="_toTable _width rt-section-txt-div"><div class="rt-section-name"><div class="rt-section-name">Section name</div><div><input class="rt-section-name" id="rt-report-section-name" type="text" value="Test" section="section{0}"></div></div><div class="rt-section-txt" id="close-button-img_0"><div class="rt-section-txt-postion">Position</div><div><input class="rt-section-postion" id="rt-report-section-postion" type="text" value="5"></div></div><div class="rt-report-panel-section-delete"><div class="_pageIconPanel  saveSection" id="_saveReportSection" onclick="saveSection(this)" sectionid="section{0}"><div class="_saveReportSection _pageIcon"></div><div class="_iconText">Save section</div></div><div class="_pageIconPanel cancelSection" id="_cancelReportSection" onclick="cancelSection(this)" sectionid="section{0}"><div class="_cancelReportSection _pageIcon"></div><div class="_iconText">Cancel</div></div><div class="_pageIconPanel deleteSection" id="_deleteReportSection" onclick="deleteSection(this)" sectionid="section{0}"><div class="_deleteReportSection _pageIcon"></div><div class="_iconText">Delete</div></div></div></div>';
var iSectionIndex = 1;
var iCloseButtonIndex = 1;
var iSectionInReportPanle = 0;
var NavigationSection = {};
var isCheckOut = false;
var isFilterSectionEnabled = false;
var isNavigationSectionEnabled = false;
var pageEditModeClicked = false;
// edit section check box is checked 

$('#rt-report-configPopup-overlay').hide();

$("#rt-navigation-section").hide();


//TODO(ESBI): Check if required
$("#s4-workspace").css({ "max-width": "1250px", "overflow": "hidden" });
// filter edit check box checked in


$("#rt-metadata-edit-checkbox").on('click', function () {

    if ($("#rt-metadata-edit-checkbox").is(':checked')) {
        $("._rt-metadata-panel-section-save-discard").show();
        getMetadata();
        $("#selectedmetadata").removeClass("hide");
    }
    else {
        $("._rt-metadata-panel-section-save-discard").hide();
        $("#selectedmetadata").addClass("hide");
    }
});

// navigation edit check box checked in
$("#rt-navigation-edit-checkbox").on('click', function () {
    if ($("#rt-navigation-edit-checkbox").is(':checked')) {
        $("._rt-nav-panel-section-save-discard").show();
        //$("._NavTile").hide();
    }
    else {
        $("._rt-nav-panel-section-save-discard").hide();
    }

    if ($("#rt-navigation-edit-checkbox").is(':checked')) {
        $("#rt-navigation-default-zone").hide();
        $("#rt-navigation-section").show();
        isNavigationSectionEnabled = true;
    }
    else {
        $("#rt-navigation-default-zone").show();
        $("#rt-navigation-section").hide();
        isNavigationSectionEnabled = false;
    }
});


// report panel edit check box checked in
$("#rt-report-edit-checkbox").on('click', function () {
    if ($("#rt-report-edit-checkbox").is(':checked')) {
        $("#rt-report-default-zone").hide();
        $("#rt-add-new-section-button").show();
        $("#_rt_report_discard_save").show()
        $("#rt-report-sections").show();
    }
    else {

        $("#rt-report-tile-img").hide();
        $("#_rt_report_discard_save").hide();
        $("#rt-filter-tile-img").hide();
    }
});
var disableOverlaybackground = function () {
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);;
};
function showFilterPanel() {
    isFilterSectionEnabled = true;
    $("#rt-filter-default-zone").hide();
    $("#rt-filter-tile-img").show();
    $("#_rt_filter_discard_save").show();
    $("#rt-btn-filter-configPopup").show();
    $("#rt-add-filter-tile").show();
    $("._rt-filter-panel-section-save-discard").hide();
    $(".rt-filter-checkbox-save").addClass("rt-filter-checkbox-save-height");
    if ($('#FilterWrapper').html().trim() === "") {
        $("#FilterWrapper").show();
        $("#rt-filter-tile-img").show();
        $("._rt-filter-panel-section-save-discard").hide();

        /*$("#rt-btn-filter-configPopup").on('click', function () {

            $.ajax({
                type: "POST",
                url: sFilterServicePath + '/RetrieveSiteConfigurations',
                //data: JSON.stringify(oRequestData),
                contentType: "application/json",
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType: "json",
                success: function (msg) {
                    try {
                        // Parse and initialize the response data
                        var sResponseData = unescape(msg),
			                oReturnData = JSON.parse(sResponseData)

                        GetSiteNames(oReturnData);
                    }
                    catch (exp) {
                        log(exp);
                    }
                },
                error: function (xmlRequest) {
                }
            });
        });*/
    }
    else {
        $("#FilterWrapper").show();
        $("#rt-filter-tile-img").hide();
    }
}
function hideFilterPanel() {
    isFilterSectionEnabled = false;
    $("#rt-filter-default-zone").show();
    $("#rt-filter-tile-img").hide();
    $("#_rt_filter_discard_save").hide();
    $("#rt-btn-filter-configPopup").hide();

    $("#FilterWrapper").hide();
    $("._rt-filter-panel-section-save-discard").hide();
    $(".rt-filter-checkbox-save").removeClass("rt-filter-checkbox-save-height");
}
// Filter panel edit check box checked in
$("#rt-filter-edit-checkbox").on('click', function () {
    if ($("#rt-filter-edit-checkbox").is(':checked')) {
        showFilterPanel();
    }
    else {
        hideFilterPanel();

    }
});




// add new section in report panel 
//$("#rt-add-new-section-button").click(function () {
//    // $(".rt-add-new-section-button").css("opacity", "0.3");
//    // $(".rt-report-panel-section-delete").css("opacity", "0.3");
//    var oAddNewSectionItem = addNewSection;
//    var sectionId = $(".rt-report-section").length + 1;
//    oAddNewSectionItem = (((oAddNewSectionItem.replace('{0}', sectionId)).replace('{0}', sectionId)).replace('{0}', sectionId)).replace("{0}", sectionId);
//    $("#rt-report-sections").append(oAddNewSectionItem);
//    iSectionIndex++;
//    iCloseButtonIndex++;
//});

function rtSectionClose(selectedDivToDelete) {

    $("#" + selectedDivToDelete).remove().animate({ height: "20px" }, 500);

}
//section close button image click 
$("#rt-section-close-button").click(function () {

    var sCloseButtonDivID = $(this).parent().attr("id");
    var iRemoveSectionIndex = sCloseButtonDivID.substr(sCloseButtonDivID.indexOf('_'));
    $("#rt-section" + iRemoveSectionIndex).remove();

}
);

// report panel discard changes button click 
$("#rt-report-disacrd-changes").click(function () {

    $("#rt-report-sections").empty();

});

// filter section 
$("#rt-filter-tile-img").hide();
$("#_rt_filter_discard_save").hide()




// report section
$("#_rt_report_discard_save").hide();


// hide default zone for report panel 
$("#rt-report-default-zone").hide();

// hide page edit mode by default
$(".rt-pagelayout-in-edit").hide();

// edit page layout on click

// page level buttons Java script 
var _rtPageLevelButtonOnFirstLoad = function () {
    $("#_editDone").hide();
    $("#_savePage").hide();
    $("#_cancelEditPage").hide();
    $("#_configurePage").hide();
    $("#_publishPage").hide();
}

// edit icon filter JS


function hideAllEditTabs() {

    /* to hide the filter panel */
    $("._rpl_Tabs, .rt-page-header, .rt-filter-header, .rt-report-page-edit, .rt-pagelayout-metadata-panel, .rt-filter-checkbox-save, #rt-filter-tile-img, .topPaddingBar, .rt-navigation-header, .rt-navigation-edit-mode, .rt-navigation-checkbox-save, #rt-navigation-tile-img, .rt-section-txt-div, #rt-report-section-tile-div_0, .addTile, .rt-add-new-section-button").hide();
    $(".rt-pagelayout-filter-panel").css("margin-bottom", "30px");

    //If Checkbox is selected display filter panel
    if ($("#rt-filter-edit-checkbox").prop('checked') === true) {
        $(".topPaddingBar, #rt-btn-filter-configPopup").show();
    }

    /* To hide the navigation panel */
    $("#rt-navigation-section").css("background", "none")
    //    $("#rt-navigation-section").css("border-bottom", "4px solid #1570a6");
    //  $("#rt-navigation-section").css("padding-bottom", "22px").css("margin-bottom", "40px");
    $(".rt-pagelayout-in-edit").show();

    if ($("#rt-navigation-section").children().length > 1) {
        $("#rt-navigation-section").css("border-bottom", "4px solid #1570a6");
        //$("._NavTile").removeClass("selectedNavTab");
        //$("._NavTile").last().addClass("selectedNavTab");
        $("#rt-navigation-section").css("padding-bottom", "22px").css("margin-bottom", "40px");
    } else {
        $("#rt-navigation-section").css("border-bottom", "none");
        $("#rt-navigation-section").css("padding-bottom", "0px").css("margin-bottom", "0px");
        $("#rt-navigation-section").css("background", "none");
    }

    /* To hide the report panel */
    $(".rt-report-section").css("background", "none").css("min-height", "auto");

    /* To hide the Edit and Delete Image In Tile, Chart, List*/
    $(".tile .deleteTileContainer").removeClass("deleteTileContainer");
    $("#tileContainer .deleteTileContainer").removeClass("deleteTileContainer");
    $("._NavTile .deleteTileContainer").removeClass("deleteTileContainer");

    $(".tile").removeClass("editImage");


    $(".tile").removeAttr("onclick");
    $(".GridContainer").each(function () {
        $("#" + $(this).attr("id")).children(".bg_GridEdit").remove();
    });

    //End Edit Navigation Tile
    $("._NavTile").addClass("endEditMode");
    isReportInEditMode = false;
    if (isFilterSectionEnabled) {
        $("#FilterWrapper").show();
        $(".topPaddingBar").show();
        $("#rt-filter-edit-checkbox").prop('checked', 'true');
    }
    if (isNavigationSectionEnabled && ($("#rt-navigation-edit-checkbox").prop('checked') === false)) {
        $("#rt-navigation-edit-checkbox").trigger("click");
        $("#rt-navigation-edit-checkbox").prop('checked', 'true');
        isNavigationSectionEnabled = true;
    }
    $(".addTile").removeClass("showAddTile").addClass("hideAddTile");
    $(".rt-report-section").removeClass("grayBackground").addClass("whiteBackground");
    $(".rt-section-txt-div").removeClass("displaySectiontext").addClass("hideSectiontext");

    //Selecting First Tab
    //if ($("#rt-navigation-section").children("._NavTile").length > 0) {
    //  $("#rt-navigation-section").children("._NavTile")[0].click();
    //}
    //Remove margin between the two section
    $(".rt-report-section").css("margin-bottom", "0px");

    if (isFilterSectionEnabled) {
        //Show Filter Panel in Edit Mode
        showFilterPanel();
    } else {
        hideFilterPanel();
    }

    $("#rt-pagelayout-in-edit").removeClass("inEditMode");

    //On Edit Done
    $(".zingChartEditIcon").remove();

    if (isNavigationSectionEnabled && $("#rt-navigation-section").children().length > 1) {
        $("#rt-navigation-section").show();
    } else {
        $("#rt-navigation-section").hide();
    }
    //Enable the Anchor Tag when click on the End-Edit Icon
    $(".rt-report-section").children().removeAttr("disabled");

    // Display section name
    if (typeof (oSections) !== "undefined") {
        var numberOfTilesInSection = 0, isFirstSectionInTab;
        $.each(oSections, function () {
            numberOfTilesInSection = 0;
            for (var tileIndex = 0; tileIndex < oTiles.length; tileIndex++) {
                if (oTiles[tileIndex].SectionHandle === this.SectionHandle) {
                    ++numberOfTilesInSection;
                }
            }
            this.SectionTitle = $("#" + this.SectionHandle + " #rt-report-section-name").val();
            if (numberOfTilesInSection > 0) {
                $("#" + this.SectionHandle + " .displayNameForSection").text(this.SectionTitle);
                $("#" + this.SectionHandle + " .displayNameForSection").show();
                isFirstSectionInTab = isFirstSection(this.SectionHandle);
                if (isFirstSectionInTab) {
                    $("#" + this.SectionHandle + " .rt-line-height").hide();
                } else {
                    $("#" + this.SectionHandle + " .rt-line-height").show();
                }
            } else {
                $("#" + this.SectionHandle + " .displayNameForSection").text(this.SectionTitle);
                $("#" + this.SectionHandle + " .displayNameForSection").hide();
                $("#" + this.SectionHandle + " .rt-line-height").hide();
            }
        });
    }
}
function isFirstSection(sectionID) {
    var navigationTileHandle, sortedTabSectionObject = [], sortedTabTilesObject = [];
    // Get navigation handle
    $.each(oSections, function (index, element) {
        if (this.SectionHandle === sectionID) {
            navigationTileHandle = this.NavTileHandle;
        }
    });
    // Update section indexes in oTiles object and getting selected navigation tab sections
    for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
        if (oSections[sectionIndex].NavTileHandle === navigationTileHandle) {
            sortedTabSectionObject.push(oSections[sectionIndex]);
        }
    }
    // sort sections object using index
    sortedTabSectionObject.sort(function (obj1, obj2) {
        return obj1.SectionIndex - obj2.SectionIndex;
    });
    if (sortedTabSectionObject[0].SectionHandle === sectionID) {
        return true;
    } else {
        return false;
    }
}
// When click on edit page then go in edit mode
//$("").click(function () {
$(".rt-page-edit-mode-button").unbind("click").click(function () {
    if (!pageEditModeClicked) {
        $("._editPage").trigger("click");
    }
});


// Filter and navigation panel JS

// When click on tile under navigation panel then call another function
$("#rt-report-section-tile-img").click(function () {

    _bindEvents();

});

var _rtReportSectionTileImgClick = function (iSectionIndex) {
    //$('#rt-report-configPopup-overlay').show();
    iSectionInReportPanle = iSectionIndex;
    _bindReportPanelEvents();
    reportingTemplateSectionID = $(obj).parent().parent().attr("id");
    $('.rt-CustomReport-ConfigPopup').css("display", "block");
}

var _bindReportPanelEvents = function () {
    // Click function on save button for report panel configuration pop up
    $("#rt-report-configPopup-ovarlay-save").unbind("click").click(function () {
        _renderReportTile();
    });

    $("#rt-report-section-tile-img").unbind('click').click(function () {
        // $('#rt-report-configPopup-overlay').show();

    });

    $("#rt-report-configPopup-ovarlay-close").unbind('click').click(function () {
        $('#rt-report-configPopup-overlay').hide();

    });
}

var _initRTPanel = function () {
    $("input[type='checkbox']").change();
    _hidePopups();
    _bindEvents();
}
// For hiding the pop up
var _hidePopups = function () {
    $('#rt-filter-configPopup-ovarlay').hide();
    $('#rt-navigation-configPopup-overlay').hide();
    $("#rt-navigation-configPopup-modal-background").hide();
    $('#rt-btn-filter-configPopup').hide();
    $('#rt-report-configPopup-overlay').hide();

    $(".rt-newConnectionField").each(function () {
        $(this).hide();
    });
}
var enableOverlaybackground = function () {
    $('#mask , .Config-popup').fadeOut(300, function () {
        $('#mask').remove();
    });
}

//To close the pop up of navigation panel
$("#rt-navigation-configPopup-ovarlay-close").click(function () {
    NavigationSection.NavigationTiles.hideNavConfigPanel();
});

// To show the filters when click on the Configure filter
var _bindEvents = function () {
    /*$("#rt-btn-filter-configPopup").unbind('click').click(function () {
        _createFilterConfigOverlay();
    });*/
    $("#rt-btn-filter-configPopup").unbind('click').click(function () {
        if ($("#selectsite option").length === 0) {
            disableOverlaybackground();
            $("#rt-btn-filter-configPopup").prop('disabled', true);
            $("#rt-filter-configPopup-ovarlay").show();
            $.ajax({
                type: "POST",
                url: sFilterServicePath + '/RetrieveSiteConfigurations',
                //data: JSON.stringify(oRequestData),
                contentType: "application/json",
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType: "json",
                success: function (msg) {
                    try {
                        // Parse and initialize the response data
                        var sResponseData = unescape(msg),
			                oReturnData = JSON.parse(sResponseData)

                        GetSiteNames(oReturnData);
                    }
                    catch (exp) {
                        log(exp);
                    }
                },
                error: function (xmlRequest) {
                }
            });
        }
        $("#rt-btn-filter-configPopup").prop('disabled', false);
        $('#rt-filter-configPopup-ovarlay').show();
        disableOverlaybackground();
    });
    $("#rt-filter-configPopup-ovarlay-close").unbind('click').click(function () {
        $('#rt-filter-configPopup-ovarlay').hide();
        enableOverlaybackground();
        $('#rt-btn-filter-configPopup').prop('disabled', false);
    });
    $("#rt-navigation-section").find("img").unbind('click').click(function () {
        NavigationSection.NavigationTiles.showConfigPopup("new");
    });
    $("#rt-navigation-configPopup-ovarlay-close").unbind('click').click(function () {
        NavigationSection.NavigationTiles.hideNavConfigPanel();
    });

    //$("#rt-report-section-tile-img").unbind('click').click(function () {
    //     $('#rt-report-configPopup-overlay').show();
    //});

    //$("#rt-report-configPopup-ovarlay-close").unbind('click').click(function () {
    //    $('#rt-report-configPopup-overlay').hide();
    // });
    $("#rt-nav-config-dataSource").unbind("change").change(function () {
        NavigationSection.NavigationTiles.AddNewDataSource();
    });
    // Click function on save button on navigation panel configuration pop up
    $("#rt-navigation-configPopup-ovarlay-save").unbind("click").click(function () {
        NavigationSection.NavigationTiles.checkNavConnection();
        //NavigationSection.NavigationTiles.saveNavigationTileConfiguration();
    });
    $("#rt-navigation-dataSource-validate-btn").unbind("click").click(function () {
        //NavigationSection.NavigationTiles.validateNewConnection();
        NavigationSection.NavigationTiles.validateNavCustomConnection();
    });


    // $("#_editPage").unbind("click").click(function () {
    //   _checkOutPage();
    // });
    $("#_savePage").unbind("click").click(function () {
        saveMetadata();
        saveAllSections();
        //_checkInPage();
        $("#_savePage").hide();
        $("#_editDone").hide();
        $("#_cancelEditPage").hide();
        $("#_editPage").show();
        $("._editIconText").show();
    });
    $("#_publishPage").unbind("click").click(function () {
        _publishPage();
    });

    // fucntion need to be implemented 
    $("#_cancelEditPage").unbind("click").click(function () {
        $("#_savePage").hide();
        $("#_editDone").hide();
        $("#_editPage").show();
        $("#_cancelEditPage").hide();
        _cancelEditPage();
    });
    $("#_configurePage").unbind("click").click(function () {
        // _configurePage();
    });

    //$("#_editDone").unbind("click").click(function () {
    //    _editDone();
    //});

}
//// To show the alert message
var _cancelEditPage = function () {
    cancelEditPage();
}

// To show the alert message
var _configurePage = function () {
    alert("This has dependency on contribute permission");

}

var _checkOutPage = function () {

    var ctx = SP.ClientContext.get_current();
    var page = ctx.get_web().getFileByServerRelativeUrl(window.location.pathname);
    page.checkOut();
    ctx.load(page);
    ctx.executeQueryAsync(Function.createDelegate(this, checkOut_Success),
                                        Function.createDelegate(this, checkOut_Fail));
}
function checkOut_Success(sender, args) {
    // window.location.reload();
}
function checkOut_Fail(sender, args) {
    window.location.reload();
}



// verifying the page is in check out mode 


var _isPageCheckOutMode = function () {

    isCheckOut = pageIsCheckedOutToCurrentUser;
    if (typeof (PageState) != "undefined" && PageState) {
        isCheckOut = PageState.ItemIsCheckedOutToCurrentUser == "1";
    }

}

// View page is Save Mode 
var rtPageSaveMode = function () {
    $(".rt-page-edit-mode").hide();
    $(".rt-pagelayout-in-edit").show();


    // to hide the filter panel
    $("._rpl_Tabs, .rt-page-header, .rt-filter-header, .rt-report-page-edit, .rt-filter-checkbox-save, #rt-filter-tile-img, .topPaddingBar, .rt-navigation-header, .rt-navigation-edit-mode, .rt-navigation-checkbox-save, #rt-navigation-tile-img,.rt-section-txt-div, #rt-report-section-tile-div_0, .addTile, .rt-add-new-section-button").hide();
    $(".rt-pagelayout-filter-panel").css("margin-bottom", "30px");
    if ($("#rt-filter-edit-checkbox").prop('checked') === true) {
        $(".topPaddingBar").show();
    }

    // To hide the navigation panel
    $("#rt-navigation-section").css("background", "none").css("border-bottom", "0px none");
    $("._NavTile").removeClass("selectedNavTab::before");
    $("#rt-navigation-section").css("padding-bottom", "0px").css("margin-bottom", "30px");

    // To hide the report panel 
    $(".rt-report-section").css("background", "none").css("min-height", "auto");
    $(".tile .deleteTileContainer").removeClass("deleteTileContainer");
    $(".tile").removeClass("editRTTile");
    $(".tile").removeClass("editImage");
    $(".tile").removeAttr("onclick");

    //$("#_editDone ._pageIcon").removeClass("_editDone").addClass("_editPage");
    //$("#_editDone ._doneIconText").text("Edit");


    /*  //Old code
    $(".rt-page-header").hide();
    $(".rt-checkbox-filter-edit").hide();
    $(".rt-filter-header").hide();
    $(".rt-filter-checkbox-save").hide()

    $("#rt-navigation-edit-mode").hide()
    $("#rt-navigation-tile-img").hide()


    $("#rt-report-panel-section-delete").hide()
    $("#rt-report-section-tile-img").hide();
    $("#rt-report-section-tile-div").hide()
    $("#rt-add-new-section-button").hide()
    $(".rt-report-panel-section-delete").hide();
    $(".rt-report-page-edit").hide();

    $(".rt-page-edit-mode").hide();
    $(".rt-pagelayout-in-edit").show();*/

};

var _checkInPage = function () {
    if (!isPageVersioningOff) {
        $("#_publishPage").show();
        var ctx = SP.ClientContext.get_current();
        var web = ctx.get_web();
        var page = web.getFileByServerRelativeUrl(window.location.pathname);
        page.checkIn();
        ctx.executeQueryAsync(Function.createDelegate(this, checkIn_Success),
	                                        Function.createDelegate(this, checkIn_Fail));
    }
}
function checkIn_Success(sender, args) {
    //window.location.reload();
}
function checkIn_Fail(sender, args) {
    //window.location.reload();
}
var _publishPage = function () {
    var oReq = {
        sSiteName: siteName
        , sReportName: reportName
        , sFromColumn: "saved"
        , sToColumn: "published"
        , isFilterEnabled: isFilterSectionEnabled
        , isNavigationEnabled: isNavigationSectionEnabled
        , sfilterSelectedSite: filterSelectedSite
    };
    var oRequest = new RequestBuilder_filter();
    oRequest.postRequest(sWebServicePath + 'savePage', publishSPPage, JSON.stringify(oReq), '');
}

var _pushPage = function (sToSite, sToSiteURL) {
    var oReq = {
        fromSite: siteName
        , PagesFolder: PagesFolder
        , toSite: sToSite
        , reportName: reportName
        , toSiteURL: sToSiteURL
        , PageTitle: document.title
    };
    var oRequest = new RequestBuilder_filter();
    oRequest.postRequest(sWebServicePath + 'CreatePageAndCreateContents', handlePushPageResponse, JSON.stringify(oReq), '');
    $('._environment').text(sToSite + ":");
    $('.__GoToUAT ').text("Go to " + sToSite);
    overlayMessage = "Your report is migrated from " + siteName + " environment to " + sToSite + " environment. You can use below link to navigate to " + sToSite + " environment. ";
}

function handlePushPageResponse(response) {

    var string = response.result;
    var array = JSON.parse(string);
    globalResponse = array;
    openOverlay('.__RT_EditViewPopupDiv', array.details);
}

function publishSPPage() {
    var ctx = SP.ClientContext.get_current();
    var web = ctx.get_web();
    var page = web.getFileByServerRelativeUrl(window.location.pathname);
    page.publish();
    ctx.executeQueryAsync(Function.createDelegate(this, publish_Success),
                                        Function.createDelegate(this, publish_Fail));
}
function publish_Success(sender, args) {
    window.location.reload();
}
function publish_Fail(sender, args) {

}

// To add the tiles under the navigation panel
NavigationSection.NavigationTiles = (function () {
    var oNavigationTiles = {}
    , oNavTileConfig = {
        layoutSize: "1x1"
        , navTilebackgroundColor: "0072c6"
        , navItemTitle: "Nav Title"
        , mainMetricName: "main Metric Name"
        , dataSource: "MICubeConnection"
        , query: "Select 10"
        , RunWithElevatedCheckboxStatus: false
        , dataFormat: "$"
        , filterAssociation: "Geography"
        , supportQuery: ""
        , supportDataFormat: ""
        , supportDataSuffix: ""
        , isTwoMetricEnabled: false
    }
    , iCurrentNavTileIndex = -1
    , _currentTileHandle
    , oCurrentNavTile = oNavTileConfig
    //Get the ConfigPopup Elements
    , $navLayoutSize = $("#rt-nav-config-layoutSize")
    , $navTilebackgroundColor = $("#NavTileColorPicker")
    , $navItemName = $("#rt-nav-config-navItemName")
    , $navMainMetricName = $("#rt-nav-config-mainMetricName")
    , $navDataSource = $("#rt-nav-config-dataSource")
     // Added for custom connection in navigation configuration po-up
    , $navConectionType = $("#rt-nav-config-newConnectionType")
    , $navCustomConnectioName = $("#rt-nav-config-newConnectionName")
    , $navCustomConnectionString = $("#rt-nav-config-newConnectionString")
    , $navCustomConnectionStatusSection = $("#rt-navigation-CustomConnectionStatusSection")
    , $navCustomConnectionStatus = $("#rt-navigation-CustomConnectionStatus")
    //End of changes for custom connection
	, $navPortfolio = $("#rt-nav-config-portfolio")
    , $navQueryString = $("#rt-nav-config-query")
    , $navRunWithElevatedCheckboxStatus = $("#NavRunWithElevated")
    , $navRunWithElevated = $("#RunWithElevatedNavigation")
    , $navDataFormat = $("#rt-nav-config-dataFormat")
    , $navFilterAssociation = $("#rt-nav-config-filterAssociation")
    , $navNewConnectionName = $("#rt-nav-config-newConnectionName")
    , $navNewConnectionString = $("#rt-nav-config-newConnectionString")
    , $navSupportQuery = $("#rt-navigation-configPopup-DataQuery4")
    , $navSupportDataFormat = $("#rt-navigation-configPopup-TileDataFormat_DD4")
    , $navIsTwoMetricEnabled = $("#rt - navigation - configPopup - TwoTilesCheck")
    , $navSupportDataSuffix = $("#rt-navigation-configPopup-DataSuffix4")
    , bNavCustomConnectionStatus = false
    , bNavCustomConnectionValidation = false
	 , bIsFormValid = false
    , aValidConnectionFields = ["Provider", "Data Source", "Server", "Database", "Initial Catalog", "Integrated Security", "Trusted_Connection"];

    oNavigationTiles.currentActiveTab = null;
    oNavigationTiles.iCurrentNavTileIndex = iCurrentNavTileIndex;
    oNavigationTiles.aNavigationTiles = [];


    var loadNavConnectionString = function (response) {
        var oDicMisc = JSON.parse(response);

        var connections = JSON.parse(oDicMisc["PopupConnections"]);
        var allConnections = {
            "0": "------ Select ------"
        }
        allConnections = $.extend({}, allConnections, connections)
        connectionStringValues = allConnections;
        bindDropdown($navDataSource, connectionStringValues);
    }

    var clearCustomConnectionFields = function () {
        $navCustomConnectioName.val("");
        $navCustomConnectioName.attr("title", "");
        ChangeElementColour($navCustomConnectioName, true);
        $navCustomConnectionString.val("");
        $navCustomConnectionString.attr("title", "");
        ChangeElementColour($navCustomConnectionString, true);
        $navCustomConnectionStatus.removeAttr("class").addClass("hide");
        $navCustomConnectionStatus.text("");
        $navCustomConnectionStatusSection.addClass("hide");
        $("#rt-navigation-dataSource-validate-btn").attr("data-property-sSave", "No");
    }

    _showConfigPopup = function (sTileStatus) {

        //Check for and populate Connection Strings
        if ($navConectionType.attr("data-is-populated") !== "true") {
            $navConectionType.empty();
            bindDropdown($navConectionType, connectionTypeValues);
            $navConectionType.attr("data-is-populated", "true");
            $("#rt-navigation-insert-sample-query-btn").click(function () {
                _insertSampleQuery();
            });
        }


        //Show Config popup
        var eleNavPortfolio_DD = $('#rt-nav-config-portfolio');
        bindPortfoliosDropdown(eleNavPortfolio_DD, portfolioValues);

        $('#rt-navigation-configPopup-overlay').show();
        $("#rt-navigation-configPopup-modal-background").show();
        if (typeof sTileStatus !== "undefined" && sTileStatus === "new") {
            //Clear and create new Config Popup
            _clearNavConfigPopup();
            _currentTileHandle = "new";
            oNavigationTiles.initialiseTile();
            $("#rt-nav-config-layoutSize").val("1by1");
            $('#rt-nav-config-dataFormat').val("0");
            $('#rt-navigation-configPopup-ovarlay-delete').hide();
            $('#rt-navigation-configPopup-ovarlay-save').css('margin-left', '120px');
        } else {
            //Populate Config Popup and display edit config popup
            _currentTileHandle = sTileStatus
            navigationTileClicked = _getNavigationTile(sTileStatus);
            _setConfigXML(navigationTileClicked);
            $('#rt-navigation-configPopup-ovarlay-delete').show();
            $('#rt-navigation-configPopup-ovarlay-save').css('margin-left', '40px');
        }


    }
    oNavigationTiles.showConfigPopup = _showConfigPopup;

    //This function gets a Navigation Tile from Navigation array based on tile handle
    var _getNavigationTile = function (tileHandle) {
        var tiles = $.grep(oNavigationTiles.aNavigationTiles, function (e) {
            return e.TileHandle == tileHandle;
        });

        if (tiles.length === 0 || tiles.length > 1) {
            return null;
        } else {
            return tiles[0];
        }

    };

    //This function gets a Navigation Tile from Navigation array based on tile handle
    var _getNavigationTileIndex = function (tileHandle) {
        var tileIndex = -1;
        $.each(oNavigationTiles.aNavigationTiles, function (index, element) {
            if (element.TileHandle == tileHandle && tileIndex == -1) {
                tileIndex = index;
            }
        });

        return tileIndex;
    };

    //Removes navigation tile based on Tile Handle
    var _removeNavigationTile = function (tileHandle) {
        var tileIndex = _getNavigationTileIndex(tileHandle);

        //Remove the Tile from DOM
        $("#" + tileHandle).remove();

        _hideNavConfigPanel();

        //Set the Live Status to false
        oNavigationTiles.aNavigationTiles[tileIndex].fTileLiveStatus = false;

        //Remove the Tab and if last tab set to default section
        if ($("#rt-report-sections .tabContainer").length == 1) {
            //Update tab to default section
            $("#" + tileHandle + "_tab").attr("id", "default-section");

            //Update the Section Container to reflect on save	
            $.each(oSections, function (index, element) {
                if (oSections[index].NavTileHandle === tileHandle) {
                    oSections[index].NavTileHandle = "default-section";
                }
            });
        } else {
            //Remove the Tab
            $("#" + tileHandle + "_tab").remove();

            //Select First Tab if available
            if ($("._NavTile").length > 0) {
                $("._NavTile")[0].click();
            }
        }



        _updateDummyNavConfigure();
    };
    oNavigationTiles.removeNavigationTile = _removeNavigationTile;

    var _hideNavConfigPanel = function () {
        $(".rt-newConnectionField").each(function () {
            $(this).hide();
        });
        $navDataSource.attr("data-is-populated", "false")
        $navConectionType.attr("data-is-populated", "false");

        clearCustomConnectionFields();

        $('#rt-navigation-configPopup-overlay').hide();
        $("#rt-navigation-configPopup-modal-background").hide();

    }
    oNavigationTiles.hideNavConfigPanel = _hideNavConfigPanel;

    oNavigationTiles.saveNavigationTileConfiguration = function () {
        if (bNavCustomConnectionValidation && bIsFormValid) {

            var oRequest = new tilesPostRequest();
            oRequest.postRequest(sWebServicePath + 'GetDicMiscitems', loadNavConnectionString, '', '');

            if (-1 === $.inArray($navCustomConnectioName.val(), arrAllConnection)) {
                arrAllConnection.push($navCustomConnectioName.val());
            }
        }

        bNavCustomConnectionValidation = false;
        bNavCustomConnectionStatus = false;
        $("#rt-navigation-dataSource-validate-btn").attr("data-property-sSave", "No");

        if (bIsFormValid) {
            _getNavigationTileConfiguration();
            tileObject = _getConfigXML();
            var bNavTileExists = true;

            if (_getNavigationTileIndex(tileObject.TileHandle) == -1) {

                bNavTileExists = false;
                if ($("#default-section_tab").length > 0) {

                    //If there is new section associate with it or	
                    $.each(oSections, function (index, element) {
                        if (oSections[index].NavTileHandle === "default-section") {
                            oSections[index].NavTileHandle = tileObject.TileHandle;

                            //Save the Section NavTile Update on click of Save of Navigation Tile
                            //Update the existing tab details
                            $("#default-section_tab").attr("id", tileObject.TileHandle + "_tab")
                        }
                    });

                    _renderNavTileWrapper(tileObject, true);
                } else {
                    _renderNavTileWrapper(tileObject, false);

                    //Add New Section to empty Tab
                    addNewSectionInReportPanel(tileObject.TileHandle + "_tab");
                }
            }

            _renderNavTile(tileObject);

            $("#rt-navigation-configPopup-ovarlay-close").click();
            if (!bNavTileExists) {
                $("#" + tileObject.TileHandle).click();
            }
        }
        //else {
        //    bindDropdown($navConectionType, connectionTypeValues);
        //}
        NavigationSection.NavigationTiles.clearNavPopup();
    }

    oNavigationTiles.initialiseTile = function () {
        oCurrentNavTile = {};
    }
    var _validateNavConfigPopup = function () {
        var validationStatus = true;

        validationStatus = _validateElement($navLayoutSize) ? validationStatus : false;
        validationStatus = _validateElement($navItemName) ? validationStatus : false;
        //validationStatus = _validateElement($navMainMetricName) ? validationStatus : false;
        validationStatus = _validateElement($navPortfolio) ? validationStatus : false;
        validationStatus = _validateElement($navDataSource) ? validationStatus : false;
        validateQuery($navQueryString, "rt-nav-config-dataSource");
        validationStatus = ($("#rt-nav-config-query").css('box-shadow') === "0px 0px 3px #ffffff") ? validationStatus : false;

        if ($("#rt-navigation-configPopup-TwoTilesCheck")[0].checked) {
            validateQuery($navSupportQuery, "rt-nav-config-dataSource");
            validationStatus = ($("#rt-navigation-configPopup-DataQuery4").css('box-shadow') === "0px 0px 3px #ffffff") ? validationStatus : false;
            validationStatus = _validateElement($navSupportDataFormat) ? validationStatus : false;
        }
        if ($("#NavRunWithElevated").prop("checked")) {
            validationStatus = _validateElement($navRunWithElevated) ? validationStatus : false;
        }
        validationStatus = _validateElement($navDataFormat) ? validationStatus : false;
        validationStatus = _validateElement($navTilebackgroundColor) ? validationStatus : false;



        bIsFormValid = validationStatus;
    }
    var _renderNavTileWrapper = function (tileObject, bDontCreateTab) {

        //NavigationSection.NavigationTiles.aNavigationTiles.push(oCurrentNavTile);
        var $NavAddTileImage = $("#rt-navigation-tile-img")
        , sNavLayoutSizeClass = oCurrentNavTile.layoutSize;
        var $tileDiv = $("<div>", {
            id: tileObject.TileHandle
        }).addClass("_NavTile " + sNavLayoutSizeClass + " " + tileObject.TileHandle);
        $tileDiv.insertBefore($NavAddTileImage);

        if (!bDontCreateTab) {
            _createTab(tileObject.TileHandle);
        }

        $("#" + tileObject.TileHandle).attr('onclick', 'NavigationSection.NavigationTiles.NavigateTo(this, event, 1);event.cancelBubble=true;');
    };
    oNavigationTiles.renderNavTileWrapper = _renderNavTileWrapper;

    var _createTab = function (TileHandle) {
        //Create a Tab Container in the 
        var reportSection = $("#rt-report-sections");

        $("<div>", { "class": "tabContainer", id: TileHandle + "_tab" })
            .attr("onlcick", "NavigationSection.NavigationTiles.showConfigPopup(this);")
            .appendTo(reportSection);
    }
    oNavigationTiles.createTab = _createTab;

    var _renderNavTile = function renderNavTile(tileObject) {
        var tileIndex = _getNavigationTileIndex(tileObject.TileHandle);
        if (tileIndex > -1) {
            oNavigationTiles.aNavigationTiles[tileIndex] = tileObject;
        } else {
            oNavigationTiles.aNavigationTiles.push(tileObject);
        }
        $("#" + tileObject.TileHandle).empty();
        createTile(tileObject, true);
        _updateDummyNavConfigure();
    };
    oNavigationTiles.renderNavTile = _renderNavTile;
    _updateDummyNavConfigure = function () {
        //Check and add Configured Current Tab
        if ($("#rt-navigation-section").children().not("#rt-navigation-tile-img").length > 0) {
            $(".selectedNavTabStart").removeClass("selectedNavTabStart");
        } else {
            $("#rt-navigation-tile-img").addClass("selectedNavTabStart");
        }
    };

    //This is a click function of Navigation Tile
    var _NavigateTo = function NavigateTo(navTileObject, ev, isClicked) {
        bindSwitchClick();
        if (ev.y > 160) {
            //Show Edit Popup
            if ($(navTileObject).length > 0) {
                _updateColorOfNavElements();
                if (isReportInEditMode) {
                    _showConfigPopup($(navTileObject).attr("id"));
                }
            }
        } else {
            if (isClicked == 1) {
                //Navigate to the Tab
                $("#rt-report-sections .tabContainer").hide();
            }
            $("#rt-report-sections .tabContainer").css("visibility", "hidden");
            var id = $(navTileObject).attr("id");
            $("#" + id + "_tab").show("slide");
            $("#" + id + "_tab").css("visibility", "visible");
            $(".selectedNavTab").removeClass("selectedNavTab");
            $("#" + id).addClass("selectedNavTab");

            oNavigationTiles.currentActiveTab = id;
        }
    };
    oNavigationTiles.NavigateTo = _NavigateTo;

    //This function populates config popup with tile that is selected
    var _setConfigXML = function (tileObject) {

        //Get Tile Object from XML
        try {
            tilesObject = MAQ.RT.TileMapper(tileObject);
            if (tilesObject.length === 1) {
                var tileFromXML = tilesObject[0];

                //Assign the properties to config popup
                $navTilebackgroundColor.val(tileFromXML.BackgroundColor.join(","));
                $navLayoutSize.val(tileFromXML.SelectedLayout);
                $navItemName.val(tileFromXML.Text.join());
                $navMainMetricName.val(tileFromXML.MultipleData[0].suffix);
                $navPortfolio.val(tileFromXML.Portfolio);
                bindConnectionStringsDropdown($navDataSource, connectionStringValues, tileFromXML.Portfolio);
                $navDataSource.val(tileFromXML.Connection);

                $navQueryString.val(tileFromXML.MultipleData[0].query);
                if (tileFromXML.RunWithElevatedCheckboxStatus == "true") {
                    $navRunWithElevatedCheckboxStatus.prop("checked", true);
                }
                else {
                    $navRunWithElevatedCheckboxStatus.prop("checked", false);

                }
                openNavRunWithElevatedPopup($navRunWithElevatedCheckboxStatus, 0);
                if (tileFromXML.RunWithElevateAccount != 0) {
                    tileFromXML.RunWithElevateAccount = tileFromXML.RunWithElevateAccount.replace("\\\\", "\\");
                }
                $navRunWithElevated.val(tileFromXML.RunWithElevateAccount);
                $navDataFormat.val(tileFromXML.MultipleData[0].format);

                if ($("#" + tileFromXML.Container + " .valuetext :last-child").hasClass("tileSubData")) {
                    $navSupportDataFormat.val(tileFromXML.MultipleData[1].format);
                    $navSupportDataSuffix.val(tileFromXML.MultipleData[1].suffix);
                    $navSupportQuery.val(tileFromXML.MultipleData[1].query);
                    $("#rt-navigation-configPopup-TwoTilesCheck")[0].checked = true;
                    $("#rt-navigation-configPopup-DataQuery4").removeAttr("disabled").removeClass("DisableInputControls");
                    $("#rt-navigation-configPopup-TileDataFormat_DD4").removeAttr("disabled").removeClass("DisableInputControls");
                    $("#rt-navigation-configPopup-DataSuffix4").removeAttr("disabled").removeClass("DisableInputControls");
                    $navIsTwoMetricEnabled = true;
                }

                bindFilterDropdown($("#rt-nav-config-filterAssociation"), Filterslistids);
                $('#rt-nav-config-filterAssociation').multipleSelect();
                $navFilterAssociation.multipleSelect('setSelects', tileFromXML.filterAssociation.split(","));
                $("#rt-navigation-configPopup-ovarlay-delete").attr("onclick", "NavigationSection.NavigationTiles.removeNavigationTile(\"" + tileObject.TileHandle + "\")");

                //Added for custom connection
                $navCustomConnectionStatus.text("");
                $navCustomConnectionStatus.addClass("hide");
            }
        } catch (e) {
            log(e);
        }

    }

    //This function resets the configuration popup
    var _clearNavConfigPopup = function () {
        _updateColorOfNavElements();
        $navLayoutSize.val("1by1");
        $navItemName.val("");
        $navMainMetricName.val("");
        $navDataSource.val("0");
        $navPortfolio.val("0");
        $navQueryString.val("");
        $navSupportQuery.val("");
        $navSupportDataSuffix.val("");
        bindSwitchClick();
        //Added for custom connection 
        clearCustomConnectionFields();
        //End of custom connection

        $navSupportDataFormat.val("0");
        $("#rt-navigation-configPopup-TwoTilesCheck")[0].checked = false;
        $("#rt-navigation-configPopup-TileDataFormat_DD4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#rt-navigation-configPopup-DataQuery4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $navIsTwoMetricEnabled = false;
        $navRunWithElevatedCheckboxStatus.prop("checked", false);
        openNavRunWithElevatedPopup($navRunWithElevatedCheckboxStatus, 0);
        $navDataFormat.val("$");
        $navTilebackgroundColor.val("");
        bindFilterDropdown($("#rt-nav-config-filterAssociation"), Filterslistids);
        $('#rt-nav-config-filterAssociation').multipleSelect();
        //$('#rt-navigation-configPopup-ovarlay-delete').hide();

    }
    var _updateColorOfNavElements = function () {
        changeElementColour($navLayoutSize, 1);
        changeElementColour($navItemName, 1);
        changeElementColour($navMainMetricName, 1);
        changeElementColour($navDataSource, 1);
        changeElementColour($navPortfolio, 1);
        changeElementColour($navQueryString, 1);
        changeElementColour($navRunWithElevated, 1);
        changeElementColour($navDataFormat, 1);
        changeElementColour($navSupportDataFormat, 1);
        changeElementColour($navSupportDataSuffix, 1);
        changeElementColour($navTilebackgroundColor, 1);
        changeElementColour($navSupportQuery, 1);
        changeElementColour($navIsTwoMetricEnabled, 1);
    };
    oNavigationTiles.clearNavPopup = _clearNavConfigPopup;
    /// Gets configuration values from configuration pop up and saves in aNavigationTiles array
    var _getNavigationTileConfiguration = function () {
        oCurrentNavTile.layoutSize = $navLayoutSize.val();
        oCurrentNavTile.navItemTitle = $navItemName.val();
        oCurrentNavTile.mainMetricName = $navMainMetricName.val();
        oCurrentNavTile.portfolio = $navPortfolio.val();
        oCurrentNavTile.dataSource = "NewConnectionRequest" === $navDataSource.val() ? $navCustomConnectioName.val() : $navDataSource.val();
        oCurrentNavTile.query = $navQueryString.val();
        oCurrentNavTile.RunWithElevatedCheckboxStatus = $navRunWithElevatedCheckboxStatus.prop("checked");
        oCurrentNavTile.navRunWithElevatedAccount = $navRunWithElevated.val() ? $navRunWithElevated.val() : "";
        oCurrentNavTile.dataFormat = $navDataFormat.val();
        oCurrentNavTile.navTilebackgroundColor = $navTilebackgroundColor.val();
        oCurrentNavTile.filterAssociation = $navFilterAssociation.multipleSelect("getSelects").join(",");
        oCurrentNavTile.supportQuery = $navSupportQuery.val();
        oCurrentNavTile.supportDataFormat = $navSupportDataFormat.val();
        oCurrentNavTile.isTwoMetricEnabled = $navIsTwoMetricEnabled;
        oCurrentNavTile.supportSuffix = $navSupportDataSuffix.val();

    }
    oNavigationTiles.NavTileClicked = function (oCurrentNavTile) {
        NavigationSection.NavigationTiles.iCurrentNavTileIndex = $(oCurrentNavTile).index();
        NavigationSection.NavigationTiles.showConfigPopup();
        _highlightNavTab(NavigationSection.NavigationTiles.iCurrentNavTileIndex);
    }
    oNavigationTiles.AddNewDataSource = function () {
        _showNewConnectionFields();
    }
    var _showNewConnectionFields = function () {
        if ($navDataSource.val() === "NewConnectionRequest") {
            $(".rt-newConnectionField").each(function () {
                $(this).show();
            });
        }
        else {
            $(".rt-newConnectionField").each(function () {
                $(this).hide();
            });
            clearCustomConnectionFields();
        }
    }
    var _hideNewConnectionFields = function () {
        $(".rt-newConnectionField").each(function () {
            $(this).hide();
        });
        $navCustomConnectionStatusSection.hide();
        $navCustomConnectionStatus.text("");
        $navCustomConnectionStatus.addClass("hide");
    }
    oNavigationTiles.validateNewConnection = function () {
        var sNewConnectionString = $navNewConnectionString.val()
        , aNewConnectionStringFields = sNewConnectionString.split(";")
        , sNewConnectionName = $.trim($navNewConnectionName.val())
        , iConnectionStringLength = aNewConnectionStringFields.length;
        if (sNewConnectionName === "") {
            ChangeElementColour($navNewConnectionName, false);
            return;
        }
        ChangeElementColour($navNewConnectionName, true);
        if (iConnectionStringLength === 1 || aNewConnectionStringFields[iConnectionStringLength - 1] !== "") {
            ChangeElementColour($navNewConnectionString, false);
            return;
        }
        aNewConnectionStringFields.pop();
        for (var iCounter = 0; iCounter < aNewConnectionStringFields.length; iCounter++) {
            if (jQuery.inArray($.trim(aNewConnectionStringFields[iCounter].split("=")[0]), aValidConnectionFields) === -1) {
                ChangeElementColour($navNewConnectionString, false);
                return;
            }
        }
        ChangeElementColour($navNewConnectionString, true);
        _addNewConnection(sNewConnectionName);
        _hideNewConnectionFields();
    }

    var _addNewConnection = function (sNewConnectionName) {
        $("#rt-nav-config-dataSource").append($("<option>" + sNewConnectionName + "</option>"));
        $("#rt-nav-config-dataSource").val(sNewConnectionName);
    }

    //This function validates an element
    var _validateElement = function (element) {
        //Validate Element
        if ($(element).val() === "" || $(element).val() === null || $(element).val() === "0") {
            //Update Color
            $(element).css('border', '1px solid #FF0000').css('box-shadow', '0px 0px 3px #FF0000');

            //Return Validation Status
            return false;
        }
        $(element).css('border', '1px solid #ababab').css('box-shadow', 'none');
        return true;
    }
    oNavigationTiles.validateElement = _validateElement;

    //Returns the XML Configuration of user selection in configuration popup
    var _getConfigXML = function (navTile) {

        // To get advanced Query value in Navigation tile
        var advancedQuery = $("#AdvancedDataQueryNav").val();   // To Do

        var connectionType = "Database";
        if (_currentTileHandle == "new") {
            _currentTileHandle = reportName + "_rt-navigation-section_Tile" + (++NavigationSection.NavigationTiles.iCurrentNavTileIndex);
        }
        var XMLConfig = '<Tile MainMetricName="@MainMetricName" FilterAssociation="@FilterAssociation" TargetId="@TargetId">'
                        + '<Type>Data</Type>'
                        + '<DataTile>'
                            + '<TileType>Static</TileType>'
                            + '<Portfolio>@Portfolio</Portfolio>'
                            + '<ConnectionString>@ConnectionString</ConnectionString>'
                            + '<ConnectionType>@ConnectionType</ConnectionType>'
                            + '<SelectedLayout>@SelectedLayout</SelectedLayout>'
                            + '<Title>@Title</Title>'
                            + '<Query></Query>'
                            + '<FilterAssociation>@FilterAssociation</FilterAssociation>'
                            + '<AdvancedQuery>@AdvancedQuery</AdvancedQuery>'
                            + '<MultipleData> '
                                + '<Data> '
                                    + '<DataFormat>@Format</DataFormat> '
                                    + '<DataPrefix />'
                                    + '<DataQuery>@Query</DataQuery> '
                                    + '<DataValue />'
                                    + '<DataSuffix>@DataSuffix</DataSuffix>'
                                    + '<ExecutionOrder>1</ExecutionOrder>'
                                + '</Data>'
        if ($("#rt-navigation-configPopup-TwoTilesCheck")[0].checked) {
            XMLConfig = XMLConfig + '<Data> '
                                  + '<DataFormat>@supportDataFormat</DataFormat> '
                                  + '<DataPrefix />'
                                  + '<DataQuery>@supportingQuery</DataQuery> '
                                  + '<DataValue />'
                                  + '<DataSuffix>@supportDataSuffix</DataSuffix>'
                                  + '<ExecutionOrder>1</ExecutionOrder>'
                              + '</Data>'
        }

        XMLConfig = XMLConfig + '</MultipleData>'
          + '<SupportingQuery>@supportingQuery</SupportingQuery>'
  + '<RunWithElevateAccount>@RunWithElevateAccount</RunWithElevateAccount>'
  + '<RunWithElevatedCheckboxStatus>@RunWithElevatedCheckboxStatus</RunWithElevatedCheckboxStatus>'
  + '<Format>@Format</Format>'
  + '<BackgroundColor>@BackgroundColor</BackgroundColor>'
+ '</DataTile>'
+ '</Tile>';

        if (oCurrentNavTile.dataSource.toLowerCase().indexOf("cube") >= 0) {
            connectionType = "Cube";
        };
        var navquery = ""
            , filterslist = []
            , filterQueryReplace = []
            , updatedquery = "";

        navquery = oCurrentNavTile.query;
        filterslist = getSelectedFiltersIDS();
        filterQueryReplace = getreplacequeryobject(filterslist);

        if (filterQueryReplace.length > 0) {
            if ((navquery.indexOf("WHERE") !== -1) && advancedQuery === "OFF") {

                navquery = navquery.slice(0, navquery.indexOf("WHERE")).trim();
            }
            updatedquery = GetFilterAssociatedQuery(navquery, connectionType, filterQueryReplace);
        }
        else {
            //updatedquery = navquery.slice(0, navquery.indexOf("WHERE")).trim();
            updatedquery = GetFilterAssociatedQuery(navquery, connectionType, filterQueryReplace);
        }
        updatedquery = updatedquery.split('<').join('lt;');
        updatedquery = updatedquery.split('>').join('gt;');
        XMLConfig = XMLConfig.replace('@TargetId', _currentTileHandle);
        XMLConfig = XMLConfig.replace('@DataSuffix', oCurrentNavTile.mainMetricName);
        XMLConfig = XMLConfig.replace('@FilterAssociation', oCurrentNavTile.filterAssociation);
        XMLConfig = XMLConfig.replace('@FilterAssociation', oCurrentNavTile.filterAssociation);  // Two variables for Filter Association in XML Config
        XMLConfig = XMLConfig.replace('@AdvancedQuery', advancedQuery);
        XMLConfig = XMLConfig.replace('@Portfolio', oCurrentNavTile.portfolio);
        XMLConfig = XMLConfig.replace('@ConnectionString', oCurrentNavTile.dataSource);
        XMLConfig = XMLConfig.replace('@ConnectionType', connectionType);
        XMLConfig = XMLConfig.replace('@SelectedLayout', oCurrentNavTile.layoutSize);
        XMLConfig = XMLConfig.replace('@Title', oCurrentNavTile.navItemTitle);
        XMLConfig = XMLConfig.replace('@Query', updatedquery);
        //  XMLConfig = XMLConfig.replace('@RunWithElevatedPrivilages', oCurrentNavTile.runWithElevatedPrivileges);
        XMLConfig = XMLConfig.replace('@Format', oCurrentNavTile.dataFormat);
        XMLConfig = XMLConfig.replace('@Format', oCurrentNavTile.dataFormat);
        XMLConfig = XMLConfig.replace('@BackgroundColor', oCurrentNavTile.navTilebackgroundColor);
        XMLConfig = XMLConfig.replace('@RunWithElevateAccount', oCurrentNavTile.navRunWithElevatedAccount);
        XMLConfig = XMLConfig.replace('@RunWithElevatedCheckboxStatus', oCurrentNavTile.RunWithElevatedCheckboxStatus);
        XMLConfig = XMLConfig.replace('@supportingQuery', oCurrentNavTile.supportQuery);
        XMLConfig = XMLConfig.replace('@supportDataFormat', oCurrentNavTile.supportDataFormat);
        XMLConfig = XMLConfig.replace('@supportDataSuffix', oCurrentNavTile.supportSuffix);

        //var splitURL = window.location.pathname.split("/");
        //reportName = splitURL[splitURL.length - 1].split(".")[0];
        //var i;
        //siteName = '';
        //for (i = 2; i < (splitURL.length - 3) ; i++) {
        //    siteName += splitURL[i];
        //    siteName += '/'
        //}
        //siteName += splitURL[i];
        XMLConfig = XMLConfig.split('&').join('&amp;');

        var tileObject = {
            LayoutSize: oCurrentNavTile.layoutSize,
            SectionHandle: "rt-navigation-section",
            TileFlowOrder: "1",
            TileHandle: _currentTileHandle,
            fTileLiveStatus: true,
            TileType: "DataTile",
            XMLConfig: XMLConfig,
            XMLConfiguration: XMLConfig
        };

        return tileObject;

    };



    oNavigationTiles.validateNavCustomConnection = function () {

        var oNavConnectionStatusSection = $navCustomConnectionStatusSection;
        var oNavConnectionStatus = $navCustomConnectionStatus;

        if (oNavConnectionStatusSection.length) {
            if (!oNavConnectionStatusSection.hasClass("hide")) {
                oNavConnectionStatusSection.addClass("hide");
            }
        }

        if (oNavConnectionStatus.length) {
            oNavConnectionStatus.text("");
            // Hide the message section
            if (!oNavConnectionStatus.hasClass("hide")) {
                oNavConnectionStatus.addClass("hide");
            }
            if (oNavConnectionStatus.hasClass("failure")) {
                oNavConnectionStatus.removeClass("failure");
            }
            if (oNavConnectionStatus.hasClass("success")) {
                oNavConnectionStatus.removeClass("success")
            }
        }

        var sSelectedConnectionType = $.trim($navConectionType.val());
        var sSelectedConnectionName = $.trim($navCustomConnectioName.val());
        var sSelectedConnectionString = $.trim($navCustomConnectionString.val());
        var sSaveConnectionString = $("#rt-navigation-dataSource-validate-btn").attr("data-property-sSave");
        var sPortfolioName = $navPortfolio.val();



        //Validate connection type, friendly name, and connection string
        validateConnectionTypeDropdown($navConectionType.get(0));
        validateCustomConnectionFriendlyName($navCustomConnectioName.get(0));
        validateCustomConnectionParameter($navCustomConnectionString.get(0));

        var sConnectionTypeTitle = $navConectionType.attr("Title");
        var sConnectionNameTitle = $navCustomConnectioName.attr("Title");
        var sConnectionStringTitle = $navCustomConnectionString.attr("Title");
        var sPortfolioTitle = $navPortfolio.attr("Title");

        if ((sConnectionTypeTitle === "undefined" || sConnectionTypeTitle === "") && (sConnectionNameTitle === "undefined" || sConnectionNameTitle === "") && (sConnectionStringTitle === "undefined" || sConnectionStringTitle === "") && (sPortfolioTitle === "undefined" || sPortfolioTitle === "")) {
            // TODO: Place service request to check if logged-in user has permission to connect to required data source
            var oRequest = new RequestBuilder_filter();
            var request = '{"connectionType":"' + sSelectedConnectionType + '","connectionFriendlyName":"' + sSelectedConnectionName + '","connectionString":"' + sSelectedConnectionString + '","portfolioName":"' + sPortfolioName + '","saveConnection":"' + sSaveConnectionString + '"}';
            //var request = '{"connectionType":"' + sConnectionType + '","connectionFriendlyName":"' + sConnectionName + '","sConfigurationColumn":"EditedConfiguration","sCreatedByUserAlias":"' + sCreatedByUserAlias + '","sReportURL":"' + sSiteURL + '"}';
            oRequest.postRequest(sWebServicePath + 'ValidateOrSaveConnection', _customNavConnectionResponse, request, '');
        }
        $("#rt-navigation-dataSource-validate-btn").attr("data-property-sSave", "No");
    }
    var _insertSampleQuery = function () {
        var isAdvancedQuery = $("#AdvancedDataQueryNav").val()
        , sAdvancedQueryType = isAdvancedQuery
        , sConnectionString = ""

        , bIsConnectionValid = validateConnectionTypeDropdown($("#rt-nav-config-dataSource"));
        if (bIsConnectionValid) {
            sConnectionString = $("#rt-nav-config-dataSource").val();
        }
        if (sConnectionString.toLowerCase().indexOf("cube") >= 0) {
            sAdvancedQueryType += "CUBE";
        }
        else {
            sAdvancedQueryType += "DB";
        }
        $("#rt-nav-config-query").val(oDicSampleQuery["DataTile"][sAdvancedQueryType]);
    }
    var _customNavConnectionResponse = function (response) {
        var oNavConnectionStatusSection = $navCustomConnectionStatusSection,
            oNavConnectionStatus = $navCustomConnectionStatus;
        if (response.result != "error" && response.result != "") {

            var sClassName;
            var sCustomConnectionData = response.result;
            var oCustomConnectionResponse = sCustomConnectionData.split("$|$");

            if (oCustomConnectionResponse.length) {
                sClassName = oCustomConnectionResponse[1];

                //Logic to set the global variable
                bNavCustomConnectionStatus = "success" === oCustomConnectionResponse[1] ? true : false;

            }
            else {

                if (-1 !== sCustomConnectionData.indexOf("Success")) {
                    sClassName = "success";
                    bNavCustomConnectionStatus = true;
                }
                else {
                    sClassName = "failure";
                    bNavCustomConnectionStatus = false;
                }

            }

            // Check and call for validation
            if (bNavCustomConnectionValidation && bNavCustomConnectionStatus) {
                //saveConfigurationData();
                oNavigationTiles.saveNavigationTileConfiguration();
            }
            else {
                bNavCustomConnectionValidation = false;
            }

            if (oNavConnectionStatus.length) {
                oNavConnectionStatus.text(oCustomConnectionResponse[0]);
                if (oNavConnectionStatus.hasClass("hide")) {
                    oNavConnectionStatus.removeClass("hide");
                    oNavConnectionStatus.addClass(sClassName);
                }
            }
            if (oNavConnectionStatusSection.length) {
                if (oNavConnectionStatusSection.hasClass("hide")) {
                    oNavConnectionStatusSection.removeClass("hide");
                }
            }
        }
        else {
            // Showing custom error message
            if (oNavConnectionStatus.length) {
                oNavConnectionStatus.text("Something went wrong. Please try again!");
                if (oNavConnectionStatus.hasClass("hide")) {
                    oNavConnectionStatus.removeClass("hide");
                    oNavConnectionStatus.addClass("failure");
                }
            }
            if (oNavConnectionStatusSection.length) {
                if (oNavConnectionStatusSection.hasClass("hide")) {
                    oNavConnectionStatusSection.removeClass("hide");
                }
            }
        }
    }


    var _checkNavConnection = function () {
        var oNavConnectionDataSource = $navDataSource, sSelectedDataSource, sValidator = "rt-navigation-dataSource-validate-btn";
        sSelectedDataSource = oNavConnectionDataSource.val();

        if (oNavConnectionDataSource.length) {
            bNavCustomConnectionValidation = "NewConnectionRequest" === sSelectedDataSource ? true : false;
            _validateNavConfigPopup();
            if (bIsFormValid) {
                if (bNavCustomConnectionValidation) {
                    // go for saving conn string
                    $("#" + sValidator).attr("data-property-sSave", "Yes").click();


                }
                else {
                    // else go for saving the config
                    oNavigationTiles.saveNavigationTileConfiguration();
                }
            }
            else {
                if (bNavCustomConnectionValidation) {
                    $("#" + sValidator).attr("data-property-sSave", "No").click();

                }
            }
        }
    }
    oNavigationTiles.checkNavConnection = _checkNavConnection;

    return oNavigationTiles;
})();

// To change the color of element
function ChangeElementColour(objId, isValid) {
    // functionCallCounter++;  // Increments when ever the fuction iscalled and is used while validating the form after clicking submit button

    // Checks the valid state of the input field
    if (isValid) { // Valid
        $(objId).css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF'); // Apply valid css styles for the input element
        $(objId).attr("Title", ""); //Clear the valaue of Title attribute
        // validCaseCounter++; // Increments for every valid case and counter will be used while validating the form after clicking submit button
        // isCurrentFieldValid = true;
    }
    else { // Invalid
        $(objId).css('border-color', '#FF0000').css('box-shadow', '0px 0px 3px #FF0000'); // Apply Invalid styles for the input element
        // isCurrentFieldValid = false;
    }
}

// To add the new Section in the report panel
var _renderReportTile = function () {
    $(".rt-add-new-section-button").css("opacity", "1");
    $(".rt-report-panel-section-delete").css("opacity", "1");
    var $reportAddTileImage = $("#rt-report-section-tile-div_" + iSectionInReportPanle);
    var oreportTileConfig = {};
    // oNavTileConfig.layoutSize = document.querySelector("input[name='layoutSize']").value;
    var $tileDiv = $("<div class='_ReportTile _1by1'> <div class='_BackgroundEditIcon _1by1'></div></div>");
    $tileDiv.css("background-color", "#00712c");
    $tileDiv.insertBefore($reportAddTileImage);
    $("#rt-report-configPopup-ovarlay-close").click();
}

// To show the filter pop up
var _createFilterConfigOverlay = function () {
    var efilterConfigOverlay = document.getElementById('rt-filter-configPopup-ovarlay');
    var oPortfolioSelectAttributes = {
        className: 'rt-portfolio-select-text'
        , innerText: 'Select Portfolio'
    }
    var ePortfolioSelect = _createDomElement('div', oPortfolioSelectAttributes);
    var oPortfolioSelectAttributes = {
        className: 'rt-portfolio-select'
        , innerText: 'Select Portfolio'
    }
}

var _createDomElement = function (e, aAttributes) {
    var domElement = document.createElement(e);
    for (var n in aAttributes) {
        if (aAttributes.hasOwnProperty(n)) {
            domElement[n] = aAttributes[n];
        }
    }
    return domElement;
};

var subsitepath = "";
var count = 0;
var Filterlistjson = "";
var Filterslistids = [];
// For getting filters data from HorizontalFilter_FilterConfiguration list
$("#selectsite").change(function () {
    var filterHTMLChunk = "";
    if ($('#filtercontent').length) {

        $("#filtercontent").html("");
        $("#filtercontent").html("<img id='loading-image' src='" + webAPIurl + "/SiteAssets/PlatformComponentReportingTemplate/Images/ReportingTemplatePageLayout/loading_indeterminate_bar_invert.gif' alt='Loading...' />");

    }
    else {
        filterHTMLChunk += "<div id = \"filtercontent\"></div>";
        $(".rt-filter-options").append(filterHTMLChunk);
        $("#filtercontent").html("<img id='loading-image' src='" + webAPIurl + "/SiteAssets/PlatformComponentReportingTemplate/Images/ReportingTemplatePageLayout/loading_indeterminate_bar_invert.gif' alt='Loading...' />");
    }
    var subsitename = $("#selectsite").val();
    subsitepath = "/site/" + subsitename;

    var oRequestData = { SiteName: subsitename };
    $.ajax({
        type: "POST",
        url: sFilterServicePath + '/RetrievePredefinedFilters',
        data: JSON.stringify(oRequestData),
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function (msg) {
            try {
                // Parse and initialize the response data
                var sResponseData = unescape(msg),
                    oReturnData = JSON.parse(sResponseData);

                GetFiltersNames(oReturnData);
            }
            catch (exp) {
                log(exp);
            }
        },
        error: function (xmlRequest) {
        }
    });


    /*var clientContext = new SP.ClientContext(subsitepath);
    var oList = clientContext.get_web().get_lists().getByTitle('HorizontalFilter_FilterConfigurations');
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><Query><FieldRef Name=\'FilterID\' /><FieldRef Name=\'FIlterName\' /><FieldRef Name=\'Display_x0020_Name\' /><Where><Eq><FieldRef Name=\'IsPredefined\'/><Value Type=\'Text\'>True</Value></Eq></Where></Query></View>');
    collectionitems = oList.getItems(camlQuery);
    clientContext.load(collectionitems);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, function () { PopulateFilteronPopup(collectionitems); }),
        Function.createDelegate(this, onFailed)
    );*/
});

// For Populating filters in filters configuration popup
function PopulateFilteronPopup(collectionitem) {
    var filterHTMLChunk = "";
    var flag = 0;
    //var listItemEnumerator = collectionitems.getEnumerator();
    var clientContext = new SP.ClientContext.get_current();

    for (var filterIndex = 0; filterIndex < collectionitem.length; filterIndex++) {
        var filtername = collectionitem[filterIndex]["FilterName"];
        var filterid = collectionitem[filterIndex]["FilterID"];
        var displayname = collectionitem[filterIndex]["DisplayName"];

        var publishingTag = collectionitem[filterIndex]["PublishTag"];

        filterHTMLChunk += "<div class=\"rt-filter-options-row\">" +
                                                       "<input type=\"checkbox\"/ class = \"rt-filter-select\" filterid =" + filterid + " publishTag='" + publishingTag + "'>" +
                                                      "<div class=\"rt-filter-options-handle\" filterid=" + filterid + " title=\"" + filtername + "\">" + filtername + "</div>" +
                                                      "<input class=\"rt-filter-options-displayName\" type=\"text\" disabled=true value=\"" + displayname + "\" id=" + filterid + "></div>";
    }

    /*
    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        var filtername = oListItem.get_item("FIlterName");
        var filterid = oListItem.get_item("FilterID");
        var displayname = oListItem.get_item("Display_x0020_Name");
        filterHTMLChunk += "<div class=\"rt-filter-options-row\">" +
                                                       "<input type=\"checkbox\"/ class = \"rt-filter-select\" filterid =" + filterid + " >" +
                                                      "<div class=\"rt-filter-options-handle\" filterid=" + filterid + ">" + filtername + "</div>" +
                                                      "<input class=\"rt-filter-options-displayName\" type=\"text\" disabled=true value=\"" + displayname + "\" id=" + filterid + "></div>";
    }
    */

    //filterHTMLChunk += "<div id = \"SaveFiltres\">Save Filters</button>";

    $("#filtercontent").html("");
    $("#filtercontent").html(filterHTMLChunk);




    // Check box is selected or not in the select portfolio in the filter pop up
    $(".rt-filter-select").on('click', function () {


        var isselected = $(this).prop('checked');
        var filterid = $(this).siblings(".rt-filter-options-handle").attr("filterid");
        var filtername = $(this).siblings(".rt-filter-options-handle").attr("title");
        var publishTag = $(this).attr("publishtag");
        var displayname = "";
        var tempFilter = {};
        if (isselected == true) {
            displayname = $(this).siblings(".rt-filter-options-displayName").attr("value");
            $(this).siblings(".rt-filter-options-displayName").prop('disabled', false);

            // Save filter id
            tempFilter.ID = filterid;

            // Display name
            tempFilter.DisplayName = displayname;

            // Filter name
            tempFilter.filtername = filtername;

            // Publish tag
            tempFilter.PublishTag = publishTag;

            // Add to the selected filter list
            Filterslistids.push(tempFilter);
        }
        else {
            $(this).siblings(".rt-filter-options-displayName").prop('disabled', true);
            for (var i = 0 ; i < Filterslistids.length; i++) {
                if (Filterslistids[i].ID === filterid) {
                    Filterslistids.splice(i, 1);
                    break;
                }
            }
        }
    });

    //when click on save button then save the data and load filter panel
    $("#rt-filter-configPopup-ovarlay-save").click(function () {
        $("#FilterWrapper").show();
        var currentsitepath = window.location.pathname;
        currentsitepath = currentsitepath.slice(1);

        UpdateReportConfigurationList();
        /*
        var clientContext = new SP.ClientContext(subsitepath);
        var oList = clientContext.get_web().get_lists().getByTitle('HorizontalFilter_ReportConfigurations');
        var camlQuery = new SP.CamlQuery();
        camlQuery.set_viewXml('<View><Query><Where><Eq><FieldRef Name=\'ReportURL\'/><Value Type=\'Text\'>' + currentsitepath + '</Value></Eq></Where></Query></View>');
        collectionitems = oList.getItems(camlQuery);
        clientContext.load(collectionitems);
        clientContext.executeQueryAsync(
            Function.createDelegate(this, function () { UpdateReportConfigurationList(collectionitems, clientContext); }),
            Function.createDelegate(this, onFailed)
        );
        */

    });
    function UpdateReportConfigurationList(collectionitems, clientContext) {

        // Get Distinct Filters
        Filterslistids = GetDistinctFilters(Filterslistids);

        for (var i = 0 ; i < Filterslistids.length; i++) {
            var id = Filterslistids[i].ID;
            var newdisplayname = $("#" + id).val();
            Filterslistids[i].DisplayName = newdisplayname;
        }
        Filterlistjson = JSON.stringify(Filterslistids);
        var filtersids = "";
        for (var i = 0 ; i < Filterslistids.length; i++) {
            if (filtersids == "")
                filtersids += Filterslistids[i].ID;
            else
                filtersids += "," + Filterslistids[i].ID;
        }

        var currentsitepath = window.location.pathname;
        currentsitepath = currentsitepath.slice(1);

        var oRequestData = {
            ReportURL: currentsitepath,
            FiltersIDs: filtersids,
            Filterlistjson: Filterlistjson
        };
        $.ajax({
            type: "POST",
            url: sFilterServicePath + '/UpdateReportFilterConfiguration',
            data: JSON.stringify(oRequestData),
            contentType: "application/json",
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: "json",
            success: function (msg) {
                try {
                    // Parse and initialize the response data
                    //TODO: Check if is required
                    $("#mask").hide();
                    $('#FilterPopupWrapper').removeClass("EditViewPopupDiv")
                    return true;
                }
                catch (exp) {
                    log(exp);
                }
            },
            error: function (xmlRequest) {
                return false;
            }
        });

        /*
        var ReportJSONChunk = "";
        var listItemEnumerator = collectionitems.getEnumerator();
        while (listItemEnumerator.moveNext()) {
            var oListItem = listItemEnumerator.get_current();
            var reportConfig = oListItem.get_item("SavedConfiguration");
            var reportconfigarray = reportConfig.split('$|$');
            reportconfigarray[1] = filtersids;
            reportConfig = "";
            for (var reportconfigrow in reportconfigarray) {
                if (reportConfig == "") {
                    reportConfig += reportconfigarray[reportconfigrow];
                }
                else {
                    reportConfig += "$|$" + reportconfigarray[reportconfigrow];
                }
            }
            oListItem.set_item('SavedConfiguration', reportConfig);
            oListItem.set_item('FiltersDisplayName', Filterlistjson);
            oListItem.update();
            clientContext.executeQueryAsync(Function.createDelegate(this, onUpdateSucceeded), Function.createDelegate(this, onUpdateFailed));
        }
        */
        var newsubsitepath = subsitepath.slice(1);
        var oFilterObject;
        var oFilterParams = {
            // list that contain filter configurations
            filterConfigurationsList: "HorizontalFilter_FilterConfigurations",
            // List that contain Report Configurations
            reportSpecificFilterConfiguration: "HorizontalFilter_ReportConfigurations",
            // This List contains Common 	Configurations	
            commonList: "HorizontalFilter_Configurations",
            site: newsubsitepath,			// Site path where lists are available  
            filterDiv: "FilterWrapper",	// ID of the Filter Div ID
            saveViewConfigId: "2"
            // save view module id
        }
        $("#FilterWrapper").html("");
        try {
            // create an object for the filter panel class
            oFilterObject = new MAQ.HorizontalFilterPanel(oFilterParams);
            oFilterObject.init();
        }
        catch (e) {
            //Failed to create filter
            console.log("Creation of Filter failed");
            $("#rt-filter-tile-img").hide();
        }
        $('#rt-filter-configPopup-ovarlay').hide();
        $("#rt-filter-tile-img").hide();

    }
    function onUpdateSucceeded() {
        return true;
    }

    /* display message on update to the list is failed */
    function onUpdateFailed(sender, args) {
        console.log('Request failed. ' + args.get_message() +
           '\n' + args.get_stackTrace());
        return false;
    }

};

function GetFiltersNames(collectionitem) {
    var currentsitepath = window.location.pathname;
    currentsitepath = currentsitepath.slice(1);


    var oRequestData = { ReportURL: currentsitepath };
    $.ajax({
        type: "POST",
        url: sFilterServicePath + '/RetrieveReportFilterDisplayName',
        data: JSON.stringify(oRequestData),
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function (msg) {
            try {
                // Parse and initialize the response data
                if (msg !== "{}") {
                    var sResponseData = unescape(msg),
                        oReturnData = JSON.parse(sResponseData)

                    //GetFiltersDisplayName(oReturnData.DisplayFilterName);
                    if (oReturnData.FiltersDisplayName !== null && oReturnData.FiltersDisplayName !== "") {
                        // Get distinct filter if duplicate filters are saved previously 
                        var distinctFilters = GetDistinctFilters(JSON.parse(oReturnData.FiltersDisplayName));
                        
                        // Update filter display
                        if (collectionitem) {
                            PopulateFilteronPopup(collectionitem);
                        }

                        // Get filter display name
                        GetFiltersDisplayName(distinctFilters);
                    }
                } else {
                    createitem();
                }
            }
            catch (exp) {
                log(exp);
            }
        },
        error: function (xmlRequest) {
        }
    });
}
// Get distinct filter objects
function GetDistinctFilters(arrFilters) {

    // Temp variables required
    var arrTempFilterIds = [],
        returnArrayFilter = [],
        tempIndex,
        index = 0,
            length = arrFilters.length;

    for (; index < length; index++) {

        // Check if this filter is already present
        if (arrFilters[index].ID && arrTempFilterIds.indexOf(arrFilters[index].ID) === -1) {

            // If not than add the filter to result set
            arrTempFilterIds.push(arrFilters[index].ID);
            returnArrayFilter.push(arrFilters[index]);
        }
    }

    // Return distinct filter set
    return returnArrayFilter;
}
function GetFiltersDisplayName(Filtersnameobj) {
    if (Filtersnameobj !== null) {
        for (i = 0; i < Filtersnameobj.length; i++) {
            var filterid = Filtersnameobj[i].ID;
            var filtername = Filtersnameobj[i].DisplayName;
            $("#" + filterid).val(filtername);
            $(".rt-filter-select[filterid=" + filterid + "]").prop("checked", true);
            $("#" + filterid).prop("disabled", false);
        }

        Filterslistids = Filtersnameobj;
    }
}
function createitem() {
    var title = window.location.pathname.split('/');
    title = title[title.length - 1].split('.')[0];
    title = "RT_" + title;
    var reportconfig = "{" +
        "\"isMergedPerspective\":false," +
        "\"enableSaveFilters\" : true ," +
        "\"filters\":[" +
           "{ " +
               "\"tabId\":\"pipeline\"," +
               "\"tabName\":\"PipelineData\"," +
               "\"filterObjects\":[" +
                  "@F0" +
               "]" +
           "}" +
        "]," +
        "\"filterDefaults\":[" +
       "]," +
        "\"selectedFiltersDisplay\": 1" +
    "}" +
    "$|$";

    var currentsitepath = window.location.pathname;
    currentsitepath = currentsitepath.slice(1);

    var oRequestData = { Title: title, ReportURL: window.location.href, SavedConfiguration: reportconfig };
    $.ajax({
        type: "POST",
        url: sFilterServicePath + '/CreateReportConfigEntry',
        data: JSON.stringify(oRequestData),
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function (msg) {
            console.log("Filter Entry Created");
            if ($("#FilterWrapper").html().trim() === "" || $('#FilterWrapper', '._loadingImg').length <= 0) {
                $("#FilterWrapper").empty();
                var oFilterParams = {
                    // List that contain Filter configurations
                    filterConfigurationsList: "HorizontalFilter_FilterConfigurations",
                    // List that contain Report Configurations
                    reportSpecificFilterConfiguration: "HorizontalFilter_ReportConfigurations",
                    // This List contains Common 	Configurations	
                    commonList: "HorizontalFilter_Configurations",
                    site: "site/ESBI",			// Site path where lists are available  
                    filterDiv: "FilterWrapper",	// ID of the Filter Div ID
                    saveViewConfigId: 1		// Save View Module ID
                };
                oFilterObject = new MAQ.HorizontalFilterPanel(oFilterParams); oFilterObject.init();

                /*try {
                    // Parse and initialize the response data
                    var sResponseData = unescape(msg),
                        oReturnData = JSON.parse(sResponseData)
                                        
                        GetFiltersDisplayName(oReturnData);
                }
                catch (exp) {
                    log(exp);
                }*/
            }
        },
        error: function (xmlRequest) {
        }
    });
}

function onQuerySucceededfilter() {
    console.log('Item created: ' + oListItem.get_id());
}

function onQueryFailedfilter(sender, args) {
    console.log('Request failed. ' + args.get_message() +
        '\n' + args.get_stackTrace());
}


function onFailed(sender, args) {
    console.log('Request failed. ' + args.get_message() +
       '\n' + args.get_stackTrace());
    return false;
}


function GetSiteName(collectionitems) {
    var listItemEnumerator = collectionitems.getEnumerator();
    $("#selectsite").html("");
    var dropdownHTMLChunk = "";
    dropdownHTMLChunk += "<option>Select</option>";
    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        var siteDisplayName = oListItem.get_item("DisplaySiteName");
        var value = oListItem.get_item("Value");
        dropdownHTMLChunk += "<option value=\"" + value + "\">" + siteDisplayName + "</option>";

    }
    $("#selectsite").html(dropdownHTMLChunk);
}


function GetSiteNames(siteNameArray) {
    $("#selectsite").html("");
    var dropdownHTMLChunk = "";
    dropdownHTMLChunk += "<option>Select</option>";
    for (var siteIndex = 0; siteIndex < siteNameArray.length; siteIndex++) {
        var siteDisplayName = siteNameArray[siteIndex]["DisplaySiteName"];
        var value = siteNameArray[siteIndex]["Value"];
        dropdownHTMLChunk += "<option value=\"" + value + "\">" + siteDisplayName + "</option>";

    }
    $("#selectsite").html(dropdownHTMLChunk);
}

$("#selectall").on('click', function () {
    var ischecked = $(this).prop('checked');
    if (ischecked == true) {
        /*$(".rt-filter-select").each(function () {
            if (!$(this).prop("checked")) {
                $(this).click();
            }
        });*/
        $(".rt-filter-select").prop('checked', true);
        $(".rt-filter-options-displayName").prop('disabled', false);

    }
    else {
        /*$(".rt-filter-select").each(function () {
            if ($(this).prop("checked")) {
                $(this).click();
            }
        });*/
        $(".rt-filter-select").prop('checked', false);
        $(".rt-filter-options-displayName").prop('disabled', true);
    }

    // Get all the filter ids of the saved filters
    var arrSelectedFilterIds = [];
    Filterslistids.forEach(function (filter) {
        arrSelectedFilterIds.push(filter.ID);
    });

    // Start showing/hiding all filters
    $("#filtercontent .rt-filter-options-row").each(function (index, element) {

        // Get filter id
        var filterId = $(element.children[0]).attr('filterid');
        var tempObj = {};

        // If filter is present
        if (!!filterId) {

            // Check if it is present in selected filter list
            var index = arrSelectedFilterIds.indexOf(filterId);

            // If select all  and filter is not already present
            if (ischecked && index === -1) {

                // Add new filter
                tempObj.ID = filterId;
                tempObj.DisplayName = element.children[2].value ? element.children[2].value : element.children[1].title;
                tempObj.filtername = element.children[1].title;
                tempObj.PublishTag = $(element.children[0]).attr('publishtag');

                // Update filter list
                Filterslistids.push(tempObj);
                arrSelectedFilterIds.push(filterId);
            } else if (!ischecked && index >= 0) {
                // If its Deselect all and filter is present in the list

                // Remove the filter from list
                Filterslistids.splice(index, 1);

                // Update list of filter ids
                arrSelectedFilterIds.splice(index, 1);
            }
        }
    });
});

var renderTilesOnReport = function (SectionObject) {

    var sReportSection = '<div id="rt-section_{0}"> <div class="rt-line-height"></div> <div class="_toTable _width rt-section-txt-div">  <div class="rt-section-name">  <div class="rt-section-name">Section name</div> <div><input class="rt-section-name" id="rt-report-section-name" type="text" value={1}></div> </div> <div class="rt-section-txt" id="close-button-img_0">  <div class="rt-section-txt-postion">Position</div> <div><input class="rt-section-postion" id="rt-report-section-postion" type="text" value={2}></div> </div> <div class="rt-report-panel-section-delete"> <div class="_pageIconPanel" id="_saveReportSection">  <div class="_saveReportSection _pageIcon"></div>  <div class="_iconText">Save section</div>   </div> <div class="_pageIconPanel" id="_cancelReportSection">  <div class="_cancelReportSection _pageIcon"></div> <div class="_iconText">Cancel</div> </div> <div class="_pageIconPanel" id="_deleteReportSection" onclick=\'rtSectionClose("rt-section_{0}")\'> <div class="_deleteReportSection _pageIcon"></div><div class="_iconText">Delete</div></div>   </div> </div> <div class="_toTable _width  rt-report-section"><div class="rt-report-section-tile-div" id="rt-report-section-tile-div_{0}" onclick="_rtReportSectionTileImgClick({0})"></div></div></div>'
    var reportSectionIntermediateChunk = "";
    var reportSectionFinalChunk = "";
    $(".rt-pagelayout-report-panel").html("");
    var isectionLength = SectionObject.section.count;
    for (var iSectionIndex = 0; iSectionIndex < isectionLength; isectionLength++) {
        reportSectionIntermediateChunk = (((sReportSection.replace('{0}', iSectionIndex)).replace('{0}', iSectionIndex)).replace('{0}', iSectionIndex)).replace("{0}", iSectionIndex);
        reportSectionIntermediateChunk = reportSectionFinalChunk.replace('{1}', sectionName).replace('{2}', sectionIndex);
        $(".rt-pagelayout-report-panel").append(reportSectionIntermediateChunk);
    }


};




function _rtReportSectionTileImgClick(obj) {
    reportingTemplateSectionID = $(obj).parent().parent().attr("id");
    $('.rt-CustomReport-ConfigPopup').css("display", "block");
}

$("#selectPageLayoutButton").click(function () {
    var selectedLayout = "", value = $("input[name='option']:checked").siblings().text();
    if (value === "Custom") {
        selectedLayout = $('select[name="rt-CustomReport-List1"] :selected').text() + " X " + $('select[name="rt-CustomReport-List2"] :selected').text();
    } else {
        selectedLayout = $("input[name='option']:checked").siblings().text();
    }
    $(".rt-CustomReport-ConfigPopup").hide();
    editTile(selectedLayout);
});

function rt_CustomReport_ClosePopup() {
    $('.rt-CustomReport-ConfigPopup').hide();
}

function getAllPageProperties() {
    var siteURL = "";
    if (typeof window.location.href.toLowerCase().split("pages") !== "undefined") {
        siteURL = window.location.href.toLowerCase().split("pages")[0];
    }
    $.ajax({
        type: "get",
        url: siteURL + "_api/web/lists/getByTitle('Pages')/Items(" + _spPageContextInfo.pageItemId + ")",
        contentType: "application/json; charset=utf-8",
        dataType: "xml",
        async: false,
        success: handlePageProperties,
        error: errorOccured
    });
}

function handlePageProperties(msg) {
    pageProperties = msg;
    var checkedOutTo = "";
    checkedOutTo = $(pageProperties).find("d\\:CheckoutUserId").text();
    if (checkedOutTo === _spPageContextInfo.userId.toString()) {
        pageIsCheckedOutToCurrentUser = true;
        pageIsCheckedOutToOtherUser = false;
    } else if (checkedOutTo.length > 0) {
        pageIsCheckedOutToCurrentUser = false;
        pageIsCheckedOutToOtherUser = true;
    }

}

function errorOccured(data, error) {
    console.log(error);
}
getAllPageProperties();
$(document).ready(function () {
    // $("#rt-report-sections").empty();
    //var oRequest = new RequestBuilder_filter();
    showSelectedTile = 1;
    $("._pageActions").show();
    _isPageCheckOutMode()
    _initRTPanel();
    _hidePopups();
    _rtPageLevelButtonOnFirstLoad();
    updateShareIcon();
    if (!pageIsCheckedOutToOtherUser)
        $("#_editPage").show();
    else
        $("#_editPage").hide();

    if (isCheckOut) {
        $("#_savePage").show();
        //if (lastSectionIndex == 1 && oTiles.length) {
        //    $(".rt-page-edit-mode").show();
        //}
        //$(".rt-pagelayout-in-edit").hide();
    }
    else {

        rtPageSaveMode();
        hideAllEditTabs();
    }

    if ("" === targetSite) {
        $("#_editPage").hide();
        $("#_pushPage").hide();
    }

    GetFiltersNames();

});


function FetchCurrentSiteFilter(collectionitems, currentsubsite) {
    currentsubsite = currentsubsite.slice(1);
    var listItemEnumerator = collectionitems.getEnumerator();
    if (collectionitems.get_count() !== 0) {
        var filterCount = 0;
        while (listItemEnumerator.moveNext()) {

            var oListItem = listItemEnumerator.get_current();
            var Filtersname = oListItem.get_item("FiltersDisplayName");

            //Get the Count of Filters Configured
            try {
                var SavedConfiguration = oListItem.get_item("SavedConfiguration");
                var filters = SavedConfiguration.split("$|$")[1];
                filterCount = filters.split(",").length - 1;

            } catch (e) {
            }
            var Filtersnameobj = JSON.parse(Filtersname);
            if (Filtersnameobj !== null) {
                Filterslistids = Filtersnameobj;
                filterCount = Filterslistids.length;
            }
        }

        $("#rt-filter-tile-img").hide();
        var oFilterParams = {
            // list that contain filter configurations
            filterConfigurationsList: "HorizontalFilter_FilterConfigurations",
            // List that contain Report Configurations
            reportSpecificFilterConfiguration: "HorizontalFilter_ReportConfigurations",
            // This List contains Common 	Configurations	
            commonList: "HorizontalFilter_Configurations",
            site: currentsubsite,			// Site path where lists are available  
            filterDiv: "FilterWrapper",	// ID of the Filter Div ID
            saveViewConfigId: "2"
            // save view module id
        }
        $("#FilterWrapper").html("");

        if (filterCount > 0) {
            try {
                // create an object for the filter panel class
                oFilterObject = new MAQ.HorizontalFilterPanel(oFilterParams);
                oFilterObject.init();
                if (Filterslistids.length === 0) {
                    $("#EditFilter").unbind("click");
                }
            }
            catch (e) {
                //Failed to create filter
                console.log("Creation of Filter failed");
                //$("#rt-filter-tile-img").hide();
            }
        } else {
            SP.SOD.executeOrDelayUntilScriptLoaded(loadPageControls, "SP.js");
        }
        $("#_editPage").on('click', function () {
            populatesite();
        });

        $("#FilterWrapper").hide();
    } else {
        SP.SOD.executeOrDelayUntilScriptLoaded(loadPageControls, "SP.js");
    }


}

function openOverlay(sDivID, message) {
    $(sDivID).css('display', 'block');
    $('.__RT_HideBackgroundPopUp').css('display', 'block');
    $('._ModalBody').empty();
    $('#Testurl').empty();
    if (globalResponse.success) {
        $('._ModalBody').append(document.createTextNode(overlayMessage));
        var msg = " " + globalResponse.PageURL;
        $('#Testurl').append(document.createTextNode(msg));
        $('#Testurl').attr("href", msg);
    }
    else {
        $('.__GoToUAT').css('display', 'none');
        $('._ModalBody').append(document.createTextNode(message));
        $('._displayurl').hide();
        $('._url').hide();
    }
};


function closeOverlay(sDivID) {
    $(sDivID).css('display', 'none');
    $('.__RT_HideBackgroundPopUp').css('display', 'none');
};

function closeOverlayAndGoToSite(sDivID) {
    $(sDivID).css('display', 'none');
    $('.__RT_HideBackgroundPopUp').css('display', 'none');
    window.location.href = globalResponse.PageURL;
}

jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}

$('#_RT_ViewDataOverlay').center();

$("._displayurl").click(function () {
    closeOverlayAndGoToSite('.__RT_EditViewPopupDiv');
});


function saveMetadata() {
    var ReportInfo = $("#reportInfo").val();
    var Reporttraining = $("#reportTraining").val();
    if (ReportInfo != "") {
        $("#ReportSummary").show();
    }
    else {
        $("#ReportSummary").hide();
    }
    if (Reporttraining != "") {
        $("#ReportTraining").show();
    }
    else {
        $("#ReportTraining").hide();
    }

    var oReq = {
        SiteName: siteName
         , ReportName: reportName
       , ReportInformation: ReportInfo
       , ReportTrainingLink: Reporttraining

    };
    var oRequest = new RequestBuilder_filter();
    oRequest.postRequest(sWebServicePath + 'saveMetadataSection', handlePageResponse, JSON.stringify(oReq), '');
    //$('._environment').text(sToSite + ":");
    //$('.__GoToUAT ').text("Go to " + sToSite);
    //overlayMessage = "Your report is migrated from " + siteName + " environment to " + sToSite + " environment. You can use below link to navigate to " + sToSite + " environment. ";
}

function getMetadata() {
    var oReq = {
        SiteName: siteName
          , ReportName: reportName
    };
    var oRequest = new RequestBuilder_filter();
    oRequest.postRequest(sWebServicePath + 'getMetadataSection', handlePageMetadaResponse, JSON.stringify(oReq), '');
}

function handlePageMetadaResponse(response) {
    var myArray = [];
    var string = response.result;
    $.each(string, function (index, order) {
        myArray.push(order);
    });
    var URL1 = myArray[0];
    var URL2 = myArray[1];
    $("#reportInfo").val(URL1);
    $("#reportTraining").val(URL2);

    // openOverlay('.__RT_EditViewPopupDiv', array.details);
}
function handlePageResponse(response) {

    var string = response.result;
    if (string !== "success") {
        alert("Failed");
    }
    // openOverlay('.__RT_EditViewPopupDiv', array.details);
}

function ReportSummary() {
    getMetadata();
    var url = $("#reportInfo").val();
    if (url !== "") {
        //window.location = url;
        window.open(url);
    }
}

function ReportTraining() {
    getMetadata();
    var url = $("#reportTraining").val();
    if (url !== "") {
        //window.location = url;
        window.open(url);
    }

}
function getSupportLink() {
    var arr = window.location.pathname;
    var urlSplit = arr.split("/");
    var folderName = urlSplit[4];
    var reportfocusareaUrl;
    var reportfocusarea = decodeURI(folderName);
    reportfocusareaUrl = supportLinks[reportfocusarea];
    if (reportfocusareaUrl === undefined) {
        reportfocusareaUrl = supportLinks["Default"];
    }
    window.open(reportfocusareaUrl, "_blank");



}


