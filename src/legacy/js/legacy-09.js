(function(){
  const STORAGE_KEY = 'pregnancy_checkup_reminder_v1';
  const MS_DAY = 24 * 60 * 60 * 1000;
  const schedule = [
    {id:'early', week:6, range:'孕6-8周', name:'早孕确认 / B超确认宫内孕', desc:'确认孕囊位置、胎心胎芽、孕周和胚胎数量；如腹痛或出血需提前就诊。'},
    {id:'book', week:12, range:'孕11-13+6周', name:'建档 + NT检查', desc:'建立孕产期保健档案，完成基础化验；NT检查通常需提前预约。'},
    {id:'screen', week:16, range:'孕15-20周', name:'唐筛 / 无创DNA评估', desc:'根据年龄、病史和医生建议选择唐筛、无创DNA或产前诊断。'},
    {id:'anomaly', week:22, range:'孕20-24周', name:'系统超声 / 大排畸', desc:'重点查看胎儿结构发育、胎盘、羊水、双顶径、腹围、股骨长等。'},
    {id:'ogtt', week:25, range:'孕24-28周', name:'糖耐量检查 OGTT', desc:'筛查妊娠期糖尿病，通常需按医院要求空腹并预留较长检查时间。'},
    {id:'late1', week:30, range:'孕28-32周', name:'晚孕常规产检', desc:'复查血尿常规、血压、体重、宫高腹围、胎心；关注贫血、水肿和胎儿生长。'},
    {id:'growth', week:32, range:'孕32-34周', name:'胎儿生长评估 B超', desc:'评估胎儿大小、胎位、胎盘位置成熟度和羊水情况。'},
    {id:'gbs', week:36, range:'孕35-37周', name:'GBS筛查 + 分娩评估', desc:'部分医院进行 B族链球菌筛查，并开始评估分娩方式、胎位和入院准备。'},
    {id:'weekly37', week:37, range:'孕37周', name:'足月后每周产检', desc:'足月后通常每周复查胎心监护、血压、尿检、胎动和宫缩情况。'},
    {id:'weekly38', week:38, range:'孕38周', name:'足月产检', desc:'评估胎心、胎动、胎位、宫缩、羊水和胎盘情况，确认待产准备。'},
    {id:'weekly39', week:39, range:'孕39周', name:'临产前产检', desc:'复核分娩计划，关注见红、破水、规律宫缩、胎动减少等临产或异常信号。'},
    {id:'weekly40', week:40, range:'孕40周', name:'预产期产检', desc:'到预产期仍未分娩时，按医生建议加强监测并评估是否需要干预。'}
  ];

  function $(id){ return document.getElementById(id); }
  function todayMidnight(){ const d=new Date(); d.setHours(0,0,0,0); return d; }
  function parseDate(v){ if(!v) return null; const d=new Date(v+'T00:00:00'); return isNaN(d) ? null : d; }
  function formatDate(d){ return d ? `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` : ''; }
  function addDays(d,days){ const x=new Date(d); x.setDate(x.getDate()+days); return x; }
  function getState(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e){ return {}; }
  }
  function setState(next){ localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); }
  function inferLmpFromDue(due){ return due ? addDays(due, -280) : null; }
  function inferDueFromLmp(lmp){ return lmp ? addDays(lmp, 280) : null; }
  function getBaseDates(){
    const state = getState();
    let lmp = parseDate(state.lmpDate) || parseDate($('reminderLmpDate') && $('reminderLmpDate').value);
    let due = parseDate(state.dueDate) || parseDate($('reminderDueDate') && $('reminderDueDate').value);
    if(!lmp && due) lmp = inferLmpFromDue(due);
    if(!due && lmp) due = inferDueFromLmp(lmp);
    return {lmp,due,state};
  }
  function checkupDate(lmp, week){ return addDays(lmp, (week - 1) * 7); }
  function currentWeek(lmp){
    if(!lmp) return null;
    const diff = Math.floor((todayMidnight() - lmp) / MS_DAY);
    return Math.max(1, Math.min(42, Math.floor(diff/7) + 1));
  }
  function loadForm(){
    const state = getState();
    if($('reminderLmpDate')) $('reminderLmpDate').value = state.lmpDate || '';
    if($('reminderDueDate')) $('reminderDueDate').value = state.dueDate || '';
    [['remind7Toggle','remind7'],['remind1Toggle','remind1'],['browserNotifyToggle','browserNotify']].forEach(([id,key])=>{
      const el=$(id); if(!el) return;
      const val = state[key] !== undefined ? !!state[key] : (key !== 'browserNotify');
      el.classList.toggle('active', val);
    });
  }
  function renderReminder(){
    const {lmp,due,state} = getBaseDates();
    const timeline = $('reminderTimeline');
    if(!timeline) return;
    if(!lmp){
      $('reminderNextTitle').textContent = '请先设置末次月经或预产期';
      $('reminderCountdown').textContent = '保存后将自动计算产检日期';
      $('reminderCurrentWeek').textContent = '-'; $('reminderDoneCount').textContent='-'; $('reminderTodoCount').textContent='-';
      timeline.innerHTML = '<div class="empty-tip"><div class="empty-tip-icon">📅</div><div>输入日期后生成专属产检提醒表</div></div>';
      return;
    }
    const now = todayMidnight();
    const curWeek = currentWeek(lmp);
    const items = schedule.map(s => ({...s, date: checkupDate(lmp, s.week)}));
    const next = items.find(i => i.date >= now) || items[items.length - 1];
    const doneCount = items.filter(i => i.date < now).length;
    const todoCount = Math.max(0, items.length - doneCount);
    const daysLeft = Math.ceil((next.date - now) / MS_DAY);
    $('reminderCurrentWeek').textContent = `孕${curWeek}周`;
    $('reminderDoneCount').textContent = `${doneCount}项`;
    $('reminderTodoCount').textContent = `${todoCount}项`;
    $('reminderNextTitle').textContent = next ? `${next.name}` : '暂无待进行产检';
    $('reminderCountdown').textContent = next ? (daysLeft > 0 ? `${formatDate(next.date)}｜还有 ${daysLeft} 天` : daysLeft === 0 ? `${formatDate(next.date)}｜今天记得产检` : `${formatDate(next.date)}｜请按医生建议复查`) : '请以医生安排为准';
    timeline.innerHTML = items.map(i => {
      const isDone = i.date < now;
      const isNext = next && i.id === next.id;
      return `<div class="reminder-item ${isDone?'done':''} ${isNext?'next':''}" data-reminder-id="${i.id}">
        <div class="reminder-item-dot">${isDone?'✓':(isNext?'⏰':'•')}</div>
        <div class="reminder-item-body">
          <div class="reminder-item-top"><div class="reminder-item-name">${i.name}</div><div class="reminder-item-week">${i.range}</div></div>
          <div class="reminder-item-date">预计日期：${formatDate(i.date)}</div>
          <div class="reminder-item-desc">${i.desc}</div>
          <div class="reminder-actions">
            <button class="reminder-small-btn" type="button" data-copy-reminder="${i.id}">复制提醒</button>
            <button class="reminder-small-btn" type="button" data-done-reminder="${i.id}">标记已安排</button>
          </div>
        </div>
      </div>`;
    }).join('');

    if(state.browserNotify && Notification && Notification.permission === 'granted'){
      const should7 = state.remind7 !== false && daysLeft === 7;
      const should1 = state.remind1 !== false && daysLeft === 1;
      const notificationKey = `notified_${next.id}_${formatDate(now)}`;
      if((should7 || should1) && !state[notificationKey]){
        new Notification('产检提醒', { body: `${next.name}：预计 ${formatDate(next.date)}，请提前确认预约和注意事项。` });
        state[notificationKey] = true; setState(state);
      }
    }
  }
  function openPage(){
    loadForm(); renderReminder();
    const page = $('checkupReminderPage'); if(page) page.classList.add('active');
  }
  function closePage(){ const page = $('checkupReminderPage'); if(page) page.classList.remove('active'); }
  function saveSettings(){
    let lmpVal = $('reminderLmpDate') ? $('reminderLmpDate').value : '';
    let dueVal = $('reminderDueDate') ? $('reminderDueDate').value : '';
    let lmp = parseDate(lmpVal), due = parseDate(dueVal);
    if(!lmp && due){ lmp = inferLmpFromDue(due); lmpVal = formatDate(lmp); if($('reminderLmpDate')) $('reminderLmpDate').value = lmpVal; }
    if(!due && lmp){ due = inferDueFromLmp(lmp); dueVal = formatDate(due); if($('reminderDueDate')) $('reminderDueDate').value = dueVal; }
    const state = getState();
    state.lmpDate = lmpVal; state.dueDate = dueVal;
    state.remind7 = $('remind7Toggle') ? $('remind7Toggle').classList.contains('active') : true;
    state.remind1 = $('remind1Toggle') ? $('remind1Toggle').classList.contains('active') : true;
    state.browserNotify = $('browserNotifyToggle') ? $('browserNotifyToggle').classList.contains('active') : false;
    setState(state); renderReminder();
    if(typeof showToast === 'function') showToast('产检提醒已保存');
  }

  document.addEventListener('DOMContentLoaded', function(){
    const remindTool = document.querySelector('[data-tool="remind"]');
    if(remindTool) remindTool.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); openPage(); }, true);
    const closeBtn = $('closeCheckupReminderBtn'); if(closeBtn) closeBtn.addEventListener('click', closePage);
    const saveBtn = $('reminderSaveBtn'); if(saveBtn) saveBtn.addEventListener('click', saveSettings);
    ['remind7Toggle','remind1Toggle'].forEach(id => { const el=$(id); if(el) el.addEventListener('click', function(){ el.classList.toggle('active'); saveSettings(); }); });
    const notify = $('browserNotifyToggle');
    if(notify) notify.addEventListener('click', function(){
      notify.classList.toggle('active');
      const enabled = notify.classList.contains('active');
      if(enabled && 'Notification' in window && Notification.permission === 'default'){
        Notification.requestPermission().then(function(){ saveSettings(); });
      } else { saveSettings(); }
    });
    const timeline = $('reminderTimeline');
    if(timeline) timeline.addEventListener('click', function(e){
      const copyBtn = e.target.closest('[data-copy-reminder]');
      const doneBtn = e.target.closest('[data-done-reminder]');
      const {lmp} = getBaseDates(); if(!lmp) return;
      const id = (copyBtn && copyBtn.dataset.copyReminder) || (doneBtn && doneBtn.dataset.doneReminder);
      const item = schedule.find(s=>s.id===id); if(!item) return;
      const text = `${item.name}\n时间：${formatDate(checkupDate(lmp,item.week))}（${item.range}）\n注意：${item.desc}`;
      if(copyBtn && navigator.clipboard){ navigator.clipboard.writeText(text); if(typeof showToast==='function') showToast('提醒内容已复制'); }
      if(doneBtn){ const state=getState(); state['arranged_'+id]=true; setState(state); if(typeof showToast==='function') showToast('已标记为已安排'); }
    });
    window.openCheckupReminderPage = openPage;
  });
})();
