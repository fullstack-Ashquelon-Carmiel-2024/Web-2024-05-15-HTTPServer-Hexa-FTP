const songList = [
    {
        songName: "Aviinu Malkeinu",
        words: `אָבִינוּ מַלְכֵּנוּ
        חָנֵּנוּ וַעֲנֵנוּ;
        אָבִינוּ מַלְכֵּנוּ
        חָנֵּנוּ וַעֲנֵנוּ
        כִּי אֵין בָּנוּ מַעֲשִׂים.
        
        עֲשֵׂה עִמָּנוּ צְדָקָה וָחֶסֶד
        עֲשֵׂה עִמָּנוּ צְדָקָה וָחֶסֶד
        וְהושִׁיעֵנוּ.`,
        keywords: ['Rosh-ha-Shana','1 May','Tfila'],
        music: 'Folk Tune'
    },
    {
        songName: "Maoz Tzur",
        music: 'Folk tune',
        words: `מָעוֹז צוּר יְשׁוּעָתִי
        לְךָ נָאֶה לְשַׁבֵּחַ
        תִּכּוֹן בֵּית תְּפִלָּתִי
        וְשָׁם תּוֹדָה נְזַבֵּחַ
        לְעֵת תָּכִין מַטְבֵּחַ
        מִצָּר הַמְנַבֵּחַ
        אָז אֶגְמֹר בְּשִׁיר מִזְמוֹר
        חֲנֻכַּת הַמִּזְבֵּחַ`,
        keywords: ['Chanukkah','Mordechai']
    },
    {
        songName: "Leitzan Katan Nechmad",
        music: 'Sarah Levy-Tenai',
        keywords: ['Purim','Kids'],
        words: `לֵצָן קָטָן נֶחְמָד
        רוֹקֵד עִם כָּל אֶחָד.
        לֵצָן קָטָן שֶׁלִּי
        אוּלַי תִּרְקֹד אִתִּי?
        אוּלַי, אוּלַי, אוּלַי תִּרְקֹד אִתִּי?
        אוּלַי, אוּלַי, אוּלַי תִּרְקֹד אִתִּי?`
    },
    {
        songName: "Elyahu ha-Navi",
        words: `אֵלִיָּהוּ הַנָּבִיא
        אֵלִיָּהוּ הַתִּשְׁבִּי
        אֵלִיָּהוּ הַגִּלְעָדִי
        בִּמְהֵרָה יָבוֹא אֵלֵינוּ
        עִם מָשִׁיחַ בֶּן דָּוִד.`,
        keywords: ['Kids','Tfila'],
        music: 'Folk Tune'
    },
    {
        songName: "Rakefet",
        keywords: ['Levin Kipnis','Kids','Tu bi-Shvat','Flower','Nature'],
        words: `מִתַּחַת לַסֶּלַע צוֹמַחַת לְפֶלֶא
        רַקֶּפֶת נֶחְמֶדֶת מְאֹד,
        וְשֶׁמֶש מַזְהֶרֶת נוֹשֶׁקֶת, עוֹטֶרֶת,
        עוֹטֶרֶת לָהּ כֶּתֶר וָרֹד!
        
        רַקֶּפֶת, רַקֶּפֶת, צִפּוֹר מְצַפְצֶפֶת,
        הָצִיצִי אַךְ רֶגַע אֵלַי!
        רַקֶּפֶת נֶהְדֶּרֶת בַּסֶּלַע נִסְתֶּרֶת,
        נִסְתֶּרֶת מִנֶּפֶשׁ כָּל חַי!`,
        music: 'Folk Tune'
    },
    {
        songName: "Shaon Ben Hail",
        keywords: ['Levin Kipnis','Kids'],
        music: 'Moshe Vilenskii',
        words: `אֵיזֶה שָׁעוֹן בֶּן חַיִל?
        אֲשֶׁר אֵינֶנּוּ נָח!
        בַּיּוֹם וְגַם בַּלַּיִל
        דּוֹפֵק, דּוֹפֵק הוּא כָּךְ:
        
        טִיק-טַק, טִיק-טַק!
        דּוֹפֵק שָׁעוֹן בֶּן חַיִל
        בַּיּוֹם וְגַם בַּלַּיִל
        דּוֹפֵק, דּוֹפֵק הוּא כָּךְ:
        טִיק-טַק, טִיק-טַק,
        טִיק-טַק, טִיק-טַק, טִיק-טַק.`
    },
    {
        songName: "Shnei Shoshanim",
        keywords: ['Yakov Orland','Flower','Love'],
        words: `אָשִׁיר לָךְ שִׁיר עַתִּיק, נוֹשָׁן,
        אָשִׁיר לָךְ זֶמֶר עַל שׁוֹשָׁן,
        הָיֹה הָיוּ לִפְנֵי שָׁנִים
        שְׁנֵי שׁוֹשַׁנִּים, שְׁנֵי שׁוֹשַׁנִּים.
        הָיָה זֶה כְּבָר, רָחוֹק הַיּוֹם,
        אֶחָד לָבָן, שֵׁנִי אָדֹם.
        
        בְּנֵי-גַּן-אֶחָד, כִּשְׁנֵי אַחִים,
        צִמְּחוּ עָלֶה, צִמְּחוּ חוֹחִים,
        עֵת בָּא הַבֹּקֶר צְחוֹר גָּוָן
        פָּקַח עֵינַיִם הַלָּבָן.
        וְעֶרֶב בָּא וְרַד הַיּוֹם
        עָצַם עֵינַיִם הָאָדֹם.`,
        music: "Mordechai Zaira"
    },
    {
        songName: "Ani Purim",
        words: `אֲנִי פּוּרִים, אֲנִי פּוּרִים
        שָׂמֵחַ וּמְבַדֵּחַ
        הֲלֹא רַק פַּעַם בַּשָּׁנָה
        אָבוֹא לְהִתְאָרֵחַ
        
        רַבִּי פּוּרִים, רַבִּי פּוּרִים
        אֱמֹר נָא לִי מַדּוּעַ
        מַדּוּעַ לֹא יָחוּל פּוּרִים
        פַּעֲמַיִם בַּשָּׁבוּעַ
        
        הֵידָד פּוּרִים, הֵידָד פּוּרִים
        הַכּוּ תֹּף וּמְצִלְתַּיִם
        הוֹ מִי יִתֵּן וּבָא פּוּרִים
        לְחֹדֶשׁ לְחָדְשַׁיִם`,
        music: 'Nachum Nardi',
        keywords: ['Kids','Levin Kipnis','Purim']
    },
    {
        songName: "Chag Purim",
        keywords: ['Kids','Levin Kipnis','Purim'],
        words: `חַג פּוּרִים,
        חַג פּוּרִים,
        חַג גָּדוֹל הוּא לַיְּהוּדִים!
        מַסֵּכוֹת,
        רַעֲשָׁנִים,
        שִׁיר וְרִקּוּדִים!
        
        הָבָה נַרְעִישָׁה:
        רַשׁ-רַשׁ-רַשׁ!
        הָבָה נַרְעִישָׁה:
        רַשׁ-רַשׁ-רַשׁ!
        הָבָה נַרְעִישָׁה:
        רַשׁ-רַשׁ-רַשׁ!
        בָּרַעֲשָׁנִים!`,
        music: "Folk Tune"
    },
    {
        music: 'Yedidia Admon',
        words: `שׁוֹשַׁנַּת יַעֲקֹב
        צָהֲלָה וְשָׂמֵחָה
        בִּרְאוֹתָם יַחַד
        תְּכֵלֶת מָרְדְּכַי.
        
        תְּשׁוּעָתָם
        הָיִיתָ לָנֶצַח,
        תִּקְוָתָם
        בְּכָל דּוֹר וָדוֹר.
        בָּרוּךְ מָרְדְּכַי הַיְּהוּדִי.`,
        songName: "Shoshanat Yakov",
        keywords: ["Purim","Person"]
    },
    {
        music: 'Nurit Hirsh',
        words: `בַּשָּׁנָה הַבָּאָה נֵשֶׁב עַל הַמִּרְפֶּסֶת
        וְנִסְפֹּר צִפֳּרִים נוֹדְדוֹת
        יְלָדִים בְּחֻפְשָׁה יְשַׂחֲקוּ תּוֹפֶסֶת
        בֵּין הַבַּיִת לְבֵין הַשָּׂדוֹת.
        
        עוֹד תִּרְאֶה, עוֹד תִּרְאֶה
        כַּמָּה טוֹב יִהְיֶה
        בַּשָּׁנָה, בַּשָּׁנָה הַבָּאָה.`,
        songName: "BeShana Ha-Baa",
        keywords: [`Ehud Manor`,'Rosh-ha-Shana','Kids']
    },
    {
        music: 'Yedidia Admon',
        keywords: ['Bilha Yaffe','Pesach','Spring','Kids'],
        songName: "Simcha Raba",
        words: `שִׂמְחָה רַבָּה, שִׂמְחָה רַבָּה,
        אָבִיב הִגִּיעַ, פֶּסַח בָּא!
        שִׂמְחָה רַבָּה, שִׂמְחָה רַבָּה,
        אָבִיב הִגִּיעַ, פֶּסַח בָּא!
        
        תָּפְרוּ, תָּפְרוּ, תָּפְרוּ לִי בֶּגֶד עִם כִּיסִים.
        מִלְּאוּ, מִלְּאוּ, מִלְּאוּ כִּיסַי בֶּאֱגוֹזִים.`
    },
    {
        keywords: ['Ehud Manor'],
        songName: "Halvai",
        words: `הלוואי שלא נכאב ואיש אחיו יאהב
        הלוואי ויפתחו שוב שערי גן עדן
        הלוואי ויתמזגו מזרח ומערב
        הלוואי ונחדש ימינו כאן כקדם.`,
        music: 'Boaz Sharabi'
    },
    {
        songName: "Ner Li",
        keywords: ['Kids','Levin Kipnis','Chanukkah'],
        music: "Izhak Adel",
        words: `נֵר לִי, נֵר לִי, נֵר לִי דָּקִיק.
        בַּחֲנֻכָּה נֵרִי אַדְלִיק.
        בַּחֲנֻכָּה נֵרִי יָאִיר,
        בַּחֲנֻכָּה שִׁירִי אָשִׁיר.`
    },
    {
        songName: "Kad Katan",
        keywords: ['Aharon Ashman','Kids','Chanukkah'],
        words: `כַּד קָטָן, כַּד קָטָן,
        שְׁמוֹנָה יָמִים שַׁמְנוֹ נָתַן.
        כָּל הָעָם הִתְפַּלֵּא,
        מֵאֵלָיו הוּא מִתְמַלֵּא.
        
        כָּל הָעָם אָז הִתְכַּנֵּס
        וְהִכְרִיז: אַךְ, זֶהוּ נֵס!
        אִלּוּלֵא כַּד זֶה נִשְׁאַר
        מִקְדָּשֵׁנוּ לֹא הוּאַר.`,
        music: "Yoel Velba"
    },
    {
        keywords: ['Chanukkah','Kids','Chava Chaya Frenkel','Telma Elygon-Roz'],
        words: `הוֹי, חַנָּה זֶלְדָּה, אִשְׁתִּי הָאֲהוּבָה,
        חַג הַחֲנֻכָּה הִגִּיעַ וּבָא,
        וּבַחֲנֻכָּה נַפְשִׁי מָה חָשְׁקָה
        לֶאֱכֹל לְבִיבָה חַמָּה וּמְתוּקָה!
        
        הוֹי, רַבִּי קַלְמָן, אִישִׁי הַיָּקָר,
        אֶצְלִי בַּמִּטְבָּח קֶמַח לֹא נִשְׁאַר.
        בַּעֲלִי הַיָּקָר, וְאֵיךְ זֶה אוּכַל
        לְהָכִין לְבִיבָה בְּלִי קֶמַח בִּכְלָל?`,
        music: 'Drora Havkin',
        songName: "Maase be-Levivot"
    }
];