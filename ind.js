document.addEventListener('DOMContentLoaded', function () {
    const ctxJapan = document.getElementById('japan-stock-chart').getContext('2d');
    const ctxUSA = document.getElementById('usa-stock-chart').getContext('2d');
    const ctxChina = document.getElementById('china-stock-chart').getContext('2d');
    const ctxGermany = document.getElementById('germany-stock-chart').getContext('2d');
    const ctxUK = document.getElementById('uk-stock-chart').getContext('2d');

    // ダミーデータの設定（実際にはAPIからデータを取得）
    const japanStockData = {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
            label: '日経平均株価',
            data: [28000, 29000, 30000, 31000, 30500],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const usaStockData = {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
            label: 'ダウ・ジョーンズ',
            data: [32000, 33000, 34000, 35000, 34500],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const chinaStockData = {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
            label: '上海総合指数',
            data: [3500, 3600, 3700, 3800, 3750],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const germanyStockData = {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
            label: 'DAX',
            data: [14000, 14500, 15000, 15500, 15200],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    };

    const ukStockData = {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
            label: 'FTSE 100',
            data: [7000, 7100, 7200, 7300, 7250],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    // グラフの描画
    new Chart(ctxJapan, {
        type: 'line',
        data: japanStockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '月'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '株価 (円)'
                    }
                }
            }
        }
    });

    new Chart(ctxUSA, {
        type: 'line',
        data: usaStockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '月'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '株価 (ドル)'
                    }
                }
            }
        }
    });

    new Chart(ctxChina, {
        type: 'line',
        data: chinaStockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '月'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '株価 (元)'
                    }
                }
            }
        }
    });

    new Chart(ctxGermany, {
        type: 'line',
        data: germanyStockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '月'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '株価 (ユーロ)'
                    }
                }
            }
        }
    });

    new Chart(ctxUK, {
        type: 'line',
        data: ukStockData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '月'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '株価 (ポンド)'
                    }
                }
            }
        }
    });
});
