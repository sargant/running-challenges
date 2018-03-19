// This attempts to provide an interface for the code to be common, and yet
// still work across all of the parkrun sites
// Although most of the content is still in English, such as the parkrun names

// Volunteer roles are in the language of the person who signed up,
// so a Russian parkrunner who has done volunteering will have all their roles
// listed in Russian even if they are fetched from the .org.uk website

// Known Roles:
// "Equipment Storage and Delivery"
// "Communications Person"
// "Volunteer Co-ordinator"
// "Pre-event Setup"
// "First Timers Briefing"
// "Sign Language Support"
// "Marshal"
// "Tail Walker"
// "Run Director"
// "Lead Bike"
// "Pacer (5k only)"
// "VI Guide"
// "Photographer"
// "Timekeeper"
// "Backup Timer"
// "Funnel Manager"
// "Finish Tokens"
// "Finish Token Support"
// "Barcode Scanning"
// "Number Checker"
// "Post-event Close Down"
// "Results Processor"
// "Token Sorting"
// "Run Report Writer"
// + Other?, Warm Up (Juniors)
var domains = {
    // Default english language options, good for most of the domains
    "default": {
        "url_athleteeventresultshistory": "results/athleteeventresultshistory/",
        "table_all_results": "All Results",
        "link_view_stats_for_all_parkruns": "View stats for all parkruns by this athlete",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "View stats for all parkruns by this athlete",
        "link_all": "All",
        // These variables contain text we output, so need translating by someone
        "text_see_challenge_progress": "See challenge progress",
        "text_running_challenges": "Running Challenges",
        // Volunteer roles are in ENGLISH
        "text_volunteer_role_map": {
            "Equipment Storage and Delivery": "Equipment Storage and Delivery",
            "Communications Person": "Communications Person",
            "Volunteer Co-ordinator": "Volunteer Co-ordinator",
            "Pre-event Setup": "Pre-event Setup",
            "First Timers Briefing": "First Timers Briefing",
            "Sign Language Support": "Sign Language Support",
            "Marshal": "Marshal",
            "Tail Walker": "Tail Walker",
            "Run Director": "Run Director",
            "Lead Bike": "Lead Bike",
            "Pacer (5k only)": "Pacer (5k only)",
            "VI Guide": "VI Guide",
            "Photographer": "Photographer",
            "Timekeeper": "Timekeeper",
            "Backup Timer": "Backup Timer",
            "Funnel Manager": "Funnel Manager",
            "Finish Tokens": "Finish Tokens",
            "Finish Token Support": "Finish Token Support",
            "Barcode Scanning": "Barcode Scanning",
            "Number Checker": "Number Checker",
            "Post-event Close Down": "Post-event Close Down",
            "Results Processor": "Results Processor",
            "Token Sorting": "Token Sorting",
            "Run Report Writer": "Run Report Writer"
        }
    },
    "www.parkrun.pl": {
        // Polish pages
        // http://www.parkrun.pl/warszawa-ursynow/rezultaty/athletehistory/?athleteNumber=546975
        // http://www.parkrun.pl/rezultaty/athleteresultshistory/?athleteNumber=546975
        // http://www.parkrun.pl/rezultaty/athleteeventresultshistory/?athleteNumber=546975&eventNumber=0
        "url_athleteeventresultshistory": "rezultaty/athleteeventresultshistory/",
        "table_all_results": "Wszystkie wyniki",
        "link_view_stats_for_all_parkruns": "Zobacz statystyki uczestnika ze wszystkich biegów parkrun",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Zobacz wyniki tego zawodnika ze wszystkich biegów",
        "text_volunteer_role_map": {
            "Przechowując(a)y sprzęt": "Equipment Storage and Delivery",
            "Osoba od komunikacji": "Communications Person",
            // "Volunteer Co-ordinator": "Volunteer Co-ordinator",
            "Ustawiając(a)y elementy trasy": "Pre-event Setup",
            "Instruktor nowych uczestników": "First Timers Briefing",
            // "Sign Language Support": "Sign Language Support",
            "Ubezpieczając(a)y trasę": "Marshal",
            // "Tail Walker": "Tail Walker",
            "Koordynator biegu": "Run Director",
            "Rower bezpieczeństwa": "Lead Bike",
            // "Pacer (5k only)": "Pacer (5k only)",
            // "VI Guide": "VI Guide",
            "Fotograf": "Photographer",
            "Osoba mierząca czas": "Timekeeper",
            // "Backup Timer": "Backup Timer",
            "Koordynator tunelu mety": "Funnel Manager",
            "Pozycje na mecie": "Finish Tokens",
            "Asystując(a)y przy pozycjach": "Finish Token Support",
            "Skanując(a)y uczestników": "Barcode Scanning",
            // "Number Checker": "Number Checker",
            "Zamykając(a)y stawkę": "Post-event Close Down",
            "Wprowadzając(a)y wyniki": "Results Processor",
            // "Token Sorting": "Token Sorting",
            // "Run Report Writer": "Run Report Writer"
        }
    },
    "www.parkrun.it": {
        // Italian pages
        // http://www.parkrun.it/etna/results/athletehistory/?athleteNumber=3868619
        // http://www.parkrun.it/results/athleteresultshistory/?athleteNumber=3868619
        // http://www.parkrun.it/results/athleteeventresultshistory?athleteNumber=3868619&eventNumber=0
        "table_all_results": "Tutti i risultati",
        "link_view_stats_for_all_parkruns": "Visualizza statistiche per tutti i parkruns di questo atleta",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Visualizza statistiche per tutti i parkruns di questo atleta",
        "text_volunteer_role_map": {
            // "Equipment Storage and Delivery": "Equipment Storage and Delivery",
            // "Communications Person": "Communications Person",
            // "Volunteer Co-ordinator": "Volunteer Co-ordinator",
            "Preparazione evento": "Pre-event Setup",
            // "First Timers Briefing": "First Timers Briefing",
            // "Sign Language Support": "Sign Language Support",
            "Marshal": "Marshal",
            "Camminatore di coda": "Tail Walker",
            "Direttore di Corsa": "Run Director",
            "Ciclista apripista": "Lead Bike",
            "Pacer": "Pacer (5k only)",
            // "VI Guide": "VI Guide",
            "Fotografo": "Photographer",
            "Cronometrista": "Timekeeper",
            "Backup Timer": "Backup Timer",
            // "Funnel Manager": "Funnel Manager",
            "Addetto token": "Finish Tokens",
            // "Finish Token Support": "Finish Token Support",
            "Addetto scanner": "Barcode Scanning",
            // "Number Checker": "Number Checker",
            // "Post-event Close Down": "Post-event Close Down",
            "Elaboratore risultati": "Results Processor",
            // "Token Sorting": "Token Sorting",
            // "Run Report Writer": "Run Report Writer"
        }

    },
    "www.parkrun.dk": {
        // Danish pages
        // http://www.parkrun.dk/amagerstrandpark/results/athletehistory/?athleteNumber=3287153
        // http://www.parkrun.dk/results/athleteresultshistory/?athleteNumber=3287153
        // http://www.parkrun.dk/results/athleteeventresultshistory/?athleteNumber=3287153&eventNumber=0
        "table_all_results": "Alle resultater",
        "link_view_stats_for_all_parkruns": "Se tal for alle parkruns løbet af denne løber",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Se tal for alle parkruns løbet af denne løber",
        "text_volunteer_role_map": {
            "Udstyr – opbevaring og levering": "Equipment Storage and Delivery",
            // "Communications Person": "Communications Person",
            "Hjælperkoordinering": "Volunteer Co-ordinator",
            "Skiltning": "Pre-event Setup",
            // "First Timers Briefing": "First Timers Briefing",
            // "Sign Language Support": "Sign Language Support",
            // "Marshal": "Marshal",
            "Gående bagtrop": "Tail Walker",
            "Løbsleder": "Run Director",
            // "Lead Bike": "Lead Bike",
            // "Pacer (5k only)": "Pacer (5k only)",
            // "VI Guide": "VI Guide",
            "Fotograf": "Photographer",
            "Tidtager": "Timekeeper",
            // "Backup Timer": "Backup Timer",
            // "Funnel Manager": "Funnel Manager",
            "Talonuddeling	": "Finish Tokens",
            // "Finish Token Support": "Finish Token Support",
            "Talonkontrol": "Barcode Scanning",
            // "Number Checker": "Number Checker",
            // "Post-event Close Down": "Post-event Close Down",
            "Resultatregistrering": "Results Processor",
            // "Token Sorting": "Token Sorting",
            // "Run Report Writer": "Run Report Writer"
        }
    },
    "www.parkrun.se": {
        // Swedish pages
        // http://www.parkrun.se/orebro/results/athletehistory/?athleteNumber=3899897
        // http://www.parkrun.se/results/athleteresultshistory/?athleteNumber=3899897
        // http://www.parkrun.se/results/athleteeventresultshistory/?athleteNumber=3899897&eventNumber=0
        "table_all_results": "Alla resultat",
        "link_view_stats_for_all_parkruns": "Se statistik för alla parkruns av denna löpare",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Se statistik för alla parkruns av denna löpare",
        "text_volunteer_role_map": {
            // Målfållaansvarig?
            // Förcyklist?
            // "Equipment Storage and Delivery": "Equipment Storage and Delivery",
            // "Communications Person": "Communications Person",
            // "Volunteer Co-ordinator": "Volunteer Co-ordinator",
            "Ansvarig för att sätta upp banan": "Pre-event Setup",
            // "First Timers Briefing": "First Timers Briefing",
            // "Sign Language Support": "Sign Language Support",
            "Funktionär": "Marshal",
            "Sista gångare": "Tail Walker",
            "Loppansvarig": "Run Director",
            // "Lead Bike": "Lead Bike",
            // "Pacer (5k only)": "Pacer (5k only)",
            // "VI Guide": "VI Guide",
            "Fotograf": "Photographer",
            "Tidtagare": "Timekeeper",
            // "Backup Timer": "Backup Timer",
            // "Funnel Manager": "Funnel Manager",
            "Pollettutdelare": "Finish Tokens",
            "Pollettutdelare assistent": "Finish Token Support",
            "Streckkod scanning": "Barcode Scanning",
            // "Number Checker": "Number Checker",
            // "Post-event Close Down": "Post-event Close Down",
            // "Results Processor": "Results Processor",
            // "Token Sorting": "Token Sorting",
            "Journalist": "Run Report Writer"
        }
    },
    "www.parkrun.fi": {
        // Finnish pages
        // http://www.parkrun.fi/tampere/results/athletehistory/?athleteNumber=4064283
        // http://www.parkrun.fi/results/athleteresultshistory/?athleteNumber=4064283
        // http://www.parkrun.fi/results/athleteeventresultshistory/?athleteNumber=4064283&eventNumber=0
        // It is all in English
    },
    "www.parkrun.fr": {
        // French pages
        // http://www.parkrun.fr/boisdeboulogne/results/athletehistory/?athleteNumber=422364
        // http://www.parkrun.fr/results/athleteresultshistory/?athleteNumber=422364
        // http://www.parkrun.fr/results/athleteeventresultshistory/?athleteNumber=2769739&eventNumber=0
        "table_all_results": "Toutes les participations",
        "link_view_stats_for_all_parkruns": "Consulter les stats de cet athlète tous parkruns confondus",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Consulter les stats de cet athlète tous parkruns confondus",
        // Volunteer roles are in FRENCH (A582667)
        "text_volunteer_role_map": {
            // "Gestion SAS": "?",

            // "Equipment Storage and Delivery",
            // "Communications Person",
            // "Volunteer Co-ordinator",
            "Balisage du parcours": "Pre-event Setup",
            // "First Timers Briefing",
            // "Sign Language Support",
            "Aiguilleur": "Marshal",
            "Fermeur marcheur": "Tail Walker",
            "Responsable de footing": "Run Director",
            // "Lead Bike",
            // "Pacer (5k only)",
            // "VI Guide",
            "Photographe": "Photographer",
            "Responsable chrono": "Timekeeper",
            // "Backup Timer",
            // "Funnel Manager",
            "Distribution des jetons": "Finish Tokens",
            "Assistant distribution des jetons": "Finish Token Support",
            "Scan des codes-barres": "Barcode Scanning",
            // "Number Checker",
            "Débalisage du parcours": "Post-event Close Down",
            "Mise en ligne des participations": "Results Processor",
            // "Token Sorting",
            "Rédacteur du compte-rendu": "Run Report Writer"
        }
    },
    "www.parkrun.com.de": {
        // German pages
        // http://www.parkrun.com.de/georgengarten/results/athletehistory/?athleteNumber=4099000
        // http://www.parkrun.com.de/results/athleteresultshistory/?athleteNumber=4099000
        // http://www.parkrun.com.de/results/athleteeventresultshistory/?athleteNumber=4099000&eventNumber=0
        "table_all_results": "Alle Ergebnisse",
        "link_view_stats_for_all_parkruns": "Statistiken für alle Läufe dieses Athleten ansehen",
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Statistiken für alle Läufe dieses Athleten ansehen",
        // Volunteer roles are in GERMAN (A4029732)
        "text_volunteer_role_map": {
            "Ausrüstung Lagerung und Lieferung": "Equipment Storage and Delivery",
            // "Communications Person": "Communications Person",
            "Helfer Koordinator": "Volunteer Co-ordinator",
            "Veranstaltung Aufbau": "Pre-event Setup",
            "Einweiser für Erstläufer": "First Timers Briefing",
            // "Sign Language Support": "Sign Language Support",
            "Streckenposten": "Marshal",
            "Schlussbegleitung": "Tail Walker",
            "Veranstaltungsleiter": "Run Director",
            // "Lead Bike": "Lead Bike",
            // "Pacer (5k only)": "Pacer (5k only)",
            // "VI Guide": "VI Guide",
            // "Photographer": "Photographer",
            "Zeitnehmer": "Timekeeper",
            // "Backup Timer": "Backup Timer",
            // "Funnel Manager": "Funnel Manager",
            "Platzierungskarten Ausgabe": "Finish Tokens",
            // "Finish Token Support": "Finish Token Support",
            "Barcode Einleser": "Barcode Scanning",
            // "Number Checker": "Number Checker",
            // "Post-event Close Down": "Post-event Close Down",
            "Ergebnis Auswerter": "Results Processor",
            // "Token Sorting": "Token Sorting",
            "Berichterstattung": "Run Report Writer"
        }
    },
    "www.parkrun.no": {
        // Norweigen pages
        // http://www.parkrun.no/toyen/results/athletehistory/?athleteNumber=4370177
        // http://www.parkrun.no/results/athleteresultshistory/?athleteNumber=4370177
        // http://www.parkrun.no/results/athleteeventresultshistory/?athleteNumber=4370177&eventNumber=0
        // It's all in English
        // Volunteer roles are in ENGLISH
    },
    "www.parkrun.ru": {
        // Russian pages
        // http://www.parkrun.ru/bitsa/results/athletehistory/?athleteNumber=1551222
        // http://www.parkrun.ru/results/athleteresultshistory/?athleteNumber=1551222
        // http://www.parkrun.ru/results/athleteeventresultshistory/?athleteNumber=1551222&eventNumber=0
        // Randomly partly in English
        "link_view_stats_for_all_parkruns_athleteeventhistory": "Показать статистику этого спортсмена по всем забегам",
        // Volunteer roles are in RUSSIAN (A1551222)
        "text_volunteer_role_map": {
            "Хранение и доставка оборудования": "Equipment Storage and Delivery",
            "Связи с общественностью": "Communications Person",
            // "Volunteer Co-ordinator"
            "Preparation of the race": "Pre-event Setup",
            "Инструктаж новых бегунов": "First Timers Briefing",
            // "Sign Language Support"
            "Маршал": "Marshal",
            // "Tail Walker"
            "Руководитель забега": "Run Director",
            // "Lead Bike"
            // "Pacer (5k only)"
            // "VI Guide"
            "Фотограф": "Photographer",
            "Секундомер": "Timekeeper",
            "Запасной секундомер": "Backup Timer",
            // "Funnel Manager"
            "Раздача карточек позиций": "Finish Tokens",
            "Помощь в раздаче карточек позиций": "Finish Token Support",
            "Сканирование штрих-кодов": "Barcode Scanning",
            // "Number Checker"
            "Замыкающий": "Post-event Close Down",
            "Обработка результатов": "Results Processor",
            "Сортировка карточек": "Token Sorting",
            "Составление отчёта": "Run Report Writer",
            // + Other?, Warm Up (Juniors)
        }
    }
}

function get_localised_value(param, domain=location.host) {
    // Strip any leading http[s] protocol off the front of the domain
    var domain = domain.replace(/^https?:\/\//,'')
    if (domain in domains) {
        if (param in domains[domain]) {
            console.log("I18N:"+param+":"+domains[domain][param])
            return domains[domain][param]
        }
    }
    return get_localised_default_value(param)
}

function get_localised_default_value(param) {
    console.log("I18N:"+param+":"+domains.default[param])
    return domains.default[param]
}

function get_normalised_volunteer_role(role) {
    mapped_role = null
    $.each(domains, function(domain, mappings) {
        if ("text_volunteer_role_map" in mappings) {
            if (role in mappings.text_volunteer_role_map) {
                mapped_role = mappings.text_volunteer_role_map[role]
                // Break out of the loop
                return false
            }
        }
    })
    if (mapped_role === null) {
        console.log("I18N: UNKNOWN VOLUNTEER ROLE: "+role)
    } else {
        if (role != mapped_role) {
            // console.log("I18N: mapped "+role+" to "+mapped_role)
        }
    }
    return mapped_role
}