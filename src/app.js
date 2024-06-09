const questions = [
    { number: 1, question: "Jika kamu bisa memiliki kekuatan super, apa yang akan kamu pilih dan kenapa?" },
    { number: 2, question: "Apa film favoritmu sepanjang masa dan kenapa?" },
    { number: 3, question: "Jika kamu bisa tinggal di mana saja di dunia, di mana kamu akan tinggal?" },
    { number: 4, question: "Apa makanan favoritmu dan kenapa?" },
    { number: 5, question: "Jika kamu bisa dinner dengan siapa saja,  siapa yang akan kamu pilih?" },
    { number: 6, question: "Apa liburan impianmu?" },
    { number: 7, question: "Jika kamu bisa memulai bisnis apa saja, bisnis apa yang akan kamu mulai?" },
    { number: 8, question: "Apa hobi yang paling kamu nikmati saat ini?" },
    { number: 9, question: "Siapa tokoh inspiratif yang paling kamu kagumi?" },
    { number: 10, question: "Apa buku yang paling berpengaruh dalam hidupmu?" },
    { number: 11, question: "Apa pengalaman paling menakutkan yang pernah kamu alami?" },
    { number: 12, question: "Jika kamu bisa menghapus satu hari dari hidupmu, hari apa yang akan kamu hapus?" },
    { number: 13, question: "Apa film yang paling membuatmu terharu?" },
    { number: 14, question: "Apa yang paling kamu syukuri dalam hidupmu?" },
    { number: 15, question: "Apa tujuan hidupmu dalam lima tahun ke depan?" },
    { number: 16, question: "Apa tantangan terbesar yang pernah kamu hadapi?" },
    { number: 17, question: "Jika kamu bisa kembali ke masa lalu, apa yang akan kamu ubah?" },
    { number: 18, question: "Apa musik atau lagu yang paling sering kamu dengar akhir-akhir ini?" },
    { number: 19, question: "Apa tempat wisata lokal favoritmu?" },
    { number: 20, question: "Apa pekerjaan impianmu saat masih kecil?" },
    { number: 21, question: "Apa keputusan terbaik yang pernah kamu buat?" },
    { number: 22, question: "Jika kamu bisa menguasai satu keterampilan baru, apa yang akan kamu pilih?" },
    { number: 23, question: "Apa yang membuatmu paling bahagia?" },
    { number: 24, question: "Apa yang paling kamu takuti?" },
    { number: 25, question: "Apa pencapaian terbesar dalam hidupmu?" },
    { number: 26, question: "Apa yang ingin kamu capai sebelum mati?" },
    { number: 27, question: "Siapa teman atau keluarga yang paling berpengaruh dalam hidupmu?" },
    { number: 28, question: "Apa momen paling memalukan dalam hidupmu?" },
    { number: 29, question: "Jika kamu bisa punya hewan peliharaan apa saja, hewan apa yang akan kamu pilih?" },
    { number: 30, question: "Apa acara TV atau serial yang paling kamu suka?" },
    { number: 31, question: "Apa yang paling kamu nikmati dari pekerjaan atau studimu saat ini?" },
    { number: 32, question: "Apa kebiasaan buruk yang ingin kamu hilangkan?" },
    { number: 33, question: "Apa hal paling aneh yang pernah kamu makan?" },
    { number: 34, question: "Apa impian terliarmu yang belum terwujud?" },
    { number: 35, question: "Jika kamu bisa berbicara dalam bahasa apa saja, bahasa apa yang akan kamu pilih?" },
    { number: 36, question: "Apa kejadian paling lucu yang pernah terjadi di sekolah atau di tempat kerja?" },
    { number: 37, question: "Apa film atau buku yang paling membuatmu berpikir?" },
    { number: 38, question: "Apa sifat atau karakteristik yang paling kamu hargai dalam diri seseorang?" },
    { number: 39, question: "Apa aktivitas atau olahraga yang paling kamu nikmati?" },
    { number: 40, question: "Apa yang paling kamu rindukan dari masa kecil?" },
    { number: 41, question: "Apa tempat makan favoritmu di kota ini?" },
    { number: 42, question: "Apa lagu atau album yang paling mewakili perasaanmu saat ini?" },
    { number: 43, question: "Apa yang kamu lakukan untuk mengatasi stres?" },
    { number: 44, question: "Apa tradisi keluarga yang paling kamu nikmati?" },
    { number: 45, question: "Apa yang paling membuatmu marah?" },
    { number: 46, question: "Apa kejutan terbaik yang pernah kamu terima?" },
    { number: 47, question: "Apa mimpi aneh yang pernah kamu alami?" },
    { number: 48, question: "Apa hadiah terbaik yang pernah kamu berikan kepada seseorang?" },
    { number: 49, question: "Apa hal paling berani yang pernah kamu lakukan?" },
    { number: 50, question: "" },
];

let usedQuestions = [];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('resetBtn').addEventListener('click', resetGame);

function startGame() {
    document.getElementById('startBtn').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
    document.getElementById('questionContainer').classList.remove('hidden');
    nextQuestion();
}

function nextQuestion() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('questionDisplay').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('resetBtn').classList.add('hidden');

    setTimeout(() => {
        let availableQuestions = questions.filter(q => !usedQuestions.includes(q.number));
        if (availableQuestions.length === 0) {
            usedQuestions = [];
            availableQuestions = questions;
        }
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const selectedQuestion = availableQuestions[randomIndex];
        usedQuestions.push(selectedQuestion.number);

        document.getElementById('questionDisplay').innerText = selectedQuestion.question;
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('questionDisplay').classList.remove('hidden');
        document.getElementById('nextBtn').classList.remove('hidden');
        document.getElementById('resetBtn').classList.remove('hidden');
    }, 3500);
}

function resetGame() {
    usedQuestions = [];
    document.getElementById('questionContainer').classList.add('hidden');
    document.getElementById('startBtn').classList.remove('hidden');
    document.getElementById('description').classList.remove('hidden');
}
