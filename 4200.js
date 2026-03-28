// ==================== 操作表更新 ====================
(function() {
'use strict';

// 定义新增的操作阶段
const NEW_MANUALS = [
    // ========== Manual 15: 点树液桶 ==========
    {name: "树液桶", actions: [
        {type: 'click', page: 1, panel: 3, x: 40, y: 77, wait: 5000}
    ]},

    // ========== Manual 16: 浆果丛 ==========
    {name: "浆果丛", actions: [
        {type: 'click', page: 1, panel: 11, x: 69, y: 57, wait: 1000},
        {type: 'click', page: 1, panel: 11, x: 77, y: 76, wait: 1000},
        {type: 'click', page: 1, panel: 11, x: 94, y: 76, wait: 1000},
        {type: 'click', page: 1, panel: 11, x: 86, y: 56, wait: 1000},
        {type: 'click', page: 1, panel: 11, x: 55, y: 76, wait: 1000}
    ]},

    // ========== Manual 17: 找蟋蟀 ==========
    {name: "点灌木丛找蟋蟀", actions: [
        {type: 'click', page: 1, panel: 7, x: 9, y: 70, wait: 5000}
    ]},

    // ========== Manual 18: 蟋蟀和蘑菇 ==========
    {name: "蟋蟀和蘑菇", actions: [
        {type: 'click', page: 1, panel: 6, x: 26, y: 77, wait: 800},
        {type: 'click', page: 1, panel: 6, x: 83, y: 84, wait: 800}
    ]},

    // ========== Manual 19: 收集各种材料 ==========
    {name: "收集各种材料", actions: [
        {type: 'click', page: 1, panel: 4, x: 51, y: 52, wait: 1000},
        {type: 'click', page: 1, panel: 5, x: 7, y: 16, wait: 1000},
        {type: 'click', page: 1, panel: 5, x: 37, y: 89, wait: 1000},
        {type: 'click', page: 1, panel: 7, x: 20, y: 80, wait: 1000},
        {type: 'click', page: 1, panel: 7, x: 80, y: 81, wait: 1000},
        {type: 'click', page: 1, panel: 8, x: 13, y: 82, wait: 1000},
        {type: 'click', page: 1, panel: 8, x: 36, y: 82, wait: 1000},
        {type: 'click', page: 1, panel: 10, x: 32, y: 85, wait: 1000},
        {type: 'click', page: 1, panel: 10, x: 65, y: 63, wait: 1000},
        {type: 'click', page: 1, panel: 12, x: 92, y: 12, wait: 4000}
    ]},

    // ========== Manual 20: 打开井盖 ==========
    {name: "打开井盖", actions: [
        {type: 'click', page: 1, panel: 12, x: 63, y: 70, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 63, y: 70, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 58, y: 81, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 63, y: 70, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 70, y: 81, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 58, y: 78, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 58, y: 78, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 63, y: 70, wait: 800},
        {type: 'click', page: 1, panel: 12, x: 71, y: 79, wait: 4000}
    ]},

    // ========== Manual 21: 入井 ==========
    {name: "入井", actions: [
        {type: 'click', page: 1, panel: 13, x: 42, y: 70, wait: 2000}
    ]},

    // ========== Manual 22: 药罐  ==========
    {name: "入井", actions: [
        {type: 'click', page: 1, panel: 16, x: 85, y: 62, wait: 5000}
    ]},

    // ========== Manual 23: 勺子舀树液  ==========
    {name: "勺子舀树液", actions: [
        {type: 'drag', sliderId: 'page1panel20-477', startCoord: {x: 71, y: 80}, endCoord: {x: 92, y: 67}, valueChange: {from: 0, to: 1}, wait: 1500},
        {type: 'drag', sliderId: 'page1panel20-765', startCoord: {x: 71, y: 80}, endCoord: {x: 47, y: 43}, valueChange: {from: 0, to: 1}, wait: 5000}
    ]},

    // ========== Manual 24: 第一个配方  ==========
    {name: "第一个配方", actions: [
        {type: 'drag',sliderId: 'page1panel20-948',startCoord: {x: 4, y: 69},endCoord: {x: 47, y: 38},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-908',startCoord: {x: 29, y: 48},endCoord: {x: 51, y: 39},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-712',startCoord: {x: 19, y: 44},endCoord: {x: 45, y: 36},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-908',startCoord: {x: 46, y: 65},endCoord: {x: 50, y: 41},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-271',startCoord: {x: 60, y: 56},endCoord: {x: 50, y: 36},valueChange: {from: 0, to: 1},wait: 4000}
    ]},

    // ========== Manual 25: 第二个配方  ==========
    {name: "第二个配方",actions: [
        {type: 'drag',sliderId: 'page1panel20-712',startCoord: {x: 44, y:41},endCoord: {x: 19, y: 44},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-948',startCoord: {x: 47, y: 38},endCoord: {x: 4, y: 69},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-712',startCoord: {x: 19, y: 44},endCoord: {x: 44, y:41},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-378',startCoord: {x: 84, y: 63},endCoord: {x: 46, y: 26},valueChange: {from: 0, to: 1},wait: 1000},
        {type: 'drag',sliderId: 'page1panel20-271', startCoord: {x: 62, y: 51},endCoord: {x: 51, y: 34},valueChange: {from: 0, to: 1},wait: 4000}
    ]},

    // ========== Manual 26: 第三个配方 ==========
    {name: "第三个配方", actions: [
        {type: 'drag', sliderId: 'page1panel20-378', startCoord: {x: 46, y: 28}, endCoord: {x: 84, y: 63}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-876', startCoord: {x: 69, y: 63}, endCoord: {x: 45, y: 34}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-271', startCoord: {x: 62, y: 52}, endCoord: {x: 54, y: 34}, valueChange: {from: 0, to: 1}, wait: 4000}
    ]},

    // ========== Manual 27: 第四个配方 ==========
    {name: "第四个配方", actions: [
        {type: 'drag', sliderId: 'page1panel20-432', startCoord: {x: 48, y: 42}, endCoord: {x: 45, y: 67}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-908', startCoord: {x: 51, y: 40}, endCoord: {x: 29, y: 50}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-602', startCoord: {x: 76, y: 36}, endCoord: {x: 50, y: 40}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-547', startCoord: {x: 25, y: 61}, endCoord: {x: 51, y: 36 }, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-948', startCoord: {x: 4, y: 69}, endCoord: {x: 44, y: 36}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-271', startCoord: {x: 60, y: 49}, endCoord: {x: 52, y:34}, valueChange: {from: 0, to: 1}, wait: 4000}
    ]},

      // ========== Manual 28: 第五个配方 ==========
    {name: "第五个配方", actions: [
        {type: 'drag', sliderId: 'page1panel20-876', startCoord: {x: 45, y: 34}, endCoord: {x: 69, y: 63}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-712', startCoord: {x: 44, y: 41}, endCoord: {x: 71, y: 42}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-948', startCoord: {x: 44, y: 36}, endCoord: {x: 8, y: 58}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-602', startCoord: {x: 50, y: 40}, endCoord: {x: 60, y: 69}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-908', startCoord: {x: 29, y: 51}, endCoord: {x: 52, y: 40}, valueChange: {from: 0, to: 1}, wait: 1000},

        {type: 'drag', sliderId: 'page1panel20-432', startCoord: {x: 46, y: 68}, endCoord: {x: 47, y: 41}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-496', startCoord: {x: 7, y: 85}, endCoord: {x: 48, y: 38}, valueChange: {from: 0, to: 1}, wait: 1000},
        {type: 'drag', sliderId: 'page1panel20-271', startCoord: {x: 61, y: 51}, endCoord: {x: 54, y: 35}, valueChange: {from: 0, to: 1}, wait: 4000}
    ]},

    // ========== Manual 29: 点瓦  ==========
    {name: "点瓦", actions: [
        {type: 'click', page: 1, panel: 21, x: 73, y: 34, wait: 500}
    ]}
];





// ==================== MANUAL合并 ====================

if (window.MANUAL && Array.isArray(window.MANUAL)) {
    // 已存在旧版 MANUAL，追加新内容
    const oldCount = window.MANUAL.length;
    window.MANUAL.push(...NEW_MANUALS);

    console.log(`新内容已合并
    `);

} else {
    // 不存在旧版 MANUAL，直接加载新内容
    window.MANUAL = NEW_MANUALS;

    console.log(`新内容已加载`);
}

})();
// ==================== 主逻辑 ====================

(function() {
'use strict';

// ==================== 工具函数 ====================

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForElement(selector, timeout) {
    if (timeout === undefined) {
        // #page1panel6 需要 3 分钟超时
        if (selector === '#page1panel6') {
            timeout = 180000;
            console.log(`等待蟋蟀两分钟`);
        } else {
            timeout = 8000; // 默认 8 秒
        }

    const start = Date.now();

    while (Date.now() - start < timeout) {
        // 1. 先找到面板容器
        const panelContainer = document.querySelector(selector);

        if (panelContainer) {
            // 2. 查找内层的 .panel-background（绑定监听器的元素）
            const clickTarget = panelContainer.querySelector('.panel-background');

            if (clickTarget) {
                // 返回可点击的内层元素
                return clickTarget;
            } else {
                // 如果没有，继续等待直到达到超时上限
            }
        }

        await sleep(500);
    }

    throw new Error(`元素未找到: ${selector} (等待了 ${timeout / 1000} 秒)`);
}
}

async function waitForReady(timeout = 10000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        if (!document.body.classList.contains('loading')) {
            await sleep(200);
            return true;
        }
        await sleep(100);
    }
    console.warn('等待超时，继续执行');
    return false;
}

// ==================== 视觉反馈 ====================

let TRACE_ENABLED = true;
let TRACE_PERSIST_MS = 2000;
const TRACE_NODES = new Set();

function registerTraceNode(node) {
    TRACE_NODES.add(node);
}

function scheduleTraceCleanup(node, fallbackMs) {
    const keepMs = TRACE_PERSIST_MS;
    const removeDelay = keepMs >= 0 ? keepMs : fallbackMs;
    if (removeDelay < 0) {
        return;
    }
    setTimeout(() => {
        node.remove();
        TRACE_NODES.delete(node);
    }, removeDelay);
}

function clearAllTraces() {
    TRACE_NODES.forEach((node) => node.remove());
    TRACE_NODES.clear();
    console.log('已清空页面轨迹');
}

function highlightClick(x, y) {
    if (!TRACE_ENABLED) {
        return;
    }

    const dot = document.createElement('div');
    dot.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border-radius: 50%;
        background: rgba(255, 0, 0, 0.5);
        border: 2px solid red;
        pointer-events: none;
        z-index: 999999;
        animation: pulse 0.5s ease-out;
    `;
    document.body.appendChild(dot);
    registerTraceNode(dot);
    scheduleTraceCleanup(dot, 500);
}

function highlightDrag(startX, startY, endX, endY) {
    if (!TRACE_ENABLED) {
        return;
    }

    const line = document.createElement('div');

    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

    line.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: ${length}px;
        height: 3px;
        background: linear-gradient(to right, rgba(0, 100, 255, 0.8), rgba(0, 200, 255, 0.8));
        transform-origin: 0 50%;
        transform: rotate(${angle}deg);
        pointer-events: none;
        z-index: 999999;
        animation: dragFade 1s ease-out;
    `;

    document.body.appendChild(line);
    registerTraceNode(line);

    // 起点标记
    const startDot = document.createElement('div');
    startDot.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: 12px;
        height: 12px;
        margin: -6px 0 0 -6px;
        border-radius: 50%;
        background: rgba(0, 100, 255, 0.6);
        border: 2px solid blue;
        pointer-events: none;
        z-index: 999999;
        animation: dragFade 1s ease-out;
    `;
    document.body.appendChild(startDot);
    registerTraceNode(startDot);

    // 终点标记
    const endDot = document.createElement('div');
    endDot.style.cssText = `
        position: fixed;
        left: ${endX}px;
        top: ${endY}px;
        width: 12px;
        height: 12px;
        margin: -6px 0 0 -6px;
        border-radius: 50%;
        background: rgba(0, 200, 255, 0.6);
        border: 2px solid cyan;
        pointer-events: none;
        z-index: 999999;
        animation: dragFade 1s ease-out;
    `;
    document.body.appendChild(endDot);
    registerTraceNode(endDot);

    scheduleTraceCleanup(line, 1000);
    scheduleTraceCleanup(startDot, 1000);
    scheduleTraceCleanup(endDot, 1000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(0.5); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
    @keyframes dragFade {
        0% { opacity: 1; }
        70% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==================== 操作执行 ====================

let FOCUS_BEFORE_ACTION = true;
let FOCUS_ANIMATION_WAIT = 400;

async function focusViewportAt(clientX, clientY) {
    if (!FOCUS_BEFORE_ACTION) {
        return;
    }

    const targetScrollX = Math.max(0, window.scrollX + clientX - window.innerWidth / 2);
    const targetScrollY = Math.max(0, window.scrollY + clientY - window.innerHeight * 0.55);

    window.scrollTo({
        left: targetScrollX,
        top: targetScrollY,
        behavior: 'smooth'
    });

    await sleep(FOCUS_ANIMATION_WAIT);
}

async function simulateClick({page, panel, x, y, wait = 1000, desc = ''}) {
    const selector = `#page${page}panel${panel}`;
    const element = await waitForElement(selector);

    let rect = element.getBoundingClientRect();
    let clientX = rect.left + rect.width * x / 100;
    let clientY = rect.top + rect.height * y / 100;

    await focusViewportAt(clientX, clientY);

    rect = element.getBoundingClientRect();
    clientX = rect.left + rect.width * x / 100;
    clientY = rect.top + rect.height * y / 100;

    highlightClick(clientX, clientY);

    const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: clientX,
        clientY: clientY,
        view: window
    });

    element.dispatchEvent(clickEvent);

    const descText = desc ? ` (${desc})` : '';
    console.log(`  ✓ Panel ${panel} (${x}%, ${y}%)${descText}`);

    await waitForReady();
    await sleep(wait);
}

async function simulateDrag({sliderId, startCoord, endCoord, valueChange, wait = 1500}) {
    const element = document.getElementById(sliderId);
    if (!element) {
        console.error(`  ✗ 元素未找到: ${sliderId}`);
        return;
    }

    // 检测元素类型：滑块 vs 可拖拽面板
    const isDraggablePanel = element.hasAttribute('candrag') && element.getAttribute('candrag') === 'true';

    if (isDraggablePanel) {
        // ========== 可拖拽面板模式 ==========
        console.log(`  🔄 拖拽面板 ${sliderId}`);

        // 获取父容器（通常是页面容器）
        const parentElement = element.parentElement;
        if (!parentElement) {
            console.error('  ✗ 拖拽面板父容器未找到');
            return;
        }

        let parentRect = parentElement.getBoundingClientRect();

        // 关键修正：startCoord 和 endCoord 是相对于父容器的百分比位置
        // 需要转换为绝对屏幕坐标
        let startX = parentRect.left + parentRect.width * startCoord.x / 100;
        let startY = parentRect.top + parentRect.height * startCoord.y / 100;
        let endX = parentRect.left + parentRect.width * endCoord.x / 100;
        let endY = parentRect.top + parentRect.height * endCoord.y / 100;

        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        await focusViewportAt(midX, midY);

        parentRect = parentElement.getBoundingClientRect();
        startX = parentRect.left + parentRect.width * startCoord.x / 100;
        startY = parentRect.top + parentRect.height * startCoord.y / 100;
        endX = parentRect.left + parentRect.width * endCoord.x / 100;
        endY = parentRect.top + parentRect.height * endCoord.y / 100;

        // 显示拖拽轨迹
        highlightDrag(startX, startY, endX, endY);

        // pointerdown + mousedown
        element.dispatchEvent(new PointerEvent('pointerdown', {
            bubbles: true, cancelable: true, view: window,
            clientX: startX, clientY: startY,
            button: 0, buttons: 1, pointerId: 1, pointerType: 'mouse', isPrimary: true
        }));

        element.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true, cancelable: true, view: window,
            clientX: startX, clientY: startY, button: 0, buttons: 1
        }));

        await sleep(50);

        // pointermove + mousemove (2次插值)
        for (let i = 0; i < 2; i++) {
            const currentX = startX + (endX - startX) * (i + 1) / 2;
            const currentY = startY + (endY - startY) * (i + 1) / 2;

            element.dispatchEvent(new PointerEvent('pointermove', {
                bubbles: true, cancelable: true, view: window,
                clientX: currentX, clientY: currentY,
                button: 0, buttons: 1, pointerId: 1, pointerType: 'mouse', isPrimary: true
            }));

            element.dispatchEvent(new MouseEvent('mousemove', {
                bubbles: true, cancelable: true, view: window,
                clientX: currentX, clientY: currentY, button: 0, buttons: 1
            }));

            await sleep(30);
        }

        await sleep(100);

        // pointerup + mouseup
        element.dispatchEvent(new PointerEvent('pointerup', {
            bubbles: true, cancelable: true, view: window,
            clientX: endX, clientY: endY,
            button: 0, buttons: 0, pointerId: 1, pointerType: 'mouse', isPrimary: true
        }));

        element.dispatchEvent(new MouseEvent('mouseup', {
            bubbles: true, cancelable: true, view: window,
            clientX: endX, clientY: endY, button: 0, buttons: 0
        }));


    } else {
        // ========== 滑块模式 (原有逻辑保持不变) ==========
        console.log(`  🔄 ${sliderId}: ${valueChange.from.toFixed(2)}% → ${valueChange.to.toFixed(2)}%`);

        const back = element.querySelector('.rangeslider-back');
        const knob = element.querySelector('.rangeslider-knob');

        if (!back || !knob) {
            console.error(`  ✗ 滑块组件未找到`);
            return;
        }

        const preRect = element.getBoundingClientRect();
        await focusViewportAt(preRect.left + preRect.width / 2, preRect.top + preRect.height / 2);

        const sliderRect = element.getBoundingClientRect();
        const backRect = back.getBoundingClientRect();

        const startY = sliderRect.top + sliderRect.height * startCoord.y / 100;
        const endY = sliderRect.top + sliderRect.height * endCoord.y / 100;
        const centerX = backRect.left + backRect.width / 2;

        // 显示拖拽轨迹
        highlightDrag(centerX, startY, centerX, endY);

        // pointerdown + mousedown
        back.dispatchEvent(new PointerEvent('pointerdown', {
            bubbles: true, cancelable: true, view: window,
            clientX: centerX, clientY: startY,
            button: 0, buttons: 1, pointerId: 1, pointerType: 'mouse', isPrimary: true
        }));

        back.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true, cancelable: true, view: window,
            clientX: centerX, clientY: startY, button: 0, buttons: 1
        }));

        await sleep(50);

        // 2次 pointermove + mousemove
        for (let i = 0; i < 2; i++) {
            const currentY = startY + (endY - startY) * (i + 1) / 2;

            back.dispatchEvent(new PointerEvent('pointermove', {
                bubbles: true, cancelable: true, view: window,
                clientX: centerX, clientY: currentY,
                button: 0, buttons: 1, pointerId: 1, pointerType: 'mouse', isPrimary: true
            }));

            back.dispatchEvent(new MouseEvent('mousemove', {
                bubbles: true, cancelable: true, view: window,
                clientX: centerX, clientY: currentY, button: 0, buttons: 1
            }));

            await sleep(30);
        }

        await sleep(100);

        // pointerup + mouseup
        back.dispatchEvent(new PointerEvent('pointerup', {
            bubbles: true, cancelable: true, view: window,
            clientX: centerX, clientY: endY,
            button: 0, buttons: 0, pointerId: 1, pointerType: 'mouse', isPrimary: true
        }));

        back.dispatchEvent(new MouseEvent('mouseup', {
            bubbles: true, cancelable: true, view: window,
            clientX: centerX, clientY: endY, button: 0, buttons: 0
        }));

        await sleep(100);

        const finalValue = parseFloat(knob.style.bottom) || 0;
        console.log(`  ✓ 完成 (${finalValue.toFixed(2)}%)`);
    }

    await waitForReady();
    await sleep(wait);
}

