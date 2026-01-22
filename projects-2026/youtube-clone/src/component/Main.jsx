import React from "react";
import subCatogories from "../data.js";
const sideBarMenu = [
  {
    id: 1,
    title: "Home",
    icon: "home",
    route: "/home",
  },
  {
    id: 2,
    title: "Shorts",
    icon: "flash_on",
    route: "/shorts",
  },
  {
    id: 3,
    title: "Subscriptions",
    icon: "subscriptions",
    route: "/subscriptions",
  },
  {
    id: 4,
    title: "History",
    icon: "history",
    route: "/history",
  },
];
const expore = [
  {
    id: 1,
    title: "Shopping",
    icon: "shopping_cart",
    route: "/shopping",
  },
  {
    id: 2,
    title: "Music",
    icon: "music_note",
    route: "/music",
  },
  {
    id: 3,
    title: "Movies",
    icon: "movie",
    route: "/movies",
  },
  {
    id: 4,
    title: "Live",
    icon: "live_tv",
    route: "/live",
  },
  {
    id: 5,
    title: "Gaming",
    icon: "sports_esports",
    route: "/gaming",
  },
  {
    id: 6,
    title: "News",
    icon: "article",
    route: "/news",
  },
  {
    id: 7,
    title: "Sports",
    icon: "sports_soccer",
    route: "/sports",
  },
  {
    id: 8,
    title: "Courses",
  },
];
const dataVideo = [
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
  {
    id: "vid_001",
    title: "5-Minute Morning Yoga for Beginners",
    description:
      "Start your day with this gentle 5-minute yoga flow. Perfect for beginners, no equipment needed.",
    thumbnail_url:
      "https://i.ytimg.com/vi/velRGQDJscM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeqOXH2RwGzKQYjZY9Tuq5_aIRxg",
    video_url: "https://example.com/videos/vid_001.mp4",
    duration_seconds: 300,
    duration_text: "5:00",
    views: 124587,
    likes: 9850,
    dislikes: 120,
    upload_date: "2024-11-02",
    channel: {
      id: "ch_001",
      name: "EasyStretch",
      avatar_url:
        "https://yt3.ggpht.com/73VtZM4shoTX6RwRlo9h2um314wEpr4HXweBV9Pl-Ua_966v-oDMBaCW10gcZUgHbX56eQLXtw=s68-c-k-c0x00ffffff-no-rj",
    },
    tags: ["yoga", "morning", "beginner", "wellness"],
    category: "Health & Fitness",
    is_live: false,
    comments_count: 42,
    comments: [
      {
        id: "c_001",
        author: "Lina",
        text: "Lovely routine — helped me wake up!",
        likes: 12,
        published: "2024-11-03",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_002",
    title: "React 18 Crash Course — Build a Todo App",
    description:
      "Full walkthrough of React 18 features and a simple Todo App. Includes hooks, context, and best practices.",
    thumbnail_url:
      "https://i.ytimg.com/vi/LEsDrtu2SZQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdicfh_ib2wsu-RXCKXQmj7_eEdg",
    video_url: "https://example.com/videos/vid_002.mp4",
    duration_seconds: 1520,
    duration_text: "25:20",
    views: 893045,
    likes: 41203,
    dislikes: 750,
    upload_date: "2025-03-12",
    channel: {
      id: "ch_002",
      name: "DevCamp",
      avatar_url: "https://placehold.co/80x80/png/222/fff?text=DC",
    },
    tags: ["react", "javascript", "tutorial", "webdev"],
    category: "Education",
    is_live: false,
    comments_count: 215,
    comments: [
      {
        id: "c_010",
        author: "Ava",
        text: "Great explanation of concurrent features.",
        likes: 45,
        published: "2025-03-13",
      },
    ],
    language: "en",
    resolution: "1080p",
  },
  {
    id: "vid_003",
    title: "Street Food Tour: Seoul Night Markets",
    description:
      "Explore Seoul’s night markets — sizzling tteokbokki, fish cakes, and hidden gems.",
    thumbnail_url:
      "https://i.ytimg.com/vi/TB2O3Hi6EJA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5yoZd_1QMhWvBk7M-aDrODw7-Hg",
    video_url: "https://example.com/videos/vid_003.mp4",
    duration_seconds: 1320,
    duration_text: "22:00",
    views: 542213,
    likes: 38210,
    dislikes: 430,
    upload_date: "2024-07-18",
    channel: {
      id: "ch_003",
      name: "WanderBites",
      avatar_url: "https://placehold.co/80x80/png/f4c/000?text=WB",
    },
    tags: ["food", "travel", "korea", "streetfood"],
    category: "Travel & Events",
    is_live: false,
    comments_count: 124,
    comments: [
      {
        id: "c_020",
        author: "Jun",
        text: "Love the tteokbokki spot!",
        likes: 22,
        published: "2024-07-19",
      },
    ],
    language: "en",
    resolution: "4K",
  },
];

const Main = () => {
  return (
    <div className=" h-[50vh]  text-black flex ">
      {/* left */}
      <>
        <div className=" hidden sm:block left h-[90vh]  overflow-y-auto w-72">
          <div className=" sm:w-44 menus">
            {sideBarMenu.map((item) => (
              <div className="mt-5 ml-4" key={item.id}>
                <li className="list-none hover:bg-gray-300 py-2  rounded-lg cursor-pointer">
                  <h1 className="ml-2"> {item.title}</h1>
                </li>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h1 className=" ml-4 font-semibold">Explore</h1>
            {expore.map((item) => (
              <div className="mt-5 ml-4" key={item.id}>
                <li className="list-none hover:bg-gray-300 py-2  rounded-lg cursor-pointer">
                  {item.title}
                </li>
              </div>
            ))}
          </div>
        </div>
      </>
      {/* right */}
      <div className=" h-[400px]   overflow-y-auto">
        <div className="hidden sm:flex  gap-4 px-3 flex-wrap tex-sm mt-6">
          {subCatogories.map((item) => {
            return (
              <div className="" key={item.id}>
                <a className="bg-gray-300 px-4 py-2 text-gray-900 font-semibold capitalize rounded-lg">
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  mt-10 sm:h-[600px] overflow-y-auto">
          {dataVideo.map((video) => (
            <div
              key={video.id}
              className="rounded-lg px-3 shadow hover:shadow-lg transition bg-white w-80 h-80"
            >
              <img
                src={video.thumbnail_url}
                alt={video.title}
                className=" h-48 object-cover rounded-t-lg"
              />
              <div className="p-3 flex items-start gap-2">
                <img
                  src={video.channel.avatar_url}
                  alt={video.channel.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-sm line-clamp-2">
                    {video.title}
                  </h2>
                  <p className="text-gray-500 text-xs">{video.channel.name}</p>
                  <p className="text-gray-400 text-xs">
                    {video.views.toLocaleString()} views
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
