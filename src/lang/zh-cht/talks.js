"use strict";

Talks.npcs = {
    "charles": {
        "default": {
            "male": [
                "嘿，夥計！",
                "我是當地帝國總理府的秘書查爾斯，我也是在這些地方的帝國的官方大使。",
		"你可以休息一下，在這個地方交易你所需的。",
		"這裡有各種各樣的人，所以我是一個秩序維持員。",
                "來來來，我們好好談談。"
            ],
            "female": [
                "祝你一天好心情，小姐！",
                "我是地方帝國政府的秘書，查爾斯，我也是在這些地方的帝國的官方大使。",
		"你可以休息一下，在這個地方交易你所需的。",
		"這裡有各種各樣的人，所以我是一個秩序維持員。",
                "來來來，我們好好談談。"
            ]
        },
        "empire": {
            "male": [
                "很高興再次見到你，我的朋友！",
                "看到你仍然忠於皇帝，即使如此，你也不會失去對上帝的信仰，而不是被盟友的甜言蜜語一起被迷住...保持這個，朋友！上帝幫助我，如果我可以，我不會不幫你。",
            ],
            "female": [
                "很高興見到你，女士們！",
                "我很高興你沒有離開帝國範圍，我希望你能留在我們身邊，城市缺乏真誠、開明的女孩，我是你的僕人和忠誠的騎士，如果有要求，我一定會幫你"
            ]
        },
        "confederation": {
            "male": [
                "你好，孩子",
                "這是怎麼回事，我的意思是，你的奉獻至少可以幫助你，至少我們可以養活你，我們在這裡平等，所以我不能愛那些不屬於我們的人，我會真誠地幫助你。",
            ],
            "female": [
                "你好，小姑涼",
                "有什麼問題帶給你困擾嗎？我很抱歉你加入了這個死胡同，但不要擔心，我們的關係不會改變，你必須有理由這樣做，我不會判斷這一切是平等的，但是我希望你會選擇一個更溫和的方式，無論如何，查爾斯是你的僕人。",
            ]
        },
        "actions": {
            "Set citizenship": "我想設定我的派別",
            "Get claim": "我想要一份土地契約（10鉑金）",
        },
    },
    "diego": {
        "default": {
            "male": [
		"嗨，我的名字是迭戈，我是Taiterrad的大使，但是我比那些政客好相處，我喜歡玩這個遊戲，所以如果你想狩獵，我可以教你！"
	    ],
        },
        "actions": {
            "Show instances": "顯示我在哪裡。",
        }
    },
    "scrooge": {
        "default": {
            "male": [
                "歡迎你!",
                "我們總是樂意看到新客戶，坐下來，我叫斯科羅吉，我管理着最偉大的Rogalia銀行，",
                "我們的銀行是如此之大，即使是如此偏遠的城鎮也能找到我們的辦事處，不要擔心我們的服務質量是一樣的。",
                "我可以保存你的錢，你不必擔心，我會保證它們的安全。",
                "而且，對於儲戶來說，我們可以提供儲蓄基金服務，如果你有一定的收入，所有的收入都會自動保存在你的賬戶里，利潤很高，沒有額外的賬單。",
                "所以，還有什麼問題?"
            ]
        },
        "actions": {
            "Bank": "金融業務",
            "Exchange": "錠和票據交易",
        },
    },
    "sabrina": {
        "default": {
            "male": [
                "停！不要啊！我們呃...啊哈哈...好吧，啊，對不起，我是薩布里娜，我是當地的鍊金術士。 一切為您服務：從將草變成天鵝到到將石頭復活的藥水！ 嘻嘻，只是在開玩笑。"
            ],
	        "female": [
		        "等等，不要過來！（咔咔咔）…好了，不廢話了。我的名字叫薩布里娜，我是本地的鍊金術士。從會動的呱太到電腦配件應有盡有！呵呵，開玩笑的。"
	        ]
        },
        "actions": {
            "Trade": "我想看一下",
        },
    },
    "larisa": {
        "default": {
            "male": [
                "歡迎來到Rogalia的交易中心！嗯，我們只是皇家拍賣行的本地分店，但你們我們並沒有變得更糟！我是Larice，如果你想交易，就找我。"
            ]
        },
        "actions": {
            "Auction": "我想看一看",
            "Get vendor license": "我想取得交易許可證"
        },
    },
    "shot": {
        "default": {
            "male": [
                "你好，帥哥，我正忙，先坐吧。",
                "看看我們的酒吧！\"狼性涌動\"是唯一值得關注的地方，無論是你從查爾斯那聽到了什麼。我們在隔壁房間里都有冷水，溫暖的食物和非常熱的東西（單純臉），希望你喜歡！",
            ],
            "female": [
                "你好，美女！",
                "我是肖特，我經營着這家 \"狼性涌動\" 酒吧，我們有肉有酒，還有別的好東西哦出於直覺，我覺得我們能發展一段美好的關係!",
            ]
        },
        "empire": {
            "male": [
                "這位貴族紳士今天想要什麼樣的美餐？",
                "我們的食材都是百分百純天然無污染的！我們\"狼性涌動\"酒吧是一個本土酒吧，會給你不同於大都市大酒店的體驗！我是肖特，我是你的僕人",
            ],
            "female": [
                "啊！歡迎小姐來我們進餐！",
                "嗯，希望我會滿足你的期望，我們的食材都是百分百純天然無污染的！\
					您可以用高腳杯享受紅酒，說不定會有紳士為您買單哦！"
            ]
        },
        "confederation": {
            "male": [
                "嗨，親愛的，我是肖特，坐吧。",
                "看看我們的酒吧！\"狼性涌動\"是唯一值得關注的地方，無論是你從查爾斯那聽到了什麼。我們在隔壁房間里都有冷水，溫暖的食物和非常熱的東西（單純臉），希望你喜歡！",
            ],
            "female": [
                "嘿嘿，很高興在這裡看到聯邦的另一個女兒！",
                "\"狼性涌動\"不是那麼糟，對嗎？更多的時候，我相信我們會成為好朋友，順便說一句，我是肖特，我可以下面給你吃，交換一些種子，而且，你知道...嗯，如果你有足夠的開放的話，你可能會在隔壁房間里找到有趣的東西。",
            ]
        },
        "actions": {
            "Trade": "我想看看你有什麼。",
            "Drink water": "我要喝一杯（5銀）",
        }
    },
    "margo": {
        "default": {
            "male": [
                "嘿，親愛的，不要只是經過！",
		"來吧，讓我們做些好玩的事吧！你知道我是誰，不是嗎？我知道你像我這樣的人稱呼，但我更喜歡\"夜蝴蝶\"這個詞，因為我看起來像蝴蝶，柔軟的翅膀，輕盈的身材，傲人的胸偉。我給人們樂趣，特別的快樂。所以，這位帥哥還不快來？",
            ],
            "female": [
                "親愛的，走錯門了嗎？",
		"來吧，不要害羞，我已經讀懂你眼中的一切，不要再說了，我是瑪格，我是你所需要的，相信我，我可以看到緊張和保留;你來到正確的地方，我們會做好玩的事。一個女人應該做自己，向世界展現自己，讓無聊的想法離開。親愛的，坐下來，我不咬人。",
            ]
        },
        "empire": {
            "male": [
                "來吧，別害羞。",
		"嗯，如果你在這裡，認為你知道我是瑪格，我的服務是非常特別的，休息一下，休息一下，你需要休息嗎，不是嗎？我認識你，勇敢的戰士啊，扔掉你的懷疑，讓自己快樂.....",
            ],
            "female": [
                "有什麼是我能幫助你的嗎？",
		"瑪格，就是我，一個妓女，一個妓女，如果你願意，有什麼問題嗎？我看到你有問題，任何男人會有這樣的情況...哦，我可以看到你的眼睛裡的激情。我的上帝，原諒我的無禮，這個地方有點不穩定，你知道的，查爾斯說，帝國和聯邦將永遠敵對，即使我們在沙漠的島上，但是不用擔心，我忠於所有的客戶，我會幫你擺脫你的壓力"
            ]
        },
        "confederation": {
            "male": [
                "好，來吧，別害羞。",
		"哇，這樣的激情！你看起來好雄壯啊，你的步伐讓我的雙腿顫抖！我想你是有求而來的，你應該知道該怎麼做，對嗎？你可以叫我瑪格或任何你喜歡的，來吧……",
            ],
            "female": [
                "進來，小可愛，瑪格總是很高興看到像你這樣可愛的女孩。",
		"在這個充滿汗水和油膩生鏽的帝國，每個女孩都需要休息和享樂，需要釋放她的緊張，對我來說，像我這樣的人給他們想要的東西，你想和我在一起，讓瑪格照顧你...“",
            ]
        },
        "actions": {
            "Buy sex": "大保健（10金）",
        }
    },
    "bruno": {
        "default": {
            "male": [
                "歡迎來到鄙店，朋友",
		"我是布魯諾，很高興幫你挑選一件衣服，你在這裡為了衣服，對嗎？我是整個帝國最好的裁縫，我會幫助你。",
            ],
            "female": [
                "親，走過路過不要錯過！",
		"我的名字是布魯諾，親，這是我的商店，你可以在這裡買到任何衣服，包郵哦！",
            ]
        },
        "empire": {
            "male": [
                "你好，先生",
		"我是布魯諾，當地的裁縫，如果你覺得需要新衣服，我就在這裡，很高興為你服務。",
            ],
            "female": [
                "親，來看看吧！",
		"看到美女，總是令人愉悅的，我是布魯諾，如果你需要最好的衣服，你會得到一個適中的價格。"
            ]
        },
        "confederation": {
            "male": [
                "嘿！小子！",
		"看你穿得跟小丑似的，我叫布魯諾，進來，我會帶給你整個rogalia最好的衣服！",
            ],
            "female": [
                "嗨！小妞！",
		"事實上，你是一個混蛋，沒有改變。你需要好的衣服，我是布魯諾，活着的最好的裁縫！",
            ]
        },
        "actions": {
            "Trade": "我想看你的貨物。",
        },
    },
    "ahper": {
        "default": {
            "male": [
                "我可以在一瞬間打破一塊巨石......呃，原諒我",
            ]
        },
        "actions": {
            "Trade": "我想看看你的貨物。",
        },
    },
    "cosmas": {
        "default": {
            "male": [
                "嗨，這是我的史密斯，你需要一個裝備，還有一個裝甲，可能呢？唉...每個人都喜歡武器。",
            ]
        },
        "actions": {
            "Trade": "我想看看你的貨物。",
        },
    },
    "boris": {
        "default": {
            "male": [
                "進來，孩子，我們的教會總是迎接新的教區居民。",
		"我的名字是鮑里斯，我是這個修道院的主教，在這裡，我把主的光輝帶給所有需要的人。我想你是到這裡來懺悔的（消罪惡度）。",
            ],
            "female": [
                "進來，孩子，我們的教會總是迎接新的教區居民。",
		"我的名字是鮑里斯，我是這個修道院的主教，在這裡，我把主的光輝帶給所有需要的人。我想你是到這裡來懺悔的（消罪惡度）。",
            ]
        },
        "empire": {
            "male": [
                "進來，孩子，我們的教會總是迎接新的教區居民。",
		"我的名字是鮑里斯，我是這個修道院的主教，在這裡，我把主的光輝帶給所有需要的人。我想你是到這裡來懺悔的（消罪惡度）。",
            ],
            "female": [
                "進來，孩子，我們的教會總是迎接新的教區居民。",
		"我的名字是鮑里斯，我是這個修道院的主教，在這裡，我把主的光輝帶給所有需要的人。我想你是到這裡來懺悔的（消罪惡度）。",
            ]
        },
        "confederation": {
            "male": [
                "進來，孩子，我們的教會總是迎接新的教區居民。",
		"我的名字是鮑里斯，我是這個修道院的主教，在這裡，我把主的光輝帶給所有需要的人。我想你是到這裡來懺悔的（消罪惡度）。",
            ],
            "female": [
                "進來，孩子，我們的教會總是迎接新的教區居民。.",
		"我的名字是鮑里斯，我是這個修道院的主教，在這裡，我把主的光輝帶給所有需要的人。我想你是到這裡來懺悔的（消罪惡度）。",
            ]
        },
        "actions": {
            "Trade": "我想獲得（買）救贖。",
        }
    },
    "bertran": {
        "default": {
            "male": [
                "肉，肉，肉……",
                "別走開, 神秘的先生, 來見見伯特倫. 我是這裡的屠夫，屠宰是我的專長. 我能切碎你（擁有的）的（動物）屍體, 不是你的屍體, 別害怕. 我已經不切活物好多年. 也許你可以考慮從我這裡買些新鮮的肉回去",
            ],
            "female": [
                "多多多麼美美味的肉...",
                "我是想說, 我這裡有那麼美味的魚片。我愛魚片，切魚片真是太太太美妙了... 抱歉, 女士. 我想我快瘋掉了. 我是這裡的屠夫伯特倫. 你可以在我這裡買到新鮮的肉, 我還能教你烹飪, 或者別的... 別介意, 我知道那樣無法滿足你.",
            ]
        },
        "actions": {
            "Trade": "我想看看你的貨物。",
        }

    },
    "vendor": {
        "default": {
            "male": [
                "歡迎光臨敝店, 先生。",
            ],
            "female": [
                "歡迎光臨敝店, 女士。",
            ],
        },
        "actions": {
            "Trade": "我想看看你的貨物。",
        },
    },
    "ded-moroz": {
        "default": {
            "male": [
                "新年快樂！",
                "行動起來，馬上給你的屋子換換風格吧！",
            ],
        },
    },
    "snegurochka": {
        "default": {
            "male": [
                "你好！",
                "節日到了! 讓我們一起裝點聖誕樹並互贈禮物吧!"
            ],
        },
    },
    "ivan": {
        "default": {
            "male": [
                "嘿! 靠近些, 別害臊!",
                "我是這裡的樵夫伊凡. 你正在為伐木卻找不到一把鋸子、一柄斧頭或其他什麼工具而發愁嗎? 找我就對了, 讓你看看我的大寶貝!",
            ],
        },
    },
    "plato": {
        "default": {
            "male": [
                "你好, 我的朋友.",
                "我叫柏拉圖, 我在這裡是要教會菜鳥們如何生存。無論你是自願來此亦或是被帝國流放至此。多聽多學少說話, 如果你還不想成為外面那些野獸的晚餐的話。",
            ],
        },
    },
    "athena": {
        "default": {
            "male": [
                "啊哈! 這裡是血肉競技場!",
		"我叫雅典娜，是這裡的管理員。無論男女老幼，我只在乎你眼中嗜血和渴望!與其他競技者在這裡廝殺，展現你的戰鬥技藝吧！"
            ]
        },
    },
    "alfred": {
        "default": {
            "male": [
                "歡迎你的到來, 旅行者。",
                "我是這裡的管家阿爾佛雷德，這裡有溫暖舒適的床，你可以在這裡找到家一般的感覺，雖然不那麼富麗堂皇，但能讓你好好休息。",
            ],
        },
    },
    "ded-moroz": {
        "default": {
            "male": [
                "嗨，我是——聖誕老人，聽說過嗎？",
                "我以防萬一問一句啊，人有時很奇怪的，雪沒有看到有人，有人不相信魔術…我的房子，在冬天的島上，試圖做好準備，你都是奇怪的，但這樣的我沒想到的是，告訴你…好吧好吧，繼續吧。",
                "新的一年即將到來！而在新的一年裡，所有的夢想都將成真！你，順便說一下，你是男孩子還是女孩子？想要的禮物嗎？在新的一年…等待！",
                "嗬嗬嗬！嗯，好的，好的，我能早點給你你要的東西，但首先我需要你做件差事，可以嗎？",
                "順便問一下，我的孫女，雪之少女，也有一些跑腿的差事，給你。",
                "說真的，她是個好女孩，不過有些古怪。可憐的孩子……",
            ],
        },
    },
    "snegurochka": {
        "default": {
            "male": [
                "這是誰來了？大聲的來了，唱歌嗎？",
                "誰在跑一窩子和尖叫？爭先恐後地。",
                "一百怪物，201個赤裸羔羊法師？",
                "姐這裡有別的地方沒有的好東西哦！",
                "來吧，不要怕，小男孩，今天姐姐我很高興",
                "從瓦爾哈拉給您帶來的捲軸",
                "不同的藥水以及優秀的劍和棍棒。",
                "生日蛋糕",
                "人偶娃娃",
                "這裡只有一個問題。",
                "我找不到一個替代品。",
                "我需要一個男人，而是勇敢的",
                "涉水進入黑森林",
                "他會駕着祥雲回來",
                "你認識他們嗎？",
                "他們都在這裡埋着呢！",
                "人類死亡得太快……",
                "這片土地，有邊界嗎？",
                "不幫我們，那你來這幹嘛？",
                "不要離開，永遠。",
                "新年好！",
                "就這樣，都會過去的！",
                "嗯，你說什麼。",
                "不要沉默，不要冷顫。",
                "姐，冰雪聰明。",
                "姐是冰凍美人。",
            ].join("<br>"),
            "female": [
                "誰在這裡行走，使整個大地在搖晃？",
                "減肥後就不會留下痕迹在這裡!",
                "來吧，別擔心，寶貝，我不會殺你。",
                "雪之少女今天會把所有的餡餅拿出來。",
                "巧克力，蛋糕，草。",
                "我剛剛吃飽",
                "夠簡單",
                "忘掉生活的不幸，不是很好嗎？",
                "這就是我所說的",
                "幫幫我！",
                "姐很不容易的。",
                "你說得對。",
                "你需要有用的東西嗎？",
                "不幫我們，那你來幹嘛？",
                "不要離開，永遠。",
                "新年好！",
                "就這樣，都會過去的！",
                "嗯，你說什麼。",
                "不要沉默，不要冷顫。",
                "姐，冰雪聰明。",
                "姐是冰凍美人。",
            ].join("<br>"),
        },
    },
    "angelina": {
        "default": {
            "male": [
                "(*@ο@*) 哇～!",
                "不害怕喵? 你好無趣耶...倫家叫安吉拉啦，是一個幽靈哦. 而且嚯，倫家可是很會講鬼故事的喲。坐下坐下啦, 聽我給你講一段了啦。",
            ],
        },
    },
};
