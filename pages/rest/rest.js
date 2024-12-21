Page({
  data: {
    themes: [
      {
        name: '身体拉伸',
        color: '#4CAF50',
        tips: [
          '转动眼球30下',
          '伸展手臂转动肩膀',
          '站起来活动5分钟'
        ],
        encouragement: '真棒！身体感觉更轻松了吧！'
      },
      {
        name: '内心冥想',
        color: '#FFC107',
        tips: [
          '深呼吸5次',
          '闭眼静坐片刻',
          '想象美好的画面'
        ],
        encouragement: '你的心灵已经平静如水！'
      },
      {
        name: '有趣生活',
        color: '#FF9800',
        tips: [
          '想一件让你开心的小事',
          '给自己一个微笑',
          '跟周围的人说句暖心话'
        ],
        encouragement: '生活因你而精彩！'
      }
    ],
    currentTheme: null,
    currentTip: '',
    timeLeft: 60,
    isPaused: false,
    isFinished: false
  },

  onLoad() {
    this.selectRandomTheme()
    this.startTimer()
  },

  selectRandomTheme() {
    const randomIndex = Math.floor(Math.random() * this.data.themes.length)
    const theme = this.data.themes[randomIndex]
    const tipIndex = Math.floor(Math.random() * theme.tips.length)
    
    this.setData({
      currentTheme: theme,
      currentTip: theme.tips[tipIndex]
    })
  },

  startTimer() {
    this.timer = setInterval(() => {
      if (!this.data.isPaused) {
        if (this.data.timeLeft > 0) {
          this.setData({
            timeLeft: this.data.timeLeft - 1
          })
        } else {
          clearInterval(this.timer)
          this.showEncouragement()
        }
      }
    }, 1000)
  },

  togglePause() {
    this.setData({
      isPaused: !this.data.isPaused
    })
  },

  showEncouragement() {
    this.setData({
      isFinished: true
    })
  },

  backToHome() {
    wx.navigateBack()
  },

  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}) 