// ==================== 初始化函数 ====================

async function initialize(operationName) {
    console.log(`\n🔍 检测到操作: ${operationName}`);
    console.log('开始执行初始化...');

    const bodyElement = document.body;
    const currentPage = bodyElement.getAttribute('page');

    switch(operationName) {
        case "窗户、沙漏":
            if (currentPage === "1") {
                try {
                    await simulateClick({page: 1, panel: 0, x: 17, y: 13, wait: 3000,desc: '切换回白天'});
                    console.log('✅ 已切换到 Page 0');
                } catch (error) {
                    console.warn('页面切换失败');
                }
            }
            break;

        case "树液桶":
            if (currentPage === "1") {
                break;
            }

            try {
                if (currentPage === "0") {
                    await simulateClick({page: 0, panel: 0, x: 17, y: 16, wait: 3000, desc: '切换到夜晚'});
                } else if (currentPage === "78") {
                    await simulateClick({page: 78, panel: 0, x: 41, y: 90, wait: 3000, desc: '返回夜晚'});
                } else {
                    console.warn(`⚠️ 未知的起始页面: Page ${currentPage}`);
                }
            } catch (error) {
                console.warn('⚠️ 页面切换失败:', error);
            }
            break;

        default:
        break;

    }

    console.log('✅ 初始化完成\n');
    return true;
}

