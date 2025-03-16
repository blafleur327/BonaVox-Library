let lib = [];


/**
 * Create a new instance of the Work class, added automatically to the library array.
 * @param {string} title e.g. 'Ave Maria'
 * @param {string} composer Last, First; Last, First e.g. 'Doe, Jane K.; Smith, John F'
 * @param {string} arranger Last, First e.g. 'Doe, Jane K.'
 * @param {string} voicing e.g. SSAATTBB
 * @param {string} usage e.g. Mass Setting
 * @param {string} link '{link in BonaVox Google Drive}'
 */
function Work(title,composer,arranger,voicing,usage,link) {
    this.title = title;
    /**
     * Method to divide multiple composers into an array of objects with 'Last, First'
     */
    let divider = () => {
        let result = [];
        /**
         * Multiple Composers listed
         */
        if (composer.indexOf(';') !== -1) {
            let div = composer.split(';');
            div.forEach(entry => {
                let obj = {
                    'Last': entry.indexOf(',') !== -1? entry.split(',')[0].trim() : null,
                    'First': entry.indexOf(',') !== -1? entry.split(',')[1].trim() : entry,
                }
                result.push(obj);
                composerConcat+=`${obj['First']} `;
                composerConcat+=`${obj['Last']}; `;
            })
        }
        /**
         * Single Composer
         */
        else {
            let obj = {
                'Last': composer.indexOf(',') !== -1? composer.split(',')[0].trim() : null,
                'First': composer.indexOf(',') !== -1? composer.split(',')[1].trim() : composer,
            }
            composerConcat+=`${obj['First']} `;
            composerConcat+=`${obj['Last']} `;
            return obj;
        }
        return result;
    }
    let composerConcat = '';
    this.composer = divider();
    this.arranger = {
        'Last': arranger? arranger.split(',')[0].trim() : null,
        'First': arranger? arranger.split(',')[1].trim() : 'N/A',
    }
    this.voicing = voicing;
    this.usage = usage;
    this.link = link;
    this.stringRep = `${this.title}|${composerConcat}|${this.arranger['First']} ${this.arranger['Last']}|${this.usage}|${this.voicing}`;
    /**
     * Returns true if this object shares a link with another.
     * @returns boolean
     */
    let duplicate = () => {
        let isDuplicate = false;
        lib.forEach(entry => {
            isDuplicate = entry.link === this.link? true : false;
        })
        return isDuplicate;
    }
    duplicate() == false? lib.push(this) : console.error('ITEM IS DUPLICATE!');
}

//Add works here.

