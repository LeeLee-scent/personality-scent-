// script.js - 香氣人格測驗 (最終版)
const questions = [
  {
    question: "Q1. 清晨起床的你，最需要什麼來開啟新的一天？",
    image: "images/q1.jpg",
    answers: [
      {text: "A.一杯剛沖好的黑咖啡，喚醒思緒", type: "woody"},
      {text: "B.一場晨間瑜伽或暖身運動，激發能量", type: "citrus"},
      {text: "C.溫熱的水澡與音樂，緩緩開展", type: "floral"},
      {text: "D.打開窗簾，陽光與植物香迎接你", type: "musk"}
    ]
  },
  {
    question: "Q2. 在不經意的空氣中，你最難忘的是哪種氣味記憶？",
    image: "images/q2.jpg",
    answers: [
      {text: "A.熱帶果香與汗水交織的旅行午後", type: "citrus"},
      {text: "B.雨後濕潤的森林氣息", type: "woody"},
      {text: "C.恰到好處的白玫瑰香水味", type: "floral"},
      {text: "D.甜點店飄出的奶油與焦糖香", type: "musk"}
    ]
  },
  {
    question: "Q3. 朋友們最常形容你的特質是？",
    image: "images/q3.jpg",
    answers: [
      {text: "A.安定可靠，像棵老樹般給人依靠", type: "woody"},
      {text: "B.活潑有趣，總是能炒熱氣氛", type: "citrus"},
      {text: "C.靜靜聆聽，像月亮陪伴在側", type: "floral"},
      {text: "D.細膩感性，總能說中別人心事", type: "musk"}
    ]
  },
  {
    question: "Q4. 你最想要自己的氣味是⋯⋯",
    image: "images/q4.jpg",
    answers: [
      {text: "A.一種讓人安心、沉靜的香味", type: "woody"},
      {text: "B.像走進綠色植物園的清新氣息", type: "citrus"},
      {text: "C.令人一靠近就覺得療癒的甜味", type: "floral"},
      {text: "D.淡淡又若有似無的高級氣場", type: "musk"}
    ]
  },
  {
    question: "Q5. 如果週末只有一天獨處時光，你會選擇？",
    image: "images/q5.jpg",
    answers: [
      {text: "A.去書店泡一整個下午", type: "woody"},
      {text: "B.一個人衝去山裡或海邊放風", type: "citrus"},
      {text: "C.躲在家點香氛蠟燭耍廢", type: "floral"},
      {text: "D.和熟悉朋友小酌聚聚聊心事", type: "musk"}
    ]
  },
  {
    question: "Q6. 如果你是一支香氣，你希望別人怎麼記住你？",
    image: "images/q6.jpg",
    answers: [
      {text: "A.神秘、有層次，會越聞越著迷", type: "woody"},
      {text: "B.溫柔、舒服，像一段美好記憶", type: "floral"},
      {text: "C.明亮、開朗，讓人瞬間提起精神", type: "citrus"},
      {text: "D.乾淨、俐落，簡單卻令人難忘", type: "musk"}
    ]
  }
];

const results = {
  woody: {
    title: "木質沉穩型",
    image: "images/result_woody.jpg",
    hashtags: ["#務實穩健", "#沉穩內斂", "#溫潤理性"],
    description: "你是個思維清晰、腳踏實地的務實派，內心世界像一片遼闊的森林，寧靜而深邃。你擁有強大的內在力量，不隨波逐流，總能保持冷靜，用理性的方式分析問題。在工作上，你通常是團隊中值得信賴的基石；在人際關係中，你或許話不多，但總是能給予最堅實的支持和最中肯的建議。",
    analysis: "你的選擇顯示你追求的是一種內在的平和與安定感。你重視事物的深度與本質，喜歡沉浸在書本、音樂或靜謐的環境中，透過獨處來為自己充電。木質調香氣，如<strong>檀香</strong>、<strong>雪松</strong>、<strong>岩蘭草</strong>，能完美襯托你穩健的個性，這些香調從大地而來，散發著沉著而溫暖的氣息，讓你感到被環抱的安心與力量。"
  },
  citrus: {
    title: "柑橘清新型",
    image: "images/result_citrus.jpg",
    hashtags: ["#熱情開朗", "#樂觀正向", "#自由灑脫"],
    description: "你充滿熱情與活力，天生是個樂觀主義者，就像初晨的陽光，明亮而溫暖。你不喜歡被束縛，樂於探索新事物和未知領域，對生活中的每一刻都抱持著好奇心與冒險精神。在社交場合，你是自然而然的氣氛製造者，總是能用你的正能量感染身邊的人。你享受在動態中找尋自我，相信每一次的嘗試都是一場值得的冒險。",
    analysis: "你的選擇反映出你外向、喜愛社交的靈魂。你傾向於輕盈、明亮的選項，因為它們能激發你的熱情與創造力。柑橘調，例如<strong>葡萄柚</strong>、<strong>檸檬</strong>、<strong>佛手柑</strong>，能完美地與你的個性契合。它們清新、明快的氣息，能讓你隨時保持清醒，精神煥發，讓你的每一天都充滿積極活力的氣息。"
  },
  floral: {
    title: "花香柔和型",
    image: "images/result_floral.jpg",
    hashtags: ["#感性細膩", "#溫暖療癒", "#優雅浪漫"],
    description: "你擁有一顆溫暖、細膩的心，能夠敏銳地感知他人的情緒與需求。你的氣質優雅而親切，充滿同理心，在人際關係中扮演著溫和的協調者和療癒者。你重視情感的連結，善於營造舒適與和諧的氛圍。你的感性與內在力量，使你總能成為別人尋求慰藉的對象，總是以最溫柔的方式給予支持與陪伴。",
    analysis: "你的選擇傾向於感性、浪漫且溫馨的體驗。你
