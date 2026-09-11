/**
     * 15 Essential Career Scenarios:
     * Questions & Options remain fully in authentic English.
     * Headers, labels, roles, feedback, and results are fully in Chinese.
     */
    const scenarios = [
      // 1 (Original #2)
      {
        origId: 2,
        stageTitle: "关卡 1: 初见主编高压面试",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "You don't read Runway? You have no style, no sense of fashion... And you think you're above this. Why should I hire an arrogant girl who doesn't even know who Valentino is?",
        options: [
          {
            letter: "A",
            text: "I admit fashion seems superficial, but I graduated top of my class at Northwestern and want serious journalism.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】傲慢对抗",
            feedback: "将公司深耕的核心产业贬低为“肤浅无聊”，当面否定面试官毕生追求的行业价值，这种防卫性傲慢会瞬间摧毁你的职业信誉与录用可能。"
          },
          {
            letter: "B",
            text: "I'm willing to buy new clothes and study fashion magazines tonight if it helps me perform the job properly.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】态度尚可",
            feedback: "展现出一定的适应意愿，但单纯聚焦于穿衣外表等表层形式，未能在关键时刻展现出高级核心助理所必需的智识底蕴与解决复杂问题的韧性。"
          },
          {
            letter: "C",
            text: "I may not know fashion yet, Miranda, but I'm sharp, resourceful, and I learn faster than anyone. Give me this chance and I won't let you down.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】破局制胜",
            feedback: "极佳的心理素质与控场力。直面专业认知短板，同时迅速将对话焦点锚定在高管最为看重的稀缺特质上：极强敏锐度、破局搜商与超速学习能力。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 3, diplomacy: 1, resourcefulness: 2, integrity: 1 }
      },

      // 2 (Original #4)
      {
        origId: 4,
        stageTitle: "关卡 2: 浅蓝毛衣深度风波",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "Something funny? You think this has nothing to do with you. You go to your closet and select that lumpy blue sweater, unaware it was selected for you by the people in this room from a pile of 'stuff'.",
        options: [
          {
            letter: "A",
            text: "I was just chuckling because both belts look virtually identical to me, so I didn't understand the fuss.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】轻佻失察",
            feedback: "在严肃的高阶商业与审美评审会议上自作聪明地嗤笑，暴露了对商业运作逻辑与行业价值的严重无知，欠缺基础的职场敬畏与分寸感。"
          },
          {
            letter: "B",
            text: "I apologize, Miranda. I didn't mean to be disrespectful; I just don't know the subtleties of accessories well yet.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】被动认错",
            feedback: "态度礼貌且未激化矛盾，但仅仅停留在程式化的认错层面，并未展现出对米兰达所阐释的宏观商业脉络与产业运转规律的真正理解。"
          },
          {
            letter: "C",
            text: "I apologize sincerely for my reaction, Miranda. I spoke out of turn and completely underestimated the craftsmanship and economic ripple behind your decisions.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】深刻反思",
            feedback: "极高维度的职业自省。真诚承认逾矩，同时精准识别高层决策背后的商业分量与产业联动价值，巧妙化被动尴尬为向上成长的契机。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 3, diplomacy: 3, resourcefulness: 1, integrity: 1 }
      },

      // 3 (Original #6)
      {
        origId: 6,
        stageTitle: "关卡 3: 奈杰尔当头棒喝与转变",
        roleBadge: "对话角色: 艺术总监 (Nigel Kipling)",
        speakerName: "奈杰尔·基普林 (Nigel Kipling - 艺术总监)",
        speakerQuote: "Andy, be serious. You are not trying. You are whining. Do you know how many millions of girls would kill for this job? You deign to work here and wonder why Miranda doesn't kiss your forehead.",
        options: [
          {
            letter: "A",
            text: "That's unfair, Nigel! I work 16 hours a day and Miranda doesn't even bother to remember my name!",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】怨妇心态",
            feedback: "受害者心态与情绪化宣泄会让你彻底屏蔽真诚反馈。资深前辈和核心导师会迅速疏离那些将‘自我感动式的苦劳’混同于‘组织战略价值’的人。"
          },
          {
            letter: "B",
            text: "Can you just lend me some stylish clothes from the fashion closet so Miranda stops glaring at my shoes?",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】治标不治本",
            feedback: "试图将职场脱胎换骨简化为一场表面化的换装捷径，忽视了奈杰尔敲打的核心本质：真正的敬业需要发自内心地融入文化并尊重所在行业。"
          },
          {
            letter: "C",
            text: "You're right, Nigel. I've been treating this as beneath me instead of giving it my all. Teach me how to understand this industry and do this right.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】高维同频",
            feedback: "职业生涯的关键蜕变节点。以极高的担责意识坦诚接纳尖锐批评，将前任的严厉训诫转化为结盟契机，成功赢取内圈导师的全力引路。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 3, diplomacy: 2, resourcefulness: 2, integrity: 2 }
      },

      // 4 (Original #7)
      {
        origId: 7,
        stageTitle: "关卡 4: 史密斯牛排紧急危机",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "Where is my steak from Smith & Wollensky? I have an urgent working lunch with Donatella in fifteen minutes, and it needs to be on my desk piping hot.",
        options: [
          {
            letter: "A",
            text: "Miranda, the restaurant is twenty blocks away and traffic is gridlocked. It is physically impossible to get it in 15 minutes.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】找借口放弃",
            feedback: "面对高管的紧急战略需求，直接抛出外部客观阻碍而非可执行的替代方案，暴露出初级执行者的被动推诿心态。切忌轻易向高层说‘不可能’。"
          },
          {
            letter: "B",
            text: "I'll run over to 49th Street immediately on foot and plead with the kitchen staff to rush the order.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】低效苦干",
            feedback: "执行态度固然值得肯定，但在纽约复杂的城市交通下仅凭双腿奔跑20个街区，在极度不可控的前提下大概率导致时限违约并升级危机。"
          },
          {
            letter: "C",
            text: "I've already coordinated with the manager at Smith & Wollensky for expedited prep; it is en route with our courier and will arrive in 8 minutes flat.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】超前预判",
            feedback: "堪称典范的前瞻执行力。通过预判高管的周期性工作节律与商务习惯，提前调度外部运力网络，在危机显现之前将其消弭于无形。"
          }
        ],
        dimensionWeights: { execution: 3, resilience: 2, diplomacy: 1, resourcefulness: 3, integrity: 1 }
      },

      // 5 (Original #8)
      {
        origId: 8,
        stageTitle: "关卡 5: 联排别墅“圣经”准则",
        roleBadge: "对话角色: 豪宅私密场景 (Miranda's Townhouse)",
        speakerName: "别墅禁令 (Townhouse Strict Protocol)",
        speakerQuote: "Deliver the Book and dry cleaning inside Miranda's private townhouse. Drop them on the designated foyer console. Do not speak to anyone. Do not look around. Exit immediately.",
        options: [
          {
            letter: "A",
            text: "Walk straight upstairs into the private living quarters to hand-deliver the items to Miranda's daughters who are calling you.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】越界触雷",
            feedback: "违背高管私人住所严禁涉足核心生活区的明文禁令，贸然闯入私密空间，直接踩中了高层商业信任中最无法容忍的边界红线。"
          },
          {
            letter: "B",
            text: "Hesitate in the hallway and call out loudly to see if anyone is available to sign off on the delivery.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】缺乏分寸",
            feedback: "在豪宅玄关大声呼喊缺乏分寸感，破坏了顶级私人与商务场景中所严苛要求的‘隐形、高效、不打扰’的专业服务规范。"
          },
          {
            letter: "C",
            text: "Place the Book and garments precisely on the foyer console, acknowledge the children with a quiet, polite nod from the entryway, and immediately exit.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】严守边界",
            feedback: "无可挑剔的审慎度与职业操守。在面对模糊情境或潜在陷阱时，严格遵守权责协议与隐私边界，用克制与自律赢得持久的绝对信任。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 2, diplomacy: 3, resourcefulness: 1, integrity: 3 }
      },

      // 6 (Original #9)
      {
        origId: 9,
        stageTitle: "关卡 6: 哈利波特手稿破局战",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "My daughters want the unpublished Harry Potter manuscript before their train leaves for Grandma's at 4 PM. If you can't deliver, don't bother coming back.",
        options: [
          {
            letter: "A",
            text: "Publishing houses have strict legal NDAs; asking for an unreleased manuscript violates federal copyright law.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】机械合规",
            feedback: "当最高领导发起隐蔽的资源调动与破局压力测试时，机械背诵书本上的法律教条，等同于主动宣告执行瘫痪并自动放弃职位。"
          },
          {
            letter: "B",
            text: "Call Scholastic publishing's standard customer support line and plead with reception to email you an advance PDF draft.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】常规途径",
            feedback: "路径依赖严重。常规的公开客服通道受限于层级权限，根本不可能为一个外部陌生来电破例发放核心未公开版权手稿。"
          },
          {
            letter: "C",
            text: "Leverage an influential literary industry contact, secure two advance review copies, bind them neatly, and have them waiting at the girls' train seats.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】极致搜商",
            feedback: "高阶商业搜商与资源杠杆调动的教科书式典范。迅速激活外围核心人脉圈层，辅以近乎完美的白手套式精美交付，化不可能的死局为荣耀时刻。"
          }
        ],
        dimensionWeights: { execution: 3, resilience: 2, diplomacy: 2, resourcefulness: 3, integrity: 1 }
      },

      // 7 (Original #11)
      {
        origId: 11,
        stageTitle: "关卡 7: 詹姆斯·霍尔特系列评审",
        roleBadge: "对话角色: 先锋设计师 (James Holt)",
        speakerName: "詹姆斯·霍尔特 (James Holt - 服装设计师)",
        speakerQuote: "Andy, tell me honestly! Miranda pursed her lips twice when she looked at my cerise gown. Does that mean she hated the whole collection? Am I ruined?",
        options: [
          {
            letter: "A",
            text: "Yeah, pursed lips is Miranda's death sentence. You probably need to scrap the entire line before Paris.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】传谣添乱",
            feedback: "擅自放大高管微表情含义并制造恐慌情绪，不仅严重损害了关键合作伙伴的心理防线，更违背了核心助理应有的情绪稳定与保密准则。"
          },
          {
            letter: "B",
            text: "I'm really not sure; Miranda is notoriously impossible to read, so try not to stress too much about it.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】敷衍应付",
            feedback: "虽未犯大错但毫无实际价值，让正处于极度焦虑与脆弱状态的核心创意伙伴陷入更深的决策迷茫与心理真空。"
          },
          {
            letter: "C",
            text: "Miranda evaluates every detail through Runway's editorial lens. Her reaction simply signals that the cerise piece needs refining—her intense focus shows respect for your vision.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】高阶公关",
            feedback: "极高维度的职场外交智慧。以建设性视角精准转化高管的严苛信号，既捍卫了核心领导的决策权威与神秘感，又稳定赋能了客户伙伴的信心。"
          }
        ],
        dimensionWeights: { execution: 1, resilience: 2, diplomacy: 3, resourcefulness: 2, integrity: 2 }
      },

      // 8 (Original #13)
      {
        origId: 13,
        stageTitle: "关卡 8: 慈善晚宴临场救援",
        roleBadge: "对话角色: 第一助理 (Emily Charlton)",
        speakerName: "艾米莉·查尔顿 (Emily Charlton - 第一助理)",
        speakerQuote: "Oh god, I have a fever of 102 and I'm drawing a total blank... Who is that French dignitary heading directly towards Miranda right now?!",
        options: [
          {
            letter: "A",
            text: "Loudly call out the ambassador's name across the ballroom so Miranda hears you over Emily.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】粗鲁失控",
            feedback: "在顶级黑领结社交晚宴上隔空大声呼喊，会造成严重的公开失仪，让机构在国际名流与重要贵宾面前丧失优雅体面。"
          },
          {
            letter: "B",
            text: "Push Emily aside and rush forward to hand Miranda the printed dossier cards.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】笨拙生硬",
            feedback: "动作突兀生硬。强行插到核心领导面前递送纸质小抄，打破了顶层社交场中游刃有余、过目不忘的从容掌控神话。"
          },
          {
            letter: "C",
            text: "Discreetly step beside Miranda and softly murmur: 'Ambassador Gérard and his new wife, Madame Jacqueline, who recently funded the Louvre retrospective.'",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】润物无声",
            feedback: "堪称典范的幕僚级近身辅助。在最关键的社交节点轻声同步核心背景要点，无痕补台，成全领导纵横捭阖的控场气度。"
          }
        ],
        dimensionWeights: { execution: 3, resilience: 3, diplomacy: 2, resourcefulness: 2, integrity: 1 }
      },

      // 9 (Original #14)
      {
        origId: 14,
        stageTitle: "关卡 9: 巴黎时装周临阵易帅",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "Emily won't be coming to Paris. I need you. If you refuse, I will assume you are not serious about your future at Runway or anywhere else.",
        options: [
          {
            letter: "A",
            text: "That's cruel! Emily has starved herself for months for Paris. I refuse to betray my colleague.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】道德指责",
            feedback: "站在道德制高点对组织最高决策者的战略决断进行情绪化审判，不仅无法改变同伴的命运，更会让自己当场出局。"
          },
          {
            letter: "B",
            text: "If you insist, Miranda, I'll go, but please don't make me be the one who tells Emily the bad news.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】懦弱推诿",
            feedback: "既想接下重磅晋升的核心筹码，又试图把最痛苦的人际沟通成本转嫁给组织，暴露出管理心智维度的严重不成熟。"
          },
          {
            letter: "C",
            text: "I understand the immense responsibility of this assignment, Miranda. I will step up and ensure Paris runs flawlessly, while managing the transition with Emily respectfully.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】大局统筹",
            feedback: "成熟管理者的格局与担当。在重大战略重任面前毫不退缩地扛起全局，同时勇敢直面人际震荡，主动承担沟通责任而不逃避代价。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 3, diplomacy: 2, resourcefulness: 1, integrity: 3 }
      },

      // 10 (Original #15)
      {
        origId: 15,
        stageTitle: "关卡 10: 坦白告知艾米莉真相",
        roleBadge: "对话角色: 第一助理 (Emily Charlton)",
        speakerName: "艾米莉·查尔顿 (Emily Charlton - 第一助理)",
        speakerQuote: "Why are you looking at me like that? Did something happen with the Paris travel vouchers? Tell me!",
        options: [
          {
            letter: "A",
            text: "Avoid eye contact and say: 'Miranda made the decision, not me. It's completely out of my hands.'",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】卸责逃避",
            feedback: "眼神闪躲并全盘甩锅给上级决断，姿态懦弱不堪，会彻底摧毁彼此之间原本可以保留的最后一丝职业尊重与信任。"
          },
          {
            letter: "B",
            text: "Send her a long apologetic text message later that evening to avoid an awkward face-to-face confrontation in the hospital.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】逃避冲突",
            feedback: "用冷冰冰的数字消息逃避当面沟通，是对关键职业关系中沉重情感代价的怯懦退避，无法树立真正的人格信誉。"
          },
          {
            letter: "C",
            text: "Look her in the eye: 'Emily, Miranda ordered me to accompany her to Paris instead. I know how much this meant to you and how hard you worked. I wanted to tell you directly and honestly.'",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】担当坦诚",
            feedback: "顶级的同理心与道德勇气。直视对方眼睛坦承事实、认可其付出，敢于直面即时情绪风暴，为长期职业尊重打下不可动摇的基石。"
          }
        ],
        dimensionWeights: { execution: 1, resilience: 3, diplomacy: 2, resourcefulness: 1, integrity: 3 }
      },

      // 11 (Original #16)
      {
        origId: 16,
        stageTitle: "关卡 11: 丽兹酒店政变情报",
        roleBadge: "对话角色: 知名作家 (Christian Thompson)",
        speakerName: "克里斯蒂安·汤普森 (Christian Thompson - 知名作家)",
        speakerQuote: "Andy, Irv Ravitz is replacing Miranda with Jacqueline Follet at Runway. The contracts are signed. Miranda's reign is over. Walk away and come with me.",
        options: [
          {
            letter: "A",
            text: "That's fantastic news—Miranda deserves this after how ruthlessly she treats everyone around her.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】幸灾乐祸",
            feedback: "因个人恩怨对领路人的落难幸灾乐祸，暴露了狭隘的报复心理与投机本质，在任何成熟组织中都会被视作极度危险的不可信分子。"
          },
          {
            letter: "B",
            text: "That's shocking news. I'm going to sleep on it and see how things unfold at the official press luncheon tomorrow.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】观望麻木",
            feedback: "在关系组织命运的重大战略情报面前选择麻木旁观，错失战略主动权，等同于自愿沦为权力斗争中任人宰割的被动筹码。"
          },
          {
            letter: "C",
            text: "Thank you for the information, Christian. But Miranda took a chance on me, and I will not stand by while she gets blindsided. I'm warning her immediately.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】忠诚担当",
            feedback: "卓越的忠诚定力与职业底色。拒绝充当落井下石的投机附庸，在关键历史时刻选择守护最初赋能自己的组织与领路人，尽显大将之风。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 2, diplomacy: 2, resourcefulness: 2, integrity: 3 }
      },

      // 12 (Original #17)
      {
        origId: 17,
        stageTitle: "关卡 12: 深夜预警米兰达",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "Andy, what could possibly be so urgent that you are knocking on my hotel suite door at midnight before the French Fashion Council luncheon?",
        options: [
          {
            letter: "A",
            text: "Burst in crying: 'Irv Ravitz is firing you tomorrow! You have to beg him to let you keep your job!'",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】恐慌失态",
            feedback: "哭喊失态地冲进高层套房，情绪崩溃不仅会降低情报的可信度，还会制造无效恐慌，极大地破坏领导者的心理沉着度。"
          },
          {
            letter: "B",
            text: "Someone whispered to me that Irv is plotting something with Jacqueline Follet, though I couldn't verify the specifics.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】语焉不详",
            feedback: "传递未经交叉验证的走廊流言与模糊说辞，在生死攸关的战略博弈时刻只会徒劳耗费最高决策者的宝贵带宽。"
          },
          {
            letter: "C",
            text: "Miranda, I received verified intelligence tonight: Irv Ravitz has arranged to announce Jacqueline Follet as Runway's new Editor-in-Chief tomorrow. You need this lead time to mount your counter-strategy.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】军师决断",
            feedback: "顶级幕僚式危机沟通：结论先行、情报确凿、要点清晰且明确留出行动筹备时间，全力赋能决策者的反制战略。"
          }
        ],
        dimensionWeights: { execution: 3, resilience: 3, diplomacy: 2, resourcefulness: 2, integrity: 2 }
      },

      // 13 (Original #18)
      {
        origId: 18,
        stageTitle: "关卡 13: 豪车内的人性博弈",
        roleBadge: "对话角色: 主编 (Miranda Priestly)",
        speakerName: "米兰达·普里斯利 (Miranda Priestly - 主编)",
        speakerQuote: "Nigel was disappointed, of course, but I had to give his new position to Jacqueline to save Runway. You see? You and I are the same. Everyone wants to be us.",
        options: [
          {
            letter: "A",
            text: "You're a monster, Miranda. I would never betray my loyal friends like you betrayed Nigel!",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】情绪宣泄",
            feedback: "宣泄式的道德指责无法改变既成事实，反而会在与顶级强者的博弈中丧失沟通筹码与理性威严。"
          },
          {
            letter: "B",
            text: "I see why you had to protect your empire, Miranda. Sacrificing others is just the price of modern corporate business.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】盲目同化",
            feedback: "盲目全盘同化为马基雅维利式的权谋机器，为自保彻底抛弃内心的同理心与道德底线，最终将反噬自身的人格完整性。"
          },
          {
            letter: "C",
            text: "I respect your strategic brilliance, Miranda, but we are not the same. Sacrificing a loyal friend's dream for self-preservation is a line I choose not to cross.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】明辨界限",
            feedback: "职场心智成熟的巅峰境界。深刻理解残酷的商业现实与竞争逻辑，但清醒且笃定地守住属于自己的道德底线，绝不随波逐流。"
          }
        ],
        dimensionWeights: { execution: 1, resilience: 3, diplomacy: 2, resourcefulness: 1, integrity: 3 }
      },

      // 14 (Original #19)
      {
        origId: 19,
        stageTitle: "关卡 14: 协和广场喷泉的抉择",
        roleBadge: "来电振动: 命运十字路口 (Place de la Concorde)",
        speakerName: "来电显示: 米兰达·普里斯利 (Incoming Call: Miranda Priestly)",
        speakerQuote: "[Miranda Priestly Calling...] Your phone buzzes relentlessly while standing beside the Fountain of the Rivers at Place de la Concorde.",
        options: [
          {
            letter: "A",
            text: "Answer immediately, apologize profusely for stepping away, and hurry back into her awaiting limousine.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】重回漩涡",
            feedback: "顺从恐惧接听电话并重回牢笼，意味着彻底放弃个人职业主权，永远沦为他人意志与阴影下的附庸工具。"
          },
          {
            letter: "B",
            text: "Decline the call and place the phone on silent in your purse, avoiding confrontation for the rest of the day.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】拖延回避",
            feedback: "拖延静音只是被动的鸵鸟心态，无法斩断内在的精神内耗，也无法赋予你真正重塑人生的决策力量。"
          },
          {
            letter: "C",
            text: "Toss the ringing phone into the fountain with serene resolution, turning your back on toxic prestige to reclaim your true professional trajectory.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】破茧重生",
            feedback: "标志性的自我主权觉醒时刻。决绝抛弃借来的虚妄光环与精神枷锁，以平静而笃定的力量，重掌个人职业与生命的真实航向。"
          }
        ],
        dimensionWeights: { execution: 2, resilience: 3, diplomacy: 1, resourcefulness: 2, integrity: 3 }
      },

      // 15 (Original #20)
      {
        origId: 20,
        stageTitle: "关卡 15: 《纽约镜报》面试与致意",
        roleBadge: "对话角色: 镜报主编 (Greg - The New York Mirror)",
        speakerName: "格雷格 (Greg - 《纽约镜报》主编)",
        speakerQuote: "Miranda Priestly faxed me a personal recommendation. She wrote: 'She was by far my biggest disappointment, and if you don't hire her, you are an idiot.' What did you learn from your year with her?",
        options: [
          {
            letter: "A",
            text: "I learned that fashion is superficial and toxic, and I'm just relieved to finally be doing real, serious journalism.",
            score: 1,
            type: "flawed",
            typeLabel: "【失误策略】贬低前任",
            feedback: "在求职面试中贬低前任雇主与平台是职场大忌，会暴露心智的不成熟、格局的狭隘以及职业体育道德的缺失。"
          },
          {
            letter: "B",
            text: "I learned how to work long hours, answer phones quickly, and endure extreme managerial stress without breaking down.",
            score: 2,
            type: "adequate",
            typeLabel: "【合格策略】局限于事务",
            feedback: "仅仅停留在“能抗压、干杂活、吃苦耐劳”的执行苦劳层级，掩盖了经历地狱级淬炼后所获得的商业大局观与高阶管理认知。"
          },
          {
            letter: "C",
            text: "I learned the highest standards of professional execution, how to anticipate needs under immense pressure, and most importantly, who I truly am when tested by ambition.",
            score: 3,
            type: "excellent",
            typeLabel: "【卓越策略】大成境界",
            feedback: "极具战略高度的职业复盘。既真诚致敬了严苛环境赋予的顶级交付标准，又深刻洞察了在权力试炼下的真实自我，尽显卓越领袖气质。"
          }
        ],
        dimensionWeights: { execution: 3, resilience: 3, diplomacy: 3, resourcefulness: 2, integrity: 3 }
      }
    ];

    const archetypes = [
      {
        minScore: 40,
        titleZh: "卓越战略执行家",
        descZh: "你兼具卓越的业务执行力、顶级的职场情商与坚不可摧的核心底线。如同历练成熟后的安迪，你能在最严苛的高压竞争中交付极致成果，更能在权力与诱惑面前坚守自己的尊严与道德准则，是现代组织中极其罕见的复合型领袖人才。"
      },
      {
        minScore: 33,
        titleZh: "敏锐职场外交家",
        descZh: "擅长在高压复杂的职场博弈与多方利益关系中寻找平衡点，具备极高的情绪感知力与沟通柔韧度。若能在关键时刻更加坚定地捍卫自我边界、展现果决立场，你的领导力威望与权威感将进一步跃升。"
      },
      {
        minScore: 26,
        titleZh: "敏捷务实派骨干",
        descZh: "拥有极强的应变速度与业务攻坚能力，在突发问题面前敢打敢拼、务实破局。但在应对深层组织政治、权力潜规则博弈以及高强度情绪消耗时，仍需进一步锤炼内心的钝感力与战略大局观。"
      },
      {
        minScore: 0,
        titleZh: "坚守初心的理想主义者",
        descZh: "高度珍视职业真诚与道德操守，拒绝妥协于职场的权谋与功利规则。若能进一步提升沟通表达的策略柔性，深刻理解商业世界运行背后的深层动力，你的过人才华与纯粹初心将赢得更为广阔的舞台。"
      }
    ];

    let currentStageIndex = 0;
    let currentScore = 0;
    let dimensionScores = {
      execution: 0,
      resilience: 0,
      diplomacy: 0,
      resourcefulness: 0,
      integrity: 0
    };
    let dimensionMax = {
      execution: 0,
      resilience: 0,
      diplomacy: 0,
      resourcefulness: 0,
      integrity: 0
    };

    // Calculate maximum achievable dimension weights
    scenarios.forEach(sc => {
      Object.keys(sc.dimensionWeights).forEach(dim => {
        dimensionMax[dim] += sc.dimensionWeights[dim] * 3;
      });
    });

    const introView = document.getElementById("introView");
    const gameView = document.getElementById("gameView");
    const resultView = document.getElementById("resultView");
    const headerTracker = document.getElementById("headerTracker");
    const levelBadge = document.getElementById("levelBadge");
    const scoreBadge = document.getElementById("scoreBadge");
    const progressBar = document.getElementById("progressBar");
    const stageTitle = document.getElementById("stageTitle");
    const roleBadge = document.getElementById("roleBadge");
    const speakerName = document.getElementById("speakerName");
    const speakerQuote = document.getElementById("speakerQuote");
    const optionsList = document.getElementById("optionsList");
    const feedbackBox = document.getElementById("feedbackBox");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackScoreTag = document.getElementById("feedbackScoreTag");
    const feedbackText = document.getElementById("feedbackText");
    const nextBtn = document.getElementById("nextBtn");
    const nextBtnText = document.getElementById("nextBtnText");
    const startBtn = document.getElementById("startBtn");
    const restartBtn = document.getElementById("restartBtn");

    function switchView(viewElement) {
      [introView, gameView, resultView].forEach(v => {
        v.classList.remove("active");
        v.style.display = "none";
      });
      viewElement.style.display = "block";
      setTimeout(() => {
        viewElement.classList.add("active");
      }, 20);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function startGame() {
      currentStageIndex = 0;
      currentScore = 0;
      dimensionScores = {
        execution: 0,
        resilience: 0,
        diplomacy: 0,
        resourcefulness: 0,
        integrity: 0
      };
      headerTracker.style.display = "flex";
      renderStage(0);
      switchView(gameView);
    }

    // Fisher–Yates shuffle: returns a new shuffled array (does not mutate source)
    function shuffleArray(arr) {
      const result = arr.slice();
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
      return result;
    }

    const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"];

    function renderStage(index) {
      const scenario = scenarios[index];
      const stageNumber = index + 1;
      const totalStages = scenarios.length;

      // Update header badges
      levelBadge.textContent = `关卡 ${stageNumber} / ${totalStages}`;
      scoreBadge.textContent = `得分: ${currentScore} / ${totalStages * 3}`;
      progressBar.style.width = `${(stageNumber / totalStages) * 100}%`;

      // Update scenario cards with Chinese titles
      stageTitle.textContent = scenario.stageTitle;
      roleBadge.textContent = scenario.roleBadge;
      speakerName.textContent = scenario.speakerName;
      speakerQuote.textContent = `"${scenario.speakerQuote}"`;

      // Render English options in randomized order.
      // The letter badge reflects the displayed position, while the click
      // handler keeps the original option index so scoring/feedback stay intact.
      optionsList.innerHTML = "";
      const shuffledOptions = shuffleArray(scenario.options);
      shuffledOptions.forEach((opt, displayIndex) => {
        const originalIndex = scenario.options.indexOf(opt);
        const card = document.createElement("div");
        card.className = "option-card";
        card.innerHTML = `
          <div class="option-letter">${OPTION_LABELS[displayIndex]}</div>
          <div class="option-text">${opt.text}</div>
        `;
        card.addEventListener("click", () => handleSelectOption(originalIndex, card));
        optionsList.appendChild(card);
      });

      // Reset feedback box
      feedbackBox.style.display = "none";
      const isLastStage = index === totalStages - 1;
      nextBtnText.textContent = isLastStage ? "查看综合评估报告" : "进入下一关";
    }

    function handleSelectOption(optIndex, selectedCard) {
      const scenario = scenarios[currentStageIndex];
      const selectedOpt = scenario.options[optIndex];
      const optionCards = optionsList.querySelectorAll(".option-card");

      optionCards.forEach(card => {
        card.classList.add("disabled");
      });
      if (selectedCard) {
        selectedCard.classList.add("selected");
      }

      // Update score and dimensions
      currentScore += selectedOpt.score;
      Object.keys(scenario.dimensionWeights).forEach(dim => {
        dimensionScores[dim] += scenario.dimensionWeights[dim] * selectedOpt.score;
      });

      // Update tracker score
      scoreBadge.textContent = `得分: ${currentScore} / ${scenarios.length * 3}`;

      // Populate feedback in Chinese
      feedbackTitle.className = `feedback-title ${selectedOpt.type}`;
      feedbackTitle.textContent = selectedOpt.typeLabel;
      feedbackScoreTag.textContent = `+${selectedOpt.score} 分`;
      feedbackScoreTag.style.color = selectedOpt.type === 'excellent' ? 'var(--success-green)' : (selectedOpt.type === 'adequate' ? 'var(--warning-amber)' : 'var(--primary)');
      feedbackText.textContent = selectedOpt.feedback;

      feedbackBox.style.display = "block";
      feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function handleNextStage() {
      if (currentStageIndex < scenarios.length - 1) {
        currentStageIndex++;
        renderStage(currentStageIndex);
      } else {
        renderResults();
      }
    }

    function renderResults() {
      headerTracker.style.display = "none";

      const maxScore = scenarios.length * 3;
      document.getElementById("resultFinalScore").textContent = `综合职场胜任力得分: ${currentScore} / ${maxScore}`;

      // Determine archetype
      const archetype = archetypes.find(a => currentScore >= a.minScore) || archetypes[archetypes.length - 1];
      document.getElementById("resultRank").textContent = archetype.titleZh;
      document.getElementById("rankDescriptionZh").textContent = archetype.descZh;

      // Calculate dimension percentages
      const calcPct = (val, max) => Math.min(100, Math.round((val / max) * 100));
      const pExecution = calcPct(dimensionScores.execution, dimensionMax.execution);
      const pResilience = calcPct(dimensionScores.resilience, dimensionMax.resilience);
      const pDiplomacy = calcPct(dimensionScores.diplomacy, dimensionMax.diplomacy);
      const pResource = calcPct(dimensionScores.resourcefulness, dimensionMax.resourcefulness);
      const pIntegrity = calcPct(dimensionScores.integrity, dimensionMax.integrity);

      document.getElementById("mExecution").textContent = `${pExecution}%`;
      document.getElementById("mResilience").textContent = `${pResilience}%`;
      document.getElementById("mDiplomacy").textContent = `${pDiplomacy}%`;
      document.getElementById("mResource").textContent = `${pResource}%`;
      document.getElementById("mIntegrity").textContent = `${pIntegrity}%`;

      switchView(resultView);

      // Render custom high-resolution radar chart with pure Chinese labels
      setTimeout(() => {
        drawRadarChart([pExecution, pResilience, pDiplomacy, pResource, pIntegrity]);
      }, 100);
    }

    function drawRadarChart(values) {
      const canvas = document.getElementById("radarChart");
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;
      const displaySize = 340;
      canvas.width = displaySize * dpr;
      canvas.height = displaySize * dpr;
      canvas.style.width = displaySize + "px";
      canvas.style.height = displaySize + "px";

      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, displaySize, displaySize);

      const centerX = displaySize / 2;
      const centerY = displaySize / 2;
      const radius = 95;
      const labels = [
        "执行敏锐度",
        "抗压情商",
        "职场外交",
        "应变搜商",
        "核心道德"
      ];
      const totalAxes = labels.length;
      const angleStep = (Math.PI * 2) / totalAxes;
      const startAngle = -Math.PI / 2;

      // Draw concentric background web
      const levels = 5;
      for (let lvl = 1; lvl <= levels; lvl++) {
        const lvlRadius = (radius / levels) * lvl;
        ctx.beginPath();
        for (let i = 0; i < totalAxes; i++) {
          const angle = startAngle + i * angleStep;
          const x = centerX + lvlRadius * Math.cos(angle);
          const y = centerY + lvlRadius * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = lvl === levels ? "#D0C9BE" : "#ECE7DE";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw radiating axes
      for (let i = 0; i < totalAxes; i++) {
        const angle = startAngle + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "#E2DFD9";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw labels pure Chinese
        const labelDist = radius + 26;
        const lx = centerX + labelDist * Math.cos(angle);
        const ly = centerY + labelDist * Math.sin(angle);

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
        ctx.fillStyle = "#1F2024";
        ctx.fillText(labels[i], lx, ly);
      }

      // Draw user score polygon
      ctx.beginPath();
      values.forEach((pct, i) => {
        const angle = startAngle + i * angleStep;
        const r = (Math.max(10, pct) / 100) * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();

      ctx.fillStyle = "rgba(166, 31, 56, 0.22)";
      ctx.fill();
      ctx.strokeStyle = "#A61F38";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Draw point markers
      values.forEach((pct, i) => {
        const angle = startAngle + i * angleStep;
        const r = (Math.max(10, pct) / 100) * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.strokeStyle = "#A61F38";
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    startBtn.addEventListener("click", startGame);
    nextBtn.addEventListener("click", handleNextStage);
    restartBtn.addEventListener("click", startGame);