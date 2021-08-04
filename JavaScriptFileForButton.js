/* オブジェクトの型がCustomの配列を定義*/
var customButtons=new Array();

/* オブジェクトの型がCustomのコンストラクタ関数 */
function CustomButton( aImageId, aMouseOverImage, aMouseUpImage, aMouseDownImage, aLinkURL )
{
    this.theImageId=aImageId;
    this.theMouseOutImage=aMouseUpImage;
    this.theMouseOverImage=aMouseOverImage;
    this.theMouseUpImage=aMouseUpImage;
    this.theMouseDownImage=aMouseDownImage;
    this.theLinkURL=aLinkURL;
}
/* オブジェクトの型がCustomのインスタンス作成 */
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
    
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    
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
    
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
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
    
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }

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
    
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }

    for ( var i=0; i<customButtons.length; i++ ) {
        if ( aTargetObject.id==customButtons[i].theImageId ) {
            aTargetObject.src=customButtons[i].theMouseUpImage;
            TopFrameObject=parent.frames["TopFrame"];
            TopFrameObject.location=customButtons[i].theLinkURL;
        }
    }  
}
/* ObjectにMouseEventが発生した時に呼び出される関数をEvent Listenerとして登録 */
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