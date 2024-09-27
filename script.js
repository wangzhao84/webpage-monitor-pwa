let lastValue = null;
const monitorButton = document.getElementById('start-monitor');
const valueElement = document.getElementById('value');

monitorButton.addEventListener('click', function () {
    setInterval(function () {
        // 模拟一个值的变化
        const currentValue = Math.floor(Math.random() * 100);
        valueElement.innerText = currentValue;

        if (lastValue !== null && currentValue !== lastValue) {
            alert('Value changed to: ' + currentValue);
        }

        lastValue = currentValue;
    }, 5000);  // 每5秒监控一次
});
