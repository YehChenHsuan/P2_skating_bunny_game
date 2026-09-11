/**
 * ALICE ESL Phonics P2 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 04 - 10
 * 主題：Daily Activities, Beginning Sounds & Short Vowels
 */

const P2_VOCABULARY = [
  {
    "id": "Ted",
    "word": "Ted",
    "zh": "Ted",
    "image": "P2_flashcards_images/P2_Ted.webp",
    "audioEn": "P2_flashcards_audios/P2_Ted.mp3",
    "audioZh": "P2_flashcards_audios/P2_Ted_zh.mp3"
  },
  {
    "id": "apple",
    "word": "apple",
    "zh": "apple",
    "image": "P2_flashcards_images/P2_apple.webp",
    "audioEn": "P2_flashcards_audios/P2_apple.mp3",
    "audioZh": "P2_flashcards_audios/P2_apple_zh.mp3"
  },
  {
    "id": "bag",
    "word": "bag",
    "zh": "bag",
    "image": "P2_flashcards_images/P2_bag.webp",
    "audioEn": "P2_flashcards_audios/P2_bag.mp3",
    "audioZh": "P2_flashcards_audios/P2_bag_zh.mp3"
  },
  {
    "id": "bath",
    "word": "bath",
    "zh": "bath",
    "image": "P2_flashcards_images/P2_bath.webp",
    "audioEn": "P2_flashcards_audios/P2_bath.mp3",
    "audioZh": "P2_flashcards_audios/P2_bath_zh.mp3"
  },
  {
    "id": "bed",
    "word": "bed",
    "zh": "bed",
    "image": "P2_flashcards_images/P2_bed.webp",
    "audioEn": "P2_flashcards_audios/P2_bed.mp3",
    "audioZh": "P2_flashcards_audios/P2_bed_zh.mp3"
  },
  {
    "id": "bird",
    "word": "bird",
    "zh": "bird",
    "image": "P2_flashcards_images/P2_bird.webp",
    "audioEn": "P2_flashcards_audios/P2_bird.mp3",
    "audioZh": "P2_flashcards_audios/P2_bird_zh.mp3"
  },
  {
    "id": "box",
    "word": "box",
    "zh": "box",
    "image": "P2_flashcards_images/P2_box.webp",
    "audioEn": "P2_flashcards_audios/P2_box.mp3",
    "audioZh": "P2_flashcards_audios/P2_box_zh.mp3"
  },
  {
    "id": "breakfast",
    "word": "breakfast",
    "zh": "breakfast",
    "image": "P2_flashcards_images/P2_breakfast.webp",
    "audioEn": "P2_flashcards_audios/P2_breakfast.mp3",
    "audioZh": "P2_flashcards_audios/P2_breakfast_zh.mp3"
  },
  {
    "id": "brush",
    "word": "brush",
    "zh": "brush",
    "image": "P2_flashcards_images/P2_brush.webp",
    "audioEn": "P2_flashcards_audios/P2_brush.mp3",
    "audioZh": "P2_flashcards_audios/P2_brush_zh.mp3"
  },
  {
    "id": "bug",
    "word": "bug",
    "zh": "bug",
    "image": "P2_flashcards_images/P2_bug.webp",
    "audioEn": "P2_flashcards_audios/P2_bug.mp3",
    "audioZh": "P2_flashcards_audios/P2_bug_zh.mp3"
  },
  {
    "id": "bus",
    "word": "bus",
    "zh": "bus",
    "image": "P2_flashcards_images/P2_bus.webp",
    "audioEn": "P2_flashcards_audios/P2_bus.mp3",
    "audioZh": "P2_flashcards_audios/P2_bus_zh.mp3"
  },
  {
    "id": "cat",
    "word": "cat",
    "zh": "cat",
    "image": "P2_flashcards_images/P2_cat.webp",
    "audioEn": "P2_flashcards_audios/P2_cat.mp3",
    "audioZh": "P2_flashcards_audios/P2_cat_zh.mp3"
  },
  {
    "id": "close",
    "word": "close",
    "zh": "close",
    "image": "P2_flashcards_images/P2_close.webp",
    "audioEn": "P2_flashcards_audios/P2_close.mp3",
    "audioZh": "P2_flashcards_audios/P2_close_zh.mp3"
  },
  {
    "id": "cold",
    "word": "cold",
    "zh": "cold",
    "image": "P2_flashcards_images/P2_cold.webp",
    "audioEn": "P2_flashcards_audios/P2_cold.mp3",
    "audioZh": "P2_flashcards_audios/P2_cold_zh.mp3"
  },
  {
    "id": "dog",
    "word": "dog",
    "zh": "dog",
    "image": "P2_flashcards_images/P2_dog.webp",
    "audioEn": "P2_flashcards_audios/P2_dog.mp3",
    "audioZh": "P2_flashcards_audios/P2_dog_zh.mp3"
  },
  {
    "id": "down",
    "word": "down",
    "zh": "down",
    "image": "P2_flashcards_images/P2_down.webp",
    "audioEn": "P2_flashcards_audios/P2_down.mp3",
    "audioZh": "P2_flashcards_audios/P2_down_zh.mp3"
  },
  {
    "id": "duck",
    "word": "duck",
    "zh": "duck",
    "image": "P2_flashcards_images/P2_duck.webp",
    "audioEn": "P2_flashcards_audios/P2_duck.mp3",
    "audioZh": "P2_flashcards_audios/P2_duck_zh.mp3"
  },
  {
    "id": "egg",
    "word": "egg",
    "zh": "egg",
    "image": "P2_flashcards_images/P2_egg.webp",
    "audioEn": "P2_flashcards_audios/P2_egg.mp3",
    "audioZh": "P2_flashcards_audios/P2_egg_zh.mp3"
  },
  {
    "id": "fan",
    "word": "fan",
    "zh": "fan",
    "image": "P2_flashcards_images/P2_fan.webp",
    "audioEn": "P2_flashcards_audios/P2_fan.mp3",
    "audioZh": "P2_flashcards_audios/P2_fan_zh.mp3"
  },
  {
    "id": "fish",
    "word": "fish",
    "zh": "fish",
    "image": "P2_flashcards_images/P2_fish.webp",
    "audioEn": "P2_flashcards_audios/P2_fish.mp3",
    "audioZh": "P2_flashcards_audios/P2_fish_zh.mp3"
  },
  {
    "id": "hop",
    "word": "hop",
    "zh": "hop",
    "image": "P2_flashcards_images/P2_hop.webp",
    "audioEn": "P2_flashcards_audios/P2_hop.mp3",
    "audioZh": "P2_flashcards_audios/P2_hop_zh.mp3"
  },
  {
    "id": "in",
    "word": "in",
    "zh": "in",
    "image": "P2_flashcards_images/P2_in.webp",
    "audioEn": "P2_flashcards_audios/P2_in.mp3",
    "audioZh": "P2_flashcards_audios/P2_in_zh.mp3"
  },
  {
    "id": "jog",
    "word": "jog",
    "zh": "jog",
    "image": "P2_flashcards_images/P2_jog.webp",
    "audioEn": "P2_flashcards_audios/P2_jog.mp3",
    "audioZh": "P2_flashcards_audios/P2_jog_zh.mp3"
  },
  {
    "id": "jump",
    "word": "jump",
    "zh": "jump",
    "image": "P2_flashcards_images/P2_jump.webp",
    "audioEn": "P2_flashcards_audios/P2_jump.mp3",
    "audioZh": "P2_flashcards_audios/P2_jump_zh.mp3"
  },
  {
    "id": "kick",
    "word": "kick",
    "zh": "kick",
    "image": "P2_flashcards_images/P2_kick.webp",
    "audioEn": "P2_flashcards_audios/P2_kick.mp3",
    "audioZh": "P2_flashcards_audios/P2_kick_zh.mp3"
  },
  {
    "id": "kid",
    "word": "kid",
    "zh": "kid",
    "image": "P2_flashcards_images/P2_kid.webp",
    "audioEn": "P2_flashcards_audios/P2_kid.mp3",
    "audioZh": "P2_flashcards_audios/P2_kid_zh.mp3"
  },
  {
    "id": "kiss",
    "word": "kiss",
    "zh": "kiss",
    "image": "P2_flashcards_images/P2_kiss.webp",
    "audioEn": "P2_flashcards_audios/P2_kiss.mp3",
    "audioZh": "P2_flashcards_audios/P2_kiss_zh.mp3"
  },
  {
    "id": "mall",
    "word": "mall",
    "zh": "mall",
    "image": "P2_flashcards_images/P2_mall.webp",
    "audioEn": "P2_flashcards_audios/P2_mall.mp3",
    "audioZh": "P2_flashcards_audios/P2_mall_zh.mp3"
  },
  {
    "id": "man",
    "word": "man",
    "zh": "man",
    "image": "P2_flashcards_images/P2_man.webp",
    "audioEn": "P2_flashcards_audios/P2_man.mp3",
    "audioZh": "P2_flashcards_audios/P2_man_zh.mp3"
  },
  {
    "id": "milk",
    "word": "milk",
    "zh": "milk",
    "image": "P2_flashcards_images/P2_milk.webp",
    "audioEn": "P2_flashcards_audios/P2_milk.mp3",
    "audioZh": "P2_flashcards_audios/P2_milk_zh.mp3"
  },
  {
    "id": "mom",
    "word": "mom",
    "zh": "mom",
    "image": "P2_flashcards_images/P2_mom.webp",
    "audioEn": "P2_flashcards_audios/P2_mom.mp3",
    "audioZh": "P2_flashcards_audios/P2_mom_zh.mp3"
  },
  {
    "id": "money",
    "word": "money",
    "zh": "money",
    "image": "P2_flashcards_images/P2_money.webp",
    "audioEn": "P2_flashcards_audios/P2_money.mp3",
    "audioZh": "P2_flashcards_audios/P2_money_zh.mp3"
  },
  {
    "id": "mouse",
    "word": "mouse",
    "zh": "mouse",
    "image": "P2_flashcards_images/P2_mouse.webp",
    "audioEn": "P2_flashcards_audios/P2_mouse.mp3",
    "audioZh": "P2_flashcards_audios/P2_mouse_zh.mp3"
  },
  {
    "id": "net",
    "word": "net",
    "zh": "net",
    "image": "P2_flashcards_images/P2_net.webp",
    "audioEn": "P2_flashcards_audios/P2_net.mp3",
    "audioZh": "P2_flashcards_audios/P2_net_zh.mp3"
  },
  {
    "id": "on",
    "word": "on",
    "zh": "on",
    "image": "P2_flashcards_images/P2_on.webp",
    "audioEn": "P2_flashcards_audios/P2_on.mp3",
    "audioZh": "P2_flashcards_audios/P2_on_zh.mp3"
  },
  {
    "id": "open",
    "word": "open",
    "zh": "open",
    "image": "P2_flashcards_images/P2_open.webp",
    "audioEn": "P2_flashcards_audios/P2_open.mp3",
    "audioZh": "P2_flashcards_audios/P2_open_zh.mp3"
  },
  {
    "id": "pack",
    "word": "pack",
    "zh": "pack",
    "image": "P2_flashcards_images/P2_pack.webp",
    "audioEn": "P2_flashcards_audios/P2_pack.mp3",
    "audioZh": "P2_flashcards_audios/P2_pack_zh.mp3"
  },
  {
    "id": "red",
    "word": "red",
    "zh": "red",
    "image": "P2_flashcards_images/P2_red.webp",
    "audioEn": "P2_flashcards_audios/P2_red.mp3",
    "audioZh": "P2_flashcards_audios/P2_red_zh.mp3"
  },
  {
    "id": "small",
    "word": "small",
    "zh": "small",
    "image": "P2_flashcards_images/P2_small.webp",
    "audioEn": "P2_flashcards_audios/P2_small.mp3",
    "audioZh": "P2_flashcards_audios/P2_small_zh.mp3"
  },
  {
    "id": "stop",
    "word": "stop",
    "zh": "stop",
    "image": "P2_flashcards_images/P2_stop.webp",
    "audioEn": "P2_flashcards_audios/P2_stop.mp3",
    "audioZh": "P2_flashcards_audios/P2_stop_zh.mp3"
  },
  {
    "id": "sun",
    "word": "sun",
    "zh": "sun",
    "image": "P2_flashcards_images/P2_sun.webp",
    "audioEn": "P2_flashcards_audios/P2_sun.mp3",
    "audioZh": "P2_flashcards_audios/P2_sun_zh.mp3"
  },
  {
    "id": "take",
    "word": "take",
    "zh": "take",
    "image": "P2_flashcards_images/P2_take.webp",
    "audioEn": "P2_flashcards_audios/P2_take.mp3",
    "audioZh": "P2_flashcards_audios/P2_take_zh.mp3"
  },
  {
    "id": "teeth",
    "word": "teeth",
    "zh": "teeth",
    "image": "P2_flashcards_images/P2_teeth.webp",
    "audioEn": "P2_flashcards_audios/P2_teeth.mp3",
    "audioZh": "P2_flashcards_audios/P2_teeth_zh.mp3"
  },
  {
    "id": "ten",
    "word": "ten",
    "zh": "ten",
    "image": "P2_flashcards_images/P2_ten.webp",
    "audioEn": "P2_flashcards_audios/P2_ten.mp3",
    "audioZh": "P2_flashcards_audios/P2_ten_zh.mp3"
  },
  {
    "id": "toes",
    "word": "toes",
    "zh": "toes",
    "image": "P2_flashcards_images/P2_toes.webp",
    "audioEn": "P2_flashcards_audios/P2_toes.mp3",
    "audioZh": "P2_flashcards_audios/P2_toes_zh.mp3"
  },
  {
    "id": "top",
    "word": "top",
    "zh": "top",
    "image": "P2_flashcards_images/P2_top.webp",
    "audioEn": "P2_flashcards_audios/P2_top.mp3",
    "audioZh": "P2_flashcards_audios/P2_top_zh.mp3"
  },
  {
    "id": "town",
    "word": "town",
    "zh": "town",
    "image": "P2_flashcards_images/P2_town.webp",
    "audioEn": "P2_flashcards_audios/P2_town.mp3",
    "audioZh": "P2_flashcards_audios/P2_town_zh.mp3"
  },
  {
    "id": "truck",
    "word": "truck",
    "zh": "truck",
    "image": "P2_flashcards_images/P2_truck.webp",
    "audioEn": "P2_flashcards_audios/P2_truck.mp3",
    "audioZh": "P2_flashcards_audios/P2_truck_zh.mp3"
  },
  {
    "id": "up",
    "word": "up",
    "zh": "up",
    "image": "P2_flashcards_images/P2_up.webp",
    "audioEn": "P2_flashcards_audios/P2_up.mp3",
    "audioZh": "P2_flashcards_audios/P2_up_zh.mp3"
  },
  {
    "id": "walk",
    "word": "walk",
    "zh": "walk",
    "image": "P2_flashcards_images/P2_walk.webp",
    "audioEn": "P2_flashcards_audios/P2_walk.mp3",
    "audioZh": "P2_flashcards_audios/P2_walk_zh.mp3"
  },
  {
    "id": "wash",
    "word": "wash",
    "zh": "wash",
    "image": "P2_flashcards_images/P2_wash.webp",
    "audioEn": "P2_flashcards_audios/P2_wash.mp3",
    "audioZh": "P2_flashcards_audios/P2_wash_zh.mp3"
  },
  {
    "id": "watch",
    "word": "watch",
    "zh": "watch",
    "image": "P2_flashcards_images/P2_watch.webp",
    "audioEn": "P2_flashcards_audios/P2_watch.mp3",
    "audioZh": "P2_flashcards_audios/P2_watch_zh.mp3"
  },
  {
    "id": "we",
    "word": "we",
    "zh": "we",
    "image": "P2_flashcards_images/P2_we.webp",
    "audioEn": "P2_flashcards_audios/P2_we.mp3",
    "audioZh": "P2_flashcards_audios/P2_we_zh.mp3"
  },
  {
    "id": "win",
    "word": "win",
    "zh": "win",
    "image": "P2_flashcards_images/P2_win.webp",
    "audioEn": "P2_flashcards_audios/P2_win.mp3",
    "audioZh": "P2_flashcards_audios/P2_win_zh.mp3"
  },
  {
    "id": "woman",
    "word": "woman",
    "zh": "woman",
    "image": "P2_flashcards_images/P2_woman.webp",
    "audioEn": "P2_flashcards_audios/P2_woman.mp3",
    "audioZh": "P2_flashcards_audios/P2_woman_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 04 - 10）
const PHONICS_GROUPS = {
  "Bb": [
    "bed",
    "bag",
    "breakfast",
    "brush",
    "bus",
    "bird",
    "box",
    "bug"
  ],
  "Tt": [
    "teeth",
    "top",
    "truck",
    "take",
    "town",
    "toe",
    "toes",
    "ten"
  ],
  "Mm": [
    "man",
    "mom",
    "mop",
    "money",
    "mouse",
    "milk",
    "mall"
  ],
  "Ww": [
    "we",
    "wash",
    "watch",
    "walk",
    "win",
    "woman"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "subject": "Josh",
    "action": "wake up",
    "sentence": "Josh can wake up early!",
    "question": "What does Josh do in the morning?",
    "options": [
      "wake up",
      "sleep",
      "cry"
    ],
    "correct": "wake up"
  },
  {
    "subject": "Girl",
    "action": "wash",
    "sentence": "I wash my face every morning.",
    "question": "What does she wash?",
    "options": [
      "face",
      "hair",
      "bus"
    ],
    "correct": "face"
  },
  {
    "subject": "Boy",
    "action": "brush",
    "sentence": "I brush my teeth before I sleep.",
    "question": "What does he brush?",
    "options": [
      "teeth",
      "bag",
      "bed"
    ],
    "correct": "teeth"
  },
  {
    "subject": "Kid",
    "action": "walk",
    "sentence": "He can walk to school.",
    "question": "What can he do?",
    "options": [
      "walk",
      "fly",
      "swim"
    ],
    "correct": "walk"
  },
  {
    "subject": "Duck",
    "action": "swim",
    "sentence": "The duck can swim in the water.",
    "question": "What can the duck do?",
    "options": [
      "swim",
      "run",
      "jump"
    ],
    "correct": "swim"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P2_VOCABULARY;
  window.P2_VOCABULARY = P2_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P2_VOCABULARY,
    P2_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