new Work('Ave Maria','Memley, Kevin',undefined,'SSAATTBB','Marian Anthem','https://drive.google.com/file/d/1DQa3Yi-kygYFR0TQDPwbuROWi2SQPrzO/view?usp=drive_link');
new Work('Ave Maria','Arcadelt, Jacob',undefined,'SATB','Marian Anthem','https://drive.google.com/file/d/1t0z3fCEW_96NXpfDxEzheMxqRunIDCBW/view?usp=drive_link');
new Work ('Ave Verum Corpus','Byrd, William',undefined,'SATB','Communion/General','https://drive.google.com/file/d/1RxMGwvRKU6QOejt5VtY0_MB7_cKc5R7B/view?usp=drive_link');
new Work('Domine Deus','Caldarella, David',undefined,'SSAATTBB','General','https://drive.google.com/file/d/1_Dpwuq-Bb_d4ICzPnLvwxtdLVdGl5MoB/view?usp=drive_link');
new Work('Auld Lang Syne','Earley, Desmond',undefined,'SSAATTBB','Epiphany/New Year','https://drive.google.com/file/d/1A9YY78B7Bur8j_KXDFjHNUpau4kIfGXa/view?usp=drive_link');
new Work('An Irish Blessing','Moore, James',undefined,'SATB','General/Sending Forth','https://drive.google.com/file/d/1GduI0R6COg2TlbgFfWrpdoX7tZRUOAgO/view?usp=drive_link');
new Work('Softly','Todd, Will',undefined,'SSATBB','Advent','https://drive.google.com/file/d/1IJN9OM9TXRXnHMwJJXUmLaCYo2j8F96P/view?usp=drive_link')
new Work('Alma Redemptoris Mater','Palestrina, G.P.',undefined,'SATB','Marian','https://drive.google.com/file/d/1uOBjIj7BU9daAVeOtgX5Ur4iCKpMOVC_/view?usp=drive_link');
new Work('Away','Burrows, Mark',undefined,'SSATBB','Christmas/Epiphany','https://drive.google.com/file/d/19vQtmZ3EqY3rzt6F3N6UideA7Kx8QORN/view?usp=drive_link');
new Work('Let All Mortal Flesh Keep Silence','Bairstow, Edward',undefined,'SSAATTBB','General','https://drive.google.com/file/d/1vgJjOPHO4A3ssb7HnK-RCVkNvf9Zm80K/view?usp=drive_link');
new Work('An Evening Hymn','Tallis, Thomas',undefined,'SATB','Vespers/Evening','https://drive.google.com/file/d/1bRZZyzfd1bwfG_hFjCd0SdLthXd1qb2M/view?usp=drive_link');
new Work('If Ye Love Me','Tallis, Thomas',undefined,'SATB','General','https://drive.google.com/file/d/1Ungbfg9q8jMZlmBvM8VNqCHWdhEJMvB2/view?usp=drive_link');
new Work('Bring me all your dreams','Harris, Christopher H.',undefined,'SSATBB','Night/Comfort','https://drive.google.com/file/d/18NrE6iRpV6yxN6F6H4sMypU-EZyidRHg/view?usp=drive_link');
new Work('Dona Nobis Pacem','Butler, Mark',undefined,'SSAATTBB','Peace/Comfort','https://drive.google.com/file/d/1BGWT5lXmuz7cZvhcpr0idrmy1_APzoXs/view?usp=drive_link');
new Work('Go Tell it on the Mountain','Traditional','Larson, Lloyd','SSATB','Epiphany','https://drive.google.com/file/d/1sR5ikcnr-GYYQWpLpdmrdm1iBiseYNEn/view?usp=drive_link');
new Work('God So Loved the World','Stainer, John',undefined,'SATB','General','https://drive.google.com/file/d/1zMBY_2R7SJdU5QTwV7mCZUAXEiIAgON6/view?usp=drive_link');
new Work('A Round of Praise','Marshall, Jane M.',undefined,'SAB','Praise/Thanksgiving','https://drive.google.com/file/d/1PXv8zeT46hOY2SG7FC76fQrglSw_-ycC/view?usp=drive_link');
new Work(`Ain't That-A Rockin'`,'Traditional','Gibbs, Stacey V.','SSAATBB','General','https://drive.google.com/file/d/1Hrpr3eNimwiA1Y6A1sYIcovM3B0zxI8c/view?usp=drive_link')
new Work('Alfred Burt Carols Set II','Burt, Alfred',undefined,'SSATBB','Christmas','https://drive.google.com/file/d/19S9cVQOQfFBcmgHTQXC1bPayCjeR2Me4/view?usp=drive_link');
new Work('All on a Starry Night','Graham, Joseph',undefined,'SAATTBB','Christmas','https://drive.google.com/file/d/1I1Bcrv3N-xz8Aoyo3ZrXep2GKGYscYT_/view?usp=drive_link');
new Work('Alleluia','Fajardo, Javier',undefined,'SSAATTBB','Praise/Thanksgiving','https://drive.google.com/file/d/1LHjpBsRXpsIHhYetd3_QPUXIdabw_STs/view?usp=drive_link')
new Work('Ave Maria Angelus Domini','Biebl, Franz',undefined,'SAATTBB','Marian','https://drive.google.com/file/d/10hMYibZx41NTd22cHMjXCjFj-XnsiC69/view?usp=drive_link');
new Work('beautiful out here','Tran, Dylan',undefined,'SATB','General','https://drive.google.com/file/d/1krtVJgKfE46Li4MhTQJrk4PaxV3vTFN5/view?usp=drive_link')
new Work('Bound for Jubilee','Eilers, Joyce Elaine',undefined,'TTBB','Hope/Afterlife','https://drive.google.com/file/d/15yyLA40SFH8FaOTNqUFOsbla-ofvqJ4c/view?usp=drive_link');
new Work('Breakaway','Clarkson, Kelly','Davies, Kenter','SSAATTB','Pop','https://drive.google.com/file/d/1UV5aAmyvA1lY9cOBenJRwR48Qnp_GGHT/view?usp=drive_link');
new Work('Bright Morning Stars','Traditional','Parker, Alice','SATB','Celestial/Mourning','https://drive.google.com/file/d/1jsCOBGpCR0dbB15vF1ciA-mjQzpAlGxa/view?usp=drive_link');
new Work(`Can't Help Falling in Love`,'Weiss, George David; Peretti, Hugo; Creatore, Luigi ','Billingsly, Adam','SATBB','Pop','https://drive.google.com/file/d/1cM6I7v8pzJO1ze3-kcVVudjXkE4jk7ys/view?usp=drive_link');
new Work('Come Holy Ghost','Palestrina, G.P.','Roberts, J. Varley','SATB','Pentecost','https://drive.google.com/file/d/1cdj1t2cDEYXjIlPN8MIQAAYYoWXMpgEI/view?usp=drive_link');
new Work('How Can I Cry?','Smiley, Moira',undefined,'SAAATB','General','https://drive.google.com/file/d/1V9Vv-GdrbkLVqZVrcqwbi8vKWderQMXK/view?usp=drive_link');
new Work('It was a lover and his lass','Rutter, John',undefined,'SATBB','General/Vocal Jazz','https://drive.google.com/file/d/1cLVOg89OeeEvNEKNmMGkZoy30ZrwGXdi/view?usp=drive_link');
new Work('You Are My Sunshine','Davis, Jimmie; Mitchell, Charles','Emmett, Andrew','SATB','Louisiana','https://drive.google.com/file/d/1ueUO7pLzW9uvWtOYqzD1D9mdzA7_a8xp/view?usp=drive_link');
new Work('Hallelujah','Cohen, Leonard','Brymer, Mark','SSAATTBB','Pop','https://drive.google.com/file/d/1AHwEsQ2gDsA9A10lKlQF7TlXr2ypaq-K/view?usp=drive_link');
new Work('Hodie Christus Natus Est','Cooke, Phillip',undefined,'SATB','Christmas','https://drive.google.com/file/d/1X2nRBTmTU2MJLxVX6EE1FTRNVPj8p68X/view?usp=drive_link');
new Work('Deck the Halls in 7/8','McKelvy, James',undefined,'SATB','Christmas','https://drive.google.com/file/d/1EMIpJDDXTV9TIvUWwit8ttstlPgo2ljm/view?usp=drive_link');
new Work('Heavenly Light','Wilhousky, Peter J.',undefined,'SATB','Praise','https://drive.google.com/file/d/1A-n54CTdZCBrfRxJPKnn1fVqbxwM68sn/view?usp=drive_link');
new Work('Locus Iste','Bruckner, Anton',undefined,'SATB','Dedicaton of Church/General','https://drive.google.com/file/d/1Ham6hAtQtoK3BK2pwgXF1zLhp1V74hyP/view?usp=drive_link');
new Work('McKay','Denton, S.M.','Barnett, Carol','SSAATTBB','General','https://drive.google.com/file/d/1HKm1L61XlcHvNA47WIa4RF3pBF4mZR2v/view?usp=drive_link');
new Work('My Flight for Heaven','Henson, Blake',undefined,'SSAATTBB','Funeral/Mourning','https://drive.google.com/file/d/1oiM5GDhYjBOwasOh-fXfjTkA6NQUW8gs/view?usp=drive_link');
new Work('We Shall Walk Through the Valley in Peace','African American Spiritual','Moore, Undine Smith','SATBB','General','https://drive.google.com/file/d/1nrWTthlD-fLHeybE-jMH0vJ9DPOgNNWM/view?usp=drive_link');
new Work('Unclouded Day','Alwood, Rev. J.K.','Kirchner, Shawn','SSAATTBB','Afterlife/Joy','https://drive.google.com/file/d/1RZbEvU-P01AQzJEQzRDOP6wwv0_lsw5e/view?usp=drive_link');
new Work('What Comfort Can Our Worship Bring','Henson, Blake',undefined,'SSATB','Prayer','https://drive.google.com/file/d/1jyAXA2-BMBWbVO0dZPnzPcZ37XPmpWS1/view?usp=drive_link');
new Work('Ubi Caritas','Durufle, Maurice',undefined,'SATBB','Gathering/General','https://drive.google.com/file/d/1xlmr7eTRg8DP20QT2X7mgf0gJBfwXS66/view?usp=drive_link');
new Work('Ubi Caritas','Gjeilo, Ola',undefined,'SSATB','Gathering/General','https://drive.google.com/file/d/1sjSfT0cjjkzWX2FzE30A9HOBpaq6H6Vt/view?usp=drive_link');
new Work('Gaudete','Anonymous',undefined,'SATB','Joy/Christmas','https://drive.google.com/file/d/1DGPgNOhVXe1CUzLAsOP5WVmcSu1_uNKe/view?usp=drive_link');
new Work('Do You Know What It Means to Miss New Orleans','DeLange, Eddie; Alter, Louis','Edgerton, Robert','SSSATB','Louisiana','https://drive.google.com/file/d/1Y190YLSgpVqKklkZufajw6FJBaTLw-cT/view?usp=drive_link');
new Work('Lead, Kindly Light','Sullivan, Michael',undefined,'SATB','Mourning/Hope','https://drive.google.com/file/d/1ZltdDjEIckvRIIZltQTzpVgONPo55LxT/view?usp=drive_link');
new Work('Wannabe: As an English Madrigal','Halliwell, Geri; Bunton, Emma; Brown, Melanie; Adams, Victoria; Chrisholm, Melanie; Rowebottom, Matthew; Stannard, Richard','Howe, Nathan','SATB','Pop','https://drive.google.com/file/d/1CLZs-l0-8-Og_D7mcrG0zudx6DADaGaB/view?usp=drive_link');
new Work('Three Kings From Persian Lands Afar','Cornelius, Peter','Atkins, Sir Ivor','SATBB','Epiphany','https://drive.google.com/file/d/1LFKZiIiH05FkvAXLq_E3PwNIzRM9A9cT/view?usp=drive_link');
new Work('Hush','Traditional Spiritual','Gibbs, Stacey V.','SSATB','Heaven','https://drive.google.com/file/d/1FeH4XHwSmdi0tUQPAIPyxibPDmCvTz_b/view?usp=drive_link');
new Work('Ave Regina Caelorum','Leonarda, Isabella',undefined,'SATB','Marian','https://drive.google.com/file/d/1a53IsIGxP5VxPyxzQNjZGVN4q5MeLC4b/view?usp=drive_link');
new Work('Witness','Traditional Spiritual','Dandridge, Damon','SSAATTBB','Spiritual','https://drive.google.com/file/d/1iLVBg98wQGdzy--0UlrB7UtMKM_urfrc/view?usp=drive_link');
new Work('Words','Edenroth, Anders',undefined,'SSAATTBBB','Pop','https://drive.google.com/file/d/1vBgNJWRew9OchwppdSQCeiLkpcJB-p80/view?usp=drive_link');
new Work('The Dreams of the Dreamer','Walters, David',undefined,'SSAATBB','Contemporary','https://drive.google.com/file/d/1DAFA6p_YGirRGucvx_Naqdonq1qaleg0/view?usp=drive_link');
new Work('Still With Thee','Hagenberg, Elaine',undefined,'SSAATTBB','Comfort','https://drive.google.com/file/d/16TKgKKQgqO7nnrU9xIucEbQ_HkCWPuR2/view?usp=drive_link');
new Work('Adoramus Te Christe','Palestrina,G.P.',undefined,'SATB','Adoration','https://drive.google.com/file/d/1Injzw7sM2Sgx6JxrzEutd-a9hKzUKIFj/view?usp=drive_link');
new Work('O Salutaris Hostia','Levente, H.',undefined,'SATB','Adoration','https://drive.google.com/file/d/14g004C3beARcn0B6xhQxwL-1CCQHEqEt/view?usp=drive_link');
new Work('O Taste and See','Vaughan-Williams, Ralph',undefined,'SSATB','Communion','https://drive.google.com/file/d/1T69qBKoD44CRoAbrE0SSbqd7B2qT4EO1/view?usp=drive_link');
new Work('The Road to Calvary','Bach, J.S.','Cozens, John','SATB','Lent/Good Friday','https://drive.google.com/file/d/1JLN2dC4IDNNyUyxicD5_2q30DUhJKK7F/view?usp=drive_link');
new Work('Amazing Grace','Traditional',undefined,'SATB','General','https://drive.google.com/file/d/1W_SD7upUkP8ZFshONheCGoW9VW7OXOiv/view?usp=drive_link');
new Work('In Paradisum','Anonymous','Reddoch, Grant','SSAATTBB','Funeral/Heaven','https://drive.google.com/file/d/1q_XjPyyv8a2OxGveFM27r_KC0kfuTdXT/view?usp=drive_link');
new Work('Lux Aeterna','Lauridsen, Morten',undefined,'SSAATTBB','Funeral/Light','https://drive.google.com/file/d/1a2Tg1YVsVjgQfK1gR64zuBXRe_ij2_Qo/view?usp=drive_link');
new Work('MLK','Chilcott, Bob',undefined,'SATTBB','Peace','https://drive.google.com/file/d/1w0-rN35SRtpr_8EIPkHApXPxXRNGxr31/view?usp=drive_link');
new Work('O Bone Jesu','Palestrina, G.P.',undefined,'SATB','Forgiveness','https://drive.google.com/file/d/1VNaOUZE8iG0zRsFTdAfiXBgcf3d2bEkB/view?usp=drive_link');
new Work('O Crux Ave','Dubra, Rihard',undefined,'SATB','Veneration of Cross','https://drive.google.com/file/d/12fU4nWsfzLva8gHNdQ8W4slot9w5IVGp/view?usp=drive_link');
new Work('O Sternenfall','Walters, David',undefined,'SSSAATTBB','Stars','https://drive.google.com/file/d/1w_8NuKQaELPbx9KN5f-TCjJgbx0fL9a_/view?usp=drive_link');
new Work('Prayer','Clausen, Rene',undefined,'SSAATTBB','Humility/Service','https://drive.google.com/file/d/1lBOoBROYKMFnOpwYpInqLsasnAZSWXnS/view?usp=drive_link');
new Work('God Our Father, Lord of Heaven','Beobide, Jose',undefined,'SSA','Adoration','https://drive.google.com/file/d/11TjBHjz3NveDWCXdUaLGvLeQCBEGZkcU/view?usp=drive_link');
new Work('Precious Lord','Dorsey, Thomas','Sevier, Arnold','SSAATTBB','Comfort','https://drive.google.com/file/d/1M8utAWnRFnsFAkUoBqi2-x4cYda0BQgU/view?usp=drive_link');
new Work('Sanctus: London','Gjeilo, Ola',undefined,'SSAAATTBBB','Praise/Mass','https://drive.google.com/file/d/1shVAMKL9YnoK2w4EZmkPixlbnhNKSurh/view?usp=drive_link');
new Work('Jubilate Deo','Halmos, Laszlo',undefined,'SATB','Praise','https://drive.google.com/file/d/1BOupegaSaoJLRs_6uBdyOy5GMG6UZWb2/view?usp=drive_link')
new Work('Lay Me Low','Shaker Tune','Siegfried, Kevin','SSAATTBB','Death','https://drive.google.com/file/d/1xOPBbus-sZ-6TaLHo4jy1yb5NCm4Tni2/view?usp=sharing');
new Work('Lead Kindly Light','Sullivan, Michael',undefined,'SATB','Guidance','https://drive.google.com/file/d/1ZltdDjEIckvRIIZltQTzpVgONPo55LxT/view?usp=drive_link');

