$(function(){
    $(document).ready(function() {
        $("#fullpage").fullpage({
            verticalCentered: false,
            anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page'],
            navigation: true,
            navigationTooltips:["首页","视觉","交互","皮肤","功能","代办邮件","联系人邮件","科技","链接宜信","马上体验"]
        });
    });
})