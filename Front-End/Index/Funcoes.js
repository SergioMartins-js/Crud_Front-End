function codigo() {
var a 
a = Math.round(Math.random()*100);
alert("Seu código de rastreio: AH " + a + "0001521 BR");
}


(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();


/*checkbox*/

function teste2(obj)
{	
	if (obj.checked == true) 
	{
		if (obj.id == 'cMasc')
		{
			document.getElementById('cFem').checked = false;
			document.getElementById('cInd').checked = false;		
		}
		else if (obj.id == 'cFem')
		{
			document.getElementById('cMasc').checked = false;
			document.getElementById('cInd').checked = false;
		}
		else if (obj.id == 'cInd')
		{
			document.getElementById('cFem').checked = false;
			document.getElementById('cMasc').checked = false;
		}	
	}
	
}


    function dsangue(obj)
    {
        if (obj.checked == true)
        {
            if (obj.id == 'cSim')
            {
                document.getElementById('cNao').checked = false;
            }
            if (obj.id == 'cNao')
            {
                document.getElementById('cSim').checked = false;
            }
        }    
    }

    function osangue(obj)
    {
        if (obj.checked == true)
        {
            if (obj.id == 'cYes')
            {
                document.getElementById('cNo').checked = false;
            }
            if (obj.id == 'cNo')
            {
                document.getElementById('cYes').checked = false;
            }
        }    
    }