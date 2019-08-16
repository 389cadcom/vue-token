var countdown = {
	template: `<div>
				<p v-if="msTime.show">
					<span >{{ tipShow? tipText : tipTextEnd}}:</span>
					<span v-if="msTime.day>0"><span>{{msTime.day}}</span>天</span>
					<span>{{msTime.hour}}</span>:<span>{{msTime.minutes}}</span>:<span>{{msTime.seconds}}</span>
				</p>
				<p v-else>{{endText}}</p>
			</div>
		`,
	replace: true,
	data() {
		return {
			tipShow: true,
			msTime: {
				show   : false, // 倒计时状态
				day    : '',    // 天
				hour   : '',    // 小时
				minutes: '',    // 分钟
				seconds: ''     // 秒
			},
			star    : '', 		// 活动开始时间
			end     : '',    // 活动结束时间
			current : ''     // 当前时间
		};
	},
	props: {
		tipText: {
			type: String,
			default: '距离开始'
		},
		tipTextEnd: {
			type: String,
			default: '距离结束'
		},
		//时间控件ID
		id: {
			type: String,
			default: '1'
		},
		//当前时间
		currentTime: {
			type: Number
		},
		// 活动开始时间
		startTime: {
			type: Number
		},
		// 活动结束时间
		endTime: {
			type: Number
		},
		// 倒计时结束显示文本
		endText: {
			type: String,
			default: '已结束'
		},
		//是否开启秒表倒计，未完成
		secondsFixed: {
			type: Boolean,
			defaule: false
		}
	},
	mounted() {
		//判断是秒还是毫秒
    this.star = this.startTime.toString().padEnd(13, '0')*1
    this.end  = this.endTime.toString().padEnd(13, '0')*1
    this.current = this.currentTime ? this.currentTime.toString().padEnd(13, '0')*1 : Date.now()

		if (this.end < this.current) {            //活动已结束
			this.msTime.show = false;
			this.endHandler();
		} else if (this.current < this.star) {    //尚未开始
			this.tipShow = true
			setTimeout(() => {
				this.runTime(this.star, this.current, this.startHandler);
			}, 1);
		} 
		
		/**
		 * 执行活动开始倒计时--结束时间大于当前并且开始时间小于当前时间
		 */
    if((this.end > this.current && this.star < this.current) || this.star == this.current) {
			this.tipShow = false
			this.msTime.show = true;
      this.$emit('start_callback', this.msTime.show);  			//TODO
      
			this.runTime(this.end, this.star, this.endHandler, true);
		}
	},
	methods: {
		//执行
		runTime(startTime, endTime, callback, type) {
			let msTime = this.msTime;
      let distance = startTime - endTime;
      
			if (distance > 0) {
        this.msTime.show = true;
        var obj = this.getRunTime(distance)
        Object.assign(msTime, obj)

				setTimeout(() => {
					if (type) {
						this.runTime(this.end, endTime + 1000, callback, true);
					} else {
						this.runTime(this.star, endTime + 1000, callback);
					}
				}, 1000);
			} else {
				callback && callback();
			}
    },
    getRunTime(time) {
      var day     = Math.floor(time / 1000 / 60 / 60 / 24);
      var hour    = Math.floor(time / 1000 / 60 / 60 % 24);
      var minutes = Math.floor(time / 1000 / 60 % 60);
      var seconds = Math.floor(time / 1000 % 60);

      return {
        day,
        hour: String(hour).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      }
    },
    //活动开始
		startHandler() {
			this.$set(this, 'tipShow', false);
			this.$emit('start_callback', this.msTime.show);
			
			setTimeout(() => {
				this.runTime(this.end, this.star, this.endHandler, true);
			}, 1);
    },
    //活动结束
		endHandler() {
			this.msTime.show = false;
			this.$emit('end_callback', this.msTime.show);
		}
	}
};
