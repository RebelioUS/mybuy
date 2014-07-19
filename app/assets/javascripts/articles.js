
// Visual text editor

//= require 'vanila/nicEdit'


// NicEdit
bkLib.onDomLoaded(function() {
    var myNicEditor = new nicEditor({
        buttonList : [
            'bold',
            'italic',
            'underline',
            'forecolor',
            'left',
            'center',
            'right',
            'justify'
        ]
    });
    myNicEditor.setPanel('edit_buttons');
    myNicEditor.addInstance('styled_message');
});
setTimeout(function () {
    var nic_width = $('.nicEdit-panel').width();
    $('.nicEdit-container').css('width', nic_width);
    $('.nicEdit-main').css('width', nic_width-24);
}, 2000);
$(window).resize(function() {
    var nic_width = $('.nicEdit-panel').width();
    $('.nicEdit-container').css('width', nic_width);
    $('.nicEdit-main').css('width', nic_width-24);
});
// \NicEdit