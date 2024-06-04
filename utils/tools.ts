export const createAnimationOptions = (origin: string, duration: number, scale: number) => {
    return {
        // 动画的时长
        duration: duration || 800,
        // 延迟时间
        delay: 100,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: origin || 'bottom',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
        useDelay: 'always',
        // 在移动端是否使用动画
        // mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '5rem',
        // 其他可用的动画效果
        opacity: 0.01,
        // 执行速度 线性函数啥的
        easing: 'ease-in-out',
        // 执行方式（缩放）
        scale: scale || 0.9,
    };
}