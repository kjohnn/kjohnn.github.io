/* Custom�̔z����`*/
// var customButtons=new Array();

/* �N���XCustomButton�̐錾 */
/* class CustomButton {
    constructor( aImageId, aMouseOverImage, aMouseUpImage, aMouseDownImage, aLinkURL )
    {
        this.theImageId=aImageId;
        this.theMouseOutImage=aMouseUpImage;
        this.theMouseOverImage=aMouseOverImage;
        this.theMouseUpImage=aMouseUpImage;
        this.theMouseDownImage=aMouseDownImage;
        this.theLinkURL=aLinkURL;
    }
} */
/* Button.html���ŃI�u�W�F�N�g�̌^��Custom�̃C���X�^���X�̔z����쐬 */
/* function initializeCustomButton()
{
    customButtons[0]=new CustomButton("TopButtonImage", "ButtonPNGFile/TopButtonMouseOver.png",  "ButtonPNGFile/TopButton.png", "ButtonPNGFile/TopButtonOn.png", "Top.html" );
    customButtons[1]=new CustomButton("ProfileButtonImage", "ButtonPNGFile/ProfileButtonMouseOver.png",  "ButtonPNGFile/ProfileButton.png", "ButtonPNGFile/ProfileButtonOn.png", "Profile.html"  );
    customButtons[2]=new CustomButton("SoftwareButtonImage", "ButtonPNGFile/SoftwareButtonMouseOver.png",  "ButtonPNGFile/SoftwareButton.png", "ButtonPNGFile/SoftwareButtonOn.png", "Software.html"  );
    customButtons[3]=new CustomButton("LinkButtonImage", "ButtonPNGFile/LinkButtonMouseOver.png",  "ButtonPNGFile/LinkButton.png", "ButtonPNGFile/LinkButtonOn.png", "Link.html"  );
} */
/* Object��Event�������������ɌĂяo�����֐���EventListener�Ƃ��ēo�^ */
function addListener( anObject, anEvent, aFunction, aCaptureFlag )
{
    /* Internet Explore�ȊO�̏ꍇ */
    if ( window.addEventListener ) {
        anObject.addEventListener( anEvent, aFunction, aCaptureFlag );
    }
    /* Internet Explore�̏ꍇ */    
    else if ( window.attachEvent ) {
        anObject.attachEvent( "on" + anEvent, aFunction );
    }
    /* Event Listener�@�\���Ή����Ă��Ȃ��u���E�U�̏ꍇ */   
    else {
        window.alert("No support on your Browser!");
        return false;
    }
}
/* MouseOver Event���� */
function taskAtMouseOverEvent( e )  
{
    var aTargetObject;
    /* srcElement:Internet Explorer, target:Firefox, �����Ή�:Opera�ESafari�EGoogle Chrome */
    /* e.srcElement���I�u�W�F�N�g�Ȃ�true��Ԃ��Bundefined�܂���null�Ȃ�false��Ԃ� */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* M*/
    aTargetObject.style.color = 'lightsalmon';
    aTargetObject.style.cursor = 'pointer';
  
}    
/* MouseOut Event���� */
function taskAtMouseOutEvent( e )  
{
    var aTargetObject;
    /* srcElement:Internet Explorer, target:Firefox, �����Ή�:Opera�ESafari�EGoogle Chrome */
    /* e.srcElement���I�u�W�F�N�g�Ȃ�true��Ԃ��Bundefined�܂���null�Ȃ�false��Ԃ� */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* MouseOut Event���������I�u�W�F�N�g�𒲂ׁAMouseOverImage�����o���AMouseOver Event���������I�u�W�F�N�g��src�ɐݒ� */
    aTargetObject.style.color = '#1a73e8';

}
/* MouseDown Event���� */
function taskAtMouseDownEvent( e )  
{
    var aTargetObject;
    /* srcElement:Internet Explorer, target:Firefox, �����Ή�:Opera�ESafari�EGoogle Chrome */
    /* e.srcElement���I�u�W�F�N�g�Ȃ�true��Ԃ��Bundefined�܂���null�Ȃ�false��Ԃ� */
    if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    }
    /* MouseDown Event���������I�u�W�F�N�g�𒲂ׁAMouseDownImage�����o���AMouseDown Event���������I�u�W�F�N�g��src�ɐݒ� */
    aTargetObject.classList.toggle("active");
    aTargetObject.style.color = 'red';
}
/* MouseUp Event���� */
/* function taskAtMouseUpEvent( e )  
{
    var aTargetObject, TopFrameObject; */
     /* srcElement:Internet Explorer, target:Firefox, �����Ή�:Opera�ESafari�EGoogle Chrome */
    /* e.srcElement���I�u�W�F�N�g�Ȃ�true��Ԃ��Bundefined�܂���null�Ȃ�false��Ԃ� */
/*     if ( e.srcElement ) {
        aTargetObject=e.srcElement;
    }
    else if ( e.target ) {
        aTargetObject=e.target;
    } */
    /* MouseUp Event���������I�u�W�F�N�g�𒲂ׁAMouseUpImage�����o���AMouseUp Event���������I�u�W�F�N�g��src�ɐݒ� */
    /* TopFrame����肾���A�����Ƀ����N��\�� */
/*     for ( var i=0; i<customButtons.length; i++ ) {
        if ( aTargetObject.id==customButtons[i].theImageId ) {
            aTargetObject.src=customButtons[i].theMouseUpImage;
            TopFrameObject=parent.frames["TopFrame"];
            TopFrameObject.location=customButtons[i].theLinkURL;
        }
    }  */ 
// }
/* Object��MouseEvent�������������ɌĂяo�����֐���Event Listener�Ƃ��ēo�^�ihtml����LoadEvent�����������ɌĂяo�����悤�ɐݒ肳��Ă���j*/
function setListeners( e )  
{
    
    // let element = document.getElementById('HideKeyboard'); 
    // addListener( element, "mouseover", taskAtMouseOverEvent, false );
    // addListener( element, "mouseout", taskAtMouseOutEvent, false );
    let elements = document.getElementsByClassName('parent'); 
    for ( var element of elements) {
        addListener( element, "mouseover", taskAtMouseOverEvent, false );
        addListener( element, "mouseout", taskAtMouseOutEvent, false );
        addListener( element, "mousedown", taskAtMouseDownEvent, false );
    //     addListener( element, "mousedown", taskAtMouseDownEvent, false );
    //     addListener( element, "mouseup", taskAtMouseUpEvent, false );      
    }       
}