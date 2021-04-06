<script type="text/javascript">// <![CDATA[
var cssRules =

'body:not(.format-onetopic.pagelayout-course):not(.mod-scorm):not(.path-mod-scorm) iframe { display: block !important; visibility: visible !important; }.nav-tabs>li{float: none;display: inline-block !important;} .nav-tabs>li>a{padding:0 !important;} .nav-tabs>.active>a,.nav-tabs>.active>a:hover,.nav-tabs>.active>a:focus{border-bottom: 5px solid #e6e6e6 !important;background-color:#444;color:#fff;border-radius:0;}ul.nav.nav-tabs:nth-of-type(2) { background: #f2f2f2;}#nsw-td-ember-nav__coursenav .active .tab_content.dimmed{ color: #fff !important; } .content h2{font-size:30px !important;color:#53bbff !important;margin-top: 20px; margin-bottom: 10px;} .content h1{font-size: 35px !important;color: #fff!important; padding: 15px; background-color: #0194e2;} p{margin: 0px 0px 10px !important;} h3,h4{margin-bottom: 10px !important;margin-top: 20px !important;} div[role="main"] h2{padding: 10px 0 0 0;} .row-fluid table{line-height: 1em;} .course-content div > div > ul{ list-style: square !important; padding-left: 40px; } .course-content li.section ol li:before, .course-content li.section ul li:before { content: none !important;} .course-content ul.section ul {list-style: square !important; padding-left: 25px!important;} .course-content li.section ol li, .course-content li.section ul li{padding-left:3px !important;margin-left:0 !important;} .btn-primary, .btn-info{color:#fff !important;} .btn-default{color:#000 !important;} .section .activity .editing_move{z-index: 1;} .mform .fcheckbox>span, .mform .fradio>span, .mform .fgroup>span{line-height: 1 !important;} .availabilityinfo { margin: 0 0 0 0 !important; font-size: 0.5em; font-family: sans-serif; font-style: italic; opacity: .4; line-height:1;}.availabilityinfo * { margin: 0; line-height: 1; } .menuwrapper li.selected {background-color: #444; color: #fff; border-bottom: 5px solid #e6e6e6; padding-top: 4px; margin-top: -3px;margin-right: 4px;} .block_fake { background-color: #f2f2f2; padding: 10px; margin-top: 20px; } .box >div>ul>li { margin-bottom: 10px; list-style: square;} @media screen and (min-width: 801px){#padder { padding-left: 0 !important; padding-right: 0 !important;}}';
 var styleElement = document.createElement('style');
 styleElement.appendChild(document.createTextNode(cssRules));
 document.getElementsByTagName('head')[0].appendChild(styleElement);
// ]]></script>
<script type="text/javascript">// <![CDATA[
bud = document.getElementById('nsw-td-ember-headerflop').innerHTML;
butto = '<button onclick="topFunction()" class="btn" id="backToTop" style="display: block; position: fixed; bottom: 20px; left: 20px; z-index: 99; font-size: 1em; border: none; outline: none; cursor: pointer; padding: 6px 10px 10px 10px; border-radius: 0px; line-height: 0.7em; background-image: none; color: rgb(255, 255, 255); text-shadow: none; background-color: rgb(68, 68, 68) !important;" title="Go to top"><p style="font-size: 0.6em;margin-bottom: 2px !important;">▲</p>TOP</button>';
document.getElementById('nsw-td-ember-headerflop').innerHTML = butto + bud;
//Get the button
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




 // Back to subject from Topic/Lesson
var getbrdnum = document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li').length;
var subjLink = document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li')[getbrdnum-2].getElementsByTagName('a')[0].getAttribute('href');
var theSublink = '<a href="'+subjLink+'">Exit Topic</a>'
 var liElement = document.createElement('button');
 var bkToSubject = document.createElement('a');

    liElement.innerHTML = theSublink ;
    bkToSubject.innerHTML = '<br><a style="color:#fff !important;" class="btn btn-success" href="'+subjLink+'">Back to Subject</a>'

    if(document.getElementsByClassName('menuwrapper').length>0){
       document.getElementsByClassName('menuwrapper')[0].appendChild(liElement);
    }
    document.getElementById('yourselection').appendChild(bkToSubject);
// ]]></script>
