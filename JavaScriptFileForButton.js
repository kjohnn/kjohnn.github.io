/* Customの配列を定義*/
var customButtons=new Array();

/* クラスCustomButtonの宣言 */
class CustomButton {
    constructor( aImageId, aMouseOverImage, aMouseUpImage, aMouseDownImage, aLinkURL )
    {
        this.theImageId=aImageId;
        this.theMouseOutImage=aMouseUpImage;
        this.theMouseOverImage=aMouseOverImage;
        this.theMouseUpImage=aMouseUpImage;
        this.theMouseDownImage=aMouseDownImage;
        this.theLinkURL=aLinkURL;
    }
}
/* Button.html内でオブジェクトの型がCustomのインスタンスの配列を作成 */
function initializeCustomButton()
{
    customButtons[0]=new CustomButton("TopButtonImage", "ButtonPNGFile/TopButtonMouseOver.png",  "ButtonPNGFile/TopButton.png", "ButtonPNGFile/TopButtonOn.png", "Top.html" );
    customButtons[1]=new CustomButton("ProfileButtonImage", "ButtonPNGFile/ProfileButtonMouseOver.png",  "ButtonPNGFile/ProfileButton.png", "ButtonPNGFile/ProfileButtonOn.png", "Profile.html"  );
    customButtons[2]=new CustomButton("SoftwareButtonImage", "ButtonPNGFile/SoftwareButtonMouseOver.png",  "ButtonPNGFile/SoftwareButton.png", "ButtonPNGFile/SoftwareButtonOn.png", "Software.html"  );
    customButtons[3]=new CustomButton("LinkButtonImage", "ButtonPNGFile/LinkButtonMouseOver.png",  "ButtonPNGFile/LinkButton.png", "ButtonPNGFile/LinkButtonOn.png", "Link.html"  );
}
/* ObjectにEventが発生した時に呼び出される関数をEventListenerとして登録 */
function addListener( anObject, anEvent, aFunction, aCaptureFlag )
{
    /* Internet Explore以外の場合 */
    if ( window.addEventListener ) {
        anObject.addEventListener( anEvent, aFunction, aCaptureFlag );
    }
    /* Internet Exploreの場合 */    
    else if ( window.attachEvent ) {
        anObject.attachEvent( "on" + anEvent, aFunction );
    }
    /* Event Listener機能が対応していないブラウザの場合 */   
    else {
        window.alert("No support on your Browser!");
        return false;
    }
}
/* MouseOver Event処理 */
function taskAtMouseOverEvent( e )  
{
    var aTargetObject;
    /* srcElement:Internet Explorer, target:Firefox, 両方対応:Opera・Safari・Google Chrome */
    /* e.srcElementがオブジェクトならtrueを返す。undifinedまたはnullならfalseを返す */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* MouseOver Eventが生じたオブジェクトを調べ、MouseOverImageを取り出し、MouseOver Eventが生じたオブジェクトのsrcに設定 */
    for ( var i=0; i<customButtons.length; i++ ) {
        if ( aTargetObject.id==customButtons[i].theImageId ) {
            aTargetObject.src=customButtons[i].theMouseOverImage;
        }
    }
  
}    
/* MouseOut Event処理 */
function taskAtMouseOutEvent( e )  
{
    var aTargetObject;
    /* srcElement:Internet Explorer, target:Firefox, 両方対応:Opera・Safari・Google Chrome */
    /* e.srcElementがオブジェクトならtrueを返す。undifinedまたはnullならfalseを返す */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* MouseOut Eventが生じたオブジェクトを調べ、MouseOutImageを取り出し、MouseOut Eventが生じたオブジェクトのsrcに設定 */
    for ( var i=0; i<customButtons.length; i++ ) {
        if ( aTargetObject.id==customButtons[i].theImageId ) {
            aTargetObject.src=customButtons[i].theMouseOutImage;
        }
    }

}
/* MouseDown Event処理 */
function taskAtMouseDownEvent( e )  
{
    var aTargetObject;
    /* srcElement:Internet Explorer, target:Firefox, 両方対応:Opera・Safari・Google Chrome */
    /* e.srcElementがオブジェクトならtrueを返す。undifinedまたはnullならfalseを返す */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* MouseDown Eventが生じたオブジェクトを調べ、MouseDownImageを取り出し、MouseDown Eventが生じたオブジェクトのsrcに設定 */
    for ( var i=0; i<customButtons.length; i++ ) {
        if ( aTargetObject.id==customButtons[i].theImageId ) {
            aTargetObject.src=customButtons[i].theMouseDownImage;
        }
    }
}
/* MouseUp Event処理 */
function taskAtMouseUpEvent( e )  
{
    var aTargetObject, TopFrameObject;
     /* srcElement:Internet Explorer, target:Firefox, 両方対応:Opera・Safari・Google Chrome */
    /* e.srcElementがオブジェクトならtrueを返す。undifinedまたはnullならfalseを返す */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* MouseUp Eventが生じたオブジェクトを調べ、MouseUpImageを取り出し、MouseUp Eventが生じたオブジェクトのsrcに設定 */
    /* TopFrameを取りだし、そこにリンクを貼る */
    for ( var i=0; i<customButtons.length; i++ ) {
        if ( aTargetObject.id==customButtons[i].theImageId ) {
            aTargetObject.src=customButtons[i].theMouseUpImage;
            TopFrameObject=parent.frames["TopFrame"];
            TopFrameObject.location=customButtons[i].theLinkURL;
        }
    }  
}
/* ObjectにMouseEventが発生した時に呼び出される関数をEvent Listenerとして登録（Button.html内でLoadEventが生じた時に呼び出されるように設定されている）*/
function setListeners( e )  
{
    var aImage;   
       
    for ( var i=0; i<customButtons.length ;i++ ) {
        aImage=document.getElementById( customButtons[i].theImageId );
        addListener( aImage, "mouseover", taskAtMouseOverEvent, false );
        addListener( aImage, "mouseout", taskAtMouseOutEvent, false );
        addListener( aImage, "mousedown", taskAtMouseDownEvent, false );
        addListener( aImage, "mouseup", taskAtMouseUpEvent, false );      
    }     
}