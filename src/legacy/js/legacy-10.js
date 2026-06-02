(function(){
    const $ = id => document.getElementById(id);
    const KEY='pregCalendarStateV1';
    const today = new Date(); today.setHours(0,0,0,0);
    let viewDate = new Date(today); let selectedDate = new Date(today);
    const checkups=[
        {w:6,n:'早孕确认/建档准备',d:'确认宫内妊娠、孕囊/胎心情况；开始补叶酸，准备建档资料。'},
        {w:11,n:'NT检查',d:'通常在11-13+6周进行，关注胎儿颈项透明层及早孕筛查。'},
        {w:16,n:'唐筛/无创DNA咨询',d:'结合年龄、既往史和医生建议选择筛查方式。'},
        {w:20,n:'系统超声预约',d:'大排畸多在20-24周；提前确认预约和检查要求。'},
        {w:24,n:'糖耐量检查',d:'常在24-28周进行，通常需按医嘱空腹。'},
        {w:28,n:'孕晚期常规产检',d:'关注血压、体重、胎心、贫血和水肿情况。'},
        {w:32,n:'胎位/生长评估',d:'评估胎儿生长、羊水、胎盘和胎位。'},
        {w:36,n:'临产准备检查',d:'36周后产检更密集，准备待产包和分娩资料。'},
        {w:38,n:'足月产检',d:'关注胎动、宫缩、胎心监护及分娩征兆。'},
        {w:40,n:'预产期评估',d:'超过预产期需遵医嘱加强监测。'}
    ];
    function pad(n){return String(n).padStart(2,'0')} function ymd(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())} function fmt(d){return d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日'}
    function parse(v){ if(!v) return null; const d=new Date(v+'T00:00:00'); return isNaN(d)?null:d; }
    function addDays(d,n){const x=new Date(d);x.setDate(x.getDate()+n);x.setHours(0,0,0,0);return x} function diff(a,b){return Math.round((a-b)/86400000)}
    function state(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}} function save(s){localStorage.setItem(KEY,JSON.stringify(s||{}))}
    function getBase(){let s=state(); let lmp=parse(s.lmp)||parse(localStorage.getItem('reminderLmpDate')); let due=parse(s.due)||parse(localStorage.getItem('reminderDueDate')); if(!lmp && due) lmp=addDays(due,-280); if(!due && lmp) due=addDays(lmp,280); return {s,lmp,due};}
    function weekOf(d,lmp){const days=diff(d,lmp); if(days<0) return {week:0,day:0,total:days}; return {week:Math.floor(days/7)+1, day:days%7, total:days};}
    function stage(w){ if(w<=0) return '备孕/待确认'; if(w<=12) return '孕早期'; if(w<=27) return '孕中期'; if(w<=40) return '孕晚期'; return '预产期后'; }
    function icon(w){ if(w<=0) return '🌱'; if(w<=12) return '🫘'; if(w<=20) return '🍋'; if(w<=28) return '🥭'; if(w<=36) return '🍉'; return '👶'; }
    function advice(w){
        if(w<=0) return {baby:'尚未进入孕周范围。',mom:'可以先设置末次月经或预产期，用于计算后续日历。',diet:'备孕/早孕阶段注意叶酸、规律作息，避免烟酒。'};
        if(w<=12) return {baby:'胚胎器官快速分化，早孕反应较常见。',mom:'注意休息；若剧吐、腹痛或出血应及时就医。',diet:'少量多餐，选择清淡易消化食物，继续补充叶酸。'};
        if(w<=20) return {baby:'胎儿进入稳定生长期，部分孕妈开始感到胎动。',mom:'适度活动，关注体重增长和贫血筛查。',diet:'保证优质蛋白、奶类、深色蔬菜和含铁食物。'};
        if(w<=28) return {baby:'胎儿体重增长加快，B超和糖耐筛查较集中。',mom:'留意血糖、体重、下肢水肿和胎动规律。',diet:'控制精制糖和甜饮，主食粗细搭配，增加鱼禽蛋瘦肉。'};
        if(w<=36) return {baby:'胎儿继续增重，胎位和羊水监测更重要。',mom:'建议规律数胎动，准备待产包，避免久站久坐。',diet:'继续补钙补铁，晚餐不过饱，减少高盐食物。'};
        return {baby:'胎儿已接近或达到足月，需关注临产信号。',mom:'如规律宫缩、破水、见红或胎动异常，及时联系医院。',diet:'饮食清淡、少量多餐，准备分娩所需能量但避免暴食。'};
    }
    function eventOnDate(d,lmp){ if(!lmp) return []; const out=[]; checkups.forEach(c=>{const cd=addDays(lmp,(c.w-1)*7); if(ymd(cd)===ymd(d)) out.push(c);}); return out; }
    function recordsFor(dateStr){return (state().records||{})[dateStr]||[]}
    function render(){
        const {s,lmp,due}=getBase(); if($('pregCalLmp')) $('pregCalLmp').value=lmp?ymd(lmp):''; if($('pregCalDue')) $('pregCalDue').value=due?ymd(due):'';
        const info=lmp?weekOf(selectedDate,lmp):{week:0,day:0,total:0};
        $('pregCalBabyIcon').textContent=icon(info.week); $('pregCalWeekTitle').textContent=lmp?`孕${info.week}周 + ${info.day}天 · ${stage(info.week)}`:'设置末次月经后生成日历';
        $('pregCalDayTitle').textContent=lmp?`${fmt(selectedDate)}，已孕 ${Math.max(0,info.total)} 天。`:'保存日期后，可查看每天孕周、产检节点和照护建议。';
        $('pregCalDueLeft').textContent=due? (diff(due,today)>=0? diff(due,today)+'天':'已过'+Math.abs(diff(due,today))+'天'):'-';
        $('pregCalRecordDays').textContent=Object.keys(s.records||{}).length+'天';
        renderGrid(lmp); renderDetail(lmp,due);
    }
    function renderGrid(lmp){
        const grid=$('pregCalGrid'); if(!grid) return; grid.innerHTML=''; const y=viewDate.getFullYear(), m=viewDate.getMonth(); $('pregCalMonthTitle').textContent=y+'年'+(m+1)+'月';
        const first=new Date(y,m,1), start=new Date(first); start.setDate(1-first.getDay()); let monthChecks=0;
        for(let i=0;i<42;i++){ const d=addDays(start,i); const ds=ymd(d); const info=lmp?weekOf(d,lmp):null; const ev=eventOnDate(d,lmp); if(d.getMonth()===m) monthChecks+=ev.length; const rec=recordsFor(ds);
            const cell=document.createElement('button'); cell.type='button'; cell.className='preg-cal-day'+(d.getMonth()!==m?' muted':'')+(ds===ymd(today)?' today':'')+(ds===ymd(selectedDate)?' selected':''); cell.dataset.date=ds;
            const dots=[]; if(ev.length) dots.push('<span class="preg-cal-dot check"></span>'); if(rec.length) dots.push('<span class="preg-cal-dot record"></span>'); if(info&&info.week>0) dots.push('<span class="preg-cal-dot diet"></span>');
            cell.innerHTML=`<div class="preg-cal-day-num">${d.getDate()}</div><div class="preg-cal-day-week">${info&&info.week>0?'孕'+info.week:' '}</div><div class="preg-cal-dot-row">${dots.join('')}</div>`;
            cell.onclick=()=>{selectedDate=parse(ds); viewDate=new Date(selectedDate); render();}; grid.appendChild(cell);
        }
        $('pregCalMonthChecks').textContent=monthChecks+'项';
    }
    function renderDetail(lmp,due){
        const ds=ymd(selectedDate); const body=$('pregCalDetailBody'); if(!body) return; $('pregCalSelectedDate').textContent=fmt(selectedDate); $('pregCalSelectedBadge').textContent=ds===ymd(today)?'今天':(selectedDate>today?'未来':'已过');
        const info=lmp?weekOf(selectedDate,lmp):{week:0,day:0,total:0}; const a=advice(info.week); const ev=eventOnDate(selectedDate,lmp); const rec=recordsFor(ds);
        let html='';
        html+=`<div class="preg-cal-section"><div class="preg-cal-section-title">🤰 当天孕周</div><div class="preg-cal-section-text">${lmp?`孕${info.week}周 + ${info.day}天（${stage(info.week)}）。${due?`预产期：${fmt(due)}。`:''}`:'请先设置末次月经或预产期。'}</div></div>`;
        if(ev.length){ html+=`<div class="preg-cal-section"><div class="preg-cal-section-title">🏥 产检提醒</div><div class="preg-cal-section-text">${ev.map(e=>`<strong>${e.n}</strong>：${e.d}`).join('<br>')}</div></div>`; }
        html+=`<div class="preg-cal-section"><div class="preg-cal-section-title">👶 宝宝/妈妈提示</div><div class="preg-cal-section-text">${a.baby}<br>${a.mom}</div></div>`;
        html+=`<div class="preg-cal-section"><div class="preg-cal-section-title">🥗 饮食建议</div><div class="preg-cal-section-text">${a.diet}</div></div>`;
        body.innerHTML=html; $('pregCalRecords').innerHTML=rec.length?rec.map(x=>`<span class="preg-cal-chip">已记录：${x}</span>`).join(''):'<span class="preg-cal-chip">暂无当天记录</span>';
        document.querySelectorAll('[data-preg-cal-record]').forEach(btn=>{btn.classList.toggle('done', rec.includes(btn.dataset.pregCalRecord));});
    }
    function open(){ const page=$('pregCalendarPage'); if(page){ page.classList.add('active'); document.body.style.overflow='hidden'; render(); } }
    function close(){ const page=$('pregCalendarPage'); if(page){ page.classList.remove('active'); document.body.style.overflow=''; } }
    function saveBase(){ const s=state(); const l=$('pregCalLmp').value, d=$('pregCalDue').value; if(l) s.lmp=l; if(d) s.due=d; if(!l && d) s.lmp=ymd(addDays(parse(d),-280)); if(l && !d) s.due=ymd(addDays(parse(l),280)); save(s); if(typeof showToast==='function') showToast('孕期日历日期已保存'); render(); }
    document.addEventListener('DOMContentLoaded',function(){
        $('closePregCalendarBtn')&&$('closePregCalendarBtn').addEventListener('click',close); $('pregCalSaveBtn')&&$('pregCalSaveBtn').addEventListener('click',saveBase); $('pregCalTodayBtn')&&$('pregCalTodayBtn').addEventListener('click',()=>{selectedDate=new Date(today); viewDate=new Date(today); render();});
        $('pregCalPrevMonth')&&$('pregCalPrevMonth').addEventListener('click',()=>{viewDate.setMonth(viewDate.getMonth()-1); render();}); $('pregCalNextMonth')&&$('pregCalNextMonth').addEventListener('click',()=>{viewDate.setMonth(viewDate.getMonth()+1); render();});
        document.querySelectorAll('[data-preg-cal-record]').forEach(btn=>btn.addEventListener('click',function(){ const ds=ymd(selectedDate); const s=state(); s.records=s.records||{}; const arr=s.records[ds]||[]; const name=this.dataset.pregCalRecord; const i=arr.indexOf(name); if(i>=0) arr.splice(i,1); else arr.push(name); s.records[ds]=arr; if(!arr.length) delete s.records[ds]; save(s); render(); }));
        const calTool=document.querySelector('[data-tool="calendar"]'); if(calTool) calTool.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();open();},true);
        document.addEventListener('click',function(e){ const entry=e.target.closest&&e.target.closest('[data-tool="calendar"],.tool-item'); if(!entry) return; const label=entry.querySelector&&entry.querySelector('.tool-label'); if(entry.dataset.tool==='calendar'||(label&&label.textContent.trim()==='孕期日历')){e.preventDefault();e.stopPropagation();open();}},true);
        window.openPregCalendarPage=open; render();
    });
})();