//

//Sort into Alphabetical Order by Title
lib.sort((a,b) => a.title.localeCompare(b.title));

/**
 * Creates a table and adds it to the parent element.
 * @param {array} array 
 * @param {string} parent 
 */
const tableFormat = (array = lib,parent) => {
    document.getElementById(parent).innerHTML = '';
    let table = document.createElement('table');
    let headRow = document.createElement('tr');
    for (let [key,value] of Object.entries(array[0])) {
        if (key !== 'stringRep') {
            let headCell = document.createElement('th');
            headCell.innerHTML = `${key.toUpperCase()}`;
            headRow.appendChild(headCell);
        }
    }
    table.appendChild(headRow);
    let currRow = 0;
    array.forEach(entry => {
        let confirm = entry instanceof Work;
        currRow++;
        if (confirm) {
            let trow = document.createElement('tr');
            for (let [key,value] of Object.entries(entry)) {
                if (key == 'composer' || key == 'arranger') {
                    let data = document.createElement('td');
                    if (Array.isArray(value)) {
                        let conc = '';
                        value.forEach(element => {
                            conc+=`${element['First']} ${element['Last']}; `;
                        })
                        data.innerHTML = conc;
                    }
                    else {
                        if (value['First'] == null && value['Last'] == null) {
                            null;
                        }
                        else if (value['Last'] == null && value['First'] !== null) {
                            data.innerHTML = `${value['First']}`;
                        }
                        else {
                            data.innerHTML = `${value['First']} ${value['Last']}`;
                        }
                    }
                    data.addEventListener('mousedown',(event) => {
                        console.log(event.target.textContent);
                        search(event.target.textContent);
                        document.getElementById('context').innerHTML = '';
                        document.getElementById('context').classList.remove('show');
                    });
                    trow.appendChild(data);
                }
                else if (key == 'link') {
                    let data = document.createElement('td');
                    let anchor = document.createElement('a');
                    anchor.setAttribute('href',value);
                    anchor.innerHTML = 'PDF';
                    data.appendChild(anchor);
                    trow.appendChild(data);
                }
                else if (key == 'stringRep') {
                    null;
                }
                else {
                    let data = document.createElement('td');
                    data.innerHTML = value;
                    trow.appendChild(data);
                    data.addEventListener('mousedown',(event) => {
                        console.log(event.target.textContent);
                        search(event.target.textContent);
                        document.getElementById('context').innerHTML = '';
                        document.getElementById('context').classList.remove('show');
                    })
                }
            }
            trow.addEventListener('mouseover',(event) => {
                event.target.textContent == 'PDF'? null: document.getElementById('context').textContent = `Click to search for '${event.target.textContent}'`;
                event.target.textContent == 'PDF'? null: document.getElementById('context').setAttribute('class','show');
            });
            trow.addEventListener('mouseout',() => {
                document.getElementById('context').textContent = ``;
                document.getElementById('context').classList.remove('show');
            })
            table.appendChild(trow);
        }
        else {
            console.error('Entry is not an instance of Work class!');
        }
    })
    document.getElementById('tot').innerHTML = `Currently Showing: ${currRow}`;
    let par = document.getElementById(parent);
    par.appendChild(table);
}

