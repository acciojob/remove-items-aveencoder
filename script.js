//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
       const sel = document.getElementById('colorSelect');
	   const btn = document.getElementById('btn');
	
        btn.addEventListener('click',()=>{
			 if(sel.selectedIndex != -1 ){
				 sel.remove(sel.selectedIndex);
			}
        }) 
	});