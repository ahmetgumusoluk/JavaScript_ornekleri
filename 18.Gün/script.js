//Egzersiz: Seviye 1

//1-)
const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        return response.json(); // Yanıtı JSON formatına dönüştür
    })
    .then((data) => {
        data.forEach((country) => {
            const name = country.name;
            const capital = country.capital || 'Capital not available'; // Bazı ülkelerde başkent bilgisi olmayabilir
            const languages = country.languages.map(lang => lang.name).join(', '); // Diller bir dizide tutulur
            const population = country.population.toLocaleString(); // Nüfus, daha okunabilir formatta
            const area = country.area ? `${country.area.toLocaleString()} km²` : 'Area not available';

            console.log(`Country: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Languages: ${languages}`);
            console.log(`Population: ${population}`);
            console.log(`Area: ${area}`);
            console.log('--------------------------------');
        });
    })
    .catch((error) => {
        console.error('Hata:', error);
    });

//Egzersiz: Seviye 2

//1-)
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        return response.json(); // JSON formatına dönüştür
    })
    .then((data) => {
        // Tüm kedi adlarını çıkarma
        const catNames = data.map(cat => cat.name); // Her bir cat nesnesinden adı alır
        console.log(catNames); // Tüm kedi adlarını konsola yazdırır
    })
    .catch((error) => {
        console.error('Hata:', error);
    });


//Egzersiz: Seviye 3

//1-)
fetch(catsAPI)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        return response.json(); // JSON formatına dönüştür
    })
    .then((data) => {
        // Tüm kedilerin ağırlıklarını toplama ve ortalama hesaplama
        const totalWeight = data.reduce((sum, cat) => sum + (cat.weight.metric ? parseFloat(cat.weight.metric) : 0), 0);
        const averageWeight = totalWeight / data.length;

        console.log(`Ortalama Kedi Ağırlığı: ${averageWeight.toFixed(2)} kg`);
    })
    .catch((error) => {
        console.error('Hata:', error);
    });

//2-)
fetch(countriesAPI)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        return response.json(); // JSON formatına dönüştür
    })
    .then((data) => {
        // Her ülkenin alanını kullanarak sıralama yapalım
        data.sort((a, b) => b.area - a.area); // Büyükten küçüğe sıralama

        // En büyük 10 ülkeyi listeleyelim
        const largestCountries = data.slice(0, 10);

        largestCountries.forEach(country => {
            console.log(`Country: ${country.name}`);
            console.log(`Area: ${country.area} km²`);
            console.log('--------------------------------');
        });
    })
    .catch((error) => {
        console.error('Hata:', error);
    });

//3-)
fetch(countriesAPI)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        return response.json(); // JSON formatına dönüştür
    })
    .then((data) => {
        // Tüm dilleri toplama
        const allLanguages = data.flatMap(country => country.languages.map(lang => lang.name));

        // Tekrarlanan dilleri ayıklama
        const uniqueLanguages = new Set(allLanguages);

        // Toplam dil sayısını bulma
        const totalLanguages = uniqueLanguages.size;

        console.log(`Dünyada resmi olarak kullanılan toplam dil sayısı: ${totalLanguages}`);
    })
    .catch((error) => {
        console.error('Hata:', error);
    });