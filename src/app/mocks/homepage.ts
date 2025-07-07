import { HomePageProps } from '../types/pages/homepage';

const homepageData: HomePageProps = {
  topBanner: {
    tabs: [
      { id: 'tab-1', title: 'FIFA Club World Cup 2025', link: '/fifa-club-world-cup-2025' },
      {
        id: 'tab-2',
        title: 'Người nổi tiếng quảng cáo giả',
        link: '/nguoi-noi-tieng-quang-cao-gia',
      },
      { id: 'tab-3', title: 'Sắp nhập tình mạnh', link: '/sap-nhap-tinh-manh' },
    ],
    logo: 'https://static.znews.vn/images/stat.svg',
  },
  topNews: {
    mainArticle: {
      article: {
        id: 'main-article',
        title: 'Thỏa thuận thuế quan Việt Nam - Mỹ: Doanh nghiệp đã có kinh nghiệm',
        description:
          'Thỏa thuận thương mại là cơ hội để Việt Nam hút dòng vốn ngoại. Các doanh nghiệp cũng đã tích lũy kinh nghiệm ứng phó, sẵn sàng điều chỉnh chiến lược để duy trì thị phần.',
        image: 'https://photo.znews.vn/w1000/Uploaded/bfjysesfzyr/2024_02_26/quynhdanh.jpg',
        link: '/main-article',
      },
      suggestedArticles: [
        {
          id: 'suggested-1',
          title: 'Hơn 1 triệu tỷ đồng tín dụng chảy vào lĩnh vực nào?',
          description: 'Description for suggested article 1.',
          image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
          link: '/suggested-1',
        },
        {
          id: 'suggested-2',
          title: 'Khi nào bạn nên làm ngược so với số đông?',
          description: 'Description for suggested article 2.',
          image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
          link: '/suggested-2',
        },
      ],
    },
    sideArticles: [
      {
        id: 'side-1',
        title: 'Nữ ca sĩ giải đúng 40/40 câu đề thi tốt nghiệp THPT 2025',
        description: 'Description for side article 1.',
        image:
          'https://photo.znews.vn/w480/Uploaded/neg_esfjaex/2025_07_07/486475092_1203697901128020_70808.jpg',
        link: '/side-1',
      },
      {
        id: 'side-2',
        title: 'Kịch bản phản địa đàng đang ám ảnh giới tỷ phú công nghệ',
        description: 'Description for side article 2.',
        image: 'https://photo.znews.vn/w480/Uploaded/qoswae/2025_07_06/34554132.jpg',
        link: '/side-2',
      },
    ],
    secondaryArticles: [
      {
        id: 'secondary-1',
        title: 'Chủ tịch TP.HCM Nguyễn Văn Được xuống hiện trường vụ cháy 8 người chết',
        description: 'Description for secondary article 1.',
        image: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_07/DDDD.JPG',
        link: '/secondary-1',
      },
      {
        id: 'secondary-2',
        title: 'Vardy bị chỉ trích tham tiền',
        description: 'Description for secondary article 2.',
        image: 'https://photo.znews.vn/w210/Uploaded/bpivpawv/2024_09_15/jamie_vardy.jpg',
        link: '/secondary-2',
      },
      {
        id: 'secondary-3',
        title: 'Thực hư ảnh cá voi săn mồi dưới hoàng hôn ở biển Gia Lai',
        description: 'Description for secondary article 3.',
        image:
          'https://photo.znews.vn/w210/Uploaded/anqyy/2025_07_07/516478265_2731043987100874_7794890073275388234_n.jpg',
        link: '/secondary-3',
      },
      {
        id: 'secondary-4',
        title: 'Ngôi sao 70 triệu euro đồng ý gia nhập Barca',
        description: 'Description for secondary article 4.',
        image: 'https://photo.znews.vn/w210/Uploaded/vjuqvpbc/2025_07_07/u.jpg',
        link: '/secondary-4',
      },
      {
        id: 'secondary-5',
        title: 'Thông tin về cặp vợ chồng tâm thần trong đường dây cờ bạc ở Pullman',
        description: 'Description for secondary article 5.',
        image:
          'https://photo.znews.vn/w210/Uploaded/jopluat/2025_07_06/mai_anh_va_chong_2_1553_1008.jpg',
        link: '/secondary-5',
      },
    ],
  },
  books: [
    {
      id: 'book-1',
      title: 'Điều cần làm trước khi quý nhân xuất hiện',
      description: 'Description for book 1.',
      image: 'https://photo.znews.vn/w210/Uploaded/ofh_cgkztmzt/2025_07_05/Phu_nu_thanh_cong.jpeg',
      link: '/book-1',
    },
    {
      id: 'book-2',
      title: 'Khi nào bạn nên làm ngược so với số đông?',
      description: 'Description for book 2.',
      image:
        'https://photo.znews.vn/w210/Uploaded/znang2/2025_07_04/non_conformist_going_in_opposite.jpeg',
      link: '/book-2',
    },
    {
      id: 'book-3',
      title: '3 chìa khóa để bạn hoàn tất khóa thiền cùng Osho mà không bỏ cuộc',
      description: 'Description for book 3.',
      image:
        'https://photo.znews.vn/w210/Uploaded/cqjrzdhwq/2025_07_05/Znews_Duong_vao_Thien_3_.jpg',
      link: '/book-3',
    },

    {
      id: 'book-4',
      title: 'Nỗi ấm ức của đứa con bị ghét bỏ',
      description: 'Description for book 4.',
      image: 'https://photo.znews.vn/w210/Uploaded/ofh_cgkztmzt/2024_09_03/Bat_nat_hoc_duong.jpeg',
      link: '/book-4',
    },
    {
      id: 'book-5',
      title: 'Công nghệ, mạng xã hội hủy hoại thanh thiếu niên?',
      description: 'Description for book 5.',
      image: 'https://photo.znews.vn/w210/Uploaded/qoswae/2025_07_01/r46997.jpg',
      link: '/book-5',
    },
    {
      id: 'book-6',
      title: 'Giới tỷ phú công nghệ sử dụng AI như thế nào?',
      description: 'Description for book 6.',
      image: 'https://photo.znews.vn/w210/Uploaded/qoswae/2025_06_30/image_21_24.jpg',
      link: '/book-6',
    },
    {
      id: 'book-7',
      title: 'Không chỉ xem ảnh năm xưa như Google Maps, bản đồ số còn cá nhân hóa',
      description: 'Description for book 7.',
      image: 'https://photo.znews.vn/w210/Uploaded/bpcgpivp/2025_07_03/IMG_20250701_151051.jpg',
      link: '/book-7',
    },
    {
      id: 'book-8',
      title: 'Đọc chậm, để không làm nô lệ thông tin',
      description: 'Description for book 8.',
      image:
        'https://photo.znews.vn/w210/Uploaded/bpcgpivp/2025_06_25/pexels_cottonbro_5473957_1.jpg',
      link: '/book-8',
    },
    {
      id: 'book-9',
      title: 'Thêm một mối quan hệ ngoài luồng và vụ phá thai bí ẩn liên quan JFK',
      description: 'Description for book 9.',
      image:
        'https://photo.znews.vn/w210/Uploaded/qoswae/2025_07_03/jfk_jackie_kennedy_2_0a04f87d1a8.jpg',
      link: '/book-9',
    },
    {
      id: 'book-10',
      title: 'Lưu giữ những ký ức đẹp về Diogo Jota',
      description: 'Description for book 10.',
      image:
        'https://photo.znews.vn/w210/Uploaded/zgsgtn/2025_07_03/Diogo_Jota_sach_anh_liverpool_cau_thu_bo_dao_nha_qua_doi_oh_his_name_thumb.jpg',
      link: '/book-10',
    },
  ],
  multimedia: {
    navigation: [
      { title: 'Videos', link: '/videos' },
      { title: 'Podcasts', link: '/podcasts' },
      { title: 'Longform', link: '/longform' },
      { title: 'Story', link: '/story' },
      { title: 'Quizz', link: '/quizz' },
    ],
    articles: [
      {
        id: 'multimedia-1',
        title: 'Kwon Eun Bi táo bạo ở lễ hội nước',
        description:
          'Kwon Eun Bi tiếp tục là tâm điểm của lễ hội âm nhạc Waterbomb. Nữ ca sĩ chọn trang phục táo bạo và có những tiết mục trình diễn hấp dẫn, khuấy động sân khấu.',
        image: 'https://photo.znews.vn/w1000/Uploaded/qfssu/2025_07_06/GvKgq0mbMAA3PNJ.jpg',
        link: '/multimedia-1',
      },
      {
        id: 'multimedia-2',
        title: 'Donnarumma bật khóc khi khiến Musiala gãy chân',
        description: 'Description for multimedia article 2.',
        image: 'https://photo.znews.vn/w360/Uploaded/sotnzt/2025_07_06/ge.jpg',
        link: '/multimedia-2',
      },
      {
        id: 'multimedia-3',
        title: 'Sắc vóc gợi cảm của vợ JustaTee',
        description: 'Description for multimedia article 3.',
        image: 'https://photo.znews.vn/w360/Uploaded/zagtgt/2025_07_06/tram_anh.jpg',
        link: '/multimedia-3',
      },
      {
        id: 'multimedia-4',
        title: 'Sắc vóc Hoa khôi bóng chuyền VTV Cup 2025',
        description: 'Description for multimedia article 4.',
        image: 'https://photo.znews.vn/w360/Uploaded/lce_jwqqc/2025_07_06/cruz90.jpg',
        link: '/multimedia-4',
      },
      {
        id: 'multimedia-5',
        title: 'Nhan sắc 3 ái nữ nhà đại gia Minh Nhựa',
        description: 'Description for multimedia article 5.',
        image:
          'https://photo.znews.vn/w360/Uploaded/ofh_btgazspf/2025_07_05/susieeieie_Theo_doi_1080w_3_.jpg',
        link: '/multimedia-5',
      },
    ],
  },
  recentNews: [
    {
      id: 'news-1',
      title: 'Lisa gây sốt với tạo hình ‘búp bê sống’',
      description:
        'Trở lại với hình ảnh "búp bê sống" quen thuộc, Lisa trở thành tâm điểm chú ý trên các nền tảng MXH ở cả hai đêm mở màn chuyến lưu diễn "Deadline World Tour".',
      image:
        'https://photo.znews.vn/w360/Uploaded/vrwqcqdjw/2025_07_06/z6778487012631_50ee91dafbd6521aeeb92caff2c9c21d.jpg',
      link: '/news-1',
    },
    {
      id: 'news-2',
      title: 'Mẹ đơn thân bị xe bồn cuốn vào gầm tử vong ở TP.HCM',
      description:
        'Xe bồn ôm cua tại khu vực vòng xoay, cuốn xe máy vào gầm khiến người phụ nữ tử vong tại chỗ. Nạn nhân 27 tuổi, mẹ đơn thân, làm nghề xe ôm công nghệ.',
      image: 'https://photo.znews.vn/w360/Uploaded/sgtnrn/2025_07_02/TT.JPG',
      link: '/news-2',
    },
    {
      id: 'news-3',
      title: 'Đánh dã man hai học sinh, 3 thanh niên bị bắt khi trốn tại Lâm Đồng',
      description:
        'Đội CSGT đường bộ số 2 cùng Công an xã Liên Hương (Lâm Đồng) truy bắt được 3 thanh niên đánh dã man 2 học sinh tại TP.HCM khi đang lẩn trốn ở nhà nghỉ trên địa bàn.',
      image: 'https://photo.znews.vn/w360/Uploaded/sgtnrn/2025_06_19/C1.jpg',

      link: '/news-3',
    },
    {
      id: 'news-4',
      title: 'Musiala gãy xương mác, trật mắt cá',
      description:
        'Bayern Munich vừa chính thức xác nhận chẩn đoán tồi tệ nhất về chấn thương của Jamal Musiala - cầu thủ được xem là nhân tố đột biến quan trọng bậc nhất của đội bóng.',
      image: 'https://photo.znews.vn/w360/Uploaded/bpivpawv/2025_07_06/Musiala1.JPG',
      link: '/news-4',
    },
    {
      id: 'news-5',
      title: 'Donnarumma nhắn tin xin lỗi Musiala sau pha va chạm kinh hoàng',
      description:
        'Sau trận đấu giữa PSG và Bayern Munich, thủ thành Gianluigi Donnarumma nhanh chóng gửi lời xin lỗi và hỏi thăm Jamal Musiala - cầu thủ dính chấn thương nặng sau một pha va chạm không may với chính anh.',
      image: 'https://photo.znews.vn/w360/Uploaded/bpivpawv/2025_07_06/Donnarumma1_1.JPG',
      link: '/news-5',
    },
    {
      id: 'news-6',
      title: 'Diễn viên phim người lớn trở thành giảng viên đại học ở Hàn Quốc',
      description:
        'Từng đóng phim 18+, Yeo Min Jeong nay đổi tên Sonfeya, trở thành giảng viên MBA, cố vấn đầu tư nghệ thuật và tham gia nhiều hoạt động cộng đồng ở Seoul.',
      image: 'https://photo.znews.vn/w480/Uploaded/mdf_uswreo/2025_07_06/screenshot_1_.jpg',
      link: '/news-6',
    },
    {
      id: 'news-7',
      title: 'Mỹ nhân gợi cảm nhất Đài Loan 5 lần sảy thai, quyết không ly hôn',
      description:
        'Tiêu Thục Thận không ly hôn chồng trẻ kém 15 tuổi sau nhiều lần anh vướng lùm xùm đời tư. Cô cũng tiết lộ việc từng sảy thai nhiều lần.',
      image: 'https://photo.znews.vn/w480/Uploaded/rohunaa/2025_07_06/20200409004969.jpg',
      link: '/news-7',
    },
    {
      id: 'news-8',
      title: 'Đối tác Apple sẵn sàng đấu Samsung, LG',
      description:
        'BOE đặt mục tiêu cung cấp hơn 100 triệu màn hình OLED mỗi năm cho dòng iPhone, đánh dấu bước trở lại sau khi từng bị Apple loại khỏi chuỗi cung ứng.',
      image: 'https://photo.znews.vn/w480/Uploaded/ovhunst/2025_07_01/1x_1_1.jpg',
      link: '/news-8',
    },
    {
      id: 'news-9',
      title: 'Bé trai 12 tuổi nặng 83 kg rơi vào nguy kịch sau 3 ngày sốt',
      description:
        'Một bé trai 12 tuổi, nặng 83 kg, rơi vào tình trạng sốc sốt xuất huyết nặng, rối loạn đông máu, suy hô hấp nguy kịch.',
      image:
        'https://photo.znews.vn/w480/Uploaded/yrfjpyesfly/2025_07_06/sot_xuat_huyet_2_990x1314.jpg',
      link: '/news-9',
    },
    {
      id: 'news-10',
      title: 'Quảng Ninh tìm chủ đầu tư dự án casino 2 tỷ USD tại Vân Đồn',
      description:
        'Quảng Ninh đang mời thầu khu dịch vụ du lịch có casino, khách sạn, resort cao cấp... tại Vân Đồn. Dự án có quy mô hơn 244 ha, với tổng vốn khoảng 2 tỷ USD.',
      image: 'https://photo.znews.vn/w480/Uploaded/spluwao/2024_02_03/casino_1.jpg',
      link: '/news-10',
    },
    {
      id: 'news-11',
      title: 'Điểm chuẩn lớp 10 thấp kỷ lục ở nhiều nơi, chưa đến 2 điểm đã đậu',
      description:
        'Ở nhiều địa phương, điểm chuẩn lớp 10 tại một số trường THPT lấy ngưỡng trúng tuyển khá thấp, chưa đến 5 điểm cho 3 môn thi.',
      image:
        'https://photo.znews.vn/w480/Uploaded/neg_esfjaex/2025_06_25/z6740670066033_52fe8691c70c9d04d0bbd31fe36d77df.jpg',
      link: '/news-11',
    },
    {
      id: 'news-12',
      title: 'Khách Việt đi đâu khi không còn mặn mà với Thái Lan?',
      description:
        'Nhật Bản và Trung Quốc là 2 lựa chọn hàng đầu của du khách Việt giữa lúc tình hình Thái Lan nhiều bất ổn.',
      image:
        'https://photo.znews.vn/w360/Uploaded/bfjyseclyr1/2025_07_05/maeklongrailwaymarkettrainschedule_fotor_20250705163430.jpg',
      link: '/news-12',
    },
  ],
  podcast: {
    logo: 'https://static.znews.vn/images/channels/podcast_logo_white.svg',
    link: '/podcast',
    list: [
      {
        id: 'podcast-1',
        title: 'Tân Hoa hậu Phương Linh: Các sếp cho treo hình tôi khắp công ty',
        description: 'Description for podcast 1.',
        image: 'https://photo.znews.vn/w480/Uploaded/xpivvpib/2025_06_26/Vodcast_thumbnail.jpg',
        link: '/podcast-1',
      },
      {
        id: 'podcast-2',
        title: 'Thu Trang: Tôi tham vọng có phim mấy trăm tỷ đồng',
        description: 'Description for podcast 2.',
        image: 'https://photo.znews.vn/w480/Uploaded/yqdxwpujv/2025_01_27/thumb_znews.jpg',
        link: '/podcast-2',
      },
      {
        id: 'podcast-3',
        title: 'BAT Việt Nam: Phát triển bền vững không phải đánh đổi lợi ích kinh tế',
        description: 'Description for podcast 3.',
        image: 'https://photo.znews.vn/w480/Uploaded/wyhktpu/2025_01_06/thumb_znews_1_.jpg',
        link: '/podcast-3',
      },
      {
        id: 'podcast-4',
        title: 'Lãnh đạo Shopee: Cạnh tranh là cần thiết',
        description: 'Description for podcast 4.',
        image: 'https://photo.znews.vn/w480/Uploaded/yqdxwpujv/2024_12_27/thumb_znews.jpg',
        link: '/podcast-4',
      },
    ],
  },
  mostRead: [
    {
      id: 'most-read-1',
      title: 'Bên trong 4.500 m lòng động Phong Nha',
      description: 'Description for most read 1.',
      image: 'https://photo.znews.vn/w210/Uploaded/zdhwqmjwq/2025_07_04/dongphongnha.jpg',
      link: '/most-read-1',
      category: 'Du lịch',
    },
    {
      id: 'most-read-2',
      title: 'Người dân TP.HCM ở các khu vực này xây nhà không cần xin giấy phép',
      description: 'Description for most read 2.',
      image: 'https://photo.znews.vn/w210/Uploaded/spluwao/2025_07_06/vanphuccity_Znews.jpg',
      link: '/most-read-2',
      category: 'Kinh doanh',
    },
    {
      id: 'most-read-3',
      title: 'Ba ngày, 6 xe mới - thị trường ôtô Việt sôi động ngay đầu tháng 7',
      description: 'Description for most read 3.',
      image: 'https://photo.znews.vn/w210/Uploaded/bpivptvl/2025_07_04/ngang_byd_atto2_znews.jpg',
      link: '/most-read-3',
      category: 'Xe',
    },
    {
      id: 'most-read-4',
      title: 'Vi ngộ - từ kẻ có bệnh án tâm thần đến ông trùm thế giới ngầm',
      description: 'Description for most read 4.',
      image: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_04/Viiiii.JPG',
      link: '/most-read-4',
      category: 'Xã hội',
    },
    {
      id: 'most-read-5',
      title: 'Rủi ro nghề trọng tài pickleball từ vụ tấn công ở TP Hải Phòng',
      description: 'Description for most read 5.',
      image: 'https://photo.znews.vn/w210/Uploaded/rotnba/2025_06_19/pickleball_znews_6.jpg',
      link: '/most-read-5',
      category: 'Lifestyle',
    },
  ],
  sponsor: {
    background: 'https://photo.znews.vn/w480/Uploaded/pqh_fdgzszf4/2025_04_26/trungnguyen_bg.jpg',
    link: '/sponsor',
    posts: [
      {
        id: 'sponsor-1',
        title: 'Trung Nguyên Legend liên tục sáng tạo chinh phục toàn cầu',
        description: 'Description for sponsor post 1.',
        image: 'https://photo.znews.vn/w1000/Uploaded/wyhktpu/2025_06_27/bia900x600.jpg',
        link: '/sponsor-1',
      },
      {
        id: 'sponsor-2',
        title: 'Trung Nguyên E-Coffee tiếp tục phát triển mạnh mẽ tại Mỹ',
        description: 'Description for sponsor post 2.',
        image: 'https://photo.znews.vn/w360/Uploaded/wyhktpu/2025_06_09/Hinh_1_Hinh_chu_1.jpg',
        link: '/sponsor-2',
      },
      {
        id: 'sponsor-3',
        title: 'Trung Nguyên E-Coffee đạt giải thưởng Thương hiệu Mạnh ASEAN',
        description: 'Description for sponsor post 3.',
        image: 'https://photo.znews.vn/w360/Uploaded/wyhktpu/2025_05_23/Hinh_1_Hinh_chu_1.jpg',
        link: '/sponsor-3',
      },
    ],
  },
  maybeMisses: [
    {
      id: 'kinh-doanh-section',
      title: 'Kinh doanh',
      link: '/kinh-doanh',
      articles: [
        {
          id: 'kinh-doanh-1',
          title: 'Người dân TP.HCM ở các khu vực này xây nhà không cần xin giấy phép',
          description:
            'TP.HCM đã công bố 112 dự án đủ điều kiện miễn giấy phép xây dựng, áp dụng cho nhà ở riêng lẻ tại các khu vực đã có quy hoạch chi tiết, nhằm hỗ trợ người dân và doanh nghiệp.',
          image: 'https://photo.znews.vn/w1000/Uploaded/spluwao/2025_07_06/vanphuccity_Znews.jpg',
          link: '/kinh-doanh/1',
          category: 'Category 1',
          publishedAt: new Date(new Date('2025-07-01 09:00:00')),
        },
        {
          id: 'kinh-doanh-2',
          title: 'Buffet sầu riêng gây sốt ở TP.HCM',
          description: 'Description for kinh doanh 2.',
          image: 'https://photo.znews.vn/w360/Uploaded/yzfsm/2025_07_05/buffet.jpg',
          link: '/kinh-doanh/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'kinh-doanh-3',
          title: 'Biến động với Tesla sau khi Elon Musk tuyên bố lập đảng mới',
          description: 'Description for kinh doanh 3.',
          image: 'https://photo.znews.vn/w360/Uploaded/yzfsm/2025_07_06/Elon_Musk.jpg',
          link: '/kinh-doanh/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'kinh-doanh-4',
          title: 'Hàn Quốc sắp phát tiền mặt cho người dân',
          description: 'Description for kinh doanh 4.',
          image: 'https://photo.znews.vn/w210/Uploaded/yzfsm/2025_07_06/Korean.jpg',
          link: '/kinh-doanh/4',
          category: 'KINH DOANH',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'kinh-doanh-5',
          title: 'Doanh nghiệp Việt làm pallet từ xơ dừa, vỏ cà phê, tải trọng đến 2 tấn',
          description: 'Description for kinh doanh 5.',
          image:
            'https://photo.znews.vn/w210/Uploaded/spluwao/2025_07_06/Ung_dung_NetZero_Pallet_trong_logistics.jpeg',
          link: '/kinh-doanh/5',
          category: 'KINH DOANH',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'kinh-doanh-6',
          title: 'Việt Nam áp thuế chống bán phá giá thép cán nóng từ Trung Quốc',
          description: 'Description for kinh doanh 6.',
          image: 'https://photo.znews.vn/w210/Uploaded/rohuoct/2025_07_06/unnamed.png',
          link: '/kinh-doanh/6',
          category: 'KINH DOANH',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'kinh-doanh-7',
          title: 'Đường sắt liên vùng là chìa khóa để vận hành siêu đô thị TP.HCM mới',
          description: 'Description for kinh doanh 7.',
          image:
            'https://photo.znews.vn/w210/Uploaded/zdhwqmjwq/2024_12_18/batdongsanmetro_znews_3.jpg',
          link: '/kinh-doanh/7',
          category: 'KINH DOANH',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'kinh-doanh-8',
          title: 'Mua hàng từ 5 triệu phải chuyển khoản để trừ thuế: Chia nhỏ có hợp lệ?',
          description: 'Description for kinh doanh 8.',
          image: 'https://photo.znews.vn/w210/Uploaded/vpcvodbp/2025_07_03/ck_3010_2099.png.png',
          link: '/kinh-doanh/8',
          category: 'KINH DOANH',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'lifestyle-section',
      title: 'Lifestyle',
      link: '/lifestyle',
      articles: [
        {
          id: 'lifestyle-1',
          title: 'Bên trong căn biệt thự Dubai u ám của sao mạng sinh năm 1990',
          description:
            'Căn biệt thự của diễn viên hài Mohanad AlHattab, mang tông màu nâu trầm chủ đạo, được thiết kế để mỗi góc quay đều trở thành bối cảnh hoàn hảo cho nội dung sáng tạo.',
          image:
            'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_05/MO_AND_NOORB20124_edit_1.jpg',
          link: '/lifestyle/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-2',
          title: 'Phát ngôn bênh phụ nữ ngực nhỏ của Hải Tú bị đào lại',
          description: 'Description for Lifestyle 2.',
          image: 'https://photo.znews.vn/w360/Uploaded/rotnba/2025_07_04/dfcbd36c6703d15d8812.jpg',
          link: '/lifestyle/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-3',
          title: 'Mức lương 480.000 USD đáng mơ ước của chuyên gia AI tại Meta',
          description: 'Description for Lifestyle 3.',
          image:
            'https://photo.znews.vn/w360/Uploaded/wqdyqdxwp/2025_07_05/031283F0_BCBB_414E_B4BC_EB8D71B31BA3_1_201_a.jpeg',
          link: '/lifestyle/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-4',
          title: 'Đoàn Việt Nam có HCV pickleball đầu tiên ở PPA Tour châu Á',
          description: 'Description for Lifestyle 4.',
          image: 'https://photo.znews.vn/w210/Uploaded/wqdyqdxwp/2025_07_05/Thumb.jpg',
          link: '/lifestyle/4',
          category: 'Lifestyle',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-5',
          title: 'Trịnh Linh Giang ngược dòng vào chung kết PPA Tour châu Á',
          description: 'Description for Lifestyle 5.',
          image:
            'https://photo.znews.vn/w210/Uploaded/wqdyqdxwp/2025_07_03/2FFD0BB1_AD91_4F95_8F67_430EFBC21CD2_1_201_a.jpeg',
          link: '/lifestyle/5',
          category: 'Lifestyle',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-6',
          title: 'Lifestyle 6',
          description: 'Description for Lifestyle 6.',
          image:
            'https://photo.znews.vn/w210/Uploaded/rotnba/2025_07_04/pexels_cottonbro_7609045_1_.jpg',
          link: '/lifestyle/6',
          category: 'Lifestyle',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-7',
          title: 'Kiệt tác của nhà thơ thị giác lập kỷ lục hơn 43 triệu USD',
          description: 'Description for Lifestyle 7.',
          image:
            'https://photo.znews.vn/w210/Uploaded/ymzaz/2025_07_04/Canaletto_Venice_the_Return_of_the_Bucintoro_on_Ascension_Day_circa_1732Estimate_on_request_in_excess_of20m_1024x638_1_.jpg',
          link: '/lifestyle/7',
          category: 'Lifestyle',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'lifestyle-8',
          title: 'Tâm Tít, Kylie Jenner lăng xê bikini hoa',
          description: 'Description for Lifestyle 8.',
          image:
            'https://photo.znews.vn/w210/Uploaded/rotnba/2025_07_05/snapins_ai_3668508512058467553_1_.jpg',
          link: '/lifestyle/8',
          category: 'Lifestyle',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
  ],
  boxCategory: [
    {
      id: 'box-1',
      title: 'Công nghệ',
      link: '/box/1',
      articles: [
        {
          id: 'box-1-1',
          title: 'Bên trong nơi tạo ra máy tính chạy bằng tế bào não sống',
          description: 'Description for Box 1 - Article 1.',
          image: 'https://photo.znews.vn/w360/Uploaded/ivpbciv2/2025_07_01/tai_xuong_2_.jpg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Apple Watch vừa có nâng cấp lớn',
          description: 'Description for Box 1 - Article 2.',
          image:
            'https://photo.znews.vn/w210/Uploaded/wqjccdxwp/2025_07_01/Apple_watch_interface.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Siêu vật liệu chống đạn, chống cháy và bền hơn cả thép',
          description: 'Description for Box 1 - Article 3.',
          image: 'https://photo.znews.vn/w210/Uploaded/ivpbciv2/2025_07_01/tai_xuong_98_.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-2',
      title: 'sức khoẻ',
      link: '/box/2',
      articles: [
        {
          id: 'box-1-1',
          title: 'Phát hiện virus mới ở Trung Quốc, từ loài vật nghi gây ra Covid-19',
          description: 'Description for Box 1 - Article 1.',
          image: 'https://photo.znews.vn/w360/Uploaded/rfkbflu/2025_07_06/68224_0710_doi_1.jpg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Căn bệnh rình rập từ bữa cơm',
          description: 'Description for Box 1 - Article 2.',
          image: 'https://photo.znews.vn/w210/Uploaded/gtnvzv/2025_07_06/bua_com.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Lý do ngứa mắt',
          description: 'Description for Box 1 - Article 3.',
          image: 'https://photo.znews.vn/w210/Uploaded/gtnvzv/2025_07_04/ngua_mat.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-3',
      title: 'Đời sống',
      link: '/box/3',
      articles: [
        {
          id: 'box-1-1',
          title: 'Người nhặt ve chai gây sốc khi ủng hộ 5 tấn gạo ở Trung Quốc',
          description: 'Description for Box 1 - Article 1.',
          image:
            'https://photo.znews.vn/w360/Uploaded/mdf_uswreo/2025_07_06/97bf5f1d_1b88_4fdb_a953_6d5f1b9f.jpg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Lễ tốt nghiệp đầy cảm xúc tại Đại học Quốc tế Hồng Bàng',
          description: 'Description for Box 1 - Article 2.',
          image:
            'https://photo.znews.vn/w210/Uploaded/yqdxwpujv/2025_07_06/PGS.TS_Le_Khac_Cuong_phat_bieu_tai_Le_tot_nghiep.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Á hậu Kim Duyên nhịn ăn 7 ngày: Giảm cân hay rước họa?',
          description: 'Description for Box 1 - Article 3.',
          image:
            'https://photo.znews.vn/w210/Uploaded/mdf_uswreo/2025_07_06/kimduyen.nguyenhuynhDa_xac_minh_Theo_doiNha_Trang_640w.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-4',
      title: 'Du lịch',
      link: '/box/4',
      articles: [
        {
          id: 'box-1-1',
          title: 'Nhật Bản kêu gọi du khách tỉnh táo trước tin đồn động đất',
          description: 'Description for Box 1 - Article 1.',
          image:
            'https://photo.znews.vn/w360/Uploaded/uqvpvpiv/2025_07_06/tien_tri_tham_hoa_Nhat_Ban_2.jpg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Khách sợ tiêu chảy, nôn mửa khi được cho phép bơi ở sông Seine',
          description: 'Description for Box 1 - Article 2.',
          image:
            'https://photo.znews.vn/w210/Uploaded/bfjyseclyr1/2025_07_06/1_11zon_2_fotor_2025070612725.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Bún bò Huế được vinh danh Di sản văn hóa phi vật thể quốc gia',
          description: 'Description for Box 1 - Article 3.',
          image: 'https://photo.znews.vn/w210/Uploaded/uqvpvpiv/2025_07_05/bun_bo_hue_4.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-5',
      title: 'Giải trí',
      link: '/box/5',
      articles: [
        {
          id: 'box-1-1',
          title: 'Thất bại của Trần Hữu Tấn và bài học cho phim kinh dị Việt',
          description: 'Description for Box 1 - Article 1.',
          image: 'https://photo.znews.vn/w360/Uploaded/rohunaa/2025_07_06/IMG_1416.jpeg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Á hậu Hương Ly gây chú ý',
          description: 'Description for Box 1 - Article 2.',
          image:
            'https://photo.znews.vn/w210/Uploaded/qfssu/2025_07_06/A_hau_Hoan_vu_Huong_Ly_min_1_.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Khoảnh khắc tình tứ của vợ chồng Brooklyn',
          description: 'Description for Box 1 - Article 3.',
          image:
            'https://photo.znews.vn/w210/Uploaded/rohunaa/2025_07_06/brooklyn_beckham_wife_nicola_pel_1.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-6',
      title: 'Thể thao',
      link: '/box/6',
      articles: [
        {
          id: 'box-1-1',
          title: 'Cầu thủ trẻ hay nhất V.League rời U22 Việt Nam',
          description: 'Description for Box 1 - Article 1.',
          image:
            'https://photo.znews.vn/w360/Uploaded/yrfjpysfzyr/2025_07_06/514344420_1267402222061830_1756244813546909544_n.jpg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Loạt cựu tuyển thủ Việt Nam đá Giải bóng đá Công an ASEAN mở rộng',
          description: 'Description for Box 1 - Article 2.',
          image: 'https://photo.znews.vn/w210/Uploaded/yrfjpysfzyr/2025_07_06/DAN_2764.JPG',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Giải Pickleball Việt Nam 2025 khép lại sôi động',
          description: 'Description for Box 1 - Article 3.',
          image: 'https://photo.znews.vn/w210/Uploaded/bpivpawv/2025_07_06/Pickle.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-7',
      title: 'Xã hội',
      link: '/box/7',
      articles: [
        {
          id: 'box-1-1',
          title: 'Anh công nhân môi trường nhận mưa lời khen với hành động trách nhiệm',
          description: 'Description for Box 1 - Article 1.',
          image: 'https://photo.znews.vn/w360/Uploaded/sgtnrn/2025_07_04/DDD.JPG',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Tổ chức tha người được đặc xá vào ngày 1/9',
          description: 'Description for Box 1 - Article 2.',
          image: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_04/Duong.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Thủ tướng dâng hoa lên Bác Hồ ở nơi cách Tổ quốc nửa vòng Trái Đất',
          description: 'Description for Box 1 - Article 3.',
          image: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_06/THUMB_BAC.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
    {
      id: 'box-8',
      title: 'Pháp luật',
      link: '/box/8',
      articles: [
        {
          id: 'box-1-1',
          title: 'Phát hiện tài xế ôtô đầu kéo biển số Lào dương tính ma túy',
          description: 'Description for Box 1 - Article 1.',
          image: 'https://photo.znews.vn/w360/Uploaded/jopluat/2025_07_02/ma_tuy_1_15334587.jpg',
          link: '/box/1/1',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-2',
          title: 'Tạm giữ đối tượng rút súng đe dọa tài xế trên đèo Đá Trắng',
          description: 'Description for Box 1 - Article 2.',
          image: 'https://photo.znews.vn/w210/Uploaded/jopluat/2025_07_02/a123_9880_3315.jpg.jpg',
          link: '/box/1/2',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
        {
          id: 'box-1-3',
          title: 'Tạm giữ đối tượng cố ý gây thương tích khiến cha ruột tử vong',
          description: 'Description for Box 1 - Article 3.',
          image: 'https://photo.znews.vn/w210/Uploaded/jopluat/2025_07_02/an_mang.jpg',
          link: '/box/1/3',
          category: 'Category 1',
          publishedAt: new Date('2025-07-01 09:00:00'),
        },
      ],
    },
  ],
  magazines: {
    id: 'magazines',
    title: 'Magazines',
    link: '/magazines',
    articles: [
      {
        id: 'magazine-1',
        title: 'Tạm biệt, Jota',
        description: 'Description for Magazine 1.',
        image: 'https://photo.znews.vn/w1000/Uploaded/bpivpawv/2025_07_03/thumb_jota.jpg',
        link: '/magazine/1',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-2',
        title: 'Ai đang rót hàng chục tỷ cho hoa hậu Việt',
        description: 'Description for Magazine 2.',
        image:
          'https://photo.znews.vn/w1000/Uploaded/wpdhnwhnw/2025_06_13/img_0141_4953_8808.jpeg_1.jpg',
        link: '/magazine/2',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-3',
        title: 'Tên lửa Phá thành - quân bài nặng ký Iran gửi tới Israel',
        description: 'Description for Magazine 3.',
        image: 'https://photo.znews.vn/w1000/Uploaded/ecfzyryrzly/2025_06_23/Ten_lua.jpg',
        link: '/magazine/3',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-4',
        title: 'Messi vẫn vĩ đại',
        description: 'Description for Magazine 4.',
        image:
          'https://photo.znews.vn/w1000/Uploaded/bpivpawv/2025_06_15/2025_06_15T011626Z_382934104_UP1EL6F00V1IT_RTRMADP_3_SOCCER_CLUB_ALY_MIA.JPG',
        link: '/magazine/4',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-5',
        title: 'Đoàn xiếc môtô bay cuối cùng ở Việt Nam',
        description: 'Description for Magazine 5.',
        image: 'https://photo.znews.vn/w1000/Uploaded/kbfoplb/2025_06_14/moto_bay_155_copy.jpg',
        link: '/magazine/5',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-6',
        title: 'Át chủ bài của Israel, hiện đại hơn cả Vòm sắt',
        description: 'Description for Magazine 6.',
        image:
          'https://photo.znews.vn/w1000/Uploaded/sfrsm/2025_06_16/JQKPLHGUXVLKFEIMK2M6ERI6SU.jpeg',
        link: '/magazine/6',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-7',
        title: 'Chuyện chưa từng xảy ra với hoa hậu ở Việt Nam',
        description: 'Description for Magazine 7.',
        image: 'https://photo.znews.vn/w1000/Uploaded/wpdhnwhnw/2025_06_10/re_1.jpg',
        link: '/magazine/7',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
      {
        id: 'magazine-8',
        title: 'Israel tấn công Iran theo cách chưa từng có',
        description: 'Description for Magazine 8.',
        image:
          'https://photo.znews.vn/w1000/Uploaded/asfzyrwtys1/2025_06_19/NB6JQ62KIJKXVMNX3CTC646N2Q_11zon.jpg',
        link: '/magazine/8',
        category: 'LONGFORM',
        publishedAt: new Date('2025-07-01 09:00:00'),
      },
    ],
  },
  videos: {
    id: 'videos',
    title: 'Video',
    link: '/video',
    videos: [
      {
        id: 'video-1',
        title: 'Toàn cảnh cuộc điện đàm giữa Tổng Bí thư Tô Lâm và Tổng thống Mỹ',
        thumbnail: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_03/Laaaa.JPG',
        link: '/video/1',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Xã hội',
      },
      {
        id: 'video-2',
        title: 'Messi lừa qua 4 cầu thủ để ghi bàn',
        thumbnail:
          'https://photo.znews.vn/w210/Uploaded/bpivpawv/2025_07_06/2025_07_06T005422Z_1646888506_MT1USATODAY26593347_RTRMADP_3_MLS_INTER_MIAMI_CF_AT_CF_MONTREAL.JPG',
        link: '/video/2',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Thể thao',
      },
      {
        id: 'video-3',
        title: 'CSGT dùng xe đặc chủng đưa bé gái co giật trên cao tốc đến bệnh viện',
        thumbnail: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_01/Thumb.JPG',
        link: '/video/3',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Xã hội',
      },
      {
        id: 'video-4',
        title: 'Tích cóp cả năm đi du lịch Cát Bà thì gặp mưa lớn',
        thumbnail:
          'https://photo.znews.vn/Uploaded/uqvpvpiv/2025_06_30/TichgopcanamidulichCatBakieu_doNgHuong17taovoibannhacLanBanonxDuyenDoTroiPhanDoTacuaChiecvoicuaVoiBanon_ezgif.com_resize.gif',
        link: '/video/4',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Địa điểm du lịch',
      },
      {
        id: 'video-5',
        title: 'Thi công khẩn trương đường Vành đai 3 TP.HCM đoạn qua Bình Dương',
        thumbnail: 'https://photo.znews.vn/w210/Uploaded/zdhwqmjwq/2025_06_27/thumb.jpg',
        link: '/video/5',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Kinh doanh',
      },
      {
        id: 'video-6',
        title: 'Gấu xuất hiện trên đường băng, sân bay Nhật tê liệt nhiều giờ',
        thumbnail: 'https://photo.znews.vn/w210/Uploaded/gtntnn/2025_06_26/650.jpg',
        link: '/video/6',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Thế giới',
      },
      {
        id: 'video-7',
        title: 'Hơn 7.400 quân nhân và dân quân tự vệ hợp luyện nhiệm vụ A80',
        thumbnail: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_06_23/Nu.JPG',
        link: '/video/7',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Xã hội',
      },
      {
        id: 'video-8',
        title: 'Đồng Nai có gần 150 điểm giết mổ lậu',
        thumbnail: 'https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_06_25/Giet.JPG',
        link: '/video/8',
        videoURL:
          'https://video.znews.vn/c358b2bb9221c99c990b3be00934a5bc/686a2d82/2025_07_03/chientm/VID_MY.mp4',
        publishedAt: new Date('2025-07-01 09:00:00'),
        category: 'Xã hội',
      },
    ],
  },
};

export default homepageData;
