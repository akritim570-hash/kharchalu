const data = [
    {
        "id": 1,
        "name": "Amra Kojon Club Puja Committee",
        "bengali_name": "আমরা কজন ক্লাব পুজো কমিটি",
        "area": "Bishnupur (বিষ্ণুপুর)",
        "location": "https://maps.app.goo.gl/bKHbYQ9aCmx9Hyyd9?g_st=aw"
    },
    {
        "id": 2,
        "name": "Sosan Ghat Puja Committee",
        "bengali_name": "শ্মশান ঘাট পুজো কমিটি",
        "area": "Khagra (খাগড়া)",
        "location": "https://maps.app.goo.gl/GSc6ufGNJTv4U4TK6?g_st=aw"
    },
    {
        "id": 3,
        "name": "Nabarup Sanga Puja Committee",
        "bengali_name": "নবরূপ সংঘ পূজা কমিটি",
        "area": "Saidabad (সৈদাবাদ)",
        "location": "https://maps.app.goo.gl/edetfbtejsEpkFh5A?g_st=aw"
    },
    {
        "id": 4,
        "name": "Amra Tola Durga Puja Committee",
        "bengali_name": "আমড়াতলা দুর্গাপুজো কমিটি",
        "area": "Saidabad (সৈদাবাদ)",
        "location": "https://maps.app.goo.gl/qA1oVQFwko9svbE39?g_st=aw"
    },
    {
        "id": 5,
        "name": "Swargadham Durga Puja Committee",
        "bengali_name": "স্বর্গধাম দুর্গা পূজা কমিটি",
        "area": "Khagra (খাগড়া)",
        "location": "https://maps.app.goo.gl/XVBinsn2V1XjxDBr5?g_st=aw"
    },
    {
        "id": 6,
        "name": "Radha Govindo Mandri Puja Committee",
        "bengali_name": "রাধা গোবিন্দ মন্দির পূজা কমিটি",
        "area": "Khagra (খাগড়া)",
        "location": "https://maps.app.goo.gl/SAVByUUBSuFgE3aH9?g_st=aw"
    },
    {
        "id": 7,
        "name": "Purbochol Para Puja Committee",
        "bengali_name": "পূর্বাচল পাড়া পূজা কমিটি",
        "area": "Mollaghara (মোল্লাঘাড়া)",
        "location": "https://maps.app.goo.gl/2g9EL6nSND3RCmuE9?g_st=aw"
    },
    {
        "id": 8,
        "name": "Hari Babur Dhalu Puja Committee",
        "bengali_name": "হরি বাবুর ঢালু পূজা কমিটি",
        "area": "Khagra (খাগড়া)",
        "location": "https://maps.app.goo.gl/L2M9aLvw9XNASYtp6?g_st=aw"
    },
    {
        "id": 9,
        "name": "Bhattacharya Para Puja Committee",
        "bengali_name": "ভট্টাচার্য পাড়া পূজা কমিটি",
        "area": "Khagra (খাগড়া)",
        "location": "https://maps.app.goo.gl/h84ZEfofv1dpNfNaA?g_st=aw"
    },
    {
        "id": 10,
        "name": "Uma Sundori Park Puja Committee",
        "bengali_name": "উমা সুন্দরী পার্ক পূজা কমিটি",
        "area": "Gorabazar Krishnanth College (গোরাবাজার কৃষ্ণনাথ কলেজ)",
        "location": "https://maps.app.goo.gl/yMFUnJETswh53eM2A?g_st=aw"
    },
    {
        "id": 11,
        "name": "Zamindari Para Puja Committee",
        "bengali_name": "জমিদারি পাড়া পূজা কমিটি",
        "area": "Gorabazar Sosan (গোরাবাজার শ্মশান)",
        "location": "https://maps.app.goo.gl/L3rehFqyaQACh2wY9?g_st=aw"
    },
    {
        "id": 12,
        "name": "Ayodhya Nagar Puja Committee",
        "bengali_name": "অযোধ্যা নগর পূজা কমিটি",
        "area": "Haridasmati Mankara (হরিদাসমাটি মানকারা)",
        "location": "https://maps.app.goo.gl/gfoSwJkDcsd4buV56?g_st=aw"
    },
    {
        "id": 13,
        "name": "Haridasmati (unknown)",
        "bengali_name": "হরিদাসমাটি পূজা কমিটি",
        "area": "Haridasmati (হরিদাসমাটি)",
        "location": "https://maps.app.goo.gl/pMJr18aLQb3LgQ3X6?g_st=aw"
    },
    {
        "id": 14,
        "name": "Haridasmati Aikyatan Sangha Puja Committee",
        "bengali_name": "হরিদাসমাটি ঐক্যতান সংঘ",
        "area": "Haridasmati (হরিদাসমাটি)",
        "location": "https://maps.app.goo.gl/a79wkLxRsd4BhSXy6?g_st=aw"
    },
    {
        "id": 15,
        "name": "Horisoba Puja Committee",
        "bengali_name": "হরিসভা পূজা কমিটি",
        "area": "Gorabazar Ukilpara (গোরাবাজার উকিলপাড়া)",
        "location": "https://maps.app.goo.gl/Zw3yh7vT5LPFYEvw7?g_st=aw"
    },
    {
        "id": 16,
        "name": "Ukilpara Durga Puja Committee",
        "bengali_name": "উকিলপাড়া দুর্গা পূজা কমিটি",
        "area": "Gorabazar Ukilpara (গোরাবাজার উকিলপাড়া)",
        "location": "https://maps.app.goo.gl/zYTaJ5i9687Tim687?g_st=aw"
    },
    {
        "id": 15,
        "name": "Kishan Ghosh Yadav Raksha Kali Mandir Puja Committee",
        "bengali_name": "কিষাণ ঘোষ যাদব রক্ষা কালি মন্দির পূজা কমিটি",
        "area": "Gorabazar (গোরাবাজার)",
        "location": "https://maps.app.goo.gl/h33U2ASo5XZtyJRa6?g_st=aw"
    },
    {
        "id": 16,
        "name": "Abhyudaya Sangha Puja Committee",
        "bengali_name": "অভ্যুদয় সংঘ পূজা কমিটি",
        "area": "Gorabazar Medical College (গোরাবাজার মেডিকেল কলেজ)",
        "location": "https://maps.app.goo.gl/RKmwUxMaGAs371kD9?g_st=aw"
    },
    {
        "id": 17,
        "name": "Babulbona Durga Puja Committee",
        "bengali_name": "বাবুলবনা দুর্গা পূজা কমিটি",
        "area": "Bishnupur (বিষ্ণুপুর)",
        "location": "https://maps.app.goo.gl/TeuDrmsKkoNfmB9c6?g_st=aw"
    },
    {
        "id": 18,
        "name": "Balak Sangha Puja Committee",
        "bengali_name": "বালক সংঘ পূজা কমিটি",
        "area": "Bishnupur Road (বিষ্ণুপুর রাস্তা)",
        "location": "https://maps.app.goo.gl/E69i7qTamvanTWw67?g_st=aw"
    },
    {
        "id": 19,
        "name": "Anami Club Durga Puja Committee",
        "bengali_name": "অনামী ক্লাব দুর্গা পূজা কমিটি",
        "area": "Bishnupur School (বিষ্ণুপুর স্কুল)",
        "location": "https://maps.app.goo.gl/Rz2ctixyGy7ygWJh6?g_st=aw"
    },
    {
        "id": 20,
        "name": "Kuheli Sangha Puja Committee",
        "bengali_name": "কুহেলী সংঘ পূজা কমিটি",
        "area": "Saidabad (সৈদাবাদ)",
        "location": "https://maps.app.goo.gl/stcm16f9RKk7qKpA6?g_st=aw"
    },
    {
        "id": 21,
        "name": "Dayanagar Pagla Baba Mandir Puja Committee",
        "bengali_name": "দয়ানগর পাগলা বাবা মন্দির পূজা কমিটি",
        "area": "Dayanagar (দয়ানগর)",
        "location": "https://maps.app.goo.gl/Ro5M2DQjvZf1yQe66?g_st=aw"
    },

]