// index.js
Page({
  data: {
    imageUrl: '',
    isLoading: false,
    isTimerVisible: false,
    timeLeft: 60,
    progressWidth: 100,
    isPaused: false,
    timer: null,
    isCollapsing: false,
    isShowingCongrats: false,
    congratsImageUrl: ''
  },

  handleRest() {
    this.setData({ 
      isLoading: true,
      isTimerVisible: true,
      timeLeft: 60,
      progressWidth: 100,
      isCollapsing: false,
      isShowingCongrats: false
    });
    
    this.startTimer();

    // TODO: 调用 coze API 获取图片
    setTimeout(() => {
      this.setData({
        imageUrl: 'https://example.com/sample-image.jpg',
        isLoading: false
      });
    }, 1000);
  },

  handleClose() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
    this.setData({
      isTimerVisible: false,
      imageUrl: '',
      timeLeft: 60,
      progressWidth: 100,
      isPaused: false,
      isCollapsing: false,
      isShowingCongrats: false
    });
  },

  startTimer() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }

    const timer = setInterval(() => {
      if (this.data.timeLeft > 0 && !this.data.isPaused) {
        this.setData({
          timeLeft: this.data.timeLeft - 1,
          progressWidth: (this.data.timeLeft - 1) * 100 / 60
        });
      } else if (this.data.timeLeft <= 0) {
        clearInterval(timer);
        this.showCongratulations();
      }
    }, 1000);

    this.setData({ timer });
  },

  showCongratulations() {
    this.setData({ 
      isCollapsing: true,
      congratsImageUrl: 'https://i.pinimg.com/736x/12/52/8e/12528eb46daff6891728a1b91a765628.jpg'
    });
    
    setTimeout(() => {
      this.setData({
        isShowingCongrats: true,
        isCollapsing: false
      });
    }, 300);
  },

  handlePause() {
    this.setData({
      isPaused: !this.data.isPaused
    });
  },

  onUnload() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
  }
});
