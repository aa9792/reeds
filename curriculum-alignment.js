/* Align monthly plans and weekly schedules with the SEL x ESL curriculum map. */
(function(){
  const VERSION=4;
  const deep=v=>JSON.parse(JSON.stringify(v));
  function replaceFirst(schedule,from,to){
    if(!schedule) return;
    for(const day of Object.values(schedule))for(const key of Object.keys(day))if(day[key]===from){day[key]=to;return;}
  }
  function alignGrade(root,gradeNo){
    const g=String(gradeNo), grade=root.grades[g], map=window.REEDS_SEL_ESL_MAP?.grades[g];
    if(!grade||!map) return;
    grade.axis={name:map.axis,desc:map.promise};
    ['1','2'].forEach((semNo,semIndex)=>{
      const sem=grade.semesters[semNo], rows=map.months.slice(semIndex*5,semIndex*5+5);
      sem.crossThemes=rows.map(x=>x.theme);
      sem.curriculum['Language Art']=rows.map(x=>x.esl.goal);
      sem.curriculum['SEL Advisory']=rows.map(x=>`${x.sel} × ${x.reeds}`);
      sem.curriculum['ESL Integrated Task']=rows.map(x=>`${x.esl.function}｜${x.esl.output}`);
      sem.curriculum['代表性成果']=rows.map(x=>`${x.signature?'★ Signature Project｜':''}${x.product}`);
      const schedule=sem.schedule?.[semNo];
      if(schedule?.['五']){
        schedule['五']['1']='Signature Project';
        schedule['五']['2']='Signature Project';
        schedule['五']['3']='Signature Project';
        schedule['五']['4']='SEL / Portfolio Advisory';
      }
      if(g==='8') replaceFirst(schedule,'Adventure Education','STEAM Education');
      if(g==='9') replaceFirst(schedule,'Earth Science System','Language Art');
    });
    if(grade.defaultSchedule?.['五']){
      grade.defaultSchedule['五']['1']='Signature Project';
      grade.defaultSchedule['五']['2']='Signature Project';
      grade.defaultSchedule['五']['3']='Signature Project';
      grade.defaultSchedule['五']['4']='SEL / Portfolio Advisory';
    }
    if(g==='8') replaceFirst(grade.defaultSchedule,'Adventure Education','STEAM Education');
    if(g==='9') replaceFirst(grade.defaultSchedule,'Earth Science System','Language Art');
  }
  function remapClass(schedule,classId,leadCode){
    const rows=deep(schedule);
    rows.forEach(row=>row.forEach((cell,i)=>{
      row[i]=cell
        .replace(/數學\(CT5\)|數學\(CT7\)/g,'數學(PT-MA)')
        .replace(/藝術\(ET5\)/g,'藝術(PT-AR)')
        .replace(/SAEAM\(ET5\)/g,'STEAM(CT-IT)')
        .replace(/體育\(ET7\)/g,'體育(PT-PE)')
        .replace(/IT\(ET7\)/g,'IT(CT-IT)')
        .replace(/品德\(CT1\)/g,'SEL(CT-D1)')
        .replace(/閱讀\(CT2\)/g,'閱讀(CT-D2)')
        .replace(/社會\(CT3\)/g,'社會(PT-HU)')
        .replace(/語文\(CT4\)|語文\(CT6\)/g,`語文(${leadCode})`)
        .replace(/探索\(ET6\)/g,'探索(PT-PE)');
    }));
    // 外師導師各承擔16節：原15節加回一節探索；兼任戶外教師保留另一節。
    const et={'1A':'ET1','1B':'ET2','2A':'ET3','3A':'ET4'}[classId];
    let changed=false;
    rows.forEach(row=>row.forEach((cell,i)=>{if(!changed&&cell==='探索(PT-PE)'){row[i]=`探索(${et})`;changed=true;}}));
    // 兩位語文組長各9節，1B與3A各一節由人文兼任補足。
    if(classId==='1B'||classId==='3A'){
      outer:for(const row of rows)for(let i=0;i<row.length;i++)if(row[i]===`語文(${leadCode})`){row[i]='語文(PT-HU)';break outer;}
    }
    return rows;
  }
  function alignFirstYearClasses(root){
    const cs=root.classSchedules;
    if(!cs?.classes) return;
    const old=cs.classes;
    cs.classes={
      '1A':remapClass(old['1A'],'1A','CT-G1'),
      '1B':remapClass(old['1B'],'1B','CT-G1'),
      '2A':remapClass(old['2A'],'2A','CT-G2'),
      '3A':remapClass(old['3A'],'3A','CT-G2')
    };
    cs.teacherLabels={
      '1A':'雙導師：CT-G1 教學組長＋ET-1 外師導師一',
      '1B':'雙導師：CT-D1 主任一＋ET-2 外師導師二',
      '2A':'雙導師：CT-G2 課程組長＋ET-3 外師導師三',
      '3A':'雙導師：CT-D2 主任二＋ET-4 外師導師四'
    };
    cs.newClasses=[];
  }
  window.applyGradeCurriculumAlignment=alignGrade;
  window.applyCurriculumAlignment=function(root,force=false){
    if(!root||(!force&&root.curriculumAlignmentVersion===VERSION)) return root;
    for(let g=1;g<=9;g++) alignGrade(root,g);
    alignFirstYearClasses(root);
    root.curriculumAlignmentVersion=VERSION;
    return root;
  };
})();
