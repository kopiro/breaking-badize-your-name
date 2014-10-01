/*
http://en.wikipedia.org/wiki/Chemical_element
x={}; $('.wikitable').eq(2).find('tr').each(function(){ var u=$(this); x[u.find('td').eq(2).text().toLowerCase()] = { no:u.find('td').eq(0).text(), name:u.find('td').eq(1).text(), symbol:u.find('td').eq(2).text(), group:u.find('td').eq(3).text(), period:u.find('td').eq(4).text(), state:u.find('td').eq(6).text(), info:u.find('td').eq(8).text() }; }); console.log(JSON.stringify(x));
*/
var ELS = {"h":{"no":"1","name":"Hydrogen","symbol":"H","group":"1","period":"1","state":"Gas","info":"Non-metal"},"he":{"no":"2","name":"Helium","symbol":"He","group":"18","period":"1","state":"Gas","info":"Noble gas"},"li":{"no":"3","name":"Lithium","symbol":"Li","group":"1","period":"2","state":"Solid","info":"Alkali metal"},"be":{"no":"4","name":"Beryllium","symbol":"Be","group":"2","period":"2","state":"Solid","info":"Alkaline earth metal"},"b":{"no":"5","name":"Boron","symbol":"B","group":"13","period":"2","state":"Solid","info":"Metalloid"},"c":{"no":"6","name":"Carbon","symbol":"C","group":"14","period":"2","state":"Solid","info":"Non-metal"},"n":{"no":"7","name":"Nitrogen","symbol":"N","group":"15","period":"2","state":"Gas","info":"Non-metal"},"o":{"no":"8","name":"Oxygen","symbol":"O","group":"16","period":"2","state":"Gas","info":"Non-metal"},"f":{"no":"9","name":"Fluorine","symbol":"F","group":"17","period":"2","state":"Gas","info":"Halogen"},"ne":{"no":"10","name":"Neon","symbol":"Ne","group":"18","period":"2","state":"Gas","info":"Noble gas"},"na":{"no":"11","name":"Sodium","symbol":"Na","group":"1","period":"3","state":"Solid","info":"Alkali metal"},"mg":{"no":"12","name":"Magnesium","symbol":"Mg","group":"2","period":"3","state":"Solid","info":"Alkaline earth metal"},"al":{"no":"13","name":"Aluminium","symbol":"Al","group":"13","period":"3","state":"Solid","info":"Metal"},"si":{"no":"14","name":"Silicon","symbol":"Si","group":"14","period":"3","state":"Solid","info":"Metalloid"},"p":{"no":"15","name":"Phosphorus","symbol":"P","group":"15","period":"3","state":"Solid","info":"Non-metal"},"s":{"no":"16","name":"Sulfur","symbol":"S","group":"16","period":"3","state":"Solid","info":"Non-metal"},"cl":{"no":"17","name":"Chlorine","symbol":"Cl","group":"17","period":"3","state":"Gas","info":"Halogen"},"ar":{"no":"18","name":"Argon","symbol":"Ar","group":"18","period":"3","state":"Gas","info":"Noble gas"},"k":{"no":"19","name":"Potassium","symbol":"K","group":"1","period":"4","state":"Solid","info":"Alkali metal"},"ca":{"no":"20","name":"Calcium","symbol":"Ca","group":"2","period":"4","state":"Solid","info":"Alkaline earth metal"},"sc":{"no":"21","name":"Scandium","symbol":"Sc","group":"3","period":"4","state":"Solid","info":"Transition metal"},"ti":{"no":"22","name":"Titanium","symbol":"Ti","group":"4","period":"4","state":"Solid","info":"Transition metal"},"v":{"no":"23","name":"Vanadium","symbol":"V","group":"5","period":"4","state":"Solid","info":"Transition metal"},"cr":{"no":"24","name":"Chromium","symbol":"Cr","group":"6","period":"4","state":"Solid","info":"Transition metal"},"mn":{"no":"25","name":"Manganese","symbol":"Mn","group":"7","period":"4","state":"Solid","info":"Transition metal"},"fe":{"no":"26","name":"Iron","symbol":"Fe","group":"8","period":"4","state":"Solid","info":"Transition metal"},"co":{"no":"27","name":"Cobalt","symbol":"Co","group":"9","period":"4","state":"Solid","info":"Transition metal"},"ni":{"no":"28","name":"Nickel","symbol":"Ni","group":"10","period":"4","state":"Solid","info":"Transition metal"},"cu":{"no":"29","name":"Copper","symbol":"Cu","group":"11","period":"4","state":"Solid","info":"Transition metal"},"zn":{"no":"30","name":"Zinc","symbol":"Zn","group":"12","period":"4","state":"Solid","info":"Transition metal"},"ga":{"no":"31","name":"Gallium","symbol":"Ga","group":"13","period":"4","state":"Solid","info":"Metal"},"ge":{"no":"32","name":"Germanium","symbol":"Ge","group":"14","period":"4","state":"Solid","info":"Metalloid"},"as":{"no":"33","name":"Arsenic","symbol":"As","group":"15","period":"4","state":"Solid","info":"Metalloid"},"se":{"no":"34","name":"Selenium","symbol":"Se","group":"16","period":"4","state":"Solid","info":"Non-metal"},"br":{"no":"35","name":"Bromine","symbol":"Br","group":"17","period":"4","state":"Liquid","info":"Halogen"},"kr":{"no":"36","name":"Krypton","symbol":"Kr","group":"18","period":"4","state":"Gas","info":"Noble gas"},"rb":{"no":"37","name":"Rubidium","symbol":"Rb","group":"1","period":"5","state":"Solid","info":"Alkali metal"},"sr":{"no":"38","name":"Strontium","symbol":"Sr","group":"2","period":"5","state":"Solid","info":"Alkaline earth metal"},"y":{"no":"39","name":"Yttrium","symbol":"Y","group":"3","period":"5","state":"Solid","info":"Transition metal"},"zr":{"no":"40","name":"Zirconium","symbol":"Zr","group":"4","period":"5","state":"Solid","info":"Transition metal"},"nb":{"no":"41","name":"Niobium","symbol":"Nb","group":"5","period":"5","state":"Solid","info":"Transition metal"},"mo":{"no":"42","name":"Molybdenum","symbol":"Mo","group":"6","period":"5","state":"Solid","info":"Transition metal"},"tc":{"no":"43","name":"Technetium","symbol":"Tc","group":"7","period":"5","state":"Solid","info":"Transition metal"},"ru":{"no":"44","name":"Ruthenium","symbol":"Ru","group":"8","period":"5","state":"Solid","info":"Transition metal"},"rh":{"no":"45","name":"Rhodium","symbol":"Rh","group":"9","period":"5","state":"Solid","info":"Transition metal"},"pd":{"no":"46","name":"Palladium","symbol":"Pd","group":"10","period":"5","state":"Solid","info":"Transition metal"},"ag":{"no":"47","name":"Silver","symbol":"Ag","group":"11","period":"5","state":"Solid","info":"Transition metal"},"cd":{"no":"48","name":"Cadmium","symbol":"Cd","group":"12","period":"5","state":"Solid","info":"Transition metal"},"in":{"no":"49","name":"Indium","symbol":"In","group":"13","period":"5","state":"Solid","info":"Metal"},"sn":{"no":"50","name":"Tin","symbol":"Sn","group":"14","period":"5","state":"Solid","info":"Metal"},"sb":{"no":"51","name":"Antimony","symbol":"Sb","group":"15","period":"5","state":"Solid","info":"Metalloid"},"te":{"no":"52","name":"Tellurium","symbol":"Te","group":"16","period":"5","state":"Solid","info":"Metalloid"},"i":{"no":"53","name":"Iodine","symbol":"I","group":"17","period":"5","state":"Solid","info":"Halogen"},"xe":{"no":"54","name":"Xenon","symbol":"Xe","group":"18","period":"5","state":"Gas","info":"Noble gas"},"cs":{"no":"55","name":"Caesium","symbol":"Cs","group":"1","period":"6","state":"Solid","info":"Alkali metal"},"ba":{"no":"56","name":"Barium","symbol":"Ba","group":"2","period":"6","state":"Solid","info":"Alkaline earth metal"},"la":{"no":"57","name":"Lanthanum","symbol":"La","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"ce":{"no":"58","name":"Cerium","symbol":"Ce","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"pr":{"no":"59","name":"Praseodymium","symbol":"Pr","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"nd":{"no":"60","name":"Neodymium","symbol":"Nd","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"pm":{"no":"61","name":"Promethium","symbol":"Pm","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"sm":{"no":"62","name":"Samarium","symbol":"Sm","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"eu":{"no":"63","name":"Europium","symbol":"Eu","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"gd":{"no":"64","name":"Gadolinium","symbol":"Gd","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"tb":{"no":"65","name":"Terbium","symbol":"Tb","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"dy":{"no":"66","name":"Dysprosium","symbol":"Dy","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"ho":{"no":"67","name":"Holmium","symbol":"Ho","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"er":{"no":"68","name":"Erbium","symbol":"Er","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"tm":{"no":"69","name":"Thulium","symbol":"Tm","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"yb":{"no":"70","name":"Ytterbium","symbol":"Yb","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"lu":{"no":"71","name":"Lutetium","symbol":"Lu","group":"3","period":"6","state":"Solid","info":"Lanthanide"},"hf":{"no":"72","name":"Hafnium","symbol":"Hf","group":"4","period":"6","state":"Solid","info":"Transition metal"},"ta":{"no":"73","name":"Tantalum","symbol":"Ta","group":"5","period":"6","state":"Solid","info":"Transition metal"},"w":{"no":"74","name":"Tungsten","symbol":"W","group":"6","period":"6","state":"Solid","info":"Transition metal"},"re":{"no":"75","name":"Rhenium","symbol":"Re","group":"7","period":"6","state":"Solid","info":"Transition metal"},"os":{"no":"76","name":"Osmium","symbol":"Os","group":"8","period":"6","state":"Solid","info":"Transition metal"},"ir":{"no":"77","name":"Iridium","symbol":"Ir","group":"9","period":"6","state":"Solid","info":"Transition metal"},"pt":{"no":"78","name":"Platinum","symbol":"Pt","group":"10","period":"6","state":"Solid","info":"Transition metal"},"au":{"no":"79","name":"Gold","symbol":"Au","group":"11","period":"6","state":"Solid","info":"Transition metal"},"hg":{"no":"80","name":"Mercury","symbol":"Hg","group":"12","period":"6","state":"Liquid","info":"Transition metal"},"tl":{"no":"81","name":"Thallium","symbol":"Tl","group":"13","period":"6","state":"Solid","info":"Metal"},"pb":{"no":"82","name":"Lead","symbol":"Pb","group":"14","period":"6","state":"Solid","info":"Metal"},"bi":{"no":"83","name":"Bismuth","symbol":"Bi","group":"15","period":"6","state":"Solid","info":"Metal"},"po":{"no":"84","name":"Polonium","symbol":"Po","group":"16","period":"6","state":"Solid","info":"Metal"},"at":{"no":"85","name":"Astatine","symbol":"At","group":"17","period":"6","state":"Solid","info":"Halogen"},"rn":{"no":"86","name":"Radon","symbol":"Rn","group":"18","period":"6","state":"Gas","info":"Noble gas"},"fr":{"no":"87","name":"Francium","symbol":"Fr","group":"1","period":"7","state":"Solid","info":"Alkali metal"},"ra":{"no":"88","name":"Radium","symbol":"Ra","group":"2","period":"7","state":"Solid","info":"Alkaline earth metal"},"ac":{"no":"89","name":"Actinium","symbol":"Ac","group":"3","period":"7","state":"Solid","info":"Actinide"},"th":{"no":"90","name":"Thorium","symbol":"Th","group":"3","period":"7","state":"Solid","info":"Actinide"},"pa":{"no":"91","name":"Protactinium","symbol":"Pa","group":"3","period":"7","state":"Solid","info":"Actinide"},"u":{"no":"92","name":"Uranium","symbol":"U","group":"3","period":"7","state":"Solid","info":"Actinide"},"np":{"no":"93","name":"Neptunium","symbol":"Np","group":"3","period":"7","state":"Solid","info":"Actinide"},"pu":{"no":"94","name":"Plutonium","symbol":"Pu","group":"3","period":"7","state":"Solid","info":"Actinide"},"am":{"no":"95","name":"Americium","symbol":"Am","group":"3","period":"7","state":"Solid","info":"Actinide"},"cm":{"no":"96","name":"Curium","symbol":"Cm","group":"3","period":"7","state":"Solid","info":"Actinide"},"bk":{"no":"97","name":"Berkelium","symbol":"Bk","group":"3","period":"7","state":"Solid","info":"Actinide"},"cf":{"no":"98","name":"Californium","symbol":"Cf","group":"3","period":"7","state":"Solid","info":"Actinide"},"es":{"no":"99","name":"Einsteinium","symbol":"Es","group":"3","period":"7","state":"Solid","info":"Actinide"},"fm":{"no":"100","name":"Fermium","symbol":"Fm","group":"3","period":"7","state":"Solid","info":"Actinide"},"md":{"no":"101","name":"Mendelevium","symbol":"Md","group":"3","period":"7","state":"Solid","info":"Actinide"},"no":{"no":"102","name":"Nobelium","symbol":"No","group":"3","period":"7","state":"Solid","info":"Actinide"},"lr":{"no":"103","name":"Lawrencium","symbol":"Lr","group":"3","period":"7","state":"Solid","info":"Actinide"},"rf":{"no":"104","name":"Rutherfordium","symbol":"Rf","group":"4","period":"7","state":"","info":"Transition metal"},"db":{"no":"105","name":"Dubnium","symbol":"Db","group":"5","period":"7","state":"","info":"Transition metal"},"sg":{"no":"106","name":"Seaborgium","symbol":"Sg","group":"6","period":"7","state":"","info":"Transition metal"},"bh":{"no":"107","name":"Bohrium","symbol":"Bh","group":"7","period":"7","state":"","info":"Transition metal"},"hs":{"no":"108","name":"Hassium","symbol":"Hs","group":"8","period":"7","state":"","info":"Transition metal"},"mt":{"no":"109","name":"Meitnerium","symbol":"Mt","group":"9","period":"7","state":"","info":""},"ds":{"no":"110","name":"Darmstadtium","symbol":"Ds","group":"10","period":"7","state":"","info":""},"rg":{"no":"111","name":"Roentgenium","symbol":"Rg","group":"11","period":"7","state":"","info":""},"cn":{"no":"112","name":"Copernicium","symbol":"Cn","group":"12","period":"7","state":"","info":"Transition metal"},"uut":{"no":"113","name":"(Ununtrium)","symbol":"Uut","group":"13","period":"7","state":"","info":""},"fl":{"no":"114","name":"Flerovium","symbol":"Fl","group":"14","period":"7","state":"","info":""},"uup":{"no":"115","name":"(Ununpentium)","symbol":"Uup","group":"15","period":"7","state":"","info":""},"lv":{"no":"116","name":"Livermorium","symbol":"Lv","group":"16","period":"7","state":"","info":""},"uus":{"no":"117","name":"(Ununseptium)","symbol":"Uus","group":"17","period":"7","state":"","info":""},"uuo":{"no":"118","name":"(Ununoctium)","symbol":"Uuo","group":"18","period":"7","state":"","info":""}}

function generateNames() {
	var name = $(this).val(), _name = name.toLowerCase();
	$('#names').empty();
	var i, j, L, nums = [], numsp = [[]];
	for (i in ELS) {
		var iof = _name.indexOf(i);
		if (iof>=0) nums.push([iof,i.length]);
	}
	for (i=0, L=nums.length; i<L; i++) {
		for (j=i+1; j<=L; j++) {
			var s = nums.slice(i, j), push = true, SL = s.length;
			for (var k1=0; k1<SL; k1++) {
				for (var k2=k1+1; k2<SL; k2++) {
					if (Math.abs(s[k1][0]-s[k2][0])<2) {
						push = false;
						break;
					}
				}
			}
			if (push) numsp.push(s);
		}
	}
	numsp = numsp.sort(function(a,b){
		return a.length>b.length;
	});
	for (i=0, L=numsp.length; i<L; i++) {
		var x = numsp[i];
		var namesplit = name.split('');
		for (j=0; j<x.length; j++) {
			namesplit[x[j][0]] = '<b>'+namesplit[x[j][0]];
			namesplit[x[j][0]+x[j][1]-1] = namesplit[x[j][0]+x[j][1]-1]+'</b>';
		}
		var child = $('<div/>');
		child.append($('<span/>', { html: namesplit.join('') }));
		child.append($('<a/>', { 'class': 'save' }));
		$('#names').append(child);
	}
}

function renderText(text) {
	if (!text) return;
	var w = 850;
	var h = 600;
	var svg = '<svg width="'+w+'" height="'+h+'">';
	svg += '<rect x="0" y="0" width="'+w+'" height="'+h+'" fill="#000"></rect>';
	svg += '<text x="'+w/2+'" y="'+h/2+'" fill="#fff" text-anchor="middle" style="font-family:ITCFranklinGothic;font-size:50px;">';
	svg += text.replace(/<b>/g, '<tspan fill="#318451">').replace(/<\/b>/g, '</tspan>');
	svg += '</text>';
	svg += '</svg>';
	var c = document.createElement('canvas');
	canvg(c, svg);
	document.location.href = c.toDataURL('image/png')/*.replace('image/png', 'image/octet-stream');*/
}


$(function(){

	$('#name').keyup(generateNames);

	var $element = $('#element');
	var $element_timeout = null;

	$(document.body).on('mouseover', 'b', function(e){
		clearTimeout($element_timeout);
		var $t = $(e.target);
		var el = ELS[$t.text()];
		$element.find('[data-key]').each(function(k,v){
			$(v).text(el[v.dataset.key]);
		});
		$element.fadeIn(300);
	});

	$(document.body).on('mouseout', 'b', function(){
		$element_timeout = setTimeout(function(){
			$element.fadeOut(100);
		}, 300);
	});

	$(document.body).on('click', '.save', function(){
		renderText($(this).parent().find('span').html());
	});

	$(window).on('mousemove', function(e){
		$element.css({
			top: e.clientY-100,
			left: e.clientX+40
		});
	});

	// generateNames('Breaking Bad');

});