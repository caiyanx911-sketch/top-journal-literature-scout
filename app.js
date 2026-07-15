const seedCase = {
  title: "全球氢生产在行星边界内的路径",
  meta: "Nature Communications · 2026 · 行星边界 / 氢能 / 前瞻生命周期评价",
  designChain: [
    {
      key: "问题",
      title: "全球氢生产能不能被放进行星边界安全空间？",
      body: "这篇文章不是比较绿色氢、蓝色氢谁更干净，而是问未来全球氢生产系统是否能在被分配的安全空间内运行。"
    },
    {
      key: "缺口",
      title: "静态 PB-LCA 和只优化气候会掩盖负担转移",
      body: "既有研究常用静态功能单位、单一路径、grandfathering 分配或气候单目标，容易忽略土地、生物圈、氮磷循环等压力。"
    },
    {
      key: "数据链",
      title: "AR6 情景 + premise + ecoinvent + 制氢路径清单",
      body: "作者把未来低温控情景、前瞻 LCA 数据库和具体制氢路径的前景过程连接起来。"
    },
    {
      key: "模型链",
      title: "AESA → 前瞻 LCA → 随机 TCM → 有效行星足迹",
      body: "技术组合在未来部署约束下被优化，再映射到考虑地球系统反馈的行星边界足迹。"
    },
    {
      key: "贡献",
      title: "把地球系统交互变成优化模型的判断力",
      body: "交互矩阵帮助模型优先处理会放大系统风险的边界，避免人为给多目标优化随意赋权。"
    },
    {
      key: "迁移",
      title: "搜索对象不是标题，而是作者的研究设计",
      body: "好的文献侦察要搜索情景分配、优化、交互权重、负担转移识别等设计模式，而不只是搜标题关键词。"
    }
  ],
  lessons: [
    ["搜索证据链", "每一段方法链都要找文献：PB 下放、IAM 情景、前瞻 LCA、TCM、DACS、氢泄漏。"],
    ["按研究设计排序", "研究设计贴合的文献，往往比标题相似的文献更值得优先读。"],
    ["主动识别负担转移", "只优化气候可能把压力转移到土地、生物圈、水、氮磷、健康或公平。"],
    ["用组内能力生成 idea", "把母文献和组内 MRIO、设施清单、健康影响、空间边界、遥感 AI、政策公平能力对接。"]
  ],
  groupCapabilities: [
    ["MRIO / 供应链核算", "消费端责任、跨区域负担转移、关键部门识别。"],
    ["设施/工厂级脱碳", "钢铁、水泥、炼厂、焦化厂、煤电等点源清单与退出优先序。"],
    ["健康影响评估", "把碳/污染路径转译为暴露、死亡、疾病负担和公平。"],
    ["空间/网格边界", "淡水边界、城市尺度、建筑尺度、网格尺度风险定位。"],
    ["遥感 / AI 清单", "填埋场识别、油气井甲烷、设施缺失清单和快速筛查。"],
    ["政策公平与行为数据", "不平等、适应行为、电力高频数据、政策成本收益。"]
  ],
  searchAudit: [
    {
      title: "不是只有 15 篇",
      body: "15 篇是当前“只看顶刊 + 精准度 86 + 教授模式”下进入核心地图的高设计匹配文献，不是领域总量。",
      action: "工具现在区分核心入图、候选池和待核验线索；候选池要继续用 Scholar/Crossref 扩展。"
    },
    {
      title: "容易遗漏的顶刊分支",
      body: "PB 框架更新、安全与公平边界、food/plastics 等系统边界应用、设施锁定、供应链边界、健康共益、负排放权衡。",
      action: "每个分支至少保留 5-10 篇候选，再按研究设计贴合度降噪。"
    },
    {
      title: "检索不能只靠标题",
      body: "母文献的关键词是氢能，但真正要搜的是 PB 下放、前瞻 LCA、技术组合、边界交互、设施/供应链/健康扩展。",
      action: "查询应按问题、方法、数据、决策、组内能力六条线并行。"
    },
    {
      title: "严谨性红线",
      body: "没有核验 title、journal、DOI、研究设计关系的文献只能进候选池，不能作为核心证据。",
      action: "详情卡必须标注验证状态；待核验条目不能出现在最终 must-read 前五。"
    }
  ],
  branches: [
    {
      id: "problem",
      name: "问题分支",
      type: "同领域",
      query: '"planetary boundaries" AND "hydrogen production" OR "absolute sustainability" AND hydrogen',
      why: "寻找最贴近氢能、行星边界和全球清洁能源路径的同领域顶刊工作。"
    },
    {
      id: "method",
      name: "方法分支",
      type: "方法谱系",
      query: '"planetary boundary" AND "life cycle assessment" OR "absolute environmental sustainability assessment"',
      why: "追溯 PB-LCA / AESA 方法源头，判断这篇文章的方法基础来自哪里。"
    },
    {
      id: "data",
      name: "数据分支",
      type: "证据来源",
      query: '"prospective LCA" AND premise AND ecoinvent OR "AR6 scenarios" AND "hydrogen"',
      why: "寻找未来情景和数据库文献，判断结论是否有可靠的数据链支撑。"
    },
    {
      id: "decision",
      name: "决策分支",
      type: "优化与决策",
      query: '"technology choice model" OR "life cycle optimization" AND "planetary boundaries"',
      why: "寻找把环境评价转化为技术组合、优先序或政策决策的研究。"
    },
    {
      id: "cross",
      name: "能力迁移分支",
      type: "组内能力 / 外部方法迁移",
      query: '("conjoint experiment" OR "policy framing" OR "risk budget" OR "facility inventory") AND climate policy',
      why: "优先从组内已有能力迁移；必要时再借外部学科方法，解决母文献留下的研究缺口。"
    }
  ],
  clusters: [
    {
      id: "core",
      name: "同领域核心文献",
      summary: "氢能、清洁能源路径、行星边界和生命周期可持续性。",
      branches: ["problem", "data"],
      papers: [
        paper("Lejeune et al. 2026", "Nature Communications", 98, "母案例：用前瞻随机 TCM 评估全球氢生产是否处于行星边界内。", ["problem", "method", "data", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Wei et al. 2024", "Energy & Environmental Science", 91, "全球氢生产未来环境影响，是氢能情景和路径参数的重要证据。", ["problem", "data"], "top", ["professor", "phd"]),
        paper("Terlouw et al. 2024", "Nature Communications", 88, "指出未来氢经济存在环境权衡和供需错配。", ["problem", "data"], "top", ["professor", "phd"]),
        paper("IEA-style hydrogen outlook candidates", "Nature Energy / Joule / EES", 84, "候选池：氢能供需、基础设施和终端用途路径文献，需要进一步核验具体顶刊条目。", ["problem", "decision"], "wide", ["professor", "phd", "idea"]),
        paper("Ehrenstein et al. 2020", "Applied Energy", 78, "在英国道路交通氢燃料供应链中应用行星边界评估。", ["problem", "decision"], "wide", ["professor", "phd", "idea"])
      ]
    },
    {
      id: "method-origin",
      name: "方法源头文献",
      summary: "让母案例成立的方法基础：PB 框架、AESA、交互模型、TCM。",
      branches: ["method"],
      papers: [
        paper("Rockstrom et al. 2009", "Nature", 97, "提出安全运行空间，是行星边界框架的基础文献。", ["method"], "top", ["professor", "phd"]),
        paper("Steffen et al. 2015", "Science", 96, "更新行星边界框架，并把它和人类发展联系起来。", ["method"], "top", ["professor", "phd"]),
        paper("Richardson et al. 2023", "Science Advances", 95, "最新 PB 状态更新之一，说明六个边界已被越过，是 PB 指标现状的关键证据。", ["method", "data"], "top", ["professor", "phd"]),
        paper("Rockstrom et al. 2023", "Nature", 94, "提出 safe and just Earth system boundaries，把安全边界和公平/正义维度连接起来。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Lade et al. 2020", "Nature Sustainability", 94, "提出地球系统交互会放大人类对行星边界的影响。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("O'Neill et al. 2018", "Nature Sustainability", 92, "把社会需求和 PB 结合，适合判断“安全空间内发展”与公平分配问题。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Bjorn et al. 2020", "Environmental Research Letters", 89, "系统综述基于生命周期的绝对环境可持续性评估方法。", ["method"], "classic", ["professor", "phd"]),
        paper("Katelhon et al. 2016", "Environmental Science & Technology", 86, "提出用于 consequential LCA 的随机技术选择模型。", ["method", "decision"], "classic", ["professor", "phd", "idea"])
      ]
    },
    {
      id: "adjacent",
      name: "相邻应用文献",
      summary: "同样的研究设计逻辑应用到塑料、石化、CCU、DACS 和行业转型。",
      branches: ["method", "decision"],
      papers: [
        paper("Bachmann et al. 2023", "Nature Sustainability", 95, "在行星边界内评估循环塑料，是氢能以外最接近的系统级 PB 类比。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Springmann et al. 2018", "Nature", 93, "研究食物系统如何保持在环境限制内，是系统转型进入边界约束的顶刊样板。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Gerten et al. 2020", "Nature Sustainability", 91, "评估在陆地 PB 内养活百亿人口的可能性，是边界约束下需求满足研究的邻近样板。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Poore & Nemecek 2018", "Science", 90, "全球食物产品环境影响大样本 LCA，适合借鉴数据规模和差异化治理逻辑。", ["data", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Meys et al. 2021", "Science", 92, "用循环碳经济路径研究塑料净零排放，体现大型行业组合设计。", ["decision"], "top", ["professor", "idea"]),
        paper("Katelhon et al. 2019", "PNAS", 90, "评估化学工业中 CCU 的气候变化缓解潜力。", ["method", "decision"], "top", ["professor", "idea"]),
        paper("Qiu et al. 2022", "Nature Communications", 87, "评估直接空气捕集 DACS 技术到 2100 年的环境权衡。", ["data", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Davis et al. 2010", "Science", 89, "现有能源基础设施锁定排放，是设施寿命和转型路径研究的重要源头。", ["data", "decision"], "top", ["professor", "idea"]),
        paper("Tong et al. 2019", "Nature", 91, "把现有能源基础设施与 1.5°C 目标相连，适合迁移到氢能设施部署/锁定风险。", ["data", "decision"], "top", ["professor", "idea"])
      ]
    },
    {
      id: "group-fit",
      name: "组内能力对接文献",
      summary: "把母文献和 Meng group 近五年能力连接：MRIO、设施清单、健康影响、空间边界、遥感 AI。",
      branches: ["data", "decision"],
      papers: [
        paper("Meng group 2025 Freshwater PB supply chains", "Nature Water", 93, "组内已有网格尺度淡水边界与供应链追踪能力，可直接迁移到氢能水压力和供应链责任。", ["data", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Meng group 2025 Supply-chain climate-health", "Nature Sustainability", 92, "组内已有供应链能源强度协调与健康共益框架，可迁移到氢能路径的健康加权 PB。", ["data", "decision"], "top", ["professor", "idea"]),
        paper("Meng group 2025 Plant-level steel health benefits", "Nature Communications", 91, "组内已有工厂级脱碳和健康收益建模能力，可迁移到设施级氢能基础设施。", ["data", "decision"], "top", ["professor", "idea"]),
        paper("Meng group 2025 Coking plant phase-down", "Nature Communications", 90, "组内已有战略退出和设施优先序设计能力，可迁移到氢能相关高排放资产替代。", ["data", "decision"], "top", ["professor", "idea"]),
        paper("Ma et al. 2025 Landfill identification", "Resources, Conservation and Recycling", 84, "组内已有遥感/图像深度学习清单能力，可作为氢能设施或泄漏源识别的技术前置。", ["data"], "wide", ["phd", "idea"])
      ]
    },
    {
      id: "cross",
      name: "外部方法类比文献",
      summary: "当组内能力不足以解决瓶颈时，可参考其他学科已经成熟的设计模式。",
      branches: ["cross"],
      papers: [
        paper("Bechtel & Scheve 2013", "PNAS", 88, "用调查实验测试全球气候协议设计如何改变公众支持，是政策接受度实验的直接先例。", ["cross"], "top", ["professor", "idea"]),
        paper("Battiston et al. 2017", "Nature Climate Change", 90, "把气候转型风险转成金融系统压力测试，适合作为 PB 风险预算类比。", ["cross", "decision"], "top", ["professor", "idea"]),
        paper("Markandya et al. 2018", "The Lancet Planetary Health", 89, "把减排路径转译为健康共益和成本，是健康加权环境决策的顶刊样板。", ["cross", "decision"], "top", ["professor", "idea"]),
        paper("Lauvaux et al. 2022", "Science", 91, "用卫星发现油气甲烷超级排放源，展示设施级清单如何改变气候治理优先序。", ["cross", "data"], "top", ["professor", "idea"]),
        paper("Meckling et al. 2015", "Science", 88, "分析气候政策获胜联盟，说明政策能否执行取决于利益联盟结构。", ["cross", "decision"], "top", ["professor", "idea"])
      ]
    },
    {
      id: "limits",
      name: "边界与局限文献",
      summary: "揭示生产端 PB 模型漏掉什么：泄漏、下放原则、政策接受度、基础设施边界。",
      branches: ["data", "decision", "cross"],
      papers: [
        paper("氢泄漏文献", "Atmospheric Chemistry & Physics", 79, "讨论 H2 排放和泄漏率的间接气候影响。", ["data"], "wide", ["professor", "phd", "idea"]),
        paper("PB 下放争议文献", "Journal of Industrial Ecology", 81, "讨论 sharing principle、公平假设和安全空间分配敏感性。", ["method"], "wide", ["professor", "phd", "idea"]),
        paper("政策接受度文献", "Energy Policy / Nature Energy", 80, "讨论公众支持、选址冲突、风险沟通和政策合法性。", ["cross", "decision"], "wide", ["professor", "idea"]),
        paper("基础设施生命周期文献", "Applied Energy / Joule", 78, "扩展到储存、运输、管道、压缩和终端使用边界。", ["data", "decision"], "wide", ["professor", "phd", "idea"])
      ]
    }
  ],
  ideas: [
    idea(
      "行星边界内的氢能基础设施",
      "工业生态 + 运筹优化",
      "母案例只评估生产端，无法回答储运、压缩、液化、管网和终端使用加入后，完整氢能系统是否仍在 PB 内。",
      "借用运筹优化里的稳健组合优化，把不同基础设施路径当成可选择的 portfolio，而不是只做静态 LCA 对比。",
      [
        "Davis et al. 2010, Science：用现有能源基础设施计算锁定排放，说明设施存量会约束未来路径。",
        "Tong et al. 2019, Nature：把电厂等基础设施年龄和排放寿命接入 1.5°C 目标，做空间化锁定风险。",
        "Bachmann et al. 2023, Nature Sustainability：把塑料系统放进 PB 约束下做循环路径评估。"
      ],
      "设施位置、设备年龄、储运路径、能源输入、泄漏率、成本、部署上限、区域水压力和电网碳强度。",
      "决策变量是每个地区选择哪种制氢-储运组合；约束是 PB 安全空间、成本、供给需求、技术部署速度和泄漏阈值。",
      "把氢能从“生产技术比较”改成“生产-储运-终端 portfolio 选择”：每条路径都有 PB 足迹、成本、泄漏率、部署上限和不确定性，最后求最稳健组合。",
      "因为这个问题本质是稀缺安全空间下的路径组合选择，不只是哪个技术平均足迹最低。",
      "优点是把描述性评价变成决策模型，能处理不确定性、技术上限和多边界负担转移。",
      "审稿人会问：储运清单是否太假设化？为什么这些基础设施路径足够代表未来？区域尺度能不能支持全球结论？",
      "防守方式：先做情景透明化，把所有关键清单参数做敏感性分析；结论聚焦“哪些假设下路径会失败”，而不是宣称唯一最优解。",
      "先选一个区域，比较管道、液氢、氨载体三类路径，做小规模 robust portfolio demo。",
      ["data", "decision"],
      ["professor", "phd", "idea"]
    ),
    idea(
      "行星边界政策接受度实验",
      "营销学",
      "PB 研究常默认“科学上合理 = 政策上可推”，但严格约束、DACS、CCS、氢能管网等政策可能遭遇公众不信任。",
      "借用营销学的预注册 2x2 实验或 conjoint 实验，像测试广告/产品信息一样测试政策表述。",
      [
        "Bechtel & Scheve 2013, PNAS：用 survey experiment 识别气候协议的制度设计如何影响公众支持。",
        "Hainmueller et al. 2014, Political Analysis：给出 conjoint 分析的因果识别框架，是多属性政策选择实验的经典方法。",
        "Nature Energy / Energy Policy 中大量能源接受度研究用实验或离散选择评估公众对技术、成本和公平的权衡。"
      ],
      "线上样本、政策情境文本、处理组材料、支持度/信任/公平感/支付意愿量表、受访者政治倾向和能源认知。",
      "处理变量是政策目标数量、PB 理由是否显性、健康/就业/成本/地球边界框架；结果变量是支持度、信任和公平感。",
      "把 PB 政策表述随机分成单目标/多目标、显性/隐性 PB 理由、健康/就业/成本/地球边界框架，测支持度、信任、公平感和支付意愿。",
      "因为政策失败常不是模型错，而是公众不接受成本、选址风险或技术叙事；实验能在政策发布前识别可沟通版本。",
      "优点是成本低、因果识别清楚、能在政策发布前预判沟通风险；尤其适合解释为什么技术上正确的政策推不动。",
      "审稿人会问：线上样本是否有外部有效性？实验材料是不是太像论文话术而不像真实政策？态度支持能不能代表真实行为？",
      "防守方式：预注册、做 power analysis、材料来自真实政策文本，加入 attention check，并把结论限定为“沟通机制”而非真实投票预测。",
      "先做 4 个处理组的线上实验，用氢能基础设施或 DACS 政策作为情境。",
      ["cross"],
      ["idea"]
    ),
    idea(
      "把安全运行空间看成风险预算",
      "金融学",
      "PB 下放经常陷入公平原则争论：按历史排放、经济价值、人口、未来需求分都有人质疑。",
      "借用金融里的 risk budget / tail-risk 思路，把安全运行空间看成稀缺风险预算，分配给不同部门或技术组合。",
      [
        "Markowitz 1952, Journal of Finance：把投资组合从单资产选择变成风险-收益组合问题。",
        "Battiston et al. 2017, Nature Climate Change：把气候政策冲击转成金融网络压力测试。",
        "Rogelj et al. 2016, Nature Climate Change：梳理碳预算差异，说明预算估计本身带有模型和概率不确定性。"
      ],
      "行业环境足迹分布、PB 安全空间分配规则、技术情景、需求情景、部门间依赖关系和不确定参数分布。",
      "核心变量是每个行业的 PB 预算份额、预期占用、尾部越界概率、相关性和系统性损失函数。",
      "为氢能、钢铁、水泥、塑料等部门定义预期 PB 压力和尾部越界风险；比较 grandfathering、IAM 情景分配、人口/公平分配、风险预算分配下的系统越界概率。",
      "因为 PB 分配不是简单伦理题，它也是系统风险管理题；同样平均占用下，尾部越界风险可能完全不同。",
      "优点是能把不确定性和极端风险放进分配规则，而不是只比较平均压力或伦理原则。",
      "审稿人会问：把金融风险语言迁移到 PB 是否只是比喻？损失函数是不是人为设定？公平原则会不会被风险最小化掩盖？",
      "防守方式：明确这是 allocation decision model，不替代伦理原则；同时报告公平、效率和尾部风险三套结果，而不是只给一个总分。",
      "先用 3-4 个行业做示范，计算每种分配规则下的 PB tail risk。",
      ["cross", "decision"],
      ["professor", "idea"]
    ),
    idea(
      "健康加权的行星足迹",
      "公共健康",
      "地球系统压力能说明系统风险，但不能直接告诉政策制定者哪些人、哪个地区、哪类健康结果会受影响。",
      "借用公共健康的 health impact assessment 和暴露-反应模型，把 PB 压力转译成人群暴露、死亡率、疾病负担和不平等。",
      [
        "Markandya et al. 2018, The Lancet Planetary Health：比较巴黎协定路径下空气污染健康共益和减排成本。",
        "Hamilton et al. 2021, The Lancet Planetary Health：把 NDC 情景转成死亡率、饮食和空气质量健康影响。",
        "Lelieveld et al. 2015, Nature：把排放源贡献映射到全球过早死亡。"
      ],
      "技术组合排放、空气污染因子、水压力、人口栅格、基线死亡率、暴露-反应函数和地区社会经济数据。",
      "核心变量是技术组合导致的污染暴露变化、健康终点、受影响群体、地区不平等和每单位 PB 占用对应的健康损害。",
      "在氢能技术组合模型后接空气污染、热暴露、水压力或土地变化模块，把 PB 压力映射到人口空间分布、疾病负担和不平等。",
      "因为 PB 语言对政策制定者仍偏抽象，健康终点能把“系统风险”翻译成“谁会受损、受损多少”。",
      "优点是政策含义更强，可以从“地球承受不住”进一步变成“哪些群体会承担代价”。",
      "审稿人会问：PB 指标和健康指标是否重复计算？暴露-反应函数跨地区是否适用？健康模块会不会喧宾夺主？",
      "防守方式：把 PB 作为地球系统约束，把健康作为分配影响结果；分开报告机制链，避免把两个指标混成一个黑箱指数。",
      "先选一个有限行业案例，叠加空气污染暴露和健康负担模块。",
      ["cross", "decision"],
      ["professor", "idea"]
    ),
    idea(
      "设施级氢能转型地图",
      "遥感 / 数据基础设施",
      "全球技术组合会掩盖设施选址、设备年龄、电网接入、水压力和局地健康风险，导致政策无法落到具体地点。",
      "借用遥感和数据基础设施思路，先构建设施级底层数据库，再接 PB、健康和优化模型。",
      [
        "Lauvaux et al. 2022, Science：用 TROPOMI 卫星识别油气甲烷超级排放源并量化治理收益。",
        "Davis et al. 2010, Science：用现有能源基础设施数据库估算未来锁定排放。",
        "Tong et al. 2019, Nature：把设施年龄、排放寿命和气候目标连接起来，识别淘汰优先序。"
      ],
      "企业名录、设施坐标、产能、设备年龄、工业园区边界、卫星影像、电网接入、水压力、港口管网和地方环境暴露数据。",
      "核心变量是设施级转型选项：新建、改造、退役、限制扩张；输出是空间优先序和局地风险。",
      "用企业名录、卫星影像、工业园区位置、电网、水压力和港口管网图层建立候选设施清单；再判断哪些点适合新建、改造、退役或禁止扩张。",
      "因为很多能源转型难题不是缺一个更复杂模型，而是缺能落到设施的底层数据。",
      "优点是能把全球平均结论变成可执行的空间优先序，也容易连接地方政策和企业决策。",
      "审稿人会问：设施识别准确率如何验证？卫星/企业名录会不会漏掉小设施？设施级数据能否合法公开？",
      "防守方式：抽样人工验证、和官方/商业数据库交叉校验、报告 precision/recall，并把敏感坐标聚合到可公开尺度。",
      "选一个国家，整合炼厂、合成氨厂、可再生资源和水压力图层，做设施级试点。",
      ["cross", "data", "decision"],
      ["phd", "idea"]
    ),
    idea(
      "行星边界转型中的政策反馈",
      "政治学",
      "技术组合模型默认政策可以被执行，但现实中成本、就业、地方财政和选址冲突会改变政策联盟。",
      "借用政治学的 policy feedback 和 coalition analysis，把技术路径放进政治可持续性框架里。",
      [
        "Meckling et al. 2015, Science：解释气候政策为何需要形成能获胜的产业和政治联盟。",
        "Pahle et al. 2018, Nature Climate Change：提出通过政策排序逐步提高气候政策严格度。",
        "Stokes 2020, Short Circuiting Policy：虽是专著，但系统展示可再生能源政策如何被利益集团削弱。"
      ],
      "政策时间线、行业就业、企业产能、地区税收、补贴流向、选举或地方反对数据、公众态度和利益集团公开材料。",
      "核心变量是受益者/受损者分布、联盟强度、政策补偿、政策顺序和反弹概率。",
      "把每种 PB 对齐政策对应到受益者、受损者、就业变化、地区财政和行业联盟，再模拟政策是否会被维持、削弱、反弹或迭代加严。",
      "因为科学最优路径如果没有稳定支持联盟，现实中可能无法通过或无法维持。",
      "优点是能解释为什么科学上最优的路径现实中可能失败，也能设计更可执行的政策顺序。",
      "审稿人会问：政治联盟变量是否主观？因果识别是否不足？会不会只是政策叙事而不是可检验模型？",
      "防守方式：把联盟变量操作化为就业、税收、补贴和行业集中度；用事件研究、比较案例或实验补足机制识别。",
      "结合政策数据库、行业就业、区域收益和调查实验，先做一个国家或行业的政策反馈案例。",
      ["cross", "decision"],
      ["idea"]
    )
  ],
  reviewerChecks: [
    {
      gate: "新意是否真在研究设计",
      question: "是不是只把 PB 套到氢能上，还是改变了对象、边界、尺度、数据或决策逻辑？",
      risk: "最容易被说成 incremental application。",
      defense: "在引言和矩阵里明确：本研究新增的是“生产-储运-政策/健康/设施级”的哪一层。"
    },
    {
      gate: "能力迁移是否成立",
      question: "组内方法或外部方法是否真的解决母文献留下的痛点？",
      risk: "方法迁移容易被质疑为拼贴。",
      defense: "每个方法都要对应一个 bottleneck：接受度、尾部风险、设施缺失、政策执行，而不是为了新而新。"
    },
    {
      gate: "数据链是否能支撑结论",
      question: "关键数据是实测、公开数据库、情景假设，还是模型外推？",
      risk: "顶刊审稿人会抓住清单假设、空间数据准确率和情景任意性。",
      defense: "把数据来源分级，给出验证、敏感性、参数范围和不可得数据的保守处理。"
    },
    {
      gate: "因果或优化逻辑是否清楚",
      question: "研究是在描述、预测、优化，还是识别因果机制？",
      risk: "很多稿子会把 LCA、情景和政策建议混在一起，逻辑不清。",
      defense: "在方法图里分开 accounting layer、decision layer、mechanism layer。"
    },
    {
      gate: "PB 分配原则是否可辩护",
      question: "安全空间按什么原则下放？为什么不是另一种原则？",
      risk: "grandfathering、人口、公平、IAM 情景分配都会被挑战。",
      defense: "主结果不要只押一个原则；至少报告 2-3 套分配规则和结论稳定区间。"
    },
    {
      gate: "政策外推是否过度",
      question: "模型结果能否直接变成政策建议？",
      risk: "从全球平均模型直接推地方政策，容易被说外推过度。",
      defense: "把政策建议写成条件式：在哪些假设、地区和技术约束下成立，并指出需要的地方验证。"
    }
  ],
  labStandards: [
    {
      gate: "顶刊问题感",
      pass: "问题能改变一个领域如何评价氢能、PB 分配、基础设施或政策可行性。",
      fail: "只是把已有 PB-LCA 套到另一个国家、行业或年份。",
      action: "工具必须追问：新增的是尺度、数据、机制、边界、方法，还是政策决策价值？"
    },
    {
      gate: "证据链完整",
      pass: "每个关键结论都有数据来源、方法来源、参数范围和敏感性分析。",
      fail: "依赖无法验证的清单假设，或只给单一情景结果。",
      action: "工具必须列出缺失数据和可替代 proxy，不允许把假设包装成发现。"
    },
    {
      gate: "能力迁移有用",
      pass: "组内能力或外部方法直接解决供应链责任、设施清单、健康分配、边界下放或政策执行问题。",
      fail: "只是把方法标签贴在母文献上，没有形成可执行研究设计。",
      action: "工具必须给出组内先例/顶刊参照、迁移逻辑和实施步骤。"
    },
    {
      gate: "审稿防守",
      pass: "提前知道审稿人会攻击数据、外推、因果、PB 下放、公平或政策含义哪一处。",
      fail: "只展示 idea，不说明最脆弱的证据点。",
      action: "工具必须给每个 idea 配套防守策略：验证、稳健性、预注册、替代模型或范围限定。"
    },
    {
      gate: "可执行最小版本",
      pass: "能在 2-8 周内做出一个可信 demo 或 pilot，证明方向值得继续。",
      fail: "第一步就需要全球私有数据库、不可得实验样本或多年团队投入。",
      action: "工具必须把宏大 idea 压缩成最小可行研究版本。"
    },
    {
      gate: "敢于淘汰",
      pass: "如果 novelty、数据或审稿防守不成立，工具会明确建议暂缓或降级。",
      fail: "为了显得丰富而保留所有 idea。",
      action: "工具必须输出优先级：强推、可试、暂缓、不要做。"
    }
  ],
  matrix: [
    matrixRow("Lejeune et al. 2026", "母案例", "前瞻 LCA + 随机 TCM + PB 交互", "AR6、premise、ecoinvent、制氢路径清单", "在有效行星足迹下评估全球氢生产", "用于训练检索分支和负担转移判断", ["problem", "method", "data", "decision"], "top", ["professor", "phd", "idea"]),
    matrixRow("Lade et al. 2020", "方法源头", "地球系统交互矩阵", "行星边界交互模型", "用反馈结构给 PB 越界赋予优先级", "避免多目标优化中的随意赋权", ["method", "decision"], "top", ["professor", "phd", "idea"]),
    matrixRow("Bachmann et al. 2023", "相邻类比", "行星边界内的生命周期优化", "塑料生产系统数据", "评估循环塑料是否处于 PB 内", "作为氢能以外最接近的设计类比", ["method", "decision"], "top", ["professor", "phd", "idea"]),
    matrixRow("Wei et al. 2024", "氢能证据", "未来环境影响建模", "氢生产路径与情景数据", "提供全球氢生产未来环境影响证据", "用于路径参数和结果校验", ["problem", "data"], "top", ["professor", "phd"]),
    matrixRow("Qiu et al. 2022", "边界扩展", "DACS 前瞻 LCA", "DAC 技术情景", "说明 DACS 也有环境权衡", "挑战把 DACS 当免费抵消的假设", ["data", "decision"], "top", ["professor", "idea"]),
    matrixRow("Bechtel & Scheve 2013", "政策实验先例", "调查实验", "公众样本", "识别气候协议制度设计对支持度的影响", "迁移到 PB 政策沟通和社会许可研究", ["cross"], "top", ["professor", "idea"]),
    matrixRow("Battiston et al. 2017", "金融风险先例", "气候压力测试", "金融网络与暴露数据", "把气候转型风险转成系统性金融风险", "迁移到 PB 安全空间风险预算分配", ["cross", "decision"], "top", ["professor", "idea"]),
    matrixRow("Lauvaux et al. 2022", "设施级数据先例", "卫星识别 + 排放量化", "TROPOMI 甲烷柱浓度", "发现并量化油气超级排放源", "迁移到氢能设施清单和泄漏优先治理", ["cross", "data"], "top", ["professor", "idea"])
  ]
};

const researchIdeas = [
  idea(
    "氢能行星边界足迹的供应链责任重分配",
    "组内能力：MRIO / 供应链核算",
    "母文献把全球氢生产放进 PB 安全空间，但仍偏生产端，不能回答“哪些消费端、国家或行业驱动了氢能 PB 压力”。",
    "把母文献的 PB footprint 接到 MRIO/供应链责任框架，做生产端、消费端和投资端三套责任归因。",
    [
      "组内 Nature Water 2025：沿全球供应链追踪网格尺度淡水边界超越。",
      "组内 Nature Sustainability 2025：通过供应链能源强度协调实现气候与健康协同收益。",
      "O'Neill et al. 2018, Nature Sustainability：社会需求与 PB 安全空间结合。"
    ],
    "全球 MRIO、氢需求情景、制氢路径 PB 足迹、部门用氢强度、贸易流和国家/行业消费结构。",
    "结果变量是消费端 PB 占用、跨境转移、关键部门贡献；模型层是 PB-LCA + MRIO 责任归因 + 情景分解。",
    "先把氢能 PB 压力从生产国重新分配到消费国、终端行业和供应链节点，识别谁真正驱动越界。",
    "因为这能把母文献从“全球技术组合是否越界”推进到“谁应该承担转型责任”。",
    "组内已有 MRIO 与供应链责任优势，能形成和母文献明显不同的贡献。",
    "审稿人会问：氢需求如何嵌入 MRIO？部门聚合会不会掩盖关键工业用氢？PB 下放规则是否任意？",
    "先做敏感性：生产端/消费端/投资端三种责任规则，报告结论稳定区间；部门映射表公开。",
    "先选钢铁、氨、炼化三个终端行业，做 2030/2050 两个情景的责任重分配 demo。",
    ["method", "data", "decision"],
    ["professor", "phd", "idea"]
  ),
  idea(
    "设施级氢能基础设施与工业用氢转型地图",
    "组内能力：设施/工厂级脱碳",
    "母文献是全球路径层面，无法告诉政策制定者哪些炼厂、钢厂、氨厂、港口或工业园区最该优先接入低 PB 氢能。",
    "把组内工厂级脱碳、战略退出和设施清单能力接入氢能基础设施路径，做设施级 PB 转型优先序。",
    [
      "组内 Nature Communications 2025：中国钢铁行业脱碳的工厂层面健康收益。",
      "组内 Nature Communications 2025：中国焦化厂战略性退出的气候与环境收益。",
      "Tong et al. 2019, Nature：现有能源基础设施与 1.5°C 目标的锁定风险。"
    ],
    "设施坐标、产能、设备年龄、工艺路线、可再生资源、电网碳强度、水压力、港口/管网距离、地方健康暴露。",
    "决策变量是设施改造、替代、退役或延后；约束是 PB 安全空间、成本、供给需求、部署速度和区域资源。",
    "把全球氢路径拆到可执行设施，输出“优先改造/优先退出/不建议扩张”的空间清单。",
    "因为顶刊审稿人会更重视可执行的设施级决策，而不是只给全球平均路径。",
    "和组内已有 steel/coking/refinery plant-level 工作高度贴合，落地性强。",
    "审稿人会问：设施数据是否完整？氢能基础设施未来位置是否过度假设？地方水/电约束是否足够精细？",
    "用公开设施库 + 遥感/企业名录交叉验证；把未来基础设施分成保守、政策、激进三套情景。",
    "先选中国或印度的氨厂/炼厂，做设施级低 PB 氢替代优先序。",
    ["data", "decision"],
    ["professor", "phd", "idea"]
  ),
  idea(
    "健康加权的氢能 PB 路径",
    "组内能力：健康影响评估",
    "母文献能说明 PB 压力，但不能说明不同氢能路径会让哪些地区、收入群体或人群承担空气污染和健康代价。",
    "把 PB footprint 后接空气污染、暴露-反应和健康负担模块，形成 PB + health co-benefit 双评价。",
    [
      "组内 Nature Sustainability 2025：供应链能源强度协调带来气候与健康协同收益。",
      "组内 Nature Food 2025：中国食物系统空气污染健康负担中四分之一来自间接排放。",
      "Markandya et al. 2018, The Lancet Planetary Health：巴黎协定路径的健康共益和减排成本。"
    ],
    "制氢/储运排放、空气污染因子、人口栅格、基线死亡率、暴露-反应函数、行业和地区收入分组。",
    "结果变量是 PB 占用、PM2.5/NOx/SO2 暴露、死亡/疾病负担和健康不平等；模型层是 LCA + 空气质量/健康影响。",
    "比较不同氢能路径不仅是否越界，还比较哪种路径带来最大健康共益或最小健康不平等。",
    "因为政策制定者更容易理解“谁获益、谁受损”，这能增强 PB 研究的政策解释力。",
    "这是组内强项，可以把母文献的地球系统语言转成公共健康和公平语言。",
    "审稿人会问：PB 指标和健康指标是否重复计算？健康模型的不确定性是否大于路径差异？",
    "分层报告 PB 约束和健康分配结果，不合成黑箱指数；做暴露-反应函数和排放因子的敏感性。",
    "先做蓝氢、绿氢、煤制氢+CCS 三条路径在一个国家的健康加权比较。",
    ["cross", "decision", "data"],
    ["professor", "idea"]
  ),
  idea(
    "氢泄漏与氢能设施缺失清单",
    "组内能力：遥感 / AI 清单",
    "母文献对氢泄漏、储运和基础设施边界处理有限，但未来氢经济如果扩张，缺失清单会直接影响气候和 PB 结论。",
    "借鉴组内填埋场识别、废弃油气井甲烷清单和遥感/AI 方法，先建立氢能设施与潜在泄漏源清单。",
    [
      "组内 Resources, Conservation and Recycling 2025：基于图像深度学习的快速填埋场识别。",
      "组内 National Science Review 2025：全球废弃油气井甲烷排放清单与减排路径。",
      "Lauvaux et al. 2022, Science：用卫星识别油气甲烷超级排放源。"
    ],
    "设施位置、管线/港口/储罐、遥感影像、企业名录、事故/泄漏记录、能源基础设施地图和气象数据。",
    "先做设施识别和风险分层，再把泄漏率不确定性接入 PB footprint 和气候间接效应。",
    "用数据基础设施补母文献短板：不是先争论泄漏率，而是先知道哪些设施和地区最可能产生系统风险。",
    "因为顶刊常见突破是先建出别人没有的底层数据库，再问更精确的问题。",
    "组内已有遥感识别和甲烷清单经验，迁移路径清晰。",
    "审稿人会问：氢泄漏不能像甲烷一样直接遥感，识别是否只能做 proxy？",
    "明确目标是设施风险清单而非直接观测泄漏；用事故记录、设施类型、管网年龄和压力等级做风险代理。",
    "先做一个国家的制氢厂、储氢设施和氨/甲醇载体设施空间清单。",
    ["data", "decision"],
    ["phd", "idea"]
  ),
  idea(
    "安全空间分配：从 grandfathering 到公平/供应链责任",
    "组内能力：公平、供应链与政策分配",
    "母文献的 PB 安全空间分配是核心假设；如果换成公平、消费责任或发展权原则，结论可能变化。",
    "系统比较 grandfathering、人口、经济福利、消费责任、投资责任和 safe-and-just 分配规则。",
    [
      "Rockstrom et al. 2023, Nature：safe and just Earth system boundaries。",
      "组内 Environmental Science & Technology 2023：基于福利收益分配中国 CO2 排放。",
      "组内 Nature Communications 2025/2024：区域碳不平等和供应链责任。"
    ],
    "国家/行业 PB 占用、人口、历史排放、消费责任、投资流、福利收益和发展水平指标。",
    "核心变量是分配规则、越界概率、责任份额、转型成本和不平等指标。",
    "回答“母文献结论是否依赖某一种安全空间分配规则”，并提出更符合公平/责任逻辑的分配方案。",
    "因为 PB 研究最容易被审稿人攻击的就是下放原则，这个 idea 正面解决它。",
    "能把组内公平/供应链/政策分配能力和母文献最脆弱的假设对接。",
    "审稿人会问：公平原则太多，是否会变成规范讨论而非实证研究？",
    "把规则作为情景，不声称唯一公平；重点报告哪些结论对分配规则稳健，哪些高度敏感。",
    "先对氢生产安全空间做 4 套分配规则比较，输出敏感性矩阵。",
    ["method", "decision"],
    ["professor", "idea"]
  ),
  idea(
    "PB 约束下氢能技术组合的最小失败条件",
    "组内能力：不确定性、技术成本与情景分析",
    "母文献指出部分路径可降低 PB 压力，但对政策制定者来说，更关键的是在什么条件下氢能路径一定会失败。",
    "把技术成本、部署速度、CCS/DACS 可用性、电网脱碳速度、水约束和泄漏率做成失败条件空间。",
    [
      "组内 PNAS 2021：能源转型技术成本预测不确定性比较。",
      "组内 Cell Reports Physical Science 2024：中国净零电力供给需要更好成本不确定性量化。",
      "Lejeune et al. 2026, Nature Communications：PB 约束下的氢生产技术组合。"
    ],
    "技术成本分布、部署速度、制氢路径清单、CCS/DACS 约束、电网情景、水压力和需求情景。",
    "输出不是单一最优路径，而是 failure frontier：哪些参数组合会导致 PB 越界或成本不可接受。",
    "把母文献从“可行路径”升级成“鲁棒可行域”，更适合政策和投资决策。",
    "因为顶刊读者会问：结论在不确定未来下是否稳健，哪些假设一变就崩。",
    "组内已有技术成本不确定性和情景分析基础。",
    "审稿人会问：失败条件是否过度依赖主观参数范围？",
    "参数范围全部对应文献或专家情景；用全局敏感性和情景覆盖率，而不是单点估计。",
    "先用 5 个关键参数做 small model，画出氢能 PB 可行/失败边界。",
    ["method", "decision", "data"],
    ["professor", "phd", "idea"]
  )
];

const paperDetails = {
  "Lejeune et al. 2026": {
    fullTitle: "Pathways to global hydrogen production within planetary boundaries",
    citation: "Lejeune et al. · Nature Communications · 2026",
    doi: "10.1038/s41467-026-70168-x",
    url: "https://doi.org/10.1038/s41467-026-70168-x",
    scoreReason: "98 分，因为它就是母案例：研究问题、PB 下放、前瞻 LCA、随机技术选择模型和地球系统交互权重形成完整链条。",
    relation: "母文献本身。后续检索不是围绕标题，而是围绕这篇的研究设计能力展开。",
    focus: ["AESA 如何把全球 PB 安全空间分配给氢生产。", "随机 TCM 如何决定不同制氢路径的组合。", "effective planetary footprint 为什么比普通多指标 LCA 更能体现边界交互。"],
    mode: {
      professor: "重点判断它的真正贡献是不是“PB 约束下的技术组合决策”，以及哪些假设最容易被审稿人攻击。",
      phd: "按问题-数据-模型-结论顺序读，把术语 PB、AESA、prospective LCA、TCM 先串起来。",
      idea: "把它当母案例模板：换行业、换尺度、换决策层、换社会接受度层，都可以长出新选题。"
    }
  },
  "Wei et al. 2024": {
    fullTitle: "Future environmental impacts of global hydrogen production pathways",
    citation: "Wei et al. · Energy & Environmental Science · 2024",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=Wei+2024+Energy+Environmental+Science+global+hydrogen+production+environmental+impacts",
    scoreReason: "91 分，因为它接近母案例的对象层：全球氢生产、未来路径和环境影响，是校验母案例路径参数与情景假设的重要外部证据。",
    relation: "同领域证据文献。它不一定有母文献的 PB 交互模型，但能帮助判断氢路径清单、未来能源结构和影响类别是否合理。",
    focus: ["看制氢路径分类是否覆盖灰氢、蓝氢、绿氢和生物质路线。", "看未来情景如何处理电力结构、CCS、可再生能源和需求增长。", "对照母文献中哪些环境压力来自路径清单，哪些来自 PB 分配。"],
    mode: {
      professor: "重点看它能否作为母案例参数与情景的外部稳健性支撑。",
      phd: "先读图表和路径分类，理解氢生产为什么不能只看碳排放。",
      idea: "可迁移为“路径参数数据库 + PB 约束优化”的数据底座。"
    }
  },
  "Terlouw et al. 2024": {
    fullTitle: "Future hydrogen economies imply environmental trade-offs",
    citation: "Terlouw et al. · Nature Communications · 2024",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=%22Future+hydrogen+economies+imply+environmental+trade-offs%22",
    scoreReason: "88 分，因为它直接说明氢经济不是单一减碳故事，而是存在资源、环境和供需错配权衡。",
    relation: "同领域对照文献。它帮助解释母文献为什么必须从单一气候目标升级到 PB 多边界判断。",
    focus: ["看作者如何定义未来氢经济的环境 trade-off。", "看哪些终端用途或供需配置最容易造成负担转移。", "对照母文献的有效行星足迹，判断 trade-off 是否被系统性放大。"],
    mode: {
      professor: "重点看它是否能支持母案例的核心论断：低碳氢也可能越界。",
      phd: "把它作为进入氢经济环境权衡的第一篇应用文献。",
      idea: "可延伸成“氢经济用途排序”或“基础设施边界扩展”的选题。"
    }
  },
  "Rockstrom et al. 2009": {
    fullTitle: "A safe operating space for humanity",
    citation: "Rockstrom et al. · Nature · 2009",
    doi: "10.1038/461472a",
    url: "https://doi.org/10.1038/461472a",
    scoreReason: "97 分，因为它提出安全运行空间，是所有 PB 研究的概念源头。",
    relation: "理论源头。母文献使用 PB 作为绝对可持续性边界，必须回到这篇理解边界的规范含义。",
    focus: ["PB 为什么不是相对减排指标。", "哪些边界有全球阈值，哪些边界下放争议更大。", "安全空间语言如何转化为行业/技术评价。"],
    mode: {
      professor: "重点看 PB 作为规范框架是否适合下放到氢生产。",
      phd: "先读摘要和边界表，建立 PB 的基础词汇。",
      idea: "可用于寻找 PB 框架在企业、行业、设施级的下放空白。"
    }
  },
  "Steffen et al. 2015": {
    fullTitle: "Planetary boundaries: Guiding human development on a changing planet",
    citation: "Steffen et al. · Science · 2015",
    doi: "10.1126/science.1259855",
    url: "https://doi.org/10.1126/science.1259855",
    scoreReason: "96 分，因为它更新 PB 框架，强化了 PB 与人类发展和多边界风险的关系。",
    relation: "方法框架升级文献。母文献的 PB 指标选择和边界解释需要这篇作为基准。",
    focus: ["九个 PB 的更新逻辑。", "biosphere integrity、biogeochemical flows 等边界为什么难处理。", "PB 框架怎样从地球系统科学进入可持续转型研究。"],
    mode: {
      professor: "重点看哪些 PB 指标在行业应用中最容易被质疑。",
      phd: "和 Rockstrom 2009 连读，理解 PB 框架如何演化。",
      idea: "可从尚未充分行业化的 PB 指标里找研究空白。"
    }
  },
  "Lade et al. 2020": {
    fullTitle: "Human impacts on planetary boundaries amplified by Earth system interactions",
    citation: "Lade et al. · Nature Sustainability · 2020",
    doi: "10.1038/s41893-019-0454-4",
    url: "https://doi.org/10.1038/s41893-019-0454-4",
    scoreReason: "94 分，因为它把 PB 之间的地球系统交互显式建模，正是母文献 effective planetary footprint 的方法支点。",
    relation: "关键方法来源。母文献不是平均加权多指标，而是借这类交互逻辑判断哪个边界越界会放大系统风险。",
    focus: ["交互矩阵如何构造。", "为什么某个边界的压力会通过反馈放大其他边界。", "这种交互权重如何进入优化或排序。"],
    mode: {
      professor: "重点审查交互权重是否足够可辩护。",
      phd: "读方法图，理解 PB 之间不是独立指标。",
      idea: "可迁移到行业风险预算、多目标优化或政策优先序设计。"
    }
  },
  "Bachmann et al. 2023": {
    fullTitle: "Towards circular plastics within planetary boundaries",
    citation: "Bachmann et al. · Nature Sustainability · 2023",
    doi: "10.1038/s41893-022-01054-9",
    url: "https://doi.org/10.1038/s41893-022-01054-9",
    scoreReason: "95 分，因为它是在氢能以外最接近母案例的系统级 PB 应用：把一个行业转型方案放进绝对边界内判断。",
    relation: "相邻母案例。它证明 PB 方法可以从地球系统框架转化为具体行业组合设计。",
    focus: ["塑料系统边界如何定义。", "循环策略如何映射到 PB 指标。", "哪些边界成为约束瓶颈，而不只是碳。"],
    mode: {
      professor: "重点比较它和氢能母文献谁的系统边界、约束和决策输出更强。",
      phd: "作为 PB-LCA 行业应用范例读。",
      idea: "可作为复制到钢铁、水泥、氨、航运燃料等行业的模板。"
    }
  },
  "Meys et al. 2021": {
    fullTitle: "Achieving net-zero greenhouse gas emission plastics by a circular carbon economy",
    citation: "Meys et al. · Science · 2021",
    doi: "10.1126/science.abg9853",
    url: "https://doi.org/10.1126/science.abg9853",
    scoreReason: "92 分，因为它展示大型行业如何通过组合路径实现净零，是技术组合设计的顶刊样板。",
    relation: "决策设计类比。母文献也不是单一路径比较，而是技术组合在约束下的系统选择。",
    focus: ["如何把行业路径拆成可组合选项。", "净零目标下哪些路径是瓶颈。", "组合设计如何从描述性 LCA 走向决策模型。"],
    mode: {
      professor: "重点看它的组合逻辑能否支撑氢能基础设施 portfolio 研究。",
      phd: "看图和路径表，学习顶刊如何讲行业转型故事。",
      idea: "可借用为“PB 约束下的行业组合优化”。"
    }
  },
  "Katelhon et al. 2019": {
    fullTitle: "Climate change mitigation potential of carbon capture and utilization in the chemical industry",
    citation: "Katelhon et al. · PNAS · 2019",
    doi: "10.1073/pnas.1821029116",
    url: "https://doi.org/10.1073/pnas.1821029116",
    scoreReason: "90 分，因为它把 CCU 放进化学工业系统中评价，不停留在单技术足迹。",
    relation: "相邻技术系统文献。它帮助判断母文献中 DACS/CCU 这类负排放或利用技术为什么不能被当作免费抵消。",
    focus: ["系统边界如何覆盖化工供应链。", "CCU 何时真的减排，何时只是转移排放。", "技术替代基准如何设定。"],
    mode: {
      professor: "重点看 counterfactual 和系统边界是否严谨。",
      phd: "作为 CCU 环境评价入门文献读。",
      idea: "可迁移到氢基化学品、氨、甲醇的 PB 评价。"
    }
  },
  "Qiu et al. 2022": {
    fullTitle: "Environmental trade-offs of direct air capture technologies in climate change mitigation toward 2100",
    citation: "Qiu et al. · Nature Communications · 2022",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=%22Environmental+trade-offs+of+direct+air+capture+technologies%22",
    scoreReason: "87 分，因为它提醒 DACS 也有能源、材料和环境权衡，不能在 PB 模型里被视作无成本补丁。",
    relation: "边界扩展文献。母文献讨论 DACS 对降低 PB 压力的作用，这篇帮助评估其环境代价。",
    focus: ["DAC 技术路径和能源需求。", "到 2100 年情景中环境压力如何变化。", "哪些影响类别会抵消气候收益。"],
    mode: {
      professor: "重点看它是否足以支撑对 DACS 的保守假设。",
      phd: "先理解 DAC 为什么不是单纯负排放。",
      idea: "可发展为“负排放技术的 PB 风险预算”。"
    }
  },
  "Bechtel & Scheve 2013": {
    fullTitle: "Mass support for global climate agreements depends on institutional design",
    citation: "Bechtel & Scheve · PNAS · 2013",
    doi: "10.1073/pnas.1306374110",
    url: "https://doi.org/10.1073/pnas.1306374110",
    scoreReason: "88 分，因为它用实验识别制度设计如何改变气候政策支持，是把 PB 政策转成可测试接受度研究的直接先例。",
    relation: "跨学科迁移文献。母文献解决技术-地球系统可持续性，这篇帮助补上政策接受度和制度设计层。",
    focus: ["实验如何随机化政策制度属性。", "结果变量如何测量支持度。", "如何避免只做态度相关性。"],
    mode: {
      professor: "重点看它的识别设计能否用于 PB 政策沟通。",
      phd: "学习气候政策 survey experiment 的基本结构。",
      idea: "可直接迁移成 PB 显性/隐性框架、单目标/多目标政策实验。"
    }
  },
  "Battiston et al. 2017": {
    fullTitle: "A climate stress-test of the financial system",
    citation: "Battiston et al. · Nature Climate Change · 2017",
    doi: "10.1038/nclimate3255",
    url: "https://doi.org/10.1038/nclimate3255",
    scoreReason: "90 分，因为它把气候冲击转成金融网络压力测试，是 PB 安全空间风险预算的强类比。",
    relation: "跨学科方法类比。母文献处理 PB 越界风险，这篇提供把风险分配、传导和尾部损失建模的思路。",
    focus: ["风险暴露如何定义。", "网络传导和压力测试如何形成。", "是否可迁移到行业 PB 预算分配。"],
    mode: {
      professor: "重点判断风险预算类比是否严谨，避免只是金融术语包装。",
      phd: "理解 stress test 如何从情景变成系统风险。",
      idea: "可迁移成“PB 分配规则的 tail-risk 比较”。"
    }
  },
  "Markandya et al. 2018": {
    fullTitle: "Health co-benefits from air pollution and mitigation costs of the Paris Agreement: a modelling study",
    citation: "Markandya et al. · The Lancet Planetary Health · 2018",
    doi: "10.1016/S2542-5196(18)30029-9",
    url: "https://doi.org/10.1016/S2542-5196(18)30029-9",
    scoreReason: "89 分，因为它把气候路径转译为健康共益和成本，是 PB 研究走向政策可解释性的顶刊样板。",
    relation: "跨学科扩展文献。母文献讲地球系统安全，这篇提示还可以问谁承担健康损害、谁获得共益。",
    focus: ["暴露-反应函数如何接入情景。", "健康共益与减排成本如何比较。", "哪些人群和地区受益/受损。"],
    mode: {
      professor: "重点看健康模块是否会增强 PB 论文的政策贡献。",
      phd: "学习环境压力如何转译为健康终点。",
      idea: "可迁移为健康加权 PB 足迹。"
    }
  },
  "Lauvaux et al. 2022": {
    fullTitle: "Global assessment of oil and gas methane ultra-emitters",
    citation: "Lauvaux et al. · Science · 2022",
    doi: "10.1126/science.abj4351",
    url: "https://doi.org/10.1126/science.abj4351",
    scoreReason: "91 分，因为它通过卫星数据发现设施级超级排放源，说明顶刊贡献有时来自构建别人没有的底层清单。",
    relation: "数据基础设施类比。母文献是全球模型，这篇提示下一步可以走向设施级氢能清单和泄漏治理。",
    focus: ["如何用遥感识别缺失排放源。", "如何验证设施级发现。", "清单数据如何改变治理优先序。"],
    mode: {
      professor: "重点看设施级数据能否把 PB 模型落到可执行政策。",
      phd: "学习数据驱动顶刊论文如何从观测走向治理含义。",
      idea: "可迁移成氢能设施地图、泄漏风险或基础设施优先退役研究。"
    }
  },
  "Meckling et al. 2015": {
    fullTitle: "Winning coalitions for climate policy",
    citation: "Meckling et al. · Science · 2015",
    doi: "10.1126/science.aab1336",
    url: "https://doi.org/10.1126/science.aab1336",
    scoreReason: "88 分，因为它把气候政策能否执行解释为联盟问题，补足技术最优和政治可行性之间的断裂。",
    relation: "政策执行类比。母文献给出 PB 对齐技术组合，但没有回答这种组合能否形成稳定支持联盟。",
    focus: ["政策联盟如何形成。", "产业、地区和选民利益如何影响政策耐久性。", "如何把技术路径转译为政治可行性变量。"],
    mode: {
      professor: "重点看能否把 PB 研究从“最优路径”推进到“可执行路径”。",
      phd: "作为气候政策政治经济学入门读。",
      idea: "可迁移成 PB 政策反馈、联盟设计和政策排序研究。"
    }
  },
  "Bjorn et al. 2020": {
    fullTitle: "Review of life-cycle based methods for absolute environmental sustainability assessment and their applications",
    citation: "Bjorn et al. · Environmental Research Letters · 2020",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=%22life-cycle+based+methods+for+absolute+environmental+sustainability+assessment%22",
    scoreReason: "89 分，因为它整理 AESA/PB-LCA 方法谱系，是理解母文献方法合法性的综述型入口。",
    relation: "方法综述。它解释母文献为什么不是普通 LCA，而是绝对环境可持续性评估。",
    focus: ["AESA 方法分类。", "sharing principle 和 normalization 的争议。", "哪些应用场景最适合 PB-LCA。"],
    mode: {
      professor: "重点看母文献方法选择在 AESA 谱系中的位置。",
      phd: "作为 PB-LCA 入门综述先读。",
      idea: "用它定位哪些行业/尺度还没被 AESA 做透。"
    }
  },
  "Katelhon et al. 2016": {
    fullTitle: "Technology choice model for consequential life cycle assessment of emerging technologies",
    citation: "Katelhon et al. · Environmental Science & Technology · 2016",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=Katelhon+2016+Environmental+Science+Technology+technology+choice+model+consequential+life+cycle+assessment",
    scoreReason: "86 分，因为它是母文献随机技术选择模型的经典方法背景。",
    relation: "方法源头。母文献用 TCM 让未来技术组合不是手工指定，而是由约束和可替代性生成。",
    focus: ["技术选择如何进入 consequential LCA。", "随机性和不确定性如何表达。", "TCM 与静态情景比较的差异。"],
    mode: {
      professor: "重点看 TCM 的假设是否足以支撑母文献的技术组合结论。",
      phd: "作为理解 TCM 的方法补课文献。",
      idea: "可迁移到其他行业的未来技术组合选择。"
    }
  },
  "Ehrenstein et al. 2020": {
    fullTitle: "Planetary boundaries for environmental sustainability assessment in hydrogen supply chains",
    citation: "Ehrenstein et al. · Applied Energy · 2020",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=Ehrenstein+2020+Applied+Energy+planetary+boundaries+hydrogen+supply+chain",
    scoreReason: "78 分，因为它主题相关但期刊和系统设计强度低于默认顶刊门槛；适合广泛探索时补边界。",
    relation: "早期相近应用。它说明 PB 可用于氢供应链，但深度和全球系统建模不如母文献。",
    focus: ["供应链边界如何设定。", "与母文献全球生产系统相比少了哪些模型层。", "哪些局部指标可借鉴。"],
    mode: {
      professor: "只作为背景，不应作为核心支撑。",
      phd: "用于理解 PB 在氢供应链中的早期应用。",
      idea: "可提示基础设施/供应链边界扩展。"
    }
  },
  "Richardson et al. 2023": {
    fullTitle: "Earth beyond six of nine planetary boundaries",
    citation: "Richardson et al. · Science Advances · 2023",
    doi: "10.1126/sciadv.adh2458",
    url: "https://doi.org/10.1126/sciadv.adh2458",
    scoreReason: "95 分，因为它更新 PB 状态和控制变量，是母文献判断全球安全空间是否紧张的背景基线。",
    relation: "PB 框架现状文献。母文献做行业分配前，需要知道全球边界本身的最新状态。",
    focus: ["哪些 PB 已经越界。", "各边界控制变量和不确定性。", "哪些边界最适合/最不适合行业下放。"],
    mode: { professor: "重点审查母文献使用的 PB 指标是否跟最新状态一致。", phd: "作为 PB 现状更新入门读。", idea: "从已越界边界中找氢能最容易造成负担转移的方向。" }
  },
  "Rockstrom et al. 2023": {
    fullTitle: "Safe and just Earth system boundaries",
    citation: "Rockstrom et al. · Nature · 2023",
    doi: "10.1038/s41586-023-06083-8",
    url: "https://doi.org/10.1038/s41586-023-06083-8",
    scoreReason: "94 分，因为它把 safe boundary 和 justice boundary 连接起来，正好补母文献在公平分配上的潜在短板。",
    relation: "PB 分配和公平扩展。母文献主要做安全空间内技术路径，这篇提示可以进一步问谁获得空间、谁承担代价。",
    focus: ["safe 与 just 的区别。", "边界下放中公平原则如何进入。", "是否能和供应链责任、消费责任结合。"],
    mode: { professor: "重点看公平边界能否成为母文献的顶刊级延伸。", phd: "作为 PB 与公平/正义结合的入口。", idea: "可生成 PB 空间分配、公平和供应链责任选题。" }
  },
  "Springmann et al. 2018": {
    fullTitle: "Options for keeping the food system within environmental limits",
    citation: "Springmann et al. · Nature · 2018",
    doi: "10.1038/s41586-018-0594-0",
    url: "https://doi.org/10.1038/s41586-018-0594-0",
    scoreReason: "93 分，因为它把一个大系统放进多环境限制内做政策/技术组合，是氢能 PB 研究的重要邻近母案例。",
    relation: "系统转型类比。母文献问氢生产能否在 PB 内，这篇问食物系统能否在环境限制内。",
    focus: ["环境限制如何转成模型约束。", "需求、技术和治理选项如何组合。", "结论如何避免单目标优化。"],
    mode: { professor: "重点比较它和母文献的系统边界和政策组合逻辑。", phd: "学习如何读多环境限制下的系统转型论文。", idea: "可迁移到氢能终端用途组合和需求侧约束。" }
  },
  "Meng group 2025 Freshwater PB supply chains": {
    fullTitle: "Tracking grid-level freshwater boundary exceedance along global supply chains from consumption to impact",
    citation: "Meng group · Nature Water · 2025",
    doi: "组内网站记录，待最终 DOI 核验",
    url: "https://caiyanx911-sketch.github.io/ucl-hanglu-literature-skill/",
    scoreReason: "93 分，因为它与母文献的 PB 方向高度贴合，又直接体现组内供应链和网格尺度边界能力。",
    relation: "组内能力对接。可把母文献的全球氢生产 PB 问题扩展为消费责任、供应链责任和空间水压力问题。",
    focus: ["如何把 PB 越界从生产点追踪到消费端。", "网格尺度边界如何与 MRIO 连接。", "能否迁移到氢能用水、可再生电力和关键材料。"],
    mode: { professor: "重点看它能否成为组内差异化优势，而不是外部文献重复。", phd: "理解供应链 PB 追踪的基础框架。", idea: "直接生成氢能供应链 PB 责任分配选题。" }
  },
  "Meng group 2025 Supply-chain climate-health": {
    fullTitle: "Coordinating supply-chain energy intensity for climate and health co-benefits",
    citation: "Meng group · Nature Sustainability · 2025",
    doi: "组内网站记录，待最终 DOI 核验",
    url: "https://caiyanx911-sketch.github.io/ucl-hanglu-literature-skill/",
    scoreReason: "92 分，因为它提供组内最强的碳-污染-健康共益框架，可补母文献政策解释力。",
    relation: "组内能力对接。母文献停在地球系统边界，这类工作能把边界压力转成健康收益和公平结果。",
    focus: ["供应链能源强度如何协调。", "健康共益如何计算。", "能否与氢能技术组合的空气污染变化连接。"],
    mode: { professor: "重点看健康模块能否成为顶刊贡献增量。", phd: "理解 MRIO 与健康影响评估如何结合。", idea: "生成健康加权 PB 氢能路径研究。" }
  },
  "Meng group 2025 Plant-level steel health benefits": {
    fullTitle: "Plant-level decarbonization pathways and health benefits in China's steel industry",
    citation: "Meng group · Nature Communications · 2025",
    doi: "组内网站记录，待最终 DOI 核验",
    url: "https://caiyanx911-sketch.github.io/ucl-hanglu-literature-skill/",
    scoreReason: "91 分，因为它展示组内设施/工厂级路径和健康收益能力，适合迁移到氢能基础设施和工业用氢。",
    relation: "组内能力对接。母文献是全球生产系统，组内能力可以把问题推到设施级和工业园区级。",
    focus: ["设施级清单如何建。", "技术路径如何排序。", "健康收益如何成为退出/改造优先序。"],
    mode: { professor: "重点看设施级尺度是否能形成区别于母文献的原创贡献。", phd: "学习设施级脱碳论文的结构。", idea: "生成设施级氢能替代、用氢工业园区和改造优先序选题。" }
  }
};

const dataCentreCase = {
  title: "全球数据中心点源行星边界足迹与治理",
  meta: "NC 氢气母案例 · 数据中心 Scope 1+2 · 1990-2024 历史 / 2025-2060 未来 / 点源治理",
  designChain: [
    {
      key: "问题",
      title: "未来全球氢生产是否能落在行星边界安全空间内？",
      body: "母文献真正问的不是绿氢、蓝氢谁更干净，而是在未来氢需求扩张下，全球制氢系统能否满足被分配的 PB 安全运行空间。"
    },
    {
      key: "缺口",
      title: "只做气候或静态 LCA 会漏掉负担转移",
      body: "既有氢能研究容易把问题简化成低碳制氢路径比较，但母文献强调：气候改善可能把压力转移到土地、生物圈、氮磷循环、水或其他边界。"
    },
    {
      key: "数据链",
      title: "未来情景 + 前瞻 LCA 数据库 + 制氢技术清单",
      body: "作者把气候兼容的未来氢需求/能源情景，与 premise、ecoinvent 等前瞻 LCA 数据链连接，再为不同制氢路径构建未来生命周期清单。"
    },
    {
      key: "方法链",
      title: "AESA / PB 下放 → 前瞻 LCA → 随机技术选择模型",
      body: "文章先把全球 PB 安全空间下放到氢生产系统，再用前瞻 LCA 计算多条路径足迹，并通过 stochastic technology choice model 生成未来技术组合。"
    },
    {
      key: "判断",
      title: "用超越倍数判断路径是否仍越界",
      body: "作者不是只报告排放或 LCA 分数，而是把足迹除以安全空间，判断各边界是否越界，并识别哪些边界成为未来氢生产的约束。"
    },
    {
      key: "贡献",
      title: "把行业技术路径放进地球系统约束中评估",
      body: "母文献的贡献是把氢生产从相对减排比较，推进到绝对可持续性判断：即便某路径更低碳，也未必能在多重 PB 内扩张。"
    }
  ],
  lessons: [
    ["先读方法，不先抄题目", "母文献的可迁移价值不是“氢气”，而是 PB 安全空间、前瞻 LCA、情景分配和超越倍数这条研究设计链。"],
    ["数据怎么弄是核心", "要重点看作者如何把未来情景、技术路线、生命周期清单和 PB 控制变量接起来；数据链不清楚，后面的结论就站不住。"],
    ["方法不是单个模型", "文章的方法是组合链条：AESA/PB 下放、prospective LCA、stochastic TCM、边界交互和不确定性，而不是一个孤立算法。"],
    ["创新在绝对约束", "母文献把问题从“哪种技术更好”推进到“在地球系统安全空间内还能不能扩张”，这是 PB 文章的核心思想。"],
    ["迁移到新课题要先复原母案例", "只有先读懂母文献的数据链和方法链，后面把它迁移到数据中心、点源或 IO/MRIO 才不会变成生硬套框架。"]
  ],
  groupCapabilities: [
    ["点源主线", "适合做设施异质性、局地水/生态叠加、高风险点源识别和定向治理。"],
    ["IO / MRIO 主线", "适合做 Scope 3、供应链责任、跨区域负担转移和消费端压力；更适合作为第二篇。"],
    ["设施/工厂级清单", "把数据中心从行业平均量拆到 facility-quarter point source，并做高风险点源排序。"],
    ["空间/网格边界", "淡水压力、生物多样性、土地占用和周边环境叠加，是本题最关键的异质性来源。"],
    ["情景与技术成本", "容量扩张、AI 需求、PUE/WUE、电网脱碳和治理措施组合，可形成 2025-2060 情景。"],
    ["AI / LLM 数据补全", "LLM 只做 evidence extraction：从报告、许可、ESG、新闻抽取冷却方式、PUE/WUE、备用电源并保留来源。"],
    ["点源治理优先序", "借鉴组内工厂级脱碳/退出优先序，把 PB 压力转成可执行治理名单。"],
    ["MRIO 暂缓到第二篇", "Scope 3/IO 很有潜力，但第一篇先不做，避免主文过载和边界不清。"]
  ],
  searchAudit: [
    {
      title: "母文献要更新",
      body: "网站不应再显示“氢能就是目标对象”。它应显示“NC 氢气是方法母案例，数据中心是当前研究对象”。",
      action: "文献检索从氢能文献池切换到数据中心数据、PB 方法、淡水、土地/生物多样性和治理五条线。"
    },
    {
      title: "数据源不等于顶刊",
      body: "BNEF/DCByte、IEA、LBNL/DOE、WRI Aqueduct 等不一定是顶刊论文，但对数据链比普通论文更关键。",
      action: "质量门槛新增“关键数据源”角色，不能被“只看顶刊”误杀。"
    },
    {
      title: "idea 先查重再生成",
      body: "选题工作台不能只写“我们能做什么”，必须先核实同对象、同方法、同数据尺度、同决策输出是否已被顶刊覆盖。",
      action: "只有确认存在未覆盖缺口，并且缺口能由组内点源或 IO/MRIO 能力补上，才进入正式 idea。"
    },
    {
      title: "CSV 不能直接做历史",
      body: "CSV 把季度日期压成年份，2025 三个季度会混在一起；正式建模必须用 Excel 原表 Date 字段。",
      action: "历史足迹按 facility-quarter 面板计算，再按年度或季度汇总。"
    },
    {
      title: "五个创新点会改变文献池",
      body: "五个创新点不应该混进主文献地图。主地图先帮助陌生领域入门；创新点核验板块再判断每个创新点需要哪些定向文献。",
      action: "每个创新点至少保留核心文献、方法文献、数据源和审稿风险文献，并标注是否重复已有研究。"
    }
  ],
  branches: [
    {
      id: "problem",
      name: "问题分支",
      type: "数据中心 / AI 基础设施",
      query: '"data centres" OR "data centers" AND electricity AND water AND environmental footprint AND AI',
      why: "找数据中心能耗、水耗、PUE/WUE、AI 扩张和电网压力的直接证据。"
    },
    {
      id: "method",
      name: "PB 方法分支",
      type: "行星边界 / AESA",
      query: '"planetary boundaries" AND ("life cycle assessment" OR "absolute environmental sustainability assessment" OR downscaling)',
      why: "找 PB 安全空间、AESA、下放原则、交互权重和超越指数的方法源头。"
    },
    {
      id: "data",
      name: "点源数据分支",
      type: "设施清单 / 补字段",
      query: '"data center" AND facility-level AND capacity AND PUE AND cooling AND "water usage effectiveness"',
      why: "围绕 BNEF/DCByte 字段、PUE、utilization、cooling、WUE 和电网因子检查数据可行性。"
    },
    {
      id: "decision",
      name: "点源治理分支",
      type: "高影响点源 / 情景治理",
      query: '"point source" AND targeted mitigation AND facility-level AND climate OR "super emitters"',
      why: "找高影响点源优先治理、设施锁定、前 1/5/10% 定向治理的顶刊类比。"
    },
    {
      id: "cross",
      name: "空间异质性分支",
      type: "淡水 / 生物多样性 / 土地",
      query: '"water stress" AND "data centers" OR "biodiversity intactness" AND land-use AND facility location',
      why: "支撑淡水压力和生物多样性叠加，避免只做全球平均碳足迹。"
    }
  ],
  clusters: [
    {
      id: "pb-core",
      name: "行星边界核心框架",
      summary: "先建立 PB 这套语言本身：安全运行空间、边界状态、安全与正义、边界交互。没有这层，后面的数据中心只是普通环境足迹。",
      branches: ["method"],
      papers: [
        paper("Rockstrom et al. 2009", "Nature", 97, "提出安全运行空间，是 PB 研究的概念源头。", ["method"], "top", ["professor", "phd"]),
        paper("Steffen et al. 2015", "Science", 96, "更新 PB 框架，为多边界指标选择提供基础。", ["method"], "top", ["professor", "phd"]),
        paper("Richardson et al. 2023", "Science Advances", 95, "更新九个行星边界的最新状态，用于说明全球安全空间已经紧张。", ["method", "data"], "top", ["professor", "phd"]),
        paper("Rockstrom et al. 2023", "Nature", 94, "safe and just Earth system boundaries，可用于讨论数据中心安全空间分配和公平敏感性。", ["method", "decision"], "top", ["professor", "idea"]),
        paper("Lade et al. 2020", "Nature Sustainability", 94, "研究 PB 之间的交互和放大效应，支撑多边界指数不能简单相加的审稿防守。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("O'Neill et al. 2018", "Nature Sustainability", 92, "把社会基础和行星边界放在同一框架里，帮助理解安全空间分配的公平维度。", ["method", "decision"], "top", ["professor", "phd", "idea"])
      ]
    },
    {
      id: "aesa-method",
      name: "AESA / PB-LCA 下放方法",
      summary: "回答一个关键问题：如何把全球安全空间合法地下放到行业、设施或消费活动，而不是把 LCA 指标简单改名成 PB。",
      branches: ["method"],
      papers: [
        paper("Ryberg et al. 2020", "Journal of Cleaner Production", 93, "综述 PB 下放方法，是判断 sharing principle、SoSOS 和 AESA 口径的关键方法入口。", ["method"], "classic", ["professor", "phd", "idea"]),
        paper("Hjalsted et al. 2021", "Journal of Industrial Ecology", 91, "比较伦理分配原则如何 operationalize PB，可用于防守数据中心安全空间分配为何不任意。", ["method", "decision"], "classic", ["professor", "phd", "idea"]),
        paper("Bjorn et al. 2020", "Environmental Research Letters", 89, "AESA/PB-LCA 方法综述，帮助界定下放原则、sharing principle 和绝对可持续性口径。", ["method"], "classic", ["professor", "phd"]),
        paper("Clausen et al. 2024", "Journal of Industrial Ecology", 87, "综述气候变化边界进入 LCA 的方法与政策含义，适合做 PB-LCA 方法更新。", ["method"], "classic", ["professor", "phd"]),
        paper("Paulillo & Sanye-Mengual 2024", "Resources, Environment and Sustainability", 86, "批判性综述 PB 进入 LCA 的不同路径，用于建立方法边界和审稿防守。", ["method"], "classic", ["professor", "phd", "idea"])
      ]
    },
    {
      id: "sector-pb-applications",
      name: "相邻行业 PB 应用",
      summary: "看顶刊怎么把一个行业放进行星边界：食品、塑料、化工、氢气。这些不是数据中心文献，但决定本项目能否像顶刊那样组织问题。",
      branches: ["method", "decision"],
      papers: [
        paper("Lejeune et al. 2026", "Nature Communications", 98, "方法母案例：用前瞻清单、PB 安全空间和未来情景判断全球氢生产是否越界。", ["method", "decision", "data"], "top", ["professor", "phd", "idea"]),
        paper("Bachmann et al. 2023", "Nature Sustainability", 95, "循环塑料 PB 应用，是从行业系统到多边界约束的相邻母案例。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Springmann et al. 2018", "Nature", 93, "食物系统环境限制研究，展示如何把多环境边界转化为系统治理选项。", ["method", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Gerten et al. 2020", "Nature Sustainability", 91, "在陆地 PB 内满足需求的系统研究，可支撑土地/生物圈边界下的需求满足叙事。", ["method", "decision"], "top", ["professor", "idea"]),
        paper("Meng et al. 2023", "PNAS", 92, "化工行业 planet-compatible pathways，是组内/近邻能力与行业 PB 路径的直接参照。", ["method", "decision"], "top", ["professor", "idea"]),
        paper("Vidal et al. 2024", "Nature", 91, "循环碳和塑料经济系统转型研究，适合借鉴大型系统路径与材料/能源耦合。", ["method", "decision"], "top", ["professor", "idea"])
      ]
    },
    {
      id: "data-centre-object",
      name: "数据中心对象与数据链",
      summary: "这里不是 PB 方法源头，而是研究对象本身：电力、水、PUE/WUE、AI 服务器、设施级数据和未来情景。",
      branches: ["problem", "data"],
      papers: [
        paper("Masanet et al. 2020", "Science", 96, "重新校准全球数据中心能耗估计，说明效率提升曾抵消需求增长，是能耗核算的顶刊基准。", ["problem", "data"], "top", ["professor", "phd", "idea"]),
        paper("Siddik et al. 2021", "Environmental Research Letters", 91, "美国数据中心碳/水足迹研究，使用基础设施和设施级数据，是水-碳核算直接近邻。", ["problem", "data"], "top", ["professor", "phd", "idea"]),
        paper("Xiao et al. 2025", "Nature Sustainability", 94, "AI 服务器环境影响与净零路径，直接说明 AI/data-centre 的能源、水、碳路径已有顶刊近邻。", ["problem", "data", "decision"], "top", ["professor", "phd", "idea"]),
        paper("Mytton 2021", "npj Clean Water", 90, "数据中心水消耗核心文献，区分直接冷却水、间接发电用水和水透明度问题。", ["cross", "data", "problem"], "top", ["professor", "phd", "idea"]),
        paper("Shehabi et al. 2024", "LBNL / Berkeley Lab report", 88, "美国数据中心能源使用权威报告，适合做外部校验和参数边界，不是 PB 顶刊。", ["problem", "data"], "dataset", ["professor", "phd"]),
        paper("BNEF/DCByte 2026", "Global Data Center Live IT Capacity Database", 88, "当前项目主数据资产：1990Q1-2025Q3 全球设施季度容量、面积、PUE、经纬度和状态字段。", ["data", "problem"], "dataset", ["professor", "phd", "idea"]),
        paper("IEA 2025", "Energy and AI", 85, "情景和政策背景数据源；用于未来需求校验，不作为 PB 核心文献。", ["problem", "data"], "dataset", ["professor", "phd", "idea"])
      ]
    },
    {
      id: "spatial-heterogeneity",
      name: "空间异质性方法源",
      summary: "支撑“点源不等于行业平均”：水压力、生物多样性完整性、土地利用、全球空间风险叠加。",
      branches: ["cross", "method", "data"],
      papers: [
        paper("Newbold et al. 2016", "Science", 92, "将土地利用对生物多样性完整性的影响与 PB 联系，是 BII 空间叠加的重要先例。", ["cross", "method"], "top", ["professor", "phd", "idea"]),
        paper("Mekonnen & Hoekstra 2016", "Science Advances", 91, "全球人口暴露于严重水稀缺，支撑局地水压力而非全球平均水量的必要性。", ["cross", "method"], "top", ["professor", "phd"]),
        paper("Vorosmarty et al. 2010", "Nature", 90, "全球人类水安全和河流生物多样性威胁图谱，可作为淡水生态压力空间叠加先例。", ["cross", "method"], "top", ["professor", "phd", "idea"]),
        paper("Poore & Nemecek 2018", "Science", 90, "大样本产品级环境影响数据库，适合借鉴差异化足迹和高影响点识别逻辑。", ["data", "decision"], "top", ["professor", "phd", "idea"]),
        paper("WRI Aqueduct", "Global water risk data", 86, "水压力空间数据源，用于把数据中心位置映射到流域尺度风险。", ["cross", "data"], "dataset", ["professor", "phd", "idea"]),
        paper("Meng group 2025 Freshwater PB supply chains", "Nature Water", 93, "组内网格尺度淡水边界能力，可直接支撑本题的淡水 PB 异质性。", ["cross", "data"], "top", ["professor", "idea"])
      ]
    },
    {
      id: "point-source-governance",
      name: "点源治理与设施级类比",
      summary: "如果文章要从核算走到治理，必须读少数高影响点源、基础设施锁定和定向治理的顶刊逻辑。",
      branches: ["decision", "data"],
      papers: [
        paper("Lauvaux et al. 2022", "Science", 93, "卫星发现油气甲烷超级排放源，说明点源清单可以改变治理优先级。", ["decision", "data"], "top", ["professor", "idea"]),
        paper("Davis et al. 2010", "Science", 90, "现有能源基础设施锁定排放，支撑设施存量和寿命进入治理路径。", ["decision", "data"], "top", ["professor", "idea"]),
        paper("Tong et al. 2019", "Nature", 92, "把现有能源基础设施与 1.5°C 目标相连，适合借鉴设施级未来约束。", ["decision", "data"], "top", ["professor", "idea"]),
        paper("Meys et al. 2021", "Science", 91, "大型行业组合路径研究，支撑治理措施组合而非单措施比较。", ["decision"], "top", ["professor", "idea"]),
        paper("Plant-level group analogs", "Nature Communications / Nature Sustainability", 89, "组内设施级脱碳、健康收益和退出优先序文献，为数据中心点源治理提供本组能力先例。", ["decision", "data"], "top", ["professor", "idea"])
      ]
    }
  ],
  innovationChecks: [
    {
      title: "创新点 1：全球数据中心点源数据库与能耗核算",
      verdict: "主文献地图只保留对象/数据链；创新核验要专门判断是否已有全球 facility-quarter 数据中心环境足迹。",
      evidence: ["Masanet et al. 2020", "Siddik et al. 2021", "Shehabi et al. 2024", "BNEF/DCByte 2026", "Guidi et al. 2024"],
      gap: "已有全球能耗和美国设施级碳/水研究，但全球 1990-2024 设施季度点源 PB 足迹仍是组合缺口。",
      search: '"data center" facility-level footprint capacity PUE WUE "planetary boundaries"',
      risk: "如果只做电耗/碳排，会重复已有数据中心环境足迹研究；必须把 facility-quarter、PB 和治理联动。"
    },
    {
      title: "创新点 2：PB/AESA 与安全空间分配",
      verdict: "这是方法合法性核验，不是数据中心对象文献。要证明下放原则和超越指数可审稿。",
      evidence: ["Rockstrom et al. 2009", "Steffen et al. 2015", "Richardson et al. 2023", "Ryberg et al. 2020", "Hjalsted et al. 2021", "Lejeune et al. 2026"],
      gap: "PB/AESA 方法很成熟，创新不在方法本身，而在把它严谨地迁移到数据中心点源和治理输出。",
      search: '"absolute environmental sustainability assessment" "data center" OR "digital infrastructure"',
      risk: "不能把 LCA midpoint 简单改名成 PB；必须交代 downscaling、sharing principle 和敏感性。"
    },
    {
      title: "创新点 3：冷却水与淡水压力空间叠加",
      verdict: "数据中心水研究已经不少，真正缺口是点源冷却/发电用水与流域压力、PB 安全空间的耦合。",
      evidence: ["Mytton 2021", "Siddik et al. 2021", "Mekonnen & Hoekstra 2016", "Vorosmarty et al. 2010", "WRI Aqueduct"],
      gap: "已有水耗框架和水压力图谱，但少有全球数据中心点源 PB 水压力排名和治理优先序。",
      search: '"data center" water footprint WUE cooling "water stress" basin',
      risk: "冷却方式、WUE 和电力来源空间错配会被审稿人重点质疑。"
    },
    {
      title: "创新点 4：土地占用与生物多样性风险叠加",
      verdict: "这是潜力点，但必须写成 exposure/overlap，而不是声称因果破坏。",
      evidence: ["Newbold et al. 2016", "Gerten et al. 2020", "Poore & Nemecek 2018", "Hlabisa 2025"],
      gap: "AI/data-centre 生态综述开始提到 land/biodiversity，但全球设施位置与 BII/保护区/土地压力叠加仍可形成点源贡献。",
      search: '"data centre" land use biodiversity facility siting protected areas',
      risk: "土地面积不等于生态影响；没有识别设计时不能写成因果。"
    },
    {
      title: "创新点 5：点源超越指数与定向治理",
      verdict: "点源治理有强类比文献，数据中心应用要证明 targeted 比 uniform 更有效。",
      evidence: ["Lauvaux et al. 2022", "Davis et al. 2010", "Tong et al. 2019", "Meys et al. 2021", "Plant-level group analogs"],
      gap: "超级排放源和基础设施锁定逻辑成熟，但数据中心 PB 超越指数和前 1/5/10% 治理效率仍是待核验创新。",
      search: '"data center" targeted mitigation facility governance "super emitters" infrastructure lock-in',
      risk: "治理情景不能理想化；需要技术上限、区域可行性和不确定性。"
    }
  ],
  ideas: [
    idea(
      "LLM 辅助点源字段补全",
      "数据工程 / 信息抽取",
      "BNEF/DCByte 给了容量、面积、经纬度和设计 PUE，但 cooling、WUE、utilization、备用柴油和绿电匹配仍缺。",
      "用 LLM 做 evidence extraction 和 entity resolution，而不是让 LLM 直接估参数。",
      [
        "Mytton 2021, npj Clean Water：说明水指标透明度不足，且 WUE/水源数据很缺。",
        "Guidi et al. 2024：展示设施级数据管线如何支撑数据中心环境核算。",
        "Lauvaux et al. 2022, Science：说明高影响点源识别需要可核验的数据链。"
      ],
      "公司 ESG、许可文件、新闻、规划文件、运营商页面、PUE/WUE 报告、冷却方式描述、备用电源信息。",
      "变量是字段值、来源 URL、证据句、置信度、人工抽样验证结果；模型是抽取-去重-冲突解决-不确定性分层。",
      "先抽取 Top 200 live capacity 设施的 cooling / WUE / backup 字段，形成可审计补字段流程。",
      "因为本题的顶刊风险首先是数据可信度，不是模型多复杂。",
      "把 LLM 变成可追踪数据工具，而不是黑箱参数生成器。",
      "审稿人会问：LLM 抽取是否 hallucinate？字段缺失是否系统偏向大公司？",
      "每个字段保留证据句和来源；做人工复核样本；把缺失机制和不确定性放进敏感性。",
      "先做 50 个设施 pilot，测试 precision/recall 和字段覆盖率。",
      ["data", "cross"],
      ["idea", "professor"]
    ),
    idea(
      "点源 PB 超越指数",
      "PB 方法迁移",
      "数据中心研究常给行业总电耗/总水耗，无法判断哪些设施在多边界上不成比例地贡献风险。",
      "把 NC 氢气的 PB 超越思想转成 facility-level exceedance index。",
      [
        "Lejeune et al. 2026, Nature Communications：未来路径是否在 PB 内的母案例。",
        "Lade et al. 2020, Nature Sustainability：PB 交互和放大效应。",
        "Lauvaux et al. 2022, Science：高影响点源识别改变治理优先级。"
      ],
      "设施级 Scope 1+2 足迹、区域水压力、生物多样性/土地叠加、PB 安全空间分配规则。",
      "指数由气候、淡水、土地/生物圈、气溶胶等标准化超越倍数构成，并报告各边界贡献。",
      "计算每个设施的 PB 超越指数，识别全球前 1%、5%、10% 高风险点源。",
      "因为这把宏观 PB 变成可治理设施名单。",
      "直接服务第三节点源治理情景。",
      "审稿人会问：不同 PB 指标能不能加总？权重是否任意？",
      "主结果报告单边界排名和多边界指数并列；指数权重做等权、交互权重和无加总三套敏感性。",
      "先对最新一期 6,643 个设施做横截面指数，再回溯 2010-2024。",
      ["method", "decision", "data"],
      ["professor", "phd", "idea"]
    )
  ],
  reviewerChecks: [
    {
      gate: "数据链可信度",
      question: "BNEF/DCByte 字段、LLM 补字段和外部因子能否逐项追溯？",
      risk: "冷却方式、utilization、PUE/WUE 缺失会让设施级足迹看起来比实际更精确。",
      defense: "区分观测字段、抽取字段、插补字段；每个字段保留来源和置信度；主结论做缺失机制敏感性。"
    },
    {
      gate: "Scope 1+2 边界",
      question: "文章是否清楚说明不做 Scope 3？",
      risk: "如果写成 lifecycle footprint，审稿人会追问服务器、芯片、建筑和供应链资本品。",
      defense: "标题和方法都写 operational Scope 1+2；Scope 3 明确作为第二篇/扩展，而非本篇主张。"
    },
    {
      gate: "淡水异质性",
      question: "淡水使用是否和当地水压力/流域背景相连？",
      risk: "只报告全球水量会被认为没有点源创新。",
      defense: "直接冷却水、间接发电水和当地 water stress 分开报告，再合成淡水 PB 压力。"
    },
    {
      gate: "生物多样性表述",
      question: "是否把空间叠加误写成因果影响？",
      risk: "数据中心位置与生物多样性下降叠加，不等于数据中心导致下降。",
      defense: "主张限定为 exposure / overlap / risk context；因果词只在有识别设计时使用。"
    },
    {
      gate: "PB 安全空间分配",
      question: "为什么用数据中心电力占比 downscale 安全空间？",
      risk: "按电力占比分配可能被认为规范上任意。",
      defense: "报告电力占比、经济价值、需求服务和 grandfathering 多套分配敏感性，不只给单一答案。"
    },
    {
      gate: "治理外推",
      question: "前 1/5/10% 点源治理是否真的比行业平均治理有效？",
      risk: "如果治理措施不受技术/区域约束，结论会像理想化情景。",
      defense: "为低碳电力、PUE、低水冷却、再生水和备用柴油替代设置可行性约束。"
    }
  ],
  labStandards: [
    {
      gate: "创新点 1：点源数据库",
      pass: "能解释 BNEF/DCByte 字段、季度面板、补字段流程和覆盖率。",
      fail: "只把行业总电耗换算成碳排。",
      action: "先做数据字典和字段覆盖率表。"
    },
    {
      gate: "相似研究核验",
      pass: "已列出最接近文献，并说明它们没有覆盖同对象 + 同方法 + 同数据尺度 + 同决策输出。",
      fail: "只是换一个标题或对象，实际贡献已被近邻文献完成。",
      action: "每个 idea 先做查重矩阵，再判断点源或 IO/MRIO 路线。"
    },
    {
      gate: "创新点 2：PB 方法",
      pass: "能说明 PB 下放、超越指数和安全空间分配敏感性。",
      fail: "只把 LCA 影响类别改名成行星边界。",
      action: "文献地图保留 PB/AESA 方法源头。"
    },
    {
      gate: "创新点 3：淡水空间异质性",
      pass: "冷却水和发电水都能映射到当地水压力。",
      fail: "只报告全球平均水耗。",
      action: "优先读 Mytton、Aqueduct、全球水稀缺文献。"
    },
    {
      gate: "创新点 4：生物多样性叠加",
      pass: "位置、土地占用和生态敏感性有空间叠加。",
      fail: "把土地面积直接等同于生态损害。",
      action: "使用 BII/land-use/protected-area 数据做风险背景。"
    },
    {
      gate: "创新点 5：点源治理",
      pass: "前 1/5/10% 高风险设施治理优于均匀治理时有清楚机制。",
      fail: "只列治理措施，不比较效率。",
      action: "输出 targeted vs uniform scenario。"
    },
    {
      gate: "暂缓 Scope 3",
      pass: "第一篇只做 operational Scope 1+2，Scope 3 作为第二篇。",
      fail: "把 IO/MRIO、芯片供应链和设施点源治理全部塞进一篇。",
      action: "从当前网站主线中移除 Scope 3 作为主结果。"
    }
  ],
  matrix: [
    matrixRow("BNEF/DCByte 2026", "主数据源", "facility-quarter point-source panel", "1990Q1-2025Q3 容量、面积、PUE、经纬度、状态", "支撑历史和未来点源数据库", "第一步做字段覆盖率、季度转年度和设施去重", ["data", "problem"], "dataset", ["professor", "phd", "idea"]),
    matrixRow("Masanet et al. 2020", "能耗核算基准", "全球数据中心能耗再校准", "服务器、存储、流量、能效趋势", "解释为何不能用简单需求增长推电耗", "用于电力核算和历史趋势校验", ["problem", "data"], "top", ["professor", "phd"]),
    matrixRow("Mytton 2021", "淡水核心文献", "数据中心直接/间接水耗框架", "运营商水披露、WUE、水源与发电用水", "说明水透明度和局地竞争问题", "支撑淡水异质性和补字段优先级", ["cross", "data"], "top", ["professor", "phd", "idea"]),
    matrixRow("Lejeune et al. 2026", "方法母案例", "PB 安全空间 + 未来情景 + 超越判断", "氢生产路径、前瞻清单、PB 指标", "示范如何把行业路径放进行星边界", "迁移到数据中心历史-未来-治理结构", ["method", "decision"], "top", ["professor", "phd", "idea"]),
    matrixRow("Lade et al. 2020", "PB 交互方法", "PB 交互和放大效应", "边界交互模型", "防止多边界权重任意化", "用于超越指数敏感性", ["method", "decision"], "top", ["professor", "idea"]),
    matrixRow("Newbold et al. 2016", "生物多样性叠加", "土地利用与 BII / PB", "全球生物多样性完整性数据", "把土地变化和 PB 风险连接", "用于数据中心位置生态敏感性叠加", ["cross", "method"], "top", ["professor", "phd", "idea"]),
    matrixRow("Lauvaux et al. 2022", "点源治理类比", "设施级超级排放源识别", "卫星甲烷观测", "说明少数点源可主导治理效率", "迁移到前 1/5/10% 数据中心治理", ["decision", "data"], "top", ["professor", "idea"]),
    matrixRow("Guidi et al. 2024", "直接近邻方法", "设施级数据中心电力和排放清单", "美国数据中心设施、发电来源、电力消费", "展示 facility-level data centre footprint pipeline", "用于对照我们的全球点源清单路线", ["data", "problem"], "dataset", ["professor", "phd", "idea"])
  ]
};

const dataCentreResearchIdeas = [
  idea(
    "全球数据中心 Scope 1+2 点源 PB 足迹",
    "组内能力：设施级清单 + 空间边界",
    "现有数据中心研究多停在行业电耗、公司披露或美国局部清单，缺少全球历史 facility-level PB 足迹。",
    "把 BNEF/DCByte 设施季度面板转成 1990-2024 Scope 1+2 operational inventory，再映射到 PB 安全空间。",
    [
      "BNEF/DCByte 2026：全球设施季度容量和位置主数据源。",
      "Masanet et al. 2020, Science：全球数据中心能耗核算基准。",
      "Lejeune et al. 2026, Nature Communications：PB 安全空间方法母案例。"
    ],
    "设施容量、PUE、utilization、hours、电网排放/水强度、区域水压力、土地和生物多样性背景。",
    "Electricity = live IT capacity × utilization × hours × PUE；再接入 Scope 2 因子和局地水/土地/生态叠加。",
    "先做 2010-2024 主结果，1990-2009 作为历史扩展和不确定性分析。",
    "因为这把数据中心 PB 研究从宏观行业量推进到可治理点源。",
    "组内设施级和空间边界能力可以把普通能耗论文提升为点源 PB 论文。",
    "审稿人会问 PUE/utilization 是否真实、早期数据是否可靠、Scope 1 是否缺失。",
    "用观测/抽取/插补三类字段分层；PUE/utilization 做情景和蒙特卡洛；Scope 1 先做敏感性。",
    "先用 2025Q3 最新 6,643 个设施做横截面，再回溯历史。",
    ["problem", "data", "method"],
    ["professor", "phd", "idea"]
  ),
  idea(
    "淡水压力加权的数据中心冷却水足迹",
    "组内能力：网格淡水边界",
    "普通数据中心水研究能说明用水多，但不能判断哪些点源在缺水地区造成更高 PB 压力。",
    "把直接冷却水、间接发电用水与当地 water stress / basin pressure 叠加，计算淡水 PB 压力。",
    [
      "Mytton 2021, npj Clean Water：直接冷却水、间接发电用水和 WUE 口径。",
      "Mekonnen & Hoekstra 2016, Science Advances：全球严重水稀缺。",
      "组内 Nature Water 2025：网格尺度淡水边界追踪能力。"
    ],
    "冷却方式、WUE、PUE、电网结构、发电水强度、Aqueduct/流域水压力、设施经纬度。",
    "淡水压力 = 直接水耗 × 当地水压力 + 电力消费 × 电网水强度 × 发电地水压力。",
    "先做有 WUE 或 cooling 字段的高容量设施，其余用分层插补。",
    "因为淡水是最能体现点源区域差异的 PB 指标。",
    "组内已有淡水 PB 方法，比单纯碳排数据中心论文更有差异化。",
    "审稿人会问冷却方式缺失、WUE 缺失和电力来源空间错配。",
    "只把高置信字段作为主结果；缺失字段做范围估计；区分 on-site 与 source water。",
    "先做美国/欧洲高容量设施 pilot，再全球扩展。",
    ["cross", "data", "method"],
    ["professor", "phd", "idea"]
  ),
  idea(
    "数据中心土地占用与生物多样性风险叠加",
    "组内能力：空间叠加 / 生态敏感性",
    "数据中心土地占用通常被弱化，但大规模新建容量可能集中在生态敏感或土地压力地区。",
    "把设施 land/building/datahall area 与 BII、保护区、土地利用变化和生态敏感区叠加。",
    [
      "Newbold et al. 2016, Science：土地利用与生物多样性完整性跨越 PB。",
      "Springmann et al. 2018, Nature：多环境限制下的系统转型。",
      "Poore & Nemecek 2018, Science：差异化环境影响数据库和热点识别逻辑。"
    ],
    "设施经纬度、land area、building area、datahall area、BII/land-cover/protected-area 数据、历史土地变化。",
    "计算 footprint-overlap：土地占用面积 × 生态敏感性权重，并报告与高风险区域重叠比例。",
    "先做 overlap / exposure，不直接声称数据中心导致生物多样性下降。",
    "因为这是点源异质性中第二个最容易形成新贡献的指标。",
    "能把 BNEF 的面积和位置字段转成 PB 相关生态风险。",
    "审稿人会 argue 因果过度和土地面积口径不等于生态破坏。",
    "严格使用 exposure/risk context 语言；因果分析放到后续研究。",
    "先比较不同 market / company / facility type 的生态敏感性分布。",
    ["cross", "method", "data"],
    ["professor", "idea"]
  ),
  idea(
    "高风险点源定向治理 vs 行业平均治理",
    "组内能力：设施优先序 / 情景治理",
    "如果少数数据中心贡献了不成比例的 PB 压力，平均治理政策可能效率低。",
    "构建点源 PB 超越指数，比较治理前 1%、5%、10% 高风险设施和全行业均匀治理的减压效果。",
    [
      "Lauvaux et al. 2022, Science：超级排放源识别和点源治理类比。",
      "Davis et al. 2010, Science：基础设施锁定排放。",
      "Tong et al. 2019, Nature：现有能源基础设施与气候目标。"
    ],
    "设施 PB 指数、治理措施参数、低碳电力可得性、PUE 改造潜力、冷却方式可替代性、再生水可用性。",
    "情景变量包括低碳电力匹配、PUE 下降、低水冷却、再生水、备用柴油替代和新建容量空间优化。",
    "输出 targeted vs uniform 的 PB 减压曲线和边际治理效率。",
    "因为这能把文章从核算论文推进到治理论文。",
    "组内有工厂级脱碳和退出优先序经验，数据中心可以复用这种决策结构。",
    "审稿人会问治理措施是否过于理想化、局地可行性是否被忽略。",
    "给每种措施设置区域可行性和技术上限；只比较可行范围内的治理效率。",
    "先用最新一期设施做横截面治理，再扩展到 2025-2060。",
    ["decision", "data"],
    ["professor", "idea"]
  ),
  idea(
    "2025-2060 数据中心 PB 超越动态",
    "组内能力：情景 / 不确定性",
    "未来 AI 算力、PUE、utilization、电网脱碳和容量扩张高度不确定，单一预测很容易被审稿人质疑。",
    "用情景组合和不确定性传播，报告在哪些假设下数据中心系统会越界或回到安全空间内。",
    [
      "IEA 2025 Energy and AI：AI 与数据中心电力需求增长场景。",
      "Lejeune et al. 2026, Nature Communications：未来 PB 超越结构母案例。",
      "Meys et al. 2021, Science：行业路径组合研究。"
    ],
    "pipeline capacity、AI demand、utilization、PUE/WUE、电网脱碳、冷却技术、低碳电力和容量选址约束。",
    "把每个驱动设为情景维度，输出各 PB 指标的超越倍数和回到安全空间路径。",
    "先做 2025-2060，不必像 NC 完全复制 2100 长期路径。",
    "因为数据中心是快速变化基础设施，2060 已足够政策相关。",
    "能把历史点源事实和未来治理路径连起来。",
    "审稿人会问未来 AI 需求太不确定，PUE 进步是否乐观。",
    "主结论写成 failure conditions：哪些组合下会失败，而不是唯一预测。",
    "先做 3×3×3 情景网格：capacity、PUE、grid decarbonization。",
    ["decision", "method", "data"],
    ["professor", "phd", "idea"]
  )
];

const noveltyChecks = {
  "全球数据中心 Scope 1+2 点源 PB 足迹": {
    status: "部分重叠，组合缺口可推进",
    alreadyDone: "Masanet et al. 做全球数据中心能耗核算；Guidi et al. 做美国设施级电力/排放；Lejeune et al. 做氢气 PB 路径。快速 Scholar 核验未见三者合并为全球 facility-quarter 数据中心 PB 论文。",
    gap: "缺的是全球 1990-2024 点源历史 + Scope 1/2 多 PB 足迹 + 2025-2060 未来超越 + 点源治理。",
    route: "点源主线",
    action: "正式立项前再搜 data centre/data center + planetary boundaries + facility-level + Scope 1/2 + governance，确认 2025-2026 新文献没有做完整组合。"
  },
  "淡水压力加权的数据中心冷却水足迹": {
    status: "相近主题已出现，但点源 PB 缺口仍在",
    alreadyDone: "Mytton 已系统讨论数据中心直接/间接用水；水冲突与 AI 基础设施论文开始出现；但多数停在概念、案例或行业水耗。",
    gap: "缺的是把每个数据中心的冷却水/发电用水与流域水压力、PB 安全空间和设施治理优先序联动。",
    route: "点源主线 + 组内淡水网格能力",
    action: "重点核验 data center water footprint、WUE、water stress、basin scarcity、planetary boundary 的交叉文献，避免只重复 Mytton 的框架。"
  },
  "数据中心土地占用与生物多样性风险叠加": {
    status: "高风险高潜力，需防止因果过度",
    alreadyDone: "AI/data-centre 生态影响综述开始提到 land/biodiversity limits；Newbold 等提供 BII/PB 方法源头，但数据中心设施级叠加证据仍弱。",
    gap: "缺的是基于设施位置和面积的全球生态敏感性 exposure map，而不是笼统说数字基础设施影响土地。",
    route: "点源主线 + 空间叠加",
    action: "核验 data centre land use、biodiversity intactness、protected areas、facility siting 文献；若已有案例研究，主贡献改为全球点源系统评估。"
  },
  "高风险点源定向治理 vs 行业平均治理": {
    status: "治理逻辑有强类比，但数据中心应用缺口明显",
    alreadyDone: "超级排放源、既有能源基础设施锁定和行业治理组合已有顶刊先例；数据中心文献更多谈节能、绿电和水冷却措施。",
    gap: "缺的是用 PB 超越指数证明前 1/5/10% 设施定向治理是否比行业平均治理更高效。",
    route: "点源主线 + 设施优先序",
    action: "核验 targeted mitigation、super emitter、data center decarbonization、facility governance 交叉文献；若没有数据中心点源排名，可作为核心创新。"
  },
  "2025-2060 数据中心 PB 超越动态": {
    status: "未来情景很多，但 PB 超越动态组合未饱和",
    alreadyDone: "IEA 给 AI 与数据中心电力需求情景；Lejeune 提供未来 PB 超越结构；行业报告讨论 PUE 和电网脱碳。",
    gap: "缺的是把 live + pipeline capacity、PUE/WUE、电网脱碳和空间治理约束同时放进 PB 超越倍数。",
    route: "点源主线 + 情景不确定性",
    action: "核验 data center future scenarios、AI electricity demand、planetary boundary transgression、PUE decarbonization 组合，确认是否已有同尺度模型。"
  },
  "LLM 辅助点源字段补全": {
    status: "方法创新可做，但必须作为数据链而非主噱头",
    alreadyDone: "已有设施级数据管线和水透明度缺口讨论，但 LLM evidence extraction 用于冷却方式/WUE/utilization 的可审计流程尚未成为成熟顶刊套路。",
    gap: "缺的是把 LLM 限定为证据抽取、来源保留、冲突解决和人工复核，而不是让模型生成不可核验参数。",
    route: "点源主线的数据工程模块",
    action: "核验 information extraction、entity resolution、LLM scientific data curation 与 data center facility fields 文献，先做 50-200 个设施 pilot。"
  },
  "点源 PB 超越指数": {
    status: "方法来自母案例，数据中心应用需避免权重任意",
    alreadyDone: "PB 超越、PB 交互和点源治理都有顶刊源头；但把指数下放到每个数据中心设施仍需证明合理性。",
    gap: "缺的是设施级多边界压力排名，以及单边界排名、多边界指数和无加总结果的并列防守。",
    route: "点源主线 + PB 方法迁移",
    action: "核验 facility-level planetary boundary index、absolute sustainability assessment、multi-boundary index 文献；若已有单设施案例，主贡献改为全球点源分布和治理效率。"
  }
};

const dataCentrePaperDetails = {
  "BNEF/DCByte 2026": {
    fullTitle: "Global Data Center Live IT Capacity Database (1.2.0)",
    citation: "BloombergNEF / DCByte · 2026 local workbook",
    doi: "本地数据源",
    url: "file:///C:/Users/11757/Documents/xwechat_files/wxid_gyoev0o807ag22_b983/msg/file/2026-06/2026-03-19%20-%20Global%20Data%20Center%20Live%20IT%20Capacity%20Database%20(1.2.0).xlsx",
    scoreReason: "88 分，因为它不是顶刊论文，但它是当前项目可直接支撑全球设施季度面板的主数据资产。",
    relation: "关键数据源，不是 PB 文献。NC 氢气文章的数据链来自前瞻 LCA 和情景；本项目的数据链首先来自这个设施点源数据库。",
    focus: ["不要用 CSV 年份字段做正式时间序列。", "先做字段覆盖率和设施去重。", "PUE、Power(MVA)、cooling、WUE、utilization 是补字段重点。"],
    mode: { professor: "重点审查数据授权、字段定义、季度口径和缺失机制。", phd: "先理解每个字段如何进入电力和 PB 足迹公式。", idea: "从字段缺口反推可发表的数据方法贡献。" }
  },
  "Masanet et al. 2020": {
    fullTitle: "Recalibrating global data center energy-use estimates",
    citation: "Masanet et al. · Science · 2020",
    doi: "10.1126/science.aba3758",
    url: "https://doi.org/10.1126/science.aba3758",
    scoreReason: "96 分，因为它是数据中心全球能耗核算的顶刊基准。",
    relation: "能耗核算基线。用于防止把 capacity 增长简单等同于电力增长。",
    focus: ["效率提升如何抵消需求增长。", "PUE、server utilization 和 workload 的处理。", "哪些假设适合/不适合设施级点源化。"],
    mode: { professor: "重点看我们是否超越行业平均能耗核算。", phd: "作为数据中心能耗核算入口。", idea: "可衍生出 facility-level recalibration 贡献。" }
  },
  "IEA 2025": {
    fullTitle: "Energy and AI",
    citation: "International Energy Agency · 2025",
    doi: "官方报告",
    url: "https://www.iea.org/reports/energy-and-ai",
    scoreReason: "85 分，因为它是权威情景/政策背景报告，不是核心 PB 或顶刊方法文献。",
    relation: "未来情景背景，不是 PB 核心证据。用于 2025-2060 容量和电力需求情景的外部校验。",
    focus: ["数据中心电力需求范围。", "AI 作为增长驱动的情景假设。", "政策制定者缺少综合数据的表述。"],
    mode: { professor: "重点看报告数字能否作为外部情景边界，而不是直接替代模型。", phd: "读 executive summary 建背景。", idea: "用来支撑为什么需要设施级数据工具。" }
  },
  "Guidi et al. 2024": {
    fullTitle: "Environmental Burden of United States Data Centers in the Artificial Intelligence Era",
    citation: "Guidi et al. · arXiv · 2024",
    doi: "arXiv:2411.09786",
    url: "https://arxiv.org/abs/2411.09786",
    scoreReason: "90 分，因为它是数据中心设施级电力和排放清单的直接近邻，即使还不是正式顶刊。",
    relation: "直接近邻。它做美国设施级碳排，我们要做全球设施级 PB + 淡水/生态异质性 + 治理。",
    focus: ["设施清单如何构建。", "电力来源和排放如何归因。", "它没覆盖 PB/水/生物多样性，正是我们的空间。"],
    mode: { professor: "重点判断我们的全球 PB 贡献是否超出该 preprint。", phd: "学习 facility-level data pipeline。", idea: "作为数据方法和可视化先例。" }
  },
  "Mytton 2021": {
    fullTitle: "Data centre water consumption",
    citation: "Mytton · npj Clean Water · 2021",
    doi: "10.1038/s41545-021-00101-w",
    url: "https://doi.org/10.1038/s41545-021-00101-w",
    scoreReason: "90 分，因为它清楚区分数据中心直接冷却水、间接发电水和 WUE/水透明度问题，是对象文献而非 PB 方法源头。",
    relation: "淡水核心文献。它把数据中心从电力问题推进到水资源问题，是本项目淡水 PB 的入口。",
    focus: ["WUE 与 WUE_source 定义。", "直接冷却水和发电用水如何分开。", "数据透明度为什么是审稿风险。"],
    mode: { professor: "重点看我们如何从水耗综述推进到点源 PB 压力。", phd: "先读水指标定义和冷却方式。", idea: "直接启发冷却水-水压力叠加。" }
  },
  "Lejeune et al. 2026": {
    fullTitle: "Pathways to global hydrogen production within planetary boundaries",
    citation: "Lejeune et al. · Nature Communications · 2026",
    doi: "10.1038/s41467-026-70168-x",
    url: "https://doi.org/10.1038/s41467-026-70168-x",
    scoreReason: "98 分，因为它是本网站的方法母案例：PB 安全空间、未来情景和超越判断。",
    relation: "方法母案例，不是主题母案例。我们借它的研究设计，换成数据中心点源历史-未来-治理。",
    focus: ["安全空间如何分配。", "未来情景如何与 PB 足迹连接。", "超越倍数如何转成结论。"],
    mode: { professor: "重点看哪些设计能迁移、哪些不能照搬。", phd: "把它当 PB 方法范本读。", idea: "用来约束数据中心论文结构。" }
  },
  "Rockstrom et al. 2009": {
    fullTitle: "A safe operating space for humanity",
    citation: "Rockstrom et al. · Nature · 2009",
    doi: "10.1038/461472a",
    url: "https://doi.org/10.1038/461472a",
    scoreReason: "97 分，因为它是 PB 安全运行空间概念源头。",
    relation: "理论源头。所有安全空间分配和越界叙事都必须回到这篇。",
    focus: ["PB 不是相对减排指标。", "哪些边界适合全球阈值。", "行业下放有哪些规范风险。"],
    mode: { professor: "重点审查 PB 下放的规范合理性。", phd: "先建立 PB 基本词汇。", idea: "用于寻找设施级 PB 空白。" }
  },
  "Steffen et al. 2015": {
    fullTitle: "Planetary boundaries: Guiding human development on a changing planet",
    citation: "Steffen et al. · Science · 2015",
    doi: "10.1126/science.1259855",
    url: "https://doi.org/10.1126/science.1259855",
    scoreReason: "96 分，因为它更新 PB 框架和控制变量。",
    relation: "PB 指标选择基准。数据中心指标不能凭空扩展，必须对照 PB 框架。",
    focus: ["九个 PB 的控制变量。", "biosphere 和 biogeochemical flows 为什么难下放。", "数据中心能稳做哪些边界。"],
    mode: { professor: "重点判断十个指标是否有过度扩展。", phd: "和 Rockstrom 2009 连读。", idea: "筛选可支撑和低确定性 PB 指标。" }
  },
  "Lade et al. 2020": {
    fullTitle: "Human impacts on planetary boundaries amplified by Earth system interactions",
    citation: "Lade et al. · Nature Sustainability · 2020",
    doi: "10.1038/s41893-019-0454-4",
    url: "https://doi.org/10.1038/s41893-019-0454-4",
    scoreReason: "94 分，因为它支撑 PB 交互和有效足迹思路。",
    relation: "超越指数方法背景。可作为多边界指数敏感性，而非唯一权重。",
    focus: ["交互矩阵。", "越界放大效应。", "多边界加总的审稿风险。"],
    mode: { professor: "重点看指数权重如何防守。", phd: "理解 PB 不独立。", idea: "用于点源超越指数设计。" }
  },
  "Richardson et al. 2023": {
    fullTitle: "Earth beyond six of nine planetary boundaries",
    citation: "Richardson et al. · Science Advances · 2023",
    doi: "10.1126/sciadv.adh2458",
    url: "https://doi.org/10.1126/sciadv.adh2458",
    scoreReason: "95 分，因为它给出最新 PB 状态，是说明安全空间紧张的背景基线。",
    relation: "PB 状态更新。用于解释为什么数据中心扩张需要绝对边界视角。",
    focus: ["哪些边界已越界。", "控制变量和不确定性。", "本题哪些指标可稳算。"],
    mode: { professor: "重点审查指标选择。", phd: "作为 PB 现状入门。", idea: "用于确定主文重点边界。" }
  },
  "Rockstrom et al. 2023": {
    fullTitle: "Safe and just Earth system boundaries",
    citation: "Rockstrom et al. · Nature · 2023",
    doi: "10.1038/s41586-023-06083-8",
    url: "https://doi.org/10.1038/s41586-023-06083-8",
    scoreReason: "94 分，因为它提醒安全空间分配不能只讲效率，也涉及公平。",
    relation: "安全空间分配敏感性。用来防守“按电力占比分配”太任意的质疑。",
    focus: ["safe vs just。", "公平边界。", "多种分配原则的必要性。"],
    mode: { professor: "重点看分配原则防守。", phd: "理解 PB 和公平的连接。", idea: "用于安全空间分配敏感性。" }
  },
  "Bjorn et al. 2020": {
    fullTitle: "Review of life-cycle based methods for absolute environmental sustainability assessment and their applications",
    citation: "Bjorn et al. · Environmental Research Letters · 2020",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=%22life-cycle+based+methods+for+absolute+environmental+sustainability+assessment%22",
    scoreReason: "89 分，因为它是 AESA/PB-LCA 方法谱系综述。",
    relation: "方法综述。用于说明本研究为何是 absolute sustainability，而不是普通相对足迹。",
    focus: ["AESA 分类。", "sharing principle。", "生命周期方法与 PB 下放。"],
    mode: { professor: "重点看方法合法性。", phd: "作为 PB-LCA 入门。", idea: "用于方法章节搭骨架。" }
  },
  "Mekonnen & Hoekstra 2016": {
    fullTitle: "Four billion people facing severe water scarcity",
    citation: "Mekonnen & Hoekstra · Science Advances · 2016",
    doi: "10.1126/sciadv.1500323",
    url: "https://doi.org/10.1126/sciadv.1500323",
    scoreReason: "91 分，因为它提供全球水稀缺空间化背景，支撑点源水压力而不是全球平均水量。",
    relation: "淡水空间背景。数据中心淡水 PB 必须和当地水压力挂钩。",
    focus: ["水稀缺定义。", "月度/空间异质性。", "如何与设施位置叠加。"],
    mode: { professor: "重点看水压力指标选择。", phd: "理解水 scarcity 与用水量区别。", idea: "用于水压力加权足迹。" }
  },
  "Vorosmarty et al. 2010": {
    fullTitle: "Global threats to human water security and river biodiversity",
    citation: "Vorosmarty et al. · Nature · 2010",
    doi: "10.1038/nature09440",
    url: "https://doi.org/10.1038/nature09440",
    scoreReason: "90 分，因为它同时连接水安全和河流生物多样性，是水-生态空间叠加先例。",
    relation: "空间叠加方法类比。帮助本题把数据中心点源与流域背景连接。",
    focus: ["水安全威胁图谱。", "河流生物多样性威胁。", "多压力空间叠加。"],
    mode: { professor: "重点看空间叠加能否支持 PB 论证。", phd: "学习水生态风险图谱。", idea: "用于淡水和生物圈联合分析。" }
  },
  "Newbold et al. 2016": {
    fullTitle: "Has land use pushed terrestrial biodiversity beyond the planetary boundary? A global assessment",
    citation: "Newbold et al. · Science · 2016",
    doi: "10.1126/science.aaf2201",
    url: "https://doi.org/10.1126/science.aaf2201",
    scoreReason: "92 分，因为它把土地利用、生物多样性完整性和 PB 联系起来。",
    relation: "生物多样性叠加核心。用于防止把土地占用只看作面积。",
    focus: ["BII 如何估计。", "土地利用与 PB 阈值。", "如何谨慎表述 exposure 而非因果。"],
    mode: { professor: "重点看生物多样性指标是否可防守。", phd: "理解 BII 与 PB。", idea: "用于数据中心生态敏感性叠加。" }
  },
  "Bachmann et al. 2023": {
    fullTitle: "Towards circular plastics within planetary boundaries",
    citation: "Bachmann et al. · Nature Sustainability · 2023",
    doi: "10.1038/s41893-022-01054-9",
    url: "https://doi.org/10.1038/s41893-022-01054-9",
    scoreReason: "95 分，因为它是行业系统进入 PB 约束的相邻顶刊样板。",
    relation: "相邻 PB 应用。数据中心要证明自己不是简单换对象，需要超越这类行业 PB 论文。",
    focus: ["行业系统边界。", "多 PB 指标。", "治理路径如何组合。"],
    mode: { professor: "重点比较我们点源异质性的新增贡献。", phd: "学习 PB 行业应用。", idea: "用于治理路径结构。" }
  },
  "Springmann et al. 2018": {
    fullTitle: "Options for keeping the food system within environmental limits",
    citation: "Springmann et al. · Nature · 2018",
    doi: "10.1038/s41586-018-0594-0",
    url: "https://doi.org/10.1038/s41586-018-0594-0",
    scoreReason: "93 分，因为它把需求、技术和治理选项放进多环境限制。",
    relation: "系统转型类比。用于数据中心未来需求和治理组合叙事。",
    focus: ["环境限制。", "需求侧和供给侧选项。", "多措施组合。"],
    mode: { professor: "重点看未来情景如何避免单变量预测。", phd: "学习系统转型结构。", idea: "用于 2025-2060 情景组合。" }
  },
  "Poore & Nemecek 2018": {
    fullTitle: "Reducing food's environmental impacts through producers and consumers",
    citation: "Poore & Nemecek · Science · 2018",
    doi: "10.1126/science.aaq0216",
    url: "https://doi.org/10.1126/science.aaq0216",
    scoreReason: "90 分，因为它展示大样本环境影响如何识别高影响生产者和差异化治理空间。",
    relation: "差异化足迹类比。用于证明设施间异质性可以成为主要贡献。",
    focus: ["大样本数据库结构。", "高影响尾部。", "差异化治理含义。"],
    mode: { professor: "重点看我们能否讲出同等级差异化故事。", phd: "学习热点识别。", idea: "用于点源 tail risk。" }
  },
  "Lauvaux et al. 2022": {
    fullTitle: "Global assessment of oil and gas methane ultra-emitters",
    citation: "Lauvaux et al. · Science · 2022",
    doi: "10.1126/science.abj4351",
    url: "https://doi.org/10.1126/science.abj4351",
    scoreReason: "93 分，因为它说明少数点源可能主导环境压力和治理优先级。",
    relation: "点源治理类比。数据中心没有甲烷遥感，但治理逻辑相似：高影响点源优先。",
    focus: ["超级排放源识别。", "点源治理效率。", "数据链如何支撑政策优先序。"],
    mode: { professor: "重点看点源指数是否足够像治理工具。", phd: "理解点源治理逻辑。", idea: "用于前 1/5/10% 设施治理设计。" }
  },
  "Davis et al. 2010": {
    fullTitle: "Future CO2 emissions and climate change from existing energy infrastructure",
    citation: "Davis et al. · Science · 2010",
    doi: "10.1126/science.1188566",
    url: "https://doi.org/10.1126/science.1188566",
    scoreReason: "90 分，因为它把现有基础设施存量和未来排放锁定连接起来。",
    relation: "基础设施锁定类比。数据中心 pipeline 和 live capacity 也有锁定效应。",
    focus: ["设施寿命。", "存量排放。", "如何从静态清单走向未来路径。"],
    mode: { professor: "重点看数据中心设施锁定能否成为未来章节贡献。", phd: "学习基础设施锁定逻辑。", idea: "用于容量扩张和治理限制。" }
  },
  "Tong et al. 2019": {
    fullTitle: "Committed emissions from existing energy infrastructure jeopardize 1.5 °C climate target",
    citation: "Tong et al. · Nature · 2019",
    doi: "10.1038/s41586-019-1364-3",
    url: "https://doi.org/10.1038/s41586-019-1364-3",
    scoreReason: "92 分，因为它将设施存量直接放进全球气候目标约束。",
    relation: "设施-目标连接类比。用于把数据中心现有和 pipeline 容量放进 PB 安全空间。",
    focus: ["现有设施如何产生 committed pressure。", "目标约束。", "新建容量限制。"],
    mode: { professor: "重点看 pipeline capacity 能否形成强结果。", phd: "学习存量设施与目标冲突。", idea: "用于新建容量空间优化。" }
  },
  "Meys et al. 2021": {
    fullTitle: "Achieving net-zero greenhouse gas emission plastics by a circular carbon economy",
    citation: "Meys et al. · Science · 2021",
    doi: "10.1126/science.abg9853",
    url: "https://doi.org/10.1126/science.abg9853",
    scoreReason: "91 分，因为它展示大型行业如何通过组合路径实现目标。",
    relation: "治理组合类比。数据中心第三节也应比较治理组合，而非只列措施。",
    focus: ["措施组合。", "目标约束。", "路径可行性。"],
    mode: { professor: "重点看治理情景是否有组合逻辑。", phd: "学习行业路径论文结构。", idea: "用于治理 pathway 章节。" }
  },
  "O'Neill et al. 2018": {
    fullTitle: "A good life for all within planetary boundaries",
    citation: "O'Neill et al. · Nature Sustainability · 2018",
    doi: "10.1038/s41893-018-0021-4",
    url: "https://doi.org/10.1038/s41893-018-0021-4",
    scoreReason: "92 分，因为它把社会需求满足与 PB 安全空间放在同一框架，是理解分配与公平的入口。",
    relation: "方法背景。帮助判断数据中心安全空间分配不能只按工程效率，还会涉及服务需求和公平。",
    focus: ["社会基础和 PB 如何并列。", "人均/国家尺度分配。", "哪些结论不能直接迁移到设施尺度。"],
    mode: { professor: "重点看分配原则会被如何质疑。", phd: "用于建立 PB 与发展需求的背景。", idea: "启发安全空间分配敏感性。" }
  },
  "Ryberg et al. 2020": {
    fullTitle: "Downscaling the planetary boundaries in absolute environmental sustainability assessments - A review",
    citation: "Ryberg et al. · Journal of Cleaner Production · 2020",
    doi: "10.1016/j.jclepro.2020.123287",
    url: "https://doi.org/10.1016/j.jclepro.2020.123287",
    scoreReason: "93 分，因为它系统整理 PB 安全空间如何下放，是本项目方法合法性的核心方法综述。",
    relation: "AESA 方法源。数据中心项目必须先回答 downscaling，不能只给总足迹。",
    focus: ["下放尺度。", "SoSOS。", "sharing principle 的选择和敏感性。"],
    mode: { professor: "重点看我们的下放原则是否站得住。", phd: "先读方法分类。", idea: "用于构造多个安全空间分配情景。" }
  },
  "Hjalsted et al. 2021": {
    fullTitle: "Sharing the safe operating space: Exploring ethical allocation principles to operationalize the planetary boundaries and assess absolute sustainability at individual and industrial sector levels",
    citation: "Hjalsted et al. · Journal of Industrial Ecology · 2021",
    doi: "10.1111/jiec.13050",
    url: "https://doi.org/10.1111/jiec.13050",
    scoreReason: "91 分，因为它直接讨论伦理分配原则如何影响绝对可持续性判断。",
    relation: "安全空间分配防守文献。用于回应数据中心占多少 PB 空间是否任意。",
    focus: ["伦理分配原则。", "个体/行业尺度下放。", "结论对分配原则的敏感性。"],
    mode: { professor: "重点看审稿人会挑战哪种分配原则。", phd: "学习 allocation 的词汇和逻辑。", idea: "用于设计电力占比、经济价值、服务需求等分配方案。" }
  },
  "Clausen et al. 2024": {
    fullTitle: "Applying environmental sustainability boundaries for climate change in life cycle assessment: a review of approaches and implications for policymaking",
    citation: "Clausen et al. · Journal of Industrial Ecology · 2024",
    doi: "10.1111/jiec.13481",
    url: "https://doi.org/10.1111/jiec.13481",
    scoreReason: "87 分，因为它更新了环境边界进入 LCA 的方法和政策含义。",
    relation: "方法更新。帮助把 PB/AESA 方法从概念框架落到 LCA 和政策评价。",
    focus: ["boundary 与 LCA 的接法。", "政策含义。", "气候边界下放的争议。"],
    mode: { professor: "重点看我们能不能清晰分开核算和政策结论。", phd: "用于补 AESA-LCA 背景。", idea: "用于写方法局限。" }
  },
  "Paulillo & Sanye-Mengual 2024": {
    fullTitle: "Approaches to incorporate planetary boundaries in life cycle assessment: A critical review",
    citation: "Paulillo & Sanye-Mengual · Resources, Environment and Sustainability · 2024",
    doi: "待核验",
    url: "https://www.sciencedirect.com/science/article/pii/S2666916124000227",
    scoreReason: "86 分，因为它批判性比较 PB 进入 LCA 的不同路径，可作为方法风险清单。",
    relation: "方法审计文献。用于避免把 PB-LCA 做成简单术语替换。",
    focus: ["PB-LCA 路径分类。", "常见错误。", "哪些边界难以 operationalize。"],
    mode: { professor: "重点看本项目方法表述有没有踩坑。", phd: "用于建立方法边界。", idea: "用于审稿防守。" }
  },
  "Meng et al. 2023": {
    fullTitle: "Planet-compatible pathways for transitioning the chemical industry",
    citation: "Meng et al. · PNAS · 2023",
    doi: "10.1073/pnas.2218294120",
    url: "https://doi.org/10.1073/pnas.2218294120",
    scoreReason: "92 分，因为它是行业转型进入 PB 约束的高水平相邻应用。",
    relation: "相邻行业 PB 应用。数据中心项目需要学习它如何把行业路径、能源需求和 PB 约束连起来。",
    focus: ["行业路径。", "多边界约束。", "技术组合如何表达。"],
    mode: { professor: "重点看我们与化工 PB 路径论文的差异化。", phd: "学习行业 PB 文章结构。", idea: "用于设计数据中心治理组合。" }
  },
  "Vidal et al. 2024": {
    fullTitle: "Designing a circular carbon and plastics economy for a sustainable future",
    citation: "Vidal et al. · Nature · 2024",
    doi: "10.1038/s41586-023-06939-z",
    url: "https://doi.org/10.1038/s41586-023-06939-z",
    scoreReason: "91 分，因为它展示大型材料系统如何做系统转型路径。",
    relation: "相邻系统转型。用于提醒数据中心不能只列措施，而要有系统约束和组合路径。",
    focus: ["循环经济路径。", "能源和材料耦合。", "系统边界如何界定。"],
    mode: { professor: "重点看顶刊系统路径论文的证据强度。", phd: "学习路径图结构。", idea: "用于治理情景组合。" }
  },
  "Siddik et al. 2021": {
    fullTitle: "The environmental footprint of data centers in the United States",
    citation: "Siddik, Shehabi & Marston · Environmental Research Letters · 2021",
    doi: "10.1088/1748-9326/abfba1",
    url: "https://doi.org/10.1088/1748-9326/abfba1",
    scoreReason: "91 分，因为它是数据中心碳/水足迹的直接近邻，且使用基础设施和设施级数据。",
    relation: "对象近邻。它提醒我们必须明确超越已有美国碳/水足迹研究的全球点源 PB 贡献。",
    focus: ["碳和水足迹口径。", "设施级数据怎么用。", "美国范围和全球范围的差异。"],
    mode: { professor: "重点看我们的差异化是否足够。", phd: "先读数据中心 footprint 口径。", idea: "用于创新点查重。" }
  },
  "Xiao et al. 2025": {
    fullTitle: "Environmental impact and net-zero pathways for sustainable artificial intelligence servers in the USA",
    citation: "Xiao et al. · Nature Sustainability · 2025",
    doi: "10.1038/s41893-025-01681-y",
    url: "https://doi.org/10.1038/s41893-025-01681-y",
    scoreReason: "94 分，因为它是 AI servers 环境影响和净零路径的最新顶刊近邻。",
    relation: "强近邻。它可能覆盖 AI/data-centre 能源水碳路径，所以我们必须在全球点源 PB、历史面板和治理指数上差异化。",
    focus: ["Scope 1/2 口径。", "AI server 情景。", "水和碳路径如何建模。"],
    mode: { professor: "重点核验是否与我们的题目重复。", phd: "了解 AI server 环境路径。", idea: "用于查重和定位贡献边界。" }
  },
  "Shehabi et al. 2024": {
    fullTitle: "2024 United States Data Center Energy Usage Report",
    citation: "Shehabi et al. · Lawrence Berkeley National Laboratory / Berkeley Lab · 2024",
    doi: "官方报告",
    url: "https://escholarship.org/uc/item/32d6m0d1",
    scoreReason: "88 分，因为它是数据中心能源使用、PUE/WUE 和情景参数的重要权威数据源。",
    relation: "数据/参数来源，不是 PB 方法文献。用于校验美国部分和参数范围。",
    focus: ["PUE/WUE 参数。", "美国能源使用基线。", "报告和论文证据的角色区分。"],
    mode: { professor: "重点看能否作为参数校验，不要把报告当顶刊贡献。", phd: "读数据定义和参数。", idea: "用于数据字典和敏感性。" }
  },
  "WRI Aqueduct": {
    fullTitle: "Aqueduct Global Water Risk Data",
    citation: "World Resources Institute · dataset",
    doi: "数据源",
    url: "https://www.wri.org/aqueduct",
    scoreReason: "86 分，因为它是把设施位置映射到流域水压力的重要数据源。",
    relation: "空间数据源。用于把数据中心冷却水/发电水转成局地水压力，而不是全球平均水量。",
    focus: ["水压力指标。", "空间尺度。", "和设施经纬度的匹配方式。"],
    mode: { professor: "重点看数据尺度和指标是否适合 PB 解释。", phd: "理解 water stress 数据。", idea: "用于淡水创新点 pilot。" }
  },
  "Hlabisa 2025": {
    fullTitle: "The ecology of artificial intelligence: energy, water, materials, and land limits of digital systems",
    citation: "Hlabisa · Carbon Neutral Systems · 2025",
    doi: "10.1007/s44438-025-00018-8",
    url: "https://doi.org/10.1007/s44438-025-00018-8",
    scoreReason: "82 分，因为它是 AI/data-centre 生态影响的补充综述，适合查重和扩展视野，但不是 PB 方法源头。",
    relation: "创新点核验补充。用于确认 AI/data-centre 文献是否已经讨论 land、water、materials 和 biodiversity limits。",
    focus: ["它是否只是综述/框架。", "是否有设施级数据。", "是否真正 operationalize PB。"],
    mode: { professor: "重点判断它是否已经覆盖我们的 land/biodiversity 叠加贡献。", phd: "用于了解 AI 基础设施环境影响范围。", idea: "用于查重和找关键词。" }
  },
  "Plant-level group analogs": {
    fullTitle: "Plant-level decarbonization / phase-down priority analogs from the group literature",
    citation: "组内设施级治理类比 · 待替换为具体论文",
    doi: "待核验",
    url: "https://scholar.google.com/scholar?q=plant-level+decarbonization+phase-down+priority+facility-level+Nature+Communications+Nature+Sustainability",
    scoreReason: "82 分，因为它不是一篇具体文献，而是提醒需要把组内设施级治理论文替换成可引用的具体条目。",
    relation: "组内能力类比。用于说明数据中心点源治理可以借鉴设施级脱碳、退出优先序和健康收益建模。",
    focus: ["替换成具体组内论文 title/DOI。", "看设施优先序如何构建。", "看治理情景如何设定技术约束。"],
    mode: { professor: "这条不能直接作为引用，必须替换为组内具体论文。", phd: "先找组内对应论文。", idea: "用于提醒点源治理路线。" }
  }
};

Object.assign(seedCase, dataCentreCase);
researchIdeas.splice(0, researchIdeas.length, ...dataCentreResearchIdeas);
Object.assign(paperDetails, dataCentrePaperDetails);

const modeProfiles = {
  professor: {
    title: "教授视角：先判断顶刊贡献和审稿风险",
    body: "优先显示高门槛文献，详情里强调为什么高分、与母文献的研究设计关系、审稿人会追问的证据点。",
    rowLabel: "审稿价值",
    detailLabel: "教授读法"
  },
  phd: {
    title: "博士入门：先搭知识骨架，再读方法细节",
    body: "优先保留基础框架、方法源头和同领域核心文献，详情里强调概念台阶、读图顺序和该补的背景。",
    rowLabel: "入门价值",
    detailLabel: "博士读法"
  },
  idea: {
    title: "选题生成：从文献关系里抽研究设计机会",
    body: "优先显示可迁移、可扩展、可形成新研究设计的文献，详情里强调可以迁移到什么问题、怎么形成 pilot。",
    rowLabel: "选题价值",
    detailLabel: "选题读法"
  }
};

const state = {
  activeTab: "case",
  selectedBranches: new Set(["problem", "method", "data", "decision", "cross"]),
  precision: 86,
  qualityGate: "top",
  scoutMode: "professor",
  selectedPaperKey: null,
  selectedInnovationEvidenceKey: null,
  ideaSource: "all",
  matrixJson: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function paper(title, journal, score, note, branches, tier, modes) {
  return { title, journal, score, note, branches, tier, modes };
}

function idea(title, donor, problem, method, usedBy, data, variables, transfer, why, advantage, reviewerRisk, defense, first, branches, modes) {
  return { title, donor, problem, method, usedBy, data, variables, transfer, why, advantage, reviewerRisk, defense, first, branches, modes };
}

function matrixRow(paperName, role, method, data, contribution, use, branches, tier, modes) {
  return { paper: paperName, role, method, data, contribution, use, branches, tier, modes };
}

function branchIntersects(item) {
  return item.branches.some((branch) => state.selectedBranches.has(branch));
}

function passesQuality(item) {
  if (state.qualityGate === "wide") return true;
  if (state.qualityGate === "hybrid") return ["top", "classic", "dataset"].includes(item.tier);
  return ["top", "classic", "dataset"].includes(item.tier);
}

function precisionThreshold() {
  if (state.precision >= 96) return 94;
  if (state.precision >= 88) return 90;
  if (state.precision >= 76) return 86;
  if (state.precision >= 62) return 80;
  return 0;
}

function precisionProfile() {
  const threshold = precisionThreshold();
  if (state.precision >= 96) {
    return {
      label: "手术刀级",
      body: "只保留能直接解释母文献研究设计、方法源头或顶刊级迁移路径的文献。",
      threshold
    };
  }
  if (state.precision >= 88) {
    return {
      label: "严格组会级",
      body: "优先保留强相关顶刊、方法源头和可直接支撑选题的文献。",
      threshold
    };
  }
  if (state.precision >= 76) {
    return {
      label: "教授预筛级",
      body: "保留与母文献设计链明确相关的文献，剔除只有标题相似的背景文献。",
      threshold
    };
  }
  if (state.precision >= 62) {
    return {
      label: "博士建图级",
      body: "允许方法经典、相邻应用和一部分扩展文献进入，用来搭知识地图。",
      threshold
    };
  }
  return {
    label: "探索发散级",
    body: "放宽设计匹配阈值，用来找远邻类比和潜在新分支，但不直接当核心证据。",
    threshold
  };
}

function passesPrecision(item) {
  return item.score >= precisionThreshold();
}

function passesMode(item) {
  return item.modes.includes(state.scoutMode);
}

function filteredPapersForCluster(cluster, filter = "") {
  const clusterHay = `${cluster.name} ${cluster.summary}`.toLowerCase();
  const clusterMatch = filter && clusterHay.includes(filter);
  return cluster.papers.filter((paperItem) => {
    const detail = getPaperDetail(paperItem);
    const hay = `${paperItem.title} ${paperItem.journal} ${paperItem.note} ${detail.fullTitle} ${detail.citation}`.toLowerCase();
    return branchIntersects(paperItem)
      && passesQuality(paperItem)
      && passesPrecision(paperItem)
      && passesMode(paperItem)
      && (!filter || clusterMatch || hay.includes(filter));
  });
}

function getFilteredClusters(filter = "") {
  return seedCase.clusters.map((cluster) => ({
    ...cluster,
    papers: filteredPapersForCluster(cluster, filter)
  })).filter((cluster) => cluster.papers.length);
}

function getFilteredPapers(filter = "") {
  return getFilteredClusters(filter).flatMap((cluster) => cluster.papers);
}

function getFilteredIdeas() {
  return getIdeaPool().filter((ideaItem) => {
    const sourceMatch = state.ideaSource === "all" || ideaItem.ideaSource === state.ideaSource;
    return sourceMatch
      && branchIntersects(ideaItem)
      && passesMode(ideaItem)
      && ideaScore(ideaItem) >= precisionThreshold();
  });
}

function getIdeaPool() {
  const groupIdeas = researchIdeas.map((ideaItem) => ({
    ...ideaItem,
    ideaSource: "group",
    feasibility: "组内强可行"
  }));
  const crossIdeas = seedCase.ideas.map((ideaItem) => ({
    ...ideaItem,
    ideaSource: "cross",
    feasibility: "启发待验证"
  }));
  return [...groupIdeas, ...crossIdeas];
}

function getFilteredMatrixRows() {
  return seedCase.matrix.filter((row) => {
    const score = getPaperScore(row.paper);
    return branchIntersects(row)
      && passesQuality(row)
      && passesMode(row)
      && (!score || score >= precisionThreshold());
  });
}

function getPaperScore(title) {
  for (const cluster of seedCase.clusters) {
    const found = cluster.papers.find((paperItem) => paperItem.title === title);
    if (found) return found.score;
  }
  return null;
}

function ideaScore(ideaItem) {
  const scores = {
    "氢能行星边界足迹的供应链责任重分配": 94,
    "设施级氢能基础设施与工业用氢转型地图": 93,
    "健康加权的氢能 PB 路径": 91,
    "PB 约束下氢能技术组合的最小失败条件": 90,
    "安全空间分配：从 grandfathering 到公平/供应链责任": 89,
    "氢泄漏与氢能设施缺失清单": 86,
    "行星边界内的氢能基础设施": 90,
    "把安全运行空间看成风险预算": 88,
    "健康加权的行星足迹": 87,
    "行星边界政策接受度实验": 86,
    "设施级氢能转型地图": 85,
    "行星边界转型中的政策反馈": 84,
    "全球数据中心 Scope 1+2 点源 PB 足迹": 96,
    "淡水压力加权的数据中心冷却水足迹": 94,
    "数据中心土地占用与生物多样性风险叠加": 91,
    "高风险点源定向治理 vs 行业平均治理": 93,
    "2025-2060 数据中心 PB 超越动态": 92,
    "点源 PB 超越指数": 92,
    "LLM 辅助点源字段补全": 88
  };
  return scores[ideaItem.title] || 86;
}

function getModeLabel() {
  const labels = {
    professor: "教授视角",
    phd: "博士入门",
    idea: "选题生成"
  };
  return labels[state.scoutMode] || "教授视角";
}

function getQualityLabel() {
  const labels = {
    top: "核心文献 + 方法经典",
    hybrid: "顶刊 + 方法经典",
    wide: "广泛探索"
  };
  return labels[state.qualityGate] || "核心文献 + 方法经典";
}

function getIdeaSourceLabel() {
  const labels = {
    all: "全部 idea",
    group: "组内能力主线",
    cross: "跨学科启发池"
  };
  return labels[state.ideaSource] || "全部 idea";
}

function updateMetrics() {
  $("#metricPapers").textContent = getFilteredPapers($("#paperFilter")?.value.trim().toLowerCase() || "").length;
  $("#metricClusters").textContent = getFilteredClusters($("#paperFilter")?.value.trim().toLowerCase() || "").length;
  $("#metricIdeas").textContent = getFilteredIdeas().length;
}

function renderDesignChain() {
  const container = $("#designChain");
  const template = $("#nodeTemplate");
  container.innerHTML = "";
  seedCase.designChain.forEach((node) => {
    const el = template.content.firstElementChild.cloneNode(true);
    el.querySelector(".node-kicker").textContent = node.key;
    el.querySelector("h4").textContent = node.title;
    el.querySelector("p").textContent = node.body;
    container.appendChild(el);
  });
}

function renderLessons() {
  const container = $("#seedLessons");
  container.innerHTML = seedCase.lessons.map(([title, body]) => `
    <article class="lesson">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(body)}</span>
    </article>
  `).join("");
}

function renderModeBrief() {
  const container = $("#modeBrief");
  if (!container) return;
  const profile = modeProfiles[state.scoutMode];
  const precision = precisionProfile();
  container.innerHTML = `
    <div>
      <strong>${escapeHtml(profile.title)}</strong>
      <span>${escapeHtml(profile.body)}</span>
    </div>
    <div>
      <strong>精准度：${escapeHtml(precision.label)}</strong>
      <span>${escapeHtml(precision.body)} 当前最低设计匹配分：${precision.threshold || "不设硬阈值"}。</span>
    </div>
  `;
}

function renderPrecisionBrief() {
  const container = $("#precisionBrief");
  if (!container) return;
  const precision = precisionProfile();
  container.innerHTML = `
    <strong>${escapeHtml(precision.label)}</strong>
    <span>${escapeHtml(precision.body)}</span>
    <span>它会真实过滤文献地图、综述矩阵和 idea：当前仅保留 ${precision.threshold ? `${precision.threshold} 分及以上` : "所有分数"} 的研究设计匹配项。</span>
  `;
}

function renderBranches() {
  const container = $("#branchList");
  const branches = seedCase.branches.filter((branch) => state.selectedBranches.has(branch.id));
  if (!branches.length) {
    container.innerHTML = `<div class="empty-state">请至少选择一个检索分支。</div>`;
    return;
  }
  container.innerHTML = branches.map((branch) => `
    <article class="branch-card">
      <div>
        <h4>${escapeHtml(branch.name)}</h4>
        <span class="branch-type">${escapeHtml(branch.type)}</span>
      </div>
      <p>${escapeHtml(branch.why)}</p>
      <div class="query-box">${escapeHtml(branch.query)}</div>
    </article>
  `).join("");
}

function renderClusters() {
  const filter = ($("#paperFilter")?.value || "").trim().toLowerCase();
  const container = $("#clusterList");
  const clusters = getFilteredClusters(filter);
  const visibleKeys = new Set(clusters.flatMap((cluster) => cluster.papers.map((paperItem) => paperItem.title)));
  if (state.selectedPaperKey && !visibleKeys.has(state.selectedPaperKey)) {
    state.selectedPaperKey = null;
  }

  if (!clusters.length) {
    container.innerHTML = `<div class="empty-state">当前控件组合没有匹配文献。可以放宽质量门槛、切换模式，或打开更多检索分支。</div>`;
    updateMetrics();
    return;
  }

  container.innerHTML = clusters.map((cluster) => `
    <article class="cluster-card">
      <div class="cluster-head">
        <div>
          <h4>${escapeHtml(cluster.name)}</h4>
          <p>${escapeHtml(cluster.summary)}</p>
        </div>
        <small>${cluster.papers.length} 篇</small>
      </div>
      <div class="paper-list">
        ${cluster.papers.map((paperItem) => renderPaperRow(paperItem)).join("")}
      </div>
    </article>
  `).join("");
  updateMetrics();
}

function renderPaperRow(paperItem) {
  const detail = getPaperDetail(paperItem);
  const active = state.selectedPaperKey === paperItem.title;
  const profile = modeProfiles[state.scoutMode];
  return `
    <button class="paper-row ${active ? "active" : ""}" type="button" data-paper-key="${escapeHtml(paperItem.title)}" aria-expanded="${active ? "true" : "false"}">
      <div>
        <div class="paper-title">${escapeHtml(paperItem.title)}</div>
        <div class="paper-meta">${escapeHtml(paperItem.journal)}</div>
        <div class="paper-full-title">${escapeHtml(detail.fullTitle)}</div>
      </div>
      <div class="paper-meta">${escapeHtml(profile.rowLabel)} · ${scoreLabel(paperItem.score)} · ${tierLabel(paperItem.tier)}</div>
      <div><span class="score ${paperItem.score < 85 ? "mid" : ""}">${paperItem.score}</span></div>
      <div class="paper-note">${escapeHtml(getModePaperNote(detail, paperItem))}</div>
    </button>
    ${active ? renderPaperDetail(paperItem, detail) : ""}
  `;
}

function renderPaperDetail(paperItem, detail) {
  const profile = modeProfiles[state.scoutMode];
  const linkLabel = detail.doi && detail.doi !== "待核验" ? `DOI: ${detail.doi}` : "打开检索/出版社链接";
  return `
    <article class="paper-detail-card">
      <div class="paper-detail-head">
        <div>
          <span class="detail-kicker">文献详情 · ${escapeHtml(profile.detailLabel)}</span>
          <h4>${escapeHtml(detail.fullTitle)}</h4>
          <p>${escapeHtml(detail.citation)}</p>
        </div>
        <a class="detail-link" href="${escapeHtml(detail.url)}" target="_blank" rel="noreferrer">${escapeHtml(linkLabel)}</a>
      </div>
      <div class="detail-grid">
        <div><strong>为什么分数高</strong><span>${escapeHtml(detail.scoreReason)}</span></div>
        <div><strong>和母文献的关系</strong><span>${escapeHtml(detail.relation)}</span></div>
        <div><strong>当前模式怎么读</strong><span>${escapeHtml(detail.mode[state.scoutMode] || detail.mode.professor)}</span></div>
        <div><strong>推荐阅读重点</strong>${renderDetailList(detail.focus)}</div>
      </div>
    </article>
  `;
}

function getModePaperNote(detail, paperItem) {
  if (state.scoutMode === "phd") return detail.focus?.[0] || paperItem.note;
  if (state.scoutMode === "idea") return detail.mode?.idea || paperItem.note;
  return detail.relation || paperItem.note;
}

function renderDetailList(items) {
  return `<ul class="detail-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function getNoveltyCheck(ideaItem) {
  return noveltyChecks[ideaItem.title] || {
    status: "待核验",
    alreadyDone: "尚未完成同对象、同方法、同数据尺度和同决策输出的系统查重。",
    gap: "只有确认最接近文献没有覆盖核心组合后，才应进入正式选题。",
    route: ideaItem.ideaSource === "cross" ? "跨学科启发，需二次筛选" : "组内点源/IO 主线待判定",
    action: "先用 3-5 组关键词检索 Scholar/Crossref，再列出最接近的 5-10 篇论文做查重矩阵。"
  };
}

function renderNoveltyCheck(check) {
  return `
    <div class="full novelty-check">
      <strong>相似研究核验</strong>
      <span><b>结论：</b>${escapeHtml(check.status)}</span>
      <span><b>已有相近工作：</b>${escapeHtml(check.alreadyDone)}</span>
      <span><b>未覆盖缺口：</b>${escapeHtml(check.gap)}</span>
      <span><b>组内路线：</b>${escapeHtml(check.route)}</span>
      <span><b>下一步核实：</b>${escapeHtml(check.action)}</span>
    </div>
  `;
}

function getPaperDetail(paperItem) {
  if (paperDetails[paperItem.title]) return paperDetails[paperItem.title];
  const query = encodeURIComponent(`${paperItem.title} ${paperItem.journal}`);
  return {
    fullTitle: `${paperItem.title}（代表性方向，待精确检索确认）`,
    citation: `${paperItem.journal}`,
    doi: "待核验",
    url: `https://scholar.google.com/scholar?q=${query}`,
    scoreReason: `${paperItem.score} 分来自当前原型的研究设计贴合度：${paperItem.note}`,
    relation: "与母文献属于同一方法或边界扩展方向，但还需要用 Scholar/Crossref 做精确 DOI 核验。",
    focus: ["先确认真实 title、DOI、期刊和作者。", "再判断它是否真正支持母文献的某一段方法链。", "不要把未核验方向当作核心证据。"],
    mode: {
      professor: "只作为待核验证据，不进入核心论证。",
      phd: "用于扩展背景概念，读前先核验来源。",
      idea: "可作为搜索分支，不直接作为顶刊先例。"
    }
  };
}

function scoreLabel(score) {
  if (score >= 92) return "必读";
  if (score >= 86) return "强相关";
  return "辅助";
}

function tierLabel(tier) {
  return {
    top: "顶刊",
    classic: "方法经典",
    dataset: "关键数据源",
    wide: "扩展"
  }[tier] || "扩展";
}

function renderIdeas() {
  const container = $("#ideaGrid");
  const ideas = getFilteredIdeas();
  updateIdeaSourceControls();
  if (!ideas.length) {
    container.innerHTML = `<div class="empty-state">当前分支/模式下没有 idea。切换 idea 来源、打开“能力迁移”或降低精准度会出现更多卡片。</div>`;
    requestAnimationFrame(updateIdeaScrollButtons);
    return;
  }
  container.innerHTML = ideas.map((ideaItem) => {
    const labels = getIdeaLabels(ideaItem);
    const novelty = getNoveltyCheck(ideaItem);
    return `
    <article class="idea-card ${escapeHtml(ideaItem.ideaSource)}">
      <header>
        <div>
          <div class="idea-badges">
            <span class="source-badge ${escapeHtml(ideaItem.ideaSource)}">${escapeHtml(labels.source)}</span>
            <span class="source-badge neutral">${escapeHtml(ideaItem.feasibility)}</span>
          </div>
          <h4>${escapeHtml(ideaItem.title)}</h4>
        </div>
        <span>${escapeHtml(ideaItem.donor)}</span>
      </header>
      <div class="idea-fields">
        <div><strong>本领域难题</strong><span>${escapeHtml(ideaItem.problem)}</span></div>
        <div><strong>${escapeHtml(labels.method)}</strong><span>${escapeHtml(ideaItem.method)}</span></div>
        <div class="full"><strong>${escapeHtml(labels.precedent)}</strong>${renderSourceList(ideaItem.usedBy)}</div>
        ${renderNoveltyCheck(novelty)}
        <div><strong>需要的数据</strong><span>${escapeHtml(ideaItem.data)}</span></div>
        <div><strong>变量 / 模型</strong><span>${escapeHtml(ideaItem.variables)}</span></div>
        <div><strong>怎么实施</strong><span>${escapeHtml(ideaItem.transfer)}</span></div>
        <div><strong>为什么值得用</strong><span>${escapeHtml(ideaItem.why)}</span></div>
        <div><strong>${escapeHtml(labels.advantage)}</strong><span>${escapeHtml(ideaItem.advantage)}</span></div>
        <div><strong>审稿人会 argue</strong><span>${escapeHtml(ideaItem.reviewerRisk)}</span></div>
        <div><strong>怎么防守</strong><span>${escapeHtml(ideaItem.defense)}</span></div>
        <div><strong>最小可行版本</strong><span>${escapeHtml(ideaItem.first)}</span></div>
      </div>
    </article>
  `;
  }).join("");
  requestAnimationFrame(updateIdeaScrollButtons);
}

function getIdeaLabels(ideaItem) {
  if (ideaItem.ideaSource === "cross") {
    return {
      source: "跨学科启发池",
      method: "外部启发切入点",
      precedent: "外部顶刊 / 方法先例",
      advantage: "迁移价值"
    };
  }
  return {
    source: "组内能力主线",
    method: "组内能力切入点",
    precedent: "组内先例 / 顶刊参照",
    advantage: "组内优势"
  };
}

function updateIdeaSourceControls() {
  $$(".idea-source").forEach((button) => {
    button.classList.toggle("active", button.dataset.ideaSource === state.ideaSource);
  });
}

function renderCapabilityStrip() {
  const container = $("#capabilityStrip");
  if (!container) return;
  container.innerHTML = seedCase.groupCapabilities.map(([title, body]) => `
    <article class="capability-pill">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(body)}</span>
    </article>
  `).join("");
}

function renderSearchAudit() {
  const container = $("#searchAuditGrid");
  if (!container) return;
  const current = getFilteredPapers().length;
  const totalPool = seedCase.clusters.reduce((sum, cluster) => sum + cluster.papers.length, 0);
  container.innerHTML = `
    <article class="audit-card highlight">
      <h4>当前显示不是文献上限</h4>
      <p>当前控件显示 ${current} 篇；原型候选池已扩展到 ${totalPool} 条。最终工具应继续用 Scholar/Crossref 自动扩展，再由质量门槛和精准度降噪。</p>
    </article>
    ${seedCase.searchAudit.map((item) => `
      <article class="audit-card">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.body)}</p>
        <strong>${escapeHtml(item.action)}</strong>
      </article>
    `).join("")}
  `;
}

function renderInnovationChecks() {
  const container = $("#innovationGrid");
  if (!container) return;
  const checks = seedCase.innovationChecks || [];
  if (!checks.length) {
    container.innerHTML = `<div class="empty-state">当前案例还没有生成创新点核验。先完成文献地图，再让工具从研究缺口中生成候选创新点。</div>`;
    return;
  }
  container.innerHTML = checks.map((item) => `
    <article class="innovation-card">
      <header>
        <h4>${escapeHtml(item.title)}</h4>
        <span>${escapeHtml(item.verdict)}</span>
      </header>
      <div class="innovation-fields">
        <div class="full">
          <strong>相关文献 / 数据源</strong>
          ${renderInnovationEvidenceList(item.evidence)}
        </div>
        <div>
          <strong>目前缺口</strong>
          <span>${escapeHtml(item.gap)}</span>
        </div>
        <div>
          <strong>下一步检索式</strong>
          <code>${escapeHtml(item.search)}</code>
        </div>
        <div class="full risk">
          <strong>审稿风险</strong>
          <span>${escapeHtml(item.risk)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function getPaperFromMap(title) {
  for (const cluster of seedCase.clusters) {
    const found = cluster.papers.find((paperItem) => paperItem.title === title);
    if (found) return found;
  }
  return null;
}

function getEvidencePaperItem(title) {
  return getPaperFromMap(title) || paper(
    title,
    "创新点核验补充",
    82,
    "这条证据用于核验某个创新点是否已被类似研究覆盖；它不一定属于领域入门地图的核心文献。",
    ["problem", "method", "data", "decision", "cross"],
    "wide",
    ["professor", "phd", "idea"]
  );
}

function renderInnovationEvidenceList(items) {
  return `<div class="evidence-list">${items.map((title) => {
    const paperItem = getEvidencePaperItem(title);
    const detail = getPaperDetail(paperItem);
    const inMap = Boolean(getPaperFromMap(title));
    const active = state.selectedInnovationEvidenceKey === title;
    return `
      <div class="evidence-item">
        <button class="evidence-row ${active ? "active" : ""}" type="button" data-evidence-key="${escapeHtml(title)}" aria-expanded="${active ? "true" : "false"}">
          <div>
            <span class="evidence-name">${escapeHtml(title)}</span>
            <span class="evidence-title">${escapeHtml(detail.fullTitle)}</span>
          </div>
          <span class="source-badge ${inMap ? "neutral" : "cross"}">${inMap ? "文献地图已有" : "核验补充"}</span>
        </button>
        ${active ? renderEvidenceDetail(paperItem, detail, inMap) : ""}
      </div>
    `;
  }).join("")}</div>`;
}

function renderEvidenceDetail(paperItem, detail, inMap) {
  const linkLabel = detail.doi && detail.doi !== "待核验" ? `DOI: ${detail.doi}` : "打开检索/出版社链接";
  return `
    <article class="paper-detail-card evidence-detail">
      <div class="paper-detail-head">
        <div>
          <span class="detail-kicker">创新点证据 · ${inMap ? "也在文献地图中" : "定向核验补充"}</span>
          <h4>${escapeHtml(detail.fullTitle)}</h4>
          <p>${escapeHtml(detail.citation)}</p>
        </div>
        <a class="detail-link" href="${escapeHtml(detail.url)}" target="_blank" rel="noreferrer">${escapeHtml(linkLabel)}</a>
      </div>
      <div class="detail-grid">
        <div><strong>为什么放在这里</strong><span>${escapeHtml(detail.relation)}</span></div>
        <div><strong>证据角色</strong><span>${escapeHtml(inMap ? "这是领域地图里的核心/方法/对象文献，在创新点里被复用。" : "这是为某个创新点补充的查重或数据证据，不代表它是领域入门核心文献。")}</span></div>
        <div><strong>当前读法</strong><span>${escapeHtml(detail.mode[state.scoutMode] || detail.mode.professor)}</span></div>
        <div><strong>重点看</strong>${renderDetailList(detail.focus)}</div>
      </div>
    </article>
  `;
}

function renderSourceList(items) {
  return `<ul class="source-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderReviewerChecks() {
  const container = $("#reviewerGrid");
  if (!container) return;
  container.innerHTML = seedCase.reviewerChecks.map((item) => `
    <article class="review-card">
      <h4>${escapeHtml(item.gate)}</h4>
      <div><strong>先问</strong><span>${escapeHtml(item.question)}</span></div>
      <div><strong>踩雷点</strong><span>${escapeHtml(item.risk)}</span></div>
      <div><strong>防守</strong><span>${escapeHtml(item.defense)}</span></div>
    </article>
  `).join("");
}

function renderLabStandards() {
  const container = $("#labStandardGrid");
  if (!container) return;
  container.innerHTML = seedCase.labStandards.map((item) => `
    <article class="lab-card">
      <h4>${escapeHtml(item.gate)}</h4>
      <div><strong>达标</strong><span>${escapeHtml(item.pass)}</span></div>
      <div><strong>淘汰信号</strong><span>${escapeHtml(item.fail)}</span></div>
      <div><strong>工具动作</strong><span>${escapeHtml(item.action)}</span></div>
    </article>
  `).join("");
}

function renderMatrix() {
  const rows = getFilteredMatrixRows();
  state.matrixJson = rows.map((row) => ({
    paper: row.paper,
    role: row.role,
    method: row.method,
    data: row.data,
    contribution: row.contribution,
    use: row.use
  }));
  const tbody = $("#matrixTable tbody");
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="6">当前控件组合没有矩阵条目。</td></tr>`;
    return;
  }
  tbody.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.paper)}</td>
      <td>${escapeHtml(row.role)}</td>
      <td>${escapeHtml(row.method)}</td>
      <td>${escapeHtml(row.data)}</td>
      <td>${escapeHtml(row.contribution)}</td>
      <td>${escapeHtml(row.use)}</td>
    </tr>
  `).join("");
}

function drawSignalCanvas() {
  const canvas = $("#signalCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, w, h);

  const centerX = w / 2;
  const centerY = h / 2 + 8;
  const maxR = Math.min(w, h) * 0.34;
  const labels = ["问题", "方法", "数据", "决策", "能力"];
  const values = [0.92, 0.96, 0.88, 0.78, 0.84].map((value, index) => {
    const branch = seedCase.branches[index];
    const modeBoost = state.scoutMode === "idea" && branch.id === "cross" ? 1.12 : 1;
    const phdBoost = state.scoutMode === "phd" && ["problem", "method", "data"].includes(branch.id) ? 1.06 : 1;
    const professorBoost = state.scoutMode === "professor" && ["method", "decision"].includes(branch.id) ? 1.04 : 1;
    const qualityPenalty = state.qualityGate === "wide" ? 0.92 : state.qualityGate === "hybrid" ? 0.97 : 1;
    return state.selectedBranches.has(branch.id)
      ? Math.min(1, value * modeBoost * phdBoost * professorBoost * qualityPenalty * (state.precision / 100))
      : 0.14;
  });

  ctx.strokeStyle = "#d9e0ea";
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 4; ring += 1) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxR * ring / 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  const points = values.map((value, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index / labels.length);
    return {
      x: centerX + Math.cos(angle) * maxR * value,
      y: centerY + Math.sin(angle) * maxR * value,
      lx: centerX + Math.cos(angle) * (maxR + 38),
      ly: centerY + Math.sin(angle) * (maxR + 38)
    };
  });

  labels.forEach((label, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index / labels.length);
    const ax = centerX + Math.cos(angle) * maxR;
    const ay = centerY + Math.sin(angle) * maxR;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(ax, ay);
    ctx.stroke();
    ctx.fillStyle = "#46566f";
    ctx.font = "700 13px Segoe UI, Microsoft YaHei, Arial";
    ctx.textAlign = points[index].lx < centerX - 10 ? "right" : points[index].lx > centerX + 10 ? "left" : "center";
    ctx.fillText(label, points[index].lx, points[index].ly);
  });

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(35, 100, 170, 0.18)";
  ctx.strokeStyle = "#2364aa";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.fillStyle = ["#2364aa", "#13795b", "#8a5a00", "#a33a3a", "#7057a3"][index];
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#172033";
  ctx.font = "800 20px Segoe UI, Microsoft YaHei, Arial";
  ctx.textAlign = "center";
  ctx.fillText(`${state.precision}%`, centerX, centerY - 5);
  ctx.fillStyle = "#5b667a";
  ctx.font = "700 12px Segoe UI, Microsoft YaHei, Arial";
  ctx.fillText(`${getModeLabel()} · ${getQualityLabel()}`, centerX, centerY + 16);
}

function setActiveTab(tabName) {
  state.activeTab = tabName;
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  $$(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === tabName));
  if (tabName === "landscape") renderClusters();
  if (tabName === "innovation") renderInnovationChecks();
  updateMetrics();
  if (tabName === "case") requestAnimationFrame(drawSignalCanvas);
}

function readControls() {
  const checked = $$(".chip-set input:checked").map((input) => input.value);
  state.selectedBranches = new Set(checked);
  state.precision = Number($("#precisionRange").value);
  state.qualityGate = $("#qualityGate").value;
  state.scoutMode = $("#scoutMode").value;
  $("#precisionValue").textContent = state.precision;
}

function renderAll() {
  renderModeBrief();
  renderPrecisionBrief();
  renderBranches();
  renderClusters();
  renderCapabilityStrip();
  renderSearchAudit();
  renderInnovationChecks();
  renderIdeas();
  renderReviewerChecks();
  renderLabStandards();
  renderMatrix();
  updateMetrics();
  drawSignalCanvas();
}

function scrollIdeaCards(direction) {
  const grid = $("#ideaGrid");
  const amount = Math.max(320, Math.floor(grid.clientWidth * 0.88));
  grid.scrollBy({ left: direction * amount, behavior: "smooth" });
  window.setTimeout(updateIdeaScrollButtons, 260);
}

function updateIdeaScrollButtons() {
  const grid = $("#ideaGrid");
  const prev = $("#ideaPrevBtn");
  const next = $("#ideaNextBtn");
  if (!grid || !prev || !next) return;
  const hasOverflow = grid.scrollWidth > grid.clientWidth + 4;
  prev.disabled = !hasOverflow || grid.scrollLeft <= 2;
  next.disabled = !hasOverflow || grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 2;
}

function generateScout({ switchByMode = false } = {}) {
  const seed = $("#seedInput").value.trim() || seedCase.title;
  $("#caseTitle").textContent = seed;
  const normalizedSeed = seed.toLowerCase();
  const isSeedCase = normalizedSeed.includes("hydrogen")
    || seed.includes("氢")
    || seed.includes("数据中心")
    || normalizedSeed.includes("data center")
    || normalizedSeed.includes("data centre")
    || normalizedSeed.includes("planetary")
    || seed.includes("行星边界");
  $("#caseMeta").textContent = isSeedCase
    ? seedCase.meta
    : "自定义种子 · 研究设计侦察模式";

  readControls();
  renderAll();

  if (switchByMode) {
    if (state.scoutMode === "idea") setActiveTab("ideas");
    if (state.scoutMode === "phd") setActiveTab("landscape");
    if (state.scoutMode === "professor") setActiveTab("case");
  }

  $("#statusTitle").textContent = "已生成";
  $("#statusText").textContent = `${getModeLabel()}｜${getQualityLabel()}｜${getIdeaSourceLabel()}｜${state.selectedBranches.size} 条分支｜${getFilteredPapers().length} 篇文献｜${getFilteredIdeas().length} 个 idea。`;
}

function exportCsv() {
  const header = ["文献", "角色", "方法", "数据", "贡献", "对我们选题的用途"];
  const rows = getFilteredMatrixRows().map((row) => [row.paper, row.role, row.method, row.data, row.contribution, row.use].map(csvEscape).join(","));
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "顶刊文献侦察_综述矩阵.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  $("#statusTitle").textContent = "已导出";
  $("#statusText").textContent = "当前筛选下的综述矩阵 CSV 已下载。";
}

function copyMatrixJson() {
  const text = JSON.stringify(state.matrixJson, null, 2);
  navigator.clipboard?.writeText(text).then(() => {
    $("#statusTitle").textContent = "已复制";
    $("#statusText").textContent = "当前筛选下的矩阵 JSON 已复制到剪贴板。";
  }).catch(() => {
    $("#statusTitle").textContent = "复制失败";
    $("#statusText").textContent = "浏览器阻止了剪贴板访问。";
  });
}

function csvEscape(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function bindEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
  });
  $("#generateBtn").addEventListener("click", () => generateScout({ switchByMode: true }));
  $("#exportBtn").addEventListener("click", exportCsv);
  $("#copyMatrixBtn").addEventListener("click", copyMatrixJson);
  $("#ideaPrevBtn").addEventListener("click", () => scrollIdeaCards(-1));
  $("#ideaNextBtn").addEventListener("click", () => scrollIdeaCards(1));
  $("#ideaGrid").addEventListener("scroll", updateIdeaScrollButtons, { passive: true });
  window.addEventListener("resize", updateIdeaScrollButtons);
  $$(".idea-source").forEach((button) => {
    button.addEventListener("click", () => {
      state.ideaSource = button.dataset.ideaSource;
      renderIdeas();
      updateMetrics();
      $("#statusTitle").textContent = "已切换 idea 来源";
      $("#statusText").textContent = `${getIdeaSourceLabel()}｜当前 ${getFilteredIdeas().length} 个 idea。`;
    });
  });
  $("#clusterList").addEventListener("click", (event) => {
    const row = event.target.closest("[data-paper-key]");
    if (!row) return;
    const key = row.dataset.paperKey;
    state.selectedPaperKey = state.selectedPaperKey === key ? null : key;
    renderClusters();
  });
  $("#innovationGrid").addEventListener("click", (event) => {
    const row = event.target.closest("[data-evidence-key]");
    if (!row) return;
    const key = row.dataset.evidenceKey;
    state.selectedInnovationEvidenceKey = state.selectedInnovationEvidenceKey === key ? null : key;
    renderInnovationChecks();
  });
  $("#paperFilter").addEventListener("input", () => {
    renderClusters();
    updateMetrics();
  });
  $("#precisionRange").addEventListener("input", () => {
    readControls();
    renderAll();
    const precision = precisionProfile();
    $("#statusTitle").textContent = "已调整精准度";
    $("#statusText").textContent = `${precision.label}｜${getIdeaSourceLabel()}｜最低设计匹配分 ${precision.threshold || "无硬阈值"}｜当前 ${getFilteredPapers().length} 篇文献、${getFilteredIdeas().length} 个 idea。`;
  });
  $("#qualityGate").addEventListener("change", () => generateScout());
  $("#scoutMode").addEventListener("change", () => generateScout({ switchByMode: true }));
  $$(".chip-set input").forEach((input) => {
    input.addEventListener("change", () => generateScout());
  });
}

function init() {
  readControls();
  renderDesignChain();
  renderLessons();
  renderAll();
  bindEvents();
  requestAnimationFrame(drawSignalCanvas);
}

init();
