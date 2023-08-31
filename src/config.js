var config = {
    style: 'mapbox://styles/soosdavid/cllqwo97o008d01nzg0a68ii5',
    accessToken: 'pk.eyJ1Ijoic29vc2RhdmlkIiwiYSI6ImNsa2dzdXF4MzAzeHgzbWtldXUwd2xmam0ifQ.qD3EymMISpst4I56PAcY8w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans-serif; background-color: #ffffff; padding: 0.5vh; border-radius: 10px; color:#000000; font-size:1.2rem" >Educația</span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#ffffff; font-size:2.3rem" >INTERACTIV | Idei, abordări, atitudini: sistemele de educație pe glob</span>',
    byline: 'Soós Dávid <p> <img src="./scroll.png"> </p> <p> scroll </p>',
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '.png',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Tema educației este una dintre cele mai des dezbătute probleme de toate nivelurile societății. Cu toții trecem peste această etapă a vieții, și datorită interconectivității și a dialogului la nivel global, ne putem împărtăși experiența, părerile sau eventualele frământări legate de sistemul în care am învățat (și nu numai).',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            alignment: 'center',
            hidden: false,
            title: '<h3>OCDE și Testele PISA</h3>',
            image: 'images/logo_OECD.jpg',
            description: '<a target="_blank" href="https://www.oecd.org/about/">Organizația pentru Cooperare și Dezvoltare Economică</a> stă de mai bine de 20 de ani în spatele testării la nivel global al elevilor în vârstă de 15 ani, aflați în clasa a IX-a, a X-a sau a XI-a, după caz. Participanții în ultima ediție au fost statele membre, statele în curs de aderare <a target="_blank" href="https://www.mae.ro/node/1481">(aici se încadrează și România)</a>, respectiv niște parteneri, în total 79 de țări. Scopul proiectului este de a raporta tendințele și progresele legate de învățământ și de a analiza cum se îmbină aptitudiniile elevilor cu factori demografici, sociali, economici și educaționali.',
            location: {
                center: [8.255119, 42.525963],
                zoom: 5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Testările trienale PISA au început în anul 2000, iar ultima ediție, cu datele procesate și publicate, este cea din 2018. <a target="_blank" href="https://www.oecd.org/pisa/data/2018database/">Chestionarele</a> se adresează atât copiilor, cât și mediului lor înconjurător (părinți, profesori, directori) și culeg nu numai date despre abilitatea lor de a citi, a înțelege, a interpreta sau a rezolva probleme, ci și despre bunăstarea sau aspirațiile lor în carieră.',
            location: {
                center: [2.269630, 48.861190],
                zoom: 10,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'În prima fază, din fiecare țară sunt selectate cel puțin 150 de școli, care contribuie în jur de 42 de elevi din populația țintă. Cei selectați sunt atribuiți cu ponderi, astfel încât rezultatele să poată fi scalate pe toată populația de copii de 15 ani în învățământ. În anul 2018 aproximativ <span class="highlight">600.000</span> de elevi au participat la PISA, din rezultatele cărora au fost deduse informații legate de situația a <span class="highlight">32 milioane</span> de elevi de 15 ani!',
            location: {
                center: [2.269630, 48.861190],
                zoom: 15,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/14850823/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14850823/?utm_source=embed&utm_campaign=visualisation/14850823" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [2.269630, 48.861190],
                zoom: 18,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'center',
            hidden: false,
            title: '<h3>Inventorii testelor standardizate pe primul loc</h3>',
            image: '',
            description: 'În timpul dinastiei Han (206 BC – 220 AD) al Chinei Imperiale <a target="_blank" href="https://www.britannica.com/topic/Chinese-civil-service">este introdusă testarea standardizată</a> pentru a determina aptitudinea candidaților la funcții publice, pentru prima oară în lume. Două milenii mai târziu Beijing, Shanghai, Jiangsu și Zhejiang urcă pe primul loc al clasamentului PISA. Probabil nu este de mirare faptul că următorele trei state sunt Singapore, Macao și Hong Kong, toți din Asia Orientală. Succesul acestor state și regiuni poate fi datorat, în mare parte atitudinii serioase față de tot ceea ce înseamnă lectură. În 2015 teritoriile chineze raportau în chestionarul de bunăstare că <span class="highlight">40% din elevii de 15 studiau minim 60 de ore pe săptămână</span>.',
            location: {
                center: [121.034859, 14.418530],
                zoom: 5,
                pitch: 50,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description:' <a target="_blank" href="https://documents1.worldbank.org/curated/en/876861593415668827/pdf/East-Asia-and-Pacific-Regional-Brief-Programme-for-International-Student-Assessment-PISA-2018.pdf">Datele din Asia de Est ne arată</a> că cel mai de influență factor în regiune este statutul socio-economic. Cei avantajați din acest punct de vedere, au în medie, un scor cu <span class="highlight">75 de puncte</span> mai mare la proba de Citire. Aproape jumătate dintre elevii chinezi se încadrează în Nivelul 5 sau 6 la măcar o probă, iar aprope nimeni nu este lăsat în urmă, cu numai 1,1% din copii de 15 ani neatingând nivelul de competență minimă la toate trei probe.',
            location: {
                center: [116.407394, 14.418530],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Procentajul elevilor lăsați în urmă" aria-label="Map" id="datawrapper-chart-Qlj23" src="https://datawrapper.dwcdn.net/Qlj23/1/" scrolling="no" frameborder="0" style="border: none;" width="600" height="438" data-external="1"></iframe>',
            location: {
                center: [116.407394, 14.418530],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'right',
            hidden: false,
            title: '<h3>Programul Semestrului de Învățare Liberă</h3>',
            image: '',
            description:'În ciuda faptului că sistemul bine-cunoscut din zonă aduce rezultate, Coreea de Sud a decis să piloteze un proiect inovativ, anume <a target="_blank" href="https://www.oecd.org/education/career-readiness/Example%20of%20Practice,%20Korea,%20Free%20Semester%20Programmepdf.pdf">Programul Semestrului de Învățare Liberă</a>. Elevii au putut să petreacă o jumătate de an fără grija testelor, învățând numai 21 de ore, în loc de 33, în modul obișnuit. În timpul râmas, puteau să aleagă dintre activitâți prin care învățau pe bază pe muncă, inclusiv implicarea în comunitatea locală, programe sportive și artistice. Singurul criteriu era ca școala să accepte. Inițiativa a fost un succes atât de mare, încât aceasta a fost adoptată la nivel național în marea majoritate a gimnaziilor.',
            location: {
                center: [127.814529, 35.965031],
                zoom: 5,
                pitch: 10,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: '<h3>Abordări diferite, rezultate comparabile</h3>',
            image: '',
            description: 'Ceea ce a părut ieșit din comun, progresiv în Asia, este un semestru oarecare pentru finlandezi, care nu folosesc aproape deloc testele ca unelte pentru a măsura competențele elevilor. Atitudinea relaxată și orientată mai mult spre curiozitate și echilibru studii - timp liber, este atestată și de datele PISA. <span class="highlight">Numai 4,1% din elevii de 15 ani petrec mai mult decât 60 de ore pe săptămână învățând</span>.',
            location: {
                center: [23.748152, 60.924110],
                zoom: 5,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Chiar și Examenul de Matriculare (versiunea finlandeză a Bacalaureatului) este neobișnuit. Acesta este ținut în fiecare an de două ori, în primăvară și în toamnă, iar elevii pot să încerce oricare probă în trei perioade consecutive de examinare. Numai limba maternă este obligatorie, restul, minim 4 subiecte trebuie alese din cel puțin trei dintre posibilele grupuri: matematică, a doua limbă oficială a țării, limbi străine, științe umaniste sau ale naturii. Recordul pentru cele mai multe probe reușite cu calificativul maxim (laudatur) este 12, obținut în anul 2016.',
            location: {
                center: [23.748152, 60.924110],
                zoom: 5,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Din Europa, numai rezultatele Estoniei la PISA îi întrec pe ale Finlandei, care în același timp este și fruntașul membrilor OCDE. Elevii estoni sunt cei mai optimiști în privința progresului prin educație, 77% dintre ei crezând că <span class="highlight">inteligența este schimbabilă</span>.',
            location: {
                center: [24.753574, 59.436962],
                zoom: 10,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Succesul țării izvorăște din autonomia școlilor în a determina curriculumul, și nu numai. Directorii sunt responsabili pentru atribuirea bugetului, dar și pentru angajarea, evaluarea și după caz concedierea profesorilor. Competiția între școlile municipale pentru a atrage fonduri este un alt factor important. Acestea primesc finanțare pe baza numărului de elevi, astfel le este în interes să ofere educație de cea mai înaltă calitate și să aibă clase cât mai pline. Îmbinând acest fapt cu <a target="_blank" href="https://www.oecd.org/about/">scăderea de 15% a populației estone</a> în ultimii 30 de ani, se conturează un sistem competitiv, care răsplătește inovația și condamnă indiferența.',
            location: {
                center: [24.741340, 59.430190],
                zoom: 14,
                pitch: 20,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/14871050/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14871050/?utm_source=embed&utm_campaign=visualisation/14871050" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [24.753574, 59.436962],
                zoom: 10,
                pitch: 30,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'center',
            hidden: false,
            title: '<h3>Asistenți sociali, asistenți medicali, bibliotecari, funcționari sau medici?</h3>',
            image: '',
            description: 'Această întrebare a fost pusă de The Global Teacher Status Index 2018 în 35 de țări pentru a afla atitudinea oamenilor față de profesori. În China, Malaysia și Rusia, oamenii percep munca unui profesor asemănătoare cu munca unui medic, în timp ce publicul din jumătatea statelor studiate a optat pentru opțiunea de asistent social. Din răspunsuri reiese nu numai ce poziție ocupă dascălii în ierarhiile sociale, ci și părerea oamenilor în legătură cu salarizarea acestora. Cercetarea conclude că remunerația cadrelor didactice, respectul față de meserie în societate și rezultatele PISA se află în strânsă legătură.',
            location: {
                center: [46.825038, 103.849973],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Media salariilor profesorilor raportat la salariul minim pe economie, 2021" aria-label="Map" id="datawrapper-chart-Awx49" src="https://datawrapper.dwcdn.net/Awx49/1/" scrolling="no" frameborder="0" style="border: none;" width="600" height="700" data-external="1"></iframe>',
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 10,
                bearing: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Progresul este forța, care îndeamnă orice om să fie motivat, să continue un obicei sau să capete avânt într-o și mai mare măsură. Niciun antreprenor nu ar continua să-și construiacă afacerea, dacă nu ar avea, măcar în fața ochilor spirituali, posibilitatea avansării viitoare. Niciun sportiv nu ar da tot ce poate, dacă nu ar spera din tot sufletul la atingerea scopurilor sale. Sunt mulți factori care determină dacă vocația stârnește sau nu un sentiment de împlinire, și acestea diferă de la om la om, însă nu mulți oameni își permit să ignore complet latura financiară a meseriei lor. În mod special, dacă obținerea postului implică mai mulți ani de studiu.',
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 20,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/14847763/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="yes" style="width:100%;height:1000px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14847763/?utm_source=embed&utm_campaign=visualisation/14847763" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [15.9622315, 45.8426414],
                zoom: 5,
                pitch: 20,
                bearing: 20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
/*
        {
            id: '2',
            alignment: 'center',
            hidden: false,
            title: 'Date despre testele PISA',
            image: '',
            description: 'Vietnam este fruntas la tyestele PISA <iframe src="https://flo.uri.sh/visualisation/14532444/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14532444/?utm_source=embed&utm_campaign=visualisation/14532444" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [108.277199, 14.058324],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'Date despre testele PISA',
            image: '',
            description: 'Vietnam este fruntas la tyestele PISA <iframe src="https://flo.uri.sh/visualisation/14532850/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder=0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/14532850/?utm_source=embed&utm_campaign=visualisation/14532850" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [23.589920, 46.770920],
                zoom: 7,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Date despre testele PISA',
            image: '',
            description: '<iframe title="Evolutia investitiei in educatie" aria-label="Interactive area chart" id="datawrapper-chart-uh9Sa" src="https://datawrapper.dwcdn.net/uh9Sa/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="400" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>',
            location: {
                center: [19.040236, 47.497913],
                zoom: 7,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/



    ]
};