// ==================== 初始化和复位 ====================
const OPERATIONS_REQUIRING_INIT = [
    "窗户、沙漏",
    "树液桶"
];

// ==================== 控制器 ====================

const Controller = {
    config: null,
    currentStage: 0,
    isRunning: false,
    autoMode: false,
    isInitialized: false,

    async executeStage(index) {
        if (!this.config) {
            console.error('错误: 未找到 MANUAL 配置，请先加载 Complete Manual.js');
            return false;
        }

        if (index < 0 || index >= this.config.length) {
            console.error('阶段索引超出范围');
            return false;
        }

        this.isRunning = true;
        const stage = this.config[index];

        console.log(`\n${'='.repeat(50)}`);
        console.log(`执行阶段 ${index + 1}/${this.config.length}: ${stage.name}`);
        console.log(`${'='.repeat(50)}`);

        try {
            for (let i = 0; i < stage.actions.length; i++) {
                if (!this.isRunning) {
                    console.log('执行已停止');
                    return false;
                }

                const action = stage.actions[i];
                console.log(`[${i + 1}/${stage.actions.length}]`);

                if (action.type === 'click') {
                    await simulateClick(action);
                } else if (action.type === 'drag') {
                    await simulateDrag(action);
                }
            }

            console.log(`阶段 ${index + 1} 完成`);
            this.isRunning = false;
            return true;

        } catch (error) {
            console.error(`执行出错:`, error);
            this.isRunning = false;
            return false;
        }
    },

    async next() {
    // 1. 检查配置是否加载
    if (!this.config) {
        this.config = window.MANUAL;
        if (!this.config) {
            console.error('❌ 错误: 未找到 MANUAL 配置，请先加载 Complete Manual.js');
            return;
        }
    }

    // 2. 检查是否正在执行
    if (this.isRunning) {
        console.warn('⚠️ 正在执行中，请等待完成');
        return;
    }

    // 3. 检查是否已完成所有阶段
    if (this.currentStage >= this.config.length) {
        console.log('\n🎉 所有阶段已完成！');
        return;
    }

    // 4. 获取当前阶段信息
    const currentOperation = this.config[this.currentStage];
    const operationName = currentOperation.name;

    // 5. 检查当前操作是否需要初始化
    if (OPERATIONS_REQUIRING_INIT.includes(operationName)) {
        console.log(`\n${'━'.repeat(50)}`);
        console.log(`⚙️  检测到需要初始化的操作: ${operationName}`);
        console.log(`${'━'.repeat(50)}`);

        try {
            await initialize(operationName);
        } catch (error) {
            console.error('❌ 初始化失败:', error);
            console.log('尝试继续执行...\n');
        }
    }

    // 6. 执行当前阶段
    const success = await this.executeStage(this.currentStage);

    // 7. 处理执行结果
    if (success) {
        this.currentStage++;

        if (this.currentStage < this.config.length) {
            console.log(`\n💡 输入 next() 继续下一阶段`);

            // 自动模式下继续执行
            if (this.autoMode) {
                await sleep(1000);
                await this.next();
            }
        } else {
            console.log('\n🎊 所有阶段已完成！');
        }
    } else {
        console.error('❌ 当前阶段执行失败');
    }
},

    async auto() {

    if (!this.config) {
        this.config = window.MANUAL;
        if (!this.config) {
            console.error('❌ 错误: 未找到 MANUAL 配置，请先加载 Complete Manual.js');
            return;
        }
    }

    console.log('\n🚀 启动自动模式');
    console.log(`共 ${this.config.length} 个阶段，将自动执行所有步骤\n`);
    this.autoMode = true;

    await this.next();
},

    jumpTo(stageNumber) {
    // 1. 检查配置是否加载
    if (!this.config) {
        this.config = window.MANUAL;
        if (!this.config) {
            console.error('❌ 错误: 未找到 MANUAL 配置，请先加载 Complete Manual.js');
            return;
        }
    }

    // 2. 验证阶段编号
    const index = stageNumber - 1;
    if (index < 0 || index >= this.config.length) {
        console.error(`❌ 阶段编号无效，请输入 1-${this.config.length} 之间的数字`);
        return;
    }

    // 3. 设置当前阶段
    this.currentStage = index;
    const operationName = this.config[index].name;

    // 4. ⭐ 增强的用户提示
    console.log(`\n${'━'.repeat(50)}`);
    console.log(`📍 已跳转到阶段 ${stageNumber}/${this.config.length}`);
    console.log(`📋 操作名称: ${operationName}`);

    // 5. 提示是否需要初始化
    if (OPERATIONS_REQUIRING_INIT.includes(operationName)) {
        console.log(`⚙️  此操作需要初始化，执行时将自动进行`);
    }

    console.log(`\n💡 输入 next() 开始执行此阶段`);
    console.log(`${'━'.repeat(50)}\n`);
},

    stop() {
        this.isRunning = false;
        this.autoMode = false;
        console.log('已停止执行');
    }
};

