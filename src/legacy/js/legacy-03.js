// ==================== 食物数据库 ====================
        const foodData = [
            // 五谷杂粮
            { category: "五谷杂粮", name: "燕麦", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "膳食纤维极高，缓解孕期/产后便秘。", icon: "🌾" },
            { category: "五谷杂粮", name: "小米", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "膳食纤维极高，缓解孕期/产后便秘。", icon: "🌾" },
            { category: "五谷杂粮", name: "全麦", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "膳食纤维极高，缓解孕期/产后便秘。", icon: "🌾" },
            { category: "五谷杂粮", name: "薏米", pregnancy: "不能吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "慎吃", reason: "易引起子宫平滑肌兴奋，备孕及早期大忌。", icon: "🌾" },
            { category: "五谷杂粮", name: "藜麦", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "优质复合碳水，长胎不长肉。", icon: "🌾" },
            { category: "五谷杂粮", name: "紫米", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "优质复合碳水，长胎不长肉。", icon: "🌾" },
            // 蔬菜菌类
            { category: "蔬菜菌类", name: "菠菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含叶酸。菠菜需焯水去除草酸。", icon: "🥬" },
            { category: "蔬菜菌类", name: "生菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含叶酸。菠菜需焯水去除草酸。", icon: "🥬" },
            { category: "蔬菜菌类", name: "西兰花", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含叶酸。菠菜需焯水去除草酸。", icon: "🥬" },
            { category: "蔬菜菌类", name: "韭菜", pregnancy: "少吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "具有强烈的回奶作用，哺乳期禁食。", icon: "🥬" },
            { category: "蔬菜菌类", name: "麦芽", pregnancy: "少吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "具有强烈的回奶作用，哺乳期禁食。", icon: "🥬" },
            { category: "蔬菜菌类", name: "木耳", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "增强免疫力，补血补铁。", icon: "🍄" },
            { category: "蔬菜菌类", name: "香菇", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "增强免疫力，补血补铁。", icon: "🍄" },
            // 肉蛋类
            { category: "肉蛋类", name: "牛肉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "优质蛋白质，血红素铁，纠正贫血。", icon: "🥩" },
            { category: "肉蛋类", name: "瘦猪肉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "优质蛋白质，血红素铁，纠正贫血。", icon: "🥩" },
            { category: "肉蛋类", name: "鸡肉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "优质蛋白质，血红素铁，纠正贫血。", icon: "🍗" },
            { category: "肉蛋类", name: "咸鱼", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "少吃", infant: "不能吃", reason: "高盐、亚硝酸盐，易致水肿及代谢负担。", icon: "🐟" },
            { category: "肉蛋类", name: "腊肉", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "少吃", infant: "不能吃", reason: "高盐、亚硝酸盐，易致水肿及代谢负担。", icon: "🥓" },
            { category: "肉蛋类", name: "午餐肉", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "少吃", infant: "不能吃", reason: "高盐、亚硝酸盐，易致水肿及代谢负担。", icon: "🥫" },
            { category: "肉蛋类", name: "生蛋黄", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "极易携带沙门氏菌，必须全熟。", icon: "🥚" },
            { category: "肉蛋类", name: "流心蛋", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "极易携带沙门氏菌，必须全熟。", icon: "🍳" },
            // 水产海鲜
            { category: "水产海鲜", name: "三文鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含DHA，利于宝宝大脑发育，需全熟。", icon: "🐟" },
            { category: "水产海鲜", name: "鳕鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含DHA，利于宝宝大脑发育，需全熟。", icon: "🐟" },
            { category: "水产海鲜", name: "螃蟹", pregnancy: "不能吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "药理属性极寒，早期易致流产。", icon: "🦀" },
            { category: "水产海鲜", name: "甲鱼", pregnancy: "不能吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "药理属性极寒，早期易致流产。", icon: "🐢" },
            { category: "水产海鲜", name: "鲨鱼", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "汞含量超标，损害宝宝神经系统。", icon: "🦈" },
            // 水果类
            { category: "水果类", name: "苹果", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "属性温和，补铁补维C。", icon: "🍎" },
            { category: "水果类", name: "葡萄", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "属性温和，补铁补维C。", icon: "🍇" },
            { category: "水果类", name: "车厘子", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "属性温和，补铁补维C。", icon: "🍒" },
            { category: "水果类", name: "山楂", pregnancy: "不能吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "强烈收缩子宫作用，孕期慎防流产。", icon: "🍎" },
            { category: "水果类", name: "榴莲", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "高糖、大热，易致血糖升高及便秘。", icon: "🍈" },
            { category: "水果类", name: "荔枝", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "高糖、大热，易致血糖升高及便秘。", icon: "🍇" },
            { category: "水果类", name: "桂圆", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "高糖、大热，易致血糖升高及便秘。", icon: "🍇" },
            // 坚果类
            { category: "坚果类", name: "核桃", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "益脑发育。婴幼儿需研磨成粉防窒息。", icon: "🥜" },
            { category: "坚果类", name: "腰果", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "益脑发育。婴幼儿需研磨成粉防窒息。", icon: "🥜" },
            { category: "坚果类", name: "花生", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "益脑发育。婴幼儿需研磨成粉防窒息。", icon: "🥜" },
            // 加工食品
            { category: "加工食品", name: "泡面", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "少吃", infant: "不能吃", reason: "高油脂、反式脂肪酸，无营养价值。", icon: "🍜" },
            { category: "加工食品", name: "薯片", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "少吃", infant: "不能吃", reason: "高油脂、反式脂肪酸，无营养价值。", icon: "🍟" },
            { category: "加工食品", name: "炸鸡", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "少吃", infant: "不能吃", reason: "高油脂、反式脂肪酸，无营养价值。", icon: "🍗" },
            // 零食饮品
            { category: "零食饮品", name: "咖啡", pregnancy: "少吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "咖啡因易致胎儿心率过快，影响睡眠。", icon: "☕" },
            { category: "零食饮品", name: "浓茶", pregnancy: "少吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "咖啡因易致胎儿心率过快，影响睡眠。", icon: "🍵" },
            { category: "零食饮品", name: "酒", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "绝对禁忌。导致胎儿畸形及智力损伤。", icon: "🍷" },
            { category: "零食饮品", name: "酒精饮料", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "绝对禁忌。导致胎儿畸形及智力损伤。", icon: "🍺" },
            // 调味补品
            { category: "调味补品", name: "燕窝", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "补充唾液酸和胶原蛋白，增强体质。", icon: "🍯" },
            { category: "调味补品", name: "花胶", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "补充唾液酸和胶原蛋白，增强体质。", icon: "🐟" },
            { category: "调味补品", name: "海参", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "补充唾液酸和胶原蛋白，增强体质。", icon: "🦐" },

            // ===== 本次真正补充的完整食材库（直接并入 foodData，搜索/分类/详情均可见） =====
            { category: "五谷杂粮", name: "大米", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "主食来源，建议搭配杂粮控制餐后血糖。", icon: "🍚" },
            { category: "五谷杂粮", name: "糙米", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "膳食纤维和B族维生素较多，有助控制血糖和便秘。", icon: "🌾" },
            { category: "五谷杂粮", name: "玉米", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "粗粮主食，含膳食纤维，注意别额外加太多糖。", icon: "🌽" },
            { category: "五谷杂粮", name: "红薯", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含膳食纤维，可替代部分主食，妊娠糖尿病需控制量。", icon: "🍠" },
            { category: "五谷杂粮", name: "山药", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "可作为主食替换，口感温和，适合孕吐期少量食用。", icon: "🥔" },
            { category: "五谷杂粮", name: "黑米", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "杂粮搭配可增加矿物质和膳食纤维。", icon: "🌾" },
            { category: "五谷杂粮", name: "红豆", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "豆类粗粮，含植物蛋白和膳食纤维，需煮熟。", icon: "🫘" },
            { category: "五谷杂粮", name: "绿豆", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "可少量食用，脾胃虚寒或腹泻时不建议多吃。", icon: "🫘" },
            { category: "蔬菜菌类", name: "油麦菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "绿叶菜可补充叶酸、钾和膳食纤维，注意洗净炒熟。", icon: "🥬" },
            { category: "蔬菜菌类", name: "上海青", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "绿叶菜适合日常搭配，烹调少油少盐。", icon: "🥬" },
            { category: "蔬菜菌类", name: "白菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "水分和膳食纤维较多，适合清淡烹调。", icon: "🥬" },
            { category: "蔬菜菌类", name: "娃娃菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "清淡易消化，注意不要长期只吃单一蔬菜。", icon: "🥬" },
            { category: "蔬菜菌类", name: "胡萝卜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "富含β-胡萝卜素，熟食吸收更好。", icon: "🥕" },
            { category: "蔬菜菌类", name: "番茄", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "含维生素C和番茄红素，胃酸明显时少吃生冷。", icon: "🍅" },
            { category: "蔬菜菌类", name: "黄瓜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "可补水，生吃务必洗净，肠胃弱建议熟食。", icon: "🥒" },
            { category: "蔬菜菌类", name: "冬瓜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "清淡低热量，适合水肿期搭配低盐饮食。", icon: "🍈" },
            { category: "蔬菜菌类", name: "南瓜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "可替代部分主食，血糖异常者注意控制量。", icon: "🎃" },
            { category: "蔬菜菌类", name: "土豆", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "属于淀粉类食物，应相应减少米饭面条摄入。", icon: "🥔" },
            { category: "蔬菜菌类", name: "茄子", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可吃，避免油炸或重油红烧。", icon: "🍆" },
            { category: "蔬菜菌类", name: "芹菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "含膳食纤维，注意洗净炒熟。", icon: "🥬" },
            { category: "蔬菜菌类", name: "海带", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "含碘，适量有益；甲状腺疾病者遵医嘱。", icon: "🌿" },
            { category: "蔬菜菌类", name: "紫菜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "含碘和矿物质，注意选择低盐做法。", icon: "🌿" },
            { category: "蔬菜菌类", name: "金针菇", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "菌菇类需彻底煮熟，避免凉拌生食。", icon: "🍄" },
            { category: "蔬菜菌类", name: "杏鲍菇", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "菌菇类提供膳食纤维，需熟透。", icon: "🍄" },
            { category: "蔬菜菌类", name: "银耳", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "需充分泡发煮熟，不吃变质隔夜久放银耳。", icon: "🍄" },
            { category: "蔬菜菌类", name: "发芽土豆", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "龙葵素风险高，孕期及普通人群都不建议食用。", icon: "🥔" },
            { category: "肉蛋类", name: "鸡蛋", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "优质蛋白来源，必须全熟，避免生蛋或流心蛋。", icon: "🥚" },
            { category: "肉蛋类", name: "鸭蛋", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可吃但建议全熟，咸鸭蛋盐分高需少量。", icon: "🥚" },
            { category: "肉蛋类", name: "鹌鹑蛋", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "优质蛋白，注意全熟和控制总量。", icon: "🥚" },
            { category: "肉蛋类", name: "羊肉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "富含蛋白和铁，注意熟透，避免过油过辣。", icon: "🥩" },
            { category: "肉蛋类", name: "鸭肉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "蛋白质来源，选择清淡做法。", icon: "🦆" },
            { category: "肉蛋类", name: "鹅肉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可补充蛋白质，但脂肪较高，适量。", icon: "🍗" },
            { category: "肉蛋类", name: "猪肝", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "含铁丰富但维A较高，建议少量且不频繁，遵医嘱更稳妥。", icon: "🥩" },
            { category: "肉蛋类", name: "鸡肝", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "动物肝脏维A含量高，不宜大量频繁吃。", icon: "🥩" },
            { category: "肉蛋类", name: "牛排", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "必须全熟，避免三分/五分熟带来的细菌寄生虫风险。", icon: "🥩" },
            { category: "肉蛋类", name: "烤肉", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "需完全熟透，少吃焦糊和重盐重辣。", icon: "🍖" },
            { category: "肉蛋类", name: "火腿肠", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "加工肉盐分和添加剂较多，不宜常吃。", icon: "🌭" },
            { category: "肉蛋类", name: "培根", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "加工肉盐分和脂肪较高，建议偶尔少量。", icon: "🥓" },
            { category: "水产海鲜", name: "虾", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "优质蛋白，过敏者避免，必须熟透。", icon: "🦐" },
            { category: "水产海鲜", name: "鲈鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "低汞鱼类，适合补充优质蛋白，清蒸更佳。", icon: "🐟" },
            { category: "水产海鲜", name: "鲫鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "常见低汞鱼类，注意刺和熟透。", icon: "🐟" },
            { category: "水产海鲜", name: "带鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可吃，建议熟透，少用油炸。", icon: "🐟" },
            { category: "水产海鲜", name: "黄花鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "鱼类蛋白较好，注意新鲜和熟透。", icon: "🐟" },
            { category: "水产海鲜", name: "沙丁鱼", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "小型鱼相对低汞，熟食更安全。", icon: "🐟" },
            { category: "水产海鲜", name: "鲭鱼", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "部分大型鲭鱼汞风险较高，孕期谨慎选择。", icon: "🐟" },
            { category: "水产海鲜", name: "旗鱼", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "大型掠食鱼汞含量风险高，孕期不建议。", icon: "🐟" },
            { category: "水产海鲜", name: "剑鱼", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "大型掠食鱼汞含量风险高，孕期不建议。", icon: "🐟" },
            { category: "水产海鲜", name: "生鱼片", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "生食有寄生虫、细菌污染风险，孕期避免。", icon: "🍣" },
            { category: "水产海鲜", name: "刺身", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "生食水产有感染风险，孕期避免。", icon: "🍣" },
            { category: "水产海鲜", name: "寿司", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "熟制寿司可少量，含生鱼片的应避免。", icon: "🍣" },
            { category: "水产海鲜", name: "贝类", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "贝类易富集污染物，需新鲜并彻底煮熟。", icon: "🦪" },
            { category: "水产海鲜", name: "生蚝", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "慎吃", infant: "不能吃", reason: "生食风险高，孕期不建议；熟透也要注意来源。", icon: "🦪" },
            { category: "水产海鲜", name: "扇贝", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "可熟透少量吃，注意新鲜和过敏。", icon: "🐚" },
            { category: "水产海鲜", name: "小龙虾", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "需彻底煮熟，重辣重油不适合频繁吃。", icon: "🦞" },
            { category: "水产海鲜", name: "田螺", pregnancy: "不能吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "寄生虫风险较高，孕期不建议。", icon: "🐚" },
            { category: "水果类", name: "香蕉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "含钾和膳食纤维，便秘时可适量。", icon: "🍌" },
            { category: "水果类", name: "橙子", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "富含维生素C，有助铁吸收。", icon: "🍊" },
            { category: "水果类", name: "柚子", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "维C丰富，服药期间注意与部分药物相互作用。", icon: "🍊" },
            { category: "水果类", name: "猕猴桃", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "维C和膳食纤维较多，胃酸明显时少量。", icon: "🥝" },
            { category: "水果类", name: "草莓", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "洗净后食用，注意农残和过敏。", icon: "🍓" },
            { category: "水果类", name: "蓝莓", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "富含花青素，注意清洗。", icon: "🫐" },
            { category: "水果类", name: "梨", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "水分多，脾胃虚寒或腹泻时少量。", icon: "🍐" },
            { category: "水果类", name: "桃子", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "适量即可，注意清洗表皮绒毛。", icon: "🍑" },
            { category: "水果类", name: "西瓜", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "糖分和水分高，血糖异常或腹泻时少吃。", icon: "🍉" },
            { category: "水果类", name: "哈密瓜", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "糖分偏高，妊娠糖尿病需控制量。", icon: "🍈" },
            { category: "水果类", name: "芒果", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "糖分较高且可能过敏，首次少量。", icon: "🥭" },
            { category: "水果类", name: "菠萝", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "可能刺激口腔或过敏，少量尝试。", icon: "🍍" },
            { category: "水果类", name: "木瓜", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "尤其未成熟木瓜不建议，成熟木瓜也少量谨慎。", icon: "🍈" },
            { category: "水果类", name: "龙眼", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "糖分高，容易上火或血糖波动，少量。", icon: "🍇" },
            { category: "水果类", name: "柿子", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "鞣酸较多，空腹或大量食用可能不适。", icon: "🍅" },
            { category: "坚果类", name: "杏仁", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "选择熟制甜杏仁，避免苦杏仁。", icon: "🥜" },
            { category: "坚果类", name: "开心果", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "优选原味，盐焗款少吃。", icon: "🥜" },
            { category: "坚果类", name: "松子", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "脂肪含量高，每日一小把即可。", icon: "🥜" },
            { category: "坚果类", name: "碧根果", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "能量高，控制总量，避免糖衣款。", icon: "🥜" },
            { category: "坚果类", name: "夏威夷果", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "脂肪和热量高，少量即可。", icon: "🥜" },
            { category: "坚果类", name: "苦杏仁", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "含有潜在有毒成分，孕期不要自行食用。", icon: "🥜" },
            { category: "加工食品", name: "香肠", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "加工肉盐分、脂肪和添加剂较高，偶尔少量。", icon: "🌭" },
            { category: "加工食品", name: "罐头", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "盐或糖较高，优先选择新鲜食物。", icon: "🥫" },
            { category: "加工食品", name: "速冻水饺", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "可应急，注意钠含量并彻底煮熟。", icon: "🥟" },
            { category: "加工食品", name: "炸薯条", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "高油高盐，不宜频繁食用。", icon: "🍟" },
            { category: "加工食品", name: "烧烤", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "存在不熟、焦糊和高盐风险，孕期尽量少吃。", icon: "🍢" },
            { category: "加工食品", name: "腌菜", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "盐分高，腌制品不宜经常吃。", icon: "🥒" },
            { category: "加工食品", name: "咸菜", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "高盐易加重水肿和血压负担。", icon: "🥬" },
            { category: "加工食品", name: "皮蛋", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "钠含量高且加工风险较多，孕期少吃或不吃。", icon: "🥚" },
            { category: "零食饮品", name: "牛奶", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "钙和优质蛋白来源，乳糖不耐受可选酸奶或无乳糖奶。", icon: "🥛" },
            { category: "零食饮品", name: "酸奶", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "建议选低糖、冷藏合规产品。", icon: "🥛" },
            { category: "零食饮品", name: "豆浆", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "需彻底煮熟，避免生豆浆。", icon: "🥛" },
            { category: "零食饮品", name: "椰子水", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "可少量，注意糖分和卫生。", icon: "🥥" },
            { category: "零食饮品", name: "奶茶", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "糖分和咖啡因不稳定，建议少糖少量。", icon: "🧋" },
            { category: "零食饮品", name: "可乐", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "含糖和咖啡因，不建议频繁饮用。", icon: "🥤" },
            { category: "零食饮品", name: "能量饮料", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "咖啡因和刺激成分高，孕期不建议。", icon: "🥤" },
            { category: "零食饮品", name: "气泡水", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "无糖无酒精气泡水可少量，胃胀时少喝。", icon: "🫧" },
            { category: "零食饮品", name: "蜂蜜水", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "不能吃", reason: "孕妇可少量，血糖异常少喝；1岁内婴儿禁用蜂蜜。", icon: "🍯" },
            { category: "零食饮品", name: "巧克力", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "含糖和少量咖啡因，少量即可。", icon: "🍫" },
            { category: "零食饮品", name: "冰淇淋", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "糖和脂肪高，注意冷链卫生。", icon: "🍦" },
            { category: "零食饮品", name: "蛋糕", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "高糖高脂，妊娠糖尿病需控制。", icon: "🍰" },
            { category: "零食饮品", name: "辣条", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "高盐高油，添加剂多，不建议孕期常吃。", icon: "🌶️" },
            { category: "零食饮品", name: "话梅", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "盐和糖较高，孕吐时也不宜多吃。", icon: "🍬" },
            { category: "调味补品", name: "姜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "少量入菜可缓解恶心，胃热或反酸时少用。", icon: "🫚" },
            { category: "调味补品", name: "蒜", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "日常调味可用，胃不适时少吃。", icon: "🧄" },
            { category: "调味补品", name: "辣椒", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "可少量调味，痔疮、胃痛、反酸时少吃。", icon: "🌶️" },
            { category: "调味补品", name: "花椒", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "刺激性调味，孕期建议少量。", icon: "🧂" },
            { category: "调味补品", name: "味精", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "可少量，重点控制总钠摄入。", icon: "🧂" },
            { category: "调味补品", name: "酱油", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "钠含量较高，注意少盐饮食。", icon: "🧂" },
            { category: "调味补品", name: "醋", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可调味，胃酸反流明显时少用。", icon: "🍶" },
            { category: "调味补品", name: "枸杞", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "可少量泡水或入菜，血糖异常者注意量。", icon: "🍒" },
            { category: "调味补品", name: "红枣", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "慎吃", reason: "糖分较高，补血不能替代正规补铁。", icon: "🍒" },
            { category: "调味补品", name: "阿胶", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "是否适合因人而异，建议咨询医生后使用。", icon: "🍯" },
            { category: "调味补品", name: "人参", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "不建议自行进补，尤其有高血压、失眠等情况需遵医嘱。", icon: "🌿" },
            { category: "调味补品", name: "鹿茸", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "滋补性强，孕期不建议自行服用。", icon: "🌿" },
            { category: "调味补品", name: "当归", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "中药材需医生辨证，不建议自行食用。", icon: "🌿" },
            { category: "调味补品", name: "益母草", pregnancy: "不能吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "可能影响子宫收缩，孕期不要自行使用。", icon: "🌿" },
            { category: "豆制品", name: "豆腐", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "植物蛋白和钙来源，注意新鲜。", icon: "🫘" },
            { category: "豆制品", name: "豆干", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可补充植物蛋白，选择低盐款。", icon: "🫘" },
            { category: "豆制品", name: "腐竹", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "蛋白质较多，注意泡发卫生和熟透。", icon: "🫘" },
            { category: "豆制品", name: "豆皮", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "植物蛋白来源，凉拌需注意卫生。", icon: "🫘" },
            { category: "豆制品", name: "纳豆", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可吃，但服用抗凝药等特殊情况需问医生。", icon: "🫘" },
            { category: "豆制品", name: "臭豆腐", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "油炸和卫生风险较高，孕期少吃。", icon: "🫘" },
            { category: "奶制品", name: "奶酪", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "选择巴氏杀菌奶制成的硬质或正规奶酪。", icon: "🧀" },
            { category: "奶制品", name: "软奶酪", pregnancy: "慎吃", confinement: "慎吃", breastfeeding: "慎吃", infant: "不能吃", reason: "若未巴氏杀菌，有李斯特菌风险，孕期谨慎。", icon: "🧀" },
            { category: "奶制品", name: "孕妇奶粉", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "不能吃", reason: "可作为营养补充，但不能替代均衡饮食。", icon: "🥛" },
            { category: "奶制品", name: "未消毒牛奶", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "未经巴氏杀菌有致病菌风险，孕期禁止。", icon: "🥛" },
            { category: "饮品", name: "白开水", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "可吃", reason: "孕期首选饮品，少量多次饮水。", icon: "💧" },
            { category: "饮品", name: "淡柠檬水", pregnancy: "可吃", confinement: "可吃", breastfeeding: "可吃", infant: "慎吃", reason: "可少量，胃酸反流明显时少喝。", icon: "🍋" },
            { category: "饮品", name: "绿茶", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "含咖啡因，建议淡茶少量。", icon: "🍵" },
            { category: "饮品", name: "红茶", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "含咖啡因，注意总摄入量。", icon: "🍵" },
            { category: "饮品", name: "乌龙茶", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "含咖啡因，孕期少量淡饮。", icon: "🍵" },
            { category: "饮品", name: "果汁", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "游离糖高，不如直接吃完整水果。", icon: "🧃" },
            { category: "饮品", name: "鲜榨果汁", pregnancy: "少吃", confinement: "少吃", breastfeeding: "少吃", infant: "不能吃", reason: "糖吸收快，且需注意卫生。", icon: "🧃" },
            { category: "饮品", name: "酒精饮品", pregnancy: "不能吃", confinement: "不能吃", breastfeeding: "不能吃", infant: "不能吃", reason: "孕期没有安全饮酒量，建议完全避免。", icon: "🍷" },
        ];

        // 热门食物（大家都在关注）
        const hotFoods = ["螃蟹", "咖啡", "燕窝", "山楂", "榴莲", "薏米", "三文鱼", "燕麦", "酒", "西瓜", "虾", "牛奶", "鸡蛋", "红薯", "海带", "奶茶", "生鱼片", "猪肝", "豆腐", "蓝莓"];

        // 分类对应的emoji映射
        const categoryIcons = {
            "五谷杂粮": "🌾", "蔬菜菌类": "🥬", "肉蛋类": "🥩", "水产海鲜": "🦐",
            "水果类": "🍎", "坚果类": "🥜", "加工食品": "🧊", "零食饮品": "🍿",
            "调味补品": "🍯", "豆制品": "🫘", "奶制品": "🥛", "饮品": "🧃"
        };

        // 获取状态样式类
        function getStatusClass(status) {
            switch(status) {
                case "可吃": return "ok";
                case "少吃": return "little";
                case "慎吃": return "caution";
                case "不能吃": return "no";
                default: return "ok";
            }
        }

        // 获取状态图标
        function getStatusIcon(status) {
            switch(status) {
                case "可吃": return "✓";
                case "少吃": return "⋯";
                case "慎吃": return "!";
                case "不能吃": return "✕";
                default: return "✓";
            }
        }

        // 渲染食物列表
        function renderFoodList(foods, title) {
            const foodList = document.getElementById('foodList');
            const foodListTitle = document.getElementById('foodListTitle');
            foodListTitle.textContent = title;

            if (foods.length === 0) {
                foodList.innerHTML = `
                    <div class="empty-tip">
                        <div class="empty-tip-icon">🔍</div>
                        <div>没有找到相关食物</div>
                    </div>
                `;
                return;
            }

            foodList.innerHTML = foods.map(food => `
                <div class="food-item" data-food="${food.name}">
                    <div class="food-item-icon">${food.icon || categoryIcons[food.category] || '🍽️'}</div>
                    <div class="food-item-info">
                        <div class="food-item-name">${food.name}</div>
                        <div class="food-item-category">${food.category}</div>
                    </div>
                    <span class="food-item-tag ${getStatusClass(food.pregnancy)}">孕期：${food.pregnancy}</span>
                </div>
            `).join('');

            // 绑定点击事件
            foodList.querySelectorAll('.food-item').forEach(item => {
                item.addEventListener('click', () => {
                    const foodName = item.dataset.food;
                    const food = foodData.find(f => f.name === foodName);
                    if (food) showFoodDetail(food);
                });
            });
        }

        // 显示食物详情
        function showFoodDetail(food) {
            const detailContent = document.getElementById('detailContent');
            const foodDetailSheet = document.getElementById('foodDetailSheet');
            const foodDetailOverlay = document.getElementById('foodDetailOverlay');

            detailContent.innerHTML = `
                <div class="detail-header">
                    <div class="detail-icon">${food.icon || categoryIcons[food.category] || '🍽️'}</div>
                    <div>
                        <div class="detail-title">${food.name}</div>
                        <div class="detail-subtitle">${food.category}</div>
                    </div>
                </div>
                <div class="detail-grid">
                    <div class="detail-card ${getStatusClass(food.pregnancy)}">
                        <div class="detail-card-label">孕期</div>
                        <div class="detail-card-status">${getStatusIcon(food.pregnancy)} ${food.pregnancy}</div>
                    </div>
                    <div class="detail-card ${getStatusClass(food.confinement)}">
                        <div class="detail-card-label">坐月子</div>
                        <div class="detail-card-status">${getStatusIcon(food.confinement)} ${food.confinement}</div>
                    </div>
                    <div class="detail-card ${getStatusClass(food.breastfeeding)}">
                        <div class="detail-card-label">哺乳期</div>
                        <div class="detail-card-status">${getStatusIcon(food.breastfeeding)} ${food.breastfeeding}</div>
                    </div>
                    <div class="detail-card ${getStatusClass(food.infant)}">
                        <div class="detail-card-label">婴幼儿(6月+)</div>
                        <div class="detail-card-status">${getStatusIcon(food.infant)} ${food.infant}</div>
                    </div>
                </div>
                <div class="detail-reason">
                    <div class="detail-reason-title">💡 核心建议与原理</div>
                    <div class="detail-reason-text">${food.reason}</div>
                </div>
                <button class="close-btn" id="closeDetailBtn">我知道了</button>
            `;

            // 显示弹窗
            foodDetailOverlay.classList.add('active');
            foodDetailSheet.classList.add('active');

            // 关闭详情
            const closeDetailBtn = document.getElementById('closeDetailBtn');
            const closeDetail = () => {
                foodDetailOverlay.classList.remove('active');
                foodDetailSheet.classList.remove('active');
            };

            closeDetailBtn.onclick = closeDetail;
            foodDetailOverlay.onclick = closeDetail;
        }

        // 打开食物页面
        function openFoodPage() {
            const foodPage = document.getElementById('foodPage');
            foodPage.classList.add('active');
            // 重置状态
            currentCategory = null;
            document.getElementById('foodSearchInput').value = '';
            document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
            // 显示热门食物
            const hotFoodsList = hotFoods.map(name => foodData.find(f => f.name === name)).filter(Boolean);
            renderFoodList(hotFoodsList, '大家都在关注');
        }

        // 关闭食物页面
        function closeFoodPage() {
            const foodPage = document.getElementById('foodPage');
            foodPage.classList.remove('active');
        }

        // 当前选中的分类
        let currentCategory = null;

        // 初始化食物页面功能
        function initFoodPage() {
            const foodBackBtn = document.getElementById('foodBackBtn');
            const foodSearchInput = document.getElementById('foodSearchInput');
            const categoryGrid = document.getElementById('categoryGrid');

            // 返回按钮
            foodBackBtn.addEventListener('click', closeFoodPage);

            // 搜索功能
            foodSearchInput.addEventListener('input', (e) => {
                const keyword = e.target.value.trim();
                currentCategory = null;
                document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));

                if (keyword) {
                    const results = foodData.filter(food => 
                        food.name.includes(keyword) || food.category.includes(keyword)
                    );
                    renderFoodList(results, `搜索"${keyword}"的结果`);
                } else {
                    const hotFoodsList = hotFoods.map(name => foodData.find(f => f.name === name)).filter(Boolean);
                    renderFoodList(hotFoodsList, '大家都在关注');
                }
            });

            // 分类点击
            categoryGrid.querySelectorAll('.category-item').forEach(item => {
                item.addEventListener('click', () => {
                    const category = item.dataset.category;
                    document.getElementById('foodSearchInput').value = '';

                    if (currentCategory === category) {
                        // 取消选中，显示热门
                        currentCategory = null;
                        item.classList.remove('active');
                        const hotFoodsList = hotFoods.map(name => foodData.find(f => f.name === name)).filter(Boolean);
                        renderFoodList(hotFoodsList, '大家都在关注');
                    } else {
                        // 选中分类
                        document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                        currentCategory = category;
                        const categoryFoods = foodData.filter(f => f.category === category);
                        renderFoodList(categoryFoods, category);
                    }
                });
            });

            // 默认显示热门食物
            const hotFoodsList = hotFoods.map(name => foodData.find(f => f.name === name)).filter(Boolean);
            renderFoodList(hotFoodsList, '大家都在关注');
        }

        // 绑定"能不能吃"图标点击事件
        document.querySelector('[data-tool="food"]').addEventListener('click', openFoodPage);

        // 页面加载完成后初始化
        document.addEventListener('DOMContentLoaded', initFoodPage);

        // ==================== 完整孕周知识库数据 (1-41周) ====================
        const weekData = {
            1: {
                metaphor: "尘埃", emoji: "🥚",
                baby: "正在等待相遇，生命之种即将萌发。",
                mom: "处于排卵期，子宫内膜增厚。",
                dad: "戒烟戒酒，营造浪漫氛围。",
                checkup: "孕前检查，记录末次月经。",
                nutrition: "每日补充 400μg 叶酸。",
                care: "意念胎教，保持心情愉悦。",
                babyIndicators: ["-", "-", "280天"],
                momIndicators: ["子宫内膜增厚", "基础体温升高", "等待中"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["子宫状态", "基础体温", "身体状态"],
                keyCheckups: [],
                nutritionFocus: "叶酸补充",
                careTips: ["保持心情愉悦", "避免有害物质", "补充叶酸"]
            },
            2: {
                metaphor: "尘埃", emoji: "🥚",
                baby: "受精卵正在分裂，准备着床。",
                mom: "子宫内膜持续增厚，为着床做准备。",
                dad: "保持健康生活习惯，避免高温环境。",
                checkup: "孕前检查，确保身体状况适合怀孕。",
                nutrition: "继续补充叶酸，均衡饮食。",
                care: "放松心情，避免过度紧张。",
                babyIndicators: ["-", "-", "280天"],
                momIndicators: ["子宫内膜增厚", "基础体温升高", "等待中"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["子宫状态", "基础体温", "身体状态"],
                keyCheckups: [],
                nutritionFocus: "叶酸补充",
                careTips: ["放松心情", "均衡饮食", "避免高温"]
            },
            3: {
                metaphor: "尘埃", emoji: "🫘",
                baby: "受精卵成功着床，开始分泌hCG激素。",
                mom: "可能出现轻微出血或痉挛，基础体温持续升高。",
                dad: "给予妻子更多关心和陪伴。",
                checkup: "可使用早孕试纸检测，记录月经周期。",
                nutrition: "叶酸补充不能停，多吃深绿色蔬菜。",
                care: "避免剧烈运动，不要泡温泉。",
                babyIndicators: ["-", "-", "277天"],
                momIndicators: ["轻微出血", "基础体温升高", "等待中"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["着床反应", "基础体温", "身体状态"],
                keyCheckups: [],
                nutritionFocus: "叶酸补充",
                careTips: ["避免剧烈运动", "不要泡温泉", "多休息"]
            },
            4: {
                metaphor: "罂粟籽", emoji: "🌱",
                baby: "胚泡成功着床，正在努力生根。",
                mom: "基础体温持续偏高，可能停经。",
                dad: "购买早孕试纸，承包重家务。",
                checkup: "抽血确认 HCG 与孕酮。",
                nutrition: "继续叶酸，增加优质蛋白。",
                care: "远离辐射，严禁擅自用药。",
                babyIndicators: ["-", "-", "266天"],
                momIndicators: ["停经", "基础体温偏高", "轻微疲劳"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["月经状态", "基础体温", "疲劳感"],
                keyCheckups: ["HCG检测"],
                nutritionFocus: "叶酸+蛋白质",
                careTips: ["远离辐射", "禁止擅自用药", "多休息"]
            },
            5: {
                metaphor: "芝麻", emoji: "🌾",
                baby: "原始心脏形成并开始跳动。",
                mom: "嗅觉灵敏，乳房胀痛，易疲劳。",
                dad: "建立气味隔离区，陪同血检。",
                checkup: "官方确认怀孕，排除宫外孕。",
                nutrition: "维B6缓解初吐，少食多餐。",
                care: "冥想胎教，接纳身份转变。",
                babyIndicators: ["1-2mm", "-", "259天"],
                momIndicators: ["嗅觉灵敏", "乳房胀痛", "易疲劳"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["嗅觉", "乳房状态", "精力"],
                keyCheckups: ["B超确认宫内孕"],
                nutritionFocus: "维生素B6",
                careTips: ["少食多餐", "远离油烟", "保持好心情"]
            },
            6: {
                metaphor: "扁豆", emoji: "🫘",
                baby: "像个小海马，神经管正在闭合。",
                mom: "早孕反应加重，晨起恶心明显。",
                dad: "承包厨房，避免油烟刺激。",
                checkup: "建议进行 B 超，确认胎芽。",
                nutrition: "吃清淡易消化的谷物。",
                care: "环境胎教，居室保持通风。",
                babyIndicators: ["2-4mm", "-", "252天"],
                momIndicators: ["孕吐", "恶心", "疲劳"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["孕吐", "恶心感", "疲劳感"],
                keyCheckups: ["第一次B超"],
                nutritionFocus: "清淡易消化",
                careTips: ["远离油烟", "保持通风", "多休息"]
            },
            7: {
                metaphor: "蓝莓", emoji: "🫐",
                baby: "脑部迅速发育，生出了小手芽。",
                mom: "尿频感增强，情绪波动较大。",
                dad: "积极倾听，安排15分钟交流。",
                checkup: "预约 NT 检查，建档咨询。",
                nutrition: "补铁预防贫血，多吃绿叶菜。",
                care: "皮肤护理，改用温和洗护。",
                babyIndicators: ["1.4cm", "1.3g", "245天"],
                momIndicators: ["尿频", "情绪波动", "乳房胀痛"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["尿频", "情绪", "乳房状态"],
                keyCheckups: [],
                nutritionFocus: "铁+绿叶菜",
                careTips: ["使用温和洗护", "积极沟通", "记录体重"]
            },
            8: {
                metaphor: "葡萄", emoji: "🍇",
                baby: "初具人型，小尾巴正在消失。",
                mom: "子宫如大橙子，腹部偶有牵拉感。",
                dad: "陪同妻子散步，缓解压力。",
                checkup: "监测胎心，领取母子手册。",
                nutrition: "增加钙质摄入（牛奶、豆类）。",
                care: "情绪调节，看轻松的影视。",
                babyIndicators: ["2.0cm", "2.5g", "238天"],
                momIndicators: ["子宫增大", "腹部牵拉", "情绪波动"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["子宫大小", "腹部感觉", "情绪"],
                keyCheckups: ["确认胎心"],
                nutritionFocus: "钙质补充",
                careTips: ["情绪调节", "适当散步", "远离辐射"]
            },
            9: {
                metaphor: "樱桃", emoji: "🍒",
                baby: "胚胎正式成为胎儿，眼睑形成。",
                mom: "激素达到峰值，反应最严重。",
                dad: "准备柠檬水或苏打饼干缓解。",
                checkup: "关注阴道分泌物，预防感染。",
                nutrition: "少量多餐，保证基本热量。",
                care: "记录体重，关注基础变化。",
                babyIndicators: ["2.8cm", "4g", "231天"],
                momIndicators: ["激素高峰", "孕吐严重", "疲劳"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["激素水平", "孕吐", "疲劳感"],
                keyCheckups: [],
                nutritionFocus: "保证热量",
                careTips: ["记录体重", "关注分泌物", "少食多餐"]
            },
            10: {
                metaphor: "金桔", emoji: "🍊",
                baby: "全身器官已具备雏形，开始吞咽。",
                mom: "情绪开始平稳，皮肤可能出油。",
                dad: "赞美妻子，给予身体正面反馈。",
                checkup: "建立正式产检档案（大建档）。",
                nutrition: "补充 DHA（深海鱼、核桃）。",
                care: "开始进行简单的伸展运动。",
                babyIndicators: ["3.5cm", "7g", "224天"],
                momIndicators: ["情绪平稳", "皮肤出油", "腹部微隆"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["情绪", "皮肤", "腹部"],
                keyCheckups: ["大建档"],
                nutritionFocus: "DHA补充",
                careTips: ["伸展运动", "正向鼓励", "皮肤护理"]
            },
            11: {
                metaphor: "抱子甘蓝", emoji: "🥬",
                baby: "骨骼开始硬化，会在肚子里踢动。",
                mom: "晨吐逐渐减轻，胃口稍微好转。",
                dad: "协助记录体重，准备孕妇装。",
                checkup: "测量血压、体重、尿常规。",
                nutrition: "适度增加纤维素，预防便秘。",
                care: "声音胎教，开始跟宝宝说话。",
                babyIndicators: ["4.5cm", "14g", "217天"],
                momIndicators: ["孕吐减轻", "胃口好转", "体重增加"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["孕吐", "胃口", "体重"],
                keyCheckups: ["常规检查"],
                nutritionFocus: "纤维素",
                careTips: ["声音胎教", "准备孕妇装", "预防便秘"]
            },
            12: {
                metaphor: "柠檬", emoji: "🍋",
                baby: "已经有了指纹，开始在羊水中游。",
                mom: "进入稳定期，腹部微隆。",
                dad: "见证第一次影像，保存B超单。",
                checkup: "重点：NT 胎儿颈后透明带扫描。",
                nutrition: "多品种摄入，不偏食挑食。",
                care: "庆祝平稳度过前三个月。",
                babyIndicators: ["5.4cm", "16g", "196天"],
                momIndicators: ["进入稳定期", "腹部微隆", "孕吐减轻"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["孕期阶段", "腹部", "孕吐"],
                keyCheckups: ["NT筛查", "建档完成"],
                nutritionFocus: "均衡营养",
                careTips: ["庆祝孕早期完成", "保存B超单", "继续补充叶酸"]
            },
            13: {
                metaphor: "桃子", emoji: "🍑",
                baby: "进入孕中期，声带开始形成。",
                mom: "早孕反应明显减轻，精力恢复。",
                dad: "安排一次小型旅行庆祝。",
                checkup: "孕中期开始，每月一次常规产检。",
                nutrition: "注意补钙，胎儿骨骼发育加速。",
                care: "选择舒适的内衣，减轻胸部压迫感。",
                babyIndicators: ["7.4cm", "23g", "189天"],
                momIndicators: ["精力恢复", "乳房继续增大", "腹部隆起"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["精力", "乳房", "腹部"],
                keyCheckups: ["常规产检"],
                nutritionFocus: "钙质补充",
                careTips: ["选择舒适内衣", "适当旅行", "注意休息"]
            },
            14: {
                metaphor: "柠檬", emoji: "🍋",
                baby: "可以做出表情了，眉毛和头发在生长。",
                mom: "子宫继续增大，下腹部隆起更明显。",
                dad: "学习按摩技巧，缓解妻子腰酸。",
                checkup: "常规产检，监测胎心音。",
                nutrition: "补充蛋白质，支持胎儿快速发育。",
                care: "开始使用预防妊娠纹的产品。",
                babyIndicators: ["8.7cm", "43g", "182天"],
                momIndicators: ["下腹部隆起", "腰酸", "情绪稳定"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["腹部", "腰部", "情绪"],
                keyCheckups: ["胎心监测"],
                nutritionFocus: "蛋白质",
                careTips: ["预防妊娠纹", "学习按摩", "定期产检"]
            },
            15: {
                metaphor: "苹果", emoji: "🍎",
                baby: "能听到外界声音了，开始有听觉。",
                mom: "乳房明显增大，可能开始分泌初乳。",
                dad: "和宝宝说话，进行音乐胎教。",
                checkup: "唐筛检查（15-20周），建议16周做。",
                nutrition: "补铁，预防孕期贫血。",
                care: "注意口腔卫生，预防牙龈炎。",
                babyIndicators: ["10cm", "70g", "175天"],
                momIndicators: ["乳房增大", "分泌初乳", "腹部明显"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["乳房", "初乳", "腹部"],
                keyCheckups: ["唐筛准备"],
                nutritionFocus: "铁元素",
                careTips: ["音乐胎教", "口腔护理", "补充铁剂"]
            },
            16: {
                metaphor: "牛油果", emoji: "🥑",
                baby: "神经系统快速发育，指纹形成。",
                mom: "可能出现鼻塞、牙龈出血等假感冒症状。",
                dad: "准备孕妇枕，改善妻子睡眠。",
                checkup: "重点：唐氏筛查（或无创DNA）。",
                nutrition: "补充DHA，促进大脑发育。",
                care: "注意口腔卫生，预防牙龈炎。",
                babyIndicators: ["11.6cm", "100g", "168天"],
                momIndicators: ["鼻塞", "牙龈出血", "假感冒"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["鼻腔", "牙龈", "症状"],
                keyCheckups: ["唐氏筛查"],
                nutritionFocus: "DHA补充",
                careTips: ["使用孕妇枕", "口腔护理", "避免误诊"]
            },
            17: {
                metaphor: "梨", emoji: "🍐",
                baby: "骨骼从软骨开始硬化，脂肪开始积累。",
                mom: "腹部明显隆起，行动开始不便。",
                dad: "帮助妻子穿鞋、捡东西等。",
                checkup: "常规产检，测量宫高和腹围。",
                nutrition: "均衡饮食，控制体重增速。",
                care: "开始学习分娩和育儿知识。",
                babyIndicators: ["13cm", "140g", "161天"],
                momIndicators: ["腹部隆起", "行动不便", "重心改变"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["腹部", "行动", "重心"],
                keyCheckups: ["宫高腹围测量"],
                nutritionFocus: "均衡饮食",
                careTips: ["学习育儿知识", "注意行动安全", "控制体重"]
            },
            18: {
                metaphor: "柿子", emoji: "🍅",
                baby: "开始打哈欠、吞咽和吸吮练习。",
                mom: "可以感受到第一次胎动，像蝴蝶扇动翅膀。",
                dad: "感受胎动，参与孕期生活。",
                checkup: "B超大排畸检查（18-22周）。",
                nutrition: "补钙补铁，继续补充叶酸。",
                care: "穿着宽松舒适的衣服。",
                babyIndicators: ["14.2cm", "190g", "154天"],
                momIndicators: ["首次胎动", "腹部增大", "腰酸"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["胎动", "腹部", "腰部"],
                keyCheckups: ["大排畸B超"],
                nutritionFocus: "钙+铁+叶酸",
                careTips: ["感受胎动", "穿着宽松", "定期产检"]
            },
            19: {
                metaphor: "芒果", emoji: "🥭",
                baby: "感觉器官发育关键期，味觉开始形成。",
                mom: "色素沉着增加，腹部可能出现妊娠线。",
                dad: "为准妈妈拍照留念。",
                checkup: "常规产检，关注胎动。",
                nutrition: "多吃富含维生素C的水果。",
                care: "使用托腹带，减轻腰部压力。",
                babyIndicators: ["15.3cm", "240g", "147天"],
                momIndicators: ["妊娠线", "色素沉着", "胎动明显"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["妊娠线", "皮肤", "胎动"],
                keyCheckups: ["常规产检"],
                nutritionFocus: "维生素C",
                careTips: ["拍照留念", "使用托腹带", "注意皮肤护理"]
            },
            20: {
                metaphor: "香蕉", emoji: "🍌",
                baby: "全身覆盖胎脂，开始长出指甲。",
                mom: "宫底达脐平，腹部明显增大。",
                dad: "准备婴儿房，购置必需品。",
                checkup: "重点：大排畸超声检查。",
                nutrition: "补充钙质，多喝牛奶。",
                care: "睡觉时左侧卧位，改善子宫供血。",
                babyIndicators: ["16.4cm", "300g", "140天"],
                momIndicators: ["宫底平脐", "腹部明显", "胎动活跃"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["宫底高度", "腹部", "胎动"],
                keyCheckups: ["大排畸检查"],
                nutritionFocus: "钙质补充",
                careTips: ["左侧卧位", "准备婴儿房", "数胎动"]
            },
            21: {
                metaphor: "石榴", emoji: "🥭",
                baby: "眉毛和眼睑完全形成，消化系统在发育。",
                mom: "体重快速增加，每周约增重0.5kg。",
                dad: "陪伴产检，共同参与孕期。",
                checkup: "常规产检，糖耐量筛查准备。",
                nutrition: "控制甜食摄入，预防妊娠糖尿病。",
                care: "注意补铁，预防贫血。",
                babyIndicators: ["26.7cm", "360g", "133天"],
                momIndicators: ["体重增加", "腹部增大", "腰背酸痛"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["体重增长", "腹部", "腰背"],
                keyCheckups: ["糖耐筛查准备"],
                nutritionFocus: "控制糖分",
                careTips: ["控制甜食", "补充铁剂", "定期产检"]
            },
            22: {
                metaphor: "木瓜", emoji: "🍈",
                baby: "看起来像微型新生儿，恒牙牙蕾形成。",
                mom: "可能出现痔疮、便秘等问题。",
                dad: "帮助按摩腿部，预防静脉曲张。",
                checkup: "常规产检，监测血压。",
                nutrition: "高纤维饮食，预防便秘。",
                care: "避免久坐，适当散步。",
                babyIndicators: ["27.8cm", "430g", "126天"],
                momIndicators: ["痔疮", "便秘", "静脉曲张"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["消化系统", "痔疮", "腿部"],
                keyCheckups: ["血压监测"],
                nutritionFocus: "高纤维",
                careTips: ["高纤维饮食", "按摩腿部", "适当活动"]
            },
            23: {
                metaphor: "火龙果", emoji: "🥝",
                baby: "听力非常敏锐，能分辨妈妈声音。",
                mom: "腹部快速增大，皮肤瘙痒。",
                dad: "给胎宝宝讲故事。",
                checkup: "常规产检，糖耐筛查（24-28周）。",
                nutrition: "补充必需脂肪酸，促进大脑发育。",
                care: "使用止痒产品缓解皮肤不适。",
                babyIndicators: ["28.9cm", "500g", "119天"],
                momIndicators: ["腹部快速增大", "皮肤瘙痒", "妊娠纹"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["腹部", "皮肤", "体重"],
                keyCheckups: ["糖耐筛查准备"],
                nutritionFocus: "必需脂肪酸",
                careTips: ["讲故事胎教", "止痒护理", "预防妊娠纹"]
            },
            24: {
                metaphor: "玉米", emoji: "🌽",
                baby: "肺部继续发育，开始呼吸练习。",
                mom: "可能出现妊娠纹，避免抓挠。",
                dad: "学习数胎动的方法。",
                checkup: "重点：糖耐量筛查（OGTT）。",
                nutrition: "控制碳水化合物摄入。",
                care: "使用橄榄油按摩预防妊娠纹。",
                babyIndicators: ["30cm", "600g", "112天"],
                momIndicators: ["妊娠纹", "腹部增大", "皮肤瘙痒"],
                babyIndicatorLabels: ["顶臀长", "体重", "距预产期"],
                momIndicatorLabels: ["妊娠纹", "腹部", "皮肤"],
                keyCheckups: ["糖耐量筛查"],
                nutritionFocus: "控制碳水",
                careTips: ["数胎动", "预防妊娠纹", "控制血糖"]
            },
            25: {
                metaphor: "菜花", emoji: "🥦",
                baby: "脂肪快速积累，皮肤仍然皱巴巴。",
                mom: "子宫顶部高出肚脐约5cm。",
                dad: "准备宝宝用品清单。",
                checkup: "常规产检，乙肝、梅毒等传染病复查。",
                nutrition: "补铁补钙，注意营养均衡。",
                care: "开始准备待产包。",
                babyIndicators: ["34.6cm", "680g", "105天"],
                momIndicators: ["宫高5cm+", "腹部增大", "行动不便"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["宫高", "腹部", "行动"],
                keyCheckups: ["传染病复查"],
                nutritionFocus: "铁+钙",
                careTips: ["准备待产包", "选购婴儿用品", "继续营养补充"]
            },
            26: {
                metaphor: "香瓜", emoji: "🍈",
                baby: "眼睛可以睁开，有睫毛了。",
                mom: "可能出现坐骨神经痛，耻骨疼痛。",
                dad: "帮助按摩，缓解疼痛。",
                checkup: "常规产检，胎位检查。",
                nutrition: "多摄入蛋白质，利于胎儿发育。",
                care: "避免突然动作，防止抽筋。",
                babyIndicators: ["35.6cm", "760g", "98天"],
                momIndicators: ["坐骨神经痛", "耻骨痛", "抽筋"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["疼痛", "耻骨", "抽筋"],
                keyCheckups: ["胎位检查"],
                nutritionFocus: "蛋白质",
                careTips: ["按摩缓解疼痛", "避免突然动作", "补充钙镁"]
            },
            27: {
                metaphor: "卷心菜", emoji: "🥬",
                baby: "大脑快速发育，形成自己的睡眠周期。",
                mom: "进入孕晚期，不适感可能增加。",
                dad: "了解分娩征兆和应对方法。",
                checkup: "常规产检，28周后每两周一次。",
                nutrition: "补充DHA，继续补铁补钙。",
                care: "准备好医院路线和急诊电话。",
                babyIndicators: ["36.4cm", "875g", "91天"],
                momIndicators: ["进入孕晚期", "腹部沉重", "不适感增加"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["孕期阶段", "腹部", "舒适度"],
                keyCheckups: ["每两周产检"],
                nutritionFocus: "DHA+铁+钙",
                careTips: ["了解分娩征兆", "准备路线", "准备好待产包"]
            },
            28: {
                metaphor: "茄子", emoji: "🍆",
                baby: "可以进行完整的呼吸运动，眼睛完全睁开。",
                mom: "腹部明显下垂，胎动有力。",
                dad: "陪妻子练习拉玛泽呼吸法。",
                checkup: "重点：开始数胎动，常规产检。",
                nutrition: "控制体重，避免巨大儿。",
                care: "注意数胎动，每天3次。",
                babyIndicators: ["37.6cm", "1000g", "84天"],
                momIndicators: ["胎动有力", "腹部下垂", "行动困难"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["胎动", "腹部", "行动"],
                keyCheckups: ["开始数胎动"],
                nutritionFocus: "控制体重",
                careTips: ["数胎动", "练习呼吸法", "准备分娩"]
            },
            29: {
                metaphor: "西兰花", emoji: "🥦",
                baby: "肌肉和肺部继续成熟，头部变大。",
                mom: "可能出现胃灼热、腿部抽筋。",
                dad: "帮助按摩腿部和脚部。",
                checkup: "常规产检，胎位确认。",
                nutrition: "少食多餐，缓解胃部不适。",
                care: "左侧卧位休息，避免仰卧。",
                babyIndicators: ["38cm", "1150g", "77天"],
                momIndicators: ["胃灼热", "腿抽筋", "睡眠困难"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["胃部", "腿部", "睡眠"],
                keyCheckups: ["胎位确认"],
                nutritionFocus: "少食多餐",
                careTips: ["按摩腿部", "左侧卧位", "缓解胃灼热"]
            },
            30: {
                metaphor: "南瓜", emoji: "🎃",
                baby: "大脑和神经系统发育完善。",
                mom: "子宫顶高出肚脐约10cm，呼吸困难。",
                dad: "学习新生儿护理知识。",
                checkup: "常规产检，复查血尿常规。",
                nutrition: "增加铁储备，预防产后贫血。",
                care: "准备婴儿用品，清洗消毒。",
                babyIndicators: ["39cm", "1320g", "70天"],
                momIndicators: ["呼吸困难", "胃灼热", "睡眠差"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["呼吸", "胃部", "睡眠"],
                keyCheckups: ["血尿常规"],
                nutritionFocus: "铁储备",
                careTips: ["学习护理", "准备用品", "多休息"]
            },
            31: {
                metaphor: "葡萄柚", emoji: "🍊",
                baby: "五种感觉完全发育，能够感知光线。",
                mom: "可能出现假性宫缩，不必紧张。",
                dad: "确认分娩医院和交通方式。",
                checkup: "常规产检，胎位检查。",
                nutrition: "继续补充DHA，促进大脑发育。",
                care: "记录宫缩频率，辨别真假宫缩。",
                babyIndicators: ["40cm", "1500g", "63天"],
                momIndicators: ["假性宫缩", "胎动明显", "情绪紧张"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["宫缩", "胎动", "情绪"],
                keyCheckups: ["胎位检查"],
                nutritionFocus: "DHA继续",
                careTips: ["辨别真假宫缩", "确认医院", "保持放松"]
            },
            32: {
                metaphor: "椰子", emoji: "🥥",
                baby: "大部分器官成熟，胎位通常固定。",
                mom: "腹部更加沉重，水肿可能加重。",
                dad: "准备待产包，检查是否齐全。",
                checkup: "重点：B超评估胎儿发育情况。",
                nutrition: "低盐饮食，缓解水肿。",
                care: "适当抬高腿部，缓解水肿。",
                babyIndicators: ["42cm", "1700g", "56天"],
                momIndicators: ["水肿", "腹部沉重", "行动困难"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["水肿", "腹部", "行动"],
                keyCheckups: ["B超评估"],
                nutritionFocus: "低盐饮食",
                careTips: ["待产包准备", "抬腿消肿", "定期产检"]
            },
            33: {
                metaphor: "菠萝", emoji: "🍍",
                baby: "骨骼变硬，胎儿姿势更加蜷缩。",
                mom: "可能出现呼吸困难，睡眠不好。",
                dad: "陪伴妻子，改善睡眠环境。",
                checkup: "常规产检，NST（胎心监护）开始。",
                nutrition: "补充钙质，促进胎儿骨骼发育。",
                care: "使用孕妇枕改善睡眠。",
                babyIndicators: ["43.7cm", "1920g", "49天"],
                momIndicators: ["呼吸困难", "睡眠差", "疲劳"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["呼吸", "睡眠", "精力"],
                keyCheckups: ["NST胎心监护"],
                nutritionFocus: "钙质",
                careTips: ["使用孕妇枕", "改善睡眠", "左侧卧位"]
            },
            34: {
                metaphor: "哈密瓜", emoji: "🍈",
                baby: "免疫系统发育，中枢神经系统成熟。",
                mom: "宫缩可能更频繁，但不规律。",
                dad: "了解临产征兆，准备随时入院。",
                checkup: "常规产检，GBS筛查（B族链球菌）。",
                nutrition: "继续均衡营养，控制体重。",
                care: "准备好所有产检资料和证件。",
                babyIndicators: ["45cm", "2150g", "42天"],
                momIndicators: ["宫缩频繁", "腹部下坠", "见红"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["宫缩", "腹部", "临产征兆"],
                keyCheckups: ["GBS筛查"],
                nutritionFocus: "均衡营养",
                careTips: ["了解临产征兆", "准备证件", "保持联系"]
            },
            35: {
                metaphor: "白兰瓜", emoji: "🍈",
                baby: "肾脏发育完全，肝脏开始处理废物。",
                mom: "胃部受压严重，少食多餐。",
                dad: "学习产后照顾妻子的知识。",
                checkup: "常规产检，评估胎位。",
                nutrition: "少食多餐，保证营养摄入。",
                care: "注意休息，避免过度劳累。",
                babyIndicators: ["46.2cm", "2380g", "35天"],
                momIndicators: ["胃部不适", "少食多餐", "疲劳"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["胃部", "食欲", "精力"],
                keyCheckups: ["胎位评估"],
                nutritionFocus: "少食多餐",
                careTips: ["学习产后护理", "多休息", "保持好心情"]
            },
            36: {
                metaphor: "甜瓜", emoji: "🍈",
                baby: "肺部发育成熟，随时可能出生。",
                mom: "胎头入盆，呼吸顺畅，胃部不适缓解。",
                dad: "确认紧急联系方式，保持手机畅通。",
                checkup: "重点：胎心监护（NST）每周一次。",
                nutrition: "继续补铁补钙，为分娩储备。",
                care: "准备好待产包，随时待命。",
                babyIndicators: ["47cm", "2620g", "28天"],
                momIndicators: ["胎头入盆", "呼吸顺畅", "准备分娩"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["胎位", "呼吸", "准备状态"],
                keyCheckups: ["NST每周"],
                nutritionFocus: "铁+钙储备",
                careTips: ["待产包准备", "保持联系", "注意临产征兆"]
            },
            37: {
                metaphor: "木瓜", emoji: "🍈",
                baby: "足月了！各器官发育完全，可以出生。",
                mom: "可能出现见红、宫缩等临产征兆。",
                dad: "随时待命，准备入院。",
                checkup: "评估分娩方式，确认胎位。",
                nutrition: "保持均衡饮食，为分娩储备能量。",
                care: "注意临产征兆：见红、破水、规律宫缩。",
                babyIndicators: ["48cm", "2860g", "21天"],
                momIndicators: ["见红", "规律宫缩", "随时分娩"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["临产征兆", "宫缩", "准备状态"],
                keyCheckups: ["分娩评估"],
                nutritionFocus: "储备能量",
                careTips: ["注意临产征兆", "随时待命", "保持放松"]
            },
            38: {
                metaphor: "芒果", emoji: "🥭",
                baby: "继续成熟，指甲覆盖指尖末端。",
                mom: "宫缩可能更规律，分娩临近。",
                dad: "再次确认医院和交通路线。",
                checkup: "评估胎儿状态和胎位。",
                nutrition: "少量多餐，保证体力。",
                care: "出现规律宫缩（5分钟一次）及时就医。",
                babyIndicators: ["49cm", "3080g", "14天"],
                momIndicators: ["规律宫缩", "见红", "紧张"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["宫缩", "见红", "情绪"],
                keyCheckups: ["胎儿评估"],
                nutritionFocus: "保证体力",
                careTips: ["确认路线", "准备入院", "记录宫缩"]
            },
            39: {
                metaphor: "西瓜", emoji: "🍉",
                baby: "完全成熟，皮下脂肪丰富。",
                mom: "可能有轻微宫缩，等待分娩。",
                dad: "陪伴，给予精神支持。",
                checkup: "临产前检查，确认分娩计划。",
                nutrition: "清淡易消化饮食。",
                care: "保持放松，准备迎接宝宝。",
                babyIndicators: ["50cm", "3250g", "7天"],
                momIndicators: ["宫缩", "见红或破水", "等待"],
                babyIndicatorLabels: ["身长", "体重", "距预产期"],
                momIndicatorLabels: ["宫缩", "破水", "状态"],
                keyCheckups: ["临产前检查"],
                nutritionFocus: "清淡易消化",
                careTips: ["陪伴支持", "保持放松", "随时就医"]
            },
            40: {
                metaphor: "西瓜", emoji: "🍉",
                baby: "发育完全，等待出生的时机。",
                mom: "随时可能分娩，做好准备。",
                dad: "陪伴待产，给予支持和鼓励。",
                checkup: "评估宫颈成熟度，确认分娩时机。",
                nutrition: "高热量、易消化食物储备体力。",
                care: "出现规律宫缩、见红或破水立即就医。",
                babyIndicators: ["51cm", "3400g", "预产期"],
                momIndicators: ["规律宫缩", "见红", "破水"],
                babyIndicatorLabels: ["身长", "体重", "预产期"],
                momIndicatorLabels: ["宫缩", "见红", "破水"],
                keyCheckups: ["宫颈评估"],
                nutritionFocus: "高热量",
                careTips: ["陪伴支持", "随时就医", "准备迎接宝宝"]
            },
            41: {
                metaphor: "西瓜", emoji: "🍉",
                baby: "过期妊娠，继续等待自然分娩或引产。",
                mom: "超过预产期，医生会密切监测。",
                dad: "听从医生建议，做好心理准备。",
                checkup: "密切监测胎心、羊水情况。",
                nutrition: "遵医嘱，可能需要引产准备。",
                care: "保持耐心，等待宝宝到来。",
                babyIndicators: ["51cm", "3500g", "已过期"],
                momIndicators: ["已过期", "密切监测", "等待分娩"],
                babyIndicatorLabels: ["身长", "体重", "状态"],
                momIndicatorLabels: ["孕期", "监测", "状态"],
                keyCheckups: ["胎心监测", "羊水评估", "引产评估"],
                nutritionFocus: "遵医嘱",
                careTips: ["保持耐心", "听从医生", "随时准备"]
            }
        };

        // ==================== 产检关键节点定义 ====================
        const checkupMilestones = [
            { week: 6, title: "第一次B超确认", desc: "确认宫内妊娠，看到胎心搏动", type: "completed" },
            { week: 12, title: "NT检查 & 建档", desc: "早期排畸检查，建立孕产妇保健手册", type: "completed" },
            { week: 16, title: "唐氏筛查", desc: "中期排畸，评估胎儿染色体异常风险", type: "completed" },
            { week: 20, title: "大排畸", desc: "系统超声检查，全面排查胎儿结构畸形", type: "completed" },
            { week: 24, title: "糖耐量筛查", desc: "筛查妊娠期糖尿病", type: "upcoming" },
            { week: 28, title: "常规产检", desc: "开始数胎动，监测胎位", type: "upcoming" },
            { week: 32, title: "B超评估", desc: "评估胎儿发育情况，胎位固定", type: "upcoming" },
            { week: 36, title: "胎心监护", desc: "NST每周一次，确认胎儿状态", type: "upcoming" },
            { week: 40, title: "临产评估", desc: "确认分娩方式，随时准备分娩", type: "upcoming" }
        ];

        // ==================== DOM 元素 ====================
        const weekSelector = document.getElementById('weekSelector');
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        const visualEmoji = document.getElementById('visualEmoji');
        const visualTitle = document.getElementById('visualTitle');
        const visualDesc = document.getElementById('visualDesc');
        const visualContent = document.getElementById('visualContent');
        const periodBadge = document.getElementById('periodBadge');
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        // weightCanvas 已移除，体重图表改用 Chart.js (#trendChart)
        const navItems = document.querySelectorAll('.nav-item');
        const babyCard = document.getElementById('babyCard');
        const momCard = document.getElementById('momCard');
        const dadTaskCard = document.getElementById('dadTaskCard');
        
        // ==================== 当前状态 ====================
        let currentWeek = 12;
        let currentView = 'baby';

        // ==================== 初始化孕周选择器 ====================
        function initWeekSelector() {
            weekSelector.innerHTML = '';
            for (let i = 1; i <= 41; i++) {
                const weekItem = document.createElement('div');
                weekItem.className = 'week-item' + (i === currentWeek ? ' active' : '');
                weekItem.dataset.week = i;
                weekItem.textContent = `孕${i}周`;
                weekSelector.appendChild(weekItem);
            }
            
            // 滚动到当前周
            setTimeout(() => {
                const activeItem = weekSelector.querySelector('.week-item.active');
                if (activeItem) {
                    activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            }, 100);
        }

        // ==================== 更新日期显示 ====================
        function updateDate() {
            const now = new Date();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
            const weekday = weekdays[now.getDay()];
            document.getElementById('dateBadge').textContent = `今天 ${month}月${day}日 ${weekday}`;
        }
        updateDate();

        // ==================== 获取孕期阶段 ====================
        function getPeriod(week) {
            if (week <= 12) return { name: '孕早期', class: 'early' };
            if (week <= 27) return { name: '孕中期', class: 'mid' };
            return { name: '孕晚期', class: 'late' };
        }

        // ==================== 更新Hero内容 ====================
        function updateHeroContent() {
            const weekInfo = weekData[currentWeek];
            const period = getPeriod(currentWeek);
            const viewData = currentView === 'baby' ? 
                { indicators: weekInfo.babyIndicators, labels: weekInfo.babyIndicatorLabels } :
                { indicators: weekInfo.momIndicators, labels: weekInfo.momIndicatorLabels };
            
            // 动画过渡
            visualContent.classList.add('transitioning');
            visualEmoji.classList.add('emoji-transition');
            
            setTimeout(() => {
                // 更新果蔬emoji
                visualEmoji.textContent = weekInfo.emoji;
                
                // 更新标题和描述
                const titleText = currentView === 'baby' ? 
                    `${weekInfo.metaphor}大小的宝宝` : 
                    `${weekInfo.metaphor}大小的孕期`;
                visualTitle.textContent = titleText;
                visualDesc.textContent = currentView === 'baby' ? weekInfo.baby : weekInfo.mom;
                
                // 更新周期标签
                periodBadge.textContent = period.name;
                periodBadge.className = `period-badge ${period.class}`;
                
                // 更新指标
                document.getElementById('ind1Label').textContent = viewData.labels[0];
                document.getElementById('ind2Label').textContent = viewData.labels[1];
                document.getElementById('ind3Label').textContent = viewData.labels[2];
                document.getElementById('ind1').textContent = viewData.indicators[0];
                document.getElementById('ind2').textContent = viewData.indicators[1];
                document.getElementById('ind3').textContent = viewData.indicators[2];
                
                visualContent.classList.remove('transitioning');
                visualEmoji.classList.remove('emoji-transition');
            }, 200);
        }

        // ==================== 更新科普卡片 ====================
        function updateInfoCards() {
            const weekInfo = weekData[currentWeek];
            
            // 宝宝卡片动画
            babyCard.classList.add('transitioning');
            momCard.classList.add('transitioning');
            
            setTimeout(() => {
                // 更新宝宝卡片
                const babyList = document.getElementById('babyInfoList');
                babyList.innerHTML = `
                    <li><span class="bullet"></span><span>${weekInfo.baby}</span></li>
                    <li><span class="bullet"></span><span>本周重点：<span class="highlight">${weekInfo.nutritionFocus}</span></span></li>
                `;
                
                // 更新妈妈卡片
                const momList = document.getElementById('momInfoList');
                momList.innerHTML = `
                    <li><span class="bullet"></span><span>${weekInfo.mom}</span></li>
                    <li><span class="bullet"></span><span>本周产检：${weekInfo.checkup}</span></li>
                `;
                
                babyCard.classList.remove('transitioning');
                momCard.classList.remove('transitioning');
            }, 200);
        }

        // ==================== 更新产检时间轴 ====================
        function updateCheckupTimeline() {
            const timeline = document.getElementById('checkupTimeline');
            const weekInfo = weekData[currentWeek];
            
            let html = '';
            
            // 检查是否有当周产检
            const hasCurrentCheckup = checkupMilestones.find(m => m.week === currentWeek);
            
            // 添加当前周之前的已完成项目
            checkupMilestones.forEach(milestone => {
                let status = 'upcoming';
                if (milestone.week < currentWeek) status = 'completed';
                else if (milestone.week === currentWeek) status = 'current';
                
                // 只显示当前周及之前的项目，或者未来2个关键项目
                if (milestone.week <= currentWeek || (milestone.week > currentWeek && milestone.week <= currentWeek + 2)) {
                    html += `
                        <div class="timeline-item ${status}">
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <div class="timeline-date">孕${milestone.week}周</div>
                                <div class="timeline-title">${milestone.title}</div>
                                <div class="timeline-desc">${milestone.desc}</div>
                            </div>
                        </div>
                    `;
                }
            });
            
            // 添加本周知识库的产检信息
            if (weekInfo.keyCheckups && weekInfo.keyCheckups.length > 0) {
                html += `
                    <div class="timeline-item current">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <div class="timeline-date">孕${currentWeek}周（本周）</div>
                            <div class="timeline-title">${weekInfo.keyCheckups.join('、')}</div>
                            <div class="timeline-desc">${weekInfo.checkup}</div>
                        </div>
                    </div>
                `;
            } else if (currentWeek < 40) {
                html += `
                    <div class="timeline-item current">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <div class="timeline-date">孕${currentWeek}周（本周）</div>
                            <div class="timeline-title">日常监测</div>
                            <div class="timeline-desc">${weekInfo.checkup}</div>
                        </div>
                    </div>
                `;
            }
            
            timeline.innerHTML = html;
        }

        // ==================== 更新护理Tab ====================
        function updateCareTab() {
            const weekInfo = weekData[currentWeek];
            const careList = document.getElementById('careInfoList');
            const period = getPeriod(currentWeek);
            
            document.getElementById('careTitle').textContent = `${period.name}护理建议`;
            
            let careHtml = '';
            weekInfo.careTips.forEach(tip => {
                careHtml += `<li><span class="bullet"></span><span>${tip}</span></li>`;
            });
            
            // 根据孕周添加通用护理建议
            if (currentWeek <= 12) {
                careHtml += `<li><span class="bullet"></span><span>选择<span class="highlight">宽松舒适</span>的内衣</span></li>`;
                careHtml += `<li><span class="bullet"></span><span>使用温和的护肤品</span></li>`;
            } else if (currentWeek <= 27) {
                careHtml += `<li><span class="bullet"></span><span>注意<span class="highlight">补铁补钙</span></span></li>`;
                careHtml += `<li><span class="bullet"></span><span>开始使用托腹带</span></li>`;
            } else {
                careHtml += `<li><span class="bullet"></span><span>准备好<span class="highlight">待产包</span></span></li>`;
                careHtml += `<li><span class="bullet"></span><span>了解临产征兆</span></li>`;
            }
            
            careList.innerHTML = careHtml;
        }

        // ==================== 更新营养Tab ====================
        function updateNutritionTab() {
            const weekInfo = weekData[currentWeek];
            const nutritionList = document.getElementById('nutritionList');
            const period = getPeriod(currentWeek);
            
            let nutritionHtml = '';
            
            // 根据孕周侧重点
            if (currentWeek <= 12) {
                nutritionHtml += `<li><span class="bullet"></span><span>继续补充<span class="highlight">叶酸</span>，预防神经管缺陷</span></li>`;
                nutritionHtml += `<li><span class="bullet"></span><span>摄入<span class="highlight">复合维生素</span></span></li>`;
            } else if (currentWeek <= 27) {
                nutritionHtml += `<li><span class="bullet"></span><span>增加<span class="highlight">钙质</span>摄入（牛奶、豆制品）</span></li>`;
                nutritionHtml += `<li><span class="bullet"></span><span>补充<span class="highlight">铁元素</span>，预防贫血</span></li>`;
            } else {
                nutritionHtml += `<li><span class="bullet"></span><span>控制<span class="highlight">碳水化合物</span>摄入</span></li>`;
                nutritionHtml += `<li><span class="bullet"></span><span>增加<span class="highlight">膳食纤维</span>，预防便秘</span></li>`;
            }
            
            // 添加本周具体营养建议
            nutritionHtml += `<li><span class="bullet"></span><span>${weekInfo.nutrition}</span></li>`;
            
            nutritionList.innerHTML = nutritionHtml;
        }

        // ==================== 更新准爸爸任务 ====================
        function updateDadTask() {
            const weekInfo = weekData[currentWeek];
            const dadTaskList = document.getElementById('dadTaskList');
            
            document.getElementById('dadSubtitle').textContent = `孕${currentWeek}周：${weekInfo.dad}`;
            
            // 生成任务列表
            const tasks = [
                { text: weekInfo.dad, time: "本周" },
                { text: "每天至少15分钟倾听时间", time: "15分钟" },
                { text: "主动承担家务，让她多休息", time: "日常" }
            ];
            
            let html = '';
            tasks.forEach(task => {
                html += `
                    <li class="dad-task-item">
                        <div class="task-checkbox" onclick="toggleTask(this)"></div>
                        <span class="task-text">${task.text}</span>
                        <span class="task-time">${task.time}</span>
                    </li>
                `;
            });
            
            // 动画过渡
            dadTaskCard.classList.add('transitioning');
            setTimeout(() => {
                dadTaskList.innerHTML = html;
                dadTaskCard.classList.remove('transitioning');
            }, 200);
        }

        // ==================== 绘制体重图表（已替换为 Chart.js 版本） ====================
        // drawWeightChart 已弃用，由 initWeightChart 替代

        // ==================== 孕周选择器事件 ====================
        weekSelector.addEventListener('click', (e) => {
            const weekItem = e.target.closest('.week-item');
            if (!weekItem) return;
            
            // 更新选中状态
            document.querySelectorAll('.week-item').forEach(item => item.classList.remove('active'));
            weekItem.classList.add('active');
            
            // 获取并更新数据
            currentWeek = parseInt(weekItem.dataset.week);
            
            // 更新所有内容
            updateHeroContent();
            updateInfoCards();
            updateCheckupTimeline();
            updateCareTab();
            updateNutritionTab();
            updateDadTask();
            updateKickWeekAdvice();
            updateMusicWeekAdvice();
            updateKickWeekAdvice();
            const scanWeekInput = document.getElementById('scanWeek');
            if (scanWeekInput) scanWeekInput.value = currentWeek;
            
            // 如果当前在体重tab，重新初始化体重模块
            if (document.getElementById('tab-weight').classList.contains('active')) {
                setTimeout(() => initWeightApp(), 100);
            }
        });

        // ==================== 双视角切换 ====================
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentView = btn.dataset.view;
                updateHeroContent();
                updateInfoCards();
            });
        });

        // ==================== Tab 切换 ====================
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const tabId = btn.dataset.tab;
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `tab-${tabId}`) {
                        content.classList.add('active');
                    }
                });
                
                // 如果切换到体重tab，初始化体重模块
                if (tabId === 'weight') {
                    setTimeout(() => initWeightApp(), 100);
                }
                if (tabId === 'music') {
                    setTimeout(() => initMusicApp(), 50);
                }
                if (tabId === 'kick') {
                    setTimeout(() => initKickApp(), 50);
                }
                if (tabId === 'checkup') {
                    setTimeout(() => initCheckupTools(), 50);
                }
            });
        });



        // ==================== 胎教音乐模块 ====================
        const musicTracks = [
            { name: '舒缓摇篮曲', emoji: '🌙', tag: '睡前', meta: '低音量 · 慢节奏 · 适合睡前', desc: '柔和三拍子旋律，适合放松和稳定情绪。', type: 'lullaby', notes: [392, 440, 494, 440, 392, 330, 392, 440, 392, 330, 294, 330] },
            { name: '莫扎特风轻音乐', emoji: '🎻', tag: '白天', meta: '轻快但不刺激 · 适合午后', desc: '明亮、平稳的古典风格音型，避免过强节奏。', type: 'melody', notes: [523, 587, 659, 587, 523, 587, 659, 784, 659, 587, 523, 494] },
            { name: '自然白噪音', emoji: '🌿', tag: '放松', meta: '雨声质感 · 无旋律干扰', desc: '类似轻雨和空气流动，更适合妈妈冥想休息。', type: 'noise', notes: [] },
            { name: '妈妈心跳节奏', emoji: '💗', tag: '安抚', meta: '稳定节律 · 低频轻拍', desc: '模拟温和心跳节奏，音量要更低。', type: 'heartbeat', notes: [130, 130] }
        ];
        let selectedMusicIndex = 0;
        let musicCtx = null;
        let musicTimer = null;
        let musicStartTime = 0;
        let musicDurationSec = 20 * 60;
        let musicNodes = [];
        let musicPlaying = false;

        function formatMusicTime(sec) {
            const m = Math.floor(sec / 60).toString().padStart(2, '0');
            const s = Math.floor(sec % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        function renderMusicTracks() {
            const list = document.getElementById('musicTrackList');
            if (!list) return;
            list.innerHTML = musicTracks.map((track, index) => `
                <div class="track-item ${index === selectedMusicIndex ? 'active' : ''}" data-music-index="${index}">
                    <div class="track-emoji">${track.emoji}</div>
                    <div class="track-info">
                        <div class="track-name">${track.name}</div>
                        <div class="track-desc">${track.desc}</div>
                    </div>
                    <div class="track-tag">${track.tag}</div>
                </div>
            `).join('');
            list.querySelectorAll('.track-item').forEach(item => {
                item.addEventListener('click', () => selectMusicTrack(parseInt(item.dataset.musicIndex, 10)));
            });
        }

        function selectMusicTrack(index) {
            selectedMusicIndex = index;
            const track = musicTracks[selectedMusicIndex];
            document.getElementById('musicNowName').textContent = track.name;
            document.getElementById('musicNowMeta').textContent = track.meta;
            document.getElementById('musicCover').textContent = track.emoji;
            renderMusicTracks();
            if (musicPlaying) startMusic(true);
        }

        function updateMusicWeekAdvice() {
            const badge = document.getElementById('musicWeekBadge');
            const advice = document.getElementById('musicWeekAdvice');
            if (!badge || !advice) return;
            badge.textContent = `🎧 孕${currentWeek}周建议`;
            if (currentWeek < 16) {
                advice.textContent = '孕早期以妈妈放松为主，不需要追求“训练效果”。可以听轻柔音乐、哼唱或读短句，重点是休息和情绪稳定。';
            } else if (currentWeek < 28) {
                advice.textContent = '孕中期宝宝听觉逐步发育，适合选择柔和、节奏平稳的音乐。每次 10–20 分钟，音量保持舒适，不要把播放器贴在肚皮上。';
            } else {
                advice.textContent = '孕晚期可以固定在睡前或胎动活跃时播放同一类柔和音乐，形成规律陪伴。若妈妈觉得吵、累或胎动明显异常，应停止并休息。';
            }
        }

        function connectNode(node) {
            musicNodes.push(node);
            return node;
        }

        function scheduleTone(freq, start, duration, gainValue = 0.045, wave = 'sine') {
            const osc = connectNode(musicCtx.createOscillator());
            const gain = connectNode(musicCtx.createGain());
            osc.type = wave;
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.0001, start);
            gain.gain.linearRampToValueAtTime(gainValue, start + 0.04);
            gain.gain.linearRampToValueAtTime(0.0001, start + duration);
            osc.connect(gain).connect(musicCtx.destination);
            osc.start(start);
            osc.stop(start + duration + 0.03);
        }

        function playMelodyLoop(track) {
            const now = musicCtx.currentTime;
            const beat = track.type === 'melody' ? 0.7 : 0.9;
            for (let loop = 0; loop < 90; loop++) {
                track.notes.forEach((freq, i) => {
                    const t = now + loop * track.notes.length * beat + i * beat;
                    if (t - now < musicDurationSec) {
                        scheduleTone(freq, t, beat * 0.82, track.type === 'melody' ? 0.035 : 0.04, 'sine');
                        scheduleTone(freq / 2, t, beat * 0.82, 0.018, 'triangle');
                    }
                });
            }
        }

        function playNoise() {
            const bufferSize = musicCtx.sampleRate * 2;
            const buffer = musicCtx.createBuffer(1, bufferSize, musicCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.18;
            const source = connectNode(musicCtx.createBufferSource());
            const filter = connectNode(musicCtx.createBiquadFilter());
            const gain = connectNode(musicCtx.createGain());
            source.buffer = buffer;
            source.loop = true;
            filter.type = 'lowpass';
            filter.frequency.value = 900;
            gain.gain.value = 0.035;
            source.connect(filter).connect(gain).connect(musicCtx.destination);
            source.start();
        }

        function playHeartbeat() {
            const now = musicCtx.currentTime;
            for (let i = 0; i < musicDurationSec; i += 1.05) {
                scheduleTone(120, now + i, 0.12, 0.055, 'sine');
                scheduleTone(95, now + i + 0.18, 0.14, 0.045, 'sine');
            }
        }

        function stopMusic() {
            musicPlaying = false;
            clearInterval(musicTimer);
            musicTimer = null;
            musicNodes.forEach(node => { try { node.stop && node.stop(); } catch(e) {} try { node.disconnect && node.disconnect(); } catch(e) {} });
            musicNodes = [];
            document.getElementById('musicPlayBtn') && (document.getElementById('musicPlayBtn').textContent = '▶ 播放 20 分钟');
            document.getElementById('musicCover') && document.getElementById('musicCover').classList.remove('playing');
        }

        function startMusic(restart = false) {
            if (musicPlaying || restart) stopMusic();
            if (!musicCtx) musicCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (musicCtx.state === 'suspended') musicCtx.resume();
            const track = musicTracks[selectedMusicIndex];
            musicPlaying = true;
            musicStartTime = Date.now();
            document.getElementById('musicPlayBtn').textContent = '⏸ 播放中';
            document.getElementById('musicCover').classList.add('playing');
            document.getElementById('musicDuration').textContent = formatMusicTime(musicDurationSec);
            if (track.type === 'noise') playNoise();
            else if (track.type === 'heartbeat') playHeartbeat();
            else playMelodyLoop(track);
            musicTimer = setInterval(() => {
                const elapsed = Math.floor((Date.now() - musicStartTime) / 1000);
                const percent = Math.min(100, elapsed / musicDurationSec * 100);
                document.getElementById('musicElapsed').textContent = formatMusicTime(elapsed);
                document.getElementById('musicProgress').style.width = `${percent}%`;
                if (elapsed >= musicDurationSec) stopMusic();
            }, 300);
        }

        function initMusicApp() {
            updateMusicWeekAdvice();
            renderMusicTracks();
            selectMusicTrack(selectedMusicIndex);
            const playBtn = document.getElementById('musicPlayBtn');
            const stopBtn = document.getElementById('musicStopBtn');
            if (playBtn && !playBtn.dataset.bound) {
                playBtn.dataset.bound = '1';
                playBtn.addEventListener('click', () => musicPlaying ? stopMusic() : startMusic());
            }
            if (stopBtn && !stopBtn.dataset.bound) {
                stopBtn.dataset.bound = '1';
                stopBtn.addEventListener('click', stopMusic);
            }
        }


        // ==================== 数胎动记录器模块 ====================
        const KICK_STORAGE_KEY = 'pregnancyKickRecordsV1';
        let kickCount = 0;
        let kickStartedAt = null;
        let kickTimerInterval = null;

        function getKickRecords() {
            try { return JSON.parse(localStorage.getItem(KICK_STORAGE_KEY) || '[]'); }
            catch(e) { return []; }
        }

        function saveKickRecords(records) {
            localStorage.setItem(KICK_STORAGE_KEY, JSON.stringify(records.slice(-60)));
        }

        function formatKickTime(sec) {
            const m = Math.floor(sec / 60).toString().padStart(2, '0');
            const s = Math.floor(sec % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        function updateKickWeekAdvice() {
            const badge = document.getElementById('kickWeekBadge');
            const advice = document.getElementById('kickWeekAdvice');
            if (!badge || !advice) return;
            badge.textContent = `💓 孕${currentWeek}周提示`;
            if (currentWeek < 20) {
                advice.textContent = '孕20周前多数人还不能稳定感受到胎动，不建议用次数判断宝宝状态。按时产检，有异常腹痛、出血等及时就医。';
            } else if (currentWeek < 28) {
                advice.textContent = '孕20–27周胎动可能逐渐明显，但规律性还不稳定。可以记录感受，不必严格用“每小时几次”给自己压力。';
            } else {
                advice.textContent = '孕28周后适合每天固定时段数胎动。选择宝宝活跃的时间，安静坐下或左侧卧，记录1小时胎动次数。';
            }
        }

        function updateKickStatus() {
            const box = document.getElementById('kickStatusBox');
            const tip = document.getElementById('kickSessionTip');
            if (!box || !tip) return;
            box.className = 'kick-status';
            const elapsed = kickStartedAt ? Math.floor((Date.now() - kickStartedAt) / 1000) : 0;
            if (currentWeek < 28) {
                box.textContent = '当前孕周通常不需要严格数胎动。本页可先作为感受记录；若出现腹痛、出血、胎动突然异常等情况，请及时咨询医生。';
                tip.textContent = '孕28周后再规律计数更有参考意义。';
                return;
            }
            if (!kickStartedAt && kickCount === 0) {
                box.textContent = '建议每天选择相近时间记录1小时。1小时≥3次通常较安心；若明显少于平时，休息或进食后复数，仍异常请及时联系医生。';
                tip.textContent = '点击“开始计时”，每感到一次独立胎动就点 +1。';
            } else if (kickCount >= 3) {
                box.classList.add('good');
                box.textContent = `本次已记录 ${kickCount} 次，达到常用的1小时参考目标。继续观察到1小时后保存，会更完整。`;
                tip.textContent = '已达到参考目标，继续完成本次1小时记录。';
            } else if (elapsed >= 3600 && kickCount < 3) {
                box.classList.add('warn');
                box.textContent = '本次1小时少于3次。建议先休息、进食或喝水后再数1小时；若仍少、明显低于平时或胎动消失，请尽快联系医生。';
                tip.textContent = '记录偏少，建议复数并关注和平时是否明显不同。';
            } else {
                box.textContent = `已记录 ${kickCount} 次。继续安静观察，尽量完成1小时记录后再保存。`;
                tip.textContent = '每次独立胎动点击一次，连续翻滚可按一次活动记录。';
            }
        }

        function renderKickTodayTotal() {
            const el = document.getElementById('kickTodayTotal');
            if (!el) return;
            const today = new Date().toISOString().slice(0, 10);
            const total = getKickRecords().filter(r => r.date === today).reduce((sum, r) => sum + Number(r.count || 0), 0) + kickCount;
            el.textContent = total;
        }

        function renderKickTimer() {
            const timer = document.getElementById('kickTimer');
            if (!timer) return;
            const sec = kickStartedAt ? Math.floor((Date.now() - kickStartedAt) / 1000) : 0;
            timer.textContent = formatKickTime(sec);
            if (sec >= 3600) {
                clearInterval(kickTimerInterval);
                kickTimerInterval = null;
                const startBtn = document.getElementById('kickStartBtn');
                if (startBtn) startBtn.textContent = '已满1小时';
            }
            updateKickStatus();
        }

        function renderKickHistory() {
            const list = document.getElementById('kickHistoryList');
            if (!list) return;
            const records = getKickRecords().slice(-6).reverse();
            if (!records.length) {
                list.innerHTML = '<div class="empty-tip" style="padding:24px 10px;">暂无记录，完成一次计数后会显示在这里</div>';
                return;
            }
            list.innerHTML = records.map(r => {
                const mins = Math.max(1, Math.round((r.duration || 0) / 60));
                const status = r.count >= 3 ? '达到参考' : '偏少需观察';
                return `<div class="kick-history-item">
                    <div><div class="kick-history-date">孕${r.week}周 · ${r.date}</div><div class="kick-history-meta">${r.time} · ${mins}分钟 · ${status}</div></div>
                    <div class="kick-history-count">${r.count}次</div>
                </div>`;
            }).join('');
        }

        function startKickTimer() {
            if (!kickStartedAt) kickStartedAt = Date.now();
            const btn = document.getElementById('kickStartBtn');
            if (btn) btn.textContent = '计时中';
            clearInterval(kickTimerInterval);
            kickTimerInterval = setInterval(renderKickTimer, 1000);
            renderKickTimer();
        }

        function addKickCount() {
            if (!kickStartedAt) startKickTimer();
            kickCount += 1;
            const val = document.getElementById('kickCountValue');
            if (val) val.textContent = kickCount;
            renderKickTodayTotal();
            updateKickStatus();
        }

        function resetKickSession() {
            kickCount = 0;
            kickStartedAt = null;
            clearInterval(kickTimerInterval);
            kickTimerInterval = null;
            document.getElementById('kickCountValue').textContent = '0';
            document.getElementById('kickTimer').textContent = '00:00';
            document.getElementById('kickStartBtn').textContent = '开始计时';
            renderKickTodayTotal();
            updateKickStatus();
        }

        function saveKickSession() {
            if (kickCount <= 0) {
                updateKickStatus();
                const box = document.getElementById('kickStatusBox');
                if (box) { box.className = 'kick-status warn'; box.textContent = '还没有记录胎动次数，先点击“+1 动了一下”再保存。'; }
                return;
            }
            const now = new Date();
            const duration = kickStartedAt ? Math.floor((Date.now() - kickStartedAt) / 1000) : 0;
            const records = getKickRecords();
            records.push({
                date: now.toISOString().slice(0, 10),
                time: now.toTimeString().slice(0, 5),
                week: currentWeek,
                count: kickCount,
                duration
            });
            saveKickRecords(records);
            resetKickSession();
            renderKickHistory();
            const box = document.getElementById('kickStatusBox');
            if (box) { box.className = 'kick-status good'; box.textContent = '本次胎动记录已保存 ✅ 建议每天固定时段持续观察趋势。'; }
        }

        function initKickApp() {
            updateKickWeekAdvice();
            renderKickTodayTotal();
            renderKickHistory();
            updateKickStatus();
            const addBtn = document.getElementById('kickAddBtn');
            const startBtn = document.getElementById('kickStartBtn');
            const saveBtn = document.getElementById('kickSaveBtn');
            const resetBtn = document.getElementById('kickResetBtn');
            if (addBtn && !addBtn.dataset.bound) { addBtn.dataset.bound = '1'; addBtn.addEventListener('click', addKickCount); }
            if (startBtn && !startBtn.dataset.bound) { startBtn.dataset.bound = '1'; startBtn.addEventListener('click', startKickTimer); }
            if (saveBtn && !saveBtn.dataset.bound) { saveBtn.dataset.bound = '1'; saveBtn.addEventListener('click', saveKickSession); }
            if (resetBtn && !resetBtn.dataset.bound) { resetBtn.dataset.bound = '1'; resetBtn.addEventListener('click', resetKickSession); }
        }

        // ==================== 准爸爸任务复选框 ====================


        // ==================== 产检表二级页面功能 ====================
        const bscanIndicators = [
            { name: 'BPD 双顶径', tag: '头部横径', text: '胎儿头部左右最宽距离，常用于配合孕周和估重观察生长；单独偏大/偏小需结合头围、腹围和家族体型。' },
            { name: 'HC 头围', tag: '头部发育', text: '反映胎儿头部整体大小，比单看双顶径更稳定；医生会结合孕周曲线判断是否需要复查。' },
            { name: 'AC 腹围', tag: '营养与生长', text: '和胎儿营养储备、体重估算关系密切；偏小常需要关注胎盘功能和生长受限风险。' },
            { name: 'FL 股骨长', tag: '长骨指标', text: '反映下肢长骨发育，可辅助判断孕周和估重；受遗传身高、测量角度影响较大。' },
            { name: 'AFI 羊水指数', tag: '羊水量', text: '用来评估羊水是否过多或过少。常见参考约 5–25cm，但不同医院可能采用不同标准。' },
            { name: 'FHR 胎心率', tag: '胎儿状态', text: '常见胎心率约 110–160次/分。短暂波动可见，持续异常或医生提示异常时应及时处理。' },
            { name: '胎盘位置/成熟度', tag: '分娩风险', text: '关注胎盘是否低置、前置，以及成熟度是否与孕周相符；是否影响分娩方式需医生综合判断。' },
            { name: '胎位', tag: '晚孕重点', text: '孕晚期更重要，头位、臀位、横位会影响分娩计划；胎位固定时间因人而异。' }
        ];
        const scanStorageKey = 'pregnancyBscanRecordsV1';

        function calcHadlockEfw(bpdMm, hcMm, acMm, flMm) {
            const bpd = Number(bpdMm) / 10;
            const hc = Number(hcMm) / 10;
            const ac = Number(acMm) / 10;
            const fl = Number(flMm) / 10;
            if (![bpd, hc, ac, fl].every(v => Number.isFinite(v) && v > 0)) return null;
            const log10 = 1.3596 - 0.00386 * ac * fl + 0.0064 * hc + 0.00061 * bpd * ac + 0.0424 * ac + 0.174 * fl;
            const grams = Math.pow(10, log10);
            if (!Number.isFinite(grams) || grams < 50 || grams > 6500) return null;
            return Math.round(grams);
        }



        const fetalBiometryRef = {
            12:{bpd:21,hc:75,ac:65,fl:8}, 16:{bpd:34,hc:124,ac:105,fl:20}, 20:{bpd:47,hc:175,ac:150,fl:32},
            24:{bpd:61,hc:220,ac:200,fl:44}, 28:{bpd:72,hc:260,ac:240,fl:53}, 32:{bpd:82,hc:300,ac:285,fl:62},
            36:{bpd:90,hc:325,ac:320,fl:70}, 40:{bpd:95,hc:345,ac:350,fl:76}
        };

        function interpolateRef(week, key) {
            const weeks = Object.keys(fetalBiometryRef).map(Number).sort((a,b)=>a-b);
            if (!week || week < weeks[0]) return fetalBiometryRef[weeks[0]][key];
            if (week >= weeks[weeks.length-1]) return fetalBiometryRef[weeks[weeks.length-1]][key];
            for (let i=0;i<weeks.length-1;i++) {
                const a=weeks[i], b=weeks[i+1];
                if (week >= a && week <= b) {
                    const ratio = (week-a)/(b-a);
                    return fetalBiometryRef[a][key] + (fetalBiometryRef[b][key]-fetalBiometryRef[a][key])*ratio;
                }
            }
            return null;
        }

        function normalizeMetricValue(value, unit, metric) {
            const n = Number(value);
            if (!Number.isFinite(n) || n <= 0) return '';
            const u = (unit || '').toLowerCase();
            if (metric === 'afi') return u.includes('mm') ? +(n/10).toFixed(1) : n;
            if (u.includes('cm')) return Math.round(n * 10);
            if (!u && n < 20 && metric !== 'fhr') return Math.round(n * 10);
            return n;
        }

        function extractFirst(text, patterns) {
            for (const re of patterns) {
                const m = text.match(re);
                if (m) return m;
            }
            return null;
        }

        function parseBscanText(text) {
            const t = (text || '').replace(/[：]/g, ':').replace(/[，、]/g, ',').replace(/\s+/g, ' ');
            const weekM = extractFirst(t, [/孕\s*(\d{1,2})\s*(?:周|w|W)(?:\s*[+＋]\s*(\d))?/, /GA\s*[:：]?\s*(\d{1,2})\s*(?:w|W|周)(?:\s*[+＋]\s*(\d))?/, /(\d{1,2})\s*(?:w|W)\s*(?:\+\s*(\d))?/]);
            const grab = (names, metric) => {
                const nameGroup = names.join('|');
                const m = extractFirst(t, [new RegExp('(?:' + nameGroup + ')\\s*[:=：]?\\s*(\\d+(?:\\.\\d+)?)\\s*(mm|cm|毫米|厘米)?','i')]);
                if (!m) return '';
                const unit = (m[2] || '').replace('毫米','mm').replace('厘米','cm');
                return normalizeMetricValue(m[1], unit, metric);
            };
            const afiM = extractFirst(t, [/(?:AFI|羊水指数)\s*[:=：]?\s*(\d+(?:\.\d+)?)\s*(mm|cm|毫米|厘米)?/i, /羊水(?:最大深度|深度)?\s*[:=：]?\s*(\d+(?:\.\d+)?)\s*(mm|cm|毫米|厘米)?/]);
            const fhrM = extractFirst(t, [/(?:FHR|胎心率|胎心)\s*[:=：]?\s*(\d{2,3})\s*(?:次\/分|bpm)?/i]);
            const placentaM = extractFirst(t, [/(胎盘[^,，。；;\n]{0,18})/, /(前壁|后壁|宫底|低置|前置)/]);
            const positionM = extractFirst(t, [/(头位|臀位|横位|枕左前|枕右前|LOA|ROA|RSA|LSA)/i]);
            return {
                week: weekM ? Number(weekM[1]) : '',
                bpd: grab(['BPD','双顶径'], 'bpd'),
                hc: grab(['HC','头围'], 'hc'),
                ac: grab(['AC','腹围'], 'ac'),
                fl: grab(['FL','股骨长','股骨'], 'fl'),
                afi: afiM ? normalizeMetricValue(afiM[1], (afiM[2] || '').replace('毫米','mm').replace('厘米','cm'), 'afi') : '',
                fhr: fhrM ? Number(fhrM[1]) : '',
                placenta: placentaM ? placentaM[1] : '',
                position: positionM ? positionM[1] : ''
            };
        }

        function assessBscanData(data) {
            const week = Number(data.week || document.getElementById('scanWeek')?.value || currentWeek);
            const issues = [];
            const positives = [];
            const suggestions = [];
            let score = 0;
            const checkGrowth = (key, label, value) => {
                const v = Number(value);
                if (!week || !v) return;
                const ref = interpolateRef(week, key);
                if (!ref) return;
                const diff = (v - ref) / ref;
                if (Math.abs(diff) <= 0.12) positives.push(`${label} 与孕${week}周常用参考中位值接近`);
                else if (Math.abs(diff) <= 0.20) { score += 1; issues.push(`${label} 相比孕${week}周参考值${diff > 0 ? '偏大' : '偏小'}，建议结合连续生长趋势观察`); }
                else { score += 2; issues.push(`${label} 与孕${week}周参考差距较明显，建议带报告咨询产检医生`); }
            };
            checkGrowth('bpd', 'BPD双顶径', data.bpd);
            checkGrowth('hc', 'HC头围', data.hc);
            checkGrowth('ac', 'AC腹围', data.ac);
            checkGrowth('fl', 'FL股骨长', data.fl);
            const afi = Number(data.afi);
            if (afi) {
                if (afi >= 8 && afi <= 24) positives.push('AFI 羊水指数在常见参考范围内');
                else if ((afi >= 5 && afi < 8) || (afi > 24 && afi <= 28)) { score += 1; issues.push('AFI 羊水指数临界偏少/偏多，建议按医嘱复查'); }
                else { score += 2; issues.push('AFI 羊水指数明显偏离常见范围，请尽快咨询医生'); }
            }
            const fhr = Number(data.fhr);
            if (fhr) {
                if (fhr >= 110 && fhr <= 160) positives.push('胎心率在常见 110–160 次/分范围内');
                else { score += 2; issues.push('胎心率不在常见 110–160 次/分范围内，若为持续结果请及时联系医生'); }
            }
            const noteText = `${data.placenta || ''} ${data.position || ''} ${document.getElementById('scanNote')?.value || ''}`;
            if (/低置|前置|覆盖|血流|脐血流异常|绕颈\s*[23三二]/.test(noteText)) { score += 2; issues.push('报告文字含“低置/前置/血流异常/绕颈较多”等关键词，需要重点听医生建议'); }
            if (/头位/.test(noteText) && week >= 32) positives.push('孕晚期胎位提示头位，通常有利于顺产评估');
            if (!week) { score += 1; issues.push('未识别到孕周，健康判断会不完整'); }
            if (!data.bpd && !data.hc && !data.ac && !data.fl && !afi && !fhr) { score += 2; issues.push('暂未识别到可评估指标，请检查图片清晰度或粘贴报告文字'); }
            suggestions.push('把本次结果与上一次 B 超对比，看增长趋势比单次数值更重要');
            suggestions.push('若报告明确写有“异常、复查、进一步检查、住院”等字样，请按医生要求处理');
            suggestions.push('如出现腹痛、阴道流血/流水、胎动明显减少等情况，不要只看App判断，应及时就医');
            const level = score >= 3 ? 'attention' : score >= 1 ? 'watch' : 'good';
            const title = level === 'good' ? '整体提示：暂未发现明显异常信号' : level === 'watch' ? '整体提示：有轻微偏离，建议观察/复查' : '整体提示：存在需重点关注的信息';
            return { level, title, positives, issues, suggestions };
        }

        function renderScanRecognition(data, assessment) {
            const grid = document.getElementById('scanRecognizedGrid');
            const box = document.getElementById('scanHealthResult');
            if (grid) {
                const items = [
                    ['孕周', data.week ? `${data.week}周` : '--'], ['BPD', data.bpd ? `${data.bpd}mm` : '--'], ['HC', data.hc ? `${data.hc}mm` : '--'], ['AC', data.ac ? `${data.ac}mm` : '--'],
                    ['FL', data.fl ? `${data.fl}mm` : '--'], ['AFI', data.afi ? `${data.afi}cm` : '--'], ['胎心', data.fhr ? `${data.fhr}次/分` : '--'], ['胎位', data.position || '--']
                ];
                grid.innerHTML = items.map(([k,v]) => `<div class="scan-mini-stat"><div class="scan-mini-label">${k}</div><div class="scan-mini-value">${v}</div></div>`).join('');
                grid.style.display = 'grid';
            }
            if (box) {
                box.className = `scan-health-box ${assessment.level}`;
                box.innerHTML = `<div class="scan-health-title">${assessment.title}</div>
                    ${assessment.positives.length ? `<ul class="scan-health-list">${assessment.positives.slice(0,4).map(x=>`<li>${x}</li>`).join('')}</ul>` : ''}
                    ${assessment.issues.length ? `<ul class="scan-health-list">${assessment.issues.map(x=>`<li>${x}</li>`).join('')}</ul>` : ''}
                    <div style="margin-top:8px;font-weight:800;">建议</div>
                    <ul class="scan-health-list">${assessment.suggestions.map(x=>`<li>${x}</li>`).join('')}</ul>
                    <div class="scan-health-disclaimer">以上为基于报告文字和常见参考范围的辅助提示，不能替代医生诊断；不同医院、设备和孕周校准会有差异。</div>`;
                box.style.display = 'block';
            }
        }

        function applyRecognizedScanData(data) {
            const set = (id, val) => { const el = document.getElementById(id); if (el && val !== '' && val != null) el.value = val; };
            set('scanWeek', data.week); set('scanBpd', data.bpd); set('scanHc', data.hc); set('scanAc', data.ac); set('scanFl', data.fl); set('scanAfi', data.afi); set('scanFhr', data.fhr);
            const note = [data.placenta, data.position].filter(Boolean).join('；');
            if (note) set('scanNote', note);
            const assessment = assessBscanData(data);
            renderScanRecognition(data, assessment);
            return assessment;
        }

        function recognizeScanText() {
            const text = document.getElementById('scanRawText')?.value || '';
            const data = parseBscanText(text);
            applyRecognizedScanData(data);
        }

        function fillScanDemo() {
            const demo = '超声所见：宫内妊娠，孕32周。BPD:82mm，HC:300mm，AC:285mm，FL:62mm。AFI:12cm，FHR:145次/分。胎盘前壁，胎位头位。';
            const raw = document.getElementById('scanRawText');
            if (raw) raw.value = demo;
            recognizeScanText();
        }

        async function handleScanImageUpload(e) {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            const preview = document.getElementById('scanOcrPreview');
            const status = document.getElementById('scanOcrStatus');
            if (preview) { preview.src = URL.createObjectURL(file); preview.style.display = 'block'; }
            if (status) { status.style.display = 'block'; status.textContent = '正在识别图片文字，请保持图片清晰、横向文字无遮挡……'; }
            try {
                if (!window.Tesseract) throw new Error('OCR 引擎未加载');
                const result = await Tesseract.recognize(file, 'chi_sim+eng', { logger: m => {
                    if (status && m.status) status.textContent = `OCR ${m.status}${m.progress ? ' ' + Math.round(m.progress*100) + '%' : ''}`;
                }});
                const text = result?.data?.text || '';
                const raw = document.getElementById('scanRawText');
                if (raw) raw.value = text.trim();
                if (status) status.textContent = text.trim() ? '识别完成，已自动填入并生成健康提示。' : '未识别到文字，请换一张更清晰的图片或手动粘贴报告文字。';
                recognizeScanText();
            } catch (err) {
                if (status) status.textContent = '当前无法自动OCR。你仍可把B超单文字粘贴到下方，点击“识别并填入”。';
            }
        }

        function openCheckupPage(panel) {
            const page = document.getElementById('checkupPage');
            if (!page) return;
            page.classList.add('active');
            page.setAttribute('aria-hidden', 'false');
            switchCheckupPanel(panel || 'efw');
            initCheckupTools();
        }

        function closeCheckupPage() {
            const page = document.getElementById('checkupPage');
            if (!page) return;
            page.classList.remove('active');
            page.setAttribute('aria-hidden', 'true');
        }

        function switchCheckupPanel(panel) {
            document.querySelectorAll('.checkup-subtab').forEach(btn => btn.classList.toggle('active', btn.dataset.checkupTab === panel));
            document.querySelectorAll('.checkup-panel').forEach(el => el.classList.toggle('active', el.id === `checkup-panel-${panel}`));
        }

        function calculateEfwFromInputs() {
            const grams = calcHadlockEfw(
                document.getElementById('efwBpd').value,
                document.getElementById('efwHc').value,
                document.getElementById('efwAc').value,
                document.getElementById('efwFl').value
            );
            const result = document.getElementById('efwResult');
            const tip = document.getElementById('efwTip');
            if (!grams) {
                result.style.display = 'none';
                tip.textContent = '请检查 BPD、HC、AC、FL 是否完整且单位为 mm。若报告单位是 cm，请先换算成 mm 后输入。';
                return null;
            }
            document.getElementById('efwGram').textContent = grams;
            document.getElementById('efwJin').textContent = (grams / 500).toFixed(2);
            result.style.display = 'grid';
            tip.textContent = `估算值约 ${grams}g（${(grams / 500).toFixed(2)}斤）。B超估重通常存在一定误差，请结合孕周、生长曲线和医生建议判断。`;
            return grams;
        }

        function fillEfwDemo() {
            const demoByWeek = currentWeek >= 32 ? { bpd: 82, hc: 300, ac: 285, fl: 62 } : currentWeek >= 24 ? { bpd: 61, hc: 225, ac: 205, fl: 44 } : { bpd: 45, hc: 165, ac: 145, fl: 30 };
            document.getElementById('efwBpd').value = demoByWeek.bpd;
            document.getElementById('efwHc').value = demoByWeek.hc;
            document.getElementById('efwAc').value = demoByWeek.ac;
            document.getElementById('efwFl').value = demoByWeek.fl;
            calculateEfwFromInputs();
        }

        function renderBscanIndicators() {
            const list = document.getElementById('bscanIndicatorList');
            if (!list) return;
            list.innerHTML = bscanIndicators.map(item => `
                <div class="indicator-item">
                    <div class="indicator-head"><span class="indicator-name">${item.name}</span><span class="indicator-tag">${item.tag}</span></div>
                    <div class="indicator-text">${item.text}</div>
                </div>
            `).join('');
        }

        function getScanRecords() {
            try { return JSON.parse(localStorage.getItem(scanStorageKey) || '[]'); } catch (e) { return []; }
        }

        function saveScanRecords(records) {
            localStorage.setItem(scanStorageKey, JSON.stringify(records));
        }

        function clearScanForm() {
            ['scanBpd','scanHc','scanAc','scanFl','scanAfi','scanFhr','scanNote'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            const weekInput = document.getElementById('scanWeek');
            if (weekInput) weekInput.value = currentWeek || '';
            const dateInput = document.getElementById('scanDate');
            if (dateInput && !dateInput.value) dateInput.value = new Date().toISOString().slice(0,10);
        }

        function saveScanRecord() {
            const date = document.getElementById('scanDate').value || new Date().toISOString().slice(0,10);
            const week = Number(document.getElementById('scanWeek').value || currentWeek);
            const bpd = document.getElementById('scanBpd').value;
            const hc = document.getElementById('scanHc').value;
            const ac = document.getElementById('scanAc').value;
            const fl = document.getElementById('scanFl').value;
            const afi = document.getElementById('scanAfi').value;
            const fhr = document.getElementById('scanFhr').value;
            const note = document.getElementById('scanNote').value.trim();
            const efw = calcHadlockEfw(bpd, hc, ac, fl);
            if (!week || week < 1 || week > 42) { alert('请填写 1–42 之间的孕周'); return; }
            if (![bpd, hc, ac, fl].every(v => Number(v) > 0)) { alert('请至少填写 BPD、HC、AC、FL，便于估算胎儿体重'); return; }
            const assessment = assessBscanData({ week, bpd, hc, ac, fl, afi, fhr, placenta: note, position: note });
            const records = getScanRecords();
            records.unshift({ id: Date.now(), date, week, bpd, hc, ac, fl, afi, fhr, note, efw, healthLevel: assessment.level, healthTitle: assessment.title, healthIssues: assessment.issues });
            saveScanRecords(records.slice(0, 30));
            renderScanRecords();
            alert('已保存到当前浏览器');
            clearScanForm();
        }

        function deleteScanRecord(id) {
            const records = getScanRecords().filter(r => String(r.id) !== String(id));
            saveScanRecords(records);
            renderScanRecords();
        }

        function renderScanRecords() {
            const list = document.getElementById('scanRecordList');
            if (!list) return;
            const records = getScanRecords();
            if (!records.length) {
                list.innerHTML = '<div class="empty-tip"><div class="empty-tip-icon">📄</div><div>还没有B超记录，添加后会显示在这里。</div></div>';
                return;
            }
            list.innerHTML = records.map(r => `
                <div class="scan-record-item">
                    <div>
                        <div class="scan-record-title">孕${r.week}周 · ${r.date}</div>
                        <div class="scan-record-meta">BPD ${r.bpd}mm / HC ${r.hc}mm / AC ${r.ac}mm / FL ${r.fl}mm${r.afi ? ` / AFI ${r.afi}cm` : ''}${r.fhr ? ` / 胎心 ${r.fhr}次/分` : ''}</div>
                        ${r.note ? `<div class="scan-record-meta">备注：${r.note}</div>` : ''}
                        ${r.healthTitle ? `<div class="scan-record-meta">健康提示：${r.healthTitle}${r.healthIssues && r.healthIssues.length ? '；' + r.healthIssues[0] : ''}</div>` : ''}
                    </div>
                    <div style="text-align:right;">
                        <div class="scan-record-weight">${r.efw ? r.efw + 'g' : '--'}</div>
                        <button class="scan-delete-btn" type="button" onclick="deleteScanRecord('${r.id}')">删除</button>
                    </div>
                </div>
            `).join('');
        }

        let checkupToolsBound = false;
        function initCheckupTools() {
            renderBscanIndicators();
            renderScanRecords();
            const scanWeek = document.getElementById('scanWeek');
            if (scanWeek && !scanWeek.value) scanWeek.value = currentWeek || '';
            const scanDate = document.getElementById('scanDate');
            if (scanDate && !scanDate.value) scanDate.value = new Date().toISOString().slice(0,10);
            if (checkupToolsBound) return;
            checkupToolsBound = true;
            document.getElementById('closeCheckupPage')?.addEventListener('click', closeCheckupPage);
            document.querySelectorAll('[data-checkup-open]').forEach(btn => btn.addEventListener('click', () => openCheckupPage(btn.dataset.checkupOpen)));
            document.querySelectorAll('.checkup-subtab').forEach(btn => btn.addEventListener('click', () => switchCheckupPanel(btn.dataset.checkupTab)));
            document.getElementById('calcEfwBtn')?.addEventListener('click', calculateEfwFromInputs);
            document.getElementById('fillEfwDemoBtn')?.addEventListener('click', fillEfwDemo);
            document.getElementById('saveScanBtn')?.addEventListener('click', saveScanRecord);
            document.getElementById('clearScanFormBtn')?.addEventListener('click', clearScanForm);
            document.getElementById('recognizeScanTextBtn')?.addEventListener('click', recognizeScanText);
            document.getElementById('fillScanDemoBtn')?.addEventListener('click', fillScanDemo);
            document.getElementById('scanImageInput')?.addEventListener('change', handleScanImageUpload);
            ['efwBpd','efwHc','efwAc','efwFl'].forEach(id => document.getElementById(id)?.addEventListener('input', () => {
                const vals = ['efwBpd','efwHc','efwAc','efwFl'].map(x => document.getElementById(x).value);
                if (vals.every(v => Number(v) > 0)) calculateEfwFromInputs();
            }));
        }

        function toggleTask(checkbox) {
            checkbox.classList.toggle('checked');
        }

        // ==================== 底部导航切换 ====================
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // ==================== 工具点击反馈 ====================
        document.querySelectorAll('.tool-item').forEach(item => {
            item.addEventListener('click', () => {
                const toolName = item.dataset.tool;
                // 简单的点击动画
                item.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    item.style.transform = '';
                }, 150);
                
                // 点击"体重记录"工具图标时，跳转到体重Tab
                if (toolName === 'music') {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    const musicTabBtn = document.querySelector('[data-tab="music"]');
                    const musicTabContent = document.getElementById('tab-music');
                    if (musicTabBtn) musicTabBtn.classList.add('active');
                    if (musicTabContent) musicTabContent.classList.add('active');
                    setTimeout(() => initMusicApp(), 50);
                }

                if (toolName === 'kick') {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    const kickTabBtn = document.querySelector('[data-tab="kick"]');
                    const kickTabContent = document.getElementById('tab-kick');
                    if (kickTabBtn) kickTabBtn.classList.add('active');
                    if (kickTabContent) kickTabContent.classList.add('active');
                    setTimeout(() => initKickApp(), 50);
                }

                if (toolName === 'weight') {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    const weightTabBtn = document.querySelector('[data-tab="weight"]');
                    const weightTabContent = document.getElementById('tab-weight');
                    if (weightTabBtn) weightTabBtn.classList.add('active');
                    if (weightTabContent) weightTabContent.classList.add('active');
                    setTimeout(() => initWeightApp(), 100);
                }

                if (toolName === 'checkup') {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    const checkupTabBtn = document.querySelector('[data-tab="checkup"]');
                    const checkupTabContent = document.getElementById('tab-checkup');
                    if (checkupTabBtn) checkupTabBtn.classList.add('active');
                    if (checkupTabContent) checkupTabContent.classList.add('active');
                    openCheckupPage('efw');
                }
                if (toolName === 'diet') {
                    openDietPage();
                }
                
                console.log(`点击了工具: ${toolName}`);
            });
        });



        // ==================== 饮食方案功能 ====================
        const dietStageRules = [
            {min:1,max:4,name:'孕早期 · 着床与器官形成',focus:'叶酸优先',nutrient:'叶酸/碘/碳水',rhythm:'少量多餐',desc:'这个阶段不需要刻意“大补”，更重要的是保证主食和叶酸摄入，避免空腹太久。恶心明显时先保证能吃进去，清淡、温热、小份更友好。'},
            {min:5,max:12,name:'孕早期 · 孕吐高发期',focus:'稳住能量',nutrient:'叶酸/铁/维B',rhythm:'少量多餐',desc:'孕吐、嗜睡、反酸常见。饮食目标是避免脱水和长期低碳水，选择米饭、面、粥、土豆、全麦面包等易接受主食，搭配蛋奶豆鱼肉。'},
            {min:13,max:20,name:'孕中期 · 胎儿快速生长期',focus:'优质蛋白',nutrient:'蛋白/钙/铁',rhythm:'三餐两加餐',desc:'胃口通常回升，胎儿骨骼、肌肉和血容量增长加快。可适量增加奶类、鱼禽蛋瘦肉和豆制品，注意铁、钙、碘和DHA来源。'},
            {min:21,max:27,name:'孕中期 · 控糖与补钙期',focus:'稳糖补钙',nutrient:'钙/铁/DHA',rhythm:'主食分配',desc:'这个阶段容易体重增长加快，也常遇到糖筛。建议主食粗细搭配，甜饮、甜点降频；奶类、深绿叶菜、豆制品和低汞鱼类更值得安排。'},
            {min:28,max:34,name:'孕晚期 · 胎儿增重冲刺',focus:'控盐优蛋白',nutrient:'铁/钙/蛋白',rhythm:'小份高质',desc:'胃被顶住后容易烧心、便秘和水肿。选择小份高质量饮食，保证蛋白质和铁，同时少油炸、少高盐，晚餐不要过饱。'},
            {min:35,max:40,name:'孕晚期 · 分娩储备期',focus:'易消化储能',nutrient:'蛋白/碳水/铁',rhythm:'清淡规律',desc:'临近分娩，饮食以规律、清淡、易消化为主。继续保证主食、蛋白质、蔬果和水分，避免临产前突然进补或尝试陌生食物。'}
        ];
        const dietWeeklyTips = {
            1:['继续每日补充叶酸；备孕到孕早期都很关键。','规律吃早餐，避免空腹咖啡和酒精。','海带紫菜等含碘食物可少量轮换，日常使用碘盐。'],
            2:['主食不要省，米饭、面、燕麦、土豆都可以。','多吃深绿叶菜、豆类、柑橘类补充叶酸。','避免生食水产、未熟蛋和未经巴氏杀菌乳制品。'],
            3:['口味变淡一点，减少重油重辣刺激。','恶心时可试苏打饼干、馒头片、粥。','饮水少量多次，尿色太深要提醒自己补水。'],
            4:['保证碳水化合物，别因怕胖长期低碳。','蛋白质从鸡蛋、牛奶、豆腐、鱼禽瘦肉中选择。','外卖注意少盐少油，避免凉拌生食。'],
            5:['孕吐明显时把三餐拆成5~6小餐。','早餐可用粥/面/面包配鸡蛋或奶。','姜片水、柠檬水有些人会舒服，但别过量。'],
            6:['闻不了油烟就选择蒸、煮、炖。','可以准备坚果、酸奶、水果作为加餐。','呕吐频繁、喝水也吐需及时就医。'],
            7:['继续叶酸；多选菠菜、西兰花、芦笋、豆类。','铁来源可安排瘦肉、动物血/肝少量按医嘱。','维C水果搭配含铁食物有助铁吸收。'],
            8:['酸味开胃可以，但少吃高盐腌制酸菜。','控制甜饮和奶茶，避免血糖波动。','晚餐别太晚，反酸可垫高枕头。'],
            9:['主食可粗细搭配：燕麦、杂粮饭、红薯。','便秘可增加蔬菜、菌菇、燕麦和水。','乳糖不耐受可试无乳糖奶或酸奶。'],
            10:['每天安排1个鸡蛋或等量优质蛋白。','鱼类选低汞熟食，如鲈鱼、鳕鱼、三文鱼等。','避免大型掠食鱼和来源不明鱼生。'],
            11:['食欲恢复后也别报复性进食。','坚果每天一小把即可，别当零食无限吃。','体重增长过快时优先减少甜食油炸。'],
            12:['早期尾声，饮食从“能吃”转向“均衡”。','蔬菜尽量每天多颜色搭配。','产检异常指标应带着饮食记录咨询医生。']
        };
        function getDietStage(week){ return dietStageRules.find(s => week >= s.min && week <= s.max) || dietStageRules[dietStageRules.length - 1]; }
        function getDietWeekTips(week){
            if (dietWeeklyTips[week]) return dietWeeklyTips[week];
            const map = [
                ['增加奶类和豆制品，帮助钙摄入。','每周安排2~3次低汞鱼类，补充优质蛋白和DHA来源。','主食别全换粗粮，粗细搭配更稳。'],
                ['瘦肉、动物血、深色蔬菜搭配维C水果，有助预防缺铁。','加餐选择酸奶、坚果、水果，少选蛋糕奶茶。','每天保持足量饮水和蔬菜，减少便秘。'],
                ['糖筛前后都不建议极端控糖，日常减少含糖饮料和甜点即可。','每餐主食分散摄入，配蛋白质和蔬菜更稳糖。','水肿时减少高盐零食、腌制品和重口外卖。'],
                ['晚期少食多餐，避免一顿吃太撑引起反酸。','继续保证蛋白质：鱼、禽、蛋、瘦肉、奶、豆制品轮换。','临近分娩不盲目进补，清淡、熟食、规律最稳。']
            ];
            if (week <= 20) return map[0];
            if (week <= 27) return map[1];
            if (week <= 34) return map[2];
            return map[3];
        }
        function dietFoodsForWeek(week){
            const base = ['鸡蛋','牛奶/酸奶','豆腐/豆浆','深绿叶菜','橙子/猕猴桃','燕麦/杂粮饭','瘦肉','低汞鱼类'];
            if (week <= 12) return ['苏打饼干','小米粥','全麦面包','土豆/红薯','菠菜','西兰花','鸡蛋羹','酸奶','苹果','瘦肉末'].concat(base.slice(0,4));
            if (week <= 27) return ['牛奶','酸奶','豆腐','虾仁/鱼肉','鸡胸/瘦牛肉','动物血/瘦红肉','芝麻酱少量','菌菇','杂粮饭','蓝莓/橙子'].concat(base);
            return ['蒸鱼','鸡蛋','瘦肉','豆腐','牛奶','燕麦','南瓜','西兰花','芹菜/冬瓜','香蕉/火龙果','坚果一小把','杂粮粥'].concat(base.slice(0,6));
        }
        function dietAvoidForWeek(week){
            const common = ['酒精：孕期建议避免。','生鱼片、未熟肉蛋、未消毒奶：有感染风险。','大型高汞鱼：如鲨鱼、剑鱼、方头鱼等尽量避免。','含糖饮料、奶茶、甜点：控制频率和份量。','腌制/高盐零食：水肿或血压偏高时尤其要少。'];
            if (week <= 12) return common.concat(['空腹太久：容易加重恶心和低血糖感。','过油过辣食物：可能加重反酸和孕吐。']);
            if (week <= 27) return common.concat(['把水果当正餐大量吃：可能让糖负荷偏高。','极端低碳水饮食：不适合孕期自行尝试。']);
            return common.concat(['睡前大餐：容易反酸、烧心。','突然大量进补：可能导致体重增长过快或胃肠不适。']);
        }
        function dietMealsForWeek(week){
            if (week <= 12) return [
                ['早餐','小米粥/燕麦粥 + 鸡蛋羹 + 少量青菜；孕吐时可先吃几口苏打饼干再起身。'],
                ['上午加餐','酸奶或牛奶 + 苹果/香蕉半根，少量多次。'],
                ['午餐','米饭/面条 + 清蒸鱼或瘦肉末豆腐 + 西兰花/菠菜。'],
                ['下午加餐','全麦面包/红薯小份 + 温水。'],
                ['晚餐','番茄鸡蛋面/软米饭 + 菌菇青菜 + 少油蒸煮菜。']
            ];
            if (week <= 27) return [
                ['早餐','全麦面包/燕麦 + 牛奶 + 鸡蛋 + 一份水果。'],
                ['上午加餐','无糖酸奶 + 坚果一小把。'],
                ['午餐','杂粮饭 + 清蒸鱼/鸡肉 + 豆腐青菜汤 + 两种蔬菜。'],
                ['下午加餐','橙子/猕猴桃 + 奶或豆浆，帮助铁吸收。'],
                ['晚餐','米饭小份 + 瘦牛肉/虾仁/豆制品 + 菌菇深绿叶菜。']
            ];
            return [
                ['早餐','燕麦粥/杂粮粥 + 鸡蛋 + 牛奶，避免过甜。'],
                ['上午加餐','水果一小份 + 酸奶，控糖者按医生建议换成黄瓜/番茄等。'],
                ['午餐','米饭/红薯 + 蒸鱼/鸡肉/瘦肉 + 冬瓜/西兰花 + 豆腐汤。'],
                ['下午加餐','坚果少量或全麦面包小份，避免奶茶甜点。'],
                ['晚餐','清淡面/粥 + 鸡蛋/豆腐/鱼肉 + 熟蔬菜；反酸者睡前2~3小时避免大餐。']
            ];
        }
        function renderDietPlan(){
            const input = document.getElementById('dietWeekInput');
            let week = parseInt(input && input.value, 10);
            if (!week || week < 1 || week > 40) week = (typeof currentWeek !== 'undefined' ? currentWeek : 12);
            week = Math.min(40, Math.max(1, week));
            if (input) input.value = week;
            const stage = getDietStage(week);
            document.getElementById('dietStageBadge').textContent = `孕${week}周 · ${stage.name}`;
            document.getElementById('dietHeroTitle').textContent = `孕${week}周饮食方案`;
            document.getElementById('dietHeroDesc').textContent = stage.desc;
            document.getElementById('dietMainFocus').textContent = stage.focus;
            document.getElementById('dietKeyNutrient').textContent = stage.nutrient;
            document.getElementById('dietMealRhythm').textContent = stage.rhythm;
            const tips = getDietWeekTips(week);
            document.getElementById('dietPanelFocus').innerHTML = `<div class="diet-card"><div class="diet-card-title">🎯 本周营养重点</div><ul class="diet-list">${tips.map(t=>`<li>${t}</li>`).join('')}</ul></div><div class="diet-card"><div class="diet-card-title">📌 执行原则</div><ul class="diet-list"><li>每天尽量覆盖谷薯、蔬果、奶/豆、鱼禽蛋瘦肉四大类。</li><li>孕中晚期适量增加奶、鱼、禽、蛋、瘦肉；体重增长过快时先减甜饮和油炸。</li><li>继续关注叶酸、铁、碘、钙等关键营养素，补剂请按医生建议。</li></ul></div>`;
            const meals = dietMealsForWeek(week);
            document.getElementById('dietPanelMeals').innerHTML = `<div class="diet-card"><div class="diet-card-title">🍱 一日三餐 + 加餐示例</div>${meals.map(m=>`<div class="meal-block"><div class="meal-title">${m[0]}</div><div class="meal-text">${m[1]}</div></div>`).join('')}</div>`;
            document.getElementById('dietPanelFoods').innerHTML = `<div class="diet-card"><div class="diet-card-title">✅ 本周推荐食材</div><div class="food-chip-box">${[...new Set(dietFoodsForWeek(week))].map((f,i)=>`<span class="food-chip ${i%3===0?'green':''}">${f}</span>`).join('')}</div></div>`;
            document.getElementById('dietPanelAvoid').innerHTML = `<div class="diet-card"><div class="diet-card-title">⚠️ 少吃/不吃清单</div><ul class="diet-list">${dietAvoidForWeek(week).map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
            document.getElementById('dietPanelSpecial').innerHTML = `<div class="diet-card"><div class="diet-card-title">🩺 常见情况应对</div><ul class="diet-list"><li>孕吐：少量多餐，优先保证主食和水分；持续呕吐、尿少、明显乏力要就医。</li><li>便秘：增加熟蔬菜、全谷物、豆类、水分和适度活动。</li><li>贫血倾向：瘦红肉、动物血、鱼禽蛋搭配维C水果；补铁遵医嘱。</li><li>控糖：主食分散到三餐两加餐，少甜饮甜点，水果控制份量，不空腹大量吃水果。</li><li>水肿/血压偏高：减少高盐外卖、腌制品、薯片火腿肠等加工食品。</li></ul></div>`;
        }
        function openDietPage(){
            const page = document.getElementById('dietPage');
            const input = document.getElementById('dietWeekInput');
            if (input && typeof currentWeek !== 'undefined') input.value = currentWeek;
            renderDietPlan();
            if (page) page.classList.add('active');
        }
        function closeDietPage(){ const page = document.getElementById('dietPage'); if (page) page.classList.remove('active'); }
        function initDietPage(){
            const dietTool = document.querySelector('[data-tool="diet"]');
            if (dietTool && !dietTool.dataset.dietBound) {
                dietTool.dataset.dietBound = '1';
                dietTool.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); openDietPage(); }, true);
            }
            const closeBtn = document.getElementById('closeDietPageBtn');
            if (closeBtn && !closeBtn.dataset.bound) { closeBtn.dataset.bound = '1'; closeBtn.addEventListener('click', closeDietPage); }
            const genBtn = document.getElementById('dietGenerateBtn');
            if (genBtn && !genBtn.dataset.bound) { genBtn.dataset.bound = '1'; genBtn.addEventListener('click', renderDietPlan); }
            const input = document.getElementById('dietWeekInput');
            if (input && !input.dataset.bound) { input.dataset.bound = '1'; input.addEventListener('change', renderDietPlan); }
            document.querySelectorAll('.diet-tab').forEach(btn => {
                if (btn.dataset.bound) return;
                btn.dataset.bound = '1';
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.diet-tab').forEach(b => b.classList.remove('active'));
                    document.querySelectorAll('.diet-panel').forEach(p => p.classList.remove('active'));
                    btn.classList.add('active');
                    const panel = document.getElementById('dietPanel' + btn.dataset.dietTab.charAt(0).toUpperCase() + btn.dataset.dietTab.slice(1));
                    if (panel) panel.classList.add('active');
                });
            });
        }
        document.addEventListener('DOMContentLoaded', initDietPage);
        setTimeout(initDietPage, 300);


        // ==================== 初始化 ====================
        document.addEventListener('DOMContentLoaded', () => {
            // 初始化孕周选择器
            initWeekSelector();
            
            // 更新所有内容
            updateHeroContent();
            updateInfoCards();
            updateCheckupTimeline();
            updateCareTab();
            updateNutritionTab();
            updateDadTask();
            initCheckupTools();
            
            // 预加载字体后初始化体重模块
            setTimeout(() => initWeightApp(), 300);
        });

        // ==================== 触摸滑动支持 ====================
        let touchStartX = 0;
        let touchEndX = 0;
        
        // Tab区域滑动
        document.querySelector('.tab-nav').addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        document.querySelector('.tab-nav').addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe('.tab-nav', tabBtns);
        }, { passive: true });
        
        // 孕周选择器滑动
        document.getElementById('weekSelector').addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        document.getElementById('weekSelector').addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        function handleSwipe(containerSelector, btnElements) {
            const diff = touchStartX - touchEndX;
            const threshold = 50;
            
            if (Math.abs(diff) < threshold) return;
            
            const currentActive = document.querySelector(`${containerSelector} .tab-btn.active`);
            const currentIndex = Array.from(btnElements).indexOf(currentActive);
            
            if (diff > 0 && currentIndex < btnElements.length - 1) {
                // 向左滑，下一个
                btnElements[currentIndex].classList.remove('active');
                btnElements[currentIndex + 1].classList.add('active');
                btnElements[currentIndex + 1].click();
            } else if (diff < 0 && currentIndex > 0) {
                // 向右滑，上一个
                btnElements[currentIndex].classList.remove('active');
                btnElements[currentIndex - 1].classList.add('active');
                btnElements[currentIndex - 1].click();
            }
        }

        // ==================== 窗口大小变化时重绘体重图表 ====================
        window.addEventListener('resize', () => {
            if (document.getElementById('tab-weight').classList.contains('active')) {
                if (typeof weightChartData !== 'undefined' && weightChartData.length > 0) {
                    initWeightChart();
                }
            }
        });

        // ==================== 待产包功能 ====================
        
        // 待产包数据
        const bagData = {
            mom: [
                {
                    name: "产后必备",
                    icon: "🍼",
                    items: [
                        { id: "mom-1", icon: "🩹", name: "防溢乳垫", quantity: "1盒", desc: "保持内衣干爽，防止溢乳尴尬。" },
                        { id: "mom-2", icon: "🧴", name: "吸乳器", quantity: "1台", desc: "辅助开奶，缓解涨痛。" },
                        { id: "mom-3", icon: "🩲", name: "一次性内裤", quantity: "5-10条", desc: "产后恶露多，方便卫生，免洗。" },
                        { id: "mom-4", icon: "🧊", name: "储奶袋", quantity: "3-5个", desc: "多余母乳冷冻储存。" }
                    ]
                },
                {
                    name: "妈妈服装",
                    icon: "👗",
                    items: [
                        { id: "mom-5", icon: "🎩", name: "产妇帽/月子帽", quantity: "1顶", desc: "头部保暖，防止受凉。" },
                        { id: "mom-6", icon: "👚", name: "开襟外衣/哺乳衣", quantity: "1-2套", desc: "方便医生检查及产后哺乳。" },
                        { id: "mom-7", icon: "🥿", name: "月子鞋/拖鞋", quantity: "1-2双", desc: "防滑，包跟设计防止脚后跟受凉。" }
                    ]
                },
                {
                    name: "生产必备",
                    icon: "📋",
                    items: [
                        { id: "mom-8", icon: "🪪", name: "身份证/银行卡/手机", quantity: "必备", desc: "入院登记及日常通讯。" },
                        { id: "mom-9", icon: "🧻", name: "产褥垫/刀纸", quantity: "1-2包", desc: "产房及产后初期吸收恶露。" }
                    ]
                },
                {
                    name: "生活用品",
                    icon: "🧴",
                    items: [
                        { id: "mom-10", icon: "🪥", name: "月子牙刷/洗漱用品", quantity: "1套", desc: "软毛保护牙龈，基础洗漱。" },
                        { id: "mom-11", icon: "🥤", name: "弯头吸管杯", quantity: "1个", desc: "方便产后卧床或坐位饮水。" }
                    ]
                }
            ],
            baby: [
                {
                    name: "喂养相关",
                    icon: "🍼",
                    items: [
                        { id: "baby-1", icon: "🥛", name: "奶粉 (试用装)", quantity: "1-2罐", desc: "预防初期母乳不足。" },
                        { id: "baby-2", icon: "🍼", name: "奶瓶/奶瓶刷", quantity: "1-2套", desc: "辅助喂奶及日常清洁。" },
                        { id: "baby-3", icon: "🌡️", name: "奶瓶恒温加热器", quantity: "1台", desc: "快速精准加温奶液。" }
                    ]
                },
                {
                    name: "宝宝必备",
                    icon: "👶",
                    items: [
                        { id: "baby-4", icon: "🩲", name: "纸尿裤 (NB/S)", quantity: "1-2包", desc: "24小时需求，保持屁屁干爽。" },
                        { id: "baby-5", icon: "🧸", name: "包被/襁褓", quantity: "1-2条", desc: "给宝宝母体般的包裹感，保暖。" },
                        { id: "baby-6", icon: "🧻", name: "婴儿棉柔巾/湿巾", quantity: "2-5包", desc: "清洁排泄物及日常擦拭。" },
                        { id: "baby-7", icon: "💉", name: "护脐贴/电子耳温枪", quantity: "1套", desc: "保护脐带残端，监测体温。" }
                    ]
                },
                {
                    name: "宝宝服装",
                    icon: "👶",
                    items: [
                        { id: "baby-8", icon: "👕", name: "新生儿衣服 (和尚服)", quantity: "3-5套", desc: "方便穿脱，保护肚脐。" },
                        { id: "baby-9", icon: "🧦", name: "婴儿袜/帽子/围嘴", quantity: "各2-3个", desc: "重点部位保暖及口水清理。" }
                    ]
                }
            ]
        };

        // 攻略数据
        const guideData = [
            {
                title: "入院待产，这些证件一个都不能少",
                desc: "详细列出入院所需证件及办理流程，身份证、医保卡、准生证一个都不能少！",
                icon: "📑",
                tag: "必读"
            },
            {
                title: "顺产vs剖腹产，待产包有什么区别",
                desc: "两种分娩方式的物资差异对比，顺产和剖腹产需要的物品各有侧重。",
                icon: "⚖️",
                tag: "对比"
            },
            {
                title: "住院3天，到底需要带多少东西",
                desc: "精简版待产包清单，住院3天真正需要的物品清单，避免大包小包。",
                icon: "🎒",
                tag: "精简"
            },
            {
                title: "准爸爸必读：陪产行李箱清单",
                desc: "陪产人员需要准备的物品清单，准爸爸陪产要准备这些就够啦！",
                icon: "👨",
                tag: "陪产"
            }
        ];

        // 商品数据
        const productData = [
            { name: "防溢乳垫 100片装", price: "29.9", icon: "🩹" },
            { name: "电动吸乳器 静音款", price: "299", icon: "🧴" },
            { name: "新生儿纸尿裤 NB码", price: "89", icon: "🩲" },
            { name: "婴儿包被 四季款", price: "79", icon: "🧸" },
            { name: "奶瓶恒温器 全自动", price: "149", icon: "🌡️" },
            { name: "婴儿和尚服 59码", price: "49", icon: "👕" }
        ];

        // 从localStorage获取勾选状态
        function getBagCheckedState() {
            const saved = localStorage.getItem('bagCheckedState');
            return saved ? JSON.parse(saved) : {};
        }

        // 保存勾选状态到localStorage
        function saveBagCheckedState(state) {
            localStorage.setItem('bagCheckedState', JSON.stringify(state));
        }

        // 更新总进度
        function updateBagProgress() {
            const state = getBagCheckedState();
            let total = 0;
            let prepared = 0;
            
            // 统计妈妈物品
            bagData.mom.forEach(cat => {
                cat.items.forEach(item => {
                    total++;
                    if (state[item.id]) prepared++;
                });
            });
            
            // 统计宝宝物品
            bagData.baby.forEach(cat => {
                cat.items.forEach(item => {
                    total++;
                    if (state[item.id]) prepared++;
                });
            });
            
            const percent = total > 0 ? Math.round((prepared / total) * 100) : 0;
            const circumference = 2 * Math.PI * 26; // r=26
            const offset = circumference - (percent / 100) * circumference;
            
            document.getElementById('bagProgressRing').style.strokeDashoffset = offset;
            document.getElementById('bagProgressPercent').textContent = percent + '%';
            document.getElementById('bagPreparedCount').textContent = prepared;
            document.getElementById('bagTotalCount').textContent = total;
            
            // 更新每个分类的进度
            updateCategoryProgress('mom');
            updateCategoryProgress('baby');
        }

        // 更新分类进度
        function updateCategoryProgress(type) {
            const state = getBagCheckedState();
            const containerId = type + 'CategoryList';
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const categories = container.querySelectorAll('.category-card');
            categories.forEach(card => {
                const items = card.querySelectorAll('.item-row');
                let done = 0;
                items.forEach(item => {
                    if (item.classList.contains('checked')) done++;
                });
                const progress = card.querySelector('.category-card-progress');
                if (progress) {
                    progress.innerHTML = `已准备 <span class="done">${done}</span>/${items.length}`;
                }
            });
        }

        // 渲染妈妈/宝宝分类列表
        function renderCategoryList(type) {
            const containerId = type + 'CategoryList';
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const state = getBagCheckedState();
            const categories = bagData[type];
            
            let html = '';
            categories.forEach((cat, catIndex) => {
                let checkedCount = 0;
                cat.items.forEach(item => {
                    if (state[item.id]) checkedCount++;
                });
                
                html += `
                    <div class="category-card${catIndex === 0 ? ' expanded' : ''}" data-category="${cat.name}">
                        <div class="category-card-header">
                            <div class="category-card-title">
                                <span class="category-card-icon">${cat.icon}</span>
                                <span class="category-card-name">${cat.name}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span class="category-card-progress">已准备 <span class="done">${checkedCount}</span>/${cat.items.length}</span>
                                <span class="category-card-arrow">▼</span>
                            </div>
                        </div>
                        <div class="category-card-items">
                            <div class="category-card-inner">
                                ${cat.items.map(item => `
                                    <div class="item-row${state[item.id] ? ' checked' : ''}" data-item-id="${item.id}">
                                        <div class="item-checkbox${state[item.id] ? ' checked' : ''}" onclick="toggleBagItem('${item.id}')"></div>
                                        <div class="item-info">
                                            <div class="item-main">
                                                <div class="item-name-row">
                                                    <span class="item-icon">${item.icon}</span>
                                                    <span class="item-name">${item.name}</span>
                                                </div>
                                                <span class="item-quantity">${item.quantity}</span>
                                            </div>
                                            <div class="item-desc">${item.desc}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
            
            // 绑定折叠事件
            container.querySelectorAll('.category-card-header').forEach(header => {
                header.addEventListener('click', () => {
                    header.closest('.category-card').classList.toggle('expanded');
                });
            });
        }

        // 渲染攻略列表
        function renderGuideList() {
            const container = document.getElementById('guideList');
            if (!container) return;
            
            let html = '';
            guideData.forEach(guide => {
                html += `
                    <div class="guide-card">
                        <div class="guide-image">${guide.icon}</div>
                        <div class="guide-content">
                            <div class="guide-title">${guide.title}</div>
                            <div class="guide-desc">${guide.desc}</div>
                            <span class="guide-tag">${guide.tag}</span>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }

        // 渲染商品列表
        function renderProductList() {
            const container = document.getElementById('productList');
            if (!container) return;
            
            let html = '';
            productData.forEach(product => {
                html += `
                    <div class="product-card">
                        <div class="product-image">${product.icon}</div>
                        <div class="product-info">
                            <div class="product-name">${product.name}</div>
                            <div class="product-price">${product.price}</div>
                            <button class="product-btn">去看看</button>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }

        // 切换物品勾选状态
        function toggleBagItem(itemId) {
            const state = getBagCheckedState();
            state[itemId] = !state[itemId];
            saveBagCheckedState(state);
            
            // 更新UI
            const itemRow = document.querySelector(`[data-item-id="${itemId}"]`);
            if (itemRow) {
                const checkbox = itemRow.querySelector('.item-checkbox');
                if (state[itemId]) {
                    itemRow.classList.add('checked');
                    checkbox.classList.add('checked');
                } else {
                    itemRow.classList.remove('checked');
                    checkbox.classList.remove('checked');
                }
            }
            
            updateBagProgress();
        }

        // 打开待产包页面
        function openBagPage() {
            const bagPage = document.getElementById('bagPage');
            bagPage.classList.add('active');
            // 初始化数据
            renderCategoryList('mom');
            renderCategoryList('baby');
            renderGuideList();
            renderProductList();
            updateBagProgress();
        }

        // 关闭待产包页面
        function closeBagPage() {
            const bagPage = document.getElementById('bagPage');
            bagPage.classList.remove('active');
        }

        // 初始化待产包页面
        function initBagPage() {
            const bagBackBtn = document.getElementById('bagBackBtn');
            const bagTabBtns = document.querySelectorAll('.bag-tab-btn');
            
            // 返回按钮
            bagBackBtn.addEventListener('click', closeBagPage);
            
            // Tab切换
            bagTabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    bagTabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const tabId = btn.dataset.bagTab;
                    document.querySelectorAll('.bag-tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    document.getElementById('bag-tab-' + tabId).classList.add('active');
                });
            });
        }

        // 绑定待产包图标点击事件
        document.querySelector('[data-tool="bag"]').addEventListener('click', openBagPage);

        // 初始化待产包功能
        document.addEventListener('DOMContentLoaded', initBagPage);

        // ==================== 体重记录模块逻辑（来自321.html） ====================

        // 体重数据管理
        let weightChartData = [];
        let weightInputBuffer = '';
        let trendChartInstance = null;

        function getWeightData() {
            try { return JSON.parse(localStorage.getItem('wt_records') || '[]'); } catch { return []; }
        }
        function saveWeightData(records) {
            localStorage.setItem('wt_records', JSON.stringify(records));
        }
        function getWeightSettings() {
            try { return JSON.parse(localStorage.getItem('wt_settings') || '{}'); } catch { return {}; }
        }
        function saveWeightSettings(settings) {
            localStorage.setItem('wt_settings', JSON.stringify(settings));
        }

        // BMI 计算
        function calcBMI(weightKg, heightCm) {
            if (!heightCm || heightCm <= 0) return null;
            const hm = heightCm / 100;
            return weightKg / (hm * hm);
        }
        function getBMICategory(bmi) {
            if (bmi === null) return { label: '未知', cls: 'bmi-normal' };
            if (bmi < 18.5) return { label: '偏瘦', cls: 'bmi-thin' };
            if (bmi < 25) return { label: '正常', cls: 'bmi-normal' };
            if (bmi < 30) return { label: '偏胖', cls: 'bmi-overweight' };
            return { label: '肥胖', cls: 'bmi-obese' };
        }

        // 推荐增重范围
        function getRecommendedGain(bmi) {
            if (bmi === null) return { min: 11.5, max: 16 };
            if (bmi < 18.5) return { min: 12.5, max: 18 };
            if (bmi < 25) return { min: 11.5, max: 16 };
            if (bmi < 30) return { min: 7, max: 11.5 };
            return { min: 5, max: 9 };
        }

        // 获取推荐增重曲线数据（按孕周）
        function getRecommendedCurve(preWeight, bmi) {
            const gain = getRecommendedGain(bmi);
            const curve = [];
            for (let w = 1; w <= 41; w++) {
                let ratio;
                if (w <= 12) ratio = (w / 12) * (2 / ((gain.min + gain.max) / 2));
                else if (w <= 27) ratio = (2 + (w - 12) * 0.4) / ((gain.min + gain.max) / 2);
                else ratio = (2 + 15 * 0.4 + (w - 27) * 0.5) / ((gain.min + gain.max) / 2);
                ratio = Math.min(ratio, 1);
                const minW = preWeight + gain.min * ratio;
                const maxW = preWeight + gain.max * ratio;
                const medianW = preWeight + ((gain.min + gain.max) / 2) * ratio;
                curve.push({ week: w, minW, maxW, medianW });
            }
            return curve;
        }

        // 孕周徽章
        function updateGestationalBadge() {
            const settings = getWeightSettings();
            const badge = document.getElementById('wtGestationalBadge');
            if (!badge) return;
            if (settings.dueDate) {
                const due = new Date(settings.dueDate);
                const now = new Date();
                const diffDays = Math.floor((due - now) / (1000 * 60 * 60 * 24));
                const totalPregnancyDays = 280;
                const gestationalDays = totalPregnancyDays - diffDays;
                if (gestationalDays > 0 && gestationalDays <= totalPregnancyDays) {
                    const weeks = Math.floor(gestationalDays / 7);
                    const days = gestationalDays % 7;
                    badge.textContent = `🤰 孕${weeks}周+${days}天`;
                } else {
                    badge.textContent = '🤰 请设置预产期';
                }
            } else {
                badge.textContent = '🤰 孕24周+3天';
            }
        }

        // 初始化体重模块
        function initWeightApp() {
            const records = getWeightData();
            const settings = getWeightSettings();
            updateGestationalBadge();

            const emptyEl = document.getElementById('wtEmptyState');
            const dataEl = document.getElementById('wtDataContent');

            if (records.length === 0 && !settings.preWeight) {
                // 完全无数据：显示空状态
                if (emptyEl) emptyEl.style.display = 'block';
                if (dataEl) dataEl.style.display = 'none';
                // 弹出设置
                setTimeout(() => openWtSettingsModal(), 300);
                return;
            }

            if (emptyEl) emptyEl.style.display = 'none';
            if (dataEl) dataEl.style.display = 'block';

            const preWeight = settings.preWeight || 0;
            const height = settings.height || 0;
            const bmi = calcBMI(preWeight, height);

            // 最新体重
            const latest = records.length > 0 ? records[records.length - 1] : null;
            const currentWeight = latest ? latest.weight : preWeight;
            const totalGain = preWeight > 0 ? (currentWeight - preWeight) : 0;

            // 更新概览
            const curEl = document.getElementById('wtCurrentWeight');
            if (curEl) curEl.textContent = currentWeight.toFixed(1);

            // 体重变化
            const changeEl = document.getElementById('wtWeightChange');
            if (changeEl && records.length >= 2) {
                const prev = records[records.length - 2].weight;
                const diff = currentWeight - prev;
                const sign = diff >= 0 ? '+' : '';
                changeEl.textContent = `${sign}${diff.toFixed(1)} kg`;
                changeEl.className = 'weight-change ' + (diff > 0 ? 'positive' : diff < 0 ? 'negative' : 'neutral');
            } else if (changeEl) {
                if (totalGain !== 0) {
                    const sign = totalGain >= 0 ? '+' : '';
                    changeEl.textContent = `${sign}${totalGain.toFixed(1)} kg 累计`;
                    changeEl.className = 'weight-change ' + (totalGain > 0 ? 'positive' : totalGain < 0 ? 'negative' : 'neutral');
                } else {
                    changeEl.textContent = '暂无变化';
                    changeEl.className = 'weight-change neutral';
                }
            }

            // 状态标签
            const recGain = getRecommendedGain(bmi);
            const statusTag = document.getElementById('wtStatusTag');
            const statusDot = document.getElementById('wtStatusDot');
            const statusText = document.getElementById('wtStatusText');
            let statusCls = 'normal', statusLabel = '体重正常';
            if (totalGain < recGain.min * 0.8) { statusCls = 'low'; statusLabel = '增重偏少'; }
            else if (totalGain > recGain.max * 1.2) { statusCls = 'risk'; statusLabel = '增重过多'; }
            else if (totalGain > recGain.max) { statusCls = 'high'; statusLabel = '增重偏多'; }
            if (statusTag) { statusTag.className = 'status-tag ' + statusCls; }
            if (statusDot) { statusDot.className = 'status-dot ' + statusCls; }
            if (statusText) { statusText.textContent = statusLabel; }

            // 推荐范围
            const recMinEl = document.getElementById('wtRecMin');
            const recMaxEl = document.getElementById('wtRecMax');
            if (recMinEl) recMinEl.textContent = (preWeight + recGain.min).toFixed(1) + 'kg';
            if (recMaxEl) recMaxEl.textContent = (preWeight + recGain.max).toFixed(1) + 'kg';

            // 指标行
            const preEl = document.getElementById('wtPreWeight');
            const bmiEl = document.getElementById('wtBMI');
            const bmiSubEl = document.getElementById('wtBMISub');
            const gainEl = document.getElementById('wtTotalGain');
            if (preEl) preEl.textContent = preWeight > 0 ? preWeight.toFixed(1) : '--';
            if (bmiEl) bmiEl.textContent = bmi !== null ? bmi.toFixed(1) : '--';
            if (bmiSubEl) {
                if (bmi !== null) {
                    const cat = getBMICategory(bmi);
                    bmiSubEl.textContent = cat.label;
                    bmiSubEl.className = 'metric-sub ' + cat.cls;
                } else {
                    bmiSubEl.textContent = '请设置身高';
                    bmiSubEl.className = 'metric-sub';
                }
            }
            if (gainEl) gainEl.textContent = totalGain !== 0 ? (totalGain > 0 ? '+' : '') + totalGain.toFixed(1) : '0';

            // 图表
            weightChartData = records;
            initWeightChart();

            // AI 分析
            updateAIAnalysis(bmi, totalGain, recGain, records);

            // 最近记录
            updateRecentList(records, preWeight);
        }

        // Chart.js 图表
        function initWeightChart() {
            const canvas = document.getElementById('trendChart');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const settings = getWeightSettings();
            const preWeight = settings.preWeight || 60;
            const height = settings.height || 160;
            const bmi = calcBMI(preWeight, height);
            const records = getWeightData();

            if (trendChartInstance) { trendChartInstance.destroy(); trendChartInstance = null; }

            const curveData = getRecommendedCurve(preWeight, bmi);
            const labels = curveData.map(d => d.week);
            const minLine = curveData.map(d => d.minW);
            const maxLine = curveData.map(d => d.maxW);
            const medianLine = curveData.map(d => d.medianW);

            // 实际体重数据
            const actualData = new Array(41).fill(null);
            records.forEach(r => {
                if (r.week >= 1 && r.week <= 41) {
                    actualData[r.week - 1] = r.weight;
                }
            });

            trendChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: '建议上限',
                            data: maxLine,
                            borderColor: 'rgba(126, 217, 166, 0.4)',
                            backgroundColor: 'rgba(126, 217, 166, 0.08)',
                            borderWidth: 1,
                            pointRadius: 0,
                            fill: '+1',
                            tension: 0.4
                        },
                        {
                            label: '建议下限',
                            data: minLine,
                            borderColor: 'rgba(126, 217, 166, 0.4)',
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            pointRadius: 0,
                            fill: false,
                            tension: 0.4
                        },
                        {
                            label: '中位数',
                            data: medianLine,
                            borderColor: 'rgba(126, 217, 166, 0.6)',
                            borderWidth: 2,
                            borderDash: [6, 4],
                            pointRadius: 0,
                            fill: false,
                            tension: 0.4
                        },
                        {
                            label: '实际体重',
                            data: actualData,
                            borderColor: '#FF8E9D',
                            backgroundColor: 'rgba(255, 142, 157, 0.1)',
                            borderWidth: 3,
                            pointRadius: 5,
                            pointBackgroundColor: '#FF8E9D',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            fill: false,
                            tension: 0.3,
                            spanGaps: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            titleFont: { size: 12 },
                            bodyFont: { size: 12 },
                            padding: 10,
                            cornerRadius: 8,
                            callbacks: {
                                title: (items) => `孕${items[0].label}周`,
                                label: (item) => {
                                    if (item.raw === null) return '';
                                    return `${item.dataset.label}: ${item.raw.toFixed(1)}kg`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: {
                                maxTicksLimit: 6,
                                callback: (val) => val + '周',
                                font: { size: 10 },
                                color: '#999'
                            }
                        },
                        y: {
                            grid: { color: 'rgba(0,0,0,0.04)' },
                            ticks: {
                                callback: (val) => val.toFixed(0),
                                font: { size: 10 },
                                color: '#999'
                            }
                        }
                    },
                    interaction: { mode: 'nearest', axis: 'x', intersect: false }
                }
            });
        }

        // AI 分析文本生成
        function updateAIAnalysis(bmi, totalGain, recGain, records) {
            const aiContent = document.getElementById('wtAIContent');
            const aiSuggestions = document.getElementById('wtAISuggestions');
            const aiBadge = document.getElementById('wtAIBadge');
            if (!aiContent) return;

            let analysis = '', suggestions = [], statusCls = 'normal', badgeText = '正常';

            if (records.length === 0) {
                analysis = '还没有体重记录数据，请先记录您的体重，AI 将为您提供个性化的体重管理建议。';
                suggestions = [
                    { icon: '📝', text: '建议每天固定时间（如晨起排尿后）测量体重' },
                    { icon: '⚖️', text: '记录体重时请尽量穿着相似，减少误差' }
                ];
                statusCls = 'normal'; badgeText = '待评估';
            } else if (totalGain < recGain.min * 0.8) {
                analysis = `当前总增重 ${totalGain.toFixed(1)}kg，低于推荐增重范围（${recGain.min}~${recGain.max}kg）。增重不足可能影响胎儿发育，建议适当增加营养摄入。`;
                suggestions = [
                    { icon: '🍽️', text: '增加优质蛋白质摄入（鸡蛋、鱼肉、牛奶）' },
                    { icon: '🥗', text: '每天保证3顿正餐+2顿加餐' },
                    { icon: '👩‍⚕️', text: '如持续增重不足，建议咨询产科医生' }
                ];
                statusCls = 'low'; badgeText = '偏少';
            } else if (totalGain > recGain.max * 1.2) {
                analysis = `当前总增重 ${totalGain.toFixed(1)}kg，超出推荐增重范围（${recGain.min}~${recGain.max}kg）。增重过多可能增加妊娠糖尿病和巨大儿风险，需注意控制。`;
                suggestions = [
                    { icon: '🚶‍♀️', text: '每天坚持30分钟中等强度运动（如散步、孕妇瑜伽）' },
                    { icon: '🥦', text: '减少高糖高油食物，多吃蔬菜和粗粮' },
                    { icon: '👩‍⚕️', text: '建议进行糖耐量检查，排除妊娠糖尿病' }
                ];
                statusCls = 'risk'; badgeText = '过多';
            } else if (totalGain > recGain.max) {
                analysis = `当前总增重 ${totalGain.toFixed(1)}kg，略超推荐增重范围（${recGain.min}~${recGain.max}kg），但仍在可控范围内，注意饮食控制即可。`;
                suggestions = [
                    { icon: '🍵', text: '减少含糖饮料和甜点摄入' },
                    { icon: '🚶‍♀️', text: '坚持每日散步，控制体重增长速度' }
                ];
                statusCls = 'high'; badgeText = '偏多';
            } else {
                analysis = `当前总增重 ${totalGain.toFixed(1)}kg，在推荐增重范围（${recGain.min}~${recGain.max}kg）内，继续保持当前的生活习惯！`;
                suggestions = [
                    { icon: '✅', text: '保持均衡饮食和适量运动' },
                    { icon: '📋', text: '持续记录体重，关注变化趋势' }
                ];
                statusCls = 'normal'; badgeText = '正常';
            }

            // 计算近期增重速度
            if (records.length >= 3) {
                const recent = records.slice(-3);
                const firstWeek = recent[0].week;
                const lastWeek = recent[recent.length - 1].week;
                const firstWeight = recent[0].weight;
                const lastWeight = recent[recent.length - 1].weight;
                const weekSpan = lastWeek - firstWeek;
                if (weekSpan > 0) {
                    const weeklyGain = (lastWeight - firstWeight) / weekSpan;
                    if (weeklyGain > 0.5) {
                        suggestions.push({ icon: '⚠️', text: `近${weekSpan}周平均每周增重${weeklyGain.toFixed(2)}kg，速度偏快，建议适当控制` });
                    }
                }
            }

            aiContent.textContent = analysis;
            if (aiBadge) { aiBadge.textContent = badgeText; aiBadge.className = 'ai-badge ' + statusCls; }
            if (aiSuggestions) {
                aiSuggestions.innerHTML = suggestions.map(s =>
                    `<div class="suggestion-item"><div class="suggestion-icon">${s.icon}</div><div>${s.text}</div></div>`
                ).join('');
            }
        }

        // 最近记录列表
        function updateRecentList(records, preWeight) {
            const listEl = document.getElementById('wtRecentList');
            if (!listEl) return;

            if (records.length === 0) {
                listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-light);font-size:14px;">暂无记录</div>';
                return;
            }

            const recent = records.slice(-5).reverse();
            listEl.innerHTML = recent.map((r, i) => {
                const prev = i < recent.length - 1 ? recent[i + 1] : null;
                let changeText = '--', changeCls = 'neutral';
                if (prev) {
                    const diff = r.weight - prev.weight;
                    const sign = diff >= 0 ? '+' : '';
                    changeText = `${sign}${diff.toFixed(1)}kg`;
                    changeCls = diff > 0 ? 'positive' : diff < 0 ? 'negative' : 'neutral';
                } else if (preWeight > 0 && records.indexOf(r) === 0) {
                    const diff = r.weight - preWeight;
                    const sign = diff >= 0 ? '+' : '';
                    changeText = `${sign}${diff.toFixed(1)}kg`;
                    changeCls = diff > 0 ? 'positive' : diff < 0 ? 'negative' : 'neutral';
                }
                const dateStr = r.date || '';
                return `<div class="wt-history-item">
                    <div class="wt-history-date">
                        <div class="wt-history-week">孕${r.week || '?'}周</div>
                        <div class="wt-history-day">${dateStr}</div>
                    </div>
                    <div class="wt-history-weight">${r.weight.toFixed(1)}<span class="unit">kg</span></div>
                    <div class="wt-history-change ${changeCls}">${changeText}</div>
                </div>`;
            }).join('');
        }

        // Modal 操作
        function openAddWeightModal() {
            const modal = document.getElementById('addWeightModal');
            if (modal) {
                weightInputBuffer = '';
                const display = document.getElementById('wtInputDisplay');
                if (display) display.textContent = '0.0';
                modal.classList.add('visible');
            }
        }
        function closeAddWeightModal() {
            const modal = document.getElementById('addWeightModal');
            if (modal) modal.classList.remove('visible');
        }
        function openWtSettingsModal() {
            const modal = document.getElementById('wtSettingsModal');
            if (!modal) return;
            const settings = getWeightSettings();
            const preInput = document.getElementById('wtSettingPreWeight');
            const htInput = document.getElementById('wtSettingHeight');
            const ddInput = document.getElementById('wtSettingDueDate');
            if (preInput) preInput.value = settings.preWeight || '';
            if (htInput) htInput.value = settings.height || '';
            if (ddInput) ddInput.value = settings.dueDate || '';
            modal.classList.add('visible');
        }
        function closeWtSettingsModal() {
            const modal = document.getElementById('wtSettingsModal');
            if (modal) modal.classList.remove('visible');
        }
        function saveWtSettings() {
            const preWeight = parseFloat(document.getElementById('wtSettingPreWeight')?.value);
            const height = parseFloat(document.getElementById('wtSettingHeight')?.value);
            const dueDate = document.getElementById('wtSettingDueDate')?.value || '';
            if (!preWeight || preWeight <= 0) { showWtToast('请输入有效的孕前体重'); return; }
            if (!height || height <= 0) { showWtToast('请输入有效的身高'); return; }
            saveWeightSettings({ preWeight, height, dueDate });
            closeWtSettingsModal();
            showWtToast('设置已保存');
            initWeightApp();
        }

        // 数字键盘输入
        function inputWeightKey(key) {
            const display = document.getElementById('wtInputDisplay');
            if (!display) return;
            if (key === 'delete') {
                weightInputBuffer = weightInputBuffer.slice(0, -1);
            } else if (key === '.') {
                if (weightInputBuffer.includes('.')) return;
                if (weightInputBuffer === '') weightInputBuffer = '0';
                weightInputBuffer += '.';
            } else {
                // 限制小数点后一位
                if (weightInputBuffer.includes('.') && weightInputBuffer.split('.')[1].length >= 1) return;
                // 限制最大3位整数
                const intPart = weightInputBuffer.split('.')[0];
                if (intPart.length >= 3 && !weightInputBuffer.includes('.')) return;
                weightInputBuffer += key;
            }
            display.textContent = weightInputBuffer || '0.0';
        }

        // 快速增减
        function quickAddWeight(delta) {
            const current = parseFloat(weightInputBuffer || '0');
            const newVal = Math.max(0, current + delta);
            weightInputBuffer = newVal.toFixed(1);
            const display = document.getElementById('wtInputDisplay');
            if (display) display.textContent = weightInputBuffer;
        }

        // 保存体重记录
        function saveWeightRecord() {
            const weight = parseFloat(weightInputBuffer);
            if (!weight || weight <= 0 || weight > 300) { showWtToast('请输入有效的体重值'); return; }

            const settings = getWeightSettings();
            const today = new Date();
            const dateStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

            // 计算孕周
            let week = 24;
            if (settings.dueDate) {
                const due = new Date(settings.dueDate);
                const diffDays = Math.floor((due - today) / (1000*60*60*24));
                week = Math.max(1, Math.min(41, Math.floor((280 - diffDays) / 7)));
            }

            const records = getWeightData();
            // 同一天同孕周覆盖
            const existIdx = records.findIndex(r => r.date === dateStr);
            if (existIdx >= 0) {
                records[existIdx] = { date: dateStr, weight, week };
            } else {
                records.push({ date: dateStr, weight, week });
            }
            records.sort((a, b) => a.date.localeCompare(b.date));
            saveWeightData(records);
            closeAddWeightModal();
            showWtToast('体重记录已保存 ✅');
            initWeightApp();
        }

        // 历史记录页面
        function openWeightHistory() {
            const page = document.getElementById('wtHistoryPage');
            const content = document.getElementById('wtHistoryPageContent');
            if (!page || !content) return;

            const records = getWeightData();
            const settings = getWeightSettings();
            const preWeight = settings.preWeight || 0;

            if (records.length === 0) {
                content.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--text-light);">暂无历史记录</div>';
            } else {
                const sorted = [...records].reverse();
                content.innerHTML = sorted.map(r => {
                    const idx = records.indexOf(r);
                    const prev = idx > 0 ? records[idx - 1] : null;
                    let changeText = '--', changeCls = 'neutral';
                    if (prev) {
                        const diff = r.weight - prev.weight;
                        const sign = diff >= 0 ? '+' : '';
                        changeText = `${sign}${diff.toFixed(1)}kg`;
                        changeCls = diff > 0 ? 'positive' : diff < 0 ? 'negative' : 'neutral';
                    } else if (preWeight > 0) {
                        const diff = r.weight - preWeight;
                        const sign = diff >= 0 ? '+' : '';
                        changeText = `${sign}${diff.toFixed(1)}kg`;
                        changeCls = diff > 0 ? 'positive' : diff < 0 ? 'negative' : 'neutral';
                    }
                    return `<div class="wt-history-page-item">
                        <div class="wt-history-page-date-col">
                            <div class="wt-history-page-week">孕${r.week}周</div>
                            <div class="wt-history-page-day">${r.date}</div>
                        </div>
                        <div class="wt-history-page-weight">${r.weight.toFixed(1)}kg</div>
                        <div class="wt-history-page-change ${changeCls}">${changeText}</div>
                    </div>`;
                }).join('');
            }
            page.classList.add('visible');
        }
        function closeWeightHistory() {
            const page = document.getElementById('wtHistoryPage');
            if (page) page.classList.remove('visible');
        }

        // Toast
        function showWtToast(msg) {
            const toast = document.getElementById('wtToast');
            if (!toast) return;
            toast.textContent = msg;
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 2500);
        }

        // 点击遮罩层关闭 Modal
        document.getElementById('addWeightModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeAddWeightModal();
        });
        document.getElementById('wtSettingsModal')?.addEventListener('click', function(e) {
            if (e.target === this) closeWtSettingsModal();
        });
