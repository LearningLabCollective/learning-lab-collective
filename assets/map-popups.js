document.addEventListener('DOMContentLoaded',function(){
  // Add confirmed project names and contacts here when available.
  const details={
    'Wisconsin, USA':{project:null,poc:null},
    'Illinois, USA':{project:null,poc:null},
    'Kansas, USA':{project:null,poc:null},
    'Florida, USA':{project:null,poc:null},
    'Rio de Janeiro, Brazil':{project:null,poc:null}
  };
  document.querySelectorAll('.ll-interactive-map').forEach(function(map){
    const card=map.querySelector('.ll-map-detail');
    const buttons=[...map.querySelectorAll('.ll-map-hotspot')];
    function close(){card.hidden=true;buttons.forEach(b=>b.setAttribute('aria-expanded','false'));}
    buttons.forEach(function(button){button.addEventListener('click',function(){
      const location=button.dataset.location;
      const info=details[location]||{};
      map.querySelector('.ll-map-detail-title').textContent=location;
      map.querySelector('.ll-map-project').textContent=info.project||'Details to be added';
      map.querySelector('.ll-map-poc').textContent=info.poc||'Details to be added';
      card.hidden=false;
      card.querySelector('.ll-map-detail-close').focus({preventScroll:true});
      buttons.forEach(b=>b.setAttribute('aria-expanded',String(b===button)));
    });});
    card.querySelector('.ll-map-detail-close').addEventListener('click',close);
    map.addEventListener('keydown',e=>{if(e.key==='Escape'&&!card.hidden){close();}});
  });
});