// ==================== 全局接口 ====================

window.next = () => Controller.next();
window.auto = () => Controller.auto();
window.jumpTo = (n) => Controller.jumpTo(n);
window.stop = () => Controller.stop();
window.focusOn = () => {
    FOCUS_BEFORE_ACTION = true;
    console.log('已开启自动聚焦');
};
window.focusOff = () => {
    FOCUS_BEFORE_ACTION = false;
    console.log('已关闭自动聚焦');
};
window.focusWait = (ms) => {
    const value = Number(ms);
    if (!Number.isFinite(value) || value < 0) {
        console.warn('focusWait(ms) 参数无效，请输入大于等于 0 的数字');
        return;
    }
    FOCUS_ANIMATION_WAIT = value;
    console.log(`聚焦等待已设置为 ${FOCUS_ANIMATION_WAIT}ms`);
};
window.traceOn = () => {
    TRACE_ENABLED = true;
    console.log('已开启操作留痕');
};
window.traceOff = () => {
    TRACE_ENABLED = false;
    console.log('已关闭操作留痕');
};
window.traceWait = (ms) => {
    const value = Number(ms);
    if (!Number.isFinite(value) || value < -1) {
        console.warn('traceWait(ms) 参数无效，请输入 -1 或大于等于 0 的数字');
        return;
    }
    TRACE_PERSIST_MS = value;
    if (TRACE_PERSIST_MS === -1) {
        console.log('轨迹将永久保留，直到调用 traceClear()');
    } else {
        console.log(`轨迹停留时长已设置为 ${TRACE_PERSIST_MS}ms`);
    }
};
window.traceClear = () => clearAllTraces();

// ==================== 初始化提示 ====================

console.log(`
${'━'.repeat(60)}
🎮 饥荒解谜自动化脚本
${'━'.repeat(60)}
脚本已就绪

命令说明：
auto()      - 自动执行所有阶段
next()      - 执行下一阶段
jumpTo(n)   - 跳转到第 n 阶段
stop()      - 停止执行
focusOn()   - 开启自动聚焦操作区域
focusOff()  - 关闭自动聚焦操作区域
focusWait(n)- 设置聚焦后等待时间(毫秒)
traceOn()   - 开启操作留痕
traceOff()  - 关闭操作留痕
traceWait(n)- 设置轨迹停留时长(毫秒，-1为永久保留)
traceClear()- 清空当前页面所有轨迹

注意：执行期间请勿刷新页面
${'━'.repeat(60)}
`);

// 检查 MANUAL 是否已加载
if (window.MANUAL) {
    Controller.config = window.MANUAL;
    console.log(`✓ 已加载 ${window.MANUAL.length} 个操作阶段\n`);
} else {
    console.log('⚠ 请先加载 Complete Manual.js\n');
}

})(); 
