$(document).ready(function() {
    /* Give the body the appropriate size */
    //chrome.app.window.current().fullscreen();

    /* Add additional prototypes */
    String.prototype.insert = function(index, val) {
	if (index > 0)
	    return this.substring(0, index) + val + this.substring(index, this.length);
	else
	    return val + this;
    };
    $.prototype.disable = function() {
	this.attr("disabled", true)
		.addClass("ui-state-disabled");
    };
    $.prototype.enable = function() {
	this.attr("disabled", false)
		.removeClass("ui-state-disabled");
    };

    /* Create buttons  */
    $('#Dialogs_FactCreation_OpList_Clear').button();
    $('#Dialogs_FactCreation_OpList_Negate').button();
    $('#PickLevel_PageControls_Next').button();
    $('#PickLevel_PageControls_Prev').button();
    $('#PickLevel_PageControls_Back').button();
    $('#PickLevel_PageControls_Play').button();
    $('#PickLevel_PageControls_Play').disable();
    $('#MainMenuOptions li input').button();
    
    /* Initialize the AddTable */
    AddTable.loadData();

    /* initialize the creation elements */
    updateCreationElements();
    
    /* Set the current level */
    getData("currentLevel", function(value) {
	if (value !== undefined) {
            if (value.index !== undefined) {
                Levels.currentIndex = value.index;
            }
            if (value.progress !== undefined) {
                Levels.current = value.progress;
            }
	}
    });
});

/* Resizing */
$('#Controls_Rules').width(window.innerWidth);

/* Pagination */
// TODO MAYBE fix the moving of the controls
var LevelSelectionPagination = new Pagination(Levels.data, 15);