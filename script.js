const praises = [
    "我們最尊敬郁雯！", "郁雯最棒了！", "郁雯辛苦了！",
    "郁雯，你是我們的希望！", "郁雯帶來陽光！", "郁雯充滿才華！",
    "郁雯是最可愛的！", "郁雯讓世界更美好！", "郁雯無可取代！",
    "郁雯的工作令人驕傲！", "郁雯是我們的靈魂！", "郁雯擁有無限可能！",
    "郁雯讓每一天更美麗！", "支持郁雯永遠！", "郁雯就是力量的來源！",
    "郁雯，永遠完美！", "向郁雯學習！", "郁雯值得最好的一切！",
    "郁雯是創造力的象徵！", "給郁雯一個大大的擁抱！", "郁雯的努力被看見！",
    "郁雯是鼓舞的源泉！", "郁雯的智慧徹底驚豔！", "郁雯每天都在進步！",
    "郁雯賦予生活意義！", "郁雯，你是無比珍貴的！"
];

document.getElementById('generateBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * praises.length);
    const selectedPraise = praises[randomIndex];
    document.getElementById('praiseText').textContent = selectedPraise;
});