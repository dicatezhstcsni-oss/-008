(function(){
  const items=[
    ['🍽️','能不能吃','工具','查询孕期食材能不能吃、风险等级和建议','能不能吃 食物 食材 饮食 吃 水果 海鲜 咖啡 奶茶 螃蟹 虾 牛奶 山楂 榴莲','food'],
    ['🥗','饮食方案','营养','按孕周查看饮食建议、三餐示例和营养重点','饮食方案 营养 孕周 菜谱 三餐 叶酸 补铁 补钙 控糖 孕吐','diet'],
    ['📅','孕期日历','日历','查看孕周孕天、预产期倒计时和每日建议','孕期日历 日历 日期 孕周 孕天 预产期 倒计时 今日建议','calendar'],
    ['⏰','产检提醒','提醒','设置产检提醒、查看下一次产检和倒计时','产检提醒 提醒 产检 时间表 倒计时 预产期 检查','checkupReminder'],
    ['🧾','产检表 / B超单','产检','估算胎儿体重、B超指标解读、添加并识别B超单','产检表 B超 b超 超声 双顶径 股骨长 腹围 羊水 胎盘 胎儿体重 估重','checkupTable'],
    ['👣','数胎动记录器','记录','记录胎动次数、计时和历史记录','胎动 数胎动 胎动记录 胎动计数 宝宝动 计时','kick'],
    ['⚖️','体重记录','记录','记录孕期体重、BMI和增长趋势','体重 体重记录 BMI 增重 曲线 趋势','weight'],
    ['🎵','胎教音乐','音乐','播放适合孕期的舒缓胎教音乐','胎教音乐 音乐 胎教 播放 白噪音 舒缓 古典','music'],
    ['📋','待产包','清单','查看待产包清单、勾选准备进度','待产包 清单 入院 分娩 住院 宝宝用品 妈妈用品','bag'],
    ['👨‍👩‍👧','准爸爸任务','陪伴','查看准爸爸当周任务和陪伴建议','爸爸 准爸爸 任务 陪伴 家属 老公','dad'],
    ['🤰','宝宝/妈妈变化','孕周','查看当前孕周胎儿发育和妈妈身体变化','宝宝 妈妈 胎儿 发育 孕周 变化 身体','home'],
    ['🏥','产检时间轴','产检','查看孕期关键产检节点','产检 时间轴 NT 唐筛 糖耐 四维 胎心监护','checkupTab']
  ];
  const $=id=>document.getElementById(id);
  const norm=s=>(s||'').toString().trim().toLowerCase();
  function score(it,k){ if(!k)return 1; let txt=norm(it.slice(1,5).join(' ')), title=norm(it[1]); let s=0; if(title===k)s+=100; if(title.includes(k))s+=50; if(txt.includes(k))s+=30; for(const ch of k){ if(ch.trim()&&txt.includes(ch))s++; } return s; }
  function results(k){ k=norm(k); return items.map(it=>({it,s:score(it,k)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,12).map(x=>x.it); }
  function openPanel(){ $('globalSearchPanel')?.classList.add('active'); $('globalSearchMask')?.classList.add('active'); $('topGlobalSearchInput')?.closest('.search-box')?.classList.add('searching'); }
  function closePanel(){ $('globalSearchPanel')?.classList.remove('active'); $('globalSearchMask')?.classList.remove('active'); $('topGlobalSearchInput')?.closest('.search-box')?.classList.remove('searching'); }
  function render(k){
    const panel=$('globalSearchPanel'); if(!panel)return; const list=results(k);
    if(!list.length){ panel.innerHTML='<div class="global-search-empty">没有找到相关功能<br>试试搜索“胎动”“B超”“饮食”“能不能吃”</div>'; return; }
    panel.innerHTML='<div class="global-search-section-title">'+(k.trim()?'搜索结果':'常用功能')+'</div>'+list.map(it=>`
      <div class="global-search-item" data-action="${it[5]}" data-title="${it[1]}">
        <div class="global-search-icon">${it[0]}</div><div class="global-search-main"><div class="global-search-title">${it[1]}</div><div class="global-search-desc">${it[3]}</div></div><div class="global-search-tag">${it[2]}</div>
      </div>`).join('');
    panel.querySelectorAll('.global-search-item').forEach(el=>el.onclick=()=>{closePanel(); runAction(el.dataset.action, el.dataset.title);});
  }
  function clickSel(sel){ const el=document.querySelector(sel); if(el){el.click();return true;} return false; }
  function tab(name){ const b=document.querySelector(`.tab-btn[data-tab="${name}"]`); if(b){b.click();return true;} return false; }
  function runAction(action,title){
    const sel={food:'[data-tool="food"]',bag:'[data-tool="bag"]',music:'[data-tool="music"],[data-tool="prenatal-music"]',kick:'[data-tool="kick"],[data-tool="kick-counter"]',checkupTable:'[data-tool="checkup-table"],[data-tool="bscan"],[data-tool="checkup"]',checkupReminder:'[data-tool="checkup-reminder"],[data-tool="reminder"]',calendar:'[data-tool="pregnancy-calendar"],[data-tool="calendar"]',diet:'[data-tool="diet"],[data-tool="diet-plan"]',weight:'[data-tool="weight"]'}[action];
    if(action==='home'){ window.scrollTo({top:0,behavior:'smooth'}); return; }
    if(action==='dad'){ tab('care')||tab('dad'); return; }
    if(action==='checkupTab'){ tab('checkup')||document.querySelector('.timeline')?.scrollIntoView({behavior:'smooth'}); return; }
    if(sel && clickSel(sel)) return;
    const fns={food:['openFoodV2','openFoodPage'],diet:['openDietPage'],calendar:['openPregnancyCalendar','openCalendarPage'],checkupReminder:['openCheckupReminderPage'],checkupTable:['openCheckupTablePage','openBscanPage'],kick:['openKickCounterPage'],music:['openPrenatalMusicPage'],weight:['openWeightPage'],bag:['openBagPage']}[action]||[];
    for(const f of fns){ if(typeof window[f]==='function'){ window[f](); return; } }
    const target=Array.from(document.querySelectorAll('.tool-item,.nav-item,button,.tab-btn')).find(el=>(el.textContent||'').includes(title.split(' ')[0]));
    if(target){ target.click(); return; }
    alert('已找到“'+title+'”，请在工具区点击进入。');
  }
  function bind(){
    const input=$('topGlobalSearchInput')||document.querySelector('.search-box input'); const clear=$('globalSearchClear');
    if(!input)return; input.placeholder='搜索功能/食材/孕周知识'; input.autocomplete='off';
    input.onfocus=()=>{render(input.value||'');openPanel();};
    input.oninput=()=>{render(input.value||'');openPanel(); if(clear)clear.classList.toggle('visible',!!input.value.trim());};
    input.onkeydown=e=>{ if(e.key==='Enter'){ const first=$('globalSearchPanel')?.querySelector('.global-search-item'); if(first){e.preventDefault();first.click();} } if(e.key==='Escape')closePanel(); };
    $('globalSearchMask')?.addEventListener('click',closePanel);
    if(clear)clear.onclick=e=>{e.preventDefault();e.stopPropagation();input.value='';clear.classList.remove('visible');render('');input.focus();};
    const box=document.querySelector('.search-box'); if(box)box.onclick=e=>{ if(e.target.tagName!=='INPUT' && e.target.id!=='globalSearchClear')input.focus(); };
  }
  document.addEventListener('DOMContentLoaded',bind); setTimeout(bind,500);
})();