/**
 * Search the document for the parameter.
 * @param {string} text 
 */
const search = (text) => {
    console.log(`Searching for: ${text}`);
    let res = [];
    let voicing = null;
    let query = text.trim();
    let regex = new RegExp(`${query}`,'ig');
    lib.forEach(entry => {
        /**
         * Determine if the search matches a voicing type.
         */
        let splitString = entry.stringRep.split('|');
        voicing = splitString[4].match(regex) !== null? true : false;
        /**
         * If not specified as a voicing search, match loosely.
         */
        if (voicing == false) {
            console.log(`String Representation: ${entry.stringRep}`);
            let found = entry.stringRep.match(regex) == null? false : true;
            found? res.push(entry) : null;
        }
        /**
         * If double quotes are used, match literally, useful for searching a specific voicing.
         */
        else {
            let found = entry.voicing.match(new RegExp(`^${query}$`,'ig')) == null? false : true;
            console.log(entry.voicing);
            found? res.push(entry) : null;
        }
    })
    tableFormat(res,'display');
    document.getElementById('tot').innerHTML = `Currently Showing: ${res.length}`;
}

document.addEventListener('DOMContentLoaded',() => {
    console.log('DOM Loaded!');
    tableFormat(lib,'display');
    let searchBar = document.getElementById('search')
    searchBar.addEventListener('change',() => { //This is behind. I'm not sure how to get it to respond correctly
       search(searchBar.value);
    })
    document.getElementById('clickSub').addEventListener('mousedown',() => {
        search(searchBar.value);
    })
    document.getElementById('clear').addEventListener('mousedown',() => {
        document.location.reload();
    })
